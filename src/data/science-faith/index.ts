import {
  ChristianScientist,
  ScienceFaithConflict,
  BibleTranslation,
  CanonFormation,
  TextualCriticismMethod,
} from './types';
export type {
  ChristianScientist,
  ScienceFaithConflict,
  BibleTranslation,
  CanonFormation,
  TextualCriticismMethod,
} from './types';

export const christianScientists: ChristianScientist[] = [
  {
    id: 'isaac-newton',
    slug: 'isaac-newton',
    name: 'Sir Isaac Newton',
    birthYear: 1643,
    deathYear: 1727,
    field: 'Mathematics, Physics, Astronomy, Optics',
    keyContribution: 'Laws of motion and universal gravitation (Principia Mathematica, 1687); co-invention of calculus; corpuscular theory of light (Opticks, 1704); groundbreaking work in thermodynamics.',
    faithTradition: 'Heterodox Protestant Christian (anti-Trinitarian in private, but deeply biblical in orientation)',
    faithStatement: 'Newton wrote more about theology and biblical prophecy than about science — his theological manuscripts exceed one million words. He wrote: "This most elegant system of the sun, planets, and comets could not have arisen without the design and dominion of an intelligent and powerful being." He devoted extensive effort to interpreting the books of Daniel and Revelation.',
    era: 'historical',
    sources: [
      'Richard Westfall, Never at Rest: A Biography of Isaac Newton (Cambridge, 1980)',
      'Stephen Snobelen, "Isaac Newton, Heretic: The Strategies of a Nicodemite," British Journal for the History of Science (1999)',
    ],
  },
  {
    id: 'gregor-mendel',
    slug: 'gregor-mendel',
    name: 'Gregor Johann Mendel',
    birthYear: 1822,
    deathYear: 1884,
    field: 'Genetics and Botany',
    keyContribution: 'Discovered the fundamental laws of heredity (dominant and recessive traits, law of segregation, law of independent assortment) through his famous pea-plant experiments, founding the science of genetics.',
    faithTradition: 'Roman Catholic (Augustinian friar, later abbot)',
    faithStatement: 'Mendel was an ordained priest and served as the Augustinian Abbot of St. Thomas\'s Abbey in Brno. He viewed his scientific work as a vocation consistent with his calling as a churchman. His patient, careful observation of God\'s creation was an act of natural theology.',
    era: 'historical',
    sources: [
      'Robin Marantz Henig, The Monk in the Garden (Houghton Mifflin, 2000)',
      'Robert Olby, Origins of Mendelism (University of Chicago, 1985)',
    ],
  },
  {
    id: 'georges-lemaitre',
    slug: 'georges-lemaitre',
    name: 'Georges Lemaître',
    birthYear: 1894,
    deathYear: 1966,
    field: 'Cosmology and Physics',
    keyContribution: 'Proposed the "hypothesis of the primeval atom" (1931) — the Big Bang theory — that the universe had a specific beginning from an initial singularity. Einstein initially rejected it, then affirmed it as "the most beautiful and satisfactory explanation of creation I have ever heard."',
    faithTradition: 'Roman Catholic priest',
    faithStatement: 'Lemaître, a Catholic priest, was the first to propose that the universe had a beginning — directly contradicting the then-dominant steady-state view. He insisted that the scientific and theological accounts of creation were independent and non-contradictory: "The theory of the primeval atom is the cosmogony of the natural sciences; the theory of creation is the cosmogony of faith."',
    era: 'historical',
    sources: [
      'John Farrell, The Day We Found the Universe (Pantheon, 2009)',
      'Dominique Lambert, The Atom of the Universe: The Life and Work of Georges Lemaître (Copernicus Center Press, 2015)',
    ],
  },
  {
    id: 'blaise-pascal',
    slug: 'blaise-pascal',
    name: 'Blaise Pascal',
    birthYear: 1623,
    deathYear: 1662,
    field: 'Mathematics, Physics, Philosophy, Theology',
    keyContribution: 'Founded probability theory and projective geometry; invented one of the first mechanical calculators (Pascaline); formulated Pascal\'s Law in fluid mechanics; authored the Pensées — the most influential work of Christian apologetics in the French tradition.',
    faithTradition: 'Roman Catholic (Jansenist)',
    faithStatement: 'Pascal\'s famous Memorial (a document found sewn into his coat after his death) records his decisive conversion experience on November 23, 1654: "Fire. God of Abraham, God of Isaac, God of Jacob, not of the philosophers and scholars. Certainty, certainty, feeling, joy, peace." His Pensées contains Pascal\'s Wager — the argument that it is rational to wager on God\'s existence given infinite potential gain.',
    era: 'historical',
    sources: [
      'Blaise Pascal, Pensées (trans. A.J. Krailsheimer, Penguin, 1966)',
      'Peter Kreeft, Christianity for Modern Pagans: Pascal\'s Pensées (Ignatius, 1993)',
    ],
  },
  {
    id: 'michael-faraday',
    slug: 'michael-faraday',
    name: 'Michael Faraday',
    birthYear: 1791,
    deathYear: 1867,
    field: 'Electromagnetism and Electrochemistry',
    keyContribution: 'Discovered electromagnetic induction, the basis of electric generators and transformers; formulated the laws of electrolysis; discovered the relationship between light and magnetism (Faraday effect); his work was mathematically formalized by James Clerk Maxwell.',
    faithTradition: 'Sandemanian (conservative Protestant sect)',
    faithStatement: 'Faraday was a deeply devout and active member of the Sandemanian church throughout his life, serving as an elder and deacon. He refused a knighthood and the presidency of the Royal Society on religious grounds. He wrote: "The book of nature which we have to read is written by the finger of God."',
    era: 'historical',
    sources: [
      'L. Pearce Williams, Michael Faraday (Basic Books, 1965)',
      'James Hamilton, A Life of Discovery: Michael Faraday, Giant of the Scientific Revolution (Random House, 2002)',
    ],
  },
  {
    id: 'francis-collins',
    slug: 'francis-collins',
    name: 'Francis S. Collins',
    birthYear: 1950,
    field: 'Genetics and Medicine',
    keyContribution: 'Led the Human Genome Project (1990–2003) that produced the first complete map of the human genome; directed the National Institutes of Health (NIH, 2009–2021); co-developed positional cloning, used to identify genes responsible for cystic fibrosis, Huntington\'s disease, and neurofibromatosis.',
    faithTradition: 'Evangelical Christian (converted from atheism)',
    faithStatement: 'Collins, once an atheist, converted to Christianity in his late 20s through the influence of C.S. Lewis. He wrote: "One of the greatest surprises of the genome project for me was the discovery of the evidence for a moral law written in the hearts of every human being. It points, I believe, to the existence of God." He founded BioLogos to promote the compatibility of evolutionary science and Christian faith.',
    era: 'contemporary',
    sources: [
      'Francis Collins, The Language of God (Free Press, 2006)',
      'Francis Collins, The Language of Life (HarperOne, 2010)',
    ],
  },
];

