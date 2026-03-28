import type { FullManuscript } from './types';

export const papyriAdditional: FullManuscript[] = [
  {
    id: 'p75',
    designation: '𝔓75 — Bodmer Papyrus XIV–XV',
    gregoryAland: 'P75',
    type: 'papyrus',
    script: 'greek',
    textType: 'Proto-Alexandrian',
    date: 'c. 175–225 AD',
    material: 'Papyrus',
    dimensions: '26 × 13 cm',
    totalLeaves: '51 surviving leaves (of ~72)',
    format: 'Single-quire codex',
    location: 'Vatican Library, Rome (since 2007; previously Bodmer Library)',
    discoveredBy: 'Found near Dishna, Upper Egypt',
    discoveryDate: '1952',
    discoveryLocation: 'Jabal Abu Mana, Upper Egypt',
    acquisitionHistory: 'Part of the Bodmer Papyri cache discovered in 1952. Donated to Pope Benedict XVI by the Bodmer Foundation in 2007, now housed in the Vatican Library.',
    contents: 'Luke 3:18–4:2, 4:34–5:10, 5:37–6:4, 6:10–7:32, 7:35–8:56, 9:1–18:18 and John 1:1–11:45, 11:48–15:8',
    contentsDetail: 'The most important early witness to Luke and John together. Its text is remarkably close to 4th-century Codex Vaticanus, demonstrating textual stability over 150+ years.',
    significance: 'Perhaps the single most important papyrus for NT textual criticism. Its near-identity with Codex Vaticanus (separated by 150 years) proves the Alexandrian text type was carefully preserved. This demolished the theory that early texts were wildly unstable.',
    detailedDescription: `𝔓75 is arguably the most significant NT papyrus ever discovered. Written around 175–225 AD, it contains large portions of Luke and John in a single codex — the earliest evidence of these two Gospels being bound together.

The manuscript's text is extraordinarily close to Codex Vaticanus (B), copied 150 years later. This remarkable agreement demonstrates that the Alexandrian text tradition was carefully and accurately transmitted across centuries. Before 𝔓75's discovery, some scholars theorized that Vaticanus's text was a 4th-century editorial creation; 𝔓75 proved it was instead a faithful copy of a much older tradition.

The scribe of 𝔓75 was careful and professional, making far fewer errors than the scribe of 𝔓66. Where corrections exist, they typically bring the text closer to other known readings, suggesting the scribe was checking against an exemplar.

The codex uses a continuous script (scriptio continua) without spaces between words, nomina sacra (sacred abbreviations like ΘΣ for θεός), and page numbers — evidence of sophisticated Christian book production in the early 3rd century.`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Vatican%2C_Apostolic_Library_Ms_Hanna_Papyrus_1_-_Papyrus_Bodmer_XIV%E2%80%93XV_%28Papyrus_75%29_fol_1B9r_Luke_14%2C_3-14.jpg/1280px-Vatican%2C_Apostolic_Library_Ms_Hanna_Papyrus_1_-_Papyrus_Bodmer_XIV%E2%80%93XV_%28Papyrus_75%29_fol_1B9r_Luke_14%2C_3-14.jpg', caption: '𝔓75 — Page from John', attribution: 'Vatican Library', license: 'Public Domain' }
    ],
    passages: [
      {
        title: 'The Prologue of John in 𝔓75',
        reference: 'John 1:1–14',
        notes: '𝔓75 preserves the complete Johannine prologue, one of the earliest witnesses. Its text is virtually identical to Codex Vaticanus.',
        verses: [
          { reference: 'John 1:1', originalText: 'Ἐν ἀρχῇ ἦν ὁ λόγος καὶ ὁ λόγος ἦν πρὸς τὸν θεόν καὶ θεὸς ἦν ὁ λόγος', words: [
            { original: 'Ἐν', transliteration: 'En', parsing: 'Prep', gloss: 'In', strongs: 'G1722', lemma: 'ἐν' },
            { original: 'ἀρχῇ', transliteration: 'archē', parsing: 'N-DFS', gloss: 'beginning', strongs: 'G746', lemma: 'ἀρχή' },
            { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
            { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
            { original: 'λόγος', transliteration: 'logos', parsing: 'N-NMS', gloss: 'Word', strongs: 'G3056', lemma: 'λόγος' },
            { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
            { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
            { original: 'λόγος', transliteration: 'logos', parsing: 'N-NMS', gloss: 'Word', strongs: 'G3056', lemma: 'λόγος' },
            { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
            { original: 'πρὸς', transliteration: 'pros', parsing: 'Prep', gloss: 'with', strongs: 'G4314', lemma: 'πρός' },
            { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
            { original: 'θεόν', transliteration: 'theon', parsing: 'N-AMS', gloss: 'God', strongs: 'G2316', lemma: 'θεός' },
            { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
            { original: 'θεὸς', transliteration: 'theos', parsing: 'N-NMS', gloss: 'God', strongs: 'G2316', lemma: 'θεός' },
            { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
            { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
            { original: 'λόγος', transliteration: 'logos', parsing: 'N-NMS', gloss: 'Word', strongs: 'G3056', lemma: 'λόγος' },
          ]},
          { reference: 'John 1:14', originalText: 'Καὶ ὁ λόγος σὰρξ ἐγένετο καὶ ἐσκήνωσεν ἐν ἡμῖν καὶ ἐθεασάμεθα τὴν δόξαν αὐτοῦ δόξαν ὡς μονογενοῦς παρὰ πατρός πλήρης χάριτος καὶ ἀληθείας', words: [
            { original: 'Καὶ', transliteration: 'Kai', parsing: 'Conj', gloss: 'And', strongs: 'G2532', lemma: 'καί' },
            { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
            { original: 'λόγος', transliteration: 'logos', parsing: 'N-NMS', gloss: 'Word', strongs: 'G3056', lemma: 'λόγος' },
            { original: 'σὰρξ', transliteration: 'sarx', parsing: 'N-NFS', gloss: 'flesh', strongs: 'G4561', lemma: 'σάρξ' },
            { original: 'ἐγένετο', transliteration: 'egeneto', parsing: 'V-2ADI-3S', gloss: 'became', strongs: 'G1096', lemma: 'γίνομαι' },
            { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
            { original: 'ἐσκήνωσεν', transliteration: 'eskēnōsen', parsing: 'V-AAI-3S', gloss: 'dwelt/tabernacled', strongs: 'G4637', lemma: 'σκηνόω' },
            { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'among', strongs: 'G1722', lemma: 'ἐν' },
            { original: 'ἡμῖν', transliteration: 'hēmin', parsing: 'PPro-D1P', gloss: 'us', strongs: 'G2254', lemma: 'ἐγώ' },
            { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
            { original: 'ἐθεασάμεθα', transliteration: 'etheasametha', parsing: 'V-ADI-1P', gloss: 'we beheld', strongs: 'G2300', lemma: 'θεάομαι' },
            { original: 'τὴν', transliteration: 'tēn', parsing: 'Art-AFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
            { original: 'δόξαν', transliteration: 'doxan', parsing: 'N-AFS', gloss: 'glory', strongs: 'G1391', lemma: 'δόξα' },
            { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'his', strongs: 'G846', lemma: 'αὐτός' },
            { original: 'δόξαν', transliteration: 'doxan', parsing: 'N-AFS', gloss: 'glory', strongs: 'G1391', lemma: 'δόξα' },
            { original: 'ὡς', transliteration: 'hōs', parsing: 'Adv', gloss: 'as of', strongs: 'G5613', lemma: 'ὡς' },
            { original: 'μονογενοῦς', transliteration: 'monogenous', parsing: 'Adj-GMS', gloss: 'the only-begotten', strongs: 'G3439', lemma: 'μονογενής' },
            { original: 'παρὰ', transliteration: 'para', parsing: 'Prep', gloss: 'from', strongs: 'G3844', lemma: 'παρά' },
            { original: 'πατρός', transliteration: 'patros', parsing: 'N-GMS', gloss: 'the Father', strongs: 'G3962', lemma: 'πατήρ' },
            { original: 'πλήρης', transliteration: 'plērēs', parsing: 'Adj-NMS', gloss: 'full', strongs: 'G4134', lemma: 'πλήρης' },
            { original: 'χάριτος', transliteration: 'charitos', parsing: 'N-GFS', gloss: 'of grace', strongs: 'G5485', lemma: 'χάρις' },
            { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
            { original: 'ἀληθείας', transliteration: 'alētheias', parsing: 'N-GFS', gloss: 'truth', strongs: 'G225', lemma: 'ἀλήθεια' },
          ]},
        ],
        variants: [
          { reference: 'John 1:18', thisReading: 'μονογενὴς θεός (only-begotten God)', majorityReading: 'μονογενὴς υἱός (only-begotten Son)', note: '𝔓75 reads "unique God" — a theologically weighty variant shared with Sinaiticus, favored by most modern critical editions.' }
        ]
      }
    ],
    bibliography: [
      'Martin, Victor and Rodolphe Kasser. Papyrus Bodmer XIV–XV. Cologny-Geneva, 1961.',
      'Comfort, Philip W. The Text of the Earliest NT Greek Manuscripts. Wheaton, 2001.',
    ],
    relatedManuscripts: ['p66', 'vaticanus', 'sinaiticus'],
    onlineResources: [
      { label: 'Vatican Library Digital', url: 'https://digi.vatlib.it/' },
    ]
  },
  {
    id: 'p45',
    designation: '𝔓45 — Chester Beatty Papyrus I',
    gregoryAland: 'P45',
    type: 'papyrus', script: 'greek', textType: 'Caesarean (Mark), Alexandrian (Acts)',
    date: 'c. 250 AD', material: 'Papyrus', dimensions: '21 × 25 cm', totalLeaves: '30 surviving (of ~220)',
    format: 'Codex', location: 'Chester Beatty Library, Dublin & Österreichische Nationalbibliothek, Vienna',
    discoveredBy: 'Acquired from a dealer (found near Atfih, Egypt)', discoveryDate: '1930',
    discoveryLocation: 'Near Atfih (ancient Aphroditopolis), Egypt',
    contents: 'Portions of all four Gospels (Matt 20–21, 25–26; Mark 4–9, 11–12; Luke 6–7, 9–14; John 4–5, 10–11) and Acts (4–17)',
    contentsDetail: 'The earliest known manuscript containing portions of all four Gospels and Acts in a single codex. Only 30 of an estimated 220 original leaves survive.',
    significance: 'Demonstrates that the four-Gospel codex existed by the mid-3rd century. Its text of Mark is closest to the Caesarean text type, making it a key witness for this family.',
    detailedDescription: `𝔓45 is one of the three famous Chester Beatty Papyri, acquired by Alfred Chester Beatty from a Cairo dealer around 1930. It originally contained all four Gospels and Acts in a single massive codex of approximately 220 leaves.

Only 30 leaves survive: 2 from Matthew, 6 from Mark, 7 from Luke, 2 from John, and 13 from Acts. Despite its fragmentary state, the manuscript is invaluable because it proves that by c. 250 AD, Christians were producing codices containing four Gospels plus Acts — a proto-canonical collection.

The scribe was somewhat careless, often omitting words, but the underlying text is important. In Mark, the text shows affinities with the Caesarean text family (related to families 1 and 13). In Luke, it tends toward the Alexandrian text. In Acts, it agrees frequently with Codex Vaticanus.`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dublin%2C_Chester_Beatty_Ms_Papyrus_45_BP_I_ff.13-14_Luke_11.50-12.12%3B_12.18-37%3B_12.42-13.1%3B_13.jpg/1280px-Dublin%2C_Chester_Beatty_Ms_Papyrus_45_BP_I_ff.13-14_Luke_11.50-12.12%3B_12.18-37%3B_12.42-13.1%3B_13.jpg', caption: '𝔓45 — Folio from the Gospel of Luke', attribution: 'Chester Beatty Library', license: 'Public Domain' }
    ],
    passages: [{
      title: 'Mark 6:30–34 — Feeding of the Five Thousand',
      reference: 'Mark 6:30–34', notes: 'One of the best-preserved sections of 𝔓45.',
      verses: [
        { reference: 'Mark 6:30', originalText: 'Καὶ συνάγονται οἱ ἀπόστολοι πρὸς τὸν Ἰησοῦν καὶ ἀπήγγειλαν αὐτῷ πάντα ὅσα ἐποίησαν καὶ ὅσα ἐδίδαξαν', words: [
          { original: 'Καὶ', transliteration: 'Kai', parsing: 'Conj', gloss: 'And', strongs: 'G2532', lemma: 'καί' },
          { original: 'συνάγονται', transliteration: 'synagontai', parsing: 'V-PPI-3P', gloss: 'gather together', strongs: 'G4863', lemma: 'συνάγω' },
          { original: 'οἱ', transliteration: 'hoi', parsing: 'Art-NMP', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἀπόστολοι', transliteration: 'apostoloi', parsing: 'N-NMP', gloss: 'apostles', strongs: 'G652', lemma: 'ἀπόστολος' },
          { original: 'πρὸς', transliteration: 'pros', parsing: 'Prep', gloss: 'to', strongs: 'G4314', lemma: 'πρός' },
          { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'Ἰησοῦν', transliteration: 'Iēsoun', parsing: 'N-AMS', gloss: 'Jesus', strongs: 'G2424', lemma: 'Ἰησοῦς' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἀπήγγειλαν', transliteration: 'apēngeilan', parsing: 'V-AAI-3P', gloss: 'reported', strongs: 'G518', lemma: 'ἀπαγγέλλω' },
          { original: 'αὐτῷ', transliteration: 'autō', parsing: 'PPro-DM3S', gloss: 'to him', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'πάντα', transliteration: 'panta', parsing: 'Adj-ANP', gloss: 'all things', strongs: 'G3956', lemma: 'πᾶς' },
          { original: 'ὅσα', transliteration: 'hosa', parsing: 'RelPro-ANP', gloss: 'whatever', strongs: 'G3745', lemma: 'ὅσος' },
          { original: 'ἐποίησαν', transliteration: 'epoiēsan', parsing: 'V-AAI-3P', gloss: 'they did', strongs: 'G4160', lemma: 'ποιέω' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ὅσα', transliteration: 'hosa', parsing: 'RelPro-ANP', gloss: 'whatever', strongs: 'G3745', lemma: 'ὅσος' },
          { original: 'ἐδίδαξαν', transliteration: 'edidaxan', parsing: 'V-AAI-3P', gloss: 'they taught', strongs: 'G1321', lemma: 'διδάσκω' },
        ]},
        { reference: 'Mark 6:31', originalText: 'καὶ λέγει αὐτοῖς δεῦτε ὑμεῖς αὐτοὶ κατ’ ἰδίαν εἰς ἔρημον τόπον καὶ ἀναπαύσασθε ὀλίγον ἦσαν γὰρ οἱ ἐρχόμενοι καὶ οἱ ὑπάγοντες πολλοί καὶ οὐδὲ φαγεῖν εὐκαίρουν', words: [
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'And', strongs: 'G2532', lemma: 'καί' },
          { original: 'λέγει', transliteration: 'legei', parsing: 'V-PAI-3S', gloss: 'he says', strongs: 'G3004', lemma: 'λέγω' },
          { original: 'αὐτοῖς', transliteration: 'autois', parsing: 'PPro-DM3P', gloss: 'to them', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'δεῦτε', transliteration: 'deute', parsing: 'Adv', gloss: 'Come', strongs: 'G1205', lemma: 'δεῦτε' },
          { original: 'ὑμεῖς', transliteration: 'hymeis', parsing: 'PPro-N2P', gloss: 'you', strongs: 'G5210', lemma: 'ὑμεῖς' },
          { original: 'αὐτοὶ', transliteration: 'autoi', parsing: 'PPro-NM3P', gloss: 'yourselves', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'κατ’', transliteration: "kat'", parsing: 'Prep', gloss: 'by', strongs: 'G2596', lemma: 'κατά' },
          { original: 'ἰδίαν', transliteration: 'idian', parsing: 'Adj-AFS', gloss: 'yourselves', strongs: 'G2398', lemma: 'ἴδιος' },
          { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'into', strongs: 'G1519', lemma: 'εἰς' },
          { original: 'ἔρημον', transliteration: 'erēmon', parsing: 'Adj-AMS', gloss: 'a desolate', strongs: 'G2048', lemma: 'ἔρημος' },
          { original: 'τόπον', transliteration: 'topon', parsing: 'N-AMS', gloss: 'place', strongs: 'G5117', lemma: 'τόπος' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἀναπαύσασθε', transliteration: 'anapausasthe', parsing: 'V-AMM-2P', gloss: 'rest', strongs: 'G373', lemma: 'ἀναπαύω' },
          { original: 'ὀλίγον', transliteration: 'oligon', parsing: 'Adj-ANS', gloss: 'a little', strongs: 'G3641', lemma: 'ὀλίγος' },
          { original: 'ἦσαν', transliteration: 'ēsan', parsing: 'V-IAI-3P', gloss: 'were', strongs: 'G1510', lemma: 'εἰμί' },
          { original: 'γὰρ', transliteration: 'gar', parsing: 'Conj', gloss: 'for', strongs: 'G1063', lemma: 'γάρ' },
          { original: 'οἱ', transliteration: 'hoi', parsing: 'Art-NMP', gloss: 'those', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἐρχόμενοι', transliteration: 'erchomenoi', parsing: 'V-PNP-NMP', gloss: 'coming', strongs: 'G2064', lemma: 'ἔρχομαι' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'οἱ', transliteration: 'hoi', parsing: 'Art-NMP', gloss: 'those', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ὑπάγοντες', transliteration: 'hypagontes', parsing: 'V-PAP-NMP', gloss: 'going', strongs: 'G5217', lemma: 'ὑπάγω' },
          { original: 'πολλοί', transliteration: 'polloi', parsing: 'Adj-NMP', gloss: 'many', strongs: 'G4183', lemma: 'πολύς' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'οὐδὲ', transliteration: 'oude', parsing: 'Adv', gloss: 'not even', strongs: 'G3761', lemma: 'οὐδέ' },
          { original: 'φαγεῖν', transliteration: 'phagein', parsing: 'V-2AAN', gloss: 'to eat', strongs: 'G5315', lemma: 'ἐσθίω' },
          { original: 'εὐκαίρουν', transliteration: 'eukairoun', parsing: 'V-IAI-3P', gloss: 'they had opportunity', strongs: 'G2119', lemma: 'εὐκαιρέω' }
        ]},
        { reference: 'Mark 6:32', originalText: 'καὶ ἀπῆλθον εἰς ἔρημον τόπον τῷ πλοίῳ κατ’ ἰδίαν', words: [
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'And', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἀπῆλθον', transliteration: 'apēlthon', parsing: 'V-2AAI-3P', gloss: 'they went away', strongs: 'G565', lemma: 'ἀπέρχομαι' },
          { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'into', strongs: 'G1519', lemma: 'εἰς' },
          { original: 'ἔρημον', transliteration: 'erēmon', parsing: 'Adj-AMS', gloss: 'a desolate', strongs: 'G2048', lemma: 'ἔρημος' },
          { original: 'τόπον', transliteration: 'topon', parsing: 'N-AMS', gloss: 'place', strongs: 'G5117', lemma: 'τόπος' },
          { original: 'τῷ', transliteration: 'tō', parsing: 'Art-DNS', gloss: 'in the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'πλοίῳ', transliteration: 'ploiō', parsing: 'N-DNS', gloss: 'boat', strongs: 'G4143', lemma: 'πλοῖον' },
          { original: 'κατ’', transliteration: "kat'", parsing: 'Prep', gloss: 'by', strongs: 'G2596', lemma: 'κατά' },
          { original: 'ἰδίαν', transliteration: 'idian', parsing: 'Adj-AFS', gloss: 'themselves', strongs: 'G2398', lemma: 'ἴδιος' }
        ]},
        { reference: 'Mark 6:33', originalText: 'καὶ εἶδον αὐτοὺς ὑπάγοντας καὶ ἐπέγνωσαν πολλοί καὶ πεζῇ ἀπὸ πασῶν τῶν πόλεων συνέδραμον ἐκεῖ καὶ προῆλθον αὐτούς', words: [
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'And', strongs: 'G2532', lemma: 'καί' },
          { original: 'εἶδον', transliteration: 'eidon', parsing: 'V-2AAI-3P', gloss: 'they saw', strongs: 'G3708', lemma: 'ὁράω' },
          { original: 'αὐτοὺς', transliteration: 'autous', parsing: 'PPro-AM3P', gloss: 'them', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'ὑπάγοντας', transliteration: 'hypagontas', parsing: 'V-PAP-AMP', gloss: 'going', strongs: 'G5217', lemma: 'ὑπάγω' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἐπέγνωσαν', transliteration: 'epegnōsan', parsing: 'V-2AAI-3P', gloss: 'recognized', strongs: 'G1921', lemma: 'ἐπιγινώσκω' },
          { original: 'πολλοί', transliteration: 'polloi', parsing: 'Adj-NMP', gloss: 'many', strongs: 'G4183', lemma: 'πολύς' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'πεζῇ', transliteration: 'pezē', parsing: 'Adv', gloss: 'on foot', strongs: 'G3979', lemma: 'πεζῇ' },
          { original: 'ἀπὸ', transliteration: 'apo', parsing: 'Prep', gloss: 'from', strongs: 'G575', lemma: 'ἀπό' },
          { original: 'πασῶν', transliteration: 'pasōn', parsing: 'Adj-GFP', gloss: 'all', strongs: 'G3956', lemma: 'πᾶς' },
          { original: 'τῶν', transliteration: 'tōn', parsing: 'Art-GFP', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'πόλεων', transliteration: 'poleōn', parsing: 'N-GFP', gloss: 'cities', strongs: 'G4172', lemma: 'πόλις' },
          { original: 'συνέδραμον', transliteration: 'synedramon', parsing: 'V-2AAI-3P', gloss: 'they ran together', strongs: 'G4936', lemma: 'συντρέχω' },
          { original: 'ἐκεῖ', transliteration: 'ekei', parsing: 'Adv', gloss: 'there', strongs: 'G1563', lemma: 'ἐκεῖ' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'προῆλθον', transliteration: 'proēlthon', parsing: 'V-2AAI-3P', gloss: 'arrived ahead', strongs: 'G4281', lemma: 'προέρχομαι' },
          { original: 'αὐτούς', transliteration: 'autous', parsing: 'PPro-AM3P', gloss: 'of them', strongs: 'G846', lemma: 'αὐτός' }
        ]},
        { reference: 'Mark 6:34', originalText: 'καὶ ἐξελθὼν εἶδεν πολὺν ὄχλον καὶ ἐσπλαγχνίσθη ἐπ’ αὐτοὺς ὅτι ἦσαν ὡς πρόβατα μὴ ἔχοντα ποιμένα καὶ ἤρξατο διδάσκειν αὐτοὺς πολλά', words: [
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'And', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἐξελθὼν', transliteration: 'exelthōn', parsing: 'V-2AAP-NMS', gloss: 'having come out', strongs: 'G1831', lemma: 'ἐξέρχομαι' },
          { original: 'εἶδεν', transliteration: 'eiden', parsing: 'V-2AAI-3S', gloss: 'he saw', strongs: 'G3708', lemma: 'ὁράω' },
          { original: 'πολὺν', transliteration: 'polyn', parsing: 'Adj-AMS', gloss: 'a great', strongs: 'G4183', lemma: 'πολύς' },
          { original: 'ὄχλον', transliteration: 'ochlon', parsing: 'N-AMS', gloss: 'crowd', strongs: 'G3793', lemma: 'ὄχλος' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἐσπλαγχνίσθη', transliteration: 'esplanchnisthē', parsing: 'V-API-3S', gloss: 'was moved with compassion', strongs: 'G4697', lemma: 'σπλαγχνίζομαι' },
          { original: 'ἐπ’', transliteration: "ep'", parsing: 'Prep', gloss: 'for', strongs: 'G1909', lemma: 'ἐπί' },
          { original: 'αὐτοὺς', transliteration: 'autous', parsing: 'PPro-AM3P', gloss: 'them', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'ὅτι', transliteration: 'hoti', parsing: 'Conj', gloss: 'because', strongs: 'G3754', lemma: 'ὅτι' },
          { original: 'ἦσαν', transliteration: 'ēsan', parsing: 'V-IAI-3P', gloss: 'they were', strongs: 'G1510', lemma: 'εἰμί' },
          { original: 'ὡς', transliteration: 'hōs', parsing: 'Adv', gloss: 'like', strongs: 'G5613', lemma: 'ὡς' },
          { original: 'πρόβατα', transliteration: 'probata', parsing: 'N-NNP', gloss: 'sheep', strongs: 'G4263', lemma: 'πρόβατον' },
          { original: 'μὴ', transliteration: 'mē', parsing: 'Adv', gloss: 'not', strongs: 'G3361', lemma: 'μή' },
          { original: 'ἔχοντα', transliteration: 'echonta', parsing: 'V-PAP-NNP', gloss: 'having', strongs: 'G2192', lemma: 'ἔχω' },
          { original: 'ποιμένα', transliteration: 'poimena', parsing: 'N-AMS', gloss: 'a shepherd', strongs: 'G4166', lemma: 'ποιμήν' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἤρξατο', transliteration: 'ērxato', parsing: 'V-AMI-3S', gloss: 'he began', strongs: 'G756', lemma: 'ἄρχω' },
          { original: 'διδάσκειν', transliteration: 'didaskein', parsing: 'V-PAN', gloss: 'to teach', strongs: 'G1321', lemma: 'διδάσκω' },
          { original: 'αὐτοὺς', transliteration: 'autous', parsing: 'PPro-AM3P', gloss: 'them', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'πολλά', transliteration: 'polla', parsing: 'Adj-ANP', gloss: 'many things', strongs: 'G4183', lemma: 'πολύς' }
        ]}], variants: []
    }],
    bibliography: [
      'Kenyon, F.G. Chester Beatty Biblical Papyri. Fasciculus II: The Gospels and Acts. London, 1933.',
    ],
    relatedManuscripts: ['p46', 'p47', 'sinaiticus'],
    onlineResources: [{ label: 'Chester Beatty Library Digital Collections', url: 'https://chesterbeatty.ie/collections/biblical-papyri/' }]
  },
  {
    id: 'p46',
    designation: '𝔓46 — Chester Beatty Papyrus II',
    gregoryAland: 'P46',
    type: 'papyrus', script: 'greek', textType: 'Alexandrian (proto)',
    date: 'c. 175–225 AD', material: 'Papyrus', dimensions: '28 × 16 cm', totalLeaves: '86 surviving (of ~104)',
    format: 'Single-quire codex', location: 'Chester Beatty Library, Dublin & University of Michigan',
    discoveredBy: 'Found near Atfih, Egypt; acquired 1930', discoveryDate: '1930',
    contents: 'Romans 5:17–6:3, 6:5–14, 8:15–15:9; 1 Cor (complete); 2 Cor (complete); Galatians (complete); Ephesians (complete); Philippians (complete); Colossians (complete); 1 Thess 1:1–2:3, 5:5–28; Hebrews 1:1–13:25',
    contentsDetail: 'The oldest near-complete collection of Pauline Epistles. Notably places Hebrews after Romans, suggesting early Pauline attribution. Missing only 2 Thessalonians, Philemon, and the Pastoral Epistles.',
    significance: 'The oldest extensive manuscript of Paul\'s letters. Its placement of Hebrews immediately after Romans (before the Corinthian correspondence) is unique and suggests an early tradition of Pauline authorship of Hebrews. Some scholars date it as early as 150 AD.',
    detailedDescription: `𝔓46 is the oldest near-complete manuscript of the Pauline Epistles and one of the most important New Testament manuscripts ever discovered. The codex originally contained approximately 104 leaves; 86 survive, with most lacunae at the beginning and end.

The most striking feature of 𝔓46 is its canonical order. Hebrews is placed directly after Romans, before the Corinthian correspondence. This differs from all later traditions and suggests that in early Egyptian Christianity, Hebrews was considered one of Paul's most important letters.

The absence of the Pastoral Epistles (1–2 Timothy, Titus) has been debated. Based on the page numbers and estimated content, there was likely not enough space at the end of the codex to include them, though some scholars dispute this.

Textually, 𝔓46 is a strong Alexandrian witness, generally agreeing with Codex Vaticanus (B) and Codex Sinaiticus (א). Its readings are foundational for modern critical editions of Paul.`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Ann_Arbor%2C_University_of_Michigan_P.Mich.inv._6238_%28Papyrus_46%29_fol._142r_-_2_Corinthians_11%2C33-12%2C9.jpg/1280px-Ann_Arbor%2C_University_of_Michigan_P.Mich.inv._6238_%28Papyrus_46%29_fol._142r_-_2_Corinthians_11%2C33-12%2C9.jpg', caption: '𝔓46 — Page from Romans', attribution: 'University of Michigan Library', license: 'Public Domain' }
    ],
    passages: [{
      title: 'Romans 8:28–30 — The Golden Chain',
      reference: 'Romans 8:28–30', notes: 'This famous passage of Pauline theology is well-preserved in 𝔓46.',
      verses: [
        { reference: 'Romans 8:28', originalText: 'οἴδαμεν δὲ ὅτι τοῖς ἀγαπῶσιν τὸν θεὸν πάντα συνεργεῖ εἰς ἀγαθόν τοῖς κατὰ πρόθεσιν κλητοῖς οὖσιν', words: [
          { original: 'οἴδαμεν', transliteration: 'oidamen', parsing: 'V-RAI-1P', gloss: 'we know', strongs: 'G1492', lemma: 'οἶδα' },
          { original: 'δὲ', transliteration: 'de', parsing: 'Conj', gloss: 'and', strongs: 'G1161', lemma: 'δέ' },
          { original: 'ὅτι', transliteration: 'hoti', parsing: 'Conj', gloss: 'that', strongs: 'G3754', lemma: 'ὅτι' },
          { original: 'τοῖς', transliteration: 'tois', parsing: 'Art-DMP', gloss: 'for those', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἀγαπῶσιν', transliteration: 'agapōsin', parsing: 'V-PAP-DMP', gloss: 'loving', strongs: 'G25', lemma: 'ἀγαπάω' },
          { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'θεὸν', transliteration: 'theon', parsing: 'N-AMS', gloss: 'God', strongs: 'G2316', lemma: 'θεός' },
          { original: 'πάντα', transliteration: 'panta', parsing: 'Adj-NNP', gloss: 'all things', strongs: 'G3956', lemma: 'πᾶς' },
          { original: 'συνεργεῖ', transliteration: 'synergei', parsing: 'V-PAI-3S', gloss: 'work together', strongs: 'G4903', lemma: 'συνεργέω' },
          { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'for', strongs: 'G1519', lemma: 'εἰς' },
          { original: 'ἀγαθόν', transliteration: 'agathon', parsing: 'Adj-ANS', gloss: 'good', strongs: 'G18', lemma: 'ἀγαθός' },
          { original: 'τοῖς', transliteration: 'tois', parsing: 'Art-DMP', gloss: 'for those', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'κατὰ', transliteration: 'kata', parsing: 'Prep', gloss: 'according to', strongs: 'G2596', lemma: 'κατά' },
          { original: 'πρόθεσιν', transliteration: 'prothesin', parsing: 'N-AFS', gloss: 'purpose', strongs: 'G4286', lemma: 'πρόθεσις' },
          { original: 'κλητοῖς', transliteration: 'klētois', parsing: 'Adj-DMP', gloss: 'called', strongs: 'G2822', lemma: 'κλητός' },
          { original: 'οὖσιν', transliteration: 'ousin', parsing: 'V-PAP-DMP', gloss: 'being', strongs: 'G1510', lemma: 'εἰμί' },
        ]},
        { reference: 'Romans 8:29', originalText: 'ὅτι οὓς προέγνω καὶ προώρισεν συμμόρφους τῆς εἰκόνος τοῦ υἱοῦ αὐτοῦ εἰς τὸ εἶναι αὐτὸν πρωτότοκον ἐν πολλοῖς ἀδελφοῖς', words: [
          { original: 'ὅτι', transliteration: 'hoti', parsing: 'Conj', gloss: 'because', strongs: 'G3754', lemma: 'ὅτι' },
          { original: 'οὓς', transliteration: 'hous', parsing: 'RelPro-AMP', gloss: 'whom', strongs: 'G3739', lemma: 'ὅς' },
          { original: 'προέγνω', transliteration: 'proegnō', parsing: 'V-2AAI-3S', gloss: 'he foreknew', strongs: 'G4267', lemma: 'προγινώσκω' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'also', strongs: 'G2532', lemma: 'καί' },
          { original: 'προώρισεν', transliteration: 'proōrisen', parsing: 'V-AAI-3S', gloss: 'he predestined', strongs: 'G4309', lemma: 'προορίζω' },
          { original: 'συμμόρφους', transliteration: 'symmorphous', parsing: 'Adj-AMP', gloss: 'conformed to', strongs: 'G4832', lemma: 'σύμμορφος' },
          { original: 'τῆς', transliteration: 'tēs', parsing: 'Art-GFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'εἰκόνος', transliteration: 'eikonos', parsing: 'N-GFS', gloss: 'image', strongs: 'G1504', lemma: 'εἰκών' },
          { original: 'τοῦ', transliteration: 'tou', parsing: 'Art-GMS', gloss: 'of the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'υἱοῦ', transliteration: 'huiou', parsing: 'N-GMS', gloss: 'Son', strongs: 'G5207', lemma: 'υἱός' },
          { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'of him', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'for', strongs: 'G1519', lemma: 'εἰς' },
          { original: 'τὸ', transliteration: 'to', parsing: 'Art-ANS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'εἶναι', transliteration: 'einai', parsing: 'V-PAN', gloss: 'to be', strongs: 'G1510', lemma: 'εἰμί' },
          { original: 'αὐτὸν', transliteration: 'auton', parsing: 'PPro-AM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'πρωτότοκον', transliteration: 'prōtotokon', parsing: 'Adj-AMS', gloss: 'firstborn', strongs: 'G4416', lemma: 'πρωτότοκος' },
          { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'among', strongs: 'G1722', lemma: 'ἐν' },
          { original: 'πολλοῖς', transliteration: 'pollois', parsing: 'Adj-DMP', gloss: 'many', strongs: 'G4183', lemma: 'πολύς' },
          { original: 'ἀδελφοῖς', transliteration: 'adelphois', parsing: 'N-DMP', gloss: 'brothers', strongs: 'G80', lemma: 'ἀδελφός' }
        ]},
        { reference: 'Romans 8:30', originalText: 'οὓς δὲ προώρισεν τούτους καὶ ἐκάλεσεν καὶ οὓς ἐκάλεσεν τούτους καὶ ἐδικαίωσεν οὓς δὲ ἐδικαίωσεν τούτους καὶ ἐδόξασεν', words: [
          { original: 'οὓς', transliteration: 'hous', parsing: 'RelPro-AMP', gloss: 'Whom', strongs: 'G3739', lemma: 'ὅς' },
          { original: 'δὲ', transliteration: 'de', parsing: 'Conj', gloss: 'now', strongs: 'G1161', lemma: 'δέ' },
          { original: 'προώρισεν', transliteration: 'proōrisen', parsing: 'V-AAI-3S', gloss: 'he predestined', strongs: 'G4309', lemma: 'προορίζω' },
          { original: 'τούτους', transliteration: 'toutous', parsing: 'DPro-AMP', gloss: 'these', strongs: 'G5128', lemma: 'οὗτος' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'also', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἐκάλεσεν', transliteration: 'ekalesen', parsing: 'V-AAI-3S', gloss: 'he called', strongs: 'G2564', lemma: 'καλέω' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'οὓς', transliteration: 'hous', parsing: 'RelPro-AMP', gloss: 'whom', strongs: 'G3739', lemma: 'ὅς' },
          { original: 'ἐκάλεσεν', transliteration: 'ekalesen', parsing: 'V-AAI-3S', gloss: 'he called', strongs: 'G2564', lemma: 'καλέω' },
          { original: 'τούτους', transliteration: 'toutous', parsing: 'DPro-AMP', gloss: 'these', strongs: 'G5128', lemma: 'οὗτος' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'also', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἐδικαίωσεν', transliteration: 'edikaiōsen', parsing: 'V-AAI-3S', gloss: 'he justified', strongs: 'G1344', lemma: 'δικαιόω' },
          { original: 'οὓς', transliteration: 'hous', parsing: 'RelPro-AMP', gloss: 'whom', strongs: 'G3739', lemma: 'ὅς' },
          { original: 'δὲ', transliteration: 'de', parsing: 'Conj', gloss: 'and', strongs: 'G1161', lemma: 'δέ' },
          { original: 'ἐδικαίωσεν', transliteration: 'edikaiōsen', parsing: 'V-AAI-3S', gloss: 'he justified', strongs: 'G1344', lemma: 'δικαιόω' },
          { original: 'τούτους', transliteration: 'toutous', parsing: 'DPro-AMP', gloss: 'these', strongs: 'G5128', lemma: 'οὗτος' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'also', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἐδόξασεν', transliteration: 'edoxasen', parsing: 'V-AAI-3S', gloss: 'he glorified', strongs: 'G1392', lemma: 'δοξάζω' }
        ]}
      ], variants: [
        { reference: 'Romans 8:28', thisReading: 'πάντα συνεργεῖ (all things work together)', majorityReading: 'ὁ θεὸς πάντα συνεργεῖ (God works all things together)', note: '𝔓46 omits "God" as subject — the subject becomes "all things" working together. This is the harder reading.' }
      ]
    }],
    bibliography: ['Kenyon, F.G. Chester Beatty Biblical Papyri. Fasciculus III Supplement: Pauline Epistles. London, 1936.'],
    relatedManuscripts: ['p45', 'p47', 'sinaiticus', 'vaticanus'],
    onlineResources: [{ label: 'University of Michigan P46 Images', url: 'https://quod.lib.umich.edu/a/apis?type=boolean&view=thumbnail&rgn1=apis_inv&q1=P.Mich.inv.+6238' }]
  },
  {
    id: 'p47',
    designation: '𝔓47 — Chester Beatty Papyrus III',
    gregoryAland: 'P47', type: 'papyrus', script: 'greek', textType: 'Alexandrian',
    date: 'c. 250–300 AD', material: 'Papyrus', dimensions: '24 × 14 cm', totalLeaves: '10 surviving (of ~32)',
    format: 'Codex', location: 'Chester Beatty Library, Dublin',
    contents: 'Revelation 9:10–11:3, 11:5–16:15',
    significance: 'The oldest substantial manuscript of the Book of Revelation. The only papyrus with extensive Revelation text.',
    detailedDescription: `𝔓47 completes the trifecta of Chester Beatty Papyri (with 𝔓45 and 𝔓46). It is the oldest extensive manuscript of the Book of Revelation, preserving about one-third of the book from the middle section.

The 10 surviving leaves contain some of the most vivid apocalyptic imagery: the sounding of the trumpets (chapters 9–11), the woman and the dragon (chapter 12), the two beasts (chapter 13), and the seven bowls of wrath (chapters 15–16).

The text generally agrees with Codex Sinaiticus (א) and Codex Alexandrinus (A) where they agree, forming a solid early Alexandrian witness for Revelation.`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Dublin%2C_Chester_Beatty_Ms_Chester_Beatty_III_Papyrus_47_fol._7r_Rev_13%2C16-14.jpg/1280px-Dublin%2C_Chester_Beatty_Ms_Chester_Beatty_III_Papyrus_47_fol._7r_Rev_13%2C16-14.jpg', caption: '𝔓47 — Page from Revelation', attribution: 'Chester Beatty Library', license: 'Public Domain' }
    ],
    passages: [{
      title: 'Revelation 13:16–18 — The Mark of the Beast',
      reference: 'Revelation 13:16–18', notes: 'This famous passage about "the number of the beast" (666) is preserved in 𝔓47.',
      verses: [
        { reference: 'Revelation 13:18', originalText: 'ὧδε ἡ σοφία ἐστίν ὁ ἔχων νοῦν ψηφισάτω τὸν ἀριθμὸν τοῦ θηρίου ἀριθμὸς γὰρ ἀνθρώπου ἐστίν καὶ ὁ ἀριθμὸς αὐτοῦ ἑξακόσιοι ἑξήκοντα ἕξ', words: [
          { original: 'ὧδε', transliteration: 'hōde', parsing: 'Adv', gloss: 'Here', strongs: 'G5602', lemma: 'ὧδε' },
          { original: 'ἡ', transliteration: 'hē', parsing: 'Art-NFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'σοφία', transliteration: 'sophia', parsing: 'N-NFS', gloss: 'wisdom', strongs: 'G4678', lemma: 'σοφία' },
          { original: 'ἐστίν', transliteration: 'estin', parsing: 'V-PAI-3S', gloss: 'is', strongs: 'G1510', lemma: 'εἰμί' },
          { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the one', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἔχων', transliteration: 'echōn', parsing: 'V-PAP-NMS', gloss: 'having', strongs: 'G2192', lemma: 'ἔχω' },
          { original: 'νοῦν', transliteration: 'noun', parsing: 'N-AMS', gloss: 'understanding', strongs: 'G3563', lemma: 'νοῦς' },
          { original: 'ψηφισάτω', transliteration: 'psēphisatō', parsing: 'V-AAM-3S', gloss: 'let him calculate', strongs: 'G5585', lemma: 'ψηφίζω' },
          { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἀριθμὸν', transliteration: 'arithmon', parsing: 'N-AMS', gloss: 'number', strongs: 'G706', lemma: 'ἀριθμός' },
          { original: 'τοῦ', transliteration: 'tou', parsing: 'Art-GNS', gloss: 'of the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'θηρίου', transliteration: 'thēriou', parsing: 'N-GNS', gloss: 'beast', strongs: 'G2342', lemma: 'θηρίον' },
          { original: 'ἀριθμὸς', transliteration: 'arithmos', parsing: 'N-NMS', gloss: 'number', strongs: 'G706', lemma: 'ἀριθμός' },
          { original: 'γὰρ', transliteration: 'gar', parsing: 'Conj', gloss: 'for', strongs: 'G1063', lemma: 'γάρ' },
          { original: 'ἀνθρώπου', transliteration: 'anthrōpou', parsing: 'N-GMS', gloss: "of a man", strongs: 'G444', lemma: 'ἄνθρωπος' },
          { original: 'ἐστίν', transliteration: 'estin', parsing: 'V-PAI-3S', gloss: 'it is', strongs: 'G1510', lemma: 'εἰμί' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἀριθμὸς', transliteration: 'arithmos', parsing: 'N-NMS', gloss: 'number', strongs: 'G706', lemma: 'ἀριθμός' },
          { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'his', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'ἑξακόσιοι', transliteration: 'hexakosioi', parsing: 'Adj-NMP', gloss: 'six hundred', strongs: 'G1812', lemma: 'ἑξακόσιοι' },
          { original: 'ἑξήκοντα', transliteration: 'hexēkonta', parsing: 'Adj-NMP', gloss: 'sixty', strongs: 'G1835', lemma: 'ἑξήκοντα' },
          { original: 'ἕξ', transliteration: 'hex', parsing: 'Adj-NMP', gloss: 'six', strongs: 'G1803', lemma: 'ἕξ' },
        ]},
      ], variants: [
        { reference: 'Rev 13:18', thisReading: 'χξϛ (666)', majorityReading: '666 (majority) vs. 616 (in some mss like P.Oxy. 4499/𝔓115)', note: '𝔓47 reads 666 (χξϛ), confirming the majority reading against the variant 616 found in 𝔓115.' }
      ]
    }],
    bibliography: ['Kenyon, F.G. Chester Beatty Biblical Papyri. Fasciculus III: Revelation. London, 1934.'],
    relatedManuscripts: ['p45', 'p46', 'sinaiticus', 'alexandrinus'],
    onlineResources: [{ label: 'Chester Beatty Library', url: 'https://chesterbeatty.ie/' }]
  },
  {
    id: 'p72',
    designation: '𝔓72 — Bodmer Papyrus VII–VIII',
    gregoryAland: 'P72', type: 'papyrus', script: 'greek', textType: 'Mixed / Independent',
    date: 'c. 300 AD (possibly 3rd century)', material: 'Papyrus',
    format: 'Codex (miscellaneous collection)', location: 'Fondation Martin Bodmer & Vatican Library',
    contents: '1 Peter (complete), 2 Peter (complete), Jude (complete) — plus non-canonical texts',
    contentsDetail: 'The codex also contains the Nativity of Mary, 11th Ode of Solomon, Psalm 33–34 (LXX), and an early Christian hymn. This miscellaneous collection provides insight into early Christian reading practices.',
    significance: 'The oldest manuscript of 1 Peter, 2 Peter, and Jude — and the only papyrus containing complete copies of these epistles. Its unique readings reveal an independent textual tradition.',
    detailedDescription: `𝔓72 is the oldest known manuscript of the Catholic Epistles of Peter and Jude. It is part of the Bodmer Papyri cache found near Dishna, Egypt.

What makes this codex unique is its contents: it is a "miscellaneous codex" containing both canonical and non-canonical texts together — 1 Peter, 2 Peter, Jude, the Nativity of Mary, a letter of Paul to the Corinthians (apocryphal), the 11th Ode of Solomon, and other texts. This reveals that in early Egyptian Christianity, the boundaries of the canon were still fluid.

The scribe appears less professional than those of 𝔓66 or 𝔓75, with numerous phonetic misspellings and errors indicating that the scribe may have been copying by dictation or was not highly literate. Despite this, the underlying text contains unique and sometimes superior readings.

In 2 Peter 1:1, 𝔓72 reads "τοῦ θεοῦ ἡμῶν καὶ σωτῆρος Ἰησοῦ Χριστοῦ" — a reading that most naturally translates as "our God and Savior Jesus Christ," directly calling Jesus "God."`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Vatican%2C_Apostolic_Library_Ms_Papyrus_Bodmer_VIII_2_%28Papyrus_72%29_Ending_of_1_Peter_-_Beginning_of_2_Peter.jpg/1280px-Vatican%2C_Apostolic_Library_Ms_Papyrus_Bodmer_VIII_2_%28Papyrus_72%29_Ending_of_1_Peter_-_Beginning_of_2_Peter.jpg', caption: '𝔓72 — Page from 1 Peter', attribution: 'Fondation Martin Bodmer', license: 'Public Domain' }
    ],
    passages: [{
      title: '1 Peter 1:1–3 — Opening Salutation',
      reference: '1 Peter 1:1–3', notes: '𝔓72 is the earliest witness to 1 Peter.',
      verses: [
        { reference: '1 Peter 1:1', originalText: 'Πέτρος ἀπόστολος Ἰησοῦ Χριστοῦ ἐκλεκτοῖς παρεπιδήμοις διασπορᾶς Πόντου Γαλατίας Καππαδοκίας Ἀσίας καὶ Βιθυνίας', words: [
          { original: 'Πέτρος', transliteration: 'Petros', parsing: 'N-NMS', gloss: 'Peter', strongs: 'G4074', lemma: 'Πέτρος' },
          { original: 'ἀπόστολος', transliteration: 'apostolos', parsing: 'N-NMS', gloss: 'an apostle', strongs: 'G652', lemma: 'ἀπόστολος' },
          { original: 'Ἰησοῦ', transliteration: 'Iēsou', parsing: 'N-GMS', gloss: 'of Jesus', strongs: 'G2424', lemma: 'Ἰησοῦς' },
          { original: 'Χριστοῦ', transliteration: 'Christou', parsing: 'N-GMS', gloss: 'Christ', strongs: 'G5547', lemma: 'Χριστός' },
          { original: 'ἐκλεκτοῖς', transliteration: 'eklektois', parsing: 'Adj-DMP', gloss: 'to the elect', strongs: 'G1588', lemma: 'ἐκλεκτός' },
          { original: 'παρεπιδήμοις', transliteration: 'parepidēmois', parsing: 'Adj-DMP', gloss: 'sojourners', strongs: 'G3927', lemma: 'παρεπίδημος' },
          { original: 'διασπορᾶς', transliteration: 'diasporas', parsing: 'N-GFS', gloss: 'of the Dispersion', strongs: 'G1290', lemma: 'διασπορά' },
          { original: 'Πόντου', transliteration: 'Pontou', parsing: 'N-GMS', gloss: 'of Pontus', strongs: 'G4195', lemma: 'Πόντος' },
          { original: 'Γαλατίας', transliteration: 'Galatias', parsing: 'N-GFS', gloss: 'Galatia', strongs: 'G1053', lemma: 'Γαλατία' },
          { original: 'Καππαδοκίας', transliteration: 'Kappadokias', parsing: 'N-GFS', gloss: 'Cappadocia', strongs: 'G2587', lemma: 'Καππαδοκία' },
          { original: 'Ἀσίας', transliteration: 'Asias', parsing: 'N-GFS', gloss: 'Asia', strongs: 'G773', lemma: 'Ἀσία' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'Βιθυνίας', transliteration: 'Bithynias', parsing: 'N-GFS', gloss: 'Bithynia', strongs: 'G978', lemma: 'Βιθυνία' },
        ]},
      ], variants: []
    }],
    bibliography: ['Testuz, Michel. Papyrus Bodmer VII–IX. Cologny-Geneva, 1959.'],
    relatedManuscripts: ['p66', 'p75', 'sinaiticus', 'vaticanus'],
    onlineResources: []
  },
];
