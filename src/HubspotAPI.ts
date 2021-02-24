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
};

export const HubspotFormGroups: HubspotFormGroup[] = [
  {
    id: 'client_skin_data_-_pre-consultation_questionnaire',
    name: 'Pre Consultation Questionnaire',
  },
  {
    id: 'client_skin_data_-_follow-ups',
    name: 'Follow-Ups',
  },
  {
    id: 'client_skin_date_-_follow-up_pre_consultation_questionnaire',
    name: 'Follow-Up Pre Consultation Questionnaire',
  },
  {
    id: '6_week_after_consultation_-_skin_update_form',
    name: '6 Week After Consultation - Skin Update Form',
  },
  {
    id: 'consultation_1_-_client_information',
    name: 'Initial Consultation',
  },
];
