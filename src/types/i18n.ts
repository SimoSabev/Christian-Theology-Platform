/**
 * i18n TypeScript Types for Theology Study Platform
 *
 * This file provides type definitions for all translation messages
 * across all 26 supported locales.
 */

import type { Locale } from '@/i18n/config';

/**
 * Common global components translations
 */
export interface CommonTranslations {
  search: string;
  readMore: string;
  sources: string;
  relatedArguments: string;
  openInTree: string;
  openInDebate: string;
  semanticDefense: string;
  language: string;
  viewAll: string;
  learnMore: string;
  back: string;
  close: string;
  loading: string;
  noResults: string;
  premise: string;
  conclusion: string;
  objection: string;
  response: string;
  support: string;
  keyProponents: string;
  historicalBackground: string;
  formalStatement: string;
  objectionsAndResponses: string;
  significance: string;
  keyDistinction: string;
  primarySource: string;
  searchPlaceholder: string;
}

/**
 * Navigation translations
 */
export interface NavTranslations {
  home: string;
  defend: string;
  compare: string;
  semantics: string;
  sources: string;
  explore: string;
  search: string;
  glossary: string;
  about: string;
}

/**
 * Home page translations
 */
export interface HomeTranslations {
  heroTitle: string;
  heroSubtitle: string;
  heroSearch: string;
  quickFilters: {
    scientific: string;
    philosophical: string;
    historical: string;
    theological: string;
  };
}

/**
 * Defend page translations
 */
export interface DefendTranslations {
  title: string;
  subtitle: string;
  categories: {
    atheism: string;
    cults: string;
    skepticism: string;
  };
}

/**
 * Compare page translations
 */
export interface CompareTranslations {
  title: string;
  subtitle: string;
  keyBeliefs: string;
  historicalBackground: string;
  practices: string;
  sacraments: string;
}

/**
 * Explore page translations
 */
export interface ExploreTranslations {
  title: string;
  subtitle: string;
  argumentTree: string;
  debateMode: string;
  timeline: string;
  strengths: {
    strong: string;
    moderate: string;
    weak: string;
    contested: string;
  };
}

/**
 * Sources page translations
 */
export interface SourcesTranslations {
  title: string;
  subtitle: string;
  categories: {
    'church-fathers': string;
    councils: string;
    manuscripts: string;
  };
  featured: string;
  readMore: string;
}

/**
 * Semantic defense translations
 */
export interface SemanticsTranslations {
  title: string;
  subtitle: string;
  tutorial: string;
  examples: string;
  analysis: string;
  conclusion: string;
}

/**
 * Component-specific translations
 */
export interface ComponentTranslations {
  argumentCard: {
    title: string;
    readMore: string;
    objections: string;
    responses: string;
    viewFull: string;
    proponents: string;
    historicalContext: string;
  };
  manuscriptCard: {
    title: string;
    viewDetails: string;
    date: string;
    location: string;
    significance: string;
  };
  pagination: {
    previous: string;
    next: string;
    items: string;
    showing: string;
  };
  modal: {
    title: string;
    close: string;
    confirm: string;
    cancel: string;
  };
}

/**
 * Error messages
 */
export interface ErrorTranslations {
  notFound: string;
  invalidArgument: string;
  invalidSource: string;
  invalidTradition: string;
  missingTranslation: string;
  serverError: string;
  networkError: string;
  authorizationError: string;
}

/**
 * API response messages
 */
export interface ApiTranslations {
  success: string;
  error: string;
  loading: string;
  searching: string;
  noResults: string;
  retry: string;
}

/**
 * Dynamic argument translations
 */
export interface ArgumentTranslations {
  [id: string]: {
    name: string;
    description: string;
    proponents: string[];
    descriptions?: {
      support?: string;
      explanation?: string;
      summary?: string;
    };
    objections?: {
      [key: string]: {
        title: string;
        description: string;
        response: string;
      };
    };
    responses?: {
      [key: string]: {
        title: string;
        description: string;
        response: string;
      };
    };
    significance?: string;
    historicalBackground?: string;
    formalStatement?: string;
    keyProponents?: string;
  };
}

