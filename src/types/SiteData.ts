import { Timestamp } from './Timestamp';

// @TODO this is getting more out of hand than i thought,
// might be worth refactoring these with Pick and Partial functions for readability.
export type SiteDataDatabaseDoc = {
  plan: SitePlans;
  name: string;
  deleted_at?: Timestamp;
  created_at: Timestamp;
  updated_at: Timestamp;
};

export type SiteDataDoc = SiteDataDatabaseDoc & {
  id: string;
};

export type SiteData = TrimmableSiteData & NonTrimmableSiteData;

export type NonTrimmableSiteData = {
  id: string;
  trimmed?: boolean;
  elements: {
    [gutsId: string]: GutsElement;
  };
};

export type TrimmableSiteData = Pick<
  SiteDataDatabaseDoc,
  'created_at' | 'updated_at' | 'plan' | 'name' | 'deleted_at'
>;

export const SitePlans = ['free', 'basic', 'premium', 'enterprise'] as const;
export type SitePlans = typeof SitePlans[number];

export type GutsElement = {
  routes: Route[];
  html: string;
};

export type Route = {
  slug: string;
  manual?: true;
  // unused?: boolean;
  exclude?: true;
};

export type GutsDynamicRouteDocument = {
  dynamicRoute: string;
  filledRoute: string; // TODO rename this - hydratedRoute?
  published: boolean;
  gutsAPIVersion?: string;
  created_at: Timestamp;
  updated_at: Timestamp;
  elements: {
    [gutsId: string]: GutsElement;
  };
};

export type SiteDataBackup = {
  userId: string;
} & SiteData;

export type SiteDataBackupWithID = {
  id: string;
} & SiteDataBackup;

type KeysEnum<T> = { [P in keyof Required<T>]: true };

// This is used in the trimming function to remove all keys from the trimmable site data type
export const TrimmableSiteDataObj: KeysEnum<TrimmableSiteData> = {
  name: true,
  plan: true,
  created_at: true,
  updated_at: true,
  deleted_at: true,
};

export const transformSiteData = async (rawDoc: any) => {
  const siteDataObj: SiteDataDoc = {
    id: rawDoc.id,
    ...(rawDoc.data() as SiteDataDatabaseDoc),
  };

  return siteDataObj;
};
