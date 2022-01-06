import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts';
import { Approval } from '../../generated/templates/Token/ERC20';
import { Approval as TokenApproval } from '../../generated/schema';
import { loadApprovalDayData } from '../entities/approval-day-data';
import { loadUserApprovalDayData } from '../entities/user-approval-day-data';
import { ZERO, ADDR_ZERO } from '../constants';
import { loadCumulativeApproval } from '../entities/cumulative-approval';
import { loadToken } from '../entities/token';
import { loadUser } from '../entities/user';

const SECONDS_PER_DAY = 86400;

export function handleApproval(event: Approval): void {
  let timestamp = event.block.timestamp.toI32();
  let owner = event.params.owner;
  let spender = event.params.spender;
  let value = event.params.value;
  handleSettApproval(
    timestamp,
    event.transaction.hash,
    event.address,
    owner,
    spender,
    value,
  );
}

export function handleSettApproval(
  timestamp: i32,
  hash: Bytes,
  token: Address,
  owner: Address,
  spender: Address,
  amount: BigInt,
): void {
  let id = owner
    .toHexString()
    .concat('-')
    .concat(spender.toHexString())
    .concat('-')
    .concat(token.toHexString());
  let approval = TokenApproval.load(id) as TokenApproval;

  let existingApproval = true;
  if (approval == null) {
    existingApproval = false;
    approval = new TokenApproval(id);
  }

  approval.transactionId = hash;
  approval.timestamp = timestamp;
  approval.owner = loadUser(owner).id;
  approval.spender = amount.gt(ZERO)
    ? loadUser(spender).id
    : loadUser(ADDR_ZERO).id;
  approval.token = loadToken(token).id;
  approval.amount = amount;
  approval.save();

  let day = timestamp / SECONDS_PER_DAY;
  let approvalDayData = loadApprovalDayData(day, token);
  let userApprovalDayData = loadUserApprovalDayData(day, spender, token);
  let cumulativeApproval = loadCumulativeApproval(spender, token);

  if (amount.gt(ZERO)) {
    if (!existingApproval) {
      cumulativeApproval.approvals = cumulativeApproval.approvals.plus(
        BigInt.fromI32(1),
      );
    }
    approvalDayData.approvals = approvalDayData.approvals.plus(
      BigInt.fromI32(1),
    );
    userApprovalDayData.approvals = userApprovalDayData.approvals.plus(
      BigInt.fromI32(1),
    );
  } else if (existingApproval) {
    cumulativeApproval.revokes = cumulativeApproval.revokes.plus(
      BigInt.fromI32(1),
    );
    approvalDayData.revokes = approvalDayData.revokes.plus(BigInt.fromI32(1));
    userApprovalDayData.revokes = userApprovalDayData.revokes.plus(
      BigInt.fromI32(1),
    );
  }

  cumulativeApproval.save();
  approvalDayData.save();
  userApprovalDayData.save();
}
