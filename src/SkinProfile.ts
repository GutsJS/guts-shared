import { DatabaseShoppingCart, SkincareRegimen } from './GlobalTypes';

import { BasicBlockType } from './ConsultationDeliveryTypes';
import { firestore } from 'firebase';

export type SkinProfile = {
  version: string;
  shoppingCart: DatabaseShoppingCart;
  regimen: SkincareRegimen; // @TODO remove LIO-256
  shoppingCartConfirmed: boolean;
  publishedAt?: firestore.Timestamp;
  createdAt: firestore.Timestamp | null;
  updatedAt: firestore.Timestamp | null;
  updateCount: number | null; // intended to ensure sequential saving and also to measure save counts so we can approach versioning as a feature in the future
  skinProfileBlocks: BasicBlockType[];
  regimenBlocks: BasicBlockType[];
  sessionType: 'Initial' | 'Follow Up' | undefined;
};

export type SkinProfileTemplate = {
  name: string;
  id: string;
  updatedAt: firestore.Timestamp;
  createdAt: firestore.Timestamp;
  skinProfileBlocks: BasicBlockType[];
  deletedAt: firestore.Timestamp;
  visible: boolean;
};
