import type { FullManuscript } from './types';

export const otherDocuments: FullManuscript[] = [
  {
    id: 'isaiah-scroll',
    designation: 'Great Isaiah Scroll (1QIsaᵃ)',
    alternateName: '1QIsaᵃ / 1Q8',
    type: 'scroll', script: 'hebrew', textType: 'Proto-Masoretic',
    date: 'c. 125 BC', material: 'Parchment (sheepskin)',
    dimensions: '734 cm long × 25.3 cm wide (when unrolled)', totalLeaves: '17 sheets sewn together',
    format: 'Scroll — 54 columns',
    location: 'Shrine of the Book, Israel Museum, Jerusalem',
    discoveredBy: 'Bedouin shepherds (Muhammed edh-Dhib and companions)',
    discoveryDate: '1947', discoveryLocation: 'Qumran Cave 1, near the Dead Sea',
    acquisitionHistory: 'Discovered in 1947 by Bedouin shepherds who found clay jars containing scrolls in a cave near Qumran. Initially sold to antiquities dealers, eventually acquired by the State of Israel. Yigael Yadin purchased four scrolls from a New York dealer in 1954.',
    contents: 'Complete Book of Isaiah (all 66 chapters)',
    contentsDetail: 'The only complete book of the Hebrew Bible found among the Dead Sea Scrolls. Contains all 66 chapters of Isaiah with remarkably few significant variants from the Masoretic Text copied 1,000 years later.',
    significance: 'The oldest complete copy of any book of the Hebrew Bible, predating the oldest Masoretic manuscripts by over 1,000 years. Its near-identical text to the medieval Masoretic tradition demonstrates extraordinary scribal accuracy across a millennium. Isaiah 53 (the Suffering Servant) is of particular Christological importance.',
    detailedDescription: `The Great Isaiah Scroll is the crown jewel of the Dead Sea Scrolls and one of the most important archaeological discoveries of the 20th century. Found in 1947 in Cave 1 at Qumran, this remarkably well-preserved scroll contains the complete text of the book of Isaiah in Hebrew.

The scroll dates to approximately 125 BC, making it over 1,000 years older than the oldest previously known Hebrew manuscripts of Isaiah (the Masoretic text tradition, with the oldest complete manuscripts from c. 1000 AD). When scholars compared the two, they found the texts were nearly identical — demonstrating that Jewish scribes had transmitted the text of Isaiah with extraordinary fidelity for over a millennium.

The scroll is written in 54 columns on 17 sheets of parchment sewn together. It uses a Hasmonean-era form of the Hebrew script. The scribe made occasional errors that were corrected by a second hand. The spelling is often "plene" (using more vowel letters than the Masoretic Text), reflecting the scribal conventions of the Second Temple period.

Of particular theological significance is Isaiah 52:13–53:12 (the Suffering Servant passage), which Christians interpret as a prophecy of Christ's atoning death. The Great Isaiah Scroll preserves this passage in a text that substantially agrees with the Masoretic Text, confirming that the Christian interpretation is based on an ancient and stable Hebrew text, not a later corruption.

The scroll also contains sectarian markings and paragraph divisions that differ from the Masoretic tradition, providing insights into how the Qumran community read and interpreted Isaiah.`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Great_Isaiah_Scroll.jpg', caption: 'The Great Isaiah Scroll (1QIsaᵃ) — Complete scroll unrolled', attribution: 'Israel Museum / Shrine of the Book', license: 'Public Domain' },
    ],
    passages: [{
      title: 'Isaiah 53:1–12 — The Suffering Servant',
      reference: 'Isaiah 53:1–12',
      notes: 'This passage is one of the most theologically significant in the Hebrew Bible. The Great Isaiah Scroll preserves it in a text nearly identical to the Masoretic Text, confirming the antiquity of the reading.',
      verses: [
        { reference: 'Isaiah 53:1', originalText: 'מִי הֶאֱמִין לִשְׁמֻעָתֵנוּ וּזְרוֹעַ יְהוָה עַל־מִי נִגְלָתָה', words: [
          { original: 'מִי', transliteration: 'mi', gloss: 'Who', strongs: 'H4310', lemma: 'מִי' },
          { original: 'הֶאֱמִין', transliteration: 'he\'emin', gloss: 'has believed', strongs: 'H539', lemma: 'אָמַן' },
          { original: 'לִשְׁמֻעָתֵנוּ', transliteration: 'lishmu\'atenu', gloss: 'our report', strongs: 'H8052', lemma: 'שְׁמוּעָה' },
          { original: 'וּזְרוֹעַ', transliteration: 'uzro\'a', gloss: 'and the arm of', strongs: 'H2220', lemma: 'זְרוֹעַ' },
          { original: 'יְהוָה', transliteration: 'Yahweh', gloss: 'the LORD', strongs: 'H3068', lemma: 'יְהוָה' },
          { original: 'עַל', transliteration: 'al', gloss: 'upon', strongs: 'H5921', lemma: 'עַל' },
          { original: 'מִי', transliteration: 'mi', gloss: 'whom', strongs: 'H4310', lemma: 'מִי' },
          { original: 'נִגְלָתָה', transliteration: 'niglatah', gloss: 'has been revealed', strongs: 'H1540', lemma: 'גָּלָה' }
        ]},
        { reference: 'Isaiah 53:2', originalText: 'וַיַּעַל כַּיּוֹנֵק לְפָנָיו וְכַשֹּׁרֶשׁ מֵאֶרֶץ צִיָּה לֹא־תֹאַר לוֹ וְלֹא הָדָר וְנִרְאֵהוּ וְלֹא־מַרְאֶה וְנֶחְמְדֵהוּ', words: [
          { original: 'וַיַּעַל', transliteration: 'vayya\'al', gloss: 'For he grew up', strongs: 'H5927', lemma: 'עָלָה' },
          { original: 'כַּיּוֹנֵק', transliteration: 'kayyonek', gloss: 'like a young plant', strongs: 'H3126', lemma: 'יוֹנֵק' },
          { original: 'לְפָנָיו', transliteration: 'lefanav', gloss: 'before Him', strongs: 'H6440', lemma: 'פָּנִים' },
          { original: 'וְכַשֹּׁרֶשׁ', transliteration: 'vekhashoresh', gloss: 'and like a root', strongs: 'H8328', lemma: 'שֹׁרֶשׁ' },
          { original: 'מֵאֶרֶץ', transliteration: 'me\'eretz', gloss: 'out of ground', strongs: 'H776', lemma: 'אֶרֶץ' },
          { original: 'צִיָּה', transliteration: 'tziyyah', gloss: 'dry', strongs: 'H6723', lemma: 'צִיָּה' },
          { original: 'לֹא־תֹאַר', transliteration: 'lo-to\'ar', gloss: 'no form', strongs: 'H8389', lemma: 'תֹּאַר' },
          { original: 'לוֹ', transliteration: 'lo', gloss: 'he had', strongs: 'H0', lemma: 'לְ' },
          { original: 'וְלֹא', transliteration: 'velo', gloss: 'and no', strongs: 'H3808', lemma: 'לֹא' },
          { original: 'הָדָר', transliteration: 'hadar', gloss: 'majesty', strongs: 'H1926', lemma: 'הָדָר' },
          { original: 'וְנִרְאֵהוּ', transliteration: 'venir\'ehu', gloss: 'that we should look at him', strongs: 'H7200', lemma: 'רָאָה' },
          { original: 'וְלֹא־מַרְאֶה', transliteration: 'velo-mar\'eh', gloss: 'and no beauty', strongs: 'H4758', lemma: 'מַרְאֶה' },
          { original: 'וְנֶחְמְדֵהוּ', transliteration: 'venechmedehu', gloss: 'that we should desire him', strongs: 'H2530', lemma: 'חָמַד' }
        ]},
        { reference: 'Isaiah 53:3', originalText: 'נִבְזֶ֞ה וַחֲדַ֣ל אִישִׁ֗ים אִ֥ישׁ מַכְאֹב֖וֹת וִיד֣וּעַ חֹ֑לִי וּכְמַסְתֵּ֤ר פָּנִים֙ מִמֶּ֔נּוּ נִבְזֶ֖ה וְלֹ֥א חֲשַׁבְנֻֽהוּ', words: [
          { original: 'נִבְזֶה', transliteration: 'nivzeh', gloss: 'He was despised', strongs: 'H959', lemma: 'בָּזָה' },
          { original: 'וַחֲדַל', transliteration: 'vachadal', gloss: 'and forsaken', strongs: 'H2310', lemma: 'חָדֵל' },
          { original: 'אִישִׁים', transliteration: 'ishim', gloss: 'of men', strongs: 'H376', lemma: 'אִישׁ' },
          { original: 'אִישׁ', transliteration: 'ish', gloss: 'a man', strongs: 'H376', lemma: 'אִישׁ' },
          { original: 'מַכְאֹבוֹת', transliteration: "makh'ovot", gloss: 'of sorrows', strongs: 'H4341', lemma: 'מַכְאוֹב' },
          { original: 'וִידוּעַ', transliteration: "vidu'a", gloss: 'and acquainted with', strongs: 'H3045', lemma: 'יָדַע' },
          { original: 'חֹלִי', transliteration: 'choli', gloss: 'grief/sickness', strongs: 'H2483', lemma: 'חֳלִי' },
          { original: 'וּכְמַסְתֵּר', transliteration: 'ukhmaster', gloss: 'and as one hiding', strongs: 'H5641', lemma: 'סָתַר' },
          { original: 'פָּנִים', transliteration: 'panim', gloss: 'faces', strongs: 'H6440', lemma: 'פָּנִים' },
          { original: 'מִמֶּנּוּ', transliteration: 'mimmennu', gloss: 'from him', strongs: 'H4480', lemma: 'מִן' },
          { original: 'נִבְזֶה', transliteration: 'nivzeh', gloss: 'he was despised', strongs: 'H959', lemma: 'בָּזָה' },
          { original: 'וְלֹא', transliteration: "v'lo", gloss: 'and not', strongs: 'H3808', lemma: 'לֹא' },
          { original: 'חֲשַׁבְנֻהוּ', transliteration: 'chashavnuhu', gloss: 'we esteemed him', strongs: 'H2803', lemma: 'חָשַׁב' },
        ]},
        { reference: 'Isaiah 53:4', originalText: 'אָכֵ֞ן חֳלָיֵ֣נוּ ה֣וּא נָשָׂ֗א וּמַכְאֹבֵ֙ינוּ֙ סְבָלָ֔ם וַאֲנַ֣חְנוּ חֲשַׁבְנֻ֔הוּ נָג֛וּעַ מֻכֵּ֥ה אֱלֹהִ֖ים וּמְעֻנֶּֽה', words: [
          { original: 'אָכֵן', transliteration: 'akhen', gloss: 'Surely', strongs: 'H403', lemma: 'אָכֵן' },
          { original: 'חֳלָיֵנוּ', transliteration: 'cholayenu', gloss: 'our sicknesses/griefs', strongs: 'H2483', lemma: 'חֳלִי' },
          { original: 'הוּא', transliteration: 'hu', gloss: 'he', strongs: 'H1931', lemma: 'הוּא' },
          { original: 'נָשָׂא', transliteration: 'nasa', gloss: 'bore/carried', strongs: 'H5375', lemma: 'נָשָׂא' },
          { original: 'וּמַכְאֹבֵינוּ', transliteration: "umakh'oveynu", gloss: 'and our pains', strongs: 'H4341', lemma: 'מַכְאוֹב' },
          { original: 'סְבָלָם', transliteration: 'sevalam', gloss: 'he carried them', strongs: 'H5445', lemma: 'סָבַל' },
          { original: 'וַאֲנַחְנוּ', transliteration: 'va-anachnu', gloss: 'yet we', strongs: 'H587', lemma: 'אֲנַחְנוּ' },
          { original: 'חֲשַׁבְנֻהוּ', transliteration: 'chashavnuhu', gloss: 'esteemed him', strongs: 'H2803', lemma: 'חָשַׁב' },
          { original: 'נָגוּעַ', transliteration: "nagu'a", gloss: 'stricken', strongs: 'H5060', lemma: 'נָגַע' },
          { original: 'מֻכֵּה', transliteration: 'mukkeh', gloss: 'struck', strongs: 'H5221', lemma: 'נָכָה' },
          { original: 'אֱלֹהִים', transliteration: 'Elohim', gloss: 'by God', strongs: 'H430', lemma: 'אֱלֹהִים' },
          { original: 'וּמְעֻנֶּה', transliteration: "um'unneh", gloss: 'and afflicted', strongs: 'H6031', lemma: 'עָנָה' },
        ]},
        { reference: 'Isaiah 53:5', originalText: 'וְהוּא֙ מְחֹלָ֣ל מִפְּשָׁעֵ֔נוּ מְדֻכָּ֖א מֵעֲוֺנֹתֵ֑ינוּ מוּסַ֤ר שְׁלוֹמֵ֙נוּ֙ עָלָ֔יו וּבַחֲבֻרָת֖וֹ נִרְפָּא־לָֽנוּ', words: [
          { original: 'וְהוּא', transliteration: "v'hu", gloss: 'But he', strongs: 'H1931', lemma: 'הוּא' },
          { original: 'מְחֹלָל', transliteration: 'mecholal', gloss: 'was pierced/wounded', strongs: 'H2490', lemma: 'חָלַל' },
          { original: 'מִפְּשָׁעֵנוּ', transliteration: "mippesha'enu", gloss: 'for our transgressions', strongs: 'H6588', lemma: 'פֶּשַׁע' },
          { original: 'מְדֻכָּא', transliteration: "m'dukka", gloss: 'crushed', strongs: 'H1792', lemma: 'דָּכָא' },
          { original: 'מֵעֲוֺנֹתֵינוּ', transliteration: "me'avonoteynu", gloss: 'for our iniquities', strongs: 'H5771', lemma: 'עָוֺן' },
          { original: 'מוּסַר', transliteration: 'musar', gloss: 'the chastisement', strongs: 'H4148', lemma: 'מוּסָר' },
          { original: 'שְׁלוֹמֵנוּ', transliteration: 'shelomenu', gloss: 'of our peace', strongs: 'H7965', lemma: 'שָׁלוֹם' },
          { original: 'עָלָיו', transliteration: 'alav', gloss: 'upon him', strongs: 'H5921', lemma: 'עַל' },
          { original: 'וּבַחֲבֻרָתוֹ', transliteration: 'uvachaburato', gloss: 'and by his stripes', strongs: 'H2250', lemma: 'חַבּוּרָה' },
          { original: 'נִרְפָּא', transliteration: "nirpa", gloss: 'we are healed', strongs: 'H7495', lemma: 'רָפָא' },
          { original: 'לָנוּ', transliteration: 'lanu', gloss: 'for us', strongs: 'H0', lemma: 'לְ' },
        ]},
        { reference: 'Isaiah 53:6', originalText: 'כֻּלָּ֙נוּ֙ כַּצֹּ֣אן תָּעִ֔ינוּ אִ֥ישׁ לְדַרְכּ֖וֹ פָּנִ֑ינוּ וַיהוָ֛ה הִפְגִּ֥יעַ בּ֖וֹ אֵ֥ת עֲוֺ֥ן כֻּלָּֽנוּ', words: [
          { original: 'כֻּלָּנוּ', transliteration: 'kullanu', gloss: 'All of us', strongs: 'H3605', lemma: 'כֹּל' },
          { original: 'כַּצֹּאן', transliteration: 'katson', gloss: 'like sheep', strongs: 'H6629', lemma: 'צֹאן' },
          { original: 'תָּעִינוּ', transliteration: "ta'inu", gloss: 'have gone astray', strongs: 'H8582', lemma: 'תָּעָה' },
          { original: 'אִישׁ', transliteration: 'ish', gloss: 'each', strongs: 'H376', lemma: 'אִישׁ' },
          { original: 'לְדַרְכּוֹ', transliteration: 'ledarko', gloss: 'to his own way', strongs: 'H1870', lemma: 'דֶּרֶךְ' },
          { original: 'פָּנִינוּ', transliteration: 'paninu', gloss: 'we have turned', strongs: 'H6437', lemma: 'פָּנָה' },
          { original: 'וַיהוָה', transliteration: 'vaYHWH', gloss: 'and the LORD', strongs: 'H3068', lemma: 'יְהוָה' },
          { original: 'הִפְגִּיעַ', transliteration: "hifgi'a", gloss: 'has laid on', strongs: 'H6293', lemma: 'פָּגַע' },
          { original: 'בּוֹ', transliteration: 'bo', gloss: 'him', strongs: 'H0', lemma: 'בְּ' },
          { original: 'אֵת', transliteration: 'et', gloss: '(direct object marker)', strongs: 'H853', lemma: 'אֵת' },
          { original: 'עֲוֺן', transliteration: 'avon', gloss: 'the iniquity', strongs: 'H5771', lemma: 'עָוֺן' },
          { original: 'כֻּלָּנוּ', transliteration: 'kullanu', gloss: 'of us all', strongs: 'H3605', lemma: 'כֹּל' },
        ]},
        { reference: 'Isaiah 53:7', originalText: 'נִגַּשׂ וְהוּא נַעֲנֶה וְלֹא יִפְתַּח־פִּיו כַּשֶּׂה לַטֶּבַח יוּבָל וּכְרָחֵל לִפְנֵי גֹּזְזֶיהָ נֶאֱלָמָה וְלֹא יִפְתַּח פִּיו', words: [
          { original: 'נִגַּשׂ', transliteration: 'nigas', gloss: 'He was oppressed', strongs: 'H5065', lemma: 'נָגַשׂ' },
          { original: 'וְהוּא', transliteration: 'vehu', gloss: 'and he', strongs: 'H1931', lemma: 'הוּא' },
          { original: 'נַעֲנֶה', transliteration: 'na\'aneh', gloss: 'was afflicted', strongs: 'H6031', lemma: 'עָנָה' },
          { original: 'וְלֹא', transliteration: 'velo', gloss: 'yet not', strongs: 'H3808', lemma: 'לֹא' },
          { original: 'יִפְתַּח', transliteration: 'yiftach', gloss: 'did he open', strongs: 'H6605', lemma: 'פָּתַח' },
          { original: 'פִּיו', transliteration: 'piv', gloss: 'his mouth', strongs: 'H6310', lemma: 'פֶּה' },
          { original: 'כַּשֶּׂה', transliteration: 'kaseh', gloss: 'Like a lamb', strongs: 'H7716', lemma: 'שֶׂה' },
          { original: 'לַטֶּבַח', transliteration: 'latevach', gloss: 'to the slaughter', strongs: 'H2874', lemma: 'טֶבַח' },
          { original: 'יוּבָל', transliteration: 'yuval', gloss: 'that is led', strongs: 'H2986', lemma: 'יָבַל' },
          { original: 'וּכְרָחֵל', transliteration: 'ukhrachel', gloss: 'and like a sheep', strongs: 'H7353', lemma: 'רָחֵל' },
          { original: 'לִפְנֵי', transliteration: 'lifnei', gloss: 'before', strongs: 'H6440', lemma: 'פָּנִים' },
          { original: 'גֹּזְזֶיהָ', transliteration: 'gozezeiha', gloss: 'its shearers', strongs: 'H1494', lemma: 'גָּזַז' },
          { original: 'נֶאֱלָמָה', transliteration: 'ne\'elamah', gloss: 'is silent', strongs: 'H481', lemma: 'אָלַם' },
          { original: 'וְלֹא', transliteration: 'velo', gloss: 'so not', strongs: 'H3808', lemma: 'לֹא' },
          { original: 'יִפְתַּח', transliteration: 'yiftach', gloss: 'he did open', strongs: 'H6605', lemma: 'פָּתַח' },
          { original: 'פִּיו', transliteration: 'piv', gloss: 'his mouth', strongs: 'H6310', lemma: 'פֶּה' }
        ]},
        { reference: 'Isaiah 53:8', originalText: 'מֵעֹצֶר וּמִמִּשְׁפָּט לֻקָּח וְאֶת־דּוֹרוֹ מִי יְשׂוֹחֵחַ כִּי נִגְזַר מֵאֶרֶץ חַיִּים מִפֶּשַׁע עַמִּי נֶגַע לָמוֹ', words: [
          { original: 'מֵעֹצֶר', transliteration: 'me\'otzer', gloss: 'By oppression', strongs: 'H6115', lemma: 'עֹצֶר' },
          { original: 'וּמִמִּשְׁפָּט', transliteration: 'umimmishpat', gloss: 'and judgment', strongs: 'H4941', lemma: 'מִשְׁפָּט' },
          { original: 'לֻקָּח', transliteration: 'lukach', gloss: 'he was taken away', strongs: 'H3947', lemma: 'לָקַח' },
          { original: 'וְאֶת', transliteration: 've\'et', gloss: 'and as for', strongs: 'H853', lemma: 'אֵת' },
          { original: 'דּוֹרוֹ', transliteration: 'doro', gloss: 'his generation', strongs: 'H1755', lemma: 'דּוֹר' },
          { original: 'מִי', transliteration: 'mi', gloss: 'who', strongs: 'H4310', lemma: 'מִי' },
          { original: 'יְשׂוֹחֵחַ', transliteration: 'yesochach', gloss: 'considered', strongs: 'H7878', lemma: 'שִׂיחַ' },
          { original: 'כִּי', transliteration: 'ki', gloss: 'That', strongs: 'H3588', lemma: 'כִּי' },
          { original: 'נִגְזַר', transliteration: 'nigzar', gloss: 'he was cut off', strongs: 'H1504', lemma: 'גָּזַר' },
          { original: 'מֵאֶרֶץ', transliteration: 'me\'eretz', gloss: 'from the land', strongs: 'H776', lemma: 'אֶרֶץ' },
          { original: 'חַיִּים', transliteration: 'chayyim', gloss: 'of the living', strongs: 'H2416', lemma: 'חַי' },
          { original: 'מִפֶּשַׁע', transliteration: 'mipesha', gloss: 'for the transgression', strongs: 'H6588', lemma: 'פֶּשַׁע' },
          { original: 'עַמִּי', transliteration: 'ammi', gloss: 'of my people', strongs: 'H5971', lemma: 'עַם' },
          { original: 'נֶגַע', transliteration: 'nega', gloss: 'stricken', strongs: 'H5061', lemma: 'נֶגַע' },
          { original: 'לָמוֹ', transliteration: 'lamo', gloss: 'to them', strongs: 'H0', lemma: 'לְ' }
        ]},
        { reference: 'Isaiah 53:9', originalText: 'וַיִּתֵּן אֶת־רְשָׁעִים קִבְרוֹ וְאֶת־עָשִׁיר בְּמֹתָיו עַל לֹא־חָמָס עָשָׂה וְלֹא מִרְמָה בְּפִיו', words: [
          { original: 'וַיִּתֵּן', transliteration: 'vayitten', gloss: 'And they made', strongs: 'H5414', lemma: 'נָתַן' },
          { original: 'אֶת', transliteration: 'et', gloss: 'with', strongs: 'H854', lemma: 'אֵת' },
          { original: 'רְשָׁעִים', transliteration: 'resha\'im', gloss: 'wicked men', strongs: 'H7563', lemma: 'רָשָׁע' },
          { original: 'קִבְרוֹ', transliteration: 'kivro', gloss: 'his grave', strongs: 'H6913', lemma: 'קֶבֶר' },
          { original: 'וְאֶת', transliteration: 've\'et', gloss: 'and with', strongs: 'H854', lemma: 'אֵת' },
          { original: 'עָשִׁיר', transliteration: 'ashir', gloss: 'a rich man', strongs: 'H6223', lemma: 'עָשִׁיר' },
          { original: 'בְּמֹתָיו', transliteration: 'bemotav', gloss: 'in his death', strongs: 'H4194', lemma: 'מָוֶת' },
          { original: 'עַל', transliteration: 'al', gloss: 'because', strongs: 'H5921', lemma: 'עַל' },
          { original: 'לֹא', transliteration: 'lo', gloss: 'no', strongs: 'H3808', lemma: 'לֹא' },
          { original: 'חָמָס', transliteration: 'chamas', gloss: 'violence', strongs: 'H2555', lemma: 'חָמָס' },
          { original: 'עָשָׂה', transliteration: 'asah', gloss: 'he had done', strongs: 'H6213', lemma: 'עָשָׂה' },
          { original: 'וְלֹא', transliteration: 'velo', gloss: 'and not', strongs: 'H3808', lemma: 'לֹא' },
          { original: 'מִרְמָה', transliteration: 'mirmah', gloss: 'deceit', strongs: 'H4820', lemma: 'מִרְמָה' },
          { original: 'בְּפִיו', transliteration: 'bepiv', gloss: 'in his mouth', strongs: 'H6310', lemma: 'פֶּה' }
        ]},
        { reference: 'Isaiah 53:10', originalText: 'וַיהוָה חָפֵץ דַּכְּאוֹ הֶחֱלִי אִם־תָּשִׂים אָשָׁם נַפְשׁוֹ יִרְאֶה זֶרַע יַאֲרִיךְ יָמִים וְחֵפֶץ יְהוָה בְּיָדוֹ יִצְלָח', words: [
          { original: 'וַיהוָה', transliteration: 'vaYHWH', gloss: 'Yet it pleased the LORD', strongs: 'H3068', lemma: 'יְהוָה' },
          { original: 'חָפֵץ', transliteration: 'chafetz', gloss: 'to crush him', strongs: 'H2654', lemma: 'חָפֵץ' },
          { original: 'דַּכְּאוֹ', transliteration: 'dak\'o', gloss: 'he has put him to grief', strongs: 'H1792', lemma: 'דָּכָא' },
          { original: 'הֶחֱלִי', transliteration: 'hecheli', gloss: 'to grief', strongs: 'H2470', lemma: 'חָלָה' },
          { original: 'אִם', transliteration: 'im', gloss: 'when', strongs: 'H518', lemma: 'אִם' },
          { original: 'תָּשִׂים', transliteration: 'tasim', gloss: 'his soul makes', strongs: 'H7760', lemma: 'שׂוּם' },
          { original: 'אָשָׁם', transliteration: 'asham', gloss: 'an offering for guilt', strongs: 'H817', lemma: 'אָשָׁם' },
          { original: 'נַפְשׁוֹ', transliteration: 'nafsho', gloss: 'his soul', strongs: 'H5315', lemma: 'נֶפֶשׁ' },
          { original: 'יִרְאֶה', transliteration: 'yir\'eh', gloss: 'he shall see', strongs: 'H7200', lemma: 'רָאָה' },
          { original: 'זֶרַע', transliteration: 'zera', gloss: 'his offspring', strongs: 'H2233', lemma: 'זֶרַע' },
          { original: 'יַאֲרִיךְ', transliteration: 'ya\'arikh', gloss: 'he shall prolong', strongs: 'H748', lemma: 'אָרַךְ' },
          { original: 'יָמִים', transliteration: 'yamim', gloss: 'his days', strongs: 'H3117', lemma: 'יוֹם' },
          { original: 'וְחֵפֶץ', transliteration: 'vechefetz', gloss: 'and the will', strongs: 'H2656', lemma: 'חֵפֶץ' },
          { original: 'יְהוָה', transliteration: 'Yahweh', gloss: 'of the LORD', strongs: 'H3068', lemma: 'יְהוָה' },
          { original: 'בְּיָדוֹ', transliteration: 'beyado', gloss: 'in his hand', strongs: 'H3027', lemma: 'יָד' },
          { original: 'יִצְלָח', transliteration: 'yitzlach', gloss: 'shall prosper', strongs: 'H6743', lemma: 'צָלַח' }
        ]},
        { reference: 'Isaiah 53:11', originalText: 'מֵעֲמַל נַפְשׁוֹ יִרְאֶה יִשְׂבָּע בְּדַעְתּוֹ יַצְדִּיק צַדִּיק עַבְדִּי לָרַבִּים וַעֲוֺנֹתָם הוּא יִסְבֹּל', words: [
          { original: 'מֵעֲמַל', transliteration: 'me\'amal', gloss: 'Out of the anguish', strongs: 'H5999', lemma: 'עָמָל' },
          { original: 'נַפְשׁוֹ', transliteration: 'nafsho', gloss: 'of his soul', strongs: 'H5315', lemma: 'נֶפֶשׁ' },
          { original: 'יִרְאֶה', transliteration: 'yir\'eh', gloss: 'he shall see', strongs: 'H7200', lemma: 'רָאָה' },
          { original: 'יִשְׂבָּע', transliteration: 'yisba', gloss: 'and be satisfied', strongs: 'H7646', lemma: 'שָׂבַע' },
          { original: 'בְּדַעְתּוֹ', transliteration: 'beda\'to', gloss: 'by his knowledge', strongs: 'H1847', lemma: 'דַּעַת' },
          { original: 'יַצְדִּיק', transliteration: 'yatzdik', gloss: 'shall make righteous', strongs: 'H6663', lemma: 'צָדַק' },
          { original: 'צַדִּיק', transliteration: 'tzaddik', gloss: 'the righteous one', strongs: 'H6662', lemma: 'צַדִּיק' },
          { original: 'עַבְדִּי', transliteration: 'avdi', gloss: 'my servant', strongs: 'H5650', lemma: 'עֶבֶד' },
          { original: 'לָרַבִּים', transliteration: 'larabbim', gloss: 'many', strongs: 'H7227', lemma: 'רַב' },
          { original: 'וַעֲוֺנֹתָם', transliteration: 'va\'avonotam', gloss: 'and their iniquities', strongs: 'H5771', lemma: 'עָוֺן' },
          { original: 'הוּא', transliteration: 'hu', gloss: 'he', strongs: 'H1931', lemma: 'הוּא' },
          { original: 'יִסְבֹּל', transliteration: 'yisbol', gloss: 'shall bear', strongs: 'H5445', lemma: 'סָבַל' }
        ]},
        { reference: 'Isaiah 53:12', originalText: 'לָכֵן אֲחַלֶּק־לוֹ בָרַבִּים וְאֶת־עֲצוּמִים יְחַלֵּק שָׁלָל תַּחַת אֲשֶׁר הֶעֱרָה לַמָּוֶת נַפְשׁוֹ וְאֶת־פֹּשְׁעִים נִמְנָה וְהוּא חֵטְא־רַבִּים נָשָׂא וְלַפֹּשְׁעִים יַפְגִּיעַ', words: [
          { original: 'לָכֵן', transliteration: 'lakhen', gloss: 'Therefore', strongs: 'H3651', lemma: 'כֵּן' },
          { original: 'אֲחַלֶּק', transliteration: 'achallek', gloss: 'I will divide', strongs: 'H2505', lemma: 'חָלַק' },
          { original: 'לוֹ', transliteration: 'lo', gloss: 'him', strongs: 'H0', lemma: 'לְ' },
          { original: 'בָרַבִּים', transliteration: 'varabbim', gloss: 'a portion with the many', strongs: 'H7227', lemma: 'רַב' },
          { original: 'וְאֶת', transliteration: 've\'et', gloss: 'and with', strongs: 'H854', lemma: 'אֵת' },
          { original: 'עֲצוּמִים', transliteration: 'atzumim', gloss: 'the strong', strongs: 'H6099', lemma: 'עָצוּם' },
          { original: 'יְחַלֵּק', transliteration: 'yechallek', gloss: 'he shall divide', strongs: 'H2505', lemma: 'חָלַק' },
          { original: 'שָׁלָל', transliteration: 'shalal', gloss: 'the spoil', strongs: 'H7998', lemma: 'שָׁלָל' },
          { original: 'תַּחַת', transliteration: 'tachat', gloss: 'because', strongs: 'H8478', lemma: 'תַּחַת' },
          { original: 'אֲשֶׁר', transliteration: 'asher', gloss: 'that', strongs: 'H834', lemma: 'אֲשֶׁר' },
          { original: 'הֶעֱרָה', transliteration: 'he\'erah', gloss: 'he poured out', strongs: 'H6168', lemma: 'עָרָה' },
          { original: 'לַמָּוֶת', transliteration: 'lammavet', gloss: 'to death', strongs: 'H4194', lemma: 'מָוֶת' },
          { original: 'נַפְשׁוֹ', transliteration: 'nafsho', gloss: 'his soul', strongs: 'H5315', lemma: 'נֶפֶשׁ' },
          { original: 'וְאֶת', transliteration: 've\'et', gloss: 'and with', strongs: 'H854', lemma: 'אֵת' },
          { original: 'פֹּשְׁעִים', transliteration: 'poshe\'im', gloss: 'transgressors', strongs: 'H6586', lemma: 'פָּשַׁע' },
          { original: 'נִמְנָה', transliteration: 'nimnah', gloss: 'was numbered', strongs: 'H4487', lemma: 'מָנָה' },
          { original: 'וְהוּא', transliteration: 'vehu', gloss: 'yet he', strongs: 'H1931', lemma: 'הוּא' },
          { original: 'חֵטְא', transliteration: 'chet', gloss: 'the sin', strongs: 'H2399', lemma: 'חֵטְא' },
          { original: 'רַבִּים', transliteration: 'rabbim', gloss: 'of many', strongs: 'H7227', lemma: 'רַב' },
          { original: 'נָשָׂא', transliteration: 'nasa', gloss: 'bore', strongs: 'H5375', lemma: 'נָשָׂא' },
          { original: 'וְלַפֹּשְׁעִים', transliteration: 'velapposhe\'im', gloss: 'and makes intercession for the transgressors', strongs: 'H6293', lemma: 'פָּגַע' },
          { original: 'יַפְגִּיעַ', transliteration: 'yafgi\'a', gloss: 'makes intercession', strongs: 'H6293', lemma: 'פָּגַע' }
        ]}
      ],
      variants: [
        { reference: 'Isaiah 53:1-12', thisReading: '1QIsaᵃ agrees substantially with the Masoretic Text', majorityReading: 'Masoretic Text (BHS)', note: 'Minor spelling differences (plene vs. defective) but no significant variants in this passage.' },
      ]
    }],
    bibliography: [
      'Burrows, Millar. The Dead Sea Scrolls of St. Mark\'s Monastery. Vol. 1. New Haven: ASOR, 1950.',
      'Ulrich, Eugene and Peter Flint. Qumran Cave 1.II: The Isaiah Scrolls. DJD XXXII. Oxford: Clarendon, 2010.',
    ],
    relatedManuscripts: ['aleppo-codex', 'leningrad-codex'],
    onlineResources: [
      { label: 'The Digital Dead Sea Scrolls — Israel Museum', url: 'https://www.deadseascrolls.org.il/' },
      { label: 'Leon Levy Dead Sea Scrolls Digital Library', url: 'https://www.deadseascrolls.org.il/explore-the-archive' },
    ]
  },
  {
    id: 'leningrad-codex',
    designation: 'Leningrad Codex (L)',
    alternateName: 'Codex Leningradensis / Firkovich B 19A',
    type: 'codex', script: 'hebrew', textType: 'Masoretic (Ben Asher)',
    date: '1008–1009 AD', material: 'Parchment', dimensions: '22.3 × 16 cm',
    totalLeaves: '491 leaves', columns: 3, linesPerPage: '21 lines per column',
    format: 'Codex — three columns per page (for most books)',
    location: 'National Library of Russia, St Petersburg',
    discoveredBy: 'Abraham Firkovich (acquired from Cairo)',
    discoveryDate: '19th century', discoveryLocation: 'Cairo, Egypt',
    contents: 'Complete Hebrew Bible (Tanakh) — the oldest complete manuscript of the Hebrew Bible',
    significance: 'The oldest complete manuscript of the entire Hebrew Bible. It is the base text for Biblia Hebraica Stuttgartensia (BHS) and Biblia Hebraica Quinta (BHQ) — the standard scholarly editions of the Hebrew Bible used worldwide.',
    detailedDescription: `The Leningrad Codex is the oldest complete manuscript of the Hebrew Bible and the most important manuscript for modern Hebrew Bible scholarship. Written in Cairo in 1008–1009 AD, it follows the Ben Asher Masoretic tradition — considered the most authoritative form of the biblical text.

The codex was copied by the scribe Samuel ben Jacob and contains notes indicating that it was corrected against manuscripts prepared by Aaron ben Moses ben Asher, the last and greatest of the Ben Asher family of Masoretes.

Since the mid-20th century, it has served as the base text for all major critical editions of the Hebrew Bible, including the Biblia Hebraica (BH3, BHS, BHQ). Every modern translation of the Old Testament is ultimately based on this manuscript's text.

The codex contains elaborate illuminated carpet pages at the beginning — geometric designs using micrographic text (tiny biblical passages arranged in patterns). These are among the finest examples of medieval Jewish manuscript art.`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Leningrad_Codex_Folio_474a.jpg/1280px-Leningrad_Codex_Folio_474a.jpg', caption: 'Leningrad Codex — Carpet page with micrographic text', attribution: 'National Library of Russia', license: 'Public Domain' }
    ],
    passages: [{
      title: 'Genesis 1:1–5 — The Creation',
      reference: 'Genesis 1:1–5', notes: 'The opening of the Hebrew Bible as preserved in the oldest complete manuscript.',
      verses: [
        { reference: 'Genesis 1:1', originalText: 'בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ', words: [
          { original: 'בְּרֵאשִׁית', transliteration: "B'reshit", gloss: 'In the beginning', strongs: 'H7225', lemma: 'רֵאשִׁית' },
          { original: 'בָּרָא', transliteration: 'bara', gloss: 'created', strongs: 'H1254', lemma: 'בָּרָא' },
          { original: 'אֱלֹהִים', transliteration: 'Elohim', gloss: 'God', strongs: 'H430', lemma: 'אֱלֹהִים' },
          { original: 'אֵת', transliteration: 'et', gloss: '(object marker)', strongs: 'H853', lemma: 'אֵת' },
          { original: 'הַשָּׁמַיִם', transliteration: 'hashamayim', gloss: 'the heavens', strongs: 'H8064', lemma: 'שָׁמַיִם' },
          { original: 'וְאֵת', transliteration: "v'et", gloss: 'and (obj.)', strongs: 'H853', lemma: 'אֵת' },
          { original: 'הָאָרֶץ', transliteration: "ha'arets", gloss: 'the earth', strongs: 'H776', lemma: 'אֶרֶץ' },
        ]},
        { reference: 'Genesis 1:2', originalText: 'וְהָאָ֗רֶץ הָיְתָ֥ה תֹ֙הוּ֙ וָבֹ֔הוּ וְחֹ֖שֶׁךְ עַל־פְּנֵ֣י תְה֑וֹם וְר֣וּחַ אֱלֹהִ֔ים מְרַחֶ֖פֶת עַל־פְּנֵ֥י הַמָּֽיִם', words: [
          { original: 'וְהָאָרֶץ', transliteration: "v'ha'arets", gloss: 'And the earth', strongs: 'H776', lemma: 'אֶרֶץ' },
          { original: 'הָיְתָה', transliteration: 'hayetah', gloss: 'was', strongs: 'H1961', lemma: 'הָיָה' },
          { original: 'תֹהוּ', transliteration: 'tohu', gloss: 'formless', strongs: 'H8414', lemma: 'תֹּהוּ' },
          { original: 'וָבֹהוּ', transliteration: 'vavohu', gloss: 'and void', strongs: 'H922', lemma: 'בֹּהוּ' },
          { original: 'וְחֹשֶׁךְ', transliteration: "v'choshekh", gloss: 'and darkness', strongs: 'H2822', lemma: 'חֹשֶׁךְ' },
          { original: 'עַל־פְּנֵי', transliteration: 'al-peney', gloss: 'over the face of', strongs: 'H6440', lemma: 'פָּנִים' },
          { original: 'תְהוֹם', transliteration: 'tehom', gloss: 'the deep', strongs: 'H8415', lemma: 'תְּהוֹם' },
          { original: 'וְרוּחַ', transliteration: "v'ruach", gloss: 'and the Spirit of', strongs: 'H7307', lemma: 'רוּחַ' },
          { original: 'אֱלֹהִים', transliteration: 'Elohim', gloss: 'God', strongs: 'H430', lemma: 'אֱלֹהִים' },
          { original: 'מְרַחֶפֶת', transliteration: 'merachefet', gloss: 'was hovering', strongs: 'H7363', lemma: 'רָחַף' },
          { original: 'עַל־פְּנֵי', transliteration: 'al-peney', gloss: 'over the face of', strongs: 'H6440', lemma: 'פָּנִים' },
          { original: 'הַמָּיִם', transliteration: 'hamayim', gloss: 'the waters', strongs: 'H4325', lemma: 'מַיִם' },
        ]},
      ], variants: []
    }],
    bibliography: [
      'Freedman, D.N. et al., eds. The Leningrad Codex: A Facsimile Edition. Grand Rapids: Eerdmans, 1998.',
    ],
    relatedManuscripts: ['aleppo-codex', 'isaiah-scroll'],
    onlineResources: [
      { label: 'Sefaria — Tanakh (based on Leningrad Codex)', url: 'https://www.sefaria.org/texts/Tanakh' },
    ]
  },
  {
    id: 'aleppo-codex',
    designation: 'Aleppo Codex',
    alternateName: 'Keter Aram Tzova',
    type: 'codex', script: 'hebrew', textType: 'Masoretic (Ben Asher)',
    date: 'c. 930 AD', material: 'Parchment',
    totalLeaves: '294 surviving (of original ~487)', columns: 3,
    format: 'Codex — three columns per page',
    location: 'Israel Museum, Jerusalem (on permanent loan from the Aleppo Jewish community)',
    discoveredBy: 'Known in Aleppo, Syria for centuries; smuggled to Israel in 1958',
    discoveryDate: 'Ancient — smuggled to Israel in 1958',
    contents: 'Partial Hebrew Bible — approximately 60% surviving (most of the Pentateuch is missing)',
    significance: 'Considered the most authoritative manuscript of the Hebrew Bible. Vocalized and annotated by Aaron ben Moses ben Asher himself (c. 930 AD). Maimonides declared it the most correct text. The Masorah (marginal notes) are invaluable for understanding the text.',
    detailedDescription: `The Aleppo Codex is considered the most authoritative manuscript of the Hebrew Bible, produced in Tiberias around 930 AD. The consonantal text was written by the scribe Solomon ben Buya'a, and the vowel points, cantillation marks, and Masorah were added by the master Masorete Aaron ben Moses ben Asher — the last and greatest in the Ben Asher dynasty.

Maimonides (12th century) used this codex to establish the correct text of the Torah and declared it the standard by which all other manuscripts should be judged. It was kept in the Jewish community of Aleppo, Syria, for centuries, where it was closely guarded and rarely shown.

In 1947, during the anti-Jewish riots following the UN partition vote, the synagogue housing the codex was set on fire. The codex was damaged, and approximately 40% of its pages were lost, including most of the Torah (Genesis through most of Deuteronomy). The surviving pages were smuggled to Israel in 1958 and are now housed in the Israel Museum.

Despite its incomplete state, the Aleppo Codex remains the gold standard for the Masoretic text and is the basis for the Hebrew University Bible Project.`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Aleppo_Codex_Joshua_1_1.jpg', caption: 'Aleppo Codex — Joshua 1:1', attribution: 'Israel Museum', license: 'Public Domain' },
    ],
    passages: [{
      title: 'Deuteronomy 6:4–5 — The Shema',
      reference: 'Deuteronomy 6:4–5', notes: 'The Shema is the central confession of Jewish faith. The Aleppo Codex preserves this passage although much of Deuteronomy is lost — this section survives.',
      verses: [
        { reference: 'Deuteronomy 6:4', originalText: 'שְׁמַ֖ע יִשְׂרָאֵ֑ל יְהוָ֥ה אֱלֹהֵ֖ינוּ יְהוָ֥ה אֶחָֽד', words: [
          { original: 'שְׁמַע', transliteration: "Sh'ma", gloss: 'Hear', strongs: 'H8085', lemma: 'שָׁמַע' },
          { original: 'יִשְׂרָאֵל', transliteration: 'Yisrael', gloss: 'O Israel', strongs: 'H3478', lemma: 'יִשְׂרָאֵל' },
          { original: 'יְהוָה', transliteration: 'YHWH', gloss: 'the LORD', strongs: 'H3068', lemma: 'יְהוָה' },
          { original: 'אֱלֹהֵינוּ', transliteration: 'Elohenu', gloss: 'our God', strongs: 'H430', lemma: 'אֱלֹהִים' },
          { original: 'יְהוָה', transliteration: 'YHWH', gloss: 'the LORD', strongs: 'H3068', lemma: 'יְהוָה' },
          { original: 'אֶחָד', transliteration: 'echad', gloss: 'is one', strongs: 'H259', lemma: 'אֶחָד' },
        ]},
      ], variants: []
    }],
    bibliography: ['Goshen-Gottstein, M.H. The Aleppo Codex. Jerusalem, 1976.'],
    relatedManuscripts: ['leningrad-codex', 'isaiah-scroll'],
    onlineResources: [{ label: 'The Aleppo Codex Online', url: 'https://www.aleppocodex.org/' }]
  },
  {
    id: 'codex-amiatinus',
    designation: 'Codex Amiatinus',
    type: 'codex', script: 'latin', textType: 'Vulgate',
    date: 'c. 688–716 AD', material: 'Vellum (calfskin)',
    dimensions: '50.5 × 34 cm', totalLeaves: '1030 leaves',
    format: 'Codex — massive single-volume Bible', columns: 2,
    location: 'Biblioteca Medicea Laurenziana, Florence, Italy',
    discoveredBy: 'Produced at Wearmouth-Jarrow monastery, England',
    contents: 'Complete Latin Vulgate Bible',
    significance: 'The oldest surviving complete copy of the Latin Vulgate Bible, produced in Anglo-Saxon England. It is the most important witness to Jerome\'s original Vulgate translation and is the basis for modern critical editions.',
    detailedDescription: `Codex Amiatinus is the oldest surviving complete manuscript of the Latin Vulgate Bible and one of the finest manuscripts produced in early medieval Europe. It was made at the twin monasteries of Wearmouth-Jarrow in Northumbria, England, under Abbot Ceolfrith, who commissioned three giant pandects (complete Bibles) between 688 and 716 AD.

Codex Amiatinus was intended as a gift for Pope Gregory II. Ceolfrith set out for Rome with the codex in 716 but died en route at Langres, France. The Bible eventually reached Italy and ended up in the monastery of Monte Amiata in Tuscany (hence the name "Amiatinus").

The manuscript weighs approximately 75 pounds (34 kg) and required the skins of approximately 515 calves. It contains a famous illustration of the prophet Ezra (or possibly Cassiodorus) writing at a desk with an open bookcase — one of the most reproduced images from medieval manuscripts.

Its text is considered the purest surviving witness to Jerome's original Vulgate translation from the late 4th century.`,
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/CodxAmiatinusFolio5rEzra.jpg/1280px-CodxAmiatinusFolio5rEzra.jpg', caption: 'Codex Amiatinus — Ezra portrait miniature', attribution: 'Biblioteca Medicea Laurenziana', license: 'Public Domain' }
    ],
    passages: [{
      title: 'John 1:1–5 — Vulgate Latin',
      reference: 'John 1:1–5', notes: 'Jerome\'s Vulgate translation of the Johannine prologue, as preserved in the oldest complete Vulgate manuscript.',
      verses: [
        { reference: 'John 1:1', originalText: 'In principio erat Verbum et Verbum erat apud Deum et Deus erat Verbum', words: [
          { original: 'In', transliteration: 'In', gloss: 'In', lemma: 'in' },
          { original: 'principio', transliteration: 'principio', gloss: 'the beginning', lemma: 'principium' },
          { original: 'erat', transliteration: 'erat', gloss: 'was', lemma: 'sum' },
          { original: 'Verbum', transliteration: 'Verbum', gloss: 'the Word', lemma: 'verbum' },
          { original: 'et', transliteration: 'et', gloss: 'and', lemma: 'et' },
          { original: 'Verbum', transliteration: 'Verbum', gloss: 'the Word', lemma: 'verbum' },
          { original: 'erat', transliteration: 'erat', gloss: 'was', lemma: 'sum' },
          { original: 'apud', transliteration: 'apud', gloss: 'with', lemma: 'apud' },
          { original: 'Deum', transliteration: 'Deum', gloss: 'God', lemma: 'Deus' },
          { original: 'et', transliteration: 'et', gloss: 'and', lemma: 'et' },
          { original: 'Deus', transliteration: 'Deus', gloss: 'God', lemma: 'Deus' },
          { original: 'erat', transliteration: 'erat', gloss: 'was', lemma: 'sum' },
          { original: 'Verbum', transliteration: 'Verbum', gloss: 'the Word', lemma: 'verbum' },
        ]},
      ], variants: []
    }],
    bibliography: ['Bruce, F.F. The Books and the Parchments. London, 1963.'],
    relatedManuscripts: ['sinaiticus', 'vaticanus'],
    onlineResources: [{ label: 'Biblioteca Medicea Laurenziana', url: 'https://www.bmlonline.it/' }]
  },
];
