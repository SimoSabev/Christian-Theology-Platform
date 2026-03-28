import type { FullManuscript } from './types';

export const codexes: FullManuscript[] = [
  {
    id: 'sinaiticus',
    designation: 'Codex Sinaiticus (א / Aleph)',
    alternateName: 'Codex Sinaiticus',
    gregoryAland: '01 / א',
    type: 'uncial', script: 'greek', textType: 'Alexandrian',
    date: 'c. 330–360 AD', material: 'Vellum (parchment)', dimensions: '38.1 × 34.5 cm',
    totalLeaves: '347 surviving leaves (of ~730 original)', columns: 4, linesPerPage: '48 lines per column',
    format: 'Codex — four columns per page',
    location: 'British Library, London (main portion); Leipzig University Library; St Catherine\'s Monastery, Sinai; National Library of Russia, St Petersburg',
    discoveredBy: 'Constantin von Tischendorf', discoveryDate: '1844 & 1859',
    discoveryLocation: 'St Catherine\'s Monastery, Mount Sinai, Egypt',
    acquisitionHistory: 'Tischendorf found 43 leaves in a waste basket in 1844 (now in Leipzig). In 1859, he was shown the rest of the codex by a monk and brought it to Tsar Alexander II. The Soviet government sold it to the British Museum in 1933 for £100,000. Additional fragments were found at St Catherine\'s in 1975.',
    contents: 'Complete New Testament + Epistle of Barnabas + Shepherd of Hermas (partial); portions of the OT in Greek (LXX)',
    contentsDetail: 'The only ancient manuscript containing the complete New Testament. Also includes two early Christian texts (Barnabas and Hermas) that were considered authoritative by some early churches. The OT portion preserves significant parts of the Septuagint.',
    significance: 'One of the two oldest complete New Testament manuscripts (with Codex Vaticanus). Its discovery was one of the greatest events in biblical scholarship. As a primary witness to the Alexandrian text type, it is foundational for all modern critical editions of the Greek NT.',
    detailedDescription: `Codex Sinaiticus is one of the most important manuscripts in existence. Written in the mid-4th century, possibly in Caesarea or Alexandria, it originally contained the entire Bible in Greek — both Old and New Testaments — along with the Epistle of Barnabas and the Shepherd of Hermas.

The dramatic story of its discovery by Constantin von Tischendorf at St Catherine's Monastery is legendary. In 1844, Tischendorf noticed 43 leaves of beautiful ancient parchment in a basket destined for the fire. He visited again in 1853, finding nothing new. In 1859, under the patronage of Tsar Alexander II, a monk showed him the remainder of the codex wrapped in cloth. The complex history of its removal from the monastery remains controversial.

The manuscript is written in scriptio continua (continuous script without word breaks) using uncial (majuscule) letters. Each page has four columns of 48 lines each — an unusual layout that may imitate the column format of papyrus scrolls. The text includes nomina sacra and paragraph markers.

Three principal scribes (designated A, B, and D) copied the manuscript, with a series of later correctors making thousands of alterations over the centuries. These corrections are designated c^a, c^b, c^c, etc., and provide a window into how the text was read and emended through late antiquity and the medieval period.

Textually, Sinaiticus is the leading representative of the Alexandrian text type in the NT. Along with Codex Vaticanus, it forms the backbone of the modern critical text (NA28/UBS5). Notable features include the absence of Mark 16:9-20 (the "longer ending of Mark") and John 7:53–8:11 (the Pericope Adulterae).`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Sinaiticus_text.jpg', caption: 'Codex Sinaiticus — Open pages showing four-column layout', attribution: 'British Library', license: 'Public Domain' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Codex_Sinaiticus_Matthew_6%2C4-32.JPG', caption: 'Codex Sinaiticus — Matthew 6', attribution: 'British Library', license: 'CC BY 4.0' },
    ],
    passages: [{
      title: 'Matthew 6:9–13 — The Lord\'s Prayer',
      reference: 'Matthew 6:9–13', notes: 'Sinaiticus\'s text of the Lord\'s Prayer notably lacks the doxology ("For thine is the kingdom...") found in later Byzantine manuscripts.',
      verses: [
        { reference: 'Matthew 6:9', originalText: 'Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς ἁγιασθήτω τὸ ὄνομά σου', words: [
          { original: 'Πάτερ', transliteration: 'Pater', parsing: 'N-VMS', gloss: 'Father', strongs: 'G3962', lemma: 'πατήρ' },
          { original: 'ἡμῶν', transliteration: 'hēmōn', parsing: 'PPro-G1P', gloss: 'our', strongs: 'G2257', lemma: 'ἐγώ' },
          { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the one', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'in', strongs: 'G1722', lemma: 'ἐν' },
          { original: 'τοῖς', transliteration: 'tois', parsing: 'Art-DMP', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'οὐρανοῖς', transliteration: 'ouranois', parsing: 'N-DMP', gloss: 'heavens', strongs: 'G3772', lemma: 'οὐρανός' },
          { original: 'ἁγιασθήτω', transliteration: 'hagiasthētō', parsing: 'V-APM-3S', gloss: 'let be hallowed', strongs: 'G37', lemma: 'ἁγιάζω' },
          { original: 'τὸ', transliteration: 'to', parsing: 'Art-NNS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ὄνομά', transliteration: 'onoma', parsing: 'N-NNS', gloss: 'name', strongs: 'G3686', lemma: 'ὄνομα' },
          { original: 'σου', transliteration: 'sou', parsing: 'PPro-G2S', gloss: 'your', strongs: 'G4771', lemma: 'σύ' },
        ]},
        { reference: 'Matthew 6:10', originalText: 'ἐλθέτω ἡ βασιλεία σου γενηθήτω τὸ θέλημά σου ὡς ἐν οὐρανῷ καὶ ἐπὶ γῆς', words: [
          { original: 'ἐλθέτω', transliteration: 'elthetō', parsing: 'V-2AAM-3S', gloss: 'let come', strongs: 'G2064', lemma: 'ἔρχομαι' },
          { original: 'ἡ', transliteration: 'hē', parsing: 'Art-NFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'βασιλεία', transliteration: 'basileia', parsing: 'N-NFS', gloss: 'kingdom', strongs: 'G932', lemma: 'βασιλεία' },
          { original: 'σου', transliteration: 'sou', parsing: 'PPro-G2S', gloss: 'your', strongs: 'G4771', lemma: 'σύ' },
          { original: 'γενηθήτω', transliteration: 'genēthētō', parsing: 'V-AOM-3S', gloss: 'let be done', strongs: 'G1096', lemma: 'γίνομαι' },
          { original: 'τὸ', transliteration: 'to', parsing: 'Art-NNS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'θέλημά', transliteration: 'thelēma', parsing: 'N-NNS', gloss: 'will', strongs: 'G2307', lemma: 'θέλημα' },
          { original: 'σου', transliteration: 'sou', parsing: 'PPro-G2S', gloss: 'your', strongs: 'G4771', lemma: 'σύ' },
          { original: 'ὡς', transliteration: 'hōs', parsing: 'Adv', gloss: 'as', strongs: 'G5613', lemma: 'ὡς' },
          { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'in', strongs: 'G1722', lemma: 'ἐν' },
          { original: 'οὐρανῷ', transliteration: 'ouranō', parsing: 'N-DMS', gloss: 'heaven', strongs: 'G3772', lemma: 'οὐρανός' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'also', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἐπὶ', transliteration: 'epi', parsing: 'Prep', gloss: 'on', strongs: 'G1909', lemma: 'ἐπί' },
          { original: 'γῆς', transliteration: 'gēs', parsing: 'N-GFS', gloss: 'earth', strongs: 'G1093', lemma: 'γῆ' },
        ]},
        { reference: 'Matthew 6:11', originalText: 'τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον', words: [
          { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἄρτον', transliteration: 'arton', parsing: 'N-AMS', gloss: 'bread', strongs: 'G740', lemma: 'ἄρτος' },
          { original: 'ἡμῶν', transliteration: 'hēmōn', parsing: 'PPro-G1P', gloss: 'our', strongs: 'G2257', lemma: 'ἐγώ' },
          { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἐπιούσιον', transliteration: 'epiousion', parsing: 'Adj-AMS', gloss: 'daily', strongs: 'G1967', lemma: 'ἐπιούσιος' },
          { original: 'δὸς', transliteration: 'dos', parsing: 'V-2AAM-2S', gloss: 'give', strongs: 'G1325', lemma: 'δίδωμι' },
          { original: 'ἡμῖν', transliteration: 'hēmin', parsing: 'PPro-D1P', gloss: 'us', strongs: 'G2254', lemma: 'ἐγώ' },
          { original: 'σήμερον', transliteration: 'sēmeron', parsing: 'Adv', gloss: 'today', strongs: 'G4594', lemma: 'σήμερον' },
        ]},
        { reference: 'Matthew 6:12', originalText: 'καὶ ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν ὡς καὶ ἡμεῖς ἀφήκαμεν τοῖς ὀφειλέταις ἡμῶν', words: [
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἄφες', transliteration: 'aphes', parsing: 'V-2AAM-2S', gloss: 'forgive', strongs: 'G863', lemma: 'ἀφίημι' },
          { original: 'ἡμῖν', transliteration: 'hēmin', parsing: 'PPro-D1P', gloss: 'us', strongs: 'G2254', lemma: 'ἐγώ' },
          { original: 'τὰ', transliteration: 'ta', parsing: 'Art-ANP', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ὀφειλήματα', transliteration: 'opheilēmata', parsing: 'N-ANP', gloss: 'debts', strongs: 'G3783', lemma: 'ὀφείλημα' },
          { original: 'ἡμῶν', transliteration: 'hēmōn', parsing: 'PPro-G1P', gloss: 'our', strongs: 'G2257', lemma: 'ἐγώ' },
          { original: 'ὡς', transliteration: 'hōs', parsing: 'Adv', gloss: 'as', strongs: 'G5613', lemma: 'ὡς' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'also', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἡμεῖς', transliteration: 'hēmeis', parsing: 'PPro-N1P', gloss: 'we', strongs: 'G2249', lemma: 'ἡμεῖς' },
          { original: 'ἀφήκαμεν', transliteration: 'aphēkamen', parsing: 'V-AAI-1P', gloss: 'have forgiven', strongs: 'G863', lemma: 'ἀφίημι' },
          { original: 'τοῖς', transliteration: 'tois', parsing: 'Art-DMP', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ὀφειλέταις', transliteration: 'opheiletais', parsing: 'N-DMP', gloss: 'debtors', strongs: 'G3781', lemma: 'ὀφειλέτης' },
          { original: 'ἡμῶν', transliteration: 'hēmōn', parsing: 'PPro-G1P', gloss: 'our', strongs: 'G2257', lemma: 'ἐγώ' },
        ]},
        { reference: 'Matthew 6:13', originalText: 'καὶ μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ', words: [
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'μὴ', transliteration: 'mē', parsing: 'Adv', gloss: 'not', strongs: 'G3361', lemma: 'μή' },
          { original: 'εἰσενέγκῃς', transliteration: 'eisenenkēs', parsing: 'V-AAS-2S', gloss: 'lead', strongs: 'G1521', lemma: 'εἰσφέρω' },
          { original: 'ἡμᾶς', transliteration: 'hēmas', parsing: 'PPro-A1P', gloss: 'us', strongs: 'G2248', lemma: 'ἡμεῖς' },
          { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'into', strongs: 'G1519', lemma: 'εἰς' },
          { original: 'πειρασμόν', transliteration: 'peirasmon', parsing: 'N-AMS', gloss: 'temptation', strongs: 'G3986', lemma: 'πειρασμός' },
          { original: 'ἀλλὰ', transliteration: 'alla', parsing: 'Conj', gloss: 'but', strongs: 'G235', lemma: 'ἀλλά' },
          { original: 'ῥῦσαι', transliteration: 'rhysai', parsing: 'V-AMM-2S', gloss: 'deliver', strongs: 'G4506', lemma: 'ῥύομαι' },
          { original: 'ἡμᾶς', transliteration: 'hēmas', parsing: 'PPro-A1P', gloss: 'us', strongs: 'G2248', lemma: 'ἡμεῖς' },
          { original: 'ἀπὸ', transliteration: 'apo', parsing: 'Prep', gloss: 'from', strongs: 'G575', lemma: 'ἀπό' },
          { original: 'τοῦ', transliteration: 'tou', parsing: 'Art-GNS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'πονηροῦ', transliteration: 'ponērou', parsing: 'Adj-GNS', gloss: 'evil one', strongs: 'G4190', lemma: 'πονηρός' },
        ]},
      ],
      variants: [
        { reference: 'Matt 6:13', thisReading: 'Ends with "deliver us from evil" (no doxology)', majorityReading: 'ὅτι σοῦ ἐστιν ἡ βασιλεία... (For thine is the kingdom...)', note: 'Sinaiticus lacks the doxology, supporting the critical text. The doxology is a liturgical addition found in later Byzantine manuscripts.' },
        { reference: 'Mark 16:9-20', thisReading: 'ABSENT — Mark ends at 16:8', majorityReading: 'Includes the "Longer Ending" (16:9-20)', note: 'Sinaiticus ends Mark at 16:8 ("for they were afraid"), the strongest evidence that the original Mark ended here.' },
      ]
    }],
    bibliography: [
      'Tischendorf, Constantin von. Codex Sinaiticus. Leipzig, 1862.',
      'Milne, H.J.M. and T.C. Skeat. Scribes and Correctors of the Codex Sinaiticus. London: British Museum, 1938.',
      'Parker, D.C. Codex Sinaiticus: The Story of the World\'s Oldest Bible. London: British Library, 2010.',
    ],
    relatedManuscripts: ['vaticanus', 'alexandrinus', 'p75'],
    onlineResources: [
      { label: 'Codex Sinaiticus Project — Full Digital Facsimile', url: 'https://codexsinaiticus.org/' },
      { label: 'British Library Digitised Manuscripts', url: 'https://www.bl.uk/collection-items/codex-sinaiticus' },
    ]
  },
  {
    id: 'vaticanus',
    designation: 'Codex Vaticanus (B)',
    gregoryAland: '03 / B',
    type: 'uncial', script: 'greek', textType: 'Alexandrian',
    date: 'c. 300–325 AD', material: 'Vellum (parchment)', dimensions: '27 × 27 cm',
    totalLeaves: '759 leaves', columns: 3, linesPerPage: '42 lines per column',
    format: 'Codex — three columns per page',
    location: 'Vatican Library, Rome (Vat. gr. 1209)',
    discoveredBy: 'Unknown — has been in the Vatican Library since at least 1481',
    discoveryDate: 'First catalogued in 1475',
    acquisitionHistory: 'Listed in the earliest Vatican Library catalogue (1475). Its origin is uncertain — possibly produced in Caesarea, Alexandria, or Rome. Pope Sixtus V refused to let scholars fully examine it for centuries.',
    contents: 'Nearly complete Greek Bible: Genesis – Hebrews 9:14 (lacks Gen 1–46:28, Psalms 105–137, Heb 9:14–Revelation, and the Pastoral Epistles)',
    significance: 'Generally considered the single most important manuscript for establishing the original text of the New Testament. Along with P75, it represents the purest form of the Alexandrian text tradition. Most scholars regard it as slightly superior to Sinaiticus in textual quality.',
    detailedDescription: `Codex Vaticanus is widely regarded by textual critics as the most important single manuscript of the Greek Bible. Written in the early 4th century, it contains nearly the entire text of the Greek Old Testament (Septuagint) and New Testament.

The manuscript is written in a small, elegant uncial hand across three columns per page. The script shows characteristics consistent with a 4th-century date. A later scribe (perhaps 10th–11th century) retraced the fading letters, making paleographic analysis of the original hand more difficult.

Like Sinaiticus, Vaticanus lacks Mark 16:9-20 and John 7:53–8:11. But it also has a unique scribal note: after Mark 16:8, the scribe has left a blank column — the only part of the manuscript where this happens. This strongly suggests the scribe knew of the longer ending but deliberately chose not to include it.

The text of Vaticanus is exceptionally close to 𝔓75 (c. 200 AD), demonstrating that its textual tradition was faithfully preserved for over a century.

Despite its recognized importance, Vaticanus was inaccessible to most scholars for centuries due to Vatican restrictions. Tischendorf was only allowed to examine it for 14 hours in 1843. It was not fully published in a facsimile until 1889–1890.`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Codex_Vaticanus_B%2C_2Thess._3%2C11-18%2C_Hebr._1%2C1-2%2C2.jpg', caption: 'Codex Vaticanus — 2 Thessalonians/Hebrews', attribution: 'Vatican Library', license: 'Public Domain' },
    ],
    passages: [{
      title: 'John 1:1–14 — The Logos Prologue',
      reference: 'John 1:1–14', notes: 'Vaticanus preserves this theologically critical passage. Its text is virtually identical to P75.',
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
          { original: 'λόγος', transliteration: 'logos', parsing: 'N-NMS', gloss: 'Word', strongs: 'G3056', lemma: 'λόγος' }
        ]},
        { reference: 'John 1:2', originalText: 'οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν θεόν', words: [
          { original: 'οὗτος', transliteration: 'houtos', parsing: 'DPro-NMS', gloss: 'This one', strongs: 'G3778', lemma: 'οὗτος' },
          { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
          { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'in', strongs: 'G1722', lemma: 'ἐν' },
          { original: 'ἀρχῇ', transliteration: 'archē', parsing: 'N-DFS', gloss: 'the beginning', strongs: 'G746', lemma: 'ἀρχή' },
          { original: 'πρὸς', transliteration: 'pros', parsing: 'Prep', gloss: 'with', strongs: 'G4314', lemma: 'πρός' },
          { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'θεόν', transliteration: 'theon', parsing: 'N-AMS', gloss: 'God', strongs: 'G2316', lemma: 'θεός' }
        ]},
        { reference: 'John 1:3', originalText: 'πάντα δι᾽ αὐτοῦ ἐγένετο καὶ χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν ὃ γέγονεν', words: [
          { original: 'πάντα', transliteration: 'panta', parsing: 'Adj-NNP', gloss: 'All things', strongs: 'G3956', lemma: 'πᾶς' },
          { original: 'δι᾽', transliteration: "di'", parsing: 'Prep', gloss: 'through', strongs: 'G1223', lemma: 'διά' },
          { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'ἐγένετο', transliteration: 'egeneto', parsing: 'V-2ADI-3S', gloss: 'came into being', strongs: 'G1096', lemma: 'γίνομαι' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'χωρὶς', transliteration: 'chōris', parsing: 'Prep', gloss: 'apart from', strongs: 'G5565', lemma: 'χωρίς' },
          { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'ἐγένετο', transliteration: 'egeneto', parsing: 'V-2ADI-3S', gloss: 'came into being', strongs: 'G1096', lemma: 'γίνομαι' },
          { original: 'οὐδὲ', transliteration: 'oude', parsing: 'Adv', gloss: 'not even', strongs: 'G3761', lemma: 'οὐδέ' },
          { original: 'ἕν', transliteration: 'hen', parsing: 'Adj-NNS', gloss: 'one thing', strongs: 'G1520', lemma: 'εἷς' },
          { original: 'ὃ', transliteration: 'ho', parsing: 'RelPro-NNS', gloss: 'that', strongs: 'G3739', lemma: 'ὅς' },
          { original: 'γέγονεν', transliteration: 'gegonen', parsing: 'V-2RAI-3S', gloss: 'has come into being', strongs: 'G1096', lemma: 'γίνομαι' }
        ]},
        { reference: 'John 1:4', originalText: 'ἐν αὐτῷ ζωὴ ἦν καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων', words: [
          { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'In', strongs: 'G1722', lemma: 'ἐν' },
          { original: 'αὐτῷ', transliteration: 'autō', parsing: 'PPro-DM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'ζωὴ', transliteration: 'zōē', parsing: 'N-NFS', gloss: 'life', strongs: 'G2222', lemma: 'ζωή' },
          { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἡ', transliteration: 'hē', parsing: 'Art-NFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ζωὴ', transliteration: 'zōē', parsing: 'N-NFS', gloss: 'life', strongs: 'G2222', lemma: 'ζωή' },
          { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
          { original: 'τὸ', transliteration: 'to', parsing: 'Art-NNS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'φῶς', transliteration: 'phōs', parsing: 'N-NNS', gloss: 'light', strongs: 'G5457', lemma: 'φῶς' },
          { original: 'τῶν', transliteration: 'tōn', parsing: 'Art-GMP', gloss: 'of', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἀνθρώπων', transliteration: 'anthrōpōn', parsing: 'N-GMP', gloss: 'men', strongs: 'G444', lemma: 'ἄνθρωπος' }
        ]},
        { reference: 'John 1:5', originalText: 'καὶ τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν', words: [
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'And', strongs: 'G2532', lemma: 'καί' },
          { original: 'τὸ', transliteration: 'to', parsing: 'Art-NNS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'φῶς', transliteration: 'phōs', parsing: 'N-NNS', gloss: 'light', strongs: 'G5457', lemma: 'φῶς' },
          { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'in', strongs: 'G1722', lemma: 'ἐν' },
          { original: 'τῇ', transliteration: 'tē', parsing: 'Art-DFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'σκοτίᾳ', transliteration: 'skotia', parsing: 'N-DFS', gloss: 'darkness', strongs: 'G4653', lemma: 'σκοτία' },
          { original: 'φαίνει', transliteration: 'phainei', parsing: 'V-PAI-3S', gloss: 'shines', strongs: 'G5316', lemma: 'φαίνω' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἡ', transliteration: 'hē', parsing: 'Art-NFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'σκοτία', transliteration: 'skotia', parsing: 'N-NFS', gloss: 'darkness', strongs: 'G4653', lemma: 'σκοτία' },
          { original: 'αὐτὸ', transliteration: 'auto', parsing: 'PPro-AN3S', gloss: 'it', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'οὐ', transliteration: 'ou', parsing: 'Adv', gloss: 'not', strongs: 'G3756', lemma: 'οὐ' },
          { original: 'κατέλαβεν', transliteration: 'katelaben', parsing: 'V-2AAI-3S', gloss: 'overcome', strongs: 'G2638', lemma: 'καταλαμβάνω' }
        ]},
        { reference: 'John 1:6', originalText: 'Ἐγένετο ἄνθρωπος ἀπεσταλμένος παρὰ θεοῦ ὄνομα αὐτῷ Ἰωάννης', words: [
          { original: 'Ἐγένετο', transliteration: 'Egeneto', parsing: 'V-2ADI-3S', gloss: 'There came', strongs: 'G1096', lemma: 'γίνομαι' },
          { original: 'ἄνθρωπος', transliteration: 'anthrōpos', parsing: 'N-NMS', gloss: 'a man', strongs: 'G444', lemma: 'ἄνθρωπος' },
          { original: 'ἀπεσταλμένος', transliteration: 'apestalmenos', parsing: 'V-RPP-NMS', gloss: 'having been sent', strongs: 'G649', lemma: 'ἀποστέλλω' },
          { original: 'παρὰ', transliteration: 'para', parsing: 'Prep', gloss: 'from', strongs: 'G3844', lemma: 'παρά' },
          { original: 'θεοῦ', transliteration: 'theou', parsing: 'N-GMS', gloss: 'God', strongs: 'G2316', lemma: 'θεός' },
          { original: 'ὄνομα', transliteration: 'onoma', parsing: 'N-NNS', gloss: 'whose name', strongs: 'G3686', lemma: 'ὄνομα' },
          { original: 'αὐτῷ', transliteration: 'autō', parsing: 'PPro-DM3S', gloss: 'was', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'Ἰωάννης', transliteration: 'Iōannēs', parsing: 'N-NMS', gloss: 'John', strongs: 'G2491', lemma: 'Ἰωάννης' }
        ]},
        { reference: 'John 1:7', originalText: 'οὗτος ἦλθεν εἰς μαρτυρίαν ἵνα μαρτυρήσῃ περὶ τοῦ φωτός ἵνα πάντες πιστεύσωσιν δι’ αὐτοῦ', words: [
          { original: 'οὗτος', transliteration: 'houtos', parsing: 'DPro-NMS', gloss: 'This one', strongs: 'G3778', lemma: 'οὗτος' },
          { original: 'ἦλθεν', transliteration: 'ēlthen', parsing: 'V-2AAI-3S', gloss: 'came', strongs: 'G2064', lemma: 'ἔρχομαι' },
          { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'for', strongs: 'G1519', lemma: 'εἰς' },
          { original: 'μαρτυρίαν', transliteration: 'martyrian', parsing: 'N-AFS', gloss: 'a witness', strongs: 'G3141', lemma: 'μαρτυρία' },
          { original: 'ἵνα', transliteration: 'hina', parsing: 'Conj', gloss: 'that', strongs: 'G2443', lemma: 'ἵνα' },
          { original: 'μαρτυρήσῃ', transliteration: 'martyrēsē', parsing: 'V-AAS-3S', gloss: 'he might testify', strongs: 'G3140', lemma: 'μαρτυρέω' },
          { original: 'περὶ', transliteration: 'peri', parsing: 'Prep', gloss: 'concerning', strongs: 'G4012', lemma: 'περί' },
          { original: 'τοῦ', transliteration: 'tou', parsing: 'Art-GNS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'φωτός', transliteration: 'phōtos', parsing: 'N-GNS', gloss: 'light', strongs: 'G5457', lemma: 'φῶς' },
          { original: 'ἵνα', transliteration: 'hina', parsing: 'Conj', gloss: 'so that', strongs: 'G2443', lemma: 'ἵνα' },
          { original: 'πάντες', transliteration: 'pantes', parsing: 'Adj-NMP', gloss: 'all', strongs: 'G3956', lemma: 'πᾶς' },
          { original: 'πιστεύσωσιν', transliteration: 'pisteusōsin', parsing: 'V-AAS-3P', gloss: 'might believe', strongs: 'G4100', lemma: 'πιστεύω' },
          { original: 'δι’', transliteration: "di'", parsing: 'Prep', gloss: 'through', strongs: 'G1223', lemma: 'διά' },
          { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' }
        ]},
        { reference: 'John 1:8', originalText: 'οὐκ ἦν ἐκεῖνος τὸ φῶς ἀλλ’ ἵνα μαρτυρήσῃ περὶ τοῦ φωτός', words: [
          { original: 'οὐκ', transliteration: 'ouk', parsing: 'Adv', gloss: 'Not', strongs: 'G3756', lemma: 'οὐ' },
          { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
          { original: 'ἐκεῖνος', transliteration: 'ekeinos', parsing: 'DPro-NMS', gloss: 'he', strongs: 'G1565', lemma: 'ἐκεῖνος' },
          { original: 'τὸ', transliteration: 'to', parsing: 'Art-NNS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'φῶς', transliteration: 'phōs', parsing: 'N-NNS', gloss: 'light', strongs: 'G5457', lemma: 'φῶς' },
          { original: 'ἀλλ’', transliteration: "all'", parsing: 'Conj', gloss: 'but', strongs: 'G235', lemma: 'ἀλλά' },
          { original: 'ἵνα', transliteration: 'hina', parsing: 'Conj', gloss: 'that', strongs: 'G2443', lemma: 'ἵνα' },
          { original: 'μαρτυρήσῃ', transliteration: 'martyrēsē', parsing: 'V-AAS-3S', gloss: 'he might testify', strongs: 'G3140', lemma: 'μαρτυρέω' },
          { original: 'περὶ', transliteration: 'peri', parsing: 'Prep', gloss: 'concerning', strongs: 'G4012', lemma: 'περί' },
          { original: 'τοῦ', transliteration: 'tou', parsing: 'Art-GNS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'φωτός', transliteration: 'phōtos', parsing: 'N-GNS', gloss: 'light', strongs: 'G5457', lemma: 'φῶς' }
        ]},
        { reference: 'John 1:9', originalText: 'Ἦν τὸ φῶς τὸ ἀληθινόν ὃ φωτίζει πάντα ἄνθρωπον ἐρχόμενον εἰς τὸν κόσμον', words: [
          { original: 'Ἦν', transliteration: 'Ēn', parsing: 'V-IAI-3S', gloss: 'The true light was', strongs: 'G1510', lemma: 'εἰμί' },
          { original: 'τὸ', transliteration: 'to', parsing: 'Art-NNS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'φῶς', transliteration: 'phōs', parsing: 'N-NNS', gloss: 'light', strongs: 'G5457', lemma: 'φῶς' },
          { original: 'τὸ', transliteration: 'to', parsing: 'Art-NNS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἀληθινόν', transliteration: 'alēthinon', parsing: 'Adj-NNS', gloss: 'true', strongs: 'G228', lemma: 'ἀληθινός' },
          { original: 'ὃ', transliteration: 'ho', parsing: 'RelPro-NNS', gloss: 'which', strongs: 'G3739', lemma: 'ὅς' },
          { original: 'φωτίζει', transliteration: 'phōtizei', parsing: 'V-PAI-3S', gloss: 'enlightens', strongs: 'G5461', lemma: 'φωτίζω' },
          { original: 'πάντα', transliteration: 'panta', parsing: 'Adj-AMS', gloss: 'every', strongs: 'G3956', lemma: 'πᾶς' },
          { original: 'ἄνθρωπον', transliteration: 'anthrōpon', parsing: 'N-AMS', gloss: 'man', strongs: 'G444', lemma: 'ἄνθρωπος' },
          { original: 'ἐρχόμενον', transliteration: 'erchomenon', parsing: 'V-PNP-AMS', gloss: 'coming', strongs: 'G2064', lemma: 'ἔρχομαι' },
          { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'into', strongs: 'G1519', lemma: 'εἰς' },
          { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'κόσμον', transliteration: 'kosmon', parsing: 'N-AMS', gloss: 'world', strongs: 'G2889', lemma: 'κόσμος' }
        ]},
        { reference: 'John 1:10', originalText: 'ἐν τῷ κόσμῳ ἦν καὶ ὁ κόσμος δι’ αὐτοῦ ἐγένετο καὶ ὁ κόσμος αὐτὸν οὐκ ἔγνω', words: [
          { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'In', strongs: 'G1722', lemma: 'ἐν' },
          { original: 'τῷ', transliteration: 'tō', parsing: 'Art-DMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'κόσμῳ', transliteration: 'kosmō', parsing: 'N-DMS', gloss: 'world', strongs: 'G2889', lemma: 'κόσμος' },
          { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'he was', strongs: 'G1510', lemma: 'εἰμί' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'κόσμος', transliteration: 'kosmos', parsing: 'N-NMS', gloss: 'world', strongs: 'G2889', lemma: 'κόσμος' },
          { original: 'δι’', transliteration: "di'", parsing: 'Prep', gloss: 'through', strongs: 'G1223', lemma: 'διά' },
          { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'ἐγένετο', transliteration: 'egeneto', parsing: 'V-2ADI-3S', gloss: 'was made', strongs: 'G1096', lemma: 'γίνομαι' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'κόσμος', transliteration: 'kosmos', parsing: 'N-NMS', gloss: 'world', strongs: 'G2889', lemma: 'κόσμος' },
          { original: 'αὐτὸν', transliteration: 'auton', parsing: 'PPro-AM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'οὐκ', transliteration: 'ouk', parsing: 'Adv', gloss: 'not', strongs: 'G3756', lemma: 'οὐ' },
          { original: 'ἔγνω', transliteration: 'egnō', parsing: 'V-2AAI-3S', gloss: 'knew', strongs: 'G1097', lemma: 'γινώσκω' }
        ]},
        { reference: 'John 1:11', originalText: 'εἰς τὰ ἴδια ἦλθεν καὶ οἱ ἴδιοι αὐτὸν οὐ παρέλαβον', words: [
          { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'To', strongs: 'G1519', lemma: 'εἰς' },
          { original: 'τὰ', transliteration: 'ta', parsing: 'Art-ANP', gloss: 'his', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἴδια', transliteration: 'idia', parsing: 'Adj-ANP', gloss: 'own things', strongs: 'G2398', lemma: 'ἴδιος' },
          { original: 'ἦλθεν', transliteration: 'ēlthen', parsing: 'V-2AAI-3S', gloss: 'he came', strongs: 'G2064', lemma: 'ἔρχομαι' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'οἱ', transliteration: 'hoi', parsing: 'Art-NMP', gloss: 'his', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ἴδιοι', transliteration: 'idioi', parsing: 'Adj-NMP', gloss: 'own people', strongs: 'G2398', lemma: 'ἴδιος' },
          { original: 'αὐτὸν', transliteration: 'auton', parsing: 'PPro-AM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'οὐ', transliteration: 'ou', parsing: 'Adv', gloss: 'not', strongs: 'G3756', lemma: 'οὐ' },
          { original: 'παρέλαβον', transliteration: 'parelabon', parsing: 'V-2AAI-3P', gloss: 'received', strongs: 'G3880', lemma: 'παραλαμβάνω' }
        ]},
        { reference: 'John 1:12', originalText: 'ὅσοι δὲ ἔλαβον αὐτόν ἔδωκεν αὐτοῖς ἐξουσίαν τέκνα θεοῦ γενέσθαι τοῖς πιστεύουσιν εἰς τὸ ὄνομα αὐτοῦ', words: [
          { original: 'ὅσοι', transliteration: 'hosoi', parsing: 'RelPro-NMP', gloss: 'As many as', strongs: 'G3745', lemma: 'ὅσος' },
          { original: 'δὲ', transliteration: 'de', parsing: 'Conj', gloss: 'however', strongs: 'G1161', lemma: 'δέ' },
          { original: 'ἔλαβον', transliteration: 'elabon', parsing: 'V-2AAI-3P', gloss: 'received', strongs: 'G2983', lemma: 'λαμβάνω' },
          { original: 'αὐτόν', transliteration: 'auton', parsing: 'PPro-AM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'ἔδωκεν', transliteration: 'edōken', parsing: 'V-AAI-3S', gloss: 'he gave', strongs: 'G1325', lemma: 'δίδωμι' },
          { original: 'αὐτοῖς', transliteration: 'autois', parsing: 'PPro-DMP', gloss: 'to them', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'ἐξουσίαν', transliteration: 'exousian', parsing: 'N-AFS', gloss: 'authority', strongs: 'G1849', lemma: 'ἐξουσία' },
          { original: 'τέκνα', transliteration: 'tekna', parsing: 'N-ANP', gloss: 'children', strongs: 'G5043', lemma: 'τέκνον' },
          { original: 'θεοῦ', transliteration: 'theou', parsing: 'N-GMS', gloss: 'of God', strongs: 'G2316', lemma: 'θεός' },
          { original: 'γενέσθαι', transliteration: 'genesthai', parsing: 'V-2ADN', gloss: 'to become', strongs: 'G1096', lemma: 'γίνομαι' },
          { original: 'τοῖς', transliteration: 'tois', parsing: 'Art-DMP', gloss: 'to those', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'πιστεύουσιν', transliteration: 'pisteuousin', parsing: 'V-PAP-DMP', gloss: 'believing', strongs: 'G4100', lemma: 'πιστεύω' },
          { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'in', strongs: 'G1519', lemma: 'εἰς' },
          { original: 'τὸ', transliteration: 'to', parsing: 'Art-ANS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'ὄνομα', transliteration: 'onoma', parsing: 'N-ANS', gloss: 'name', strongs: 'G3686', lemma: 'ὄνομα' },
          { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'of him', strongs: 'G846', lemma: 'αὐτός' }
        ]},
        { reference: 'John 1:13', originalText: 'οἳ οὐκ ἐξ αἱμάτων οὐδὲ ἐκ θελήματος σαρκὸς οὐδὲ ἐκ θελήματος ἀνδρὸς ἀλλ’ ἐκ θεοῦ ἐγεννήθησαν', words: [
          { original: 'οἳ', transliteration: 'hoi', parsing: 'RelPro-NMP', gloss: 'who', strongs: 'G3739', lemma: 'ὅς' },
          { original: 'οὐκ', transliteration: 'ouk', parsing: 'Adv', gloss: 'not', strongs: 'G3756', lemma: 'οὐ' },
          { original: 'ἐξ', transliteration: 'ex', parsing: 'Prep', gloss: 'of', strongs: 'G1537', lemma: 'ἐκ' },
          { original: 'αἱμάτων', transliteration: 'haimatōn', parsing: 'N-GNP', gloss: 'blood', strongs: 'G129', lemma: 'αἷμα' },
          { original: 'οὐδὲ', transliteration: 'oude', parsing: 'Conj', gloss: 'nor', strongs: 'G3761', lemma: 'οὐδέ' },
          { original: 'ἐκ', transliteration: 'ek', parsing: 'Prep', gloss: 'of', strongs: 'G1537', lemma: 'ἐκ' },
          { original: 'θελήματος', transliteration: 'thelēmatos', parsing: 'N-GNS', gloss: 'the will', strongs: 'G2307', lemma: 'θέλημα' },
          { original: 'σαρκὸς', transliteration: 'sarkos', parsing: 'N-GFS', gloss: 'of the flesh', strongs: 'G4561', lemma: 'σάρξ' },
          { original: 'οὐδὲ', transliteration: 'oude', parsing: 'Conj', gloss: 'nor', strongs: 'G3761', lemma: 'οὐδέ' },
          { original: 'ἐκ', transliteration: 'ek', parsing: 'Prep', gloss: 'of', strongs: 'G1537', lemma: 'ἐκ' },
          { original: 'θελήματος', transliteration: 'thelēmatos', parsing: 'N-GNS', gloss: 'the will', strongs: 'G2307', lemma: 'θέλημα' },
          { original: 'ἀνδρὸς', transliteration: 'andros', parsing: 'N-GMS', gloss: 'of man', strongs: 'G435', lemma: 'ἀνήρ' },
          { original: 'ἀλλ’', transliteration: "all'", parsing: 'Conj', gloss: 'but', strongs: 'G235', lemma: 'ἀλλά' },
          { original: 'ἐκ', transliteration: 'ek', parsing: 'Prep', gloss: 'of', strongs: 'G1537', lemma: 'ἐκ' },
          { original: 'θεοῦ', transliteration: 'theou', parsing: 'N-GMS', gloss: 'God', strongs: 'G2316', lemma: 'θεός' },
          { original: 'ἐγεννήθησαν', transliteration: 'egennēthēsan', parsing: 'V-API-3P', gloss: 'were born', strongs: 'G1080', lemma: 'γεννάω' }
        ]},
        { reference: 'John 1:14', originalText: 'Καὶ ὁ λόγος σὰρξ ἐγένετο καὶ ἐσκήνωσεν ἐν ἡμῖν καὶ ἐθεασάμεθα τὴν δόξαν αὐτοῦ δόξαν ὡς μονογενοῦς παρὰ πατρός πλήρης χάριτος καὶ ἀληθείας', words: [
          { original: 'Καὶ', transliteration: 'Kai', parsing: 'Conj', gloss: 'And', strongs: 'G2532', lemma: 'καί' },
          { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'λόγος', transliteration: 'logos', parsing: 'N-NMS', gloss: 'Word', strongs: 'G3056', lemma: 'λόγος' },
          { original: 'σὰρξ', transliteration: 'sarx', parsing: 'N-NFS', gloss: 'flesh', strongs: 'G4561', lemma: 'σάρξ' },
          { original: 'ἐγένετο', transliteration: 'egeneto', parsing: 'V-2ADI-3S', gloss: 'became', strongs: 'G1096', lemma: 'γίνομαι' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἐσκήνωσεν', transliteration: 'eskēnōsen', parsing: 'V-AAI-3S', gloss: 'dwelt', strongs: 'G4637', lemma: 'σκηνόω' },
          { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'among', strongs: 'G1722', lemma: 'ἐν' },
          { original: 'ἡμῖν', transliteration: 'hēmin', parsing: 'PPro-D1P', gloss: 'us', strongs: 'G2254', lemma: 'ἡμεῖς' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἐθεασάμεθα', transliteration: 'etheasametha', parsing: 'V-ADI-1P', gloss: 'we have seen', strongs: 'G2300', lemma: 'θεάομαι' },
          { original: 'τὴν', transliteration: 'tēn', parsing: 'Art-AFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'δόξαν', transliteration: 'doxan', parsing: 'N-AFS', gloss: 'glory', strongs: 'G1391', lemma: 'δόξα' },
          { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'of him', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'δόξαν', transliteration: 'doxan', parsing: 'N-AFS', gloss: 'glory', strongs: 'G1391', lemma: 'δόξα' },
          { original: 'ὡς', transliteration: 'hōs', parsing: 'Adv', gloss: 'as', strongs: 'G5613', lemma: 'ὡς' },
          { original: 'μονογενοῦς', transliteration: 'monogenous', parsing: 'Adj-GMS', gloss: 'of the only begotten', strongs: 'G3439', lemma: 'μονογενής' },
          { original: 'παρὰ', transliteration: 'para', parsing: 'Prep', gloss: 'from', strongs: 'G3844', lemma: 'παρά' },
          { original: 'πατρός', transliteration: 'patros', parsing: 'N-GMS', gloss: 'a father', strongs: 'G3962', lemma: 'πατήρ' },
          { original: 'πλήρης', transliteration: 'plērēs', parsing: 'Adj-NFS', gloss: 'full', strongs: 'G4134', lemma: 'πλήρης' },
          { original: 'χάριτος', transliteration: 'charitos', parsing: 'N-GFS', gloss: 'of grace', strongs: 'G5485', lemma: 'χάρις' },
          { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
          { original: 'ἀληθείας', transliteration: 'alētheias', parsing: 'N-GFS', gloss: 'truth', strongs: 'G225', lemma: 'ἀλήθεια' }
        ]}
        ],
      variants: [
        { reference: 'John 1:18', thisReading: 'μονογενὴς θεός (only-begotten God)', majorityReading: 'ὁ μονογενὴς υἱός (the only-begotten Son)', note: 'Vaticanus reads "only-begotten God" — supported by P66, P75, and Sinaiticus. This is the reading adopted by NA28/UBS5.' }
      ]
    }],
    bibliography: [
      'Mai, Angelo. Vetus et Novum Testamentum ex antiquissimo codice Vaticano. Rome, 1857.',
      'Metzger, Bruce M. The Text of the New Testament. Oxford, 2005.',
    ],
    relatedManuscripts: ['sinaiticus', 'p75', 'alexandrinus'],
    onlineResources: [{ label: 'Vatican Digital Library', url: 'https://digi.vatlib.it/view/MSS_Vat.gr.1209' }]
  },
  {
    id: 'alexandrinus',
    designation: 'Codex Alexandrinus (A)',
    gregoryAland: '02 / A',
    type: 'uncial', script: 'greek', textType: 'Byzantine (Gospels), Alexandrian (rest of NT)',
    date: 'c. 400–440 AD', material: 'Vellum', dimensions: '32 × 26 cm',
    totalLeaves: '773 leaves', columns: 2, linesPerPage: '49–51 lines per column',
    format: 'Codex — two columns per page',
    location: 'British Library, London',
    discoveredBy: 'Presented by Cyril Lucar, Patriarch of Constantinople, to King Charles I of England',
    discoveryDate: '1627 (arrived in England)',
    contents: 'Most of OT (LXX) and NT — lacks Matt 1:1–25:6, John 6:50–8:52, 2 Cor 4:13–12:6',
    significance: 'First major uncial manuscript available to Western scholars. Critical witness to Revelation. Contains 1–2 Clement, showing the fluid canonical boundaries of early Christianity.',
    detailedDescription: `Codex Alexandrinus is one of the three great early vellum codices of the Bible. It arrived in England in 1627 as a gift from the Patriarch of Constantinople to King Charles I and was one of the first Greek manuscripts European scholars could study.

The codex is notable for its dual textual character: in the Gospels it represents the Byzantine text type, but in the rest of the NT — particularly Acts, the epistles, and Revelation — it is an excellent Alexandrian witness. For Revelation specifically, Alexandrinus is often considered the best single manuscript, superior even to Sinaiticus.

The manuscript also contains 1 and 2 Clement — rare early Christian letters — and originally included the Psalms of Solomon, indicating an expansive canonical sensibility.`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Codex_Alexandrinus_f41v_-_Luke.jpg/1280px-Codex_Alexandrinus_f41v_-_Luke.jpg', caption: 'Codex Alexandrinus — Decorated page', attribution: 'British Library', license: 'Public Domain' }
    ],
    passages: [{
      title: 'Revelation 1:1–3 — The Opening of Revelation',
      reference: 'Revelation 1:1–3', notes: 'Alexandrinus is the premier witness for Revelation.',
      verses: [
        { reference: 'Revelation 1:1', originalText: 'Ἀποκάλυψις Ἰησοῦ Χριστοῦ ἣν ἔδωκεν αὐτῷ ὁ θεός δεῖξαι τοῖς δούλοις αὐτοῦ ἃ δεῖ γενέσθαι ἐν τάχει', words: [
          { original: 'Ἀποκάλυψις', transliteration: 'Apokalypsis', parsing: 'N-NFS', gloss: 'Revelation', strongs: 'G602', lemma: 'ἀποκάλυψις' },
          { original: 'Ἰησοῦ', transliteration: 'Iēsou', parsing: 'N-GMS', gloss: 'of Jesus', strongs: 'G2424', lemma: 'Ἰησοῦς' },
          { original: 'Χριστοῦ', transliteration: 'Christou', parsing: 'N-GMS', gloss: 'Christ', strongs: 'G5547', lemma: 'Χριστός' },
          { original: 'ἣν', transliteration: 'hēn', parsing: 'RelPro-AFS', gloss: 'which', strongs: 'G3739', lemma: 'ὅς' },
          { original: 'ἔδωκεν', transliteration: 'edōken', parsing: 'V-AAI-3S', gloss: 'gave', strongs: 'G1325', lemma: 'δίδωμι' },
          { original: 'αὐτῷ', transliteration: 'autō', parsing: 'PPro-DM3S', gloss: 'to him', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'θεός', transliteration: 'theos', parsing: 'N-NMS', gloss: 'God', strongs: 'G2316', lemma: 'θεός' },
          { original: 'δεῖξαι', transliteration: 'deixai', parsing: 'V-AAN', gloss: 'to show', strongs: 'G1166', lemma: 'δείκνυμι' },
          { original: 'τοῖς', transliteration: 'tois', parsing: 'Art-DMP', gloss: 'to the', strongs: 'G3588', lemma: 'ὁ' },
          { original: 'δούλοις', transliteration: 'doulois', parsing: 'N-DMP', gloss: 'servants', strongs: 'G1401', lemma: 'δοῦλος' },
          { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'his', strongs: 'G846', lemma: 'αὐτός' },
          { original: 'ἃ', transliteration: 'ha', parsing: 'RelPro-ANP', gloss: 'things which', strongs: 'G3739', lemma: 'ὅς' },
          { original: 'δεῖ', transliteration: 'dei', parsing: 'V-PAI-3S', gloss: 'must', strongs: 'G1163', lemma: 'δεῖ' },
          { original: 'γενέσθαι', transliteration: 'genesthai', parsing: 'V-2ADN', gloss: 'come to pass', strongs: 'G1096', lemma: 'γίνομαι' },
          { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'in', strongs: 'G1722', lemma: 'ἐν' },
          { original: 'τάχει', transliteration: 'tachei', parsing: 'N-DNS', gloss: 'quickness/soon', strongs: 'G5034', lemma: 'τάχος' },
        ]},
      ], variants: []
    }],
    bibliography: ['Kenyon, F.G. The Codex Alexandrinus in Reduced Photographic Facsimile. London, 1909.'],
    relatedManuscripts: ['sinaiticus', 'vaticanus', 'p47'],
    onlineResources: [{ label: 'British Library Codex Alexandrinus', url: 'https://www.bl.uk/collection-items/codex-alexandrinus' }]
  },
  {
    id: 'bezae',
    designation: 'Codex Bezae Cantabrigiensis (D)',
    gregoryAland: '05 / D',
    type: 'uncial', script: 'greek', textType: 'Western',
    date: 'c. 400 AD', material: 'Vellum', dimensions: '26 × 21.5 cm',
    totalLeaves: '510 leaves (originally ~534)', columns: 1, linesPerPage: '33 lines per page',
    format: 'Bilingual codex — Greek (left page) and Latin (right page)',
    location: 'Cambridge University Library, UK',
    discoveredBy: 'Presented by Theodore Beza to Cambridge University',
    discoveryDate: '1581 (given to Cambridge)',
    contents: 'Four Gospels (in Western order: Matthew, John, Luke, Mark), Acts, and a fragment of 3 John',
    contentsDetail: 'Unique bilingual layout with Greek and Latin on facing pages. The unusual order (placing John before Luke) and extensive unique readings make it the most distinctive major uncial.',
    significance: 'The principal representative of the "Western" text type. Contains numerous readings found in no other Greek manuscript, including a longer text of Acts (approximately 10% longer than the Alexandrian text). Its unique readings have been debated for centuries.',
    detailedDescription: `Codex Bezae is the most enigmatic and controversial of the great uncial manuscripts. It is a bilingual codex with Greek on the left page and Latin on the right — one of the very few bilingual Biblical manuscripts from antiquity.

Its text differs dramatically from the Alexandrian tradition. In Acts especially, Codex Bezae is approximately 10% longer than the Alexandrian text, containing numerous extra phrases, sentences, and theological additions. The relationship between the Greek and Latin columns is complex — they do not always agree, suggesting independent textual traditions.

The unique readings of Bezae have fascinated scholars. In Luke 6:4, it contains an otherwise unknown saying of Jesus about a man working on the Sabbath. In Acts 15:20, 29, it replaces the dietary laws with moral commands (the "Western" form of the Apostolic Decree).`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Codex_Bezae_-_Greek_Luke_23-47_to_24-1_%28The_S.S._Teacher%27s_Edition-The_Holy_Bible_-_Plate_XXV%29.jpg', caption: 'Codex Bezae — Bilingual Greek-Latin page', attribution: 'Cambridge University Library', license: 'Public Domain' }
    ],
    passages: [{
      title: 'Luke 6:4–5 — The Sabbath Saying (with Unique Agraphon)',
      reference: 'Luke 6:4–5', notes: 'Bezae contains a unique saying of Jesus not found in any other manuscript, inserted after Luke 6:4.',
      verses: [
        { reference: 'Luke 6:5 (Bezae agraphon)', originalText: 'τῇ αὐτῇ ἡμέρᾳ θεασάμενός τινα ἐργαζόμενον τῷ σαββάτῳ εἶπεν αὐτῷ Ἄνθρωπε εἰ μὲν οἶδας τί ποιεῖς μακάριος εἶ εἰ δὲ μὴ οἶδας ἐπικατάρατος καὶ παραβάτης εἶ τοῦ νόμου', words: [
          { original: 'Ἄνθρωπε', transliteration: 'Anthrōpe', parsing: 'N-VMS', gloss: 'Man', strongs: 'G444', lemma: 'ἄνθρωπος' },
          { original: 'εἰ', transliteration: 'ei', parsing: 'Conj', gloss: 'if', strongs: 'G1487', lemma: 'εἰ' },
          { original: 'μὲν', transliteration: 'men', parsing: 'Prt', gloss: 'indeed', strongs: 'G3303', lemma: 'μέν' },
          { original: 'οἶδας', transliteration: 'oidas', parsing: 'V-RAI-2S', gloss: 'you know', strongs: 'G1492', lemma: 'οἶδα' },
          { original: 'τί', transliteration: 'ti', parsing: 'Interrog-ANS', gloss: 'what', strongs: 'G5101', lemma: 'τίς' },
          { original: 'ποιεῖς', transliteration: 'poieis', parsing: 'V-PAI-2S', gloss: 'you do', strongs: 'G4160', lemma: 'ποιέω' },
          { original: 'μακάριος', transliteration: 'makarios', parsing: 'Adj-NMS', gloss: 'blessed', strongs: 'G3107', lemma: 'μακάριος' },
          { original: 'εἶ', transliteration: 'ei', parsing: 'V-PAI-2S', gloss: 'you are', strongs: 'G1510', lemma: 'εἰμί' },
        ]},
      ], variants: [
        { reference: 'Luke 6:5 (Bezae)', thisReading: 'Contains unique agraphon about man working on Sabbath', majorityReading: 'No such saying exists in any other manuscript', note: 'This is one of the most famous "agrapha" — unrecorded sayings of Jesus preserved only in Codex Bezae.' }
      ]
    }],
    bibliography: ['Parker, D.C. Codex Bezae: An Early Christian Manuscript and Its Text. Cambridge, 1992.'],
    relatedManuscripts: ['sinaiticus', 'vaticanus', 'washingtonianus'],
    onlineResources: [{ label: 'Cambridge University Digital Library', url: 'https://cudl.lib.cam.ac.uk/view/MS-NN-00002-00041/1' }]
  },
];
