export type SystemNotification = {
  actor: 'lionne';
  verb: 'system';
  object: string;
  time: string;
  customMessage: string;
  slackChannel?: SlackChannels;
  emojiIcon: string;
  routerLink?: string;
  requireCheck?: boolean;
  foreign_id?: string;
  recipients?: 'owners' | 'admins' | 'subject' | 'subject-consultant';
  sendEmail?:
    | boolean
    | { template: string; dynamicData: { [key: string]: string } };
};

type SlackChannels =
  | 'deploy_notifications'
  | 'website_contact_form'
  | 'weekly_platform_statistics'
  | 'sms_number'
  | 'platform_notifications'
  | 'onboarding_lead'
  | 'order_notification';

export const NotificationEvents = [
  'user-given-consultant-access',
  'user-consultant-access-revoked',
  'consultation-updated',
  'consultation-scheduled-by-consultant',
  'consultation-scheduled-by-client',
  'consultation-canceled-by-consultant',
  'skin-profile-published',
  'skin-profile-update',
  'skin-profile-calendar-update',
  'skin-profile-regime-update',
  'consultation-review-requested',
  'skin-profile-publish-reminder-3-day',
  'skin-profile-publish-reminder-4-day',
  'review-created',
  'client-confirmed-product-selection',
  'client-invoice-charged',
  'upcoming-consultation-reminder',
] as const;
export type NotificationEvents = typeof NotificationEvents[number];
