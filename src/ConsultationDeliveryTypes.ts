import { Node } from 'slate';
import { User } from './GlobalTypes';
import { firestore } from 'firebase';
import { v4 as uuid } from 'uuid';

export type ConsultationComponents = {
  version: 'live' | 'draft';
  publishedAt?: firestore.Timestamp;
  overview: BasicBlockType[];
  skincare_regimen: BasicBlockType[];
};

export type ConsultationComponentBlock = BasicBlockType;

export const ConsltationComponentGroups = [
  'Blank',
  'Components',
  'Dividers',
  'Non-Editable',
] as const;
export type ConsltationComponentGroups = typeof ConsltationComponentGroups[number];

export class BasicBlock implements BasicBlockType {
  id = '';
  group: ConsltationComponentGroups = 'Blank';
  title = '';
  column1Nodes?: Node[];
  column2Nodes?: Node[];
  column3Nodes?: Node[];
  variation?: 1 | 2 | 3;
  paddingTop?: number;
  paddingBottom?: number;
  previewHeight: number = 250;

  constructor() {
    this.id = uuid();
  }

  export(): BasicBlockTypeForDatabase {
    const {
      id,
      group,
      title,
      column1Nodes,
      column2Nodes,
      column3Nodes,
      variation,
      paddingTop,
      paddingBottom,
    } = this;
    return {
      id,
      group,
      title,
      ...(column1Nodes && { column1Nodes }),
      ...(column2Nodes && { column2Nodes }),
      ...(column3Nodes && { column3Nodes }),
      ...(variation && { variation }),
      ...(paddingTop !== undefined && { paddingTop }),
      ...(paddingBottom !== undefined && { paddingBottom }),
    };
  }

  variablesToReplace(user?: User) {}

  new(...args: any): BasicBlock {
    throw new Error(
      'New function not provided. Cannot create new instance of unknown default.'
    );
  }
}

export type BasicBlockType = BasicBlockTypeForDatabase &
  Partial<DefaultBlockListableType>;

export type BasicBlockTypeForDatabase = {
  id: string;
  title: string;
  group: ConsltationComponentGroups;
  previewImage?: string;
  column1Nodes?: Node[];
  column2Nodes?: Node[];
  column3Nodes?: Node[];
  variation?: 1 | 2 | 3;
  paddingTop?: number;
  paddingBottom?: number;
};

export type DefaultBlockListableType = {
  variablesToReplace?: (user?: User) => void;
  previewHeight: number;
};