export const scienceFaithConflicts: ScienceFaithConflict[] = [
  {
    id: 'galileo-affair',
    slug: 'galileo-affair',
    name: 'The Galileo Affair',
    dateRange: '1610–1633',
    popularNarrative: 'Galileo Galilei proved that the Earth orbits the Sun (heliocentrism), and the Catholic Church persecuted him for it, demonstrating that religion is the enemy of scientific progress. The Galileo affair is the paradigmatic example of the "warfare" between science and religion.',
    actualHistory: 'The historical reality is significantly more complex than the popular narrative. Galileo had many Church supporters, including Cardinal Barberini (later Pope Urban VIII, initially a friend). The conflict was as much about Galileo\'s personal behavior, his mockery of the Pope in the Dialogue Concerning the Two Chief World Systems (1632), and academic politics as it was about theology. The Church\'s position was itself based on Aristotelian (not biblical) physics, and was partially scientific — Galileo could not at that time prove heliocentrism conclusively (stellar parallax was not measured until 1838). The Inquisition placed him under house arrest in a comfortable villa; he was not tortured or executed. Many other scientists (including Copernicus, a Catholic canon who dedicated De Revolutionibus to the Pope) faced no persecution. The narrative of total Church opposition to science is a 19th-century invention (John William Draper, Andrew Dickson White).',
    christianResponse: 'The Galileo affair represents a failure of biblical hermeneutics — the misapplication of phenomenological language (the sun "rises") as scientific description — and an overstep of institutional authority into an empirical question. The church has formally acknowledged its error. The affair does not represent a structural conflict between Christianity and science, as demonstrated by the thousands of Christian scientists who have advanced human knowledge, many of whom were motivated by their faith.',
    resolution: 'Pope John Paul II officially acknowledged the Church\'s error in the Galileo affair in 1992: "Galileo, who practically invented the experimental method, understood why only the Sacred Scripture cannot err... he had to recognize that the Scripture does not always describe the natural world literally." The affair is now recognized as an exception that proves the general rule of ecclesiastical support for natural philosophy.',
    sources: [
      'John Heilbron, Galileo (Oxford, 2010)',
      'Annibale Fantoli, Galileo: For Copernicanism and for the Church (Vatican Observatory, 1994)',
      'Ronald Numbers, ed., Galileo Goes to Jail and Other Myths about Science and Religion (Harvard, 2009)',
      'Pope John Paul II, Address to the Pontifical Academy of Sciences (October 31, 1992)',
    ],
  },
  {
    id: 'darwin-evolution-debate',
    slug: 'darwin-evolution-debate',
    name: 'The Darwinian Evolution Debate',
    dateRange: '1859–present',
    popularNarrative: 'Charles Darwin\'s On the Origin of Species (1859) disproved the biblical account of creation and made God unnecessary. Science and Christianity are in fundamental conflict on the question of human origins. Religious people reject evolution out of ignorance or faith; scientists accept it on evidence.',
    actualHistory: 'The historical picture is far more nuanced. Many leading scientists who were devout Christians accepted evolutionary theory from the outset: Asa Gray (Darwin\'s chief American advocate) was a committed evangelical; Charles Kingsley (Anglican clergyman) and Frederick Temple (later Archbishop of Canterbury) affirmed evolution. Many of Darwin\'s most prominent initial opponents were secular scientists, not theologians (e.g., Richard Owen). The famous Huxley-Wilberforce debate (1860) is now recognized to be greatly mythologized — contemporary accounts do not support the popular retelling. Within evangelical Christianity, there is significant diversity: Young Earth Creationism, Old Earth Creationism, and Evolutionary Creationism/Theistic Evolution are all represented.',
    christianResponse: 'Christians hold a range of positions on origins while affirming the foundational doctrines of Scripture\'s authority and human dignity. The theological non-negotiables are: (1) God is the Creator of all that exists; (2) Humans are uniquely made in God\'s image (imago Dei); (3) Human sin is real and requires atonement. Whether God created through direct special creation or through providential guidance of natural processes is a matter of ongoing biblical and scientific discussion within the evangelical community.',
    resolution: 'No single resolution has been reached within Christianity, but the "conflict thesis" (Draper-White) has been decisively rejected by professional historians of science. The current scholarly consensus is that science and religion have had a complex, mutually influential relationship, not a simple "warfare."',
    sources: [
      'Ronald Numbers, The Creationists: From Scientific Creationism to Intelligent Design (Harvard, 2006)',
      'Alister McGrath, Darwinism and the Divine (Wiley-Blackwell, 2011)',
      'Francis Collins, The Language of God (Free Press, 2006)',
      'David Livingstone, Darwin\'s Forgotten Defenders (Eerdmans, 1987)',
    ],
  },
  {
    id: 'big-bang-creation',
    slug: 'big-bang-creation',
    name: 'The Big Bang and Creation',
    dateRange: '1927–present',
    popularNarrative: 'Modern cosmology has shown that the universe arose from a quantum fluctuation in a vacuum without any cause — thereby making the concept of a Creator unnecessary. Science provides a complete naturalistic account of cosmic origins.',
    actualHistory: 'The Big Bang theory was proposed by Georges Lemaître, a Catholic priest, in 1927–31. The theory that the universe had a temporal beginning was initially resisted by the scientific establishment on philosophical grounds — Fred Hoyle (who coined the derisive term "Big Bang") preferred the Steady State model precisely because a beginning implied a Creator. The Borde-Guth-Vilenkin theorem (2003) demonstrates mathematically that any universe with a net positive expansion rate must have had a beginning — including inflationary multiverse models. The claim that quantum fluctuations in a "vacuum" can explain the universe\'s origin misrepresents the quantum vacuum, which is not "nothing" but a highly structured energy field governed by pre-existing physical laws.',
    christianResponse: 'The Big Bang is entirely consistent with the Christian doctrine of creation ex nihilo — that God created the universe from nothing at a definite point in time. William Lane Craig has argued: "The Borde-Guth-Vilenkin theorem implies that the universe began to exist. Anything that begins to exist has a cause. Therefore, the universe has a cause." This cause must be outside space and time (spaceless, timeless), immaterial, powerful, and personal — consistent with the God of the Bible. The Big Bang does not prove Christianity, but it strongly supports theism over materialism.',
    resolution: 'Leading cosmologists acknowledge that the question of the "initial singularity" and what preceded it lies outside the scope of current physical science. This is not an embarrassment for cosmology but represents the boundary where science points beyond itself. The kalam cosmological argument has been recognized as a serious philosophical argument even by non-theist philosophers such as Quentin Smith.',
    sources: [
      'William Lane Craig & James Sinclair, "The Kalam Cosmological Argument," in The Blackwell Companion to Natural Theology (Wiley-Blackwell, 2009)',
      'Arvin Borde, Alan Guth, & Alexander Vilenkin, "Inflationary Spacetimes Are Incomplete in Past Directions," Physical Review Letters 90:151301 (2003)',
      'Dominique Lambert, The Atom of the Universe: The Life and Work of Georges Lemaître (Copernicus Center Press, 2015)',
    ],
  },
];

