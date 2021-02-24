export type Task<WorkerType extends keyof WorkerTypes> = {
  worker: WorkerType;
  performAt: firebase.firestore.Timestamp;
  status: TaskStatus;
  options?: WorkerTypes[WorkerType];
};

export type TaskStatus = 'scheduled' | 'canceled' | 'completed' | 'error';

export type Workers = {
  [key in keyof WorkerTypes]: (
    options: WorkerTypes[key]
  ) => Promise<TaskStatus>;
};

export type WorkerTypes = {
  'send-chat-unread-notification': {
    messageId: string;
    subjectUserId: string;
  };
  'skin-profile-publish-reminder': {
    daysAfterConsultation: number;
    clientUserId: string;
    consultationId: string;
    consultantId: string;
  };
};
