import { DataMapper } from '@aws/dynamodb-data-mapper';
import { ScanMetadata } from '../entities/scan-metadata';
import AWS from 'aws-sdk';
import { WatchlistAccount } from '../entities/account';

const offline = process.env.IS_OFFLINE;

export function getDataMapper(): DataMapper {
  let client: AWS.DynamoDB;
  if (offline) {
    client = new AWS.DynamoDB({
      region: 'localhost',
      endpoint: 'http://localhost:8000',
      accessKeyId: '',
      secretAccessKey: '',
    });
  } else {
    client = new AWS.DynamoDB();
  }
  return new DataMapper({ client });
}

export async function getScanMetadata(monitor: string): Promise<ScanMetadata | null> {
  const mapper = getDataMapper();
  for await (const metadata of mapper.query(ScanMetadata, { monitor }, { limit: 1, scanIndexForward: false })) {
    return metadata;
  }
  return null;
}

export async function getAccount(address: string): Promise<WatchlistAccount | null> {
  const mapper = getDataMapper();
  for await (const account of mapper.query(WatchlistAccount, { address }, { limit: 1 })) {
    return account;
  }
  return null;
}
