import { GraphQLClient } from 'graphql-request';
import { APPROVAL_GRAPH_URL } from '../constants';
import { getSdk } from './generated/badger';

const client = new GraphQLClient(APPROVAL_GRAPH_URL);
const sdk = getSdk(client);

export { client, sdk };

export default sdk;
