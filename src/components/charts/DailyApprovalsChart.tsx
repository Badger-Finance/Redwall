import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { UserApprovalDayDataFragment } from '../../graphql/generated/badger';
import { groupBy } from '../../utils';

interface Props {
  data: UserApprovalDayDataFragment[];
}

const tokenColors = {
  bcrvRenWSBTC: '#2e98fe',
  'bUNI-V2': '#96f60f',
  'btbtc/sbtcCrv': '#956519',
  bSupercrvRenWBTC: '#25f8a6',
  'bibbtc/sbtcCRV-f': '#8a1ddf',
  bSLP: '#6c1261',
  bcrvRenWBTC: '#6e2570',
  'bbBTC/sbtcCRV': '#e79968',
  byvWBTC: '#420f45',
  bBADGER: '#b44995',
  'boBTC/sbtcCRV': '#1d06c5',
  bhCRV: '#568cf',
  bDIGG: '#13b394',
  'bpBTC/sbtcCRV': '#c3bf70',
  bcvxCRV: '#e5a871',
  bcrv3crypto: '#231cbb',
};

function DailyApprovalsChart({ data }: Props): JSX.Element {
  let aggregatedData = [];

  const tokenNames = [...new Set(data.map((entry) => entry.token.symbol))];
  const timestampGrouped = groupBy(data, (data) => data.timestamp);

  for (const timestampGroupedKey in timestampGrouped as any) {
    const timestamp = timestampGroupedKey;

    const tokenSummary = timestampGrouped[timestampGroupedKey].reduce(
      (summary, dataEntry) => ({
        ...summary,
        [dataEntry.token.symbol]: dataEntry.approvals,
      }),
      {},
    );

    const totalApprovals = timestampGrouped[timestampGroupedKey].reduce(
      (totalApprovals, dataEntry) =>
        totalApprovals + Number(dataEntry['approvals']),
      0,
    );

    aggregatedData.push({
      ...tokenSummary,
      timestamp,
      totalApprovals,
    });
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={aggregatedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          tickFormatter={(timestamp) =>
            new Date(timestamp * 86400 * 1000).toLocaleDateString('en-US')
          }
        />
        <YAxis />
        <Tooltip filterNull />
        <Legend />
        {tokenNames.map((name, index) => (
          <Bar
            key={`${name}_${index}`}
            dataKey={name}
            fill={tokenColors[name]}
            stackId="a"
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default DailyApprovalsChart;