export const bibleTranslations: BibleTranslation[] = [
  {
    id: 'codex-sinaiticus',
    slug: 'codex-sinaiticus',
    name: 'Codex Sinaiticus',
    year: 330,
    translator: 'Unknown; produced in the early Byzantine period, possibly under Eusebius of Caesarea\'s supervision at the direction of Constantine I',
    sourceTexts: 'Greek — the primary Alexandrian text-type manuscript; contains virtually all of the New Testament and over half of the Septuagint (Old Testament in Greek)',
    language: 'Greek',
    significance: 'The Codex Sinaiticus (c. 330–360 AD) is the oldest complete manuscript of the Greek New Testament and one of the most important biblical manuscripts in existence. Discovered by Constantin von Tischendorf at St. Catherine\'s Monastery on Mount Sinai in 1844 and 1859, it provides critical evidence for establishing the original text of the New Testament. Its extraordinary early date and completeness make it indispensable for textual criticism.',
    controversy: 'Tischendorf\'s acquisition of the manuscript from St. Catherine\'s Monastery is disputed — the monastery maintains the manuscript was not given but taken. The manuscript is now divided among four institutions: the British Library (majority), the Leipzig University Library, the National Library of Russia (St. Petersburg), and St. Catherine\'s Monastery.',
    sources: [
      'Constantin von Tischendorf, Codex Sinaiticus (Leipzig, 1862)',
      'David Trobisch, The First Edition of the New Testament (Oxford, 2000)',
      'Bruce Metzger, The Text of the New Testament: Its Transmission, Corruption, and Restoration, 4th ed. (Oxford, 2005)',
    ],
  },
  {
    id: 'king-james-version',
    slug: 'king-james-version',
    name: 'King James Version (Authorized Version)',
    year: 1611,
    translator: 'A committee of 47 Anglican scholars in six groups, working under the authorization of King James I of England',
    sourceTexts: 'Greek New Testament (primarily Textus Receptus); Hebrew Masoretic Text for the Old Testament; with reference to earlier English translations (Tyndale, Coverdale, Geneva Bible)',
    language: 'Early Modern English',
    significance: 'The King James Bible (1611) is the most influential English Bible translation in history and arguably the most consequential book in the English language. Commissioned by King James I, it was designed to produce a translation acceptable to all Protestant factions in England. The KJV\'s majestic prose shaped the English language, provided a common scriptural idiom for 400 years of English-speaking Christianity, and remains the preferred translation of many conservative evangelicals and fundamentalists.',
    controversy: 'The "King James Only" movement holds that the KJV is the uniquely preserved Word of God in English, superior to all modern translations based on the Alexandrian text-type. Mainstream evangelical scholarship rejects this position, arguing that more recently discovered manuscripts (especially the Dead Sea Scrolls and Codex Sinaiticus) provide superior textual witnesses in many passages.',
    sources: [
      'Alister McGrath, In the Beginning: The Story of the King James Bible (Anchor, 2001)',
      'Adam Nicolson, God\'s Secretaries: The Making of the King James Bible (HarperCollins, 2003)',
      'Bruce Metzger, The Bible in Translation (Baker Academic, 2001)',
    ],
  },
];

