import { PreConsultationQuestionnaire } from './PreConsultationQuestionnaire';
import { firestore } from 'firebase';

// @TODO tie in better types for forms
export type Form = {
  id: string;
  submitted_at: firestore.Timestamp;
  name: string;
  responses: PreConsultationQuestionnaire.Responses;
};
