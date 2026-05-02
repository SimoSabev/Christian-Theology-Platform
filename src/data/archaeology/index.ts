import { ArchaeologicalDiscovery } from './types';
export type { ArchaeologicalDiscovery, DiscoveryCategory, DiscoveryStatus } from './types';

export const archaeologicalDiscoveries: ArchaeologicalDiscovery[] = [
  {
    id: 'dead-sea-scrolls',
    slug: 'dead-sea-scrolls',
    name: 'The Dead Sea Scrolls',
    category: 'old_testament',
    dateDiscovered: '1947 (first scrolls discovered by Bedouin shepherds); systematic excavation 1949–1956',
    discoverer: 'Muhammad edh-Dhib and Jum\'a Muhammad (Bedouin shepherds), Qumran Cave 1; subsequent excavations by Roland de Vaux and the École Biblique',
    location: {
      modern: 'Qumran, West Bank, Israel/Palestinian Territories',
      ancient: 'Qumran (Khirbet Qumran), near the Dead Sea',
    },
    biblicalReferences: ['Isaiah 40:3', 'Isaiah 53', 'Psalm 22', 'Habakkuk 2:2–4', 'All 39 books of the Hebrew Bible except Esther'],
    significance: 5,
    artifactLocation: 'Israel Museum (Shrine of the Book), Jerusalem; various universities and institutions worldwide; Jordan Archaeological Museum, Amman',
    status: 'confirmed',
    description: 'The Dead Sea Scrolls — approximately 900 manuscripts discovered in 11 caves near Qumran — constitute the most significant biblical archaeological discovery of the 20th century. Dating from c. 250 BC to 68 AD, they include the oldest surviving manuscripts of the Hebrew Bible, predating the previously known Masoretic Text manuscripts by 1,000 years. Every book of the Hebrew Bible except Esther is represented. The Great Isaiah Scroll (1QIsa^a, c. 125 BC) is essentially identical to the Masoretic Text Isaiah used in modern translations, confirming the extraordinary fidelity of the scribal transmission of Scripture. The scrolls also include sectarian texts of the Qumran community (likely Essenes) and provide an unprecedented window into Second Temple Judaism and the world of early Christianity.',
    sources: [
      'Geza Vermes, The Complete Dead Sea Scrolls in English (Penguin, 1997)',
      'Emanuel Tov, Textual Criticism of the Hebrew Bible (Fortress, 2012)',
      'Lawrence Schiffman, Reclaiming the Dead Sea Scrolls (Doubleday, 1994)',
    ],
  },
  {
    id: 'tel-dan-inscription',
    slug: 'tel-dan-inscription',
    name: 'Tel Dan Inscription ("House of David")',
    category: 'old_testament',
    dateDiscovered: '1993',
    discoverer: 'Avraham Biran (Hebrew Union College archaeological expedition)',
    location: {
      modern: 'Tel Dan (Tell el-Qadi), Northern Israel',
      ancient: 'Dan (Laish), northern boundary of ancient Israel',
    },
    biblicalReferences: ['2 Samuel 7:11–16', '1 Kings 15:16–22', '2 Chronicles 16:1–6'],
    significance: 5,
    artifactLocation: 'Israel Museum, Jerusalem',
    status: 'confirmed',
    description: 'The Tel Dan Inscription is a 9th-century BC Aramaic stele fragment discovered in 1993 at the site of ancient Dan, containing the first extrabiblical reference to the "House of David" (bytdwd). The inscription, erected by an Aramean king (likely Hazael of Damascus), commemorates military victories and mentions killing "the king of Israel" and "king of the House of David" — almost certainly referring to the Israelite and Judahite kings mentioned in 1 Kings 15 and 2 Chronicles 16. Before this discovery, critical scholars argued that David was a legendary figure invented by later scribes; the Tel Dan Inscription demolished this thesis by demonstrating that the Davidic dynasty was a recognized historical reality in the ancient Near East within 150 years of David\'s reign.',
    sources: [
      'Avraham Biran & Joseph Naveh, "The Tel Dan Inscription: A New Fragment," Israel Exploration Journal 45 (1995)',
      'William Dever, What Did the Biblical Writers Know and When Did They Know It? (Eerdmans, 2001)',
      'K.A. Kitchen, On the Reliability of the Old Testament (Eerdmans, 2003)',
    ],
  },
  {
    id: 'hezekiahs-tunnel',
    slug: 'hezekiahs-tunnel',
    name: 'Hezekiah\'s Tunnel',
    category: 'old_testament',
    dateDiscovered: '1838 (identified by Edward Robinson); Siloam Inscription discovered 1880',
    discoverer: 'Edward Robinson (1838); Siloam Inscription discovered by a local boy in 1880; reported by Archibald Sayce',
    location: {
      modern: 'City of David, Jerusalem, Israel',
      ancient: 'Jerusalem (the City of David/Ophel)',
    },
    biblicalReferences: ['2 Kings 20:20', '2 Chronicles 32:30', 'Isaiah 22:11'],
    significance: 4,
    artifactLocation: 'The tunnel remains in situ in the City of David, Jerusalem. The Siloam Inscription is in the Istanbul Archaeology Museum.',
    status: 'confirmed',
    description: 'Hezekiah\'s Tunnel is a rock-cut water channel running 533 meters (1,748 feet) through the bedrock beneath the City of David, Jerusalem. It was constructed under King Hezekiah (c. 715–686 BC) to secure Jerusalem\'s water supply from the Gihon Spring to the Pool of Siloam within the city walls, in preparation for the Assyrian siege under Sennacherib (701 BC). The Siloam Inscription — a 6-line Hebrew inscription discovered in the tunnel near the Siloam end in 1880 — describes the dramatic moment when the two teams of workers, digging from opposite ends, broke through to each other. The tunnel is precisely as described in 2 Kings 20:20 and 2 Chronicles 32:30, providing one of the most vivid archaeological confirmations of a specific biblical engineering project.',
    sources: [
      'Nahman Avigad, Discovering Jerusalem (Thomas Nelson, 1983)',
      'K.A. Kitchen, On the Reliability of the Old Testament (Eerdmans, 2003)',
      'Hershel Shanks, The City of David (Biblical Archaeology Society, 1973)',
    ],
  },
  {
    id: 'siloam-inscription',
    slug: 'siloam-inscription',
    name: 'The Siloam Inscription',
    category: 'old_testament',
    dateDiscovered: '1880',
    discoverer: 'Discovered by a local boy; reported to Archibald Sayce; published by Hermann Guthe (1881)',
    location: {
      modern: 'City of David, Jerusalem (found in Hezekiah\'s Tunnel)',
      ancient: 'Jerusalem, Pool of Siloam',
    },
    biblicalReferences: ['2 Kings 20:20', '2 Chronicles 32:30'],
    significance: 4,
    artifactLocation: 'Istanbul Archaeology Museum, Istanbul, Turkey (removed by Ottoman authorities in 1890)',
    status: 'confirmed',
    description: 'The Siloam Inscription is a 6-line Hebrew inscription carved into the wall of Hezekiah\'s Tunnel near the Pool of Siloam. Dating to c. 700 BC, it records in classical Biblical Hebrew the moment the two tunneling teams broke through to meet each other: "...the tunneling through. And this was the matter of the breakthrough: while the laborers were still working with their picks, each toward the other...there was heard the sound of each man calling to his fellow...the water then flowed from the spring to the pool, 1,200 cubits." It is one of the longest and most significant Hebrew inscriptions from the period of the Israelite monarchy, confirming the historical accuracy of the accounts in 2 Kings and 2 Chronicles.',
    sources: [
      'John C.L. Gibson, Textbook of Syrian Semitic Inscriptions, Vol. 1 (Oxford, 1971)',
      'K.A. Kitchen, On the Reliability of the Old Testament (Eerdmans, 2003)',
      'Hershel Shanks, "The Siloam Tunnel Inscription," Biblical Archaeology Review (Sept/Oct 1996)',
    ],
  },
  {
    id: 'cyrus-cylinder',
    slug: 'cyrus-cylinder',
    name: 'The Cyrus Cylinder',
    category: 'old_testament',
    dateDiscovered: '1879',
    discoverer: 'Hormuzd Rassam (Assyrian-born archaeologist working for the British Museum)',
    location: {
      modern: 'Babylon, Iraq (discovered at the Esagila temple complex)',
      ancient: 'Babylon, Babylonia',
    },
    biblicalReferences: ['Isaiah 44:28–45:1', 'Ezra 1:1–4', '2 Chronicles 36:22–23'],
    significance: 5,
    artifactLocation: 'British Museum, London (BM 90920)',
    status: 'confirmed',
    description: 'The Cyrus Cylinder is a baked clay barrel inscribed in Babylonian cuneiform, recording the conquest of Babylon by Cyrus the Great of Persia (539 BC) and his policy of religious tolerance — specifically, the return of deported peoples and their gods to their homelands. This directly corroborates the biblical account in Ezra 1:1–4, where Cyrus issues a decree allowing the exiled Jews to return to Judah and rebuild the Temple in Jerusalem. Most remarkably, Isaiah 44:28 names "Cyrus" as God\'s shepherd who will authorize the Temple\'s rebuilding — written approximately 150 years before Cyrus was born. The Cyrus Cylinder does not mention Jews specifically, but its description of his general repatriation policy is precisely what the Book of Ezra records for the Jews.',
    sources: [
      'Irving Finkel, ed., The Cyrus Cylinder: The King of Persia\'s Proclamation from Ancient Babylon (I.B. Tauris, 2013)',
      'K.A. Kitchen, On the Reliability of the Old Testament (Eerdmans, 2003)',
      'Edwin Yamauchi, Persia and the Bible (Baker, 1990)',
    ],
  },
  {
    id: 'pontius-pilate-stone',
    slug: 'pontius-pilate-stone',
    name: 'The Pontius Pilate Dedication Stone',
    category: 'new_testament',
    dateDiscovered: '1961',
    discoverer: 'Italian archaeologist Antonio Frova (excavating the Roman theater at Caesarea Maritima)',
    location: {
      modern: 'Caesarea Maritima, Israel',
      ancient: 'Caesarea Maritima (capital of the Roman province of Judaea)',
    },
    biblicalReferences: ['Matthew 27:2', 'Luke 3:1', 'John 18:28–38', 'Acts 4:27'],
    significance: 5,
    artifactLocation: 'Israel Museum, Jerusalem (original); a replica is in situ at Caesarea Maritima',
    status: 'confirmed',
    description: 'The Pilate Stone is a limestone block bearing a Latin inscription dedicating a building (the Tiberieum, likely a temple to Emperor Tiberius) to the people of Caesarea by "Pontius Pilatus, Prefect of Judaea." Discovered during excavations of the Roman theater at Caesarea Maritima in 1961, it is the only contemporary archaeological evidence of Pontius Pilate, the Roman prefect who condemned Jesus to death. Before its discovery, some critical scholars questioned Pilate\'s historicity or his precise title. The inscription confirms both his name and his exact title (Praefectus Iudaeae), precisely as used in the Gospel accounts and by the Roman historian Tacitus (Annals 15.44).',
    sources: [
      'Antonio Frova, "L\'iscrizione di Ponzio Pilato a Cesarea," Rendiconti dell\'Istituto Lombardo 95 (1961)',
      'Josephus, Antiquities of the Jews 18.3.3',
      'Tacitus, Annals 15.44',
      'Craig Evans, Jesus and His World: The Archaeological Evidence (Westminster John Knox, 2012)',
    ],
  },
  {
    id: 'pool-of-siloam',
    slug: 'pool-of-siloam',
    name: 'The Pool of Siloam (New Testament)',
    category: 'new_testament',
    dateDiscovered: '2004',
    discoverer: 'Eli Shukron and Ronny Reich (Israel Antiquities Authority), during infrastructure repair work',
    location: {
      modern: 'City of David, Jerusalem, Israel',
      ancient: 'Jerusalem, Lower City',
    },
    biblicalReferences: ['John 9:1–11', 'Luke 13:4', 'Nehemiah 3:15'],
    significance: 4,
    artifactLocation: 'In situ; open for visitation in the City of David National Park, Jerusalem',
    status: 'confirmed',
    description: 'The Pool of Siloam — identified in John 9 as the site where Jesus miraculously healed a man born blind by sending him to wash — was accidentally discovered in 2004 when a sewage pipe broke in the City of David. Excavations revealed a large stepped pool dating to the Hasmonean and Herodian periods (2nd century BC – 1st century AD), precisely consistent with the period of Jesus\'s ministry. The pool is rock-cut with plastered steps and covers approximately 2 dunams (half an acre). It appears to have been a mikveh (ritual bath) and gathering place for pilgrims entering Jerusalem. The discovery addressed the earlier question of whether the reference in John 9 was historically accurate, confirming the geographical detail of the Gospel account.',
    sources: [
      'Ronny Reich & Eli Shukron, "The Pool of Siloam," Biblical Archaeology Review 31/4 (July/Aug 2005)',
      'Craig Evans, Jesus and His World: The Archaeological Evidence (Westminster John Knox, 2012)',
      'Josephus, Jewish War 5.4.1',
    ],
  },
  {
    id: 'caiaphas-ossuary',
    slug: 'caiaphas-ossuary',
    name: 'The Caiaphas Ossuary',
    category: 'new_testament',
    dateDiscovered: '1990',
    discoverer: 'Discovered accidentally during construction work in the Peace Forest (Abu Tor), Jerusalem; recovered by the Israel Antiquities Authority',
    location: {
      modern: 'Jerusalem (Peace Forest, Abu Tor area)',
      ancient: 'A 1st-century Jewish burial chamber in Jerusalem',
    },
    biblicalReferences: ['Matthew 26:3, 57', 'Luke 3:2', 'John 11:49–53', 'Acts 4:6'],
    significance: 5,
    artifactLocation: 'Israel Museum, Jerusalem',
    status: 'confirmed',
    description: 'The Caiaphas Ossuary is a 1st-century Jewish limestone bone box bearing the Aramaic inscription "Joseph son of (or bar) Caiphas" in two places. The ossuary, elaborately decorated with floral rosette carvings, contained the bones of six individuals, including those of a 60-year-old male — widely identified as Joseph Caiaphas, the High Priest who presided over Jesus\'s trial before the Sanhedrin (Matthew 26:3; John 11:49–53). Josephus identifies this Caiaphas as the son-in-law of Annas and the High Priest from 18–36 AD — precisely the period of Jesus\'s ministry. The discovery provides direct physical evidence for the historical person who played a central role in the events of the Passion narrative.',
    sources: [
      'Zvi Greenhut, "The Caiaphas Tomb in North Talpiot, Jerusalem," Atiqot 21 (1992)',
      'Ronny Reich, "Ossuary Inscriptions from the Caiaphas Tomb," Jerusalem Perspective 4/4–5 (1991)',
      'Craig Evans, Jesus and His World: The Archaeological Evidence (Westminster John Knox, 2012)',
    ],
  },
  {
    id: 'james-ossuary',
    slug: 'james-ossuary',
    name: 'The James Ossuary ("James, Son of Joseph, Brother of Jesus")',
    category: 'controversial',
    dateDiscovered: 'Reportedly found in the Silwan area of Jerusalem; became public in 2002',
    discoverer: 'Unknown — the ossuary surfaced in the antiquities market and was owned by Israeli collector Oded Golan',
    location: {
      modern: 'Provenance uncertain; reportedly from the Silwan/Mount of Olives area of Jerusalem',
      ancient: 'Uncertain; a 1st-century Jerusalem burial context is claimed',
    },
    biblicalReferences: ['Matthew 13:55', 'Galatians 1:19', 'Acts 15:13', 'Josephus, Antiquities 20.9.1'],
    significance: 4,
    artifactLocation: 'Royal Ontario Museum, Toronto (exhibited 2002); returned to Oded Golan',
    status: 'disputed',
    description: 'The James Ossuary is a 1st-century limestone bone box bearing the Aramaic inscription "Ya\'akov bar Yosef akhui di Yeshua" — "James, son of Joseph, brother of Jesus." If authentic, it would be the earliest physical evidence of Jesus of Nazareth and his family. The ossuary was the subject of a decade-long Israeli criminal trial in which the Israel Antiquities Authority alleged that the second part of the inscription ("brother of Jesus") was a modern forgery added to an authentic but uninscribed ossuary. The defendant Oded Golan was acquitted in 2012 after the court ruled the evidence was insufficient. Some scholars (André Lemaire, Ben Witherington) maintain the inscription is authentic; others (Yuval Goren, AMS dating discrepancies) remain unconvinced. The debate continues.',
    sources: [
      'Hershel Shanks & Ben Witherington, The Brother of Jesus (HarperSanFrancisco, 2003)',
      'André Lemaire, "Burial Box of James the Brother of Jesus," Biblical Archaeology Review 28/6 (Nov/Dec 2002)',
      'Yuval Goren et al., "A Re-examination of the James Ossuary," Israel Exploration Journal 54 (2004)',
    ],
  },
  {
    id: 'nazareth-inscription',
    slug: 'nazareth-inscription',
    name: 'The Nazareth Inscription',
    category: 'new_testament',
    dateDiscovered: 'Acquired by the Bibliothèque nationale de France in 1878; first published 1930 by Franz Cumont',
    discoverer: 'Provenance uncertain; reportedly from Nazareth; entered the French royal collection in 1878',
    location: {
      modern: 'Reportedly from Nazareth, Israel',
      ancient: 'Galilee, Roman province of Syria-Palaestina',
    },
    biblicalReferences: ['Matthew 27:62–66', 'Matthew 28:11–15'],
    significance: 3,
    artifactLocation: 'Bibliothèque nationale de France (Cabinet des Médailles), Paris',
    status: 'disputed',
    description: 'The Nazareth Inscription is a marble tablet bearing a Greek edict, reportedly from Nazareth, declaring it a capital offense to disturb graves or remove bodies from tombs. The edict is attributed by most scholars to either Augustus or Claudius (1st century AD). Some scholars (C.C. McCown, Josh McDowell) have argued that this represents a Roman imperial response to the spreading report of the resurrection — an attempt to criminalize the "theft of Jesus\'s body" explanation promoted by the Jewish authorities (Matthew 28:13). This interpretation is suggestive but not conclusive: the inscription\'s exact provenance is unknown, and edicts against grave-robbing existed across the empire for non-Christian reasons. Nevertheless, the inscription is consistent with the social milieu described in the resurrection narratives.',
    sources: [
      'Franz Cumont, "Un rescrit impérial sur la violation de sépulture," Revue historique 163 (1930)',
      'Josh McDowell, Evidence That Demands a Verdict (Thomas Nelson, 1999)',
      'E.M. Yamauchi, "Nazareth Inscription," in The Anchor Bible Dictionary (Doubleday, 1992)',
    ],
  },
];

export function getDiscoveryBySlug(slug: string): ArchaeologicalDiscovery | undefined {
  return archaeologicalDiscoveries.find(d => d.slug === slug);
}

export function getDiscoveriesByCategory(category: ArchaeologicalDiscovery['category']): ArchaeologicalDiscovery[] {
  return archaeologicalDiscoveries.filter(d => d.category === category);
}

export function getDiscoveriesBySignificance(minSignificance: number): ArchaeologicalDiscovery[] {
  return archaeologicalDiscoveries.filter(d => d.significance >= minSignificance);
}
