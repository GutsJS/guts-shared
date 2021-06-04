import { NotificationEvents } from './NotificationSystem';
import { Service } from './StripeTypes';
import { User } from './GlobalTypes';

export type APIRequest = {
  devMode?: boolean;
};

export type AuthenticatedAPIRequest = APIRequest & {
  idToken: string;
};

export type TriggerNotificationAPIRequest = AuthenticatedAPIRequest & {
  subjectUserId: string;
  notificationEvent: NotificationEvents;
  dynamicData?: {
    [key: string]: any;
  };
};

export type CreateCalendarEventRequest = APIRequest & {
  time: string;
  consultationId: string;
  clientId: string;
  consultantId: string;
  serviceId: string;
  actor: 'consultant' | 'client';
};

export type ScheduleConsultationEventRequest = AuthenticatedAPIRequest & {
  time: string;
  clientId: string;
  consultantId: string;
  serviceId: string;
  paymentMethodId: string;
  promotionCodeId: string | undefined;
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

export type UpdateCalendarEventRequest = CreateCalendarEventRequest & {
  eventId: string;
  video_link: string;
};

export type DeleteCalendarEventRequest = AuthenticatedAPIRequest & {
  calendarEventId: string;
  consultantId: string;
  clientId: string;
  serviceHubspotListId: string | number;
  serviceHubspotDateFieldName: string | undefined;
  consultationTime: string;
};
