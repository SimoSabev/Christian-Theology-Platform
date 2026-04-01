# Internationalization (i18n) Implementation Plan

## Executive Summary

**Goal**: Implement full internationalization across the entire Theology Study Platform, supporting all 26 locales already configured in the system.

**Current State**:
- ✅ Basic i18n infrastructure using `next-intl` v4.8.3
- ✅ 26 locales configured (EN, ES, PT, FR, DE, IT, NL, RU, UK, RO, PL, EL, BG, AR, AM, SW, KO, ZH-CN, ZH-TW, JA, HI, ID, FIL, VI, TR, FA)
- ✅ Core layout using `NextIntlClientProvider` with locale routing
- ❌ Extensive hardcoded text in data files, components, and pages
- ❌ No translation keys for dynamic content (arguments, manuscripts, cults)
- ❌ No translation validation

**Target State**:
- ✅ All user-facing text using translation keys
- ✅ Dynamic content (arguments, manuscripts, cults) translatable
- ✅ All 26 locales with complete translations
- ✅ Translation validation and CI/CD checks
- ✅ Translation editor for non-technical users

---

## 1. Architecture & Infrastructure

### 1.1 Message File Structure

```
messages/
├── en.json                    # English source (complete)
├── es.json                    # Spanish (import from en, complete)
├── pt.json                    # Portuguese (import from en, complete)
├── fr.json                    # French (import from en, complete)
├── de.json                    # German (import from en, complete)
├── it.json                    # Italian (import from en, complete)
├── nl.json                    # Dutch (import from en, complete)
├── ru.json                    # Russian (import from en, complete)
├── uk.json                    # Ukrainian (import from en, complete)
├── ro.json                    # Romanian (import from en, complete)
├── pl.json                    # Polish (import from en, complete)
├── el.json                    # Greek (import from en, complete)
├── bg.json                    # Bulgarian (import from en, complete)
├── ar.json                    # Arabic (import from en, complete)
├── am.json                    # Amharic (import from en, complete)
├── sw.json                    # Swahili (import from en, complete)
├── ko.json                    # Korean (import from en, complete)
├── zh-CN.json                 # Simplified Chinese (import from en, complete)
├── zh-TW.json                 # Traditional Chinese (import from en, complete)
├── ja.json                    # Japanese (import from en, complete)
├── hi.json                    # Hindi (import from en, complete)
├── id.json                    # Indonesian (import from en, complete)
├── fil.json                   # Filipino (import from en, complete)
├── vi.json                    # Vietnamese (import from en, complete)
├── tr.json                    # Turkish (import from en, complete)
└── fa.json                    # Persian (import from en, complete)
```

### 1.2 Key Naming Conventions

**Global Keys** (e.g., `common.*`):
- Use dot notation: `common.button.close`
- Grouped by feature: `nav.*`, `home.*`, `defend.*`, etc.

**Component Keys** (e.g., `components.argumentCard.*`):
- Include component path: `components.argumentCard.title`
- Include field names: `components.argumentCard.proponentNames`

**Dynamic Content Keys** (e.g., `data.arguments.cosmological.*`):
- Structure based on data file structure
- Format: `data.[category].[filename].[property].[subproperty]`
- Examples:
  - `data.arguments.cosmological.name`
  - `data.arguments.cosmological.descriptions.support`
  - `data.manuscripts.codexes[codexId].title`
  - `data.cults[index].name`

**Keys with Parameters**:
- Use interpolation with `{variable}`:
  - `data.arguments.cosmological.proponentNames: "St. Thomas Aquinas"`
  - Display as: `t('data.arguments.cosmological.proponentNames')`

### 1.3 Translation File Schema

Every message file must include:
```json
{
  "$schema": "messages/schema.json",
  "locale": "en",
  "version": "1.0.0",
  "lastUpdated": "2026-03-28",
  "author": "system",
  "keys": {
    // Complete list of keys with type information
  }
}
```

---

## 2. Implementation Phases

### Phase 1: Infrastructure Setup (Days 1-2)

#### 1.1 Create Translation Schema
- Define TypeScript interface for message structure
- Create JSON schema for validation
- Document key naming conventions

**Files to create**:
```
messages/
├── schema.json          # JSON schema for validation
├── index.d.ts          # TypeScript types
└── i18n-config.ts      # Translation key management

scripts/
├── extract-keys.ts     # Extract all translation keys
├── generate-missing.ts # Generate missing translations
└── validate-translations.ts # Validate translations
```

