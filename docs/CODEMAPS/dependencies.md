<!-- Generated: 2026-07-10 | Files scanned: package.json | Token estimate: ~200 -->

# Dependencies

Next.js 16.2.1 / React 19.2.4 app. No backend services, no database, no auth provider.

## Runtime
| Package | Purpose |
|---|---|
| `next-intl` | i18n routing/translation (20 locales in `messages/`) |
| `@xyflow/react` | Node/graph diagrams — likely powers `explore/argument-tree` |
| `framer-motion` | Animation (complements `src/components/motion/`) |
| `fuse.js` | Fuzzy search — powers `src/components/command/search/*` |
| `lucide-react` | Icon set |
| `@vercel/speed-insights` | Vercel perf monitoring |

## Dev/tooling
| Package | Purpose |
|---|---|
| `tailwindcss` v4 + `@tailwindcss/postcss` | Styling |
| `eslint` + `eslint-config-next` + `eslint-plugin-i18next` | Linting, incl. i18n-key-usage rules |
| `i18next-scanner` | Extracts translation keys — backs `npm run extract:i18n-keys` |
| `json-schema-to-typescript` | Likely generates `src/types/generated-i18n.ts` |
| `typescript` v5 | — |

## npm scripts of note
```
dev / build / start   — standard Next.js
lint                   — eslint
validate:i18n          — scripts/validate-translations.js
check:translations      — scripts/check-translations.js
generate:i18n-report    — scripts/generate-i18n-report.js
extract:i18n-keys        — scripts/extract-i18n-keys.js
```
No test runner configured (no jest/vitest/playwright in package.json).
