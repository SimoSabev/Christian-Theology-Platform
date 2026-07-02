// src/components/lens/types.ts
//
// LENS AUDIT — Pages using useLens():
// - /defend/atheism/[category]/[argument]/page.tsx   — YES (full lens adaptation: argumentDepth
//   simplified banner + DropCap, showFootnotes gates sources, showPatristicCitations gates
//   Church Father quotes)
// - /defend/atheism/[category]/page.tsx              — YES (seeker hides formal premises + banner)
// - /defend/cults/[category]/[objection]/page.tsx    — YES (argumentDepth simplified seeker banner;
//   showFootnotes gates Key Sources; showPatristicCitations gates Historical Background for
//   historically-rooted heresies like Arianism/Gnosticism)
// - /sources/church-fathers/page.tsx                 — YES (seeker hides documents, showPatristicCitations)
// - /sources/manuscripts/[id]/page.tsx               — YES (showGreekHebrew gates interlinear reader)
// - /explore/debate-mode/page.tsx                    — YES (seeker/defender contextual tip)
// - /semantics/page.tsx                              — YES (showGreekHebrew gate + intro note)
// - /[locale]/page.tsx (home)                        — YES (homepageMessage display)
// - /way/journey/page.tsx                            — YES (lens-mapped stage recommendations)
// - /way/skeptic/page.tsx (via SkepticPageClient)     — YES (lens-adapted content)
// - /way/pray/lords-prayer/page.tsx (via LensAdaptedContent) — YES (lens-adapted phrase commentary)
// - CommandPalette                                    — YES (inline lens picker)
// - LensOnboarding                                   — YES (descriptions shown)
//
// argumentDepth and showFootnotes are now wired on both apologetics reader pages
// (atheism arguments and cults objections); showGreekHebrew and showPatristicCitations
// remain scoped to the pages listed above.
//
// Intentionally lens-neutral (content is identical across all modes):
// - /compare/page.tsx, /compare/side-by-side, /compare/[tradition]
// - /explore/argument-tree/page.tsx
// - /explore/timeline/page.tsx
// - /sources/councils/page.tsx
// - /sources/manuscripts/page.tsx (listing)

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
