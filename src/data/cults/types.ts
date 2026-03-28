export type CultCategory =
  | 'jehovahs-witnesses'
  | 'lds'
  | 'arianism'
  | 'gnosticism'
  | 'islam';

export interface CultObjection {
  id: string;        // e.g., "jw-deity-of-christ"
  slug: string;      // e.g., "deity-of-christ"
  name: string;      // "The Deity of Christ"
  category: CultCategory;
  shortDescription: string;
  historicalBackground: string;
  cultPosition: string; // The cult's teaching
  orthodoxResponse: string; // The Christian response
  keySources: string[];
  semanticDefenseIds: string[]; // Links to semantic defense slide shows
}

export interface CultCategoryInfo {
  id: CultCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
  objectionCount: number;
}
