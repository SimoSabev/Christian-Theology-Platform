# i18n Key Naming Conventions

## Overview

This document defines the standardized key naming conventions for all translation keys in the Theology Study Platform.

---

## 1. General Naming Rules

### 1.1 Case and Format

- **Use lowercase letters**: `common.button.close` (NOT `Common.button.Close`)
- **Use underscores for separators**: `data.arguments.cosmological.firstCause.name`
- **Avoid spaces and special characters**: `home.heroTitle` (NOT `home.hero title`)
- **Use consistent spacing**: `components.pagination.items` (NOT `components.pagination.items_`)

### 1.2 Key Structure

```
[category].[subcategory].[specific-key]
```

- **Category**: High-level grouping (e.g., `common`, `nav`, `data`)
- **Subcategory**: Feature or component grouping (e.g., `arguments.cosmological`, `components.argumentCard`)
- **Specific-key**: The actual key name (e.g., `title`, `name`, `description`)

---

## 2. Category Definitions

### 2.1 `common` - Global Shared Components

UI elements used across multiple pages.

**Example Keys**:
```json
{
  "common": {
    "search": "Search...",
    "readMore": "Read more",
    "loading": "Loading...",
    "noResults": "No results found",
    "back": "Back",
    "close": "Close",
    "save": "Save",
    "cancel": "Cancel"
  }
}
```

### 2.2 `nav` - Navigation

Site navigation links and menu items.

**Example Keys**:
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

### 2.3 `home` - Home Page

Content specific to the homepage.

**Example Keys**:
```json
{
  "home": {
    "heroTitle": "The Definitive Christian Theology Study Platform",
    "heroSubtitle": "Explore 2,000 years of apologetics, doctrine, and primary sources — with interactive tools for deep study.",
    "heroSearch": "What question are you exploring?",
    "quickFilters": {
      "scientific": "Scientific",
      "philosophical": "Philosophical",
      "historical": "Historical",
      "theological": "Theological"
    }
  }
}
```

### 2.4 `defend` - Defense Pages

Content for apologetics defense pages.

**Example Keys**:
```json
{
  "defend": {
    "title": "Defend",
    "subtitle": "Explore Christian apologetics and defend core beliefs",
    "categories": {
      "atheism": "Atheism",
      "cults": "Cults",
      "skepticism": "Skepticism"
    }
  }
}
```

### 2.5 `compare` - Comparison Pages

Content for tradition comparison features.

**Example Keys**:
```json
{
  "compare": {
    "title": "Compare Traditions",
    "subtitle": "Explore theological similarities and differences",
    "keyBeliefs": "Key Beliefs",
    "historicalBackground": "Historical Background",
    "practices": "Practices",
    "sacraments": "Sacraments"
  }
}
```

### 2.6 `explore` - Exploration Tools

Content for exploration features.

**Example Keys**:
```json
{
  "explore": {
    "title": "Explore",
    "subtitle": "Interactive tools for deep theological study",
    "argumentTree": "Argument Tree",
    "debateMode": "Debate Mode",
    "timeline": "Timeline",
    "strengths": {
      "strong": "Strong Evidence",
      "moderate": "Moderate Evidence",
      "weak": "Weak Evidence",
      "contested": "Contested"
    }
  }
}
```

### 2.7 `sources` - Primary Sources

Content for sources and documents.

**Example Keys**:
```json
{
  "sources": {
    "title": "Primary Sources",
    "subtitle": "Explore ancient texts and manuscripts",
    "categories": {
      "church-fathers": "Church Fathers",
      "councils": "Councils",
      "manuscripts": "Manuscripts"
    },
    "featured": "Featured Sources",
    "readMore": "Read more"
  }
}
```

### 2.8 `semantics` - Semantic Defense

Content for semantic argumentation tools.

**Example Keys**:
```json
{
  "semantics": {
    "title": "Semantic Defense",
    "subtitle": "Master biblical hermeneutics and semantic analysis",
    "tutorial": "Tutorial",
    "examples": "Examples",
    "analysis": "Analysis",
    "conclusion": "Conclusion"
  }
}
```

