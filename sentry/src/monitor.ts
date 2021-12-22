import {
  getAccount,
  getDataMapper,
  getScanMetadata,
} from './aws/dynamodb.utils';
import {
  MONITOR_ID,
  START_BLOCK,
  WEBHOOK_ROLE,
  WEBHOOK_URL,
} from './constants';
import { ScanMetadata } from './entities/scan-metadata';
import {
  ApprovalFragment,
  Approval_OrderBy,
  OrderDirection,
} from './graphql/generated/badger';
import sdk from './graphql';
import { vaults, whitelist } from './whitelist';
import { ethers } from 'ethers';
import { WatchlistAccount } from './entities/account';
import { Webhook, MessageBuilder } from 'discord-webhook-node';

export async function checkTokenApprovals(): Promise<void> {
  const metadata = await getScanMetadata(MONITOR_ID);

  const provider = new ethers.providers.JsonRpcProvider(
    'https://spring-delicate-paper.quiknode.pro/d1fafe068249a34a1b2c9dc4b36ad92fbcf9fb8c/',
  );
  const mapper = getDataMapper();
  const queryTime = await evaluateStartTimestamp(metadata);
  let detectedApprovals = await getRecentApprovals(queryTime);
  while (detectedApprovals.length > 0) {
    let suspcious = 0;
    for (const approval of detectedApprovals) {
      if (!vaults.has(approval.token.id)) {
        continue;
      }
      if (!whitelist.has(approval.spender.id)) {
        let account = await getAccount(approval.spender.id);
        if (!account) {
          account = Object.assign(new WatchlistAccount(), {
            address: approval.spender.id,
            totalApprovals: 0,
            dailyApprovals: 0,
            updatedAt: 0,
          });
        }
        const currentDay = new Date(approval.timestamp * 1000).getDay();
        if (new Date(account.updatedAt).getDay() !== currentDay) {
          account.dailyApprovals = 0;
        }
        account.totalApprovals += 1;
        account.dailyApprovals += 1;
        account.updatedAt = approval.timestamp * 1000;
        await mapper.put(account);
        const data = await provider.getCode(approval.spender.id);
        if (data === '0x') {
          await alertAccount(account, approval.transactionId, false);
        } else {
          await alertAccount(account, approval.transactionId, true);
        }
        suspcious++;
      }
    }
    const startTime = detectedApprovals[0].timestamp;
    const endTime = detectedApprovals[detectedApprovals.length - 1].timestamp;
    const scanMetadata = Object.assign(new ScanMetadata(), {
      monitor: MONITOR_ID,
      startTime,
      endTime,
      approvals: detectedApprovals.length,
      suspiciousApprovals: suspcious,
    });
    console.log({ startTime, endTime, amt: detectedApprovals.length });
    await mapper.put(scanMetadata);
    detectedApprovals = await getRecentApprovals(endTime);
  }
}

async function evaluateStartTimestamp(
  metadata: ScanMetadata | null,
): Promise<number> {
  if (metadata) {
    return metadata.endTime;
  }
  const approval = await sdk.Approvals({
    first: 1,
    orderBy: Approval_OrderBy.Timestamp,
    orderDirection: OrderDirection.Asc,
    block: { number: Number(START_BLOCK) },
  });
  if (!approval || !approval.approvals || approval.approvals.length === 0) {
    throw Error('Unable to process zero approvals graph');
  }
  console.log(
    `Starting with ${new Date(
      approval.approvals[0].timestamp * 1000,
    ).toLocaleString()}`,
  );
  return approval.approvals[0].timestamp;
}

async function getRecentApprovals(
  startTime: number,
): Promise<ApprovalFragment[]> {
  const approvals = await sdk.Approvals({
    orderBy: Approval_OrderBy.Timestamp,
    orderDirection: OrderDirection.Asc,
    where: {
      timestamp_gt: startTime,
    },
  });
  return approvals.approvals;
}

// parameterize it later
const image =
  'https://discourse.disneyheroesgame.com/uploads/default/original/3X/b/8/b847af17de9f017652162abb005bb6d7283886aa.png';
const NAME = 'Brocktree'; // Lord of Salamandastron, Protector of the Shores
const webhook = new Webhook(WEBHOOK_URL);
webhook.setUsername(NAME);
webhook.setAvatar(image);

async function alertAccount(
  account: WatchlistAccount,
  tx: string,
  isUser = false,
) {
  const inAlert = isUser || account.dailyApprovals > 5;
  const color = inAlert ? 16715859 : 16754515;
  let message;
  if (inAlert) {
    if (isUser) {
      message = 'EOA token approval, investigate immediately.';
    } else {
      message =
        'Multiple suspicious or unkwown token approvals, investigate immediately.';
    }
  } else {
    message = 'Suspicious token approval, please investigate the contract.';
  }
  const alertMessage = inAlert
    ? `${`<@&${WEBHOOK_ROLE}>`}\n${message}`
    : message;
  await webhook.send(alertMessage);
  const embed = new MessageBuilder()
    .setAuthor(NAME, image)
    .setColor(color)
    .addField('Total Approvals', account.totalApprovals.toString(), true)
    .addField('Approvals Today', account.dailyApprovals.toString(), true)
    .addField('Approval Time', new Date(account.updatedAt).toUTCString(), true)
    .addField('Transaction', `https://etherscan.io/tx/${tx}`)
    .addField('Address', `https://etherscan.io/address/${account.address}`)
    .setTimestamp();
  await webhook.send(embed);
}