#### 1.2 Set Up Translation Editor
- Create admin page for managing translations
- Add inline translation preview in components
- Implement translation priority levels (critical, important, optional)

**Key Features**:
- Bulk edit translations
- Version control for translations
- Translation status tracking (complete, partial, missing)
- Auto-save with auto-import

---

### Phase 2: Extract Hardcoded Text (Days 3-5)

#### 2.1 Data Files Extraction

**Files to extract from**:
```
src/data/
├── arguments/
│   ├── cosmological.ts
│   ├── ontological.ts
│   ├── teleological-moral-historical.ts
│   └── ... (all argument files)
├── manuscripts/
│   ├── codexes.ts
│   ├── papyri.ts
│   ├── papyri-additional.ts
│   └── other-documents.ts
├── cults/
│   └── index.ts
├── semantic-defense/
│   ├── arguments.ts
│   ├── arguments-nt-advanced.ts
│   ├── arguments-ot-nt.ts
│   └── tutorial.ts
└── ... (all data files)
```

**Extraction Strategy**:
1. Identify all display text (not metadata, not IDs)
2. Map data file structure to translation keys
3. Create translatable data structure
4. Update data loader to fetch translations

**Example Transformation**:
```typescript
// Before (hardcoded)
const cosmologicalArguments = [
  {
    id: 'cosmological-first-cause',
    name: 'First Cause Argument',
    descriptions: {
      support: 'Everything that exists has a cause.',
      // ... more hardcoded text
    }
  }
]

// After (translatable)
const cosmologicalArguments = [
  {
    id: 'cosmological-first-cause',
    name: 'data.arguments.cosmological.firstCause.name',
    descriptions: {
      support: 'data.arguments.cosmological.firstCause.descriptions.support'
    }
  }
]
```

#### 2.2 Component Extraction

**UI Components with Hardcoded Text**:
```
src/components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── manuscripts/
│   └── InterlinearReader.tsx
└── semantic/
    ├── InterlinearVerse.tsx
    ├── SemanticDefenseSlideshow.tsx
    └── SemanticsTutorialModule.tsx
```

**Extraction Strategy**:
1. Extract all `t()` calls from existing i18n code
2. Identify hardcoded strings in JSX
3. Create translation keys following component naming
4. Replace hardcoded text with `t()` calls

#### 2.3 Page Extraction

**Pages with Hardcoded Text**:
```
src/app/[locale]/
├── compare/
│   ├── page.tsx
│   └── side-by-side/page.tsx
├── defend/
│   ├── page.tsx
│   ├── atheism/
│   └── cults/
├── explore/
│   ├── argument-tree/page.tsx
│   ├── debate-mode/page.tsx
│   └── timeline/page.tsx
├── semantics/
│   └── page.tsx
└── sources/
    ├── page.tsx
    ├── church-fathers/page.tsx
    └── manuscripts/
```

**Extraction Strategy**:
1. Extract all hardcoded headers, labels, messages
2. Create page-specific translation keys
3. Update components to use `useTranslations()`

---

### Phase 3: Message File Creation (Days 6-8)

#### 3.1 Generate Missing Keys

**Tooling**:
```typescript
// scripts/extract-keys.ts
import * as fs from 'fs';
import * as path from 'path';

interface ExtractedKey {
  path: string;
  key: string;
  value: string;
  context: string;
}

function extractKeys(filePath: string, context: string): ExtractedKey[] {
  // Read file, extract hardcoded strings
  // Return array of keys with values
}

// Run on all files and aggregate
const allKeys = aggregateExtractedKeys();
const enMessages = generateMessageFile(allKeys);
fs.writeFileSync('messages/en.json', JSON.stringify(enMessages, null, 2));
```

#### 3.2 Create Translation Keys for All 26 Locales

**Process**:
1. Generate complete `en.json` with all keys
2. Copy to all other locale files
3. Translate each locale using professional translation tools
4. Validate translations for context accuracy

**Translation Priority**:
- **Critical**: Navigation, error messages, key UI elements (100% complete required)
- **Important**: Core content, arguments, manuscripts descriptions (80% complete)
- **Optional**: Metadata, admin text, secondary content (50% complete acceptable)

**Translation Tools to Use**:
- DeepL API (for initial bulk translation)
- Human translation for critical content
- Community translation for optional content

#### 3.3 Create Translation Checker Script

```typescript
// scripts/validate-translations.ts
interface TranslationStatus {
  locale: string;
  totalKeys: number;
  translatedKeys: number;
  completionRate: number;
  missingKeys: string[];
}

function validateTranslations(): TranslationStatus[] {
  // Check each locale file
  // Report completion rate
  // List missing keys
  // Generate summary report
}
```

