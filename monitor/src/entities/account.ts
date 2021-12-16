import { attribute, hashKey, rangeKey, table } from '@aws/dynamodb-data-mapper-annotations';
import { WATCHLIST_DATA } from '../constants';

@table(WATCHLIST_DATA)
export class WatchlistAccount {
  @hashKey()
  address!: string;

  @rangeKey()
  totalApprovals!: number;

  @attribute()
  dailyApprovals!: number;

  @attribute({ defaultProvider: () => Date.now() })
  updatedAt!: number;
}
