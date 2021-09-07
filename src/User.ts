import {
  AddressObj,
  Currencies,
  DaysOfWeekInStringNumbers,
  PriceLevels,
  UserProperties,
} from './GlobalTypes';

import { CountryCode } from 'libphonenumber-js';

export const ProfileVisibility = ['private', 'public'] as const;
export type ProfileVisibility = typeof ProfileVisibility[number];

export type Consultant = {
  bio?: string;
  passed_training?: boolean;
  price_level: PriceLevels;
  requires_review?: boolean;
  default_intro_chat_message?: string;
  specialty_skills: { [key in UserProperties]?: string[] };
  average_rating?: number;
  work_hours: WorkHours;
  minimumAvailabilityNoticeInHours?: number;
  maximumConsultationsPerDay?: number;
} & UserBase;

export type User = Partial<Client> & Partial<Consultant>;

export type Client = {} & UserBase;

export type UserBase = {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  consultant_id?: string;
  avatar?: string;
  avatar_400x400?: string;
  login_method: 'google' | 'email' | 'admin_created';
  phone_number?: string;
  hubspot_id?: string;
  is_admin?: boolean;
  is_consultant: boolean;
  stripe_customer_id?: string;
  consultant_private_notes?: string;
  preferred_brands?: string[];
  currency?: Currencies;
  currency_origin?: 'admin-set' | 'user-set';
  country_code?: CountryCode;
  formattedName?: string;
  test_user?: boolean;
  time_zone?: string;
  last_login?: firebase.firestore.Timestamp;
  next_consultation_ref: firebase.firestore.DocumentReference;
  next_consultation_time?: firebase.firestore.Timestamp;
  profile_visibility?: ProfileVisibility;
  address?: AddressObj;
  openInvoice?: firebase.firestore.DocumentReference;
  liveSkinProfile?: firebase.firestore.DocumentReference;
  forceLogout?: boolean;
  createdAt?: firebase.firestore.Timestamp;
  heardAboutFrom?: string;
} & {
  [key in UserProperties]?: string[];
};

export type WorkHours = {
  [key in DaysOfWeekInStringNumbers]: DayAvailability | null;
};

export type DayAvailability = {
  start: {
    h: number;
    m: number;
  };
  end: {
    h: number;
    m: number;
  };
};
