import { SiteData } from '..';

export type APIError = {
  message: string;
};

export type SaveSiteDataRequest = {
  token: string;
  siteData: SiteData;
};

export type SaveSiteDataResponse = {
  success: boolean;
  siteData: SiteData;
};

export type GetSiteDataRequest = {
  token: string;
  siteId: string;
};

export type GetSiteDataResponse = {
  success: boolean;
  siteData: SiteData;
};

export type PublicRequests = 'saveSiteData' | 'getSiteData';

export type APIRequests<RequestName = PublicRequests> =
  RequestName extends 'saveSiteData'
    ? {
        request: SaveSiteDataRequest;
        response: APIError | SaveSiteDataResponse;
      }
    : RequestName extends 'getSiteData'
    ? {
        request: GetSiteDataRequest;
        response: APIError | GetSiteDataResponse;
      }
    : never;
