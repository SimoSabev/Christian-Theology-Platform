export interface InterlinearWord {
  id: string; // e.g., 'j1-1-1'
  original: string; // e.g., 'Ἐν'
  transliteration: string; // e.g., 'En'
  english: string; // e.g., 'In'
  strongs: string; // e.g., 'G1722'
  morphology?: string; // e.g., 'Prep'
  isHighlightedFocus?: boolean; // UI state helper
}

export interface ParallelVerse {
  id: string;
  reference: string;
  textDirection: 'ltr' | 'rtl'; // For Hebrew vs Greek
  words: InterlinearWord[];
}

export interface SemanticStep {
  id: string;
  title: string;
  content: string; // Markdown/HTML string
  focusWordIds: string[]; // which InterlinearWord IDs to highlight in this step
}

export interface SemanticDefense {
  id: string;
  argumentId: string; // Maps to standard Argument ID
  objectionTarget: string; // e.g., 'Jehovah\'s Witnesses (NWT translation)'
  title: string;
  description: string;
  baselineVerse: ParallelVerse; // The primary verse being analyzed
  parallelVerses?: ParallelVerse[]; // Optional verses to show alongside
  steps: SemanticStep[];
}
