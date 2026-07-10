export type CritiqueCategory =
  | 'philosophical'
  | 'moral'
  | 'scientific'
  | 'historical'
  | 'existential';

export interface CritiqueCase {
  claim: string;
  source: string;
  response: string;
}

export interface CritiqueObjection {
  id: string;
  slug: string;
  name: string;
  category: CritiqueCategory;
  shortDescription: string;
  background: string; // origin and leading proponents of the critique
  skepticPosition: string; // the strongest steelman statement of the objection
  christianResponse: string; // the substantive Christian reply
  keySources: string[];
  keyCases?: CritiqueCase[];
  pastoralNote?: string;
}

export interface CritiqueCategoryInfo {
  id: CritiqueCategory;
  name: string;
  description: string;
  objectionCount: number;
}
