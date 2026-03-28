import { SemanticDefense } from './types';

// Importing the tutorial we already built
import { semanticTutorial } from './tutorial';

// To keep the file manageable, we define the 10 core semantic deep dives here
export const semanticDefenses: SemanticDefense[] = [
  semanticTutorial, // 1. The Tutorial
  {
    id: 'sd-john1-1',
    argumentId: 'deity-of-christ',
    title: 'The Deity of Christ in John 1:1',
    objectionTarget: 'NWT Translation ("a god")',
    description: 'A grammatical and structural analysis of why "and the Word was God" is the only valid translation of the final clause of John 1:1.',
    baselineVerse: {
      id: 'j1-1', reference: 'John 1:1', textDirection: 'ltr',
      words: [
        { id: 'w13', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
        { id: 'w14', original: 'θεὸς', transliteration: 'theos', english: 'God', strongs: 'G2316', morphology: 'N-NMS' },
        { id: 'w15', original: 'ἦν', transliteration: 'ēn', english: 'was', strongs: 'G2258', morphology: 'V-IAI-3S' },
        { id: 'w16', original: 'ὁ', transliteration: 'ho', english: 'the', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 'w17', original: 'λόγος.', transliteration: 'logos.', english: 'Word.', strongs: 'G3056', morphology: 'N-NMS' }
      ]
    },
    steps: [
      { id: 's1', title: 'Colwell\'s Rule', content: 'E.C. Colwell established that a definite predicate nominative preceding the verb typically lacks the article. **θεὸς** is the predicate nominative, placed *before* the verb **ἦν**.', focusWordIds: ['w14', 'w15'] },
      { id: 's2', title: 'Qualitative Force', content: 'Placing the noun **θεὸς** first highlights its *qualitative* force. It emphasizes that the Word possessed the exact nature of God. "What God was, the Word was."', focusWordIds: ['w14'] },
      { id: 's3', title: 'Subject vs Predicate', content: 'Because **λόγος** has the definite article (**ὁ**) and **θεὸς** does not, **ὁ λόγος** is the grammatical subject.', focusWordIds: ['w16', 'w17'] }
    ]
  },
  {
    id: 'sd-titus-2-13',
    argumentId: 'deity-of-christ',
    title: 'Granville Sharp\'s Rule (Titus 2:13)',
    objectionTarget: 'Unitarian Distinctions',
    description: 'Applying Granville Sharp\'s rule to prove that "God and Savior" refers to the single person of Jesus Christ.',
    baselineVerse: {
      id: 't2-13', reference: 'Titus 2:13', textDirection: 'ltr',
      words: [
        { id: 'tw1', original: 'τοῦ', transliteration: 'tou', english: 'the', strongs: 'G3588', morphology: 'Art-GMS' },
        { id: 'tw2', original: 'μεγάλου', transliteration: 'megalou', english: 'great', strongs: 'G3173', morphology: 'Adj-GMS' },
        { id: 'tw3', original: 'θεοῦ', transliteration: 'theou', english: 'God', strongs: 'G2316', morphology: 'N-GMS' },
        { id: 'tw4', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
        { id: 'tw5', original: 'σωτῆρος', transliteration: 'sōtēros', english: 'Savior', strongs: 'G4990', morphology: 'N-GMS' },
        { id: 'tw6', original: 'ἡμῶν', transliteration: 'hēmōn', english: 'of us', strongs: 'G1473', morphology: 'Pro-1GP' },
        { id: 'tw7', original: 'Ἰησοῦ', transliteration: 'Iēsou', english: 'Jesus', strongs: 'G2424', morphology: 'N-GMS' },
        { id: 'tw8', original: 'Χριστοῦ', transliteration: 'Christou', english: 'Christ', strongs: 'G5547', morphology: 'N-GMS' }
      ]
    },
    steps: [
      { id: 'ts1', title: 'The TSKS Structure', content: 'Granville Sharp noted a rule: when the copula **καὶ** (and) connects two nouns of the same case, and the article (**τοῦ**) precedes the first noun (**θεοῦ**) but NOT the second noun (**σωτῆρος**), both nouns refer to the *same person*.', focusWordIds: ['tw1', 'tw3', 'tw4', 'tw5'] },
      { id: 'ts2', title: 'One Person', content: 'Therefore, Paul is not talking about two persons ("the great God" AND "the Savior Jesus"). Grammatically, he is describing one person who is both the Great God AND the Savior: Jesus Christ.', focusWordIds: ['tw3', 'tw5', 'tw7', 'tw8'] }
    ]
  },
  {
    id: 'sd-john-8-58',
    argumentId: 'deity-of-christ',
    title: 'The Eternal "I AM" (John 8:58)',
    objectionTarget: 'Arianism / Created Status',
    description: 'Analyzing Jesus declaring "Before Abraham was, I AM" against Exodus 3:14.',
    baselineVerse: {
      id: 'j8-58', reference: 'John 8:58', textDirection: 'ltr',
      words: [
        { id: 'jw3', original: 'γενέσθαι', transliteration: 'genesthai', english: 'was born', strongs: 'G1096', morphology: 'V-ANM' },
        { id: 'jw4', original: 'ἐγὼ', transliteration: 'egō', english: 'I', strongs: 'G1473', morphology: 'Pro-1NS' },
        { id: 'jw5', original: 'εἰμί.', transliteration: 'eimi.', english: 'AM.', strongs: 'G1510', morphology: 'V-PAI-1S' }
      ]
    },
    steps: [
      { id: 'js1', title: 'Created vs Timeless Existence', content: 'For Abraham, Jesus uses **γενέσθαι** (to come into being/be created). For Himself, He uses **εἰμί** (absolute, timeless existence).', focusWordIds: ['jw3', 'jw5'] },
      { id: 'js2', title: 'The Divine Name', content: '**ἐγὼ εἰμί** is exactly how the Septuagint translates God\'s divine name in Exodus 3:14. The Jews immediately sought to stone Him for blasphemy.', focusWordIds: ['jw4', 'jw5'] }
    ]
  },
  {
    id: 'sd-col-2-9',
    argumentId: 'deity-of-christ',
    title: 'The Fullness of Deity (Col 2:9)',
    objectionTarget: 'Gnosticism / Partial Divinity',
    description: 'Analyzing the specific word Paul uses to describe Christ possessing the actual essence of God.',
    baselineVerse: {
      id: 'c2-9', reference: 'Colossians 2:9', textDirection: 'ltr',
      words: [
        { id: 'c1', original: 'ὅτι', transliteration: 'hoti', english: 'For', strongs: 'G3754', morphology: 'Conj' },
        { id: 'c2', original: 'ἐν', transliteration: 'en', english: 'in', strongs: 'G1722', morphology: 'Prep' },
        { id: 'c3', original: 'αὐτῷ', transliteration: 'autō', english: 'Him', strongs: 'G846', morphology: 'Pro-DMS' },
        { id: 'c4', original: 'κατοικεῖ', transliteration: 'katoikei', english: 'dwells', strongs: 'G2730', morphology: 'V-PAI-3S' },
        { id: 'c5', original: 'πᾶν', transliteration: 'pan', english: 'all', strongs: 'G3956', morphology: 'Adj-NNS' },
        { id: 'c6', original: 'τὸ', transliteration: 'to', english: 'the', strongs: 'G3588', morphology: 'Art-NNS' },
        { id: 'c7', original: 'πλήρωμα', transliteration: 'plērōma', english: 'fullness', strongs: 'G4138', morphology: 'N-NNS' },
        { id: 'c8', original: 'τῆς', transliteration: 'tēs', english: 'of the', strongs: 'G3588', morphology: 'Art-GFS' },
        { id: 'c9', original: 'θεότητος', transliteration: 'theotētos', english: 'Deity', strongs: 'G2320', morphology: 'N-GFS' },
        { id: 'c10', original: 'σωματικῶς', transliteration: 'sōmatikōs', english: 'bodily', strongs: 'G4985', morphology: 'Adv' }
      ]
    },
    steps: [
      { id: 'cs1', title: 'Theotēs vs Theiotēs', content: 'Paul uses the word **θεότητος** (theotēs). This specifically refers to the *essence* and actual *nature* of God. If he had used *theiotēs*, it would simply mean divine quality or character. Christ possesses the actual, infinite essence of God.', focusWordIds: ['c9'] },
      { id: 'cs2', title: 'Bodily Dwelling', content: 'This divine essence dwells (**κατοικεῖ** - present active, denoting permanent settling) in Him **σωματικῶς** (bodily) - smashing the Gnostic heresy that spirit is good and physical matter is evil.', focusWordIds: ['c4', 'c10'] }
    ]
  },
  {
    id: 'sd-phil-2-6',
    argumentId: 'deity-of-christ',
    title: 'The Form of God (Phil 2:6)',
    objectionTarget: 'Arianism',
    description: 'Differentiating between morphē (essence) and schēma (outward appearance).',
    baselineVerse: {
      id: 'p2-6', reference: 'Philippians 2:6', textDirection: 'ltr',
      words: [
        { id: 'p1', original: 'ὃς', transliteration: 'hos', english: 'who', strongs: 'G3739', morphology: 'RelPro-NMS' },
        { id: 'p2', original: 'ἐν', transliteration: 'en', english: 'in', strongs: 'G1722', morphology: 'Prep' },
        { id: 'p3', original: 'μορφῇ', transliteration: 'morphē', english: '(the) form', strongs: 'G3444', morphology: 'N-DFS' },
        { id: 'p4', original: 'θεοῦ', transliteration: 'theou', english: 'of God', strongs: 'G2316', morphology: 'N-GMS' },
        { id: 'p5', original: 'ὑπάρχων', transliteration: 'hyparchōn', english: 'existing', strongs: 'G5225', morphology: 'V-PAP-NMS' }
      ]
    },
    steps: [
      { id: 'ps1', title: 'Morphē', content: '**μορφῇ** (morphē) refers not to outward appearance, but to the essential, inherent nature of a thing. By existing in the *morphē* of God, Christ possessed the very nature of God.', focusWordIds: ['p3', 'p4'] },
      { id: 'ps2', title: 'Continuous Existence', content: '**ὑπάρχων** is a present active participle, indicating that Christ possessed this form of God continually and originally — it was His eternal state before the incarnation.', focusWordIds: ['p5'] }
    ]
  },
  {
    id: 'sd-rom-9-5',
    argumentId: 'deity-of-christ',
    title: 'God over All (Rom 9:5)',
    objectionTarget: 'Unitarian Punctuation Arguments',
    description: 'Examining semantic doxology structure to prove Christ is directly called "God over all".',
    baselineVerse: {
      id: 'r9-5', reference: 'Romans 9:5', textDirection: 'ltr',
      words: [
        { id: 'r1', original: 'ἐξ', transliteration: 'ex', english: 'from', strongs: 'G1537', morphology: 'Prep' },
        { id: 'r2', original: 'ὧν', transliteration: 'hōn', english: 'whom', strongs: 'G3739', morphology: 'RelPro-GPM' },
        { id: 'r3', original: 'ὁ', transliteration: 'ho', english: 'the', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 'r4', original: 'Χριστὸς', transliteration: 'Christos', english: 'Christ', strongs: 'G5547', morphology: 'N-NMS' },
        { id: 'r5', original: 'τὸ', transliteration: 'to', english: 'according to', strongs: 'G3588', morphology: 'Art-ANS' },
        { id: 'r6', original: 'κατὰ', transliteration: 'kata', english: '[the]', strongs: 'G2596', morphology: 'Prep' },
        { id: 'r7', original: 'σάρκα,', transliteration: 'sarka,', english: 'flesh,', strongs: 'G4561', morphology: 'N-AFS' },
        { id: 'r8', original: 'ὁ', transliteration: 'ho', english: 'He who(is)', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 'r9', original: 'ὢν', transliteration: 'ōn', english: 'over', strongs: 'G5607', morphology: 'V-PAP-NMS' },
        { id: 'r10', original: 'ἐπὶ', transliteration: 'epi', english: 'all,', strongs: 'G1909', morphology: 'Prep' },
        { id: 'r11', original: 'πάντων', transliteration: 'pantōn', english: 'God', strongs: 'G3956', morphology: 'Adj-GMN' },
        { id: 'r12', original: 'θεὸς', transliteration: 'theos', english: 'blessed', strongs: 'G2316', morphology: 'N-NMS' }
      ]
    },
    steps: [
      { id: 'rp1', title: 'The Doxology Subject', content: 'Cults try to insert a full stop after flesh, making "God who is over all be blessed" a separate sentence about the Father. However, the participle **ὁ ὢν** (who is) naturally connects back to the subject just mentioned in the Greek syntax: Christ.', focusWordIds: ['r4', 'r8', 'r9'] },
      { id: 'rp2', title: 'The Climax', content: 'Paul is making a contrast. According to the flesh (human nature), Christ comes from Israel. But according to His divine nature, He is **θεὸς** (God) over all.', focusWordIds: ['r7', 'r11', 'r12'] }
    ]
  },
  {
    id: 'sd-john-19-30',
    argumentId: 'atonement',
    title: 'Tetelestai (John 19:30)',
    objectionTarget: 'Works-Based Salvation',
    description: 'Analyzing the Perfect tense to show that Christ\'s atoning work is finished with eternal, ongoing results.',
    baselineVerse: {
      id: 'j19-30', reference: 'John 19:30', textDirection: 'ltr',
      words: [
        { id: 't1', original: 'Τετέλεσται', transliteration: 'Tetelestai', english: 'It is finished', strongs: 'G5055', morphology: 'V-RPI-3S' }
      ]
    },
    steps: [
      { id: 'tp1', title: 'The Perfect Tense', content: 'The verb **Τετέλεσται** is parsed as a Verb, Perfect, Passive, Indicative, 3rd Person Singular. The Perfect tense in Greek is incredibly powerful: it describes an action fully completed in the past that has *continuous, ongoing results* in the present.', focusWordIds: ['t1'] },
      { id: 'tp2', title: 'Financial Debt Paid', content: 'This exact word was stamped on ancient tax receipts meaning "Paid in Full." Because it is in the passive voice, the debt was paid by someone else (Christ). Because it is perfect tense, the debt will *never* need to be paid again.', focusWordIds: ['t1'] }
    ]
  },
  {
    id: 'sd-col-1-15b',
    argumentId: 'deity-of-christ',
    title: 'Protótokos (Col 1:15)',
    objectionTarget: 'Jehovah\'s Witnesses',
    description: 'A deep dive into why Firstborn means supremacy, not chronological creation.',
    baselineVerse: {
      id: 'c1-15b', reference: 'Colossians 1:15', textDirection: 'ltr',
      words: [
        { id: 'cw8', original: 'πρωτότοκος', transliteration: 'prōtotokos', english: 'firstborn', strongs: 'G4416', morphology: 'Adj-NMS' },
        { id: 'cw9', original: 'πάσης', transliteration: 'pasēs', english: 'of all', strongs: 'G3956', morphology: 'Adj-GFS' },
        { id: 'cw10', original: 'κτίσεως,', transliteration: 'ktiseōs,', english: 'creation,', strongs: 'G2937', morphology: 'N-GFS' }
      ]
    },
    steps: [
      { id: 'cs21', title: 'Firstborn vs First-Created', content: 'If Paul wanted to say Jesus was the first created creature, the Greek word **πρωτόκτιστος** (*prōtoktistos*) existed. But he used **πρωτότοκος**, which refers to rank, sovereignty, and the preeminent heir over all creation.', focusWordIds: ['cw8', 'cw10'] }
    ]
  },
  {
    id: 'sd-heb-1-3',
    argumentId: 'deity-of-christ',
    title: 'The Exact Imprint (Heb 1:3)',
    objectionTarget: 'Arianism',
    description: 'Analyzing the Greek word charaktēr for substance and nature.',
    baselineVerse: {
      id: 'h1-3', reference: 'Hebrews 1:3', textDirection: 'ltr',
      words: [
        { id: 'h1', original: 'χαρακτὴρ', transliteration: 'charaktēr', english: '(the) exact imprint', strongs: 'G5481', morphology: 'N-NMS' },
        { id: 'h2', original: 'τῆς', transliteration: 'tēs', english: 'of the', strongs: 'G3588', morphology: 'Art-GFS' },
        { id: 'h3', original: 'ὑποστάσεως', transliteration: 'hypostaseōs', english: 'nature [substance]', strongs: 'G5287', morphology: 'N-GFS' },
        { id: 'h4', original: 'αὐτοῦ', transliteration: 'autou', english: 'of Him', strongs: 'G846', morphology: 'Pro-GMS' }
      ]
    },
    steps: [
      { id: 'hs1', title: 'Charaktēr', content: '**χαρακτὴρ** originally referred to the exact impression made by a die on a coin. Christ is the precise reproduction in every respect of the underlying substance of the Father.', focusWordIds: ['h1'] },
      { id: 'hs2', title: 'Hypostasis', content: '**ὑποστάσεως** means the underlying reality, substance, or being. Christ is not merely a reflection of God; He is the exact imprint of God\'s very essence and substance.', focusWordIds: ['h3'] }
    ]
  },
  {
    id: 'sd-1-john-5-20',
    argumentId: 'deity-of-christ',
    title: 'The True God (1 John 5:20)',
    objectionTarget: 'Unitarianism',
    description: 'Analyzing the antecedent of "houtos" to determine who is "the true God".',
    baselineVerse: {
      id: '1j5-20', reference: '1 John 5:20', textDirection: 'ltr',
      words: [
        { id: 'o1', original: 'ἐν', transliteration: 'en', english: 'in', strongs: 'G1722', morphology: 'Prep' },
        { id: 'o2', original: 'τῷ', transliteration: 'tō', english: 'the', strongs: 'G3588', morphology: 'Art-DMS' },
        { id: 'o3', original: 'υἱῷ', transliteration: 'huiō', english: 'Son', strongs: 'G5207', morphology: 'N-DMS' },
        { id: 'o4', original: 'αὐτοῦ', transliteration: 'autou', english: 'of Him', strongs: 'G846', morphology: 'Pro-GMS' },
        { id: 'o5', original: 'Ἰησοῦ', transliteration: 'Iēsou', english: 'Jesus', strongs: 'G2424', morphology: 'N-DMS' },
        { id: 'o6', original: 'Χριστῷ.', transliteration: 'Christō.', english: 'Christ.', strongs: 'G5547', morphology: 'N-DMS' },
        { id: 'o7', original: 'οὗτός', transliteration: 'houtos', english: 'This (one)', strongs: 'G3778', morphology: 'DemPro-NMS' },
        { id: 'o8', original: 'ἐστιν', transliteration: 'estin', english: 'is', strongs: 'G1510', morphology: 'V-PAI-3S' },
        { id: 'o9', original: 'ὁ', transliteration: 'ho', english: 'the', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 'o10', original: 'ἀληθινὸς', transliteration: 'alēthinos', english: 'true', strongs: 'G228', morphology: 'Adj-NMS' },
        { id: 'o11', original: 'θεὸς', transliteration: 'theos', english: 'God', strongs: 'G2316', morphology: 'N-NMS' }
      ]
    },
    steps: [
      { id: 'os1', title: 'The Demonstrative Pronoun', content: '**οὗτός** (houtos - "this one") is a demonstrative pronoun. A standard rule of Greek syntax is that a pronoun typically refers back to its closest logical antecedent. The nearest antecedent in the sentence is undeniably **Ἰησοῦ Χριστῷ** (Jesus Christ).', focusWordIds: ['o5', 'o6', 'o7'] },
      { id: 'os2', title: 'The Climax of the Epistle', content: 'John therefore forcefully concludes his epistle by declaring that Jesus Christ is "the true God" (**ὁ ἀληθινὸς θεὸς**).', focusWordIds: ['o10', 'o11'] }
    ]
  }
];
