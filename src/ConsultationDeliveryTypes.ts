import { Node } from 'slate';
import { v4 as uuid } from 'uuid';

export type ConsultationComponentBlock = BasicBlockType;

export const ConsltationComponentGroups = [
  'Blank',
  'Components',
  'Dividers',
  'Non-Editable',
] as const;
export type ConsltationComponentGroups =
  typeof ConsltationComponentGroups[number];

// TODO refactor how these blocks are structured... dont need classes anymore
// Idea - allow admins to create/set predefined blocks to be used on skin profile templates.
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
  // TODO proper type checking for component block types
  options?: { [key: string]: any };

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
      options,
    } = this;
    return {
      id,
      group,
      title,
      ...(options && { options }),
      ...(column1Nodes && { column1Nodes }),
      ...(column2Nodes && { column2Nodes }),
      ...(column3Nodes && { column3Nodes }),
      ...(variation && { variation }),
      ...(paddingTop !== undefined && { paddingTop }),
      ...(paddingBottom !== undefined && { paddingBottom }),
    };
  }

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
  // TODO proper type checking for component block types
  options?: { [key: string]: any };
};

export type DefaultBlockListableType = {
  previewHeight: number;
};
