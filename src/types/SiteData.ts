import { Timestamp } from './Timestamp';

export type SiteData = TrimmableSiteData & NonTrimmableSiteData;

export type NonTrimmableSiteData = {
  id: string;
  trimmed?: boolean;
  elements: {
    [gutsId: string]: GutsElement;
  };
};

export type TrimmableSiteData = {
  plan: SitePlans;
  name: string;
  created_at: Timestamp;
  updated_at: Timestamp;
  deleted_at?: Timestamp;
};

export const SitePlans = [
  'free',
  // 'basic',
  // 'premium',
] as const;
export type SitePlans = typeof SitePlans[number];

export type GutsElement = {
  paths: PathData[];
  html: string;
};

export type PathData = {
  slug: string;
  manual?: true;
  // unused?: boolean;
  exclude?: true;
};

export type GutsDynamicPathDocument = {
  dynamicPath: string;
  filledPath: string; // TODO rename this - hydratedPath?
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
