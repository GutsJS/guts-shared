import * as firebase from 'firebase';

import { Product } from './GlobalTypes';
import { User } from './User';
import { getResizedImageURI } from './utils';

export const transformProduct = async (
  rawDoc: any,
  storage?: firebase.storage.Reference
) => {
  const productObj: Product = {
    id: rawDoc.id,
    ...rawDoc.data(),
  };

  if (storage) {
    productObj.image_400x400 = await getResizedImageURI(
      productObj.image,
      400,
      storage
    );
    productObj.image_800x800 = await getResizedImageURI(
      productObj.image,
      800,
      storage
    );
  }

  return productObj;
};

export const transformUser = async (
  rawDoc: any,
  storage?: firebase.storage.Reference
) => {
  const userObj: User = {
    id: rawDoc.id,
    ...rawDoc.data(),
  };

  userObj.formattedName = getFormattedName(
    userObj?.first_name,
    userObj?.last_name
  );

  if (storage) {
    userObj.avatar_400x400 = await getResizedImageURI(
      userObj.avatar,
      400,
      storage
    );
  }

  return userObj;
};

export const getFormattedName = (
  firstName: string | undefined,
  lastName: string | undefined
) => {
  return `${firstName ? firstName + ' ' : ''}${lastName ? lastName : ''}`;
};
