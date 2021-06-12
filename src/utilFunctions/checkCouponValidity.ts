import { PriceLevels } from '../GlobalTypes';
import { Stripe } from 'stripe';
import firebase from 'firebase';
import { isBefore } from 'date-fns';

export const checkCouponValidity = async (
  promotionCode: Stripe.PromotionCode | undefined,
  userDocRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>,
  serviceSlug: string | undefined,
  price_level: PriceLevels
) => {
  if (!promotionCode) {
    throw new Error('No promotion code found');
  } else {
    if (promotionCode.expires_at) {
      // Stripes timestamps are in seconds not milliseconds for some reason
      if (isBefore(new Date(promotionCode.expires_at * 1000), new Date())) {
        throw new Error('Promotion Code Expired');
      }
    }
    if (promotionCode.coupon.redeem_by) {
      if (
        // Stripes timestamps are in seconds not milliseconds for some reason
        isBefore(new Date(promotionCode.coupon.redeem_by * 1000), new Date())
      ) {
        throw new Error('Promotion Code Expired');
      }
    }
    // this doesnt work since you cannot update the times a stripe coupon has been used manually.
    // if (promotionCode.coupon.max_redemptions) {
    //   if (
    //     promotionCode.coupon.times_redeemed >
    //     promotionCode.coupon.max_redemptions
    //   ) {
    //     throw new Error('Promotion Code has hit the redeem limit');
    //   }
    // }
    if (promotionCode.restrictions.first_time_transaction) {
      const previousConsultations = await userDocRef
        .collection('consultations')
        .get();
      if (previousConsultations.docs.length) {
        throw new Error(
          'Promotion Code only valid for first time consultations'
        );
      }
    }
    if (
      promotionCode.metadata.service &&
      serviceSlug &&
      promotionCode.metadata.service !== serviceSlug
    ) {
      throw new Error('Promotion Code not valid for this service');
    }
    if (
      promotionCode.metadata.price_level &&
      price_level &&
      promotionCode.metadata.price_level !== price_level
    ) {
      throw new Error('Promotion Code not valid for this service');
    }
  }
  return true;
};
