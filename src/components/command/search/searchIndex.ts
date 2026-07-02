// src/components/command/search/searchIndex.ts
//
// Data-driven search index. Generated from src/data/* modules at import time
// so new entries automatically become searchable in the command palette
// without hand-editing this file. Hand-seeded Way/static-page entries are
// kept as-is; everything else below is derived from data modules.
//
// Only short strings (title/subtitle/href/category) are indexed here — never
// full body text — to keep the in-memory Fuse index small.
import type { SearchResult } from './types';

import { allArguments } from '@/data/arguments';
import { cultObjections } from '@/data/cults';
import { allDebates } from '@/data/debates';
import { allTrees } from '@/data/trees';
import { allManuscripts } from '@/data/manuscripts';
import { denominations } from '@/data/denominations';
import { traditions } from '@/data/comparisons';
import { semanticDefenses } from '@/data/semantic-defense';
import { archaeologicalDiscoveries } from '@/data/archaeology';
import { historicalEvents, keyFigures } from '@/data/history';
import { theologyTopics } from '@/data/theology';
import { messianicProphecies, nationProphecies } from '@/data/prophecy';
import { worldviews } from '@/data/worldviews';
import { christianScientists, scienceFaithConflicts, canonFormations } from '@/data/science-faith';

/** Hand-seeded entries — Way pages and other static top-level pages. */
const HAND_SEEDED: SearchResult[] = [
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
];

/** Individual apologetics arguments (src/data/arguments) — /defend/atheism/<category>/<slug> */
const ARGUMENT_ENTRIES: SearchResult[] = allArguments.map((arg) => ({
  id: `arg-${arg.slug}`,
  kind: 'argument',
  title: arg.name,
  subtitle: arg.shortDescription,
  href: `/defend/atheism/${arg.category}/${arg.slug}`,
}));

/** Debate mode entries (src/data/debates) — /explore/debate-mode?debate=<key> */
const DEBATE_ENTRIES: SearchResult[] = Object.entries(allDebates).map(([key, debate]) => ({
  id: `debate-${key}`,
  kind: 'argument',
  title: debate.title,
  subtitle: 'Debate mode',
  href: `/explore/debate-mode?debate=${encodeURIComponent(key)}`,
}));

/** Argument tree entries (src/data/trees) — /explore/argument-tree?tree=<key> */
const TREE_ENTRIES: SearchResult[] = Object.entries(allTrees).map(([key, tree]) => ({
  id: `tree-${key}`,
  kind: 'argument',
  title: tree.text,
  subtitle: 'Argument tree',
  href: `/explore/argument-tree?tree=${encodeURIComponent(key)}`,
}));

/** Cult/heresy objections (src/data/cults) — /defend/cults/<category>/<slug> */
const CULT_ENTRIES: SearchResult[] = cultObjections.map((obj) => ({
  id: `cult-${obj.slug}`,
  kind: 'cult',
  title: obj.name,
  subtitle: obj.shortDescription,
  href: `/defend/cults/${obj.category}/${obj.slug}`,
}));

/** Manuscripts (src/data/manuscripts) — /sources/manuscripts/<id> */
const MANUSCRIPT_ENTRIES: SearchResult[] = allManuscripts.map((ms) => ({
  id: `ms-${ms.id}`,
  kind: 'source',
  title: ms.designation,
  subtitle: ms.contents,
  href: `/sources/manuscripts/${ms.id}`,
}));

/** Denominations/traditions (src/data/denominations) — /compare/<slug> */
const DENOMINATION_ENTRIES: SearchResult[] = denominations.map((d) => ({
  id: `denom-${d.slug}`,
  kind: 'doctrine',
  title: d.name,
  subtitle: 'Tradition',
  href: `/compare/${d.slug}`,
}));

/** Tradition overview cards (src/data/comparisons) — no confirmed per-item route; link to /compare */
const TRADITION_ENTRIES: SearchResult[] = traditions.map((t) => ({
  id: `tradition-${t.id}`,
  kind: 'doctrine',
  title: t.name,
  subtitle: 'Compare traditions',
  href: '/compare',
}));

