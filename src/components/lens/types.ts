// src/components/lens/types.ts
//
// LENS AUDIT — Pages using useLens():
// - /defend/atheism/[category]/[argument]/page.tsx — YES (lens-aware, conditionals on 'seeker'/'defender')
// - /defend/cults/[category]/[objection]/page.tsx  — NO (lens-not-needed, static content)
// - /compare/page.tsx                              — NO (lens-not-needed)
// - /compare/side-by-side/page.tsx                 — NO (lens-not-needed)
// - /compare/[tradition]/page.tsx                  — NO (lens-not-needed)
// - /explore/argument-tree/page.tsx                — NO (lens-not-needed)
// - /explore/debate-mode/page.tsx                  — NO (lens-not-needed)
// - /explore/timeline/page.tsx                     — NO (lens-not-needed)
// - /sources/church-fathers/page.tsx               — NO (lens-not-needed)
// - /sources/councils/page.tsx                     — NO (lens-not-needed)
// - /sources/manuscripts/page.tsx                  — NO (lens-not-needed)
// - /sources/manuscripts/[id]/page.tsx             — NO (lens-not-needed)
// - /semantics/page.tsx                            — NO (lens-not-needed)
// - /[locale]/page.tsx (home)                      — NO (lens-not-needed, uses QuoteOfDay)
//
// Identified pages that need lens implementation: argument detail page (already done)

export const LENSES = ['seeker', 'student', 'defender', 'researcher', 'all'] as const;
export type Lens = (typeof LENSES)[number];

export const DEFAULT_LENS: Lens = 'seeker';
export const STORAGE_KEY = 'theologia.lens';
export const ONBOARDING_KEY = 'theologia.lens.onboarded';

// Lens content variant — describes how each lens should alter content presentation
export interface LensContentVariant {
  tone: 'academic' | 'warm' | 'tactical' | 'honest' | 'devotional' | 'comprehensive';
  showFootnotes: boolean;
  showGreekHebrew: boolean;
  showPatristicCitations: boolean;
  argumentDepth: 'simplified' | 'standard' | 'full';
  defaultEntry: string;
  homepageMessage: string;
}

export const LENS_VARIANTS: Record<Lens, LensContentVariant> = {
  seeker: {
    tone: 'warm',
    showFootnotes: false,
    showGreekHebrew: false,
    showPatristicCitations: false,
    argumentDepth: 'simplified',
    defaultEntry: '/sources/church-fathers',
    homepageMessage: 'Begin your journey wherever you are.',
  },
  student: {
    tone: 'academic',
    showFootnotes: true,
    showGreekHebrew: false,
    showPatristicCitations: true,
    argumentDepth: 'standard',
    defaultEntry: '/defend/atheism/cosmological',
    homepageMessage: 'Study the depths of Christian theology.',
  },
  defender: {
    tone: 'tactical',
    showFootnotes: true,
    showGreekHebrew: true,
    showPatristicCitations: true,
    argumentDepth: 'full',
    defaultEntry: '/defend',
    homepageMessage: 'Equip yourself to defend the faith with reason.',
  },
  researcher: {
    tone: 'academic',
    showFootnotes: true,
    showGreekHebrew: true,
    showPatristicCitations: true,
    argumentDepth: 'full',
    defaultEntry: '/sources/manuscripts',
    homepageMessage: 'Explore the scholarly depth of Christian theology.',
  },
  all: {
    tone: 'comprehensive',
    showFootnotes: true,
    showGreekHebrew: true,
    showPatristicCitations: true,
    argumentDepth: 'full',
    defaultEntry: '/defend',
    homepageMessage: 'All content — no filtering.',
  },
};

// For The Way feature adaptation (do not modify /way pages)
export interface WayLensAdaptation {
  lensId: Lens;
  emphasisFields: string[];
  hiddenFields: string[];
  tone: 'devotional' | 'academic' | 'accessible' | 'contemplative';
}

export const WAY_LENS_ADAPTATIONS: WayLensAdaptation[] = [
  { lensId: 'seeker',     emphasisFields: ['intro', 'story'],        hiddenFields: ['greek', 'footnotes'],        tone: 'accessible' },
  { lensId: 'student',    emphasisFields: ['doctrine', 'history'],   hiddenFields: [],                            tone: 'academic' },
  { lensId: 'defender',   emphasisFields: ['apologetics', 'evidence'], hiddenFields: ['devotional'],              tone: 'academic' },
  { lensId: 'researcher', emphasisFields: ['primary-sources', 'greek'], hiddenFields: ['simplified'],             tone: 'academic' },
  { lensId: 'all',        emphasisFields: [],                        hiddenFields: [],                            tone: 'contemplative' },
];
