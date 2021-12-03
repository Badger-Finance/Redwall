import React, { useEffect } from 'react';
import { GRAPH_URL } from '../constants';
import { GraphQLClient } from 'graphql-request';
import { getSdk, OrderDirection, UserApprovalDayData_OrderBy } from '../graphql/generated/badger';

export default function Home(): JSX.Element {
  const client = new GraphQLClient(GRAPH_URL);
  const sdk = getSdk(client);


  async function queryGraph() {
    const data = await sdk.UserApprovalDayDatas({
      orderBy: UserApprovalDayData_OrderBy.Timestamp,
      orderDirection: OrderDirection.Desc,
    });
    console.log(data);
  }

  useEffect(() => {
    queryGraph();
  });

  return (
    <div className="flex flex-col flex-grow h-full w-full overflow-hidden justify-center items-center px-8 md:px-0 py-4 text-white">
      
    </div>
  );
}
