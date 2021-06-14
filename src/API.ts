import { Consultation } from './GlobalTypes';
import { NotificationEvents } from './NotificationSystem';
import { Service } from './StripeTypes';
import { User } from './User';

export type APIRequest = {
  devMode?: boolean;
};

export type AuthenticatedAPIRequest = APIRequest & {
  idToken: string;
};

export type NotificationChannels = 'email' | 'in-app';

export type TriggerNotificationAPIRequest = AuthenticatedAPIRequest & {
  subjectUserId: string;
  notificationEvent: NotificationEvents;
  channels?: NotificationChannels[];
  dynamicData?: {
    [key: string]: any;
  };
};

export type ScheduleConsultationEventRequest = AuthenticatedAPIRequest & {
  time: string;
  clientId: string;
  consultantId: string;
  serviceId: string;
  paymentMethodId: string | undefined;
  promotionCodeId: string | undefined;
  isPrevious?: boolean;
  actor: 'consultant' | 'client';
};

export type CreateCalendarEventFunction = {
  skinMentor: User;
  client: User;
  time: string;
  consultationId: string;
  service: Service;
  actor: 'consultant' | 'client';
};

export type UpdateCalendarEventRequest = AuthenticatedAPIRequest & {
  consultation: Consultation;
};

export type DeleteCalendarEventRequest = AuthenticatedAPIRequest & {
  consultation: Consultation;
  service: Service;
};
