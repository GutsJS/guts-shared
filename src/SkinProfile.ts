import { DatabaseShoppingCart, SkincareRegimen } from './GlobalTypes';

import { BasicBlockType } from './ConsultationDeliveryTypes';
import { firestore } from 'firebase';

export type SkinProfile = {
  version: string;
  shoppingCart: DatabaseShoppingCart;
  regimen: SkincareRegimen; // @TODO remove LIO-256
  shoppingCartConfirmed: boolean;
  publishedAt?: firestore.Timestamp;
  skinProfileBlocks: BasicBlockType[];
  regimenBlocks: BasicBlockType[];
};
