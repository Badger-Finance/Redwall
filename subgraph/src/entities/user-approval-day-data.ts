import { Address } from '@graphprotocol/graph-ts';
import { UserApprovalDayData } from '../../generated/schema';
import { ZERO } from '../constants';
import { loadToken } from './token';
import { loadUser } from './user';

export function loadUserApprovalDayData(
  day: i32,
  spender: Address,
  token: Address,
): UserApprovalDayData {
  let id = 'UADD-'
    .concat(day.toString())
    .concat('-')
    .concat(token.toHexString());
  let approval = UserApprovalDayData.load(id) as UserApprovalDayData;

  if (approval) {
    return approval;
  }

  approval = new UserApprovalDayData(id);
  approval.timestamp = day;
  approval.token = loadToken(token).id;
  approval.approvals = ZERO;
  approval.revokes = ZERO;
  approval.spender = loadUser(spender).id;
  approval.save();
  return approval;
}
