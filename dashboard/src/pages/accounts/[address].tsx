import React, { useContext, useEffect, useState } from 'react';
import { ATTACKER_ADDRESS } from '../../constants';
import { ApprovalFragment, UserFragment } from '../../graphql/generated/badger';
import { SdkContext } from '../../sdk-context';
import { Account, BadgerAPI, PriceSummary } from '@badger-dao/sdk';
import { BigNumber, ethers } from 'ethers';
import { useRouter } from 'next/dist/client/router';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function AttackerInfo(): JSX.Element {
  const api = new BadgerAPI();
  const sdk = useContext(SdkContext);
  const [attackerData, setAttackerData] = useState<
    UserFragment | null | undefined
  >(undefined);
  const [userApprovals, setUserApprovals] = useState<
    Record<string, ApprovalFragment[]>
  >({});
  const [vaultApprovals, setVaultApprovals] = useState<Record<string, number>>(
    {},
  );
  const [vaultAmounts, setVaultAmounts] = useState<Record<string, number>>({});
  const [userAmounts, setUserAmounts] = useState<Record<string, number>>({});
  const [account, setAccount] = useState<Account | null>(null);
  const [prices, setPrices] = useState<PriceSummary>({});

  const router = useRouter();
  const { address } = router.query;

  useEffect(() => {
    async function queryAttacker() {
      const user = await sdk.User({
        id: (address as string).toLowerCase(),
      });

      if (user.user) {
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
        setVaultApprovals(vaultApprovals);

        const userAccounts: Record<string, Account> = Object.fromEntries(
          await Promise.all(
            Object.keys(userApprovals).map(async (acc) => {
              return [acc, await api.loadAccount(acc)];
            }),
          ),
        );

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
      } else {
        setAttackerData(null);
      }

      const account = await api.loadAccount(address as string);
      setAccount(account);

      const prices = await api.loadPrices();
      setPrices(prices);
    }
    queryAttacker();
  }, []);

  const atRiskRunds = Object.values(vaultAmounts).reduce(
    (total, value) => (total += value),
    0,
  );

  const withdrawnFunds = Object.values(account ? account.data : {})
    .map((item) => {
      const price = prices[item.address];
      return price * item.withdrawnBalance;
    })
    .reduce((total, value) => (total += value), 0);

  const hasStolenFunds = account && account.value > 0;
  return (
    <div className="flex flex-col flex-grow h-full w-full px-4 md:px-12 bg-cave py-16 text-skull">
      <div className="flex flex-col mb-2">
        <span className="text-lg cursor-default">Badger Exploiter</span>
        <span
          className="text-2xl text-white cursor-pointer"
          onClick={() => window.open(`https://etherscan.io/address/${address}`)}
        >
          {address}
        </span>
        {account && (
          <>
            <span className="text-xl text-raspberry text-bold tracking-tighter">
              {formatter.format(account.value)} address controlled funds
            </span>
            <span className="text-xl text-raspberry text-bold tracking-tighter">
              {formatter.format(isNaN(withdrawnFunds) ? 0 : withdrawnFunds)}{' '}
              passed through funds
            </span>
          </>
        )}
        <span className="text-xl text-raspberry text-bold tracking-tighter">
          {formatter.format(atRiskRunds)} access to user controlled funds
        </span>
        <span className="text-md text-skull text-bold">
          {Object.keys(userApprovals).length} affected users
        </span>
        {attackerData && (
          <span className="text-md text-skull text-bold">
            {attackerData.sentApprovals.length} affected approvals
          </span>
        )}
      </div>
      {hasStolenFunds && (
        <>
          <div className="mt-4 text-md text-black bg-raspberry p-4 mb-2">
            Address Hodlings
          </div>
          {Object.values(account.data).map((vault) => {
            return (
              <div
                key={vault.address}
                className={'flex flex-col p-2 m-2 text-black bg-gray-100'}
              >
                <div className="flex p-2 m-2 text-black">
                  <div className="flex flex-col flex-grow cursor-pointer">
                    <span
                      className="font-semibold text-md"
                      onClick={() =>
                        window.open(
                          `https://etherscan.io/address/${vault.address}`,
                        )
                      }
                    >
                      {vault.name}
                    </span>
                  </div>
                  <span className="flex items-center mx-4 font-semibold text-md">
                    {vault.balance.toFixed(5)}
                  </span>
                  <span className="flex items-center mx-4 font-semibold text-md">
                    {formatter.format(vault.value)}
                  </span>
                </div>
              </div>
            );
          })}
        </>
      )}
      {!attackerData === undefined && (
        <div className="flex flex-grow w-full h-full text-2xl text-raspberry items-center justify-center">
          <span>Loading Attacker Data</span>
        </div>
      )}
      {attackerData && attackerData.sentApprovals.length > 0 && (
        <div className="flex flex-col">
          <div className="mt-4 text-md text-black bg-raspberry p-4 mb-2">
            Approvals Overview
          </div>
          <div className="flex flex-wrap justify-around mb-10">
            {attackerData.cumulativeApprovals
              .sort((a, b) => {
                const valueA = vaultAmounts[a.token.id] ?? 0;
                const valueB = vaultAmounts[b.token.id] ?? 0;
                return valueB - valueA;
              })
              .map((approval) => {
                const { token, approvals, revokes } = approval;
                return (
                  <div
                    key={token.id}
                    className="flex flex-col bg-gray-100 p-4 m-1 text-black my-3 shadow-lg"
                  >
                    <span
                      className="text-xl mb-1 text-haze font-bold leading-tight cursor-pointer"
                      onClick={() =>
                        window.open(`https://etherscan.io/address/${token.id}`)
                      }
                    >
                      {token.name}
                    </span>
                    <span className="text-xl font-bold">
                      {formatter.format(vaultAmounts[token.id] ?? 0)} at risk
                    </span>
                    <span className="text-lg">
                      {vaultApprovals[ethers.utils.getAddress(token.id)] ?? 0}{' '}
                      outstanding approvals
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
          {Object.keys(userApprovals)
            .sort((a, b) => {
              const userA = userAmounts[a] ?? 0;
              const userB = userAmounts[b] ?? 0;
              return userB - userA;
            })
            .map((user) => {
              const approvals = userApprovals[user];
              const atRisk = userAmounts[user] ?? 0;
              const compromised = atRisk <= 0;
              return (
                <div
                  key={user}
                  className={
                    'flex flex-col p-2 m-2 text-black' +
                    (compromised ? ' bg-red-200' : ' bg-gray-100')
                  }
                >
                  <div className="flex w-full justify-between items-center">
                    <span
                      className="text-lg font-bold p-2 cursor-pointer text-haze"
                      onClick={() =>
                        window.open(`https://etherscan.io/address/${user}`)
                      }
                    >{`${user} • ${formatter.format(atRisk)} at risk${
                      compromised ? ' • [COMPROMISED]' : ''
                    }`}</span>
                    <span className="font-semibold mr-4">
                      {approvals.length} approvals
                    </span>
                  </div>
                  {approvals.map((approval) => {
                    const {
                      amount,
                      id,
                      transactionId,
                      owner,
                      timestamp,
                      token,
                    } = approval;
                    const approvalAmount = BigNumber.from(amount).gte(0)
                      ? 'Max'
                      : ethers.utils.formatEther(amount);
                    return (
                      <div key={id} className="flex p-2 m-2 text-black">
                        <div className="flex flex-col flex-grow cursor-pointer">
                          <span
                            className="font-semibold text-sm text-raspberry"
                            onClick={() =>
                              window.open(
                                `https://etherscan.io/tx/${transactionId}`,
                              )
                            }
                          >
                            {transactionId}
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
