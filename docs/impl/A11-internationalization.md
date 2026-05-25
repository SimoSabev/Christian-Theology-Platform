# A11 — Internationalization

**Priority:** P2 (High)
**Affects:** `src/i18n/`, `messages/`, `src/components/layout/LanguageSwitcher.tsx`

---

## Problem

Translation completion percentage per locale is unknown. RTL support may be missing. No language selector visible in main navigation.

---

## Tasks

### 1. Audit Translation Completion

Read all files in `messages/` directory. For each locale:
- Count total keys in the English baseline
- Count translated keys in each locale
- Report percentage complete

**Create a simple script** (not a permanent file — run once):
```bash
node -e "
const en = require('./messages/en.json')
const keys = JSON.stringify(en).split(':').length
console.log('EN keys:', keys)
// repeat for each locale
"
```

Target locales for prioritization: `es` (Spanish), `pt` (Portuguese), `fr` (French), `de` (German), `ar` (Arabic), `ru` (Russian).

### 2. Prioritize Translation Work

**For each untranslated or incomplete locale:**

Create translation notes in `messages/[locale].json` using the English keys as stubs:
```json
{
  "defend": {
    "title": "TODO: translate from EN: Defend the Faith"
  }
}
```

**Priority translation order:**
1. Navigation labels (highest impact — every user sees these)
2. Home page hero text
3. Argument titles and categories
4. Error messages and UI chrome

Content-heavy fields (argument body text, church father quotes) can remain in English until a human translator is available — add a `[EN]` prefix marker to flag untranslated content.

### 3. RTL Layout Support

**Files to modify:**
- `src/app/[locale]/layout.tsx` — detect RTL locales; set `dir` attribute:
```tsx
const rtlLocales = ['ar', 'he', 'fa']
const isRtl = rtlLocales.includes(locale)

return (
  <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
    ...
  </html>
)
```

- `src/app/globals.css` — add RTL overrides using Tailwind `rtl:` variant:
```css
/* Tailwind RTL utilities are enabled by default in v3+ */
/* Audit all flex/grid layouts for rtl: variants where needed */
```

**Key components to audit for RTL:**
- `src/components/layout/Navbar.tsx` — logo on right, nav on left in RTL
- `src/components/ornament/Marginalia.tsx` — margin swap in RTL
- `src/components/reader/ArgumentSidebar.tsx` — sidebar on opposite side in RTL
- `src/components/compare/DoctrinalMatrix.tsx` — table text alignment

### 4. Language Selector in Navigation

**File to modify:** `src/components/layout/LanguageSwitcher.tsx`

If the component exists but is not in the navbar:
- **File to modify:** `src/components/layout/Navbar.tsx`
- Add `<LanguageSwitcher />` to the right section of the navbar (globe icon + current locale code)
- Dropdown shows all available locales with their native names:
  - English, Español, Português, Français, Deutsch, العربية, Русский

Style: matches existing navbar aesthetic (no borders, just text + hover gold).

### 5. i18n for Greek/Hebrew Semantic Content

Semantic tool content (Greek words, Hebrew roots) is language-neutral by nature. Document this explicitly:

**Add a comment** to `src/i18n/config.ts`:
```ts
// NOTE: Greek/Hebrew semantic content (src/data/semantic-defense/) is not translated.
// The tool UI chrome IS translated. The word-level content is language-neutral scholarly data.
```

Add a translated UI string: "Greek & Hebrew analysis" → rendered in the user's language, even though the Greek/Hebrew text itself remains in the original script.

---

## Acceptance Criteria

- [ ] Translation completion audit run; results documented (in a comment or temp file)
- [ ] Spanish, Portuguese, and French locales have navigation and hero text fully translated
- [ ] Arabic locale has `dir="rtl"` applied; key layout components render correctly RTL
- [ ] Language switcher visible in navbar with globe icon
- [ ] Dropdown shows all available locales with native language names
- [ ] Semantic tool UI chrome is translated; Greek/Hebrew content correctly marked as language-neutral
