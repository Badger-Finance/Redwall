import { Address } from '@graphprotocol/graph-ts';
import { User } from '../../generated/schema';

export function loadUser(address: Address): User {
  const id = address.toHexString();
  let user = User.load(id) as User;

  if (user) {
    return user;
  }

  user = new User(id);
  user.save();
  return user;
}
