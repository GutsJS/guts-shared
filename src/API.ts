import { NotificationEvents } from './NotificationSystem';
import { User } from './GlobalTypes';

export type APIRequest = {
  devMode?: boolean;
};

export type TriggerNotificationAPIRequest = APIRequest & {
  subjectUserId: string;
  idToken: string;
  notificationEvent: NotificationEvents;
};

export type CreateCalendarEventRequest = APIRequest & {
  time: string;
  consultationId: string;
  clientId: string;
  consultantId: string;
  serviceId: string;
  actor: 'consultant' | 'client';
};

export type CreateCalendarEventFunction = {
  consultant: User;
  client: User;
  time: string;
  consultationId: string;
  serviceId: string;
  actor: 'consultant' | 'client';
};

export type UpdateCalendarEventRequest = CreateCalendarEventRequest & {
  eventId: string;
  video_link: string;
};

export type DeleteCalendarEventRequest = APIRequest & {
  calendarEventId: string;
  consultantId: string;
  clientId: string;
  serviceHubspotListId: string | number;
  serviceHubspotDateFieldName: string | undefined;
  consultationTime: string;
};
