import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { TooltipProps } from 'recharts';
import { UserApprovalDayDataFragment } from '../../graphql/generated/badger';
import { groupBy } from '../../utils';

interface Props {
  data: UserApprovalDayDataFragment[];
}

const tokenColors = {
  'ibbtc/sbtcCRV-f': '#818eeb',
  'pBTC/sbtcCRV': '#a74a2a',
  SLP: '#e41892',
  crv3crypto: '#eb170f',
  'btbtc/sbtcCrv': '#9182be',
  hCRV: '#71fbcd',
  'bibbtc/sbtcCRV-f': '#83dc5c',
  DIGG: '#e1763f',
  bcrvRenWBTC: '#c6e4b0',
  'tbtc/sbtcCrv': '#d6a565',
  cvxCRV: '#3f48c4',
  CVX: '#6c8482',
  byvWBTC: '#5a4f19',
  crvRenWBTC: '#88cdd8',
  'fPmBTC/HBTC': '#18dcbd',
  BADGER: '#bf478d',
  'oBTC/sbtcCRV': '#c86c2e',
  WBTC: '#fca6ba',
  bBADGER: '#7ca992',
  crvRenWSBTC: '#171181',
  bcrvRenWSBTC: '#76cb79',
  'UNI-V2': '#e7b0c1',
  crvTricrypto: '#e1d79b',
  bSLP: '#abc55a',
  'bBTC/sbtcCRV': '#d7d784',
  bDIGG: '#87688d',
  'bUNI-V2': '#948316',
  bSupercrvRenWBTC: '#18037f',
  'bbBTC/sbtcCRV': '#1869b3',
};

const CustomTooltip = ({
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (!payload || payload.length === 0) {
    return null;
  }

  const tooltipData = payload[0].payload;

  const statsToDisplay = Object.keys(tooltipData)
    .filter(
      (entry) =>
        entry !== 'timestamp' &&
        entry !== 'totalApprovals' &&
        tooltipData[entry] !== '0',
    )
    .sort((a, b) => tooltipData[b] - tooltipData[a]);

  return (
    <ul className="bg-white p-3">
      <li className="my-2">
        Total Approvals in day: {tooltipData['totalApprovals']}
      </li>
      {statsToDisplay.map((stat) => (
        <li className="my-2" key={stat}>
          {stat}: {tooltipData[stat]}
        </li>
      ))}
    </ul>
  );
};

function DailyApprovalsChart({ data }: Props): JSX.Element {
  const aggregatedData = [];

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
        <Tooltip filterNull content={CustomTooltip} />
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
