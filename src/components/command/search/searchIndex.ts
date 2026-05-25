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
  // The Way
  { id: 'page-way',              kind: 'page', title: 'The Way',             subtitle: 'Living the faith',          href: '/way' },
  { id: 'page-way-pray',         kind: 'page', title: 'How to Pray',         subtitle: 'Prayer practices',          href: '/way/pray' },
  { id: 'page-way-lords-prayer', kind: 'page', title: "The Lord's Prayer",   subtitle: 'Matthew 6:9–13 phrase by phrase', href: '/way/pray/lords-prayer' },
  { id: 'page-way-lectio',       kind: 'page', title: 'Lectio Divina',       subtitle: 'Sacred reading',            href: '/way/pray/lectio-divina' },
  { id: 'page-way-jesus-prayer', kind: 'page', title: 'The Jesus Prayer',    subtitle: 'Lord have mercy',           href: '/way/pray/jesus-prayer' },
  { id: 'page-way-silent-prayer',kind: 'page', title: 'Silent Prayer',       subtitle: 'Contemplative silence',     href: '/way/pray/silent-prayer' },
  { id: 'page-way-why-pray',     kind: 'page', title: 'Why Pray?',           subtitle: 'Theology of prayer',        href: '/way/why-pray' },
  { id: 'page-way-act',          kind: 'page', title: 'Act',                 subtitle: 'Living it out',             href: '/way/act' },
  { id: 'page-way-sermon',       kind: 'page', title: 'Sermon on the Mount', subtitle: 'The Beatitudes',            href: '/way/act/sermon-on-the-mount' },
  { id: 'page-way-disciplines',  kind: 'page', title: 'Spiritual Disciplines',subtitle: 'Practices for formation', href: '/way/act/disciplines' },
  { id: 'page-way-enemies',      kind: 'page', title: 'Love Your Enemies',   subtitle: 'Matthew 5:44',              href: '/way/act/love-your-enemies' },
  { id: 'page-way-love',         kind: 'page', title: 'Encountering Love',   subtitle: "God's love",               href: '/way/love' },
  { id: 'page-way-prodigal',     kind: 'page', title: 'The Prodigal Son',    subtitle: 'Luke 15 — immersive reader', href: '/way/love/prodigal-son' },
  { id: 'page-way-passages',     kind: 'page', title: 'Love Passages',       subtitle: 'Scripture on divine love',  href: '/way/love/passages' },
  { id: 'page-way-saints',       kind: 'page', title: 'Saints on Love',      subtitle: 'Mystics and fathers',       href: '/way/love/saints' },
  { id: 'page-way-letter',       kind: 'page', title: 'A Letter from God',   subtitle: 'Contemplative',             href: '/way/love/letter' },
  { id: 'page-way-journey',      kind: 'page', title: 'The Journey',         subtitle: 'Stages of spiritual growth',href: '/way/journey' },
  { id: 'page-way-retreat',      kind: 'page', title: '7-Day Retreat',       subtitle: 'A week of guided prayer',   href: '/way/retreat' },
  { id: 'page-way-skeptic',      kind: 'page', title: 'For the Skeptic',     subtitle: "You don't have to believe yet", href: '/way/skeptic' },
  // Featured arguments (seed; expand from src/data in Phase 2)
  { id: 'arg-kalam',         kind: 'argument', title: 'Kalam Cosmological Argument',         subtitle: 'Cosmological',  href: '/defend/atheism' },
  { id: 'arg-fine-tuning',   kind: 'argument', title: 'Fine-Tuning of the Universe',         subtitle: 'Teleological',  href: '/defend/atheism' },
  { id: 'arg-moral',         kind: 'argument', title: 'Moral Argument',                       subtitle: 'Moral',         href: '/defend/atheism' },
  { id: 'arg-resurrection',  kind: 'argument', title: 'Minimal Facts of the Resurrection',    subtitle: 'Historical',    href: '/defend/atheism' },
  { id: 'arg-evil',          kind: 'argument', title: 'Problem of Evil — Free Will Defense',  subtitle: 'Objections',    href: '/defend/atheism' },
];
