import { Currencies, CurrencySymbols } from './GlobalTypes';

import { CountryCode } from 'libphonenumber-js';

export type IpStackResponse = {
  city: string;
  connection: {
    asn: number;
    isp: string;
  };
  continent_code: string;
  continent_name: string;
  country_code: CountryCode;
  country_name: string;
  currency: {
    code: Currencies | string;
    name: string;
    plural: string;
    symbol: CurrencySymbols;
    symbol_native: CurrencySymbols;
  };
  ip: string;
  latitude: number;
  location: {
    geoname_id: number;
    capital: string;
    country_flag: string;
    country_flag_emoji: string;
    country_flag_emoji_unicode: string;
    is_eu: boolean;
    calling_code: string;
    languages: {
      code: string;
      name: string;
      native: string;
    }[];
  };
  longitude: number;
  region_code: string;
  region_name: string;
  time_zone: {
    id: string;
    current_time: string;
    gmt_offset: number;
    code: string;
    is_daylight_saving: boolean;
  };
  type: string;
  zip: string;
};
