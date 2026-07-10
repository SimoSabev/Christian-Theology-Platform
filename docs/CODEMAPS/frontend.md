<!-- Generated: 2026-07-10 | Files scanned: ~200 (src/app + src/components) | Token estimate: ~550 -->

# Frontend

App Router, all routes under `src/app/[locale]/` (locale-prefixed via next-intl).
Root `src/app/page.tsx` + `src/app/[locale]/{layout,page}.tsx` are the entry points.

## Component directories (`src/components/`)
| Dir | Files | Role |
|---|---|---|
| `way/` | 26 | Devotional/discipleship UI: prayer widgets, journey map, retreat cards, saint portraits, Lectio Divina guide. Largest domain. |
| `ornament/` | 9 | Decorative typographic primitives (Eyebrow, KeystoneDivider, SectionMark) used across nearly every page for visual identity |
| `reader/` | 7 | Reading-experience components (`CodexCard` etc.) — how content blocks are displayed |
| `lens/` | 7 | Reader-preference "lens" system — `LensProvider`, `useLens`, `LensToggle`, `LensOnboarding`, `LensRecommendedPath`. Adapts content presentation per user-selected lens/tradition. See `types.ts` for the lens model. |
| `command/` | 7 (incl. `search/`) | Command palette + universal search (`CommandPalette`, `universalSearch.ts`, `searchIndex.ts`, verse-pattern detection) |
| `layout/` | 6 | Shared page chrome (nav, header/footer likely) |
| `semantic/` | 4 | Semantic-defense-specific UI |
| `hero/`, `motion/` | 3 each | Landing hero pieces; `RevealOnScroll` and other scroll-triggered animation wrappers |
| `brand/`, `compare/`, `manuscripts/`, `onboarding/` | 1 each | Single-purpose components |

## Key conventions (observed in `defend/theology/page.tsx`)
```tsx
import { Link } from '@/i18n/navigation';           // locale-aware Link, not next/link
import { theologyTopics, apologeticsMethods } from '@/data/theology';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
```
Pages are client components (`'use client'` + `useState`) that import data directly,
no data-fetching layer — content is bundled TS, not fetched.

## i18n (`src/i18n/`)
- `config.ts` — locale list/config
- `navigation.ts` — locale-aware `Link`/`useRouter`/`redirect` wrappers (use these, not `next/link`)
- `request.ts` — next-intl request config
- `src/types/i18n.ts`, `generated-i18n.ts` — typed translation keys
- `messages/<locale>.json` — 20 locales (en, es, fr, de, ru, ar, hi, ja, ko, zh-family via others, etc.)

## Routing pattern for deep sections
`defend/cults/[category]/page.tsx`, `defend/atheism/[category]/page.tsx` — dynamic segment
per objection/category, content pulled from corresponding `src/data/<topic>` module.
