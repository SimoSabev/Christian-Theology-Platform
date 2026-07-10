<!-- Generated: 2026-07-10 | Files scanned: ~65 (src/data) | Token estimate: ~500 -->

# Data (`src/data/`)

No database — all content is typed TypeScript modules, imported directly by pages.
Each topic dir typically has an `index.ts` (barrel export) + a `types.ts` for its shape.

## Topic directories
| Dir | Files | Notes |
|---|---|---|
| `arguments/` | 9 | Apologetics arguments by category: `cosmological`, `teleological`, `moral`, `ontological`, `existential`, `historical`, plus combined `teleological-moral-historical.ts`. `types.ts` defines the argument shape; `index.ts` barrels all 35 arguments. |
| `trees/` | 2 | `generate.ts` — **generates argument trees programmatically from `data/arguments`** (not hand-authored); `index.ts` exports the built trees. Recently added: covers all 35 arguments (see git log). |
| `debates/` | 2 | Same generative pattern as `trees/`: `generate.ts` builds debate-mode content from argument data, `index.ts` exports it. |
| `way/` | 10 | Devotional content backing `src/components/way/*` |
| `denominations/` | 5 | Denomination/tradition comparison data |
| `manuscripts/`, `semantic-defense/` | 6 each | Manuscript/source reference data; semantic-defense argument data |
| `deep-research/` | 7 | Research-backed supporting content |
| `archaeology/`, `cults/`, `history/`, `prophecy/`, `science-faith/`, `sources/`, `theology/`, `worldviews/` | 2 each | Standard shape: content file + `index.ts` (or similar pair) |
| `comparisons/`, `verses/` | 1 each | Single-file modules |

## Important pattern: generated content
`trees/generate.ts` and `debates/generate.ts` derive their output from `arguments/*` at
**build/dev time within the TS module itself** (not a script you run separately) — i.e.
importing `data/trees` or `data/debates` triggers generation from the argument data.
When editing argument content, check whether trees/debates need regenerating too
(they read from the same source, so they typically don't need manual edits — just re-run/rebuild).

## Where content types live
`src/data/arguments/types.ts` is the canonical shape for an "argument." `src/types/way.ts`
covers the Way/devotional domain. `src/components/lens/types.ts` covers the lens model
(separate from content — this is the reader-preference layer).