### 2.9 `data.arguments` - Arguments Data

Translation keys for theological arguments.

**Structure**: `data.arguments.[category].[argumentId].[property]`

**Example Keys**:
```json
{
  "data.arguments.cosmological": {
    "firstCause": {
      "name": "First Cause Argument",
      "description": "Everything that exists has a cause.",
      "proponents": ["St. Thomas Aquinas"],
      "objections": {
        "circularity": "The argument may be circular.",
        "universeNotCause": "The universe cannot be its own cause."
      },
      "responses": {
        "circularity": "The argument establishes an uncaused cause, not specifically God."
      }
    }
  },
  "data.arguments.ontological": {
    "existenceGod": {
      "name": "Ontological Argument",
      "description": "God is defined as the greatest possible being.",
      "proponents": ["St. Anselm", "René Descartes"],
      "objections": {
        "meaningless": "The concept is meaningless."
      },
      "responses": {
        "meaningless": "The concept is meaningful and defines necessary existence."
      }
    }
  }
}
```

### 2.10 `data.manuscripts` - Manuscripts Data

Translation keys for manuscript content.

**Structure**: `data.manuscripts.[type].[id].[property]`

**Example Keys**:
```json
{
  "data.manuscripts.codexes": {
    "codex-matthew": {
      "title": "Codex Alexandrinus",
      "description": "5th-century Greek uncial manuscript of the Greek Bible.",
      "date": "5th century",
      "location": "British Library",
      "significance": "One of the oldest and most complete Bibles."
    }
  },
  "data.manuscripts.papyri": {
    "p52": {
      "title": "P52",
      "description": "Papyrus fragment of John's Gospel, dated to 125-130 AD.",
      "date": "125-130 AD",
      "location": "British Museum",
      "significance": "One of the earliest New Testament fragments."
    }
  }
}
```

### 2.11 `data.cults` - Cult Information

Translation keys for cult information.

**Structure**: `data.cults.[id].[property]`

**Example Keys**:
```json
{
  "data.cults.mormonism": {
    "name": "Mormonism (Church of Jesus Christ of Latter-day Saints)",
    "description": "A Christian restorationist movement founded by Joseph Smith in 1830.",
    "origins": "1830, USA",
    "keyBeliefs": ["Book of Mormon as scripture", "Living prophet"],
    "objections": {
      "textualAnalysis": "Book of Mormon shows evidence of translation influence.",
      "historicalAccuracy": "Historical claims have been challenged."
    }
  }
}
```

### 2.12 `data.semantic-defense` - Semantic Defense Content

Translation keys for semantic argumentation data.

**Example Keys**:
```json
{
  "data.semantic-defense.arguments": {
    "propositional": {
      "title": "Propositional Logic",
      "description": "Analysis of statements as truth-conditional propositions.",
      "applications": ["Debate analysis", "Theological argumentation"]
    },
    "lexical": {
      "title": "Lexical Semantics",
      "description": "Study of word meanings and usage.",
      "applications": ["Bible translation", "Theological definitions"]
    }
  }
}
```

### 2.13 `components` - Component-Specific

Translation keys for individual components.

**Structure**: `components.[componentName].[key]`

**Example Keys**:
```json
{
  "components.argumentCard": {
    "title": "Argument",
    "readMore": "Read more",
    "objections": "Objections",
    "responses": "Responses",
    "viewFull": "View full argument",
    "noContent": "No content available"
  },
  "components.manuscriptCard": {
    "title": "Manuscript",
    "viewDetails": "View details",
    "date": "Date",
    "location": "Location",
    "significance": "Significance"
  },
  "components.pagination": {
    "previous": "Previous",
    "next": "Next",
    "items": "{count, plural, =0 {No items} =1 {# item} other {# items}}",
    "showing": "Showing {start}-{end} of {total}"
  },
  "components.modal": {
    "title": "Modal",
    "close": "Close",
    "confirm": "Confirm",
    "cancel": "Cancel"
  }
}
```

### 2.14 `errors` - Error Messages

Translation keys for error messages.

