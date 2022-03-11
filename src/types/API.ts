import { SiteData } from '..';

export type APIError = {
  error_msg: string;
};

export type APIRequests = {
  getSiteData: {
    request: {
      tokenType?: 'idToken' | 'readOnly';
      token?: string;
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
