import { Address } from '@graphprotocol/graph-ts';
import { ApprovalDayData } from '../../generated/schema';
import { ZERO } from '../constants';
import { loadToken } from './token';

export function loadApprovalDayData(day: i32, token: Address): ApprovalDayData {
  const id = 'ADD-'
    .concat(day.toString())
    .concat('-')
    .concat(token.toHexString());
  let approval = ApprovalDayData.load(id) as ApprovalDayData;

  if (approval) {
    return approval;
  }

  approval = new ApprovalDayData(id);
  approval.timestamp = day;
  approval.token = loadToken(token).id;
  approval.approvals = ZERO;
  approval.revokes = ZERO;
  approval.save();
  return approval;
}
