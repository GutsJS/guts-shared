import { Timestamp as FirestoreTimestamp } from 'firebase/firestore/lite';

export type Timestamp = FirestoreTimestamp | string;
