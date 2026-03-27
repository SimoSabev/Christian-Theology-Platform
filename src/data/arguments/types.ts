export interface ArgumentPremise {
  id: string;
  text: string;
  defense: string;
  sources: string[];
}

export interface Objection {
  id: string;
  title: string;
  description: string;
  response: string;
  sources: string[];
}

export interface Argument {
  id: string;
  slug: string;
  name: string;
  category: ArgumentCategory;
  shortDescription: string;
  historicalBackground: string;
  premises: ArgumentPremise[];
  conclusion: string;
  proponents: { name: string; era: string }[];
  objections: Objection[];
  significance: string;
  relatedArguments: string[];
  keySources: string[];
}

export type ArgumentCategory =
  | 'cosmological'
  | 'ontological'
  | 'teleological'
  | 'moral'
  | 'existential'
  | 'historical'
  | 'objections';

export interface CategoryInfo {
  id: ArgumentCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
  argumentCount: number;
}

export interface TreeNode {
  id: string;
  type: 'argument' | 'premise' | 'support' | 'objection' | 'response' | 'conclusion';
  text: string;
  status?: 'defended' | 'contested' | 'granted';
  sources?: string[];
  children?: TreeNode[];
}

export interface DebateRound {
  round: number;
  forSide: {
    claim: string;
    evidence: { text: string; strength: 'strong' | 'moderate' | 'contested'; source: string }[];
  };
  againstSide: {
    claim: string;
    evidence: { text: string; strength: 'strong' | 'moderate' | 'contested'; source: string }[];
  };
}

export interface Debate {
  id: string;
  argumentId: string;
  title: string;
  forLabel: string;
  againstLabel: string;
  rounds: DebateRound[];
}
