import { Timestamp } from './Timestamp';

export type DBUser = {
  firstName?: string;
  lastName?: string;
  sites?: string[];
  createdAt: Timestamp;
};

export type SiteMemberData = {
  role: 'owner' | 'admin' | 'editor';
  name: string;
  addedToSiteAt: Timestamp;
};

export type TransformedSiteMemberData = SiteMemberData & {
  id: string;
};

export type TransformedUser = DBUser & {
  id: string;
  readonly formattedName: string;
};
