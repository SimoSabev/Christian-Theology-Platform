<!-- Generated: 2026-07-10 | Files scanned: 302 | Token estimate: ~450 -->

# Architecture

Next.js 16 (App Router) content platform for comparative theology/apologetics study.
Static/client-rendered — **no backend, no API routes, no database.** All content lives
in typed TS data modules under `src/data/`, rendered by route components under `src/app/`.
i18n via `next-intl` (20 locale JSON files in `messages/`).

## Data flow
```
src/data/<topic>/*.ts  (typed content: arguments, debates, trees, denominations...)
        ↓ imported directly by
src/app/[locale]/<section>/page.tsx  (route/page component)
        ↓ composed with
src/components/<domain>/*.tsx  (presentational + interactive components)
        ↓ wrapped by
src/components/lens/*  (LensProvider — reader-preference/"lens" system, applies to content)
src/components/motion/* (scroll/reveal animation wrappers)
src/components/ornament/* (decorative typographic elements: Eyebrow, dividers, marks)
```

## Route sections (`src/app/[locale]/`)
| Section | Purpose |
|---|---|
| `defend/{theology,worldviews,science,cults,atheism,prophecy}` | Apologetics: objection → response content, category/objection sub-routes |
| `explore/{argument-tree,debate-mode,timeline}` | Interactive exploration: argument trees, debate mode, historical timeline |
| `compare/{tradition},compare/side-by-side` | Denomination/tradition comparison views |
| `sources/{manuscripts,archaeology,canon,church-fathers,councils,history}` | Primary-source reference material |
| `way/{journey,pray,love,act,retreat,skeptic,why-pray}` | Devotional/discipleship "Way" track (largest component set, 26 files in `src/components/way/`) |
| `semantics` | Semantic/linguistic defense tools |

## No backend layer
No `src/app/api/*` routes, no `middleware.ts`, no database client found. Treat any
"where's the API for X" question as: there isn't one — it's static data + client components.

## See also
- [frontend.md](frontend.md) — component tree and key UI systems (lens, ornament, motion)
- [data.md](data.md) — content data modules and their shapes
- [dependencies.md](dependencies.md) — key third-party libraries
