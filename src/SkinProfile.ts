import { DatabaseShoppingCart, SkincareRegimen } from './GlobalTypes';

import { BasicBlockType } from './ConsultationDeliveryTypes';
import { firestore } from 'firebase';

export type SkinProfile = {
  version: string;
  shoppingCart: DatabaseShoppingCart;
  regimen: SkincareRegimen;
  shoppingCartConfirmed: boolean;
  publishedAt?: firestore.Timestamp;
  skinProfileBlocks: BasicBlockType[];
  regimenBlocks: BasicBlockType[];
};
