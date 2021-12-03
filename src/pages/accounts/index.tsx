import React from 'react';
import { ATTACKER_ADDRESS } from '../../constants';

const accounts = [
  ATTACKER_ADDRESS,
  '0x38b8f6af1d55caa0676f1cbb33b344d8122535c2',
  '0xa33B95ea28542Ada32117B60E4F5B4cB7D1Fc19B',
  '0x4fbf7701b3078B5bed6F3e64dF3AE09650eE7DE5',
  '0x1B1b391D1026A4e3fB7F082ede068B25358a61F2',
  '0xEcD91D07b1b6B81d24F2a469de8e47E3fe3050fd',
  '0x691dA2826AC32BBF2a4b5d6f2A07CE07552A9A8E',
  '0x91d65D67FC573605bCb0b5E39F9ef6E18aFA1586',
  '0x0B88A083dc7b8aC2A84eBA02E4acb2e5f2d3063C',
  '0x2eF1b70F195fd0432f9C36fB2eF7C99629B0398c',
  '0xbbfD8041EbDE22A7f3e19600B4bab4925Cc97f7D',
  '0xe06eD65924dB2e7b4c83E07079A424C8a36701E5',
];

function AccountRoot(): JSX.Element {
  return (
    <div className="flex flex-col flex-grow h-full w-full px-4 md:px-12 bg-cave py-16 text-skull">
      <span className="text-3xl text-gray-100">Accounts of Interest</span>
      {accounts.map((acc) => {
        return (
          <div
            key={acc}
            className="flex p-2 my-1 cursor-pointer"
            onClick={() => window.open(`/accounts/${acc}`)}
          >
            {acc}
          </div>
        );
      })}
    </div>
  );
}

export default AccountRoot;
