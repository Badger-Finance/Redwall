import { Address, BigInt } from '@graphprotocol/graph-ts';

// true constants
export const NONE = '';
export const NO_ADDR = '0x0000000000000000000000000000000000000000';
export let ADDR_ZERO = Address.fromString(NO_ADDR);

// evaluated constants
export let ZERO = BigInt.fromI32(0);