/** Semantic defenses (src/data/semantic-defense) — /semantics */
const SEMANTIC_DEFENSE_ENTRIES: SearchResult[] = semanticDefenses.map((sd) => ({
  id: `sd-${sd.id}`,
  kind: 'source',
  title: sd.title,
  subtitle: sd.objectionTarget,
  href: '/semantics',
}));

/** Archaeology, history, theology, prophecy, worldviews, science-faith —
 * listing-only pages with no confirmed per-item deep link, so each entry
 * links back to its topical listing page. */
const ARCHAEOLOGY_ENTRIES: SearchResult[] = archaeologicalDiscoveries.map((d) => ({
  id: `arch-${d.slug}`,
  kind: 'source',
  title: d.name,
  subtitle: 'Archaeology',
  href: '/sources/archaeology',
}));

const HISTORY_ENTRIES: SearchResult[] = [
  ...historicalEvents.map((e) => ({
    id: `hist-event-${e.slug}`,
    kind: 'source' as const,
    title: e.name,
    subtitle: 'Church history',
    href: '/sources/history',
  })),
  ...keyFigures.map((f) => ({
    id: `hist-figure-${f.slug}`,
    kind: 'source' as const,
    title: f.name,
    subtitle: 'Key figure',
    href: '/sources/history',
  })),
];

const THEOLOGY_ENTRIES: SearchResult[] = theologyTopics.map((topic) => ({
  id: `theo-${topic.slug}`,
  kind: 'doctrine',
  title: topic.name,
  subtitle: 'Theology',
  href: '/defend/theology',
}));

const PROPHECY_ENTRIES: SearchResult[] = [
  ...messianicProphecies.map((p) => ({
    id: `prophecy-${p.slug}`,
    kind: 'doctrine' as const,
    title: p.name,
    subtitle: 'Messianic prophecy',
    href: '/defend/prophecy',
  })),
  ...nationProphecies.map((p) => ({
    id: `prophecy-nation-${p.slug}`,
    kind: 'doctrine' as const,
    title: p.name,
    subtitle: 'Prophecy',
    href: '/defend/prophecy',
  })),
];

const WORLDVIEW_ENTRIES: SearchResult[] = worldviews.map((w) => ({
  id: `worldview-${w.slug}`,
  kind: 'doctrine',
  title: w.name,
  subtitle: 'Worldview',
  href: '/defend/worldviews',
}));

const SCIENCE_FAITH_ENTRIES: SearchResult[] = [
  ...christianScientists.map((s) => ({
    id: `science-${s.slug}`,
    kind: 'source' as const,
    title: s.name,
    subtitle: 'Christians in science',
    href: '/defend/science',
  })),
  ...scienceFaithConflicts.map((c) => ({
    id: `science-conflict-${c.slug}`,
    kind: 'source' as const,
    title: c.name,
    subtitle: 'Science & faith',
    href: '/defend/science',
  })),
  ...canonFormations.map((c) => ({
    id: `canon-${c.slug}`,
    kind: 'source' as const,
    title: c.name,
    subtitle: 'Canon formation',
    href: '/sources/canon',
  })),
];

/** Full search index: hand-seeded static pages + everything generated from data modules. */
export const STATIC_INDEX: SearchResult[] = [
  ...HAND_SEEDED,
  ...ARGUMENT_ENTRIES,
  ...DEBATE_ENTRIES,
  ...TREE_ENTRIES,
  ...CULT_ENTRIES,
  ...MANUSCRIPT_ENTRIES,
  ...DENOMINATION_ENTRIES,
  ...TRADITION_ENTRIES,
  ...SEMANTIC_DEFENSE_ENTRIES,
  ...ARCHAEOLOGY_ENTRIES,
  ...HISTORY_ENTRIES,
  ...THEOLOGY_ENTRIES,
  ...PROPHECY_ENTRIES,
  ...WORLDVIEW_ENTRIES,
  ...SCIENCE_FAITH_ENTRIES,
];
