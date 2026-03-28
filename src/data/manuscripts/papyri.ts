import type { FullManuscript } from './types';

export const papyri: FullManuscript[] = [
  {
    id: 'p52',
    designation: '𝔓52 — Rylands Library Papyrus P457',
    alternateName: 'St John Fragment',
    gregoryAland: 'P52',
    type: 'papyrus',
    script: 'greek',
    textType: 'Alexandrian',
    date: 'c. 125–175 AD',
    material: 'Papyrus',
    dimensions: '8.9 cm × 6 cm',
    format: 'Codex fragment (single leaf)',
    location: 'John Rylands Library, University of Manchester, UK',
    discoveredBy: 'Bernard Grenfell (acquired in Egypt, 1920)',
    discoveryDate: '1920 (identified by C.H. Roberts in 1934)',
    discoveryLocation: 'Fayum, Egypt',
    acquisitionHistory: 'Purchased in Egypt by Bernard Grenfell in 1920 as part of a group of papyri. It remained unexamined until 1934 when C.H. Roberts identified it as a fragment of the Gospel of John.',
    contents: 'John 18:31–33 (recto), John 18:37–38 (verso)',
    contentsDetail: 'Contains portions of the trial of Jesus before Pontius Pilate. The recto preserves parts of 7 lines, the verso parts of 7 lines. The fragment represents the oldest known manuscript of any portion of the New Testament.',
    significance: 'The oldest known fragment of any New Testament book. Dates to within a generation of the Gospel of John\'s traditional composition date (c. 90–100 AD), demonstrating that the Gospel circulated in provincial Egypt remarkably early. Its discovery demolished the theory that John was composed in the late 2nd century.',
    detailedDescription: `𝔓52 is a papyrus fragment measuring approximately 8.9 × 6 cm, containing text from the Gospel of John on both sides. The handwriting is a literary hand dateable to the first half of the second century. The fragment was part of a codex (book form), not a scroll — significant evidence that early Christians adopted the codex format very early.

The recto (front) contains John 18:31–33, where the Jewish leaders tell Pilate they cannot execute anyone, and Pilate enters the praetorium to question Jesus. The verso (back) contains John 18:37–38, where Jesus speaks of bearing witness to the truth and Pilate asks "What is truth?"

The text agrees substantially with later manuscripts, demonstrating the stability of the Gospel of John's textual tradition. Paleographer C.H. Roberts dated it to the first half of the 2nd century. While some scholars prefer a slightly later date (c. 150–175 AD), even the latest dating makes it the earliest known NT manuscript.

The fragment's existence in Egypt so early after composition (likely in Ephesus or Syria) shows the rapid dissemination of Christian texts across the Roman world.`,
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/P52_recto.jpg',
        caption: '𝔓52 Recto — John 18:31–33',
        attribution: 'John Rylands Library, University of Manchester',
        license: 'Public Domain'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/P52_verso.jpg',
        caption: '𝔓52 Verso — John 18:37–38',
        attribution: 'John Rylands Library, University of Manchester',
        license: 'Public Domain'
      }
    ],
    passages: [
      {
        title: 'Recto (Front Side)',
        reference: 'John 18:31–33',
        notes: 'The recto preserves parts of 7 lines. Square brackets indicate lacunae (missing text). The surviving text matches the critical Greek text with minor variations.',
        verses: [
          {
            reference: 'John 18:31',
            originalText: 'εἶπεν αὐτοῖς ὁ Πιλᾶτος λάβετε αὐτὸν ὑμεῖς καὶ κατὰ τὸν νόμον ὑμῶν κρίνατε αὐτόν εἶπον αὐτῷ οἱ Ἰουδαῖοι ἡμῖν οὐκ ἔξεστιν ἀποκτεῖναι οὐδένα',
            words: [
              { original: 'εἶπεν', transliteration: 'eipen', parsing: 'V-2AAI-3S', parsingFull: 'Verb, 2nd Aorist Active Indicative, 3rd Person Singular', gloss: 'said', strongs: 'G2036', lemma: 'λέγω' },
              { original: 'αὐτοῖς', transliteration: 'autois', parsing: 'PPro-DM3P', parsingFull: 'Personal Pronoun, Dative Masculine 3rd Person Plural', gloss: 'to them', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', parsingFull: 'Article, Nominative Masculine Singular', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'Πιλᾶτος', transliteration: 'Pilatos', parsing: 'N-NMS', parsingFull: 'Noun, Nominative Masculine Singular', gloss: 'Pilate', strongs: 'G4091', lemma: 'Πιλᾶτος' },
              { original: 'λάβετε', transliteration: 'labete', parsing: 'V-2AAM-2P', parsingFull: 'Verb, 2nd Aorist Active Imperative, 2nd Person Plural', gloss: 'take', strongs: 'G2983', lemma: 'λαμβάνω' },
              { original: 'αὐτὸν', transliteration: 'auton', parsing: 'PPro-AM3S', parsingFull: 'Personal Pronoun, Accusative Masculine 3rd Person Singular', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'ὑμεῖς', transliteration: 'hymeis', parsing: 'PPro-N2P', parsingFull: 'Personal Pronoun, Nominative 2nd Person Plural', gloss: 'you', strongs: 'G5210', lemma: 'ὑμεῖς' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', parsingFull: 'Conjunction', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'κατὰ', transliteration: 'kata', parsing: 'Prep', parsingFull: 'Preposition', gloss: 'according to', strongs: 'G2596', lemma: 'κατά' },
              { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', parsingFull: 'Article, Accusative Masculine Singular', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'νόμον', transliteration: 'nomon', parsing: 'N-AMS', parsingFull: 'Noun, Accusative Masculine Singular', gloss: 'law', strongs: 'G3551', lemma: 'νόμος' },
              { original: 'ὑμῶν', transliteration: 'hymōn', parsing: 'PPro-G2P', parsingFull: 'Personal Pronoun, Genitive 2nd Person Plural', gloss: 'of you', strongs: 'G5216', lemma: 'ὑμεῖς' },
              { original: 'κρίνατε', transliteration: 'krinate', parsing: 'V-AAM-2P', parsingFull: 'Verb, Aorist Active Imperative, 2nd Person Plural', gloss: 'judge', strongs: 'G2919', lemma: 'κρίνω' },
              { original: 'αὐτόν', transliteration: 'auton', parsing: 'PPro-AM3S', parsingFull: 'Personal Pronoun, Accusative Masculine 3rd Person Singular', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'εἶπον', transliteration: 'eipon', parsing: 'V-2AAI-3P', parsingFull: 'Verb, 2nd Aorist Active Indicative, 3rd Person Plural', gloss: 'said', strongs: 'G2036', lemma: 'λέγω' },
              { original: 'αὐτῷ', transliteration: 'autō', parsing: 'PPro-DM3S', parsingFull: 'Personal Pronoun, Dative Masculine 3rd Person Singular', gloss: 'to him', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'οἱ', transliteration: 'hoi', parsing: 'Art-NMP', parsingFull: 'Article, Nominative Masculine Plural', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'Ἰουδαῖοι', transliteration: 'Ioudaioi', parsing: 'N-NMP', parsingFull: 'Noun, Nominative Masculine Plural', gloss: 'Jews', strongs: 'G2453', lemma: 'Ἰουδαῖος' },
              { original: 'ἡμῖν', transliteration: 'hēmin', parsing: 'PPro-D1P', parsingFull: 'Personal Pronoun, Dative 1st Person Plural', gloss: 'for us', strongs: 'G2254', lemma: 'ἐγώ' },
              { original: 'οὐκ', transliteration: 'ouk', parsing: 'Adv', parsingFull: 'Adverb (Negative)', gloss: 'not', strongs: 'G3756', lemma: 'οὐ' },
              { original: 'ἔξεστιν', transliteration: 'exestin', parsing: 'V-PAI-3S', parsingFull: 'Verb, Present Active Indicative, 3rd Person Singular', gloss: 'it is lawful', strongs: 'G1832', lemma: 'ἔξεστι' },
              { original: 'ἀποκτεῖναι', transliteration: 'apokteinai', parsing: 'V-AAN', parsingFull: 'Verb, Aorist Active Infinitive', gloss: 'to kill', strongs: 'G615', lemma: 'ἀποκτείνω' },
              { original: 'οὐδένα', transliteration: 'oudena', parsing: 'Adj-AMS', parsingFull: 'Adjective, Accusative Masculine Singular', gloss: 'no one', strongs: 'G3762', lemma: 'οὐδείς' },
            ]
          },
          {
            reference: 'John 18:32',
            originalText: 'ἵνα ὁ λόγος τοῦ Ἰησοῦ πληρωθῇ ὃν εἶπεν σημαίνων ποίῳ θανάτῳ ἤμελλεν ἀποθνῄσκειν',
            words: [
              { original: 'ἵνα', transliteration: 'hina', parsing: 'Conj', gloss: 'so that', strongs: 'G2443', lemma: 'ἵνα' },
              { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'λόγος', transliteration: 'logos', parsing: 'N-NMS', parsingFull: 'Noun, Nominative Masculine Singular', gloss: 'word', strongs: 'G3056', lemma: 'λόγος' },
              { original: 'τοῦ', transliteration: 'tou', parsing: 'Art-GMS', gloss: 'of', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'Ἰησοῦ', transliteration: 'Iēsou', parsing: 'N-GMS', parsingFull: 'Noun, Genitive Masculine Singular', gloss: 'Jesus', strongs: 'G2424', lemma: 'Ἰησοῦς' },
              { original: 'πληρωθῇ', transliteration: 'plērōthē', parsing: 'V-APS-3S', parsingFull: 'Verb, Aorist Passive Subjunctive, 3rd Person Singular', gloss: 'might be fulfilled', strongs: 'G4137', lemma: 'πληρόω' },
              { original: 'ὃν', transliteration: 'hon', parsing: 'RelPro-AMS', gloss: 'which', strongs: 'G3739', lemma: 'ὅς' },
              { original: 'εἶπεν', transliteration: 'eipen', parsing: 'V-2AAI-3S', gloss: 'he said', strongs: 'G2036', lemma: 'λέγω' },
              { original: 'σημαίνων', transliteration: 'sēmainōn', parsing: 'V-PAP-NMS', parsingFull: 'Verb, Present Active Participle, Nominative Masculine Singular', gloss: 'signifying', strongs: 'G4591', lemma: 'σημαίνω' },
              { original: 'ποίῳ', transliteration: 'poiō', parsing: 'Interrog-DMS', gloss: 'by what kind of', strongs: 'G4169', lemma: 'ποῖος' },
              { original: 'θανάτῳ', transliteration: 'thanatō', parsing: 'N-DMS', parsingFull: 'Noun, Dative Masculine Singular', gloss: 'death', strongs: 'G2288', lemma: 'θάνατος' },
              { original: 'ἤμελλεν', transliteration: 'ēmellen', parsing: 'V-IAI-3S', parsingFull: 'Verb, Imperfect Active Indicative, 3rd Person Singular', gloss: 'he was about', strongs: 'G3195', lemma: 'μέλλω' },
              { original: 'ἀποθνῄσκειν', transliteration: 'apothnēskein', parsing: 'V-PAN', parsingFull: 'Verb, Present Active Infinitive', gloss: 'to die', strongs: 'G599', lemma: 'ἀποθνῄσκω' },
            ]
          },
          {
            reference: 'John 18:33',
            originalText: 'Εἰσῆλθεν οὖν πάλιν εἰς τὸ πραιτώριον ὁ Πιλᾶτος καὶ ἐφώνησεν τὸν Ἰησοῦν καὶ εἶπεν αὐτῷ Σὺ εἶ ὁ βασιλεὺς τῶν Ἰουδαίων',
            words: [
              { original: 'Εἰσῆλθεν', transliteration: 'Eisēlthen', parsing: 'V-2AAI-3S', gloss: 'entered', strongs: 'G1525', lemma: 'εἰσέρχομαι' },
              { original: 'οὖν', transliteration: 'oun', parsing: 'Conj', gloss: 'therefore', strongs: 'G3767', lemma: 'οὖν' },
              { original: 'πάλιν', transliteration: 'palin', parsing: 'Adv', gloss: 'again', strongs: 'G3825', lemma: 'πάλιν' },
              { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'into', strongs: 'G1519', lemma: 'εἰς' },
              { original: 'τὸ', transliteration: 'to', parsing: 'Art-ANS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'πραιτώριον', transliteration: 'praitōrion', parsing: 'N-ANS', parsingFull: 'Noun, Accusative Neuter Singular', gloss: 'Praetorium', strongs: 'G4232', lemma: 'πραιτώριον' },
              { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'Πιλᾶτος', transliteration: 'Pilatos', parsing: 'N-NMS', gloss: 'Pilate', strongs: 'G4091', lemma: 'Πιλᾶτος' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'ἐφώνησεν', transliteration: 'ephōnēsen', parsing: 'V-AAI-3S', parsingFull: 'Verb, Aorist Active Indicative, 3rd Person Singular', gloss: 'called', strongs: 'G5455', lemma: 'φωνέω' },
              { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'Ἰησοῦν', transliteration: 'Iēsoun', parsing: 'N-AMS', gloss: 'Jesus', strongs: 'G2424', lemma: 'Ἰησοῦς' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'εἶπεν', transliteration: 'eipen', parsing: 'V-2AAI-3S', gloss: 'said', strongs: 'G2036', lemma: 'λέγω' },
              { original: 'αὐτῷ', transliteration: 'autō', parsing: 'PPro-DM3S', gloss: 'to him', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'Σὺ', transliteration: 'Sy', parsing: 'PPro-N2S', gloss: 'you', strongs: 'G4771', lemma: 'σύ' },
              { original: 'εἶ', transliteration: 'ei', parsing: 'V-PAI-2S', parsingFull: 'Verb, Present Active Indicative, 2nd Person Singular', gloss: 'are', strongs: 'G1510', lemma: 'εἰμί' },
              { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'βασιλεὺς', transliteration: 'basileus', parsing: 'N-NMS', parsingFull: 'Noun, Nominative Masculine Singular', gloss: 'king', strongs: 'G935', lemma: 'βασιλεύς' },
              { original: 'τῶν', transliteration: 'tōn', parsing: 'Art-GMP', gloss: 'of the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'Ἰουδαίων', transliteration: 'Ioudaiōn', parsing: 'N-GMP', parsingFull: 'Noun, Genitive Masculine Plural', gloss: 'Jews', strongs: 'G2453', lemma: 'Ἰουδαῖος' },
            ]
          },
        ],
        variants: [
          {
            reference: 'John 18:31',
            thisReading: 'Text fragmentary but agrees with standard reading',
            majorityReading: 'εἶπεν αὐτοῖς ὁ Πιλᾶτος',
            note: 'P52 preserves enough text to confirm agreement with the mainstream tradition'
          }
        ]
      },
      {
        title: 'Verso (Back Side)',
        reference: 'John 18:37–38',
        notes: 'The verso preserves parts of 7 lines from the famous dialogue between Jesus and Pilate about truth.',
        verses: [
          {
            reference: 'John 18:37',
            originalText: 'εἶπεν οὖν αὐτῷ ὁ Πιλᾶτος Οὐκοῦν βασιλεὺς εἶ σύ ἀπεκρίθη ὁ Ἰησοῦς Σὺ λέγεις ὅτι βασιλεύς εἰμι ἐγὼ εἰς τοῦτο γεγέννημαι καὶ εἰς τοῦτο ἐλήλυθα εἰς τὸν κόσμον ἵνα μαρτυρήσω τῇ ἀληθείᾳ πᾶς ὁ ὢν ἐκ τῆς ἀληθείας ἀκούει μου τῆς φωνῆς',
            words: [
              { original: 'εἶπεν', transliteration: 'eipen', parsing: 'V-2AAI-3S', gloss: 'said', strongs: 'G2036', lemma: 'λέγω' },
              { original: 'οὖν', transliteration: 'oun', parsing: 'Conj', gloss: 'therefore', strongs: 'G3767', lemma: 'οὖν' },
              { original: 'αὐτῷ', transliteration: 'autō', parsing: 'PPro-DM3S', gloss: 'to him', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'Πιλᾶτος', transliteration: 'Pilatos', parsing: 'N-NMS', gloss: 'Pilate', strongs: 'G4091', lemma: 'Πιλᾶτος' },
              { original: 'Οὐκοῦν', transliteration: 'Oukoun', parsing: 'Adv', gloss: 'so then', strongs: 'G3766', lemma: 'οὐκοῦν' },
              { original: 'βασιλεὺς', transliteration: 'basileus', parsing: 'N-NMS', gloss: 'a king', strongs: 'G935', lemma: 'βασιλεύς' },
              { original: 'εἶ', transliteration: 'ei', parsing: 'V-PAI-2S', gloss: 'are', strongs: 'G1510', lemma: 'εἰμί' },
              { original: 'σύ', transliteration: 'sy', parsing: 'PPro-N2S', gloss: 'you', strongs: 'G4771', lemma: 'σύ' },
              { original: 'ἀπεκρίθη', transliteration: 'apekrithē', parsing: 'V-API-3S', parsingFull: 'Verb, Aorist Passive Indicative, 3rd Person Singular', gloss: 'answered', strongs: 'G611', lemma: 'ἀποκρίνομαι' },
              { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'Ἰησοῦς', transliteration: 'Iēsous', parsing: 'N-NMS', gloss: 'Jesus', strongs: 'G2424', lemma: 'Ἰησοῦς' },
              { original: 'Σὺ', transliteration: 'Sy', parsing: 'PPro-N2S', gloss: 'You', strongs: 'G4771', lemma: 'σύ' },
              { original: 'λέγεις', transliteration: 'legeis', parsing: 'V-PAI-2S', gloss: 'say', strongs: 'G3004', lemma: 'λέγω' },
              { original: 'ὅτι', transliteration: 'hoti', parsing: 'Conj', gloss: 'that', strongs: 'G3754', lemma: 'ὅτι' },
              { original: 'βασιλεύς', transliteration: 'basileus', parsing: 'N-NMS', gloss: 'a king', strongs: 'G935', lemma: 'βασιλεύς' },
              { original: 'εἰμι', transliteration: 'eimi', parsing: 'V-PAI-1S', gloss: 'am', strongs: 'G1510', lemma: 'εἰμί' },
              { original: 'ἐγὼ', transliteration: 'egō', parsing: 'PPro-N1S', gloss: 'I', strongs: 'G1473', lemma: 'ἐγώ' },
              { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'for', strongs: 'G1519', lemma: 'εἰς' },
              { original: 'τοῦτο', transliteration: 'touto', parsing: 'DPro-ANS', gloss: 'this', strongs: 'G5124', lemma: 'τοῦτο' },
              { original: 'γεγέννημαι', transliteration: 'gegennēmai', parsing: 'V-RPI-1S', parsingFull: 'Verb, Perfect Passive Indicative, 1st Person Singular', gloss: 'I have been born', strongs: 'G1080', lemma: 'γεννάω' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'for', strongs: 'G1519', lemma: 'εἰς' },
              { original: 'τοῦτο', transliteration: 'touto', parsing: 'DPro-ANS', gloss: 'this', strongs: 'G5124', lemma: 'τοῦτο' },
              { original: 'ἐλήλυθα', transliteration: 'elēlytha', parsing: 'V-2RAI-1S', parsingFull: 'Verb, 2nd Perfect Active Indicative, 1st Person Singular', gloss: 'I have come', strongs: 'G2064', lemma: 'ἔρχομαι' },
              { original: 'εἰς', transliteration: 'eis', parsing: 'Prep', gloss: 'into', strongs: 'G1519', lemma: 'εἰς' },
              { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'κόσμον', transliteration: 'kosmon', parsing: 'N-AMS', gloss: 'world', strongs: 'G2889', lemma: 'κόσμος' },
              { original: 'ἵνα', transliteration: 'hina', parsing: 'Conj', gloss: 'that', strongs: 'G2443', lemma: 'ἵνα' },
              { original: 'μαρτυρήσω', transliteration: 'martyrēsō', parsing: 'V-AAS-1S', parsingFull: 'Verb, Aorist Active Subjunctive, 1st Person Singular', gloss: 'I should testify', strongs: 'G3140', lemma: 'μαρτυρέω' },
              { original: 'τῇ', transliteration: 'tē', parsing: 'Art-DFS', gloss: 'to the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'ἀληθείᾳ', transliteration: 'alētheia', parsing: 'N-DFS', parsingFull: 'Noun, Dative Feminine Singular', gloss: 'truth', strongs: 'G225', lemma: 'ἀλήθεια' },
              { original: 'πᾶς', transliteration: 'pas', parsing: 'Adj-NMS', gloss: 'everyone', strongs: 'G3956', lemma: 'πᾶς' },
              { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the one', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'ὢν', transliteration: 'ōn', parsing: 'V-PAP-NMS', parsingFull: 'Verb, Present Active Participle, Nominative Masculine Singular', gloss: 'being', strongs: 'G1510', lemma: 'εἰμί' },
              { original: 'ἐκ', transliteration: 'ek', parsing: 'Prep', gloss: 'of', strongs: 'G1537', lemma: 'ἐκ' },
              { original: 'τῆς', transliteration: 'tēs', parsing: 'Art-GFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'ἀληθείας', transliteration: 'alētheias', parsing: 'N-GFS', gloss: 'truth', strongs: 'G225', lemma: 'ἀλήθεια' },
              { original: 'ἀκούει', transliteration: 'akouei', parsing: 'V-PAI-3S', parsingFull: 'Verb, Present Active Indicative, 3rd Person Singular', gloss: 'hears', strongs: 'G191', lemma: 'ἀκούω' },
              { original: 'μου', transliteration: 'mou', parsing: 'PPro-G1S', gloss: 'my', strongs: 'G1473', lemma: 'ἐγώ' },
              { original: 'τῆς', transliteration: 'tēs', parsing: 'Art-GFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'φωνῆς', transliteration: 'phōnēs', parsing: 'N-GFS', parsingFull: 'Noun, Genitive Feminine Singular', gloss: 'voice', strongs: 'G5456', lemma: 'φωνή' },
            ]
          },
          {
            reference: 'John 18:38',
            originalText: 'λέγει αὐτῷ ὁ Πιλᾶτος Τί ἐστιν ἀλήθεια καὶ τοῦτο εἰπὼν πάλιν ἐξῆλθεν πρὸς τοὺς Ἰουδαίους καὶ λέγει αὐτοῖς Ἐγὼ οὐδεμίαν εὑρίσκω ἐν αὐτῷ αἰτίαν',
            words: [
              { original: 'λέγει', transliteration: 'legei', parsing: 'V-PAI-3S', gloss: 'says', strongs: 'G3004', lemma: 'λέγω' },
              { original: 'αὐτῷ', transliteration: 'autō', parsing: 'PPro-DM3S', gloss: 'to him', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'Πιλᾶτος', transliteration: 'Pilatos', parsing: 'N-NMS', gloss: 'Pilate', strongs: 'G4091', lemma: 'Πιλᾶτος' },
              { original: 'Τί', transliteration: 'Ti', parsing: 'Interrog-NNS', gloss: 'What', strongs: 'G5101', lemma: 'τίς' },
              { original: 'ἐστιν', transliteration: 'estin', parsing: 'V-PAI-3S', gloss: 'is', strongs: 'G1510', lemma: 'εἰμί' },
              { original: 'ἀλήθεια', transliteration: 'alētheia', parsing: 'N-NFS', parsingFull: 'Noun, Nominative Feminine Singular', gloss: 'truth', strongs: 'G225', lemma: 'ἀλήθεια' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'τοῦτο', transliteration: 'touto', parsing: 'DPro-ANS', gloss: 'this', strongs: 'G5124', lemma: 'τοῦτο' },
              { original: 'εἰπὼν', transliteration: 'eipōn', parsing: 'V-2AAP-NMS', parsingFull: 'Verb, 2nd Aorist Active Participle, Nominative Masculine Singular', gloss: 'having said', strongs: 'G2036', lemma: 'λέγω' },
              { original: 'πάλιν', transliteration: 'palin', parsing: 'Adv', gloss: 'again', strongs: 'G3825', lemma: 'πάλιν' },
              { original: 'ἐξῆλθεν', transliteration: 'exēlthen', parsing: 'V-2AAI-3S', gloss: 'went out', strongs: 'G1831', lemma: 'ἐξέρχομαι' },
              { original: 'πρὸς', transliteration: 'pros', parsing: 'Prep', gloss: 'to', strongs: 'G4314', lemma: 'πρός' },
              { original: 'τοὺς', transliteration: 'tous', parsing: 'Art-AMP', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'Ἰουδαίους', transliteration: 'Ioudaious', parsing: 'N-AMP', gloss: 'Jews', strongs: 'G2453', lemma: 'Ἰουδαῖος' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'λέγει', transliteration: 'legei', parsing: 'V-PAI-3S', gloss: 'says', strongs: 'G3004', lemma: 'λέγω' },
              { original: 'αὐτοῖς', transliteration: 'autois', parsing: 'PPro-DM3P', gloss: 'to them', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'Ἐγὼ', transliteration: 'Egō', parsing: 'PPro-N1S', gloss: 'I', strongs: 'G1473', lemma: 'ἐγώ' },
              { original: 'οὐδεμίαν', transliteration: 'oudemian', parsing: 'Adj-AFS', gloss: 'no', strongs: 'G3762', lemma: 'οὐδείς' },
              { original: 'εὑρίσκω', transliteration: 'heuriskō', parsing: 'V-PAI-1S', parsingFull: 'Verb, Present Active Indicative, 1st Person Singular', gloss: 'I find', strongs: 'G2147', lemma: 'εὑρίσκω' },
              { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'in', strongs: 'G1722', lemma: 'ἐν' },
              { original: 'αὐτῷ', transliteration: 'autō', parsing: 'PPro-DM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'αἰτίαν', transliteration: 'aitian', parsing: 'N-AFS', parsingFull: 'Noun, Accusative Feminine Singular', gloss: 'fault/charge', strongs: 'G156', lemma: 'αἰτία' },
            ]
          },
        ],
        variants: []
      }
    ],
    bibliography: [
      'Roberts, C.H. "An Unpublished Fragment of the Fourth Gospel in the John Rylands Library." Bulletin of the John Rylands Library 20 (1936): 45–55.',
      'Nongbri, Brent. "The Use and Abuse of P52: Papyrological Pitfalls in the Dating of the Fourth Gospel." Harvard Theological Review 98 (2005): 23–48.',
      'Aland, Kurt and Barbara Aland. The Text of the New Testament. Grand Rapids: Eerdmans, 1987.',
      'Comfort, Philip W. and David P. Barrett. The Text of the Earliest New Testament Greek Manuscripts. Wheaton: Tyndale House, 2001.'
    ],
    relatedManuscripts: ['p66', 'p75', 'sinaiticus', 'vaticanus'],
    onlineResources: [
      { label: 'John Rylands Library Digital Collection', url: 'https://www.library.manchester.ac.uk/rylands/special-collections/' },
      { label: 'CSNTM P52 page', url: 'https://manuscripts.csntm.org/manuscript/Group/GA_P52' }
    ]
  },
  {
    id: 'p66',
    designation: '𝔓66 — Bodmer Papyrus II',
    alternateName: 'Papyrus Bodmer II',
    gregoryAland: 'P66',
    type: 'papyrus',
    script: 'greek',
    textType: 'Alexandrian / mixed',
    date: 'c. 200 AD',
    material: 'Papyrus',
    dimensions: 'Pages approx. 14.2 × 16.2 cm',
    totalLeaves: '75 leaves (of original ~78)',
    format: 'Single-quire codex',
    location: 'Fondation Martin Bodmer, Cologny (Geneva), Switzerland',
    discoveredBy: 'Unknown (acquired by Martin Bodmer in 1956)',
    discoveryDate: '1952 (found), 1956 (acquired by Bodmer)',
    discoveryLocation: 'Jabal Abu Mana, Upper Egypt (near Dishna)',
    acquisitionHistory: 'Discovered in 1952 among a cache of manuscripts near Dishna, Upper Egypt, possibly from the library of a Pachomian monastery. Acquired by Swiss bibliophile Martin Bodmer in 1956.',
    contents: 'Gospel of John (nearly complete: John 1:1–6:11, 6:35–14:26, fragments of 14:29–21:9)',
    contentsDetail: 'Contains the most extensive early papyrus witness to the Gospel of John. The first 39 pages are nearly perfectly preserved. Contains approximately 104 of the original 156 pages. The scribe made numerous corrections, some by the original scribe and some by a later hand.',
    significance: 'One of the earliest and most substantial manuscripts of a single Gospel. Dated to approximately 200 AD, making it contemporary with P75 and one of the oldest extensive New Testament manuscripts. Its mixed text type is significant for understanding the early fluidity of the textual tradition. The scribe\'s corrections provide insight into scribal practices.',
    detailedDescription: `𝔓66 is one of the most important early papyrus manuscripts of the New Testament. It contains a near-complete text of the Gospel of John, written in a literary hand dateable to around 200 AD.

The manuscript was part of a remarkable discovery near Dishna in Upper Egypt in 1952, alongside other important texts including 𝔓72 (1–2 Peter, Jude), 𝔓75 (Luke-John), and the Bodmer Miscellaneous Codex. This cache may have been the library of a Pachomian monastery.

The codex consists of a single quire of papyrus leaves. The scribe wrote in a careful bookhand but made over 400 corrections — some immediately during copying, others at a later date. This makes 𝔓66 invaluable for studying scribal practices in early Christianity.

Textually, 𝔓66 has a mixed character. While it aligns often with the Alexandrian text type (agreeing with Codex Sinaiticus), it also contains readings found in the Western tradition and unique readings found in no other known manuscript. This "mixed" character suggests that in the early period, the text of John had not yet stabilized into the distinct text types seen in later centuries.

The prologue of John (1:1-18) in 𝔓66 is of particular theological importance, as it contains one of the earliest witnesses to the Logos hymn. The manuscript reads "μονογενὴς θεός" (unique God) in John 1:18, rather than "μονογενὴς υἱός" (unique Son), a reading shared with P75 and Codex Sinaiticus.`,
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Geneva%2C_Bodmer_Lab_Ms_Papyrus_66_%28P.Bodmer_II_-_PB_2%29_fol._1r.jpg/1280px-Geneva%2C_Bodmer_Lab_Ms_Papyrus_66_%28P.Bodmer_II_-_PB_2%29_fol._1r.jpg',
        caption: '𝔓66 — Opening page of the Gospel of John',
        attribution: 'Fondation Martin Bodmer',
        license: 'Public Domain'
      }
    ],
    passages: [
      {
        title: 'The Logos Hymn — John 1:1–5',
        reference: 'John 1:1–5',
        notes: 'The prologue of John is one of the most theologically significant passages in the entire New Testament. 𝔓66 provides one of the earliest complete witnesses to this text, dating to c. 200 AD.',
        verses: [
          {
            reference: 'John 1:1',
            originalText: 'Ἐν ἀρχῇ ἦν ὁ λόγος καὶ ὁ λόγος ἦν πρὸς τὸν θεόν καὶ θεὸς ἦν ὁ λόγος',
            words: [
              { original: 'Ἐν', transliteration: 'En', parsing: 'Prep', gloss: 'In', strongs: 'G1722', lemma: 'ἐν' },
              { original: 'ἀρχῇ', transliteration: 'archē', parsing: 'N-DFS', parsingFull: 'Noun, Dative Feminine Singular', gloss: 'the beginning', strongs: 'G746', lemma: 'ἀρχή' },
              { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', parsingFull: 'Verb, Imperfect Active Indicative, 3rd Person Singular', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
              { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'λόγος', transliteration: 'logos', parsing: 'N-NMS', parsingFull: 'Noun, Nominative Masculine Singular', gloss: 'Word', strongs: 'G3056', lemma: 'λόγος' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'λόγος', transliteration: 'logos', parsing: 'N-NMS', gloss: 'Word', strongs: 'G3056', lemma: 'λόγος' },
              { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
              { original: 'πρὸς', transliteration: 'pros', parsing: 'Prep', gloss: 'with', strongs: 'G4314', lemma: 'πρός' },
              { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'θεόν', transliteration: 'theon', parsing: 'N-AMS', parsingFull: 'Noun, Accusative Masculine Singular', gloss: 'God', strongs: 'G2316', lemma: 'θεός' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'θεὸς', transliteration: 'theos', parsing: 'N-NMS', parsingFull: 'Noun, Nominative Masculine Singular', gloss: 'God', strongs: 'G2316', lemma: 'θεός' },
              { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
              { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'λόγος', transliteration: 'logos', parsing: 'N-NMS', gloss: 'Word', strongs: 'G3056', lemma: 'λόγος' },
            ]
          },
          {
            reference: 'John 1:2',
            originalText: 'οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν θεόν',
            words: [
              { original: 'οὗτος', transliteration: 'houtos', parsing: 'DPro-NMS', parsingFull: 'Demonstrative Pronoun, Nominative Masculine Singular', gloss: 'This one', strongs: 'G3778', lemma: 'οὗτος' },
              { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
              { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'in', strongs: 'G1722', lemma: 'ἐν' },
              { original: 'ἀρχῇ', transliteration: 'archē', parsing: 'N-DFS', gloss: 'the beginning', strongs: 'G746', lemma: 'ἀρχή' },
              { original: 'πρὸς', transliteration: 'pros', parsing: 'Prep', gloss: 'with', strongs: 'G4314', lemma: 'πρός' },
              { original: 'τὸν', transliteration: 'ton', parsing: 'Art-AMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'θεόν', transliteration: 'theon', parsing: 'N-AMS', gloss: 'God', strongs: 'G2316', lemma: 'θεός' },
            ]
          },
          {
            reference: 'John 1:3',
            originalText: 'πάντα δι᾽ αὐτοῦ ἐγένετο καὶ χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν ὃ γέγονεν',
            words: [
              { original: 'πάντα', transliteration: 'panta', parsing: 'Adj-NNP', parsingFull: 'Adjective, Nominative Neuter Plural', gloss: 'All things', strongs: 'G3956', lemma: 'πᾶς' },
              { original: 'δι᾽', transliteration: "di'", parsing: 'Prep', gloss: 'through', strongs: 'G1223', lemma: 'διά' },
              { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'ἐγένετο', transliteration: 'egeneto', parsing: 'V-2ADI-3S', parsingFull: 'Verb, 2nd Aorist Middle Indicative, 3rd Person Singular', gloss: 'came into being', strongs: 'G1096', lemma: 'γίνομαι' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'χωρὶς', transliteration: 'chōris', parsing: 'Prep', gloss: 'apart from', strongs: 'G5565', lemma: 'χωρίς' },
              { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'ἐγένετο', transliteration: 'egeneto', parsing: 'V-2ADI-3S', gloss: 'came into being', strongs: 'G1096', lemma: 'γίνομαι' },
              { original: 'οὐδὲ', transliteration: 'oude', parsing: 'Adv', gloss: 'not even', strongs: 'G3761', lemma: 'οὐδέ' },
              { original: 'ἕν', transliteration: 'hen', parsing: 'Adj-NNS', parsingFull: 'Adjective, Nominative Neuter Singular', gloss: 'one thing', strongs: 'G1520', lemma: 'εἷς' },
              { original: 'ὃ', transliteration: 'ho', parsing: 'RelPro-NNS', gloss: 'that', strongs: 'G3739', lemma: 'ὅς' },
              { original: 'γέγονεν', transliteration: 'gegonen', parsing: 'V-2RAI-3S', parsingFull: 'Verb, 2nd Perfect Active Indicative, 3rd Person Singular', gloss: 'has come into being', strongs: 'G1096', lemma: 'γίνομαι' },
            ]
          },
          {
            reference: 'John 1:4',
            originalText: 'ἐν αὐτῷ ζωὴ ἦν καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων',
            words: [
              { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'In', strongs: 'G1722', lemma: 'ἐν' },
              { original: 'αὐτῷ', transliteration: 'autō', parsing: 'PPro-DM3S', gloss: 'him', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'ζωὴ', transliteration: 'zōē', parsing: 'N-NFS', parsingFull: 'Noun, Nominative Feminine Singular', gloss: 'life', strongs: 'G2222', lemma: 'ζωή' },
              { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'ἡ', transliteration: 'hē', parsing: 'Art-NFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'ζωὴ', transliteration: 'zōē', parsing: 'N-NFS', gloss: 'life', strongs: 'G2222', lemma: 'ζωή' },
              { original: 'ἦν', transliteration: 'ēn', parsing: 'V-IAI-3S', gloss: 'was', strongs: 'G1510', lemma: 'εἰμί' },
              { original: 'τὸ', transliteration: 'to', parsing: 'Art-NNS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'φῶς', transliteration: 'phōs', parsing: 'N-NNS', parsingFull: 'Noun, Nominative Neuter Singular', gloss: 'light', strongs: 'G5457', lemma: 'φῶς' },
              { original: 'τῶν', transliteration: 'tōn', parsing: 'Art-GMP', gloss: 'of', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'ἀνθρώπων', transliteration: 'anthrōpōn', parsing: 'N-GMP', parsingFull: 'Noun, Genitive Masculine Plural', gloss: 'men', strongs: 'G444', lemma: 'ἄνθρωπος' },
            ]
          },
          {
            reference: 'John 1:5',
            originalText: 'καὶ τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν',
            words: [
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'And', strongs: 'G2532', lemma: 'καί' },
              { original: 'τὸ', transliteration: 'to', parsing: 'Art-NNS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'φῶς', transliteration: 'phōs', parsing: 'N-NNS', gloss: 'light', strongs: 'G5457', lemma: 'φῶς' },
              { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'in', strongs: 'G1722', lemma: 'ἐν' },
              { original: 'τῇ', transliteration: 'tē', parsing: 'Art-DFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'σκοτίᾳ', transliteration: 'skotia', parsing: 'N-DFS', parsingFull: 'Noun, Dative Feminine Singular', gloss: 'darkness', strongs: 'G4653', lemma: 'σκοτία' },
              { original: 'φαίνει', transliteration: 'phainei', parsing: 'V-PAI-3S', parsingFull: 'Verb, Present Active Indicative, 3rd Person Singular', gloss: 'shines', strongs: 'G5316', lemma: 'φαίνω' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'ἡ', transliteration: 'hē', parsing: 'Art-NFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'σκοτία', transliteration: 'skotia', parsing: 'N-NFS', gloss: 'darkness', strongs: 'G4653', lemma: 'σκοτία' },
              { original: 'αὐτὸ', transliteration: 'auto', parsing: 'PPro-AN3S', gloss: 'it', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'οὐ', transliteration: 'ou', parsing: 'Adv', gloss: 'not', strongs: 'G3756', lemma: 'οὐ' },
              { original: 'κατέλαβεν', transliteration: 'katelaben', parsing: 'V-2AAI-3S', parsingFull: 'Verb, 2nd Aorist Active Indicative, 3rd Person Singular', gloss: 'overcame', strongs: 'G2638', lemma: 'καταλαμβάνω' },
            ]
          },
          {
            reference: 'John 1:6',
            originalText: 'Ἐγένετο ἄνθρωπος ἀπεσταλμένος παρὰ θεοῦ ὄνομα αὐτῷ Ἰωάννης',
            words: [
              { original: 'Ἐγένετο', transliteration: 'Egeneto', parsing: 'V-2ADI-3S', gloss: 'There came', strongs: 'G1096', lemma: 'γίνομαι' },
              { original: 'ἄνθρωπος', transliteration: 'anthrōpos', parsing: 'N-NMS', gloss: 'a man', strongs: 'G444', lemma: 'ἄνθρωπος' },
              { original: 'ἀπεσταλμένος', transliteration: 'apestalmenos', parsing: 'V-RPP-NMS', gloss: 'having been sent', strongs: 'G649', lemma: 'ἀποστέλλω' },
              { original: 'παρὰ', transliteration: 'para', parsing: 'Prep', gloss: 'from', strongs: 'G3844', lemma: 'παρά' },
              { original: 'θεοῦ', transliteration: 'theou', parsing: 'N-GMS', gloss: 'God', strongs: 'G2316', lemma: 'θεός' },
              { original: 'ὄνομα', transliteration: 'onoma', parsing: 'N-NNS', gloss: 'whose name', strongs: 'G3686', lemma: 'ὄνομα' },
              { original: 'αὐτῷ', transliteration: 'autō', parsing: 'PPro-DM3S', gloss: 'was', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'Ἰωάννης', transliteration: 'Iōannēs', parsing: 'N-NMS', gloss: 'John', strongs: 'G2491', lemma: 'Ἰωάννης' }
            ]
          },
          {
            reference: 'John 1:7',
            originalText: 'οὗτος ἦλθεν εἰς μαρτυρίαν ἵνα μαρτυρήσῃ περὶ τοῦ φωτός ἵνα πάντες πιστεύσωσιν δι’ αὐτοῦ',
            words: [
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
            ]
          },
          {
            reference: 'John 1:8',
            originalText: 'οὐκ ἦν ἐκεῖνος τὸ φῶς ἀλλ’ ἵνα μαρτυρήσῃ περὶ τοῦ φωτός',
            words: [
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
            ]
          },
          {
            reference: 'John 1:9',
            originalText: 'Ἦν τὸ φῶς τὸ ἀληθινόν ὃ φωτίζει πάντα ἄνθρωπον ἐρχόμενον εἰς τὸν κόσμον',
            words: [
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
            ]
          },
          {
            reference: 'John 1:10',
            originalText: 'ἐν τῷ κόσμῳ ἦν καὶ ὁ κόσμος δι’ αὐτοῦ ἐγένετο καὶ ὁ κόσμος αὐτὸν οὐκ ἔγνω',
            words: [
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
            ]
          },
          {
            reference: 'John 1:11',
            originalText: 'εἰς τὰ ἴδια ἦλθεν καὶ οἱ ἴδιοι αὐτὸν οὐ παρέλαβον',
            words: [
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
            ]
          },
          {
            reference: 'John 1:12',
            originalText: 'ὅσοι δὲ ἔλαβον αὐτόν ἔδωκεν αὐτοῖς ἐξουσίαν τέκνα θεοῦ γενέσθαι τοῖς πιστεύουσιν εἰς τὸ ὄνομα αὐτοῦ',
            words: [
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
            ]
          },
          {
            reference: 'John 1:13',
            originalText: 'οἳ οὐκ ἐξ αἱμάτων οὐδὲ ἐκ θελήματος σαρκὸς οὐδὲ ἐκ θελήματος ἀνδρὸς ἀλλ’ ἐκ θεοῦ ἐγεννήθησαν',
            words: [
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
            ]
          },
          {
            reference: 'John 1:14',
            originalText: 'Καὶ ὁ λόγος σὰρξ ἐγένετο καὶ ἐσκήνωσεν ἐν ἡμῖν καὶ ἐθεασάμεθα τὴν δόξαν αὐτοῦ δόξαν ὡς μονογενοῦς παρὰ πατρός πλήρης χάριτος καὶ ἀληθείας',
            words: [
              { original: 'Καὶ', transliteration: 'Kai', parsing: 'Conj', gloss: 'And', strongs: 'G2532', lemma: 'καί' },
              { original: 'ὁ', transliteration: 'ho', parsing: 'Art-NMS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'λόγος', transliteration: 'logos', parsing: 'N-NMS', gloss: 'Word', strongs: 'G3056', lemma: 'λόγος' },
              { original: 'σὰρξ', transliteration: 'sarx', parsing: 'N-NFS', gloss: 'flesh', strongs: 'G4561', lemma: 'σάρξ' },
              { original: 'ἐγένετο', transliteration: 'egeneto', parsing: 'V-2ADI-3S', gloss: 'became', strongs: 'G1096', lemma: 'γίνομαι' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'ἐσκήνωσεν', transliteration: 'eskēnōsen', parsing: 'V-AAI-3S', gloss: 'dwelt', strongs: 'G4637', lemma: 'σκηνόω' },
              { original: 'ἐν', transliteration: 'en', parsing: 'Prep', gloss: 'among', strongs: 'G1722', lemma: 'ἐν' },
              { original: 'ἡμῖν', transliteration: 'hēmin', parsing: 'PPro-D1P', gloss: 'us', strongs: 'G1473', lemma: 'ἐγώ' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'ἐθεασάμεθα', transliteration: 'etheasametha', parsing: 'V-AMI-1P', gloss: 'we beheld', strongs: 'G2300', lemma: 'θεάομαι' },
              { original: 'τὴν', transliteration: 'tēn', parsing: 'Art-AFS', gloss: 'the', strongs: 'G3588', lemma: 'ὁ' },
              { original: 'δόξαν', transliteration: 'doxan', parsing: 'N-AFS', gloss: 'glory', strongs: 'G1391', lemma: 'δόξα' },
              { original: 'αὐτοῦ', transliteration: 'autou', parsing: 'PPro-GM3S', gloss: 'of him', strongs: 'G846', lemma: 'αὐτός' },
              { original: 'δόξαν', transliteration: 'doxan', parsing: 'N-AFS', gloss: 'glory', strongs: 'G1391', lemma: 'δόξα' },
              { original: 'ὡς', transliteration: 'hōs', parsing: 'Adv', gloss: 'as', strongs: 'G5613', lemma: 'ὡς' },
              { original: 'μονογενοῦς', transliteration: 'monogenous', parsing: 'Adj-GMS', gloss: 'of the only begotten', strongs: 'G3439', lemma: 'μονογενής' },
              { original: 'παρὰ', transliteration: 'para', parsing: 'Prep', gloss: 'from', strongs: 'G3844', lemma: 'παρά' },
              { original: 'πατρός', transliteration: 'patros', parsing: 'N-GMS', gloss: 'the Father', strongs: 'G3962', lemma: 'πατήρ' },
              { original: 'πλήρης', transliteration: 'plērēs', parsing: 'Adj-NMS', gloss: 'full', strongs: 'G4134', lemma: 'πλήρης' },
              { original: 'χάριτος', transliteration: 'charitos', parsing: 'N-GFS', gloss: 'of grace', strongs: 'G5485', lemma: 'χάρις' },
              { original: 'καὶ', transliteration: 'kai', parsing: 'Conj', gloss: 'and', strongs: 'G2532', lemma: 'καί' },
              { original: 'ἀληθείας', transliteration: 'alētheias', parsing: 'N-GFS', gloss: 'of truth', strongs: 'G225', lemma: 'ἀλήθεια' }
            ]
          }
        ],
        variants: [
          {
            reference: 'John 1:3-4',
            thisReading: 'ὃ γέγονεν ἐν αὐτῷ ζωὴ ἦν (punctuation joins "what has come into being — in him was life")',
            majorityReading: 'ὃ γέγονεν. Ἐν αὐτῷ ζωὴ ἦν (period after γέγονεν)',
            note: '𝔓66 appears to read without a major break between verses 3 and 4, an important variant for Johannine theology.'
          }
        ]
      },
    ],
    bibliography: [
      'Martin, Victor. Papyrus Bodmer II: Évangile de Jean, chap. 1–14. Cologny-Geneva: Bibliotheca Bodmeriana, 1956.',
      'Martin, Victor and J.W.B. Barns. Papyrus Bodmer II, Supplement: Évangile de Jean, chap. 14–21. Cologny-Geneva: Bibliotheca Bodmeriana, 1962.',
      'Fee, Gordon D. Papyrus Bodmer II (P66): Its Textual Relationships and Scribal Characteristics. Studies and Documents 34. Salt Lake City: University of Utah Press, 1968.',
      'Comfort, Philip W. and David P. Barrett. The Text of the Earliest New Testament Greek Manuscripts. Wheaton: Tyndale House, 2001.'
    ],
    relatedManuscripts: ['p52', 'p75', 'sinaiticus', 'vaticanus'],
    onlineResources: [
      { label: 'Fondation Martin Bodmer', url: 'https://www.fondationbodmer.ch/' },
      { label: 'CSNTM P66', url: 'https://manuscripts.csntm.org/manuscript/Group/GA_P66' }
    ]
  },
];
