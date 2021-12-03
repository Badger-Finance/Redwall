import React, { useContext, useEffect, useState } from 'react';
import { ATTACKER_ADDRESS, HACKER_MIN_APPROVAL } from '../../constants';
import { ApprovalFragment, UserFragment } from '../../graphql/generated/badger';
import { SdkContext } from '../../sdk-context';
import { Account, BadgerAPI } from '@badger-dao/sdk';
import { BigNumber, ethers } from 'ethers';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function AttackerInfo(): JSX.Element {
  const api = new BadgerAPI();
  const sdk = useContext(SdkContext);
  const [attackerData, setAttackerData] = useState<UserFragment | null>(null);
  const [userApprovals, setUserApprovals] = useState<
    Record<string, ApprovalFragment[]>
  >({});
  const [vaultApprovals, setVaultApprovals] = useState<Record<string, number>>({});
  const [vaultAmounts, setVaultAmounts] = useState<Record<string, number>>({});
  const [userAmounts, setUserAmounts] = useState<Record<string, number>>({});

  useEffect(() => {
    async function queryAttacker() {
      const user = await sdk.User({
        id: ATTACKER_ADDRESS,
      });

      if (user) {
        const attacker = user.user;
        setAttackerData(attacker);

        const vaultApprovals: Record<string, number> = {};
        const userApprovals: Record<string, ApprovalFragment[]> = {};
        attacker.sentApprovals.forEach((approval) => {
          const { owner, token } = approval;
          if (!userApprovals[owner.id]) {
            userApprovals[owner.id] = [];
          }
          const tokenAddress = ethers.utils.getAddress(token.id);
          if (!vaultApprovals[tokenAddress]) {
            vaultApprovals[tokenAddress] = 0;
          }
          userApprovals[owner.id].push(approval);
          vaultApprovals[tokenAddress]++;
        });
        setUserApprovals(userApprovals);
        console.log(vaultApprovals);
        setVaultApprovals(vaultApprovals);

        const userAccounts: Record<string, Account> = Object.fromEntries(await Promise.all(Object.keys(userApprovals).map(async (acc) => {
          return [acc, await api.loadAccount(acc)];
        })));

        const vaultTotals: Record<string, number> = {};
        const userTotals: Record<string, number> = {};
        attacker.sentApprovals.forEach((approval) => {
          const { owner, token } = approval;
          const account = userAccounts[owner.id];
          const vault = account.data[ethers.utils.getAddress(token.id)];
          if (!vaultTotals[token.id]) {
            vaultTotals[token.id] = 0;
          }
          if (!userTotals[owner.id]) {
            userTotals[owner.id] = 0;
          }
          vaultTotals[token.id] += vault.value;
          userTotals[owner.id] += vault.value;
        });
        setVaultAmounts(vaultTotals);
        setUserAmounts(userTotals);
      }
    }
    queryAttacker();
  }, []);

  return (
    <div className="flex flex-col flex-grow h-full w-full px-4 md:px-12 bg-cave py-16 text-skull">
      <div className="flex flex-col mb-10">
        <span className="text-lg cursor-default">Badger Exploiter</span>
        <span
          className="text-2xl text-white cursor-pointer"
          onClick={() =>
            window.open(
              'https://etherscan.io/address/0x1fcdb04d0c5364fbd92c73ca8af9baa72c269107',
            )
          }
        >
          0x1fcdb04d0c5364fbd92c73ca8af9baa72c269107
        </span>
        <span className="text-md text-raspberry text-bold">
          {Object.keys(userApprovals).length} affected users
        </span>
      </div>
      {!attackerData && (
        <div className="flex flex-grow w-full h-full text-2xl text-raspberry items-center justify-center">
          <span>Loading Attacker Data</span>
        </div>
      )}
      {attackerData && (
        <div className="flex flex-col">
          <div className="mt-4 text-md text-black bg-raspberry p-4 mb-2">
            Approvals Overview
          </div>
          <div className="flex flex-wrap justify-around mb-10">
            {attackerData.cumulativeApprovals.map((approval) => {
              const { token, approvals, revokes } = approval;
              return (
                <div
                  key={token.id}
                  className="flex flex-col bg-gray-100 p-4 m-1 text-black my-3 shadow-lg"
                >
                  <span className="text-xl mb-1 text-haze font-bold leading-tight cursor-pointer" onClick={() => window.open(`https://etherscan.io/address/${token.id}`)}>{token.name}</span>
                    <span className="text-xl font-bold">
                      {formatter.format(vaultAmounts[token.id] ?? 0)} at risk
                    </span>
                  <span className="text-lg">
                    {vaultApprovals[ethers.utils.getAddress(token.id)] ?? 0} outstanding approvals
                  </span>
                  <div className="flex space-x-3 leading-tighte text-sm text-gray">
                    <div className="flex">{approvals} total approvals</div>
                    <div className="flex">{revokes} total revokes</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 text-md text-black bg-raspberry p-4 mb-2">
            At Risk Users
          </div>
          {Object.keys(userApprovals).sort((a, b) => {
            const userA = userAmounts[a] ?? 0;
            const userB = userAmounts[b] ?? 0;
            return userB - userA;
          }).map((user) => {
            const approvals = userApprovals[user];
            const atRisk = userAmounts[user] ?? 0;
            const compromised = atRisk <= 0;
            return (
              <div
                key={user}
                className={"flex flex-col p-2 m-2 text-black" + (compromised ? ' bg-red-200' : ' bg-skull')}
              >
                <div className="flex w-full justify-between items-center">
                  <span className="text-lg font-bold p-2 cursor-pointer text-haze" onClick={() => window.open(`https://etherscan.io/address/${user}`)}>{`${user} • ${formatter.format(atRisk)} at risk${compromised ? ' • [COMPROMISED]' : ''}`}</span>
                  <span className="font-semibold mr-4">
                    {approvals.length} approvals
                  </span>
                </div>
                {approvals.map((approval) => {
                  const { amount, id, hash, owner, timestamp, token } = approval;
                  const approvalAmount = BigNumber.from(amount).gte(0)
                    ? 'Max'
                    : ethers.utils.formatEther(amount);
                  return (
                    <div key={id} className="flex p-2 m-2 text-black">
                      <div className="flex flex-col flex-grow cursor-pointer">
                        <span className="font-semibold text-sm text-raspberry" onClick={() => window.open(`https://etherscan.io/tx/${hash}`)}>
                          {hash}
                        </span>
                        <span className="font-semibold text-xs text-cave">
                          Approved at{' '}
                          {new Date(timestamp * 1000).toLocaleString()}
                        </span>
                      </div>
                      <span className="flex items-center mx-4">
                        {token.name}
                      </span>
                      <span className="flex items-center mx-4">
                        {approvalAmount}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AttackerInfo;
