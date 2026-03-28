import { SemanticDefense } from './types';

export const semanticTutorial: SemanticDefense = {
  id: 'sd-tutorial',
  argumentId: 'tutorial',
  title: 'How to Read a Semantic Defense',
  objectionTarget: 'Interactive Koine Greek Tutorial',
  description: 'A 2-minute introductory guide on how to read the original Biblical languages using our interlinear tool, understand Strong\'s numbers, and recognize basic Greek grammatical rules like Colwell\'s Rule before exploring cult refutations.',
  baselineVerse: {
    id: 'tut-j1-1',
    reference: 'John 1:1 (Sample Verse)',
    textDirection: 'ltr',
    words: [
      { id: 'w1', original: 'Ἐν', transliteration: 'En', english: 'In', strongs: 'G1722', morphology: 'Prep' },
      { id: 'w2', original: 'ἀρχῇ', transliteration: 'archē', english: '(the) beginning', strongs: 'G746', morphology: 'N-DSF' },
      { id: 'w3', original: 'ἦν', transliteration: 'ēn', english: 'was', strongs: 'G2258', morphology: 'V-IAI-3S' },
      { id: 'w4', original: 'ὁ', transliteration: 'ho', english: 'the', strongs: 'G3588', morphology: 'Art-NMS' },
      { id: 'w5', original: 'λόγος,', transliteration: 'logos,', english: 'Word,', strongs: 'G3056', morphology: 'N-NMS' },
      { id: 'w6', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
      { id: 'w7', original: 'ὁ', transliteration: 'ho', english: 'the', strongs: 'G3588', morphology: 'Art-NMS' },
      { id: 'w8', original: 'λόγος', transliteration: 'logos', english: 'Word', strongs: 'G3056', morphology: 'N-NMS' },
      { id: 'w9', original: 'ἦν', transliteration: 'ēn', english: 'was', strongs: 'G2258', morphology: 'V-IAI-3S' },
      { id: 'w10', original: 'πρὸς', transliteration: 'pros', english: 'with', strongs: 'G4314', morphology: 'Prep' },
      { id: 'w11', original: 'τὸν', transliteration: 'ton', english: 'the', strongs: 'G3588', morphology: 'Art-AMS' },
      { id: 'w12', original: 'θεόν,', transliteration: 'theon,', english: 'God,', strongs: 'G2316', morphology: 'N-AMS' }
    ]
  },
  steps: [
    {
      id: 'ts1',
      title: 'The Interlinear Layout',
      content: 'Welcome to the Semantic Defense tool! We use an **interlinear** layout (like Blue Letter Bible) to help you study the original texts. The top block is the original **Koine Greek** text, used by exactly the Apostles and early Church.\n\nBeneath it is the *transliteration* — how the word sounds phonetically in English. Finally, the gold text at the bottom is the literal **English Translation** of that specific word.',
      focusWordIds: ['w1', 'w2']
    },
    {
      id: 'ts2',
      title: 'Strong\'s Numbers & Morphology',
      content: 'Notice the two small tags at the very bottom of each word column. \n\nThe first tag (e.g., **G3056**) is the **Strong\'s Number**. This acts like a universal dictionary index. Every unique Greek or Hebrew root word in the Bible has a unique number. You can use this to look up exact definitions dictionary regardless of how the word is translated into English.\n\nThe second tag (e.g., **N-NMS**) is the **Morphology**. This tells you the part of speech (Noun, Nominative, Masculine, Singular). Morphology is incredibly important for refuting heretical translations that ignore contextual grammar.',
      focusWordIds: ['w5', 'w8']
    },
    {
      id: 'ts3',
      title: 'Articles and Word Order',
      content: 'In Koine Greek, there is a **definite article** ("the", highlighted here as **ὁ**), but there is NO *indefinite article* (like "a" or "an"). \n\nCults often mistranslate passages by claiming that if a definite article is missing before a noun, it must mean "a [noun]" (e.g., translating "God" as "a god"). However, missing an article actually usually highlights the *quality* or *character* of the noun rather than its definiteness. Understanding these basic rules will help you navigate the deeper semantic defenses.',
      focusWordIds: ['w4', 'w7', 'w11']
    }
  ]
};