export const canonFormations: CanonFormation[] = [
  {
    id: 'nt-canon-formation',
    slug: 'nt-canon-formation',
    name: 'The Formation of the New Testament Canon',
    testament: 'new',
    description: 'The 27 books of the New Testament were not arbitrarily selected at the Council of Nicaea (325 AD) — a common misconception popularized by Dan Brown\'s The Da Vinci Code. Rather, the canon developed organically over the first four centuries as the Church recognized and collected the apostolic writings that bore the marks of divine authority. The criteria applied included: apostolic origin or association, use in the universal church, and consistency with the Rule of Faith (regula fidei).',
    keyMilestones: [
      {
        date: 'c. 50–100 AD',
        event: 'The writing and initial circulation of the 27 NT books',
        significance: 'The letters of Paul, the Gospels, and the other apostolic writings were composed within the lifetime of the apostles and their immediate associates; 1 Corinthians 15:3–8 contains a creedal formula that dates within years of the crucifixion.',
      },
      {
        date: 'c. 140 AD',
        event: 'Marcion\'s truncated canon',
        significance: 'The Gnostic teacher Marcion rejected the OT and accepted only a truncated Luke and ten Pauline letters. His heretical canon forced the church to articulate its understanding of which books were authoritative — demonstrating that the church\'s canon predated Nicaea by 185 years.',
      },
      {
        date: 'c. 170 AD',
        event: 'The Muratorian Fragment',
        significance: 'The oldest known canonical list, listing 22 of the 27 NT books as accepted, including the four Gospels, Acts, 13 Pauline letters, Jude, 1–2 John, and Revelation. Demonstrates that the core NT was already established by the late 2nd century.',
      },
      {
        date: '367 AD',
        event: 'Athanasius\'s Festal Letter 39',
        significance: 'The first document to list all 27 books of the New Testament as the exclusive canonical scriptures. Athanasius\'s list became the standard for Eastern Christianity.',
      },
      {
        date: '382 AD',
        event: 'Council of Rome (under Pope Damasus I)',
        significance: 'Listed all 27 NT books as canonical — the first council to do so. Subsequent councils (Hippo, 393; Carthage, 397; 419) confirmed the same list.',
      },
    ],
    booksExcluded: [
      { name: 'The Gospel of Thomas', reason: 'Gnostic composition; non-apostolic; dates to the 2nd–3rd century; contradicts apostolic teaching' },
      { name: 'The Gospel of Philip', reason: 'Valentinian Gnostic text; no apostolic connection; late 2nd–3rd century composition' },
      { name: 'The Shepherd of Hermas', reason: 'Widely read but not universally accepted; of disputed authorship; not apostolic; excluded from Muratorian Fragment' },
      { name: 'The Didache', reason: 'Valuable early church document but not apostolic authorship; not universally received' },
    ],
    sources: [
      'F.F. Bruce, The Canon of Scripture (IVP, 1988)',
      'Lee McDonald, The Biblical Canon: Its Origin, Transmission, and Authority (Hendrickson, 2007)',
      'Michael Kruger, Canon Revisited: Establishing the Origins and Authority of the New Testament Books (Crossway, 2012)',
      'Bruce Metzger, The Canon of the New Testament: Its Origin, Development, and Significance (Oxford, 1987)',
    ],
  },
];

