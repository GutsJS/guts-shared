export type FormResponses = {
  id: string;
  properties: {
    [key: string]: any;
  };
  createdAt: Date;
  updatedAt: Date;
  archived: boolean;
};

export type FormDataResponse = {
  formResponses: FormResponses;
  formFields: HubspotFormField[];
};

export type HubspotFormField = {
  updatedAt: Date;
  createdAt: Date;
  name: string;
  label: string;
  type: 'enumeration' | 'date' | 'date-time' | 'string' | 'number';
  fieldType:
    | 'booleancheckbox'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'number'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea';
  description: string;
  groupName: string;
  options: any[];
  createdUserId: number;
  updatedUserId: number;
  displayOrder: number;
  calculated: boolean;
  externalOptions: boolean;
  archived: boolean;
  hasUniqueValue: boolean;
  hidden: boolean;
  showCurrencySymbol: boolean;
  modificationMetadata: {
    archivable: boolean;
    readOnlyDefinition: boolean;
    readOnlyValue: boolean;
  };
  formField: boolean;
};

export type HubspotFormGroup = {
  id: string;
  name: string;
  guid: string;
};

export const HubspotFormGroups: HubspotFormGroup[] = [
  {
    id: 'client_skin_data_-_pre-consultation_questionnaire',
    name: 'Pre Consultation Questionnaire',
    guid: '3aaf9797-b29d-42e0-89bc-a53c5ab4a76c',
  },
  {
    id: 'client_skin_data_-_follow-ups',
    name: 'Follow-Ups',
    guid: '50edee3f-5297-45fe-b0ae-35ccf6953b53',
  },
  {
    id: 'client_skin_date_-_follow-up_pre_consultation_questionnaire',
    name: 'Follow-Up Pre Consultation Questionnaire',
    guid: '355147ae-5bf7-48b8-8d80-55b100a345cc',
  },
  {
    id: '6_week_after_consultation_-_skin_update_form',
    name: '6 Week After Consultation - Skin Update Form',
    guid: 'ec000d5c-0c89-4bf1-a8bb-05319ceedb16',
  },
  {
    id: 'consultation_1_-_client_information',
    name: 'Initial Consultation',
    guid: '2f4c756b-ad83-4d9f-a08c-6fd0f8adb336',
  },
];