---

### Phase 4: Component Refactoring (Days 9-12)

#### 4.1 Update Components to Use useTranslations

**Pattern**:
```typescript
// Before
return (
  <div>
    <h1>{argument.name}</h1>
    <p>{argument.description}</p>
  </div>
)

// After
import { useTranslations } from 'next-intl';

export default function ArgumentCard({ argument }: { argument: Argument }) {
  const t = useTranslations('data.arguments.cosmological');

  return (
    <div>
      <h1>{t(`${argument.id}.name`)}</h1>
      <p>{t(`${argument.id}.description`)}</p>
    </div>
  );
}
```

#### 4.2 Handle Dynamic Content

**For Data with Multiple Items**:
```typescript
function ArgumentList({ category }: { category: string }) {
  const t = useTranslations(`data.arguments.${category}`);

  return (
    <div>
      {arguments.map((arg) => (
        <div key={arg.id}>
          <h2>{t(`${arg.id}.name`)}</h2>
          <p>{t(`${arg.id}.description`)}</p>
        </div>
      ))}
    </div>
  );
}
```

#### 4.3 Handle Plurals and Variables

**Plurals**:
```json
// messages/en.json
{
  "components.pagination": {
    "items": "{count, plural, =0 {No items} =1 {# item} other {# items}}"
  }
}

// Usage
const t = useTranslations('components.pagination');
<p>{t('items', { count: 10 })}</p>
```

**Variables**:
```json
// messages/en.json
{
  "components.greeting": {
    "greet": "Hello, {name}!"
  }
}

// Usage
<p>{t('greet', { name: 'John' })}</p>
```

---

### Phase 5: Dynamic Content Support (Days 13-15)

#### 5.1 Create Translatable Data Structure

```typescript
// src/types/translations.ts
export interface TranslatableData<T> {
  data: T;
  translations: {
    [locale: string]: {
      [key: string]: string;
    };
  };
}

// Usage for arguments
export interface TranslatableArgument {
  id: string;
  name: string;
  descriptions: TranslatableObject;
  objections: TranslatableObject;
  responses: TranslatableObject;
}

interface TranslatableObject {
  [locale: string]: {
    [key: string]: string;
  };
}
```

#### 5.2 Update Data Loader

```typescript
// src/data/arguments/cosmological.ts
export async function getCosmologicalArguments(locale: Locale = 'en') {
  const baseData = getCosmologicalBaseData();
  const translations = await getTranslations(
    'data.arguments.cosmological',
    locale
  );

  return baseData.map(arg => ({
    ...arg,
    name: translations[`${arg.id}.name`] || arg.name,
    descriptions: {
      support: translations[`${arg.id}.descriptions.support`] || arg.descriptions.support,
      // ... map all fields
    }
  }));
}
```

#### 5.3 Handle Argument Tree Navigation

```typescript
// Update interlinear reader to use translation keys
function InterlinearReader({ textId, locale }: { textId: string; locale: Locale }) {
  const t = useTranslations(`data.semantic-defense.arguments`);
  const translation = getSemanticDefenseTranslation(textId, locale);

  return (
    <div>
      <h1>{translation.title}</h1>
      <p>{translation.explanation}</p>
    </div>
  );
}
```

---

### Phase 6: Validation & Testing (Days 16-18)

#### 6.1 Translation Validation

**Script Output**:
```
Translation Status Report
=========================

Locale: en
  Total Keys: 1,247
  Translated: 1,247 (100%)
  Status: ✓ COMPLETE

Locale: es
  Total Keys: 1,247
  Translated: 1,100 (88.2%)
  Status: ⚠ PARTIAL

Locale: ar
  Total Keys: 1,247
  Translated: 800 (64.2%)
  Status: ⚠ PARTIAL
```

**Critical Requirements**:
- All navigation keys: 100%
- All error messages: 100%
- All primary UI labels: 100%
- All argument names: 80%
- All descriptions: 70%
- Optional content: 50%

#### 6.2 Component Testing

**Test Checklist**:
- [ ] All buttons have text translations
- [ ] All headers use translation keys
- [ ] All error messages are translatable
- [ ] All dynamic content (arguments, manuscripts) uses translations
- [ ] RTL support for Arabic/Persian
- [ ] Plural forms for languages with complex pluralization
- [ ] Variable interpolation works correctly

#### 6.3 End-to-End Testing

