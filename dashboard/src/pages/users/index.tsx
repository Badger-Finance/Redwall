import { ethers } from 'ethers';
import app from 'next/app';
import React, { useContext, useEffect, useState } from 'react';
import { ATTACKER_ADDRESS } from '../../constants';
import { UserFragment } from '../../graphql/generated/badger';
import { SdkContext } from '../../sdk-context';
import AT_RISK_DATA from '../../users.json';

interface AtRiskItem {
  victim: string;
  asset: string;
  hash: string;
  block_number: number;
  data: string;
}

const data = AT_RISK_DATA as AtRiskItem[];
const users = [...new Set(data.map((i) => i.victim))];
const userData: Record<string, AtRiskItem[]> = {};

data.forEach((i) => {
  if (!userData[i.victim]) {
    userData[i.victim] = [];
  }
  userData[i.victim].push(i);
});

function AccountRoot(): JSX.Element {
  const sdk = useContext(SdkContext);
  const [currentUserData, setCurrentUserData] = useState(userData);
  const [loadedData, setLoadedData] = useState(userData);
  const [search, setSearch] = useState('');

  const handleSearch = (searchedAddress: string) => {
    if (!searchedAddress) {
      setSearch(searchedAddress);
      setCurrentUserData(loadedData);
      return;
    }

    const filteredVictimsKeys = Object.keys(loadedData).filter((key) =>
      loadedData[key].some((entry) => entry.victim.includes(searchedAddress)),
    );

    const filteredVictims = filteredVictimsKeys.reduce(
      (obj, key) => ({ ...obj, [key]: loadedData[key] }),
      {},
    );

    setSearch(searchedAddress);
    setCurrentUserData(filteredVictims);
  };

  useEffect(() => {
    async function queryUserData(account: string) {
      const user = await sdk.User({
        id: account.toLowerCase(),
      });
      if (!user.user) {
        return null;
      }
      return user.user;
    }
    async function updateAtRiskData() {
      const userRecords: Record<string, UserFragment> = Object.fromEntries(
        await Promise.all(
          users.map(async (u) => [
            ethers.utils.getAddress(u),
            await queryUserData(u),
          ]),
        ),
      );

      const newUserData: Record<string, AtRiskItem[]> = {};
      const missingAccounts = [];

      for (const [key, value] of Object.entries(loadedData)) {
        const userAddress = ethers.utils.getAddress(key);
        const stillAtRisk = [];

        const userAccount = userRecords[userAddress];

        if (!userAccount) {
          missingAccounts.push(userAddress);
          continue;
        }

        const includedApprovals = new Set();
        const activeApprovals = userAccount.approvals;

        for (const approval of value) {
          const isActive = activeApprovals.find((a) => {
            if (Number(a.amount) === 0) {
              return false;
            }
            return (
              a.token.id === approval.asset.toLowerCase() &&
              !includedApprovals.has(approval.asset)
            );
          });
          if (isActive) {
            stillAtRisk.push(approval);
            includedApprovals.add(approval.asset);
          }
        }

        if (stillAtRisk.length > 0) {
          newUserData[key] = stillAtRisk;
        }
      }

      setLoadedData(newUserData);
    }
    updateAtRiskData();
  }, []);

  return (
    <div className="flex flex-col flex-grow h-full w-full px-4 md:px-12 bg-cave py-16 text-gray-100">
      <span className="text-3xl">User Approval Report</span>
      <span className="text-lg text-raspberry font-semibold">
        {Object.values(userData).flatMap((v) => v).length} poisoned approvals
      </span>
      <span className="text-lg text-raspberry font-semibold">
        {Object.keys(userData).length} poisoned accounts
      </span>
      <div className="flex sm:mt-4 lg:mt-0 lg:justify-end">
        <input
          type="search"
          placeholder="Search Address"
          className="text-black p-3"
          value={search}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-4 my-4">
        {users
          .filter((u) => currentUserData[u] && currentUserData[u].length > 0)
          .sort((a, b) => userData[b].length - userData[a].length)
          .map((acc) => {
            return (
              <div
                key={acc}
                className="flex flex-col flex-1 bg-haze shadow-lg w-full border border-skull text-gray-100 tracking-tight p-3 break-words"
              >
                <div
                  className="text-lg font-semibold"
                  onClick={() =>
                    window.open(`https://etherscan.io/address/${acc}`)
                  }
                >
                  {acc}
                </div>
                <span className="text-md">
                  {userData[acc].length} poisoned approvals
                </span>
                <div className="flex flex-col items-center p-2 text-black font-semibold">
                  {userData[acc].map((a) => {
                    return (
                      <div
                        key={a.hash}
                        className="my-1 cursor-pointer"
                        onClick={() =>
                          window.open(`https://etherscan.io/tx/${a.hash}`)
                        }
                      >
                        {a.asset}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AccountRoot;
