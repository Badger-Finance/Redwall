import { Address } from '@graphprotocol/graph-ts';
import { CumulativeApproval } from '../../generated/schema';
import { ZERO } from '../constants';
import { loadToken } from './token';
import { loadUser } from './user';

export function loadCumulativeApproval(
  spender: Address,
  token: Address,
): CumulativeApproval {
  let id = 'CA-'
    .concat(spender.toHexString())
    .concat('-')
    .concat(token.toHexString());
  let approval = CumulativeApproval.load(id) as CumulativeApproval;

  if (approval) {
    return approval;
  }

  approval = new CumulativeApproval(id);
  approval.token = loadToken(token).id;
  approval.spender = loadUser(spender).id;
  approval.approvals = ZERO;
  approval.revokes = ZERO;
  approval.save();
  return approval;
}
