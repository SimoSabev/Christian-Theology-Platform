/* ────────────────────────────────────────────────────────
 *  Biblical Manuscripts — Type Definitions
 * ──────────────────────────────────────────────────────── */

/** A single word in an interlinear display */
export interface InterlinearWord {
  /** Original-language word (Greek / Hebrew / Aramaic) */
  original: string;
  /** Latin-script transliteration */
  transliteration: string;
  /** Morphological parsing code, e.g. "V-PAI-3S" */
  parsing?: string;
  /** Human-readable parsing, e.g. "Verb, Present Active Indicative, 3rd Singular" */
  parsingFull?: string;
  /** Short English gloss */
  gloss: string;
  /** Strong's Concordance number, e.g. "G3056" */
  strongs?: string;
  /** Lemma / dictionary form */
  lemma?: string;
}

/** One verse or line of interlinear text */
export interface InterlinearVerse {
  /** Scripture reference, e.g. "John 18:37" */
  reference: string;
  /** The full original-language text of this verse as a single string */
  originalText: string;
  /** Word-by-word breakdown */
  words: InterlinearWord[];
}

/** A passage section containing multiple verses */
export interface ManuscriptPassage {
  /** Section title, e.g. "Recto (front)" or "Column A" */
  title: string;
  /** Which biblical book/chapter/verses */
  reference: string;
  /** Scholarly notes about this passage in this manuscript */
  notes: string;
  /** The interlinear verses */
  verses: InterlinearVerse[];
  /** Textual variants unique to this manuscript */
  variants?: TextualVariant[];
}

/** Notable textual variant in a manuscript */
export interface TextualVariant {
  /** Verse reference */
  reference: string;
  /** Reading in this manuscript */
  thisReading: string;
  /** Reading in the majority of other manuscripts */
  majorityReading: string;
  /** Scholarly assessment */
  note: string;
}

/** Image reference for a manuscript */
export interface ManuscriptImage {
  /** Direct URL (Wikimedia Commons, British Library, etc.) */
  url: string;
  /** Image caption */
  caption: string;
  /** Attribution / source */
  attribution: string;
  /** License info */
  license: string;
}

/** Full manuscript data */
export interface FullManuscript {
  /* ── Identity ── */
  id: string;
  designation: string;
  alternateName?: string;
  gregoryAland?: string;

  /* ── Classification ── */
  type: 'papyrus' | 'uncial' | 'minuscule' | 'scroll' | 'translation' | 'codex';
  script: 'greek' | 'hebrew' | 'aramaic' | 'latin' | 'syriac' | 'gothic' | 'coptic';
  textType?: string;

  /* ── Physical ── */
  date: string;
  material: string;
  dimensions?: string;
  totalLeaves?: string;
  columns?: number;
  linesPerPage?: string;
  format?: string;

  /* ── Provenance ── */
  location: string;
  discoveredBy?: string;
  discoveryDate?: string;
  discoveryLocation?: string;
  acquisitionHistory?: string;

  /* ── Content ── */
  contents: string;
  contentsDetail?: string;
  significance: string;
  detailedDescription: string;

  /* ── Images ── */
  images: ManuscriptImage[];

  /* ── Full Interlinear Text ── */
  passages: ManuscriptPassage[];

  /* ── Scholarship ── */
  bibliography: string[];
  relatedManuscripts?: string[];
  onlineResources?: { label: string; url: string }[];
}

/** Category for filtering */
export type ManuscriptCategory = 'papyri' | 'uncials' | 'scrolls' | 'translations';
