// src/components/lens/types.ts
export const LENSES = ['seeker', 'student', 'defender', 'researcher', 'all'] as const;
export type Lens = (typeof LENSES)[number];

export const DEFAULT_LENS: Lens = 'seeker';
export const STORAGE_KEY = 'theologia.lens';
export const ONBOARDING_KEY = 'theologia.lens.onboarded';
