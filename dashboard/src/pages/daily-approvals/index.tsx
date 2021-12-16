import React, { useEffect, useState, useContext } from 'react';
import { GRAPH_URL } from '../../constants';
import { GraphQLClient } from 'graphql-request';
import {
  ApprovalDayData,
  ApprovalDayData_OrderBy,
  getSdk,
  OrderDirection,
  UserApprovalDayDataFragment as DailyApprovals,
  UserApprovalDayData_OrderBy,
} from '../../graphql/generated/badger';
import DailyApprovalsChart from '../../components/charts/DailyApprovalsChart';
import { SdkContext } from '../../sdk-context';

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
    }

    async function queryApprovalDayData() {
      const { approvalDayDatas } = await sdk.ApprovalDayDatas({
        orderBy: ApprovalDayData_OrderBy.Timestamp,
        orderDirection: OrderDirection.Desc,
      });
    }

    queryUserApprovalDayData();
    queryApprovalDayData();
    queryAttacker();
  }, [sdk]);

  return (
    <div className="flex flex-col flex-grow justify-center items-center p-4 overflow-hidden h-screen">
      {dailyApprovals && (
        <>
          <h2>Daily Approvals</h2>
          <DailyApprovalsChart data={dailyApprovals} />
        </>
      )}
    </div>
  );
}
