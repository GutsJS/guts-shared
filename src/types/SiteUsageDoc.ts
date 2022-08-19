import { Timestamp } from './Timestamp';

export type SiteUsageDoc = {
  reads: number;
  writes: number;
  createdAt: Timestamp;
};
