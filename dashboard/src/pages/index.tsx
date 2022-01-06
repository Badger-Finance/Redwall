import React, { useContext, useEffect, useState } from 'react';
import {
  CumulativeApprovalFragment,
  CumulativeApproval_OrderBy,
  OrderDirection,
  UserApprovalDayDataFragment,
  UserApprovalDayData_OrderBy,
} from '../graphql/generated/badger';
import { SdkContext } from '../sdk-context';

export enum Timeframe {
  Lifetime = 'lifetime',
  Today = 'today',
}

export default function Home(): JSX.Element {
  const sdk = useContext(SdkContext);

  const day = Number((Date.now() / 1000 / (60 * 60 * 24)).toFixed()) - 1;
  const [timeframe, setTimeFrame] = useState(Timeframe.Today);
  const [totalApprovals, setTotalApprovals] = useState<
    CumulativeApprovalFragment[]
  >([]);
  const [todayApprovals, setTodayApprovals] = useState<
    UserApprovalDayDataFragment[]
  >([]);

  useEffect(() => {
    async function loadApprovalsLeaderboard() {
      if (timeframe === Timeframe.Lifetime) {
        const totalApprovals = await sdk.CumulativeApprovals({
          first: 100,
          orderBy: CumulativeApproval_OrderBy.Approvals,
          orderDirection: OrderDirection.Desc,
        });
        if (totalApprovals.cumulativeApprovals) {
          setTotalApprovals(totalApprovals.cumulativeApprovals);
        }
      } else {
        const todayApprovals = await sdk.UserApprovalDayDatas({
          first: 100,
          where: {
            timestamp: day,
          },
          orderBy: UserApprovalDayData_OrderBy.Approvals,
          orderDirection: OrderDirection.Desc,
        });
        if (todayApprovals.userApprovalDayDatas) {
          setTodayApprovals(todayApprovals.userApprovalDayDatas);
        }
      }
    }
    loadApprovalsLeaderboard();
  }, [timeframe]);

  return (
    <div className="flex flex-grow flex-col items-center my-6">
      <div className="flex flex-col w-3/4">
        <div className="flex justify-between">
          <div className="text-xl">{`${
            timeframe === Timeframe.Today ? 'Todays' : 'Total'
          } Token Approvals`}</div>
          <div className="flex items-center space-x-2 w-1/12">
            <label className="relative inline-block">
              <input
                type="checkbox"
                role="switch"
                checked={timeframe === Timeframe.Today}
                onChange={() =>
                  setTimeFrame(
                    timeframe === Timeframe.Today
                      ? Timeframe.Lifetime
                      : Timeframe.Today,
                  )
                }
              />
              <span className="absolute" />
            </label>
            <span>
              {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
            </span>
          </div>
        </div>
        {timeframe === Timeframe.Today && (
          <>
            {todayApprovals.length > 0 && (
              <div className="w-full mt-4">
                <div className="flex items-center justify-center border-b mb-2 pb-1 w-full">
                  <div className="w-2/6">Spender</div>
                  <div className="w-2/6">Token</div>
                  <div className="w-1/6">Approvals</div>
                  <div className="w-1/6">Revokes</div>
                </div>
                {todayApprovals.map((approval) => {
                  return (
                    <div key={approval.id} className="flex w-full my-1">
                      <div
                        className="w-2/6 cursor-pointer text-green-200"
                        onClick={() =>
                          window.open(
                            `https://etherscan.io/address/${approval.spender.id}`,
                          )
                        }
                      >
                        {approval.spender.id}
                      </div>
                      <div className="w-2/6">{approval.token.name}</div>
                      <div className="w-1/6">{approval.approvals}</div>
                      <div className="w-1/6">{approval.revokes}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
        {timeframe === Timeframe.Lifetime && (
          <>
            {totalApprovals.length > 0 && (
              <div className="w-full mt-4">
                <div className="flex items-center justify-center border-b mb-2 pb-1">
                  <div className="w-2/6">Spender</div>
                  <div className="w-2/6">Token</div>
                  <div className="w-1/6">Approvals</div>
                  <div className="w-1/6">Revokes</div>
                </div>
                {totalApprovals.slice(0, 25).map((approval) => {
                  return (
                    <div key={approval.id} className="flex w-full my-1">
                      <div
                        className="w-2/6 cursor-pointer text-green-200"
                        onClick={() =>
                          window.open(
                            `https://etherscan.io/address/${approval.spender.id}`,
                          )
                        }
                      >
                        {approval.spender.id}
                      </div>
                      <div className="w-2/6">{approval.token.name}</div>
                      <div className="w-1/6">{approval.approvals}</div>
                      <div className="w-1/6">{approval.revokes}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
