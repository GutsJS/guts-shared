import { FormResponseField } from './Form';

export namespace PreConsultationQuestionnaire {
  export const FormSlugs = [
    'intro',
    'information',
    'motivation',
    'motivation-message',
    'skin-feeling',
    'skin-conditions',
    'skin-appearance',
    'skin-texture',
    'skin-secretions',
    'skin-sensitivity',
    'skin-profile-outro',
    'budget-GBP',
    'budget-USD',
    'current-products',
    'skin-mentors-search',
  ] as const;

  export type Responses = {
    [key in typeof FormSlugs[number]]?: FormResponseField;
  };
}
