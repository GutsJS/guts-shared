export type DBUser = {
  firstName?: string;
  lastName?: string;
  sites?: string[];
};

export type SiteMemberData = {
  role: 'owner' | 'admin' | 'member';
  name: string;
};

export type TransformedSiteMemberData = SiteMemberData & {
  id: string;
};

export type TransformedUser = DBUser & {
  id: string;
  readonly formattedName: string;
};
