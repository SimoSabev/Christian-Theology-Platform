import { SemanticDefense } from './types';

export const advancedNtArguments: SemanticDefense[] = [
  {
    id: 'sd-nt-word-tabernacled',
    argumentId: 'deity-of-christ',
    title: 'The Word Tabernacled (John 1:14)',
    objectionTarget: 'Docetism / Arianism',
    description: 'A deep look into John\'s use of "eskēnōsen" to link Jesus to the Old Testament dwelling of Yahweh\'s glory.',
    baselineVerse: {
      id: 'j1-14', reference: 'John 1:14', textDirection: 'ltr',
      words: [
        { id: 't1', original: 'Καὶ', transliteration: 'Kai', english: 'And', strongs: 'G2532', morphology: 'Conj' },
        { id: 't2', original: 'ὁ', transliteration: 'ho', english: 'the', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 't3', original: 'λόγος', transliteration: 'logos', english: 'Word', strongs: 'G3056', morphology: 'N-NMS' },
        { id: 't4', original: 'σὰρξ', transliteration: 'sarx', english: 'flesh', strongs: 'G4561', morphology: 'N-NFS' },
        { id: 't5', original: 'ἐγένετο', transliteration: 'egeneto', english: 'became', strongs: 'G1096', morphology: 'V-AMI-3S' },
        { id: 't6', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
        { id: 't7', original: 'ἐσκήνωσεν', transliteration: 'eskēnōsen', english: 'tabernacled', strongs: 'G4637', morphology: 'V-AAI-3S' },
        { id: 't8', original: 'ἐν', transliteration: 'en', english: 'among', strongs: 'G1722', morphology: 'Prep' },
        { id: 't9', original: 'ἡμῖν,', transliteration: 'hēmin,', english: 'us,', strongs: 'G1473', morphology: 'Pro-1DP' },
        { id: 't10', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
        { id: 't11', original: 'ἐθεασάμεθα', transliteration: 'etheasametha', english: 'we beheld', strongs: 'G2300', morphology: 'V-AMI-1P' },
        { id: 't12', original: 'τὴν', transliteration: 'tēn', english: 'the', strongs: 'G3588', morphology: 'Art-AFS' },
        { id: 't13', original: 'δόξαν', transliteration: 'doxan', english: 'glory', strongs: 'G1391', morphology: 'N-AFS' },
        { id: 't14', original: 'αὐτοῦ,', transliteration: 'autou,', english: 'of Him,', strongs: 'G846', morphology: 'Pro-GMS' }
      ]
    },
    steps: [
      { id: 'tb1', title: 'The Tent of Meeting', content: 'The word **ἐσκήνωσεν** literally means "He pitched His tent." This is an unmistakable linguistic reference to the Old Testament Tabernacle, where the *Shekinah* glory (the visible presence of Yahweh) dwelled among the Israelites.', focusWordIds: ['t7', 't8', 't9'] },
      { id: 'tb2', title: 'Beholding the Glory', content: 'John explicitly pairs "tabernacling" with beholding His "glory" (**δόξαν**). Jesus is the ultimate fulfillment of the Tabernacle—the physical dwelling place of the true and living God on earth.', focusWordIds: ['t11', 't12', 't13'] }
    ]
  },
  {
    id: 'sd-nt-monogenes-theos',
    argumentId: 'deity-of-christ',
    title: 'The Only Begotten God (John 1:18)',
    objectionTarget: 'Arianism',
    description: 'Analyzing the profound textual variant and grammatical structure of monogenēs.',
    baselineVerse: {
      id: 'j1-18', reference: 'John 1:18', textDirection: 'ltr',
      words: [
        { id: 'm1', original: 'Θεὸν', transliteration: 'Theon', english: 'God', strongs: 'G2316', morphology: 'N-AMS' },
        { id: 'm2', original: 'οὐδεὶς', transliteration: 'oudeis', english: 'no one', strongs: 'G3762', morphology: 'Pron-NMS' },
        { id: 'm3', original: 'ἑώρακεν', transliteration: 'heōraken', english: 'has seen', strongs: 'G3708', morphology: 'V-RAI-3S' },
        { id: 'm4', original: 'πώποτε·', transliteration: 'pōpote;', english: 'ever;', strongs: 'G4455', morphology: 'Adv' },
        { id: 'm5', original: 'μονογενὴς', transliteration: 'monogenēs', english: 'the unique [only begotten]', strongs: 'G3439', morphology: 'Adj-NMS' },
        { id: 'm6', original: 'θεὸς', transliteration: 'theos', english: 'God', strongs: 'G2316', morphology: 'N-NMS' },
        { id: 'm7', original: 'ὁ', transliteration: 'ho', english: 'the (one)', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 'm8', original: 'ὢν', transliteration: 'ōn', english: 'being', strongs: 'G5607', morphology: 'V-PAP-NMS' },
        { id: 'm9', original: 'εἰς', transliteration: 'eis', english: 'into', strongs: 'G1519', morphology: 'Prep' },
        { id: 'm10', original: 'τὸν', transliteration: 'ton', english: 'the', strongs: 'G3588', morphology: 'Art-AMS' },
        { id: 'm11', original: 'κόλπον', transliteration: 'kolpon', english: 'bosom', strongs: 'G2859', morphology: 'N-AMS' },
        { id: 'm12', original: 'τοῦ', transliteration: 'tou', english: 'of the', strongs: 'G3588', morphology: 'Art-GMS' },
        { id: 'm13', original: 'πατρός,', transliteration: 'patros,', english: 'Father,', strongs: 'G3962', morphology: 'N-GMS' },
        { id: 'm14', original: 'ἐκεῖνος', transliteration: 'ekeinos', english: 'He', strongs: 'G1565', morphology: 'DemPro-NMS' },
        { id: 'm15', original: 'ἐξηγήσατο.', transliteration: 'exēgēsato.', english: 'has made (Him) known.', strongs: 'G1834', morphology: 'V-AMI-3S' }
      ]
    },
    steps: [
      { id: 'mg1', title: 'Monogenēs Textual Variant', content: 'While later manuscripts read "only begotten Son," the earliest and most reliable manuscripts (Papyrus 66, P75, Codex Sinaiticus, Vaticanus) unequivocally read **μονογενὴς θεὸς** ("the unique/only-begotten God"). John blatantly calls Jesus "God" for the second time in his prologue.', focusWordIds: ['m5', 'm6'] },
      { id: 'mg2', title: 'Meaning of Monogenēs', content: 'Cults translate *monogenēs* as "first-created." However, the word is a compound of *monos* (only/unique) and *genos* (class/kind). It does not mean "created," it means "the only one of His kind." He is the completely unique God the Son.', focusWordIds: ['m5'] },
      { id: 'mg3', title: 'Intimate Fellowship', content: 'The phrase **ὁ ὢν εἰς τὸν κόλπον** ("the one being in the bosom") denotes the eternal, intimate communion between the Father and the Son prior to creation.', focusWordIds: ['m7', 'm8', 'm9', 'm10', 'm11', 'm13'] }
    ]
  },
  {
    id: 'sd-nt-col-1-17',
    argumentId: 'deity-of-christ',
    title: 'Before All Things (Col 1:17)',
    objectionTarget: 'Jehovah\'s Witnesses',
    description: 'A grammatical analysis of Christ existing strictly outside of creation.',
    baselineVerse: {
      id: 'cl1-17', reference: 'Colossians 1:17', textDirection: 'ltr',
      words: [
        { id: 'cl1', original: 'καὶ', transliteration: 'kai', english: 'And', strongs: 'G2532', morphology: 'Conj' },
        { id: 'cl2', original: 'αὐτός', transliteration: 'autos', english: 'He', strongs: 'G846', morphology: 'Pro-NMS' },
        { id: 'cl3', original: 'ἐστιν', transliteration: 'estin', english: 'is', strongs: 'G1510', morphology: 'V-PAI-3S' },
        { id: 'cl4', original: 'πρὸ', transliteration: 'pro', english: 'before', strongs: 'G4253', morphology: 'Prep' },
        { id: 'cl5', original: 'πάντων', transliteration: 'pantōn', english: 'all things,', strongs: 'G3956', morphology: 'Adj-GNP' },
        { id: 'cl6', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
        { id: 'cl7', original: 'τὰ', transliteration: 'ta', english: 'the', strongs: 'G3588', morphology: 'Art-NNP' },
        { id: 'cl8', original: 'πάντα', transliteration: 'panta', english: 'all things', strongs: 'G3956', morphology: 'Adj-NNP' },
        { id: 'cl9', original: 'ἐν', transliteration: 'en', english: 'in', strongs: 'G1722', morphology: 'Prep' },
        { id: 'cl10', original: 'αὐτῷ', transliteration: 'autō', english: 'Him', strongs: 'G846', morphology: 'Pro-DMS' },
        { id: 'cl11', original: 'συνέστηκεν·', transliteration: 'synestēken;', english: 'hold together;', strongs: 'G4921', morphology: 'V-RAI-3S' }
      ]
    },
    steps: [
      { id: 'c1', title: 'Before the "All"', content: 'Paul intentionally uses the present tense verb **ἐστιν** ("He IS") rather than "He was." Even when looking back to the beginning of time before creation, Christ inherently IS outside of time.', focusWordIds: ['cl2', 'cl3', 'cl4', 'cl5'] },
      { id: 'c2', title: 'The Perfect Tense of Sustenance', content: 'The verb **συνέστηκεν** (holds together) is in the perfect tense. This means Christ actively secured the structure of the universe in the past, and its continuous, ongoing function in the present relies exclusively on His divine power.', focusWordIds: ['cl8', 'cl11'] }
    ]
  },
  {
    id: 'sd-nt-john-20-28',
    argumentId: 'deity-of-christ',
    title: 'My Lord and My God (John 20:28)',
    objectionTarget: 'Unitarianism',
    description: 'Analyzing Thomas\' explicit vocative declaration to Jesus.',
    baselineVerse: {
      id: 'jt20', reference: 'John 20:28', textDirection: 'ltr',
      words: [
        { id: 'jt1', original: 'ἀπεκρίθη', transliteration: 'apekrithē', english: 'answered', strongs: 'G611', morphology: 'V-ADI-3S' },
        { id: 'jt2', original: 'Θωμᾶς', transliteration: 'Thōmas', english: 'Thomas', strongs: 'G2381', morphology: 'N-NMS' },
        { id: 'jt3', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
        { id: 'jt4', original: 'εἶπεν', transliteration: 'eipen', english: 'said', strongs: 'G3004', morphology: 'V-AAI-3S' },
        { id: 'jt5', original: 'αὐτῷ·', transliteration: 'autō;', english: 'to Him:', strongs: 'G846', morphology: 'Pro-DMS' },
        { id: 'jt6', original: 'Ὁ', transliteration: 'Ho', english: 'The', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 'jt7', original: 'Κύριός', transliteration: 'Kyrios', english: 'Lord', strongs: 'G2962', morphology: 'N-NMS' },
        { id: 'jt8', original: 'μου', transliteration: 'mou', english: 'of me', strongs: 'G1473', morphology: 'Pro-1GS' },
        { id: 'jt9', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
        { id: 'jt10', original: 'ὁ', transliteration: 'ho', english: 'the', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 'jt11', original: 'θεός', transliteration: 'theos', english: 'God', strongs: 'G2316', morphology: 'N-NMS' },
        { id: 'jt12', original: 'μου.', transliteration: 'mou.', english: 'of me.', strongs: 'G1473', morphology: 'Pro-1GS' }
      ]
    },
    steps: [
      { id: 'th1', title: 'To Him', content: 'Cults argue Thomas was merely exclaiming "Oh my God!" out of shock to the Father in heaven while looking at Jesus. However, the Greek stringently states Thomas "said TO HIM" (**εἶπεν αὐτῷ**). The address is directly to Jesus.', focusWordIds: ['jt4', 'jt5'] },
      { id: 'th2', title: 'The Vocative Absolute', content: 'In Koine Greek, using the nominative case with the definite article (**Ὁ Κύριός... ὁ θεός**) to address someone functions as a highly emphatic vocative (direct address). Thomas looks Jesus in the eyes and literally calls Him, "The Lord of me and the God of me!"', focusWordIds: ['jt6', 'jt7', 'jt10', 'jt11'] }
    ]
  },
  {
    id: 'sd-nt-acts-20-28',
    argumentId: 'deity-of-christ',
    title: 'His Own Blood (Acts 20:28)',
    objectionTarget: 'Arianism',
    description: 'Paul explicitly states that God purchased the church with His own blood.',
    baselineVerse: {
      id: 'ac20', reference: 'Acts 20:28', textDirection: 'ltr',
      words: [
        { id: 'a1', original: 'ποιμαίνειν', transliteration: 'poimainein', english: 'to shepherd', strongs: 'G4165', morphology: 'V-PNA' },
        { id: 'a2', original: 'τὴν', transliteration: 'tēn', english: 'the', strongs: 'G3588', morphology: 'Art-AFS' },
        { id: 'a3', original: 'ἐκκλησίαν', transliteration: 'ekklēsian', english: 'church', strongs: 'G1577', morphology: 'N-AFS' },
        { id: 'a4', original: 'τοῦ', transliteration: 'tou', english: 'of', strongs: 'G3588', morphology: 'Art-GMS' },
        { id: 'a5', original: 'θεοῦ,', transliteration: 'theou,', english: 'God,', strongs: 'G2316', morphology: 'N-GMS' },
        { id: 'a6', original: 'ἣν', transliteration: 'hēn', english: 'which', strongs: 'G3739', morphology: 'RelPro-AFS' },
        { id: 'a7', original: 'περιεποιήσατο', transliteration: 'periepoiēsato', english: 'He purchased', strongs: 'G4046', morphology: 'V-AMI-3S' },
        { id: 'a8', original: 'διὰ', transliteration: 'dia', english: 'through', strongs: 'G1223', morphology: 'Prep' },
        { id: 'a9', original: 'τοῦ', transliteration: 'tou', english: 'the', strongs: 'G3588', morphology: 'Art-GNS' },
        { id: 'a10', original: 'αἵματος', transliteration: 'haimatos', english: 'blood', strongs: 'G129', morphology: 'N-GNS' },
        { id: 'a11', original: 'τοῦ', transliteration: 'tou', english: 'of (His)', strongs: 'G3588', morphology: 'Art-GMS' },
        { id: 'a12', original: 'ἰδίου.', transliteration: 'idiou.', english: 'own.', strongs: 'G2398', morphology: 'Adj-GMS' }
      ]
    },
    steps: [
      { id: 'ha1', title: 'The Blood of God', content: 'The antecedent noun to the verb "purchased" (**περιεποιήσατο**) is decisively "God" (**θεοῦ**). Paul makes the astonishing declaration that God purchased the church with His very own blood.', focusWordIds: ['a4', 'a5', 'a7'] },
      { id: 'ha2', title: 'His Own', content: 'The construction **τοῦ ἰδίου** ("of his own") emphatically binds the blood inextricably to God. Since God the Father does not have a physical body or blood, this is a profound Trinitarian verse attributing the blood of the incarnate Son strictly to the nature of God.', focusWordIds: ['a10', 'a11', 'a12'] }
    ]
  },
  {
    id: 'sd-nt-1-tim-3-16',
    argumentId: 'deity-of-christ',
    title: 'Manifest in the Flesh (1 Tim 3:16)',
    objectionTarget: 'Liberal Scholarship',
    description: 'An analysis of a deep Christological hymn demonstrating pre-existence.',
    baselineVerse: {
      id: 'ti3-16', reference: '1 Timothy 3:16', textDirection: 'ltr',
      words: [
        { id: 'ti1', original: 'Ὃς', transliteration: 'Hos', english: 'He who', strongs: 'G3739', morphology: 'RelPro-NMS' },
        { id: 'ti2', original: 'ἐφανερώθη', transliteration: 'ephanerōthē', english: 'was revealed [manifested]', strongs: 'G5319', morphology: 'V-API-3S' },
        { id: 'ti3', original: 'ἐν', transliteration: 'en', english: 'in', strongs: 'G1722', morphology: 'Prep' },
        { id: 'ti4', original: 'σαρκί,', transliteration: 'sarki,', english: 'flesh,', strongs: 'G4561', morphology: 'N-DFS' },
        { id: 'ti5', original: 'ἐδικαιώθη', transliteration: 'edikaiōthē', english: 'was justified [vindicated]', strongs: 'G1344', morphology: 'V-API-3S' },
        { id: 'ti6', original: 'ἐν', transliteration: 'en', english: 'in', strongs: 'G1722', morphology: 'Prep' },
        { id: 'ti7', original: 'πνεύματι,', transliteration: 'pneumati,', english: 'Spirit,', strongs: 'G4151', morphology: 'N-DNS' }
      ]
    },
    steps: [
      { id: 'te1', title: 'The "Who" Variant', content: 'While later manuscripts explicitly read "God was manifested," the earliest and most critical texts read **Ὃς** ("He who"). Far from lessening Christ’s deity, this relative pronoun acts as a direct continuation of "the living God" in the prior verse.', focusWordIds: ['ti1', 'ti2'] },
      { id: 'te2', title: 'Pre-Existence in Phanerō', content: 'The verb **ἐφανερώθη** (was made manifest) demands pre-existence. Only someone who already existed in an invisible state can be "manifested" in flesh. Mere humans are born; the eternal Son was manifested.', focusWordIds: ['ti2', 'ti3', 'ti4'] }
    ]
  },
  {
    id: 'sd-nt-equal-god',
    argumentId: 'deity-of-christ',
    title: 'Making Himself Equal (John 5:18)',
    objectionTarget: 'Jehovah\'s Witnesses',
    description: 'Analyzing why the Pharisees wanted to stone Jesus for claiming God as His distinct Father.',
    baselineVerse: {
      id: 'j5-18', reference: 'John 5:18', textDirection: 'ltr',
      words: [
        { id: 'eq1', original: 'πατέρα', transliteration: 'patera', english: 'Father', strongs: 'G3962', morphology: 'N-AMS' },
        { id: 'eq2', original: 'ἴδιον', transliteration: 'idion', english: 'His own', strongs: 'G2398', morphology: 'Adj-AMS' },
        { id: 'eq3', original: 'ἔλεγεν', transliteration: 'elegen', english: 'He called', strongs: 'G3004', morphology: 'V-IAI-3S' },
        { id: 'eq4', original: 'τὸν', transliteration: 'ton', english: 'the', strongs: 'G3588', morphology: 'Art-AMS' },
        { id: 'eq5', original: 'θεόν,', transliteration: 'theon,', english: 'God,', strongs: 'G2316', morphology: 'N-AMS' },
        { id: 'eq6', original: 'ἴσον', transliteration: 'ison', english: 'equal', strongs: 'G2470', morphology: 'Adj-AMS' },
        { id: 'eq7', original: 'ἑαυτὸν', transliteration: 'heauton', english: 'Himself', strongs: 'G1438', morphology: 'RefPro-AM3S' },
        { id: 'eq8', original: 'ποιῶν', transliteration: 'poiōn', english: 'making', strongs: 'G4160', morphology: 'V-PAP-NMS' },
        { id: 'eq9', original: 'τῷ', transliteration: 'tō', english: 'to', strongs: 'G3588', morphology: 'Art-DMS' },
        { id: 'eq10', original: 'θεῷ.', transliteration: 'theō.', english: 'God.', strongs: 'G2316', morphology: 'N-DMS' }
      ]
    },
    steps: [
      { id: 'q1', title: 'Unique Sonship', content: 'Cults argue Jesus never claimed deity, only the Pharisees misunderstood Him. But John the Apostle is the narrator here. John states unequivocally that Jesus was calling God His "own unique Father" (**πατέρα ἴδιον**).', focusWordIds: ['eq1', 'eq2', 'eq5'] },
      { id: 'q2', title: 'Ison (Equal in Nature)', content: 'The word **ἴσον** means equality in quality, quantity, and nature. By claiming utterly unique sonship (unlike how all Israel were "children of God"), John validates that Jesus was intentionally making Himself absolutely equal with God Almighty.', focusWordIds: ['eq6', 'eq7', 'eq8', 'eq10'] }
    ]
  },
  {
    id: 'sd-nt-radiance',
    argumentId: 'deity-of-christ',
    title: 'The Radiance of Glory (Heb 1:3)',
    objectionTarget: 'Arianism',
    description: 'Analyzing apaugasma to prove the Son is co-eternal with the Father.',
    baselineVerse: {
      id: 'h13b', reference: 'Hebrews 1:3', textDirection: 'ltr',
      words: [
        { id: 'rd1', original: 'ὃς', transliteration: 'hos', english: 'who', strongs: 'G3739', morphology: 'RelPro-NMS' },
        { id: 'rd2', original: 'ὢν', transliteration: 'ōn', english: 'being', strongs: 'G5607', morphology: 'V-PAP-NMS' },
        { id: 'rd3', original: 'ἀπαύγασμα', transliteration: 'apaugasma', english: 'the radiance [effulgence]', strongs: 'G541', morphology: 'N-NNS' },
        { id: 'rd4', original: 'τῆς', transliteration: 'tēs', english: 'of the', strongs: 'G3588', morphology: 'Art-GFS' },
        { id: 'rd5', original: 'δόξης', transliteration: 'doxēs', english: 'glory', strongs: 'G1391', morphology: 'N-GFS' }
      ]
    },
    steps: [
      { id: 'r1', title: 'Eternal Continuous State', content: 'The participle **ὢν** (being) is in the present tense. It denotes Christ’s eternal, uninterrupted absolute existence as opposed to becoming something He was not.', focusWordIds: ['rd2'] },
      { id: 'r2', title: 'Apaugasma', content: '**ἀπαύγασμα** refers to the brilliant light that shines out from a luminous body. Just as the sun is never without its rays of light, the Father has never existed without the Son radiating His exact glory.', focusWordIds: ['rd3', 'rd5'] }
    ]
  },
  {
    id: 'sd-nt-rom-1',
    argumentId: 'deity-of-christ',
    title: 'According to the Flesh (Rom 1:3-4)',
    objectionTarget: 'Adoptionism',
    description: 'Analyzing the profound structural contrast of Christ\'s human and divine natures.',
    baselineVerse: {
      id: 'ro1', reference: 'Romans 1:3', textDirection: 'ltr',
      words: [
        { id: 'ro1', original: 'τοῦ', transliteration: 'tou', english: 'who', strongs: 'G3588', morphology: 'Art-GMS' },
        { id: 'ro2', original: 'γενομένου', transliteration: 'genomenou', english: 'was born [came to be]', strongs: 'G1096', morphology: 'V-AMP-GMS' },
        { id: 'ro3', original: 'ἐκ', transliteration: 'ek', english: 'of', strongs: 'G1537', morphology: 'Prep' },
        { id: 'ro4', original: 'σπέρματος', transliteration: 'spermatos', english: 'descendants', strongs: 'G4690', morphology: 'N-GNS' },
        { id: 'ro5', original: 'Δαυὶδ', transliteration: 'Dauid', english: 'of David', strongs: 'G1138', morphology: 'N-PRI' },
        { id: 'ro6', original: 'κατὰ', transliteration: 'kata', english: 'according to', strongs: 'G2596', morphology: 'Prep' },
        { id: 'ro7', original: 'σάρκα', transliteration: 'sarka', english: 'the flesh;', strongs: 'G4561', morphology: 'N-AFS' }
      ]
    },
    steps: [
      { id: 'c1', title: 'The Human Nature', content: 'The verb **γενομένου** (came into existence/was born) is applied strictly to Christ "according to the flesh." His human nature was definitely created in time through the lineage of David.', focusWordIds: ['ro2', 'ro6', 'ro7'] },
      { id: 'c2', title: 'The Divine Nature Contrast', content: 'In verse 4 (not shown), Paul switches completely. Instead of being born, Christ is *declared* with power to be the Son of God, not according to the flesh, but according to the Spirit of holiness.', focusWordIds: ['ro6', 'ro7'] }
    ]
  },
  {
    id: 'sd-nt-2-pet-1-1',
    argumentId: 'deity-of-christ',
    title: 'Our God and Savior (2 Peter 1:1)',
    objectionTarget: 'Jehovah\'s Witnesses',
    description: 'Another profound application of Granville Sharp rule binding God and Savior together.',
    baselineVerse: {
      id: 'pe1', reference: '2 Peter 1:1', textDirection: 'ltr',
      words: [
        { id: 'pe1', original: 'ἐν', transliteration: 'en', english: 'in', strongs: 'G1722', morphology: 'Prep' },
        { id: 'pe2', original: 'δικαιοσύνῃ', transliteration: 'dikaiosynē', english: '(the) righteousness', strongs: 'G1343', morphology: 'N-DFS' },
        { id: 'pe3', original: 'τοῦ', transliteration: 'tou', english: 'of the', strongs: 'G3588', morphology: 'Art-GMS' },
        { id: 'pe4', original: 'θεοῦ', transliteration: 'theou', english: 'God', strongs: 'G2316', morphology: 'N-GMS' },
        { id: 'pe5', original: 'ἡμῶν', transliteration: 'hēmōn', english: 'of us', strongs: 'G1473', morphology: 'Pro-1GP' },
        { id: 'pe6', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
        { id: 'pe7', original: 'σωτῆρος', transliteration: 'sōtēros', english: 'Savior', strongs: 'G4990', morphology: 'N-GMS' },
        { id: 'pe8', original: 'Ἰησοῦ', transliteration: 'Iēsou', english: 'Jesus', strongs: 'G2424', morphology: 'N-GMS' },
        { id: 'pe9', original: 'Χριστοῦ·', transliteration: 'Christou;', english: 'Christ:', strongs: 'G5547', morphology: 'N-GMS' }
      ]
    },
    steps: [
      { id: 'pt1', title: 'The Sharp Syntactical Chain', content: 'Exactly like Titus 2:13, we see the TSKS construction (Article-Noun-Kai-Noun). The article **τοῦ** governs the first noun **θεοῦ** (God), the conjunction **καὶ** (and) connects them, and the second noun **σωτῆρος** (Savior) lacks the article.', focusWordIds: ['pe3', 'pe4', 'pe6', 'pe7'] },
      { id: 'pt2', title: 'Undeniable Exegesis', content: 'Peter is completely declaring that Jesus Christ is simultaneously our God and our Savior. To translate this as "Our God, and the Savior Jesus" violates fundamental Greek rules.', focusWordIds: ['pe4', 'pe7', 'pe8', 'pe9'] }
    ]
  }
];
