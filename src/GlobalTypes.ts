import * as firebase from 'firebase/app';

import { Service } from './StripeTypes';

export type Types = {
  [key in AllTypes]: TypeObject;
};

export type TypeObject = { values: string[] };

export const BaseProperties = [
  'skin_type',
  'skin_condition',
  'skin_mood',
] as const;
export type BaseProperties = typeof BaseProperties[number];

export const UserSpecificProperties = [] as const;
export type UserSpecificProperties = typeof UserSpecificProperties[number];

export const UserProperties = [
  ...BaseProperties,
  ...UserSpecificProperties,
] as const;
export type UserProperties = typeof UserProperties[number];

export const ProductSpecificProperties = [
  'highlighted_ingredients',
  'function',
  'texture',
  'contraindication',
  'category',
  'type',
  'mineral_or_chemical',
  'level',
] as const;
export type ProductSpecificProperties =
  typeof ProductSpecificProperties[number];

export const ProductProperties = [
  ...BaseProperties,
  ...ProductSpecificProperties,
] as const;
export type ProductProperties = typeof ProductProperties[number];

export const AllTypes = [
  ...BaseProperties,
  ...ProductSpecificProperties,
  ...UserSpecificProperties,
  'brand_category',
  'retailers',
] as const;
export type AllTypes = typeof AllTypes[number];

export type Brand = {
  id: string;
  image: string;
  name: string;
  description: string;
  category: string;
};

export type Hashtags = {
  [key: string]: Hashtag;
};

export type FlattenedHashtag = {
  hashtag: string;
} & Hashtag;

export type Hashtag = {
  d: string;
  pn: string;
  docId: string;
};

export type Brands = {
  [brand_id: string]: Brand;
};

export type ProductLink = ProductLinkWithoutID & {
  id: string;
};

export type ProductLinkWithoutID = {
  price?: number;
  url?: string;
  currency?: Currencies;
  variant?: string;
  retailer?: string;
  skip_scrape_until?: Date;
  archived?: boolean;
};

export const Currencies = ['USD', 'GBP'] as const;
export type Currencies = typeof Currencies[number];

export const PriceLevels = ['standard', 'founder'] as const;
export type PriceLevels = typeof PriceLevels[number];

export type CurrencySymbols = '$' | '£';

export const CurrencyToSymbol: { [key in Currencies]: CurrencySymbols } = {
  USD: '$',
  GBP: '£',
};

export type Product = {
  id: string;
  name: string;
  product?: string;
  description?: string;
  image?: string;
  image_400x400?: string;
  image_800x800?: string;
  product_links: ProductLink[];
  unavailable?: boolean;
  needs_review?: boolean;
  cruelty_free?: boolean;
  vegan?: boolean;
  brand_id?: string;
  ingredients?: string;
  usage?: string;
  spf?: number;
  pvao?: string;
} & {
  [key in ProductProperties]?: string[];
};

export type PersonalizedProductFields = {
  notes?: string; // @TODO remove LIO-256
  regimenBoosterOrder?: number; // @TODO remove LIO-256
  regimenMorningOrder?: number; // @TODO remove LIO-256
  regimenEveningOrder?: number; // @TODO remove LIO-256

  selected_product_link?: string;
  quantity?: number;
  prideority?: 1 | 2 | 3;
  purchased?: boolean; // LIO-281

  morning?: ProductClassificationOptions;
  evening?: ProductClassificationOptions;
  holisticItem?: ProductClassificationOptions;
};

export type ProductClassificationOptions = {
  description?: string;
  usage?: ProductUsage;
  isBooster?: boolean;
  regimeOrder?: number;
  alternativeProducts?: AlternativeProduct[];
};

export type AlternativeProduct = {
  id: string;
  title: string;
};

export const RepeatingBasis = ['none', 'weekly', 'daily'] as const;
export type RepeatingBasis = typeof RepeatingBasis[number];