**Example Keys**:
```json
{
  "errors": {
    "notFound": "Page not found",
    "invalidArgument": "Argument not found",
    "invalidSource": "Source not found",
    "invalidTradition": "Tradition not found",
    "missingTranslation": "Translation not available",
    "serverError": "Server error, please try again",
    "networkError": "Network error, please check your connection",
    "authorizationError": "You need to be logged in to view this"
  }
}
```

### 2.15 `api` - API Response Messages

Translation keys for API responses.

**Example Keys**:
```json
{
  "api": {
    "success": "Success",
    "error": "Error",
    "loading": "Loading...",
    "searching": "Searching...",
    "noResults": "No results found",
    "retry": "Retry"
  }
}
```

---

## 3. Dynamic Content Patterns

### 3.1 Arrays of Items

For dynamic lists where each item has the same structure:

```json
{
  "data.arguments.cosmological": {
    "firstCause": { "name": "First Cause Argument", ... },
    "contingency": { "name": "Contingency Argument", ... },
    "cosmicFineTuning": { "name": "Cosmic Fine-Tuning", ... }
  }
}
```

### 3.2 Nested Properties

For deeply nested content:

```json
{
  "data.arguments.cosmological": {
    "firstCause": {
      "name": "First Cause Argument",
      "descriptions": {
        "support": "Everything that exists has a cause.",
        "explanation": "The argument proceeds as follows...",
        "summary": "In summary..."
      },
      "objections": {
        "circularity": {
          "title": "Circularity",
          "description": "The argument may be circular.",
          "response": "This is addressed by..."
        }
      }
    }
  }
}
```

### 3.3 Plurals

For content that varies by number:

```json
{
  "components.pagination": {
    "items": "{count, plural, =0 {No items} =1 {# item} other {# items}}",
    "arguments": "{count, plural, =0 {No arguments found} =1 {# argument found} other {# arguments found}}"
  }
}
```

### 3.4 Variables

For content that includes dynamic values:

```json
{
  "components.argumentCard": {
    "proponents": "Proponents: {names}",
    "date": "Date: {date}",
    "location": "Location: {location}"
  }
}
```

---

## 4. Special Cases

### 4.1 Button Labels

Buttons should be concise and action-oriented:

```json
{
  "buttons": {
    "submit": "Submit",
    "cancel": "Cancel",
    "close": "Close",
    "save": "Save",
    "delete": "Delete",
    "continue": "Continue",
    "back": "Back",
    "next": "Next"
  }
}
```

### 4.2 Section Headers

Headers should be descriptive and clear:

```json
{
  "sections": {
    "objectionsAndResponses": "Objections & Responses",
    "historicalContext": "Historical Context",
    "theologicalSignificance": "Theological Significance",
    "keyProponents": "Key Proponents"
  }
}
```

### 4.3 Placeholders

Form placeholders should indicate expected input:

```json
{
  "placeholders": {
    "search": "Search for arguments, sources, doctrines...",
    "name": "Enter name",
    "email": "Enter email address",
    "message": "Enter your message"
  }
}
```

### 4.4 Tooltips

Tooltips should be concise and helpful:

```json
{
  "tooltips": {
    "viewFull": "View the complete argument with all details",
    "expand": "Expand to show more content",
    "compress": "Compress to show less content"
  }
}
```

---

## 5. Examples by Feature

### 5.1 Home Page

```json
{
  "home": {
    "hero": {
      "title": "The Definitive Christian Theology Study Platform",
      "subtitle": "Explore 2,000 years of apologetics, doctrine, and primary sources — with interactive tools for deep study.",
      "search": "What question are you exploring?"
    },
    "quickFilters": {
      "scientific": "Scientific",
      "philosophical": "Philosophical",
      "historical": "Historical",
      "theological": "Theological"
    }
  }
}
```

### 5.2 Argument Card

```json
{
  "components.argumentCard": {
    "title": "Argument",
    "readMore": "Read more",
    "objections": "Objections",
    "responses": "Responses",
    "viewFull": "View full argument",
    "proponents": "Proponents",
    "historicalContext": "Historical Context"
  }
}
```

### 5.3 Manuscript Detail

