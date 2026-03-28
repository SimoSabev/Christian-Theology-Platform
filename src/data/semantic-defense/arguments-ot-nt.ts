import { SemanticDefense } from './types';

export const otNtParallels: SemanticDefense[] = [
  {
    id: 'sd-ot-son-of-man',
    argumentId: 'deity-of-christ',
    title: 'Riding on the Clouds (Dan 7 vs Mark 14)',
    objectionTarget: 'Unitarianism',
    description: 'Christ strictly applies the divine prerogative of "riding the clouds" (exclusively Yahweh\'s domain in the OT) to Himself as the Son of Man.',
    baselineVerse: {
      id: 'm14-62', reference: 'Mark 14:62', textDirection: 'ltr',
      words: [
        { id: 'm1', original: 'ἐγώ', transliteration: 'egō', english: 'I', strongs: 'G1473', morphology: 'Pro-1NS' },
        { id: 'm2', original: 'εἰμι·', transliteration: 'eimi;', english: 'am;', strongs: 'G1510', morphology: 'V-PAI-1S' },
        { id: 'm3', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
        { id: 'm4', original: 'ὄψεσθε', transliteration: 'opsesthe', english: 'you will see', strongs: 'G3708', morphology: 'V-FMI-2P' },
        { id: 'm5', original: 'τὸν', transliteration: 'ton', english: 'the', strongs: 'G3588', morphology: 'Art-AMS' },
        { id: 'm6', original: 'υἱὸν', transliteration: 'huion', english: 'Son', strongs: 'G5207', morphology: 'N-AMS' },
        { id: 'm7', original: 'τοῦ', transliteration: 'tou', english: 'of', strongs: 'G3588', morphology: 'Art-GMS' },
        { id: 'm8', original: 'ἀνθρώπου', transliteration: 'anthrōpou', english: 'Man', strongs: 'G444', morphology: 'N-GMS' },
        { id: 'm9', original: 'ἐρχόμενον', transliteration: 'erchomenon', english: 'coming', strongs: 'G2064', morphology: 'V-PNP-AMS' },
        { id: 'm10', original: 'μετὰ', transliteration: 'meta', english: 'with', strongs: 'G3326', morphology: 'Prep' },
        { id: 'm11', original: 'τῶν', transliteration: 'tōn', english: 'the', strongs: 'G3588', morphology: 'Art-GFP' },
        { id: 'm12', original: 'νεφελῶν', transliteration: 'nephelōn', english: 'clouds', strongs: 'G3507', morphology: 'N-GFP' }
      ]
    },
    parallelVerses: [
      {
        id: 'd7-13', reference: 'Daniel 7:13', textDirection: 'rtl',
        words: [
          { id: 'd1', original: 'עֲנָנֵ֣י', transliteration: 'ă·nā·nê', english: 'the clouds', strongs: 'H6050' },
          { id: 'd2', original: 'עִם֙', transliteration: '‘im', english: 'With', strongs: 'H5973' },
          { id: 'd3', original: 'בַּר־', transliteration: 'bar-', english: '(the) Son of', strongs: 'H1247' },
          { id: 'd4', original: 'אֱנָ֔שׁ', transliteration: '’ĕ·nāš,', english: 'Man', strongs: 'H606' }
        ]
      }
    ],
    steps: [
      { id: 'sp1', title: 'The Cloud Rider', content: 'In ancient Near Eastern literature, including the Old Testament (Psalm 104:3, Isaiah 19:1), "riding on the clouds" is an exclusive, majestic prerogative of God alone. No mere angel or human rides explicitly on the clouds of heaven.', focusWordIds: ['m11', 'm12', 'd1'] },
      { id: 'sp2', title: 'The High Priest\'s Reaction', content: 'By answering "I am" (**ἐγώ εἰμι**) and claiming the divine prerogative of the Daniel 7 "Son of Man" riding the clouds, the High Priest immediately tore his clothes and declared blasphemy. He completely understood Jesus was claiming ultimate Deity.', focusWordIds: ['m1', 'm2', 'm6', 'm8'] }
    ]
  },
  {
    id: 'sd-ot-pierced-one',
    argumentId: 'deity-of-christ',
    title: 'Look on ME Whom They Pierced (Zech 12:10)',
    objectionTarget: 'Jehovah\'s Witnesses',
    description: 'Yahweh prophesies that Israel will look upon "ME whom they have pierced." John quotes this directly applying it to Jesus.',
    baselineVerse: {
      id: 'j19-37', reference: 'John 19:37', textDirection: 'ltr',
      words: [
        { id: 'j1', original: 'Ὄψονται', transliteration: 'Opsontai', english: 'They will look', strongs: 'G3708', morphology: 'V-FDI-3P' },
        { id: 'j2', original: 'εἰς', transliteration: 'eis', english: 'on', strongs: 'G1519', morphology: 'Prep' },
        { id: 'j3', original: 'ὃν', transliteration: 'hon', english: '(Him) whom', strongs: 'G3739', morphology: 'RelPro-AMS' },
        { id: 'j4', original: 'ἐξεκέντησαν.', transliteration: 'exekentēsan.', english: 'they pierced.', strongs: 'G1574', morphology: 'V-AAI-3P' }
      ]
    },
    parallelVerses: [
      {
        id: 'z12-10', reference: 'Zechariah 12:10', textDirection: 'rtl',
        words: [
          { id: 'z1', original: 'אֵלַ֔י', transliteration: '’ê·lay,', english: 'upon Me', strongs: 'H413' },
          { id: 'z2', original: 'אֵ֥ת', transliteration: '’êṯ', english: 'whom', strongs: 'H853' },
          { id: 'z3', original: 'אֲשֶׁר־', transliteration: '’ă·šer-', english: 'whom', strongs: 'H834' },
          { id: 'z4', original: 'דָּקָ֑רוּ', transliteration: 'dā·qā·rū;', english: 'they have pierced;', strongs: 'H1856' }
        ]
      }
    ],
    steps: [
      { id: 'p1', title: 'The Speaker is Yahweh', content: 'In Zechariah 12:1, the speaker is explicitly identified as "Yahweh, who stretches out the heavens." In verse 10, Yahweh says "they will look on **ME** (**אֵלַ֔י**) whom they have pierced." God Himself is the one being pierced.', focusWordIds: ['z1', 'z4'] },
      { id: 'p2', title: 'John\'s Identification', content: 'John 19 explicitly quotes this exact prophecy at the crucifixion. John is directly and unmistakably identifying Jesus Christ on the cross as the Yahweh of Zechariah 12.', focusWordIds: ['j1', 'j3', 'j4'] }
    ]
  },
  {
    id: 'sd-ot-lord-lord',
    argumentId: 'deity-of-christ',
    title: 'The Lord\'s Lord (Psalm 110:1)',
    objectionTarget: 'Arianism',
    description: 'Analyzing the distinction between Yahweh and Adonai in Hebrew, mapped to the Greek Kyrios.',
    baselineVerse: {
      id: 'm22-44', reference: 'Matthew 22:44', textDirection: 'ltr',
      words: [
        { id: 'ml1', original: 'Εἶπεν', transliteration: 'Eipen', english: 'Said', strongs: 'G2036', morphology: 'V-AAI-3S' },
        { id: 'ml2', original: 'Κύριος', transliteration: 'Kyrios', english: 'the Lord [Yahweh]', strongs: 'G2962', morphology: 'N-NMS' },
        { id: 'ml3', original: 'τῷ', transliteration: 'tō', english: 'to the', strongs: 'G3588', morphology: 'Art-DMS' },
        { id: 'ml4', original: 'Κυρίῳ', transliteration: 'Kyriō', english: 'Lord [Adonai]', strongs: 'G2962', morphology: 'N-DMS' },
        { id: 'ml5', original: 'μου', transliteration: 'mou', english: 'of me', strongs: 'G1473', morphology: 'Pro-1GS' }
      ]
    },
    parallelVerses: [
      {
        id: 'p110', reference: 'Psalm 110:1', textDirection: 'rtl',
        words: [
          { id: 'pl1', original: 'נְאֻ֤ם', transliteration: 'nə·’um', english: 'The declaration', strongs: 'H5002' },
          { id: 'pl2', original: 'יְהוָ֨ה׀', transliteration: 'Yah·weh', english: 'of Yahweh', strongs: 'H3068' },
          { id: 'pl3', original: 'לַֽאדֹנִ֗י', transliteration: 'la·ḏō·nî,', english: 'to my Lord', strongs: 'H113' }
        ]
      }
    ],
    steps: [
      { id: 'll1', title: 'The Two Lords', content: 'The Hebrew clearly delineates the Father (**Yahweh**) speaking to the Son (**Adonai / my Lord**). Jesus asks the Pharisees: if the Messiah is merely David\'s human son, why would King David call him "my Lord" (**לַֽאדֹנִ֗י**)?', focusWordIds: ['pl2', 'pl3', 'ml4', 'ml5'] },
      { id: 'll2', title: 'The Pre-existent Sovereign', content: 'David acknowledges the Messiah was already existing and governing as his Sovereign Lord centuries before the incarnation. The Greek translation uses **Κύριος** for both, indicating divine sovereignty.', focusWordIds: ['ml2', 'ml4'] }
    ]
  },
  {
    id: 'sd-ot-way-of-yahweh',
    argumentId: 'deity-of-christ',
    title: 'The Way of Yahweh (Isaiah 40 vs Mark 1)',
    objectionTarget: 'Jehovah\'s Witnesses',
    description: 'John the Baptist prepares the way for Yahweh, which the Gospel directly applies to Jesus.',
    baselineVerse: {
      id: 'mk1-3', reference: 'Mark 1:3', textDirection: 'ltr',
      words: [
        { id: 'mk1', original: 'Ἑτοιμάσατε', transliteration: 'Hetoimasate', english: 'Prepare', strongs: 'G2090', morphology: 'V-AAM-2P' },
        { id: 'mk2', original: 'τὴν', transliteration: 'tēn', english: 'the', strongs: 'G3588', morphology: 'Art-AFS' },
        { id: 'mk3', original: 'ὁδὸν', transliteration: 'hodon', english: 'way', strongs: 'G3598', morphology: 'N-AFS' },
        { id: 'mk4', original: 'Κυρίου', transliteration: 'Kyriou', english: 'of the Lord', strongs: 'G2962', morphology: 'N-GMS' }
      ]
    },
    parallelVerses: [
      {
        id: 'i40-3', reference: 'Isaiah 40:3', textDirection: 'rtl',
        words: [
          { id: 'i1', original: 'פַּנּ֖וּ', transliteration: 'pan·nū', english: 'Prepare', strongs: 'H6437' },
          { id: 'i2', original: 'דֶּ֣רֶךְ', transliteration: 'de·reḵ', english: 'the way', strongs: 'H1870' },
          { id: 'i3', original: 'יְהוָ֑ה', transliteration: 'Yah·weh;', english: 'of Yahweh', strongs: 'H3068' }
        ]
      }
    ],
    steps: [
      { id: 'w1', title: 'Preparing for Yahweh', content: 'Isaiah 40 specifically prophesies a voice crying in the wilderness to prepare the way for **Yahweh** (**יְהוָ֑ה**).', focusWordIds: ['i1', 'i2', 'i3'] },
      { id: 'w2', title: 'The Fulfillment', content: 'Mark begins his Gospel by quoting this explicitly, naming John the Baptist as the voice, and declaring that the One he is preparing the way for—Jesus Christ—is the Lord (**Κυρίου**) Yahweh of Isaiah.', focusWordIds: ['mk3', 'mk4'] }
    ]
  },
  {
    id: 'sd-ot-every-knee',
    argumentId: 'deity-of-christ',
    title: 'Every Knee Shall Bow (Isa 45 vs Phil 2)',
    objectionTarget: 'Islam / Prophets Only',
    description: 'Yahweh swears that every knee will bow to Him alone. Paul applies this to Jesus.',
    baselineVerse: {
      id: 'ph2-10', reference: 'Philippians 2:10-11', textDirection: 'ltr',
      words: [
        { id: 'ph1', original: 'πᾶν', transliteration: 'pan', english: 'every', strongs: 'G3956', morphology: 'Adj-NNS' },
        { id: 'ph2', original: 'γόνυ', transliteration: 'gony', english: 'knee', strongs: 'G1119', morphology: 'N-NNS' },
        { id: 'ph3', original: 'κάμψῃ', transliteration: 'kampsē', english: 'should bow', strongs: 'G2578', morphology: 'V-AAS-3S' },
        { id: 'ph4', original: '... Κύριος', transliteration: '... Kyrios', english: '... Lord (is)', strongs: 'G2962', morphology: 'N-NMS' },
        { id: 'ph5', original: 'Ἰησοῦς', transliteration: 'Iēsous', english: 'Jesus', strongs: 'G2424', morphology: 'N-NMS' }
      ]
    },
    parallelVerses: [
      {
        id: 'i45-23', reference: 'Isaiah 45:23', textDirection: 'rtl',
        words: [
          { id: 'i4', original: 'כִּי־', transliteration: 'kî-', english: 'That', strongs: 'H3588' },
          { id: 'i5', original: 'לִי֙', transliteration: 'lî', english: 'to Me', strongs: 'H3190' },
          { id: 'i6', original: 'תִּכְרַ֣ע', transliteration: 'tiḵ·ra‘', english: 'shall bow', strongs: 'H3766' },
          { id: 'i7', original: 'כָּל־', transliteration: 'kāl-', english: 'every', strongs: 'H3605' },
          { id: 'i8', original: 'בֶּ֔רֶךְ', transliteration: 'be·reḵ,', english: 'knee', strongs: 'H1290' }
        ]
      }
    ],
    steps: [
      { id: 'kn1', title: 'Exclusive Worship', content: 'In Isaiah 45, God declares "I am God, and there is no other." He then swears by Himself: "To Me (**לִי֙**) every knee shall bow." This is an oath of absolute, exclusive divine worship.', focusWordIds: ['i5', 'i6', 'i7', 'i8'] },
      { id: 'kn2', title: 'Applying the Oath to Jesus', content: 'Paul directly quotes this exclusive oath of Yahweh and applies it to Jesus Christ. Every knee will bow at the name of Jesus, because Jesus is the Lord (**Κύριος**) originally speaking in Isaiah.', focusWordIds: ['ph2', 'ph3', 'ph4', 'ph5'] }
    ]
  },
  {
    id: 'sd-ot-angels-worship',
    argumentId: 'deity-of-christ',
    title: 'Let All Angels Worship Him (Heb 1:6)',
    objectionTarget: 'Arianism / Created Status',
    description: 'The Father commands the angels to worship the Son, quoting an OT text strictly reserved for Yahweh.',
    baselineVerse: {
      id: 'h1-6', reference: 'Hebrews 1:6', textDirection: 'ltr',
      words: [
        { id: 'h1', original: 'Καὶ', transliteration: 'Kai', english: 'And', strongs: 'G2532', morphology: 'Conj' },
        { id: 'h2', original: 'προσκυνησάτωσαν', transliteration: 'proskynēsatōsan', english: 'let worship', strongs: 'G4352', morphology: 'V-AAM-3P' },
        { id: 'h3', original: 'αὐτῷ', transliteration: 'autō', english: 'Him', strongs: 'G846', morphology: 'Pro-DMS' },
        { id: 'h4', original: 'πάντες', transliteration: 'pantes', english: 'all (the)', strongs: 'G3956', morphology: 'Adj-NMP' },
        { id: 'h5', original: 'ἄγγελοι', transliteration: 'angeloi', english: 'angels', strongs: 'G32', morphology: 'N-NMP' },
        { id: 'h6', original: 'θεοῦ.', transliteration: 'theou.', english: 'of God.', strongs: 'G2316', morphology: 'N-GMS' }
      ]
    },
    parallelVerses: [
      {
        id: 'd32-43', reference: 'Ps 97:7 / Deut 32:43 (LXX)', textDirection: 'ltr',
        words: [
          { id: 'dx1', original: 'προσκυνήσατε', transliteration: 'proskynēsate', english: 'worship', strongs: 'G4352' },
          { id: 'dx2', original: 'αὐτῷ', transliteration: 'autō', english: 'Him', strongs: 'G846' },
          { id: 'dx3', original: 'πάντες', transliteration: 'pantes', english: 'all', strongs: 'G3956' },
          { id: 'dx4', original: 'ἄγγελοι', transliteration: 'angeloi', english: 'angels', strongs: 'G32' },
          { id: 'dx5', original: 'θεοῦ', transliteration: 'theou', english: 'of God', strongs: 'G2316' }
        ]
      }
    ],
    steps: [
      { id: 'aw1', title: 'The Meaning of Proskuneō', content: 'While **προσκυνέω** can sometimes mean paying respects to a king, the context of Hebrews 1 explicitly contrasts the Son (Creator) with the angels (created). The angels are commanded to render absolute divine worship.', focusWordIds: ['h2', 'h3'] },
      { id: 'aw2', title: 'Applying the Attributes of God', content: 'The writer quotes the Septuagint (LXX) text where Yahweh demands the worship of the heavenly host, and applies it effortlessly to the Son. God does not share His glory with created beings (Isa 42:8), yet commands worship of the Son.', focusWordIds: ['dx1', 'dx2', 'dx4', 'h2', 'h5'] }
    ]
  },
  {
    id: 'sd-ot-unchanging-creator',
    argumentId: 'deity-of-christ',
    title: 'The Unchanging Creator (Ps 102 vs Heb 1)',
    objectionTarget: 'Arianism',
    description: 'A massive apologetic proof: The Father quotes a Psalm exclusively singing to Yahweh, addressing it to the Son.',
    baselineVerse: {
      id: 'h1-10', reference: 'Hebrews 1:10', textDirection: 'ltr',
      words: [
        { id: 'q1', original: 'Σὺ', transliteration: 'Sy', english: 'You,', strongs: 'G4771', morphology: 'Pro-2NS' },
        { id: 'q2', original: 'κατ’', transliteration: 'kat’', english: 'in (the)', strongs: 'G2596', morphology: 'Prep' },
        { id: 'q3', original: 'ἀρχάς,', transliteration: 'archas,', english: 'beginning,', strongs: 'G746', morphology: 'N-AFP' },
        { id: 'q4', original: 'Κύριε,', transliteration: 'Kyrie,', english: 'Lord,', strongs: 'G2962', morphology: 'N-VMS' },
        { id: 'q5', original: 'τὴν', transliteration: 'tēn', english: 'the', strongs: 'G3588', morphology: 'Art-AFS' },
        { id: 'q6', original: 'γῆν', transliteration: 'gēn', english: 'earth', strongs: 'G1093', morphology: 'N-AFS' },
        { id: 'q7', original: 'ἐθεμελίωσας', transliteration: 'ethemeliōsas', english: 'laid the foundation', strongs: 'G2311', morphology: 'V-AAI-2S' }
      ]
    },
    parallelVerses: [
      {
        id: 'ps102-25', reference: 'Psalm 102:25', textDirection: 'rtl',
        words: [
          { id: 'pq1', original: 'לְפָנִים֙', transliteration: 'lə·p̄ā·nîm', english: 'Of old', strongs: 'H6440' },
          { id: 'pq2', original: 'הָאָ֣רֶץ', transliteration: 'hā·’ā·reṣ', english: 'the earth', strongs: 'H776' },
          { id: 'pq3', original: 'יָסַ֑דְתָּ', transliteration: 'yā·saḏ·tā;', english: 'You laid the foundation', strongs: 'H3245' }
        ]
      }
    ],
    steps: [
      { id: 'uc1', title: 'The Father Addresses the Son', content: 'In Hebrews 1:8, the subject is clearly identified: "But of the Son He [the Father] says..." And in verse 10, the Father continues speaking to the Son, calling Him **Κύριε** (Lord) and Creator.', focusWordIds: ['q1', 'q4', 'q7'] },
      { id: 'uc2', title: 'A Psalm of Yahweh', content: 'The Father is quoting Psalm 102, which is explicitly a prayer of an afflicted man to Yahweh, describing Yahweh\'s eternal nature. The Father applies Yahweh\'s eternality and creation explicitly to Jesus.', focusWordIds: ['pq2', 'pq3', 'q6', 'q7'] }
    ]
  },
  {
    id: 'sd-ot-good-shepherd',
    argumentId: 'deity-of-christ',
    title: 'The Good Shepherd (Ezek 34 vs John 10)',
    objectionTarget: 'Unitarianism',
    description: 'Jesus takes the exclusive semantic title of Yahweh the Shepherd and appropriates it.',
    baselineVerse: {
      id: 'j10-11', reference: 'John 10:11', textDirection: 'ltr',
      words: [
        { id: 'g1', original: 'Ἐγώ', transliteration: 'Egō', english: 'I', strongs: 'G1473', morphology: 'Pro-1NS' },
        { id: 'g2', original: 'εἰμι', transliteration: 'eimi', english: 'am', strongs: 'G1510', morphology: 'V-PAI-1S' },
        { id: 'g3', original: 'ὁ', transliteration: 'ho', english: 'the', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 'g4', original: 'ποιμὴν', transliteration: 'poimēn', english: 'shepherd', strongs: 'G4166', morphology: 'N-NMS' },
        { id: 'g5', original: 'ὁ', transliteration: 'ho', english: 'the', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 'g6', original: 'καλός.', transliteration: 'kalos.', english: 'good.', strongs: 'G2570', morphology: 'Adj-NMS' }
      ]
    },
    parallelVerses: [
      {
        id: 'ez34-11', reference: 'Ezekiel 34:11', textDirection: 'rtl',
        words: [
          { id: 'e1', original: 'הִנְנִי־', transliteration: 'hin·nî-', english: 'Behold, I,', strongs: 'H2009' },
          { id: 'e2', original: 'אָ֕נִי', transliteration: '’ā·nî', english: 'even I,', strongs: 'H589' },
          { id: 'e3', original: 'וְדָרַשְׁתִּ֥י', transliteration: 'wə·ḏā·raš·tî', english: 'will search', strongs: 'H1875' },
          { id: 'e4', original: 'אֶת־', transliteration: '’eṯ-', english: '[for]', strongs: 'H853' },
          { id: 'e5', original: 'צֹאנִ֖י', transliteration: 'ṣō·nî', english: 'My sheep', strongs: 'H6629' }
        ]
      }
    ],
    steps: [
      { id: 'gs1', title: 'Yahweh\'s Prerogative', content: 'In Ezekiel 34, God rebukes the false human shepherds of Israel and declares that He, God alone, will step in: "Behold, I, even I, will search for my sheep... I myself will be the shepherd." (**אָ֕נִי**)', focusWordIds: ['e1', 'e2', 'e5'] },
      { id: 'gs2', title: 'I Am The Shepherd', content: 'Jesus uses the emphatic "I am" (**Ἐγώ εἰμι**) declaration, claiming to perfectly fulfill Yahweh\'s promise to pastor Israel Himself.', focusWordIds: ['g1', 'g2', 'g4', 'g6'] }
    ]
  },
  {
    id: 'sd-ot-searching-hearts',
    argumentId: 'deity-of-christ',
    title: 'Searching Minds and Hearts (Jer 17 vs Rev 2)',
    objectionTarget: 'Jehovah\'s Witnesses',
    description: 'Jesus claims the omniscient ability to search the eternal heart of mankind, a trait God says belongs only to Him.',
    baselineVerse: {
      id: 'r2-23', reference: 'Revelation 2:23', textDirection: 'ltr',
      words: [
        { id: 'sh1', original: 'ἐγώ', transliteration: 'egō', english: 'I', strongs: 'G1473', morphology: 'Pro-1NS' },
        { id: 'sh2', original: 'εἰμι', transliteration: 'eimi', english: 'am', strongs: 'G1510', morphology: 'V-PAI-1S' },
        { id: 'sh3', original: 'ὁ', transliteration: 'ho', english: 'the (One)', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 'sh4', original: 'ἐραυνῶν', transliteration: 'eraunōn', english: 'searching', strongs: 'G2045', morphology: 'V-PAP-NMS' },
        { id: 'sh5', original: 'νεφροὺς', transliteration: 'nephrous', english: 'minds [kidneys]', strongs: 'G3510', morphology: 'N-AMP' },
        { id: 'sh6', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
        { id: 'sh7', original: 'καρδίας,', transliteration: 'kardias,', english: 'hearts,', strongs: 'G2588', morphology: 'N-AFP' }
      ]
    },
    parallelVerses: [
      {
        id: 'je17-10', reference: 'Jeremiah 17:10', textDirection: 'rtl',
        words: [
          { id: 'jr1', original: 'אֲנִ֧י', transliteration: '’ă·nî', english: 'I,', strongs: 'H589' },
          { id: 'jr2', original: 'יְהוָ֛ה', transliteration: 'Yah·weh', english: 'Yahweh,', strongs: 'H3068' },
          { id: 'jr3', original: 'חֹקֵ֥ר', transliteration: 'ḥō·qêr', english: 'search', strongs: 'H2713' },
          { id: 'jr4', original: 'לֵ֖ב', transliteration: 'lêḇ', english: 'the heart,', strongs: 'H3820' }
        ]
      }
    ],
    steps: [
      { id: 'vh1', title: 'The Omniscience of Yahweh', content: 'Jeremiah 17:9-10 states the human heart is deceitful above all things, and only Yahweh (**יְהוָ֛ה**) can search and know it.', focusWordIds: ['jr1', 'jr2', 'jr3', 'jr4'] },
      { id: 'vh2', title: 'The Omniscience of Jesus', content: 'In Revelation 2, the glorified Jesus declares: "All the churches will know that I am (**ἐγώ εἰμι**) the One who searches minds and hearts." He claims identical omniscience to Yahweh.', focusWordIds: ['sh1', 'sh2', 'sh4', 'sh5', 'sh7'] }
    ]
  },
  {
    id: 'sd-ot-first-and-last',
    argumentId: 'deity-of-christ',
    title: 'The First and the Last (Isa 44 vs Rev 22)',
    objectionTarget: 'Arianism',
    description: 'The supreme title of Yahweh\'s eternal pre-existence and total authority applied directly to Jesus.',
    baselineVerse: {
      id: 'r22-13', reference: 'Revelation 22:13', textDirection: 'ltr',
      words: [
        { id: 'f1', original: 'ἐγὼ', transliteration: 'egō', english: 'I (am)', strongs: 'G1473', morphology: 'Pro-1NS' },
        { id: 'f2', original: 'τὸ', transliteration: 'to', english: 'the', strongs: 'G3588', morphology: 'Art-NNS' },
        { id: 'f3', original: 'Ἄλφα', transliteration: 'Alpha', english: 'Alpha', strongs: 'G1', morphology: 'N-LI' },
        { id: 'f4', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
        { id: 'f5', original: 'τὸ', transliteration: 'to', english: 'the', strongs: 'G3588', morphology: 'Art-NNS' },
        { id: 'f6', original: 'Ὦ,', transliteration: 'Ō,', english: 'Omega,', strongs: 'G5598', morphology: 'N-LI' },
        { id: 'f7', original: 'ὁ', transliteration: 'ho', english: 'the', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 'f8', original: 'πρῶτος', transliteration: 'prōtos', english: 'First', strongs: 'G4413', morphology: 'Adj-NMS' },
        { id: 'f9', original: 'καὶ', transliteration: 'kai', english: 'and', strongs: 'G2532', morphology: 'Conj' },
        { id: 'f10', original: 'ὁ', transliteration: 'ho', english: 'the', strongs: 'G3588', morphology: 'Art-NMS' },
        { id: 'f11', original: 'ἔσχατος,', transliteration: 'eschatos,', english: 'Last,', strongs: 'G2078', morphology: 'Adj-NMS' }
      ]
    },
    parallelVerses: [
      {
        id: 'i44-6', reference: 'Isaiah 44:6', textDirection: 'rtl',
        words: [
          { id: 'fa1', original: 'אֲנִ֤י', transliteration: '’ă·nî', english: 'I am', strongs: 'H589' },
          { id: 'fa2', original: 'רִאשׁוֹן֙', transliteration: 'ri·šō·wn', english: 'the first', strongs: 'H7223' },
          { id: 'fa3', original: 'וַאֲנִ֣י', transliteration: 'wa·’ă·nî', english: 'and I am', strongs: 'H589' },
          { id: 'fa4', original: 'אַחֲר֔וֹן', transliteration: '’a·ḥă·rō·wn,', english: 'the last;', strongs: 'H314' },
          { id: 'fa5', original: 'וּמִבַּלְעָדַ֖י', transliteration: 'ū·mib·bal·‘ā·ḏay', english: 'and besides Me', strongs: 'H1107' },
          { id: 'fa6', original: 'אֵ֥ין', transliteration: '’ên', english: 'there is no', strongs: 'H369' },
          { id: 'fa7', original: 'אֱלֹהִֽים׃', transliteration: '’ĕ·lō·hîm.', english: 'God.', strongs: 'H430' }
        ]
      }
    ],
    steps: [
      { id: 'al1', title: 'The Title of Yahweh', content: 'In Isaiah 44, Yahweh declares that He alone is "the first and the last," establishing His eternal precedence over all false gods.', focusWordIds: ['fa1', 'fa2', 'fa3', 'fa4', 'fa6', 'fa7'] },
      { id: 'al2', title: 'The Title of Jesus', content: 'In Revelation 22:12-13, Jesus says, "Behold, I am coming soon... I am the Alpha and the Omega, the first (**πρῶτος**) and the last (**ἔσχατος**)." Jesus equates Himself directly with the eternal Yahweh.', focusWordIds: ['f1', 'f3', 'f6', 'f8', 'f11'] }
    ]
  }
];
