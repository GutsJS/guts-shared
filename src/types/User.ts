export type DBUser = {
  firstName?: string;
  lastName?: string;
  sites?: string[];
};

export type SiteUserData = {
  role: 'owner' | 'admin' | 'member';
  name: string;
};

export type TransformedUser = DBUser & {
  id: string;
  readonly formattedName: string;
};
