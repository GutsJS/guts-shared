import { FormResponseField } from './Form';

export namespace PreConsultationQuestionnaire {
  export const FormSlugs = [
    'intro',
    'consent',
    'information',
    'motivation',
    'motivation-message',
    'skin-feeling',
    'have-skin-conditions',
    'skin-conditions',
    'skin-appearance',
    'skin-texture',
    'skin-sensitivity',
    'skin-triggers',
    'skin-secretions',
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
