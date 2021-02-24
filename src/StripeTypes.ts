import { Currencies, PriceLevels } from './GlobalTypes';

export type CreditCardTypes =
  | 'Visa'
  | 'American Express'
  | 'Diners Club'
  | 'Discover'
  | 'JCB'
  | 'MasterCard'
  | 'UnionPay'
  | 'Visa'
  | 'Unknown';

export type Service = {
  id: string;
  name: string;
  description: string;
  durationInMinutes: number;
  images: any[];
  price: Price[];
  hubspotListId?: string;
  hubspotDateFieldName?: string;
};

export type Price = {
  id: string;
  currency: Currencies;
  tier: PriceLevels;
  unit_amount: number;
};
