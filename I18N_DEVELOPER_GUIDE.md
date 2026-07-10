# i18n Developer Quick Reference

## Table of Contents

1. [Getting Started](#getting-started)
2. [Translation Keys](#translation-keys)
3. [Using Translations in Components](#using-translations-in-components)
4. [Dynamic Content](#dynamic-content)
5. [Translation Files](#translation-files)
6. [Best Practices](#best-practices)
7. [Common Patterns](#common-patterns)
8. [Debugging](#debugging)

---

## Getting Started

### Prerequisites

- All translation files are in `messages/[locale].json`
- Translation keys follow naming conventions defined in `I18N_KEY_NAMING.md`
- Use TypeScript for type safety

### Import Translations

```typescript
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('componentName');
  // Or use a specific namespace
  const tData = useTranslations('data.arguments');
  // Or use a specific key
  const tCommon = useTranslations('common');
}
```

### Accessing Translations

```typescript
// Access a simple key
const title = t('title');

// Access a nested key
const subtitle = t('section.subtitle');

// Access with parameters
const greeting = t('greeting', { name: 'John' });

// Access plural forms
const items = t('items', { count: 5 });
```

---

## Translation Keys

### Key Naming Pattern

```
[category].[subcategory].[specific-key]
```

**Examples**:
- `common.button.close` - Global button label
- `components.argumentCard.title` - Component-specific title
- `data.arguments.cosmological.firstCause.name` - Dynamic argument name

### Key Categories

| Category | Description | Examples |
|----------|-------------|----------|
| `common` | Global shared components | `common.button.close`, `common.readMore` |
| `nav` | Navigation links | `nav.home`, `nav.defend`, `nav.compare` |
| `home` | Home page content | `home.heroTitle`, `home.heroSubtitle` |
| `defend` | Defense pages | `defend.title`, `defend.subtitle` |
| `compare` | Comparison pages | `compare.title`, `compare.keyBeliefs` |
| `explore` | Exploration tools | `explore.argumentTree`, `explore.timeline` |
| `sources` | Primary sources | `sources.title`, `sources.categories` |
| `semantics` | Semantic defense | `semantics.title`, `semantics.subtitle` |
| `components` | Component-specific | `components.argumentCard.*` |
| `errors` | Error messages | `errors.notFound`, `errors.invalidArgument` |
| `api` | API responses | `api.success`, `api.loading` |
| `data` | Dynamic content | `data.arguments.*`, `data.manuscripts.*` |

---

## Using Translations in Components

### Basic Usage

```typescript
import { useTranslations } from 'next-intl';

export default function ArgumentCard({ argumentId }: { argumentId: string }) {
  const t = useTranslations('data.arguments');

  return (
    <div>
      <h1>{t(`${argumentId}.name`)}</h1>
      <p>{t(`${argumentId}.description`)}</p>
    </div>
  );
}
```

### With Multiple Translations

```typescript
import { useTranslations } from 'next-intl';

export default function ArgumentCard({ argument }: { argument: Argument }) {
  const t = useTranslations('data.arguments.cosmological');
  const tComponents = useTranslations('components.argumentCard');
  const tCommon = useTranslations('common');

  return (
    <div>
      <button>{tCommon('readMore')}</button>
      <h1>{t(`${argument.id}.name`)}</h1>
      <p>{t(`${argument.id}.description`)}</p>
      <p>{tComponents('viewFull')}</p>
    </div>
  );
}
```

### Accessing Arrays

```typescript
// When translations include arrays
const t = useTranslations('data.arguments.cosmological.firstCause');

// Proponents are an array of strings
<div>
  <h3>{t('proponents')}</h3>
  {['St. Thomas Aquinas'].map(name => (
    <p key={name}>{name}</p>
  ))}
</div>
```

### With Parameters

```typescript
const t = useTranslations('components.pagination');

// Plural forms
<p>{t('items', { count: 0 })}</p>
<p>{t('items', { count: 1 })}</p>
<p>{t('items', { count: 10 })}</p>

// Variables
<p>{t('greeting', { name: 'John' })}</p>
<p>{t('welcomeMessage', { userName: 'John', count: 5 })}</p>
```

---

## Dynamic Content

### For Dynamic Lists

```typescript
import { useTranslations } from 'next-intl';

export default function ArgumentList({ category }: { category: string }) {
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

### For Nested Structures

```typescript
export default function ArgumentDetail({ argumentId }: { argumentId: string }) {
  const t = useTranslations('data.arguments.cosmological');

  return (
    <div>
      <h1>{t(`${argumentId}.name`)}</h1>

      <h2>{t('historicalBackground')}</h2>
      <p>{t(`${argumentId}.historicalBackground`)}</p>

      <h2>{t('proponents')}</h2>
      <p>{t(`${argumentId}.proponents`)}</p>

      <h2>{t('objectionsAndResponses')}</h2>

      <h3>{t('objections')}</h3>
      {objections.map((obj) => (
        <div key={obj.id}>
          <h4>{t(`${argumentId}.objections.${obj.id}.title`)}</h4>
          <p>{t(`${argumentId}.objections.${obj.id}.description`)}</p>
        </div>
      ))}

      <h3>{t('responses')}</h3>
      {responses.map((res) => (
        <div key={res.id}>
          <h4>{t(`${argumentId}.responses.${res.id}.title`)}</h4>
          <p>{t(`${argumentId}.responses.${res.id}.response`)}</p>
        </div>
      ))}
    </div>
  );
}
```

### For Manuscripts

```typescript
export default function ManuscriptDetail({ id }: { id: string }) {
  const t = useTranslations('data.manuscripts.codexes');

  return (
    <div>
      <h1>{t(`${id}.title`)}</h1>
      <p>{t(`${id}.description`)}</p>
      <p><strong>{t('date')}:</strong> {t(`${id}.date`)}</p>
      <p><strong>{t('location')}:</strong> {t(`${id}.location`)}</p>
      <p><strong>{t('significance')}:</strong> {t(`${id}.significance`)}</p>
    </div>
  );
}
```

---

## Translation Files

### Adding a New Key

1. **Add key to `messages/en.json`**:
   ```json
   {
     "components.newComponent": {
       "title": "New Component",
       "description": "This is a new component"
     }
   }
   ```

2. **Copy to other locales**:
   ```bash
   # Copy all keys to other locales
   cp messages/en.json messages/es.json
   cp messages/en.json messages/fr.json
   # ... (copy to all 26 locales)
   ```

3. **Update translations** in each locale file:
   ```json
   {
     "components.newComponent": {
       "title": "Componente Nuevo",
       "description": "Este es un componente nuevo"
     }
   }
   ```

### Checking for Missing Translations

```bash
npm run check:translations
```

This script will:
- Validate all message files against the schema
- Check completion rates for each locale
- Report missing or incomplete translations

### Validating JSON Structure

```bash
npm run validate:i18n
```

This validates:
- JSON syntax
- Required fields
- Key naming conventions
- Type consistency

---

## Best Practices

### 1. Use Specific Namespaces

```typescript
// ✅ Good - specific namespace
const t = useTranslations('data.arguments.cosmological');

// ❌ Bad - overly generic
const t = useTranslations('data');

// ✅ Good - specific component
const t = useTranslations('components.argumentCard');

// ❌ Bad - too broad
const t = useTranslations('components');
```

### 2. Use Translation Keys, Not Hardcoded Strings

```typescript
// ✅ Good - use translation key
<div>{t('title')}</div>

// ❌ Bad - hardcoded string
<div>Theology Study Platform</div>
```

### 3. Include Context in Key Names

```typescript
// ✅ Good - clear context
'data.arguments.cosmological.firstCause.name'
'data.manuscripts.codexes.alexandrinus.title'

// ❌ Bad - ambiguous
'argumentName'
'manuscriptTitle'
```

### 4. Use Consistent Naming Convention

```typescript
// ✅ Good - lowercase with underscores
'common.button.close'
'data.arguments.cosmological.firstCause.name'

// ❌ Bad - inconsistent
'Common.Button.Close'
'data.arguments.cosmological.firstCause.Name'
```

### 5. Handle Missing Translations Gracefully

```typescript
// ✅ Good - provide fallback
<div>{t('title') || 'Default Title'}</div>

// ✅ Good - handle undefined
<div>{t('title') || '...'}</div>

// ❌ Bad - no fallback
<div>{t('title')}</div>
// Will show key name if missing
```

### 6. Test with Different Locales

```typescript
// Test all locales
describe('ArgumentCard', () => {
  it('displays title in English', () => {
    render(<ArgumentCard />);
    expect(screen.getByText('First Cause Argument')).toBeInTheDocument();
  });

  it('displays title in Spanish', () => {
    render(<ArgumentCard locale="es" />);
    expect(screen.getByText('Argumento de la Primera Causa')).toBeInTheDocument();
  });
});
```

---

## Common Patterns

### Pattern 1: Navigation Links

```typescript
const t = useTranslations('nav');

<Link href="/">{t('home')}</Link>
<Link href="/defend">{t('defend')}</Link>
<Link href="/compare">{t('compare')}</Link>
```

### Pattern 2: Button Labels

```typescript
const t = useTranslations('common');
const tButtons = useTranslations('buttons');

<button>{t('readMore')}</button>
<button>{tButtons('save')}</button>
```

### Pattern 3: Error Messages

```typescript
const tErrors = useTranslations('errors');

<div className="error">
  {tErrors('notFound')}
</div>
```

### Pattern 4: Section Headers

```typescript
const tSections = useTranslations('sections');

<h2>{tSections('historicalContext')}</h2>
<h2>{tSections('objectionsAndResponses')}</h2>
```

### Pattern 5: Placeholder Text

```typescript
const tPlaceholders = useTranslations('placeholders');

<input placeholder={tPlaceholders('search')} />
```

### Pattern 6: Loading States

```typescript
const tApi = useTranslations('api');
const tCommon = useTranslations('common');

{loading ? (
  <p>{tApi('loading')}</p>
) : (
  <div>{data}</div>
)}
```

---

## Debugging

### 1. Check Translation Key Exists

```typescript
const t = useTranslations('componentName');

// Check if key exists
const exists = t.has('title'); // returns boolean
console.log(exists);
```

### 2. Debug Translation Value

```typescript
const t = useTranslations('componentName');

console.log(t.raw('title')); // Returns raw value
console.log(t('title')); // Returns translation
```

### 3. View All Keys

```bash
# List all keys in English
npm run extract:i18n-keys

# This generates a report of all translation keys
```

### 4. Check Locale in Browser

```typescript
const t = useTranslations('common');

console.log('Current locale:', locale);
console.log('Translation:', t('loading'));
```

### 5. Verify JSON Structure

```bash
# Validate all translation files
npm run validate:i18n
```

### 6. Check for Missing Keys

```bash
# Check translation completion
npm run check:translations
```

---

## Migration Checklist

When adding a new component with hardcoded text:

- [ ] Identify all hardcoded strings
- [ ] Create translation keys following naming conventions
- [ ] Add keys to `messages/en.json`
- [ ] Copy to all 26 locale files
- [ ] Translate each locale
- [ ] Update component to use `useTranslations`
- [ ] Remove hardcoded strings
- [ ] Test in all locales
- [ ] Verify translation exists
- [ ] Add to CI/CD validation

---

## Examples by Feature

### Navigation

```typescript
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('nav');

  return (
    <nav>
      <a href="/">{t('home')}</a>
      <a href="/defend">{t('defend')}</a>
      <a href="/compare">{t('compare')}</a>
      <a href="/sources">{t('sources')}</a>
      <a href="/explore">{t('explore')}</a>
      <a href="/semantics">{t('semantics')}</a>
      <a href="/glossary">{t('glossary')}</a>
    </nav>
  );
}
```

### Home Page

```typescript
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  return (
    <div>
      <h1>{t('heroTitle')}</h1>
      <p>{t('heroSubtitle')}</p>
      <input
        type="text"
        placeholder={tCommon('searchPlaceholder')}
      />
    </div>
  );
}
```

### Argument Detail

```typescript
import { useTranslations } from 'next-intl';

export default function ArgumentDetail({ argumentId }: { argumentId: string }) {
  const t = useTranslations('data.arguments.cosmological');

  return (
    <article>
      <header>
        <h1>{t(`${argumentId}.name`)}</h1>
        <p>{t(`${argumentId}.description`)}</p>
      </header>

      <section>
        <h2>{t('historicalBackground')}</h2>
        <p>{t(`${argumentId}.historicalBackground`)}</p>
      </section>

      <section>
        <h2>{t('keyProponents')}</h2>
        <p>{t(`${argumentId}.proponents`)}</p>
      </section>
    </article>
  );
}
```

### Modal

```typescript
import { useTranslations } from 'next-intl';

export default function ConfirmationModal({ isOpen }: { isOpen: boolean }) {
  const t = useTranslations('components.modal');
  const tCommon = useTranslations('common');

  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>{t('title')}</h2>
      <p>Are you sure you want to delete this?</p>
      <div className="buttons">
        <button onClick={onConfirm}>{t('confirm')}</button>
        <button onClick={onCancel}>{t('cancel')}</button>
      </div>
    </div>
  );
}
```

---

## Additional Resources

- **Implementation Plan**: `I18N_IMPLEMENTATION_PLAN.md`
- **Key Naming**: `I18N_KEY_NAMING.md`
- **Schema**: `messages/schema.json`
- **Type Definitions**: `src/types/i18n.ts`

---

**Last Updated**: 2026-03-28
**Maintainer**: i18n Team
