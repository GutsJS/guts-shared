import * as firebase from 'firebase/app';

import { CountryCode } from 'libphonenumber-js';
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
export type ProductSpecificProperties = typeof ProductSpecificProperties[number];

export const ProductProperties = [
  ...BaseProperties,
  ...ProductSpecificProperties,
] as const;
export type ProductProperties = typeof ProductProperties[number];

export const UserProperties = [
  ...BaseProperties,
  ...UserSpecificProperties,
] as const;
export type UserProperties = typeof UserProperties[number];

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
};

export const Currencies = ['USD', 'GBP'] as const;
export type Currencies = typeof Currencies[number];

export const PriceLevels = [1, 2, 3, 4] as const;
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
  notes?: string;
  selected_product_link?: string;
  quantity?: number;
  regimenMorningOrder?: number;
  regimenEveningOrder?: number;
  regimenBoosterOrder?: number;
};

export type DatabaseShoppingCart = {
  [key: string]: PersonalizedProductFields;
};

export type User = Partial<Client> & Partial<Consultant>;

export type Client = {} & UserBase;

export type UserBase = {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  regimen_live?: SkincareRegimen;
  regimen?: SkincareRegimen;
  consultant_id?: string;
  avatar?: string;
  avatar_400x400?: string;
  login_method: 'google' | 'email' | 'admin_created';
  phone_number?: string;
  hubspot_id?: string;
  is_admin?: boolean;
  stripe_customer_id?: string;
  consultant_private_notes?: string;
  shopping_cart_live?: DatabaseShoppingCart;
  shopping_cart?: DatabaseShoppingCart;
  preferred_brands?: string[];
  currency?: Currencies;
  country_code?: CountryCode;
  formattedName?: string;
  test_user?: boolean;
  time_zone?: string;
  last_login?: firebase.firestore.Timestamp;
  next_consultation_ref: firebase.firestore.DocumentReference;
  profile_visibility?: ProfileVisibility;
  address?: AddressObj;
  shoppingCartConfirmed?: boolean;
} & {
  [key in UserProperties]?: string[];
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
      quantity: number;
      price: number;
      trackingNumber?: string;
    };
  };
  baseFee: number;
  totalPrice: number;
  readyForCharge: boolean;
  charged: boolean;
};

export const ProfileVisibility = ['private', 'public'] as const;
export type ProfileVisibility = typeof ProfileVisibility[number];

export type ClientRelationship = {
  client_id: string;
  consultant_id: string;
};

export type Consultant = {
  bio?: string;
  passed_training?: boolean;
  price_level: PriceLevels;
  is_consultant: boolean;
  requires_review?: boolean;
  default_intro_chat_message?: string;
  services_offered?: string[];
  specialty_skills: { [key in UserProperties]?: string[] };
  average_rating?: number;
  work_hours: WorkHours;
} & UserBase;

export type WorkHours = {
  [key in DaysOfWeekInStringNumbers]: DayAvailability | null;
};

export type DaysOfWeekInStringNumbers = '0' | '1' | '2' | '3' | '4' | '5' | '6';

type DayAvailability = {
  start: {
    h: number;
    m: number;
  };
  end: {
    h: number;
    m: number;
  };
};

export type Consultation = {
  id?: string;
  consultant_id: string;
  client_id: string;
  calendar_event_id: string;
  video_link?: string;
  google_calendar_link?: string;
  time: firebase.firestore.Timestamp;
  service_id: string;
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

export type Customer = User & {};

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
