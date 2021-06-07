import { Service } from '../StripeTypes';
import { User } from '../User';

export const getPriceFromService = (service: Service, skinMentor: User) => {
  if (!service) return null;
  if (!skinMentor) return null;
  return service.price.find(
    (priceItem) =>
      priceItem.price_level === (skinMentor.price_level || 'standard')
  );
};
