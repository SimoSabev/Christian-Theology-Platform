# A10 — Semantics / Greek-Hebrew Tools

**Priority:** P2 (High)
**Affects:** `src/app/[locale]/semantics/`, `src/components/semantic/`, `src/data/semantic-defense/`

---

## Problem

Word study entries likely lack semantic range, cognate forms, LXX usage, and patristic usage. No morphological parsing display. No "this word across all translations" view. No audio pronunciation. Parallel comparison limited to 2-3 versions.

---

## Tasks

### 1. Expand Word Entry Data

**Files to modify:** `src/data/semantic-defense/arguments.ts`, `src/data/semantic-defense/arguments-nt-advanced.ts`, `src/data/semantic-defense/arguments-ot-nt.ts`

**Extend word entry type** (check `src/data/semantic-defense/types.ts` first):
```ts
interface SemanticWordEntry {
  id: string
  word: string              // Greek or Hebrew word
  transliteration: string
  language: 'greek' | 'hebrew' | 'aramaic'
  strongs: string           // e.g. "G26"
  gloss: string             // brief gloss: "love, divine love"
  semanticRange: string[]   // array of meanings in different contexts
  cognates: string[]        // related word forms
  lxxOccurrences: {         // Septuagint usage
    reference: string
    context: string
  }[]
  ntOccurrenceCount: number
  otOccurrenceCount?: number
  patristicUsage: {         // how church fathers used this word
    father: string
    quote: string
    work: string
  }[]
  morphologicalNote: string  // e.g. "noun, feminine, nominative singular"
  keyVerses: string[]        // most important occurrences
  translationVariants: {     // how English Bibles render it
    translation: string      // ESV, KJV, NIV, NASB, NRSV, OSB
    rendering: string        // how they translate this word
  }[]
  audioUrl?: string          // optional pronunciation audio
}
```

### 2. Morphological Parsing Display

**File to modify:** `src/components/semantic/InterlinearVerse.tsx`

For each Greek word in the interlinear view, add a small colored parsing tag below the transliteration:
```
ἀγαπᾷ
agapai
VERB-PRS-ACT-IND-3S
```

Color code by part of speech:
- VERB: blue (`#4a90d9`)
- NOUN: amber (`#c9a84c`)
- ADJ: green (`#5a9a6e`)
- PREP: muted (`#888`)
- CONJ: muted (`#888`)

Tag format: `{PART}-{TENSE}-{VOICE}-{MOOD}-{PERSON/NUMBER}` for verbs, `{PART}-{CASE}-{NUMBER}-{GENDER}` for nouns.

**New component:** `src/components/semantic/MorphTag.tsx`
```ts
interface MorphTagProps {
  parsing: string   // e.g. "VERB-PRS-ACT-IND-3S"
}
```

### 3. "This Word in All Translations" View

**New component:** `src/components/semantic/TranslationVariantsTable.tsx`

Given a Greek/Hebrew word entry, renders a table:
| Translation | How They Render This Word |
|---|---|
| KJV | charity |
| ESV | love |
| NIV | love |
| NASB | love |
| NRSV | love |
| OSB | love |

**Data source:** `translationVariants` field added in task 1.

**Integrate into:** `src/app/[locale]/semantics/page.tsx` — below the word definition block.

### 4. Audio Pronunciation

**File to modify:** `src/components/semantic/InterlinearVerse.tsx` (or the word study component)

Use the browser's Web Speech API as a fallback:
```ts
function pronounceGreek(word: string) {
  const utterance = new SpeechSynthesisUtterance(word)
  utterance.lang = 'el-GR'  // modern Greek as closest available
  window.speechSynthesis.speak(utterance)
}
```

Add a small speaker icon (🔊) next to each Greek/Hebrew word. On click, call `pronounceGreek`. Disable gracefully if `window.speechSynthesis` is unavailable.

If `audioUrl` is present on the word entry, play that file instead (pre-recorded Koine Greek pronunciations are preferred).

### 5. Expand Parallel Verse Comparison

**File to modify:** `src/components/semantic/ParallelVerseComparison.tsx`

Expand from 2-3 translations to 6:
- KJV (public domain)
- ESV (API available)
- NIV (requires license — use placeholder text if unlicensed)
- NASB
- NRSV
- Orthodox Study Bible (OSB)

**Data approach:** Store key verse texts in `src/data/semantic-defense/` data files directly (eliminates API dependency for commonly studied verses). For a full Bible API, note this as a future enhancement.

---

## Acceptance Criteria

- [ ] 20+ word entries have `semanticRange`, `cognates`, `lxxOccurrences`, `patristicUsage` populated
- [ ] Interlinear view shows morphological parsing tags color-coded by part of speech
- [ ] `TranslationVariantsTable` renders for each word study with 6 translations
- [ ] Speaker icon present on Greek/Hebrew words; Web Speech API called on click
- [ ] Parallel verse comparison shows 6 translations
- [ ] Key words for cults (e.g. `theos` in John 1:1 for JW refutation) are fully expanded
