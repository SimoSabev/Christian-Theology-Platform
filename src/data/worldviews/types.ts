export type WorldviewCategory = 'religion' | 'secular';

export interface Worldview {
  id: string;
  slug: string;
  name: string;
  category: WorldviewCategory;
  founder: string;
  dateFounded: string;
  sacredTexts: string[];
  beliefs: {
    god: string;
    afterlife: string;
    salvation: string;
    ethics: string;
  };
  estimatedMembership: string;
  majorBranches: string[];
  geographicConcentration: string[];
  keyDifferencesFromChristianity: {
    issue: string;
    christianity: string;
    thisWorldview: string;
  }[];
  apologeticIssues?: {
    topic: string;
    objection: string;
    response: string;
  }[];
  sources: string[];
}