export const textualCriticismMethods: TextualCriticismMethod[] = [
  {
    id: 'alexandrian-vs-textus-receptus',
    slug: 'alexandrian-vs-textus-receptus',
    name: 'Textus Receptus vs. the Alexandrian Text-type',
    description: 'Two major manuscript traditions have shaped New Testament translation. The Textus Receptus (TR) is the printed Greek text produced by Erasmus (1516) and refined by later editors (Stephanus, Beza, Elzevir brothers), based primarily on late Byzantine manuscripts. The Alexandrian text-type is represented by the oldest extant manuscripts (Codex Sinaiticus, c. 330 AD; Codex Vaticanus, c. 300–325 AD; Papyrus 66, c. 175–200 AD), which are generally shorter and considered more faithful to the original by most scholars. Modern critical texts (NA28/UBS5) follow the Alexandrian tradition; the King James Bible (1611) follows the Textus Receptus.',
    keyScholars: [
      'Desiderius Erasmus — compiled the first printed Greek NT (1516) from 5–7 late manuscripts',
      'Johann Jakob Wettstein — pioneer in systematic manuscript collection (18th century)',
      'Constantin von Tischendorf — discovered Codex Sinaiticus; produced 8th critical edition of the NT (1869–72)',
      'Brook Foss Westcott & Fenton John Anthony Hort — produced the foundational critical text (1881) on Alexandrian principles',
      'Bruce Metzger — 20th-century master of textual criticism; produced the UBS Greek NT and its Textual Commentary',
    ],
    keyManuscripts: [
      'Papyrus 66 (P66, c. 175–200 AD) — Gospel of John; earliest substantial NT manuscript',
      'Papyrus 75 (P75, c. 175–225 AD) — Luke and John; Alexandrian text-type',
      'Codex Sinaiticus (Aleph, c. 330–360 AD) — complete NT; Alexandrian',
      'Codex Vaticanus (B, c. 300–325 AD) — nearly complete NT; Alexandrian',
      'Codex Alexandrinus (A, c. 400–440 AD) — nearly complete NT; mixed text-type',
      'Codex Bezae (D, c. 400–450 AD) — Gospels and Acts; Western text-type; numerous unique readings',
    ],
    significance: 'The manuscript evidence for the New Testament is unparalleled among ancient texts: over 5,800 Greek manuscripts, 10,000 Latin manuscripts, and 9,300 other versions. Despite the differences between the Textus Receptus and the modern critical text, no doctrine of Christianity is affected by any textual variant. The two traditions differ primarily in minor details; the text of the NT is over 99% certain. Westcott and Hort estimated that only one-eighth of one percent of the NT text is "substantially uncertain." The sheer quantity and early date of the manuscript tradition makes the NT the best-attested document in all of ancient literature.',
    sources: [
      'Bruce Metzger, The Text of the New Testament: Its Transmission, Corruption, and Restoration, 4th ed. (Oxford, 2005)',
      'Philip Comfort, The Text of the Earliest New Testament Greek Manuscripts (Tyndale House, 1992)',
      'Daniel Wallace, ed., Revisiting the Corruption of the New Testament (Kregel, 2011)',
      'F.F. Bruce, The New Testament Documents: Are They Reliable? (IVP, 1981)',
    ],
  },
];

export function getScientistBySlug(slug: string): ChristianScientist | undefined {
  return christianScientists.find(s => s.slug === slug);
}

export function getScientistsByEra(era: ChristianScientist['era']): ChristianScientist[] {
  return christianScientists.filter(s => s.era === era);
}

export function getConflictBySlug(slug: string): ScienceFaithConflict | undefined {
  return scienceFaithConflicts.find(c => c.slug === slug);
}

export function getTranslationBySlug(slug: string): BibleTranslation | undefined {
  return bibleTranslations.find(t => t.slug === slug);
}

export function getCanonBySlug(slug: string): CanonFormation | undefined {
  return canonFormations.find(c => c.slug === slug);
}
