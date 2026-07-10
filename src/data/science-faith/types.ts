export interface ChristianScientist {
  id: string;
  slug: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  field: string;
  keyContribution: string;
  faithTradition: string;
  faithStatement?: string;
  era: 'historical' | 'contemporary';
  sources: string[];
}

export interface ScienceFaithConflict {
  id: string;
  slug: string;
  name: string;
  dateRange: string;
  popularNarrative: string;
  actualHistory: string;
  christianResponse: string;
  resolution?: string;
  sources: string[];
}

export interface BibleTranslation {
  id: string;
  slug: string;
  name: string;
  year: number;
  translator: string;
  sourceTexts: string;
  language: string;
  significance: string;
  controversy?: string;
  sources: string[];
}

export interface CanonFormation {
  id: string;
  slug: string;
  name: string;
  testament: 'old' | 'new';
  description: string;
  keyMilestones: { date: string; event: string; significance: string }[];
  booksExcluded?: { name: string; reason: string }[];
  sources: string[];
}

export interface TextualCriticismMethod {
  id: string;
  slug: string;
  name: string;
  description: string;
  keyScholars: string[];
  keyManuscripts?: string[];
  significance: string;
  sources: string[];
}
