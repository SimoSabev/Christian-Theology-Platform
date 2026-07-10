export type HistoryCategory = 'revival' | 'persecution' | 'figure' | 'mission';

export interface HistoricalEvent {
  id: string;
  slug: string;
  name: string;
  category: HistoryCategory;
  startYear: number;
  endYear?: number;
  location: string[];
  keyFigures: { name: string; dates: string; role: string }[];
  description: string;
  theologicalImpact?: string;
  estimatedConverts?: string;
  estimatedMartyrs?: string;
  significance: string;
  sources: string[];
}

export interface KeyFigure {
  id: string;
  slug: string;
  name: string;
  birthYear: number;
  deathYear: number;
  era: 'apostolic' | 'ante-nicene' | 'nicene' | 'medieval' | 'reformation' | 'post-reformation' | 'enlightenment' | 'modern';
  tradition: string;
  keyWorks: string[];
  theologicalContribution: string;
  significance: string;
  sources: string[];
}
