import { SiteData } from '..';

export type SaveSiteDataRequest = {
  token: string;
  siteData: SiteData;
};

export type GetSiteDataRequest = {
  token: string;
  siteId: string;
};
