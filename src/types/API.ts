import { SiteData } from '..';

export type APIError = {
  errMsg: string;
};

export type APIRequests = {
  getSiteData: {
    request: {
      token: string;
      siteId: string;
    };
    response:
      | APIError
      | {
          success: boolean;
          siteData: SiteData;
        };
  };
  saveSiteData: {
    request: {
      token: string;
      siteData: SiteData;
    };
    response:
      | APIError
      | {
          success: boolean;
          siteData: SiteData;
        };
  };
};
