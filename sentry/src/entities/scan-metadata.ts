import {
  attribute,
  hashKey,
  rangeKey,
  table,
} from '@aws/dynamodb-data-mapper-annotations';
import { SCAN_DATA } from '../constants';

@table(SCAN_DATA)
export class ScanMetadata {
  @hashKey()
  monitor!: string;

  @rangeKey()
  startTime!: number;

  @attribute()
  endTime!: number;

  @attribute()
  approvals!: number;

  @attribute()
  suspiciousApprovals!: number;
}