export const ProductsPerDayLimiter = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
] as const;
export type ProductsPerDayLimiter = typeof ProductsPerDayLimiter[number];

export type ProductUsage = {
  notes?: string;
  non_repeating_dates?: { [date: string]: string };
} & (WeeklyRepeatingOptions | DailyRepeatingOptions | NoRepeatingOptions);

export type WeeklyRepeatingOptions = {
  repeating_basis: 'weekly';
  repeating_options?: { [key in DaysOfTheWeek]?: ProductsPerDayLimiter };
};

export type DailyRepeatingOptions = {
  repeating_basis: 'daily';
  repeating_options?: {
    startDate: string;
    interval: number;
    step: ProductsPerDayLimiter;
  };
};

export type NoRepeatingOptions = {
  repeating_basis: 'none';
  repeating_options?: undefined;
};

export type DatabaseShoppingCart = {
  [key: string]: PersonalizedProductFields;
};

export type AddressObj = {
  address?: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
  placeId?: string;
};

export type Invoice = {
  shippingAddress: AddressObj;
  currency: Currencies;
  paymentMethodId: string;
  products: {
    [key: string]: {
      productLinkId: string;
      quantity: number; // only here for statistic tracking
      price: number;
      trackingNumber?: string;
    };
  };
  baseFee: number;
  totalPrice: number;
  skinProfileVersion: string;
  stripePaymentId?: string | undefined;
};

export type ClientRelationship = {
  client_id: string;
  consultant_id: string;
};

export type DaysOfWeekInStringNumbers = '0' | '1' | '2' | '3' | '4' | '5' | '6';

export type Consultation = {
  id?: string;
  consultant_id: string;
  client_id: string;
  calendar_event_id: string;
  video_link?: string;
  google_calendar_link?: string;
  time: firebase.firestore.Timestamp;
  service_id: string;
  paymentId?: string;
  skinMentorPaid?: boolean;
  isPrevious?: boolean; // means that the consultation has already happened (probably on previous scheduling platform - acuity)
};

export type Review = {
  id: string;
} & Review_FirestoreDoc;

export type Review_FirestoreDoc = {
  body: string;
  consultant_id: string;
  customer_id: string;
  name: string;
  rating: number;
  image: string;
  ts: firebase.firestore.Timestamp;
  showcase?: 1 | 2 | 3;
};

export type ServicesObject = {
  [key: string]: Service;
};

export type SkincareRegimenProduct = {};

export type DaysOfTheWeek =
  | 'Mon'
  | 'Tue'
  | 'Wed'
  | 'Thu'
  | 'Fri'
  | 'Sat'
  | 'Sun';

export const DaysOfTheWeekToFullDay = {
  Mon: 'monday',
  Tue: 'tuesday',
  Wed: 'wednesday',
  Thu: 'thursday',
  Fri: 'friday',
  Sat: 'saturday',
  Sun: 'sunday',
};

export type SkincareRegimen = {
  repeating_products: {
    [key in DaysOfTheWeek]: {
      [key in TimeOfDay]: string[];
    };
  };
  non_repeating_products: {
    [key in string]: {
      [key in TimeOfDay]: { productId: string; order: number }[];
    };
  };
};

export type CalendarSkincareRegimenList = {
  [key in DaysOfTheWeek]: {
    [key in TimeOfDay]: CalendarSkincareRegimenProductItem[];
  };
};

export type CalendarSkincareRegimenProductItem = {
  productId: string;
  displayName: string;
  nonRepeating?: boolean;
};

export const TimeOfDay = ['evening', 'morning', 'booster'] as const;
export type TimeOfDay = typeof TimeOfDay[number];

export const PaletteColors = ['primary', 'secondary', 'tertiary'];

export const Colors = [
  'green',
  'gold',
  'sienna',
  'cream',
  'taupe',
  'pink',
  'light',
  'blue',
  'text',
  'paragraph',
  'success',
  'warning',
  'danger',
  'dark',
  'medium',
  'white',
];
