export interface ApologeticsMethod {
  id: string;
  slug: string;
  name: string;
  description: string;
  keyFigures: { name: string; work: string }[];
  methodology: string;
  keyArguments: string[];
  biblicalBasis: string[];
  strengths: string[];
  criticisms: string[];
  sources: string[];
}

export interface TheologyTopic {
  id: string;
  slug: string;
  name: string;
  category: 'doctrine' | 'atonement' | 'eschatology' | 'creation' | 'philosophy';
  description: string;
  biblicalBasis: { reference: string; teaching: string }[];
  historicalDevelopment?: string;
  keyTerms?: { term: string; definition: string }[];
  views?: {
    name: string;
    description: string;
    keyProponents: string[];
    strengths: string[];
    weaknesses: string[];
  }[];
  heresiesToAvoid?: { name: string; error: string }[];
  sources: string[];
}