/**
 * Dynamic manuscript translations
 */
export interface ManuscriptTranslations {
  codexes?: {
    [id: string]: {
      title: string;
      description: string;
      date: string;
      location: string;
      significance: string;
    };
  };
  papyri?: {
    [id: string]: {
      title: string;
      description: string;
      date: string;
      location: string;
      significance: string;
    };
  };
  'papyri-additional'?: {
    [id: string]: {
      title: string;
      description: string;
      date: string;
      location: string;
      significance: string;
    };
  };
  'other-documents'?: {
    [id: string]: {
      title: string;
      description: string;
      date: string;
      location: string;
      significance: string;
    };
  };
}

/**
 * Dynamic cult translations
 */
export interface CultTranslations {
  [id: string]: {
    name: string;
    description: string;
    origins: string;
    keyBeliefs: string[];
    objections?: {
      [key: string]: {
        title: string;
        description: string;
        response: string;
      };
    };
  };
}

/**
 * Dynamic semantic defense translations
 */
export interface SemanticDefenseTranslations {
  arguments?: {
    [id: string]: {
      title: string;
      description: string;
      applications: string[];
    };
  };
  'arguments-nt-advanced'?: {
    [id: string]: {
      title: string;
      description: string;
      applications: string[];
    };
  };
  'arguments-ot-nt'?: {
    [id: string]: {
      title: string;
      description: string;
      applications: string[];
    };
  };
  tutorial?: {
    [id: string]: {
      title: string;
      description: string;
    };
  };
}

/**
 * Complete translation messages structure
 */
export interface TranslationMessages {
  common: CommonTranslations;
  nav: NavTranslations;
  home: HomeTranslations;
  defend: DefendTranslations;
  compare: CompareTranslations;
  explore: ExploreTranslations;
  sources: SourcesTranslations;
  semantics: SemanticsTranslations;
  components: ComponentTranslations;
  errors: ErrorTranslations;
  api: ApiTranslations;
  data: {
    arguments: ArgumentTranslations;
    manuscripts: ManuscriptTranslations;
    cults: CultTranslations;
    'semantic-defense': SemanticDefenseTranslations;
  };
}

/**
 * Metadata for translation files
 */
export interface TranslationMetadata {
  $schema: string;
  locale: Locale;
  version: string;
  lastUpdated: string;
  author: string;
}

/**
 * Complete translation file structure
 */
export interface TranslationFile {
  common: CommonTranslations;
  nav: NavTranslations;
  home: HomeTranslations;
  defend: DefendTranslations;
  compare: CompareTranslations;
  explore: ExploreTranslations;
  sources: SourcesTranslations;
  semantics: SemanticsTranslations;
  components: ComponentTranslations;
  errors: ErrorTranslations;
  api: ApiTranslations;
  data: {
    arguments: ArgumentTranslations;
    manuscripts: ManuscriptTranslations;
    cults: CultTranslations;
    'semantic-defense': SemanticDefenseTranslations;
  };
}

/**
 * Get translation type for a specific locale
 */
export type LocaleTranslations<T extends TranslationMessages> = {
  [K in keyof T]: {
    [L in Locale]: T[K];
  };
}[keyof T];

/**
 * Example usage:
 *
 * ```typescript
 * import { useTranslations } from 'next-intl';
 * import type { ArgumentTranslations } from '@/types/i18n';
 *
 * export default function ArgumentCard({ argumentId }: { argumentId: string }) {
 *   const t = useTranslations('data.arguments');
 *   const translation = t(`${argumentId}.name`);
 *
 *   return <h1>{translation}</h1>;
 * }
 * ```
 */

/**
 * Helper type for getting nested translation values
 */
export type TranslationValue<T, K extends string> = K extends `${infer Prefix}.${infer Rest}`
  ? Prefix extends keyof T
    ? TranslationValue<NonNullable<T[Prefix]>, Rest>
    : never
  : K extends keyof T
  ? T[K]
  : unknown;

/**
 * Example: TranslationValue<TranslationMessages, 'data.arguments.cosmological.firstCause.name'>
 * Returns: string
 */
