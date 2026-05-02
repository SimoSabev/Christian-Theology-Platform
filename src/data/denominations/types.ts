export type TraditionCategory = 'eastern_orthodox' | 'oriental_orthodox' | 'assyrian' | 'roman_catholic' | 'protestant' | 'other';

export interface Denomination {
  id: string;
  slug: string;
  name: string;
  category: TraditionCategory;
  founder?: string;
  yearFounded?: number;
  parentTradition?: string;
  reasonForSplit?: string;
  estimatedMembership: string;
  geographicConcentration: string[];
  headTitle?: string;
  headquarters?: string;
  keyTheologicalDistinctives: string[];
  keyDocuments?: string[];
  subBranches?: {
    name: string;
    year?: number;
    membership?: string;
    notes?: string;
  }[];
  sources: string[];
}

export interface Schism {
  id: string;
  slug: string;
  name: string;
  year: number;
  parties: { name: string; position: string }[];
  causes: string[];
  resolution?: string;
  currentStatus: string;
  sources: string[];
}
