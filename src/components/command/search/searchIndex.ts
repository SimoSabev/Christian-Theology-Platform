// src/components/command/search/searchIndex.ts
import type { SearchResult } from './types';

/** Hand-seeded entries. Replaced by data-driven index in Phase 2. */
export const STATIC_INDEX: SearchResult[] = [
  // Pages
  { id: 'page-defend',   kind: 'page', title: 'Defend',   subtitle: 'Apologetics',         href: '/defend' },
  { id: 'page-compare',  kind: 'page', title: 'Compare',  subtitle: 'Traditions',          href: '/compare' },
  { id: 'page-explore',  kind: 'page', title: 'Explore',  subtitle: 'Argument tree',       href: '/explore' },
  { id: 'page-sources',  kind: 'page', title: 'Sources',  subtitle: 'Manuscripts & fathers',href: '/sources' },
  { id: 'page-semantics',kind: 'page', title: 'Semantics',subtitle: 'Word studies',        href: '/semantics' },
  // Featured arguments (seed; expand from src/data in Phase 2)
  { id: 'arg-kalam',         kind: 'argument', title: 'Kalam Cosmological Argument',         subtitle: 'Cosmological',  href: '/defend/atheism' },
  { id: 'arg-fine-tuning',   kind: 'argument', title: 'Fine-Tuning of the Universe',         subtitle: 'Teleological',  href: '/defend/atheism' },
  { id: 'arg-moral',         kind: 'argument', title: 'Moral Argument',                       subtitle: 'Moral',         href: '/defend/atheism' },
  { id: 'arg-resurrection',  kind: 'argument', title: 'Minimal Facts of the Resurrection',    subtitle: 'Historical',    href: '/defend/atheism' },
  { id: 'arg-evil',          kind: 'argument', title: 'Problem of Evil — Free Will Defense',  subtitle: 'Objections',    href: '/defend/atheism' },
];
