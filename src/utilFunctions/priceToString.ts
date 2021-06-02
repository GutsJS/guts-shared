import { Currencies, CurrencyToSymbol } from '../GlobalTypes';

export const priceToString = (
  price: number | undefined,
  currency: Currencies | undefined
) => {
  if (!price || !currency) return '--';
  return CurrencyToSymbol[currency] + String(price.toFixed(2));
};
