import React, { useEffect, useState, useContext } from 'react';
import { GRAPH_URL } from '../constants';
import { GraphQLClient } from 'graphql-request';
import {
  ApprovalDayData,
  ApprovalDayData_OrderBy,
  getSdk,
  OrderDirection,
  UserApprovalDayDataFragment as DailyApprovals,
  UserApprovalDayData_OrderBy,
} from '../graphql/generated/badger';
import DailyApprovalsChart from '../components/charts/DailyApprovalsChart';
import { SdkContext } from '../sdk-context';

export default function Home(): JSX.Element {
  const sdk = useContext(SdkContext);
  const [dailyApprovals, setDailyApprovals] = useState<
    DailyApprovals[] | undefined
  >();

  useEffect(() => {
    async function queryUserApprovalDayData() {
      const { userApprovalDayDatas } = await sdk.UserApprovalDayDatas({
        orderBy: UserApprovalDayData_OrderBy.Timestamp,
        orderDirection: OrderDirection.Desc,
      });

      setDailyApprovals(userApprovalDayDatas);
    }

    async function queryAttacker() {
      const user = await sdk.User({
        id: '0x1fcdb04d0c5364fbd92c73ca8af9baa72c269107',
      });

      // console.log(user);
    }

    async function queryApprovalDayData() {
      const { approvalDayDatas } = await sdk.ApprovalDayDatas({
        orderBy: ApprovalDayData_OrderBy.Timestamp,
        orderDirection: OrderDirection.Desc,
      });

      // console.log(approvalDayDatas);
    }

    queryUserApprovalDayData();
    queryApprovalDayData();
    queryAttacker();
  }, []);

  return (
    <div className="flex flex-col flex-grow h-full w-full justify-center items-center px-8 md:px-0 py-4">
      {dailyApprovals && (
        <>
          <h2>Daily Approvals</h2>
          <DailyApprovalsChart data={dailyApprovals} />
        </>
      )}
    </div>
  );
}