**Test Procedure**:
1. Test each locale in browser
2. Verify all pages load correctly
3. Check all text appears in correct language
4. Verify navigation works in all locales
5. Test RTL layout for Arabic/Persian
6. Verify responsive design in all locales

---

### Phase 7: Translation Editor & Workflow (Days 19-20)

#### 7.1 Admin Translation Page

**Features**:
- List all translation keys with current values
- Bulk edit values
- Add/Remove keys
- Mark keys as "complete" or "in progress"
- View keys by priority level

**Access Control**:
- Admin-only route: `/admin/translations`
- Requires authentication
- Audit log for all changes

#### 7.2 Inline Translation Preview

**Implementation**:
```typescript
// Add translation toggle to each component
function ArgumentCard({ argument }: { argument: Argument }) {
  const t = useTranslations('data.arguments.cosmological');
  const [previewLocale, setPreviewLocale] = useState<Locale>('en');

  return (
    <div>
      <button onClick={() => setPreviewLocale('es')}>Español</button>
      <button onClick={() => setPreviewLocale('ar')}>العربية</button>

      <h1>{t(`${argument.id}.name`, previewLocale)}</h1>
      <p>{t(`${argument.id}.description`, previewLocale)}</p>
    </div>
  );
}
```

#### 7.3 Translation Import/Export

**Export**:
- Export all translation files as ZIP
- Include key structure and metadata
- Timestamp in filename

**Import**:
- Upload ZIP with updated translations
- Validate against schema
- Update locale files
- Generate diff report

---

### Phase 8: CI/CD Integration (Day 21)

#### 8.1 Automated Validation

**GitHub Actions Workflow**:
```yaml
name: i18n Validation

on: [push, pull_request]

jobs:
  validate-translations:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Validate JSON schema
        run: npm run validate:i18n

      - name: Check completion rates
        run: npm run check:translations

      - name: Generate report
        run: npm run generate:i18n-report
```

#### 8.2 Automated Translation Checks

**Pre-commit Hook**:
```bash
#!/bin/bash
# .git/hooks/pre-commit

# Check for hardcoded strings
if git diff --cached | grep -q '[A-Z][a-z]*\s*=\s*["\'][^"\']+'; then
  echo "ERROR: Found hardcoded strings in staged files"
  echo "Please extract to translation keys first."
  exit 1
fi

# Check for translation keys
npm run validate:i18n
```

#### 8.3 Notification on Critical Gaps

**Alerts**:
- Email/Slack notification for locales with <50% completion
- Daily reminder for translation contributors
- PR comment highlighting missing translations

---

## 3. Resource Requirements

### 3.1 Tools & Dependencies

**Dependencies to Add**:
```json
{
  "devDependencies": {
    "i18next-scanner": "^4.4.0",    // Scan codebase for translation keys
    "json-schema-to-typescript": "^13.1.0", // Generate TypeScript types
    "eslint-plugin-i18next": "^0.9.0"      // Enforce i18n usage
  }
}
```

### 3.2 Team Roles

- **Backend Developer**: Set up infrastructure, update data files
- **Frontend Developer**: Refactor components, add useTranslations hooks
- **Translation Coordinator**: Manage translation workflow, review translations
- **QA Tester**: Test all locales, validate translations

### 3.3 Estimated Effort

**Developer Days**:
- Phase 1 (Infrastructure): 2 days
- Phase 2 (Extraction): 3 days
- Phase 3 (Message Files): 3 days
- Phase 4 (Component Refactor): 4 days
- Phase 5 (Dynamic Content): 3 days
- Phase 6 (Validation): 3 days
- Phase 7 (Editor): 2 days
- Phase 8 (CI/CD): 1 day

**Total**: 21 days (3 weeks)

**Translation Effort**:
- Bulk translation (DeepL API): 2 days
- Human review (critical content): 5 days
- Community translation (optional): 10 days

---

## 4. Success Metrics

### 4.1 Technical Metrics

- ✅ 0 hardcoded user-facing strings remaining
- ✅ All 26 locales have complete translations for critical keys
- ✅ 80%+ translation completion across all locales
- ✅ 100% validation pass rate on all message files
- ✅ CI/CD catches translation gaps before merge

### 4.2 User Experience Metrics

- ✅ All UI text appears in user's selected language
- ✅ Navigation works correctly in all locales
- ✅ RTL layout works for Arabic/Persian
- ✅ Dynamic content (arguments, manuscripts) displays in correct language
- ✅ No broken text or missing translations

### 4.3 Developer Metrics