```json
{
  "components.manuscriptDetail": {
    "title": "Manuscript",
    "metadata": {
      "date": "Date",
      "location": "Location",
      "significance": "Significance"
    },
    "description": "Description",
    "viewTranscription": "View transcription",
    "download": "Download"
  }
}
```

### 5.4 Search Results

```json
{
  "search": {
    "title": "Search Results",
    "resultsCount": "{count} results found",
    "noResults": "No results found",
    "searchPlaceholder": "Search arguments, sources, doctrines...",
    "filters": {
      "category": "Category",
      "dateRange": "Date Range",
      "type": "Type"
    }
  }
}
```

---

## 6. Validation Rules

### 6.1 Required Fields

Every translation key must include:
- **Key name**: Valid lowercase with underscores
- **Value**: Non-empty string
- **Context**: Appropriate for the usage

### 6.2 Naming Constraints

- No spaces in key names: ✅ `common.button.close` ❌ `common button close`
- No special characters: ✅ `data.arguments.cosmological.firstCause.name` ❌ `data.arguments.cosmological.first cause.name`
- Consistent separators: ✅ `components.argumentCard.title` ❌ `components.argumentcard/title`
- No nested periods: ✅ `data.arguments.cosmological.firstCause.name` ❌ `data.arguments.cosmological.firstCause.name.other`

### 6.3 Type Checking

- Strings for all text values
- Numbers for counts, dates
- Booleans for status flags
- Arrays for lists

---

## 7. Key Naming Workflow

### 7.1 When Creating a New Key

1. **Identify the category**: Is this global (`common`) or feature-specific?
2. **Identify the location**: Which component or page?
3. **Follow the pattern**:
   - Global: `common.[component].[key]`
   - Component: `components.[componentName].[key]`
   - Page: `[pageName].[key]`
   - Data: `data.[category].[id].[property]`

4. **Use existing patterns**: Check existing keys in the same category

5. **Add to en.json**: Include the key with English value first

6. **Copy to other locales**: Propagate to all 26 locales

### 7.2 Key Review Checklist

- [ ] Follows naming convention
- [ ] Uses consistent formatting
- [ ] Clear and descriptive name
- [ ] Appropriate category
- [ ] Complete English value
- [ ] Translated in all locales
- [ ] No hardcoded text in code

---

## 8. Common Mistakes to Avoid

❌ **Mistake 1**: Using different separators
```json
// Wrong
"data.arguments.cosmological.firstCause.name"

// Right
"data.arguments.cosmological.firstCause.name"
```

❌ **Mistake 2**: Using inconsistent casing
```json
// Wrong
"common.Button.Close"

// Right
"common.button.close"
```

❌ **Mistake 3**: Using spaces in keys
```json
// Wrong
"data arguments cosmological first cause name"

// Right
"data.arguments.cosmological.firstCause.name"
```

❌ **Mistake 4**: Adding redundant prefixes
```json
// Wrong
"data_arguments_cosmological_first_cause_name"

// Right
"data.arguments.cosmological.firstCause.name"
```

❌ **Mistake 5**: Omitting common translations
```json
// Wrong
Only adding specific translations, missing common ones

// Right
Include common keys (common.button.close, common.readMore, etc.)
```

---

## 9. Tools & Automation

### 9.1 Key Generation

```typescript
// Automatic key generation from code
import { extractTranslationKeys } from './i18n-tools';

const keys = extractTranslationKeys(`
  <div>
    <h1>{argument.name}</h1>
    <p>{argument.description}</p>
  </div>
`);

console.log(keys);
// [
//   { key: 'components.argumentCard.title', value: argument.name },
//   { key: 'components.argumentCard.description', value: argument.description }
// ]
```

### 9.2 Key Validation

```typescript
// Validate key naming
import { validateKeyName } from './i18n-tools';

validateKeyName('common.button.close'); // ✅ Valid
validateKeyName('Common.Button.Close'); // ❌ Invalid (wrong case)
validateKeyName('common button close'); // ❌ Invalid (spaces)
```

---

**Document Version**: 1.0
**Last Updated**: 2026-03-28
**Maintainer**: i18n Team