- ✅ Translation keys have consistent naming convention
- ✅ Components use useTranslations hook correctly
- ✅ Translation extraction tool identifies all strings
- ✅ Translation validation catches errors before deployment

---

## 5. Risk Management

### 5.1 Technical Risks

**Risk**: Complex translation keys become hard to manage

**Mitigation**:
- Use schema validation
- Document key naming conventions
- Create translation editor for non-technical users

**Risk**: Translation quality varies across locales

**Mitigation**:
- Professional translation for critical content
- Human review for key translations
- Translation quality checker tool

**Risk**: Translation keys grow too large

**Mitigation**:
- Organize keys by feature/component
- Use `useTranslations` with specific namespaces
- Implement key compression strategy if needed

### 5.2 Timeline Risks

**Risk**: Translation takes longer than expected

**Mitigation**:
- Start with critical keys (navigation, errors)
- Implement phased rollout
- Allow community contributions for optional content

**Risk**: Developer resources insufficient

**Mitigation**:
- Automate as much as possible (extraction, validation)
- Clear documentation for developer workflow
- Prioritize tasks by impact

---

## 6. Next Steps

### Immediate Actions (This Week)

1. ✅ **Analyze existing i18n infrastructure** (DONE)
2. **Create translation schema and types**
3. **Build translation extraction script**
4. **Set up translation editor infrastructure**
5. **Create initial en.json with all keys**

### First Week of Implementation

1. **Extract hardcoded text from data files**
2. **Extract hardcoded text from components**
3. **Generate complete en.json**
4. **Copy to all 26 locales**
5. **Start bulk translation (DeepL API)**

### Second Week

1. **Review and improve translations**
2. **Refactor components to use useTranslations**
3. **Implement dynamic content support**
4. **Add translation validation**

### Third Week

1. **Translation editor development**
2. **CI/CD integration**
3. **End-to-end testing**
4. **Launch and monitoring**

---

## Appendix A: Key Structure Examples

### Navigation Keys
```json
{
  "nav": {
    "home": "Home",
    "defend": "Defend",
    "compare": "Compare",
    "semantics": "Semantics",
    "sources": "Sources",
    "explore": "Explore",
    "search": "Search",
    "glossary": "Glossary",
    "about": "About"
  }
}
```

### Component Keys
```json
{
  "components.argumentCard": {
    "title": "Argument",
    "readMore": "Read more",
    "objections": "Objections",
    "responses": "Responses",
    "viewFull": "View full argument"
  }
}
```

### Data Keys (Cosmological Arguments)
```json
{
  "data.arguments.cosmological": {
    "firstCause": {
      "name": "First Cause Argument",
      "description": "Everything that exists has a cause. The universe exists, therefore it has a cause. Therefore, there must be an uncaused cause of the universe.",
      "proponents": ["St. Thomas Aquinas"],
      "objections": {
        "circularity": "The argument may be circular - assuming the cause is God when proving God exists.",
        "universeNotCause": "The universe cannot be its own cause - it exists, so it must have a cause outside itself.",
        "quantumGravity": "Quantum mechanics suggests the universe could have originated from quantum fluctuations without a cause."
      },
      "responses": {
        "circularity": "The argument establishes an uncaused cause, not specifically God. The uncaused cause is understood as necessary being, not contingent being.",
        "universeNotCause": "This addresses the domain error - the cause is in the domain of being/existence, not physical cause-and-effect.",
        "quantumGravity": "Quantum gravity research may explain causal mechanisms, but doesn't negate the existence of an uncaused cause of the entire universe."
      }
    }
  }
}
```

### Error Message Keys
```json
{
  "errors": {
    "notFound": "Page not found",
    "invalidArgument": "Argument not found",
    "invalidSource": "Source not found",
    "missingTranslation": "Translation not available"
  }
}
```

---

## Appendix B: Translation Priority Matrix

| Priority | Content Type | Completion Required | Example |
|----------|--------------|---------------------|---------|
| **Critical** | Navigation, headers, error messages, primary buttons | 100% | `nav.*`, `errors.*`, `components.navbar.*` |
| **High** | Argument names, core descriptions, key labels | 100% | `data.arguments.*.name`, `data.manuscripts.*.title` |
| **Medium** | Detailed descriptions, historical background, explanations | 80% | `data.arguments.*.descriptions.*`, `data.arguments.*.historicalBackground` |
| **Low** | Optional content, metadata, secondary text | 50% | `data.cults.*.notes`, `data.manuscripts.*.notes` |

---

**Document Version**: 1.0
**Created**: 2026-03-28
**Author**: Sisyphus
**Status**: Ready for Implementation
