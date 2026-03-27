export interface SourceDocument {
  id: string;
  title: string;
  author: string;
  date: string;
  tradition: string;
  genre: string;
  doctrines: string[];
  controversy?: string;
  excerpt: string;
  crossRefs: string[];
  relatedWorks: string[];
}

export interface Council {
  id: string;
  name: string;
  year: number;
  location: string;
  scope: 'ecumenical' | 'regional';
  keyDecisions: string[];
  creeds?: string[];
  description: string;
}

export interface Manuscript {
  id: string;
  designation: string;
  date: string;
  type: 'papyrus' | 'uncial' | 'minuscule';
  contents: string;
  location: string;
  significance: string;
}

export const churchFathers: SourceDocument[] = [
  {
    id: 'athanasius-incarnation',
    title: 'On the Incarnation',
    author: 'Athanasius of Alexandria',
    date: 'c. 318 AD',
    tradition: 'Eastern Greek',
    genre: 'Systematic/Apologetic',
    doctrines: ['Christology', 'Incarnation', 'Soteriology'],
    controversy: 'Anti-Arian',
    excerpt: '"For He was made man that we might be made God." — Ch. 54\n\nThis foundational text argues that the incarnation of the Word (Logos) was necessary for the salvation and deification (theosis) of humanity. Athanasius contends that only God Himself, by uniting human nature to divine nature in Christ, could reverse the corruption and death introduced by the Fall.',
    crossRefs: ['2 Peter 1:4', 'John 1:14', 'Philippians 2:5-11'],
    relatedWorks: ['Irenaeus, Against Heresies', 'Council of Nicaea (325)']
  },
  {
    id: 'irenaeus-heresies',
    title: 'Against Heresies (Adversus Haereses)',
    author: 'Irenaeus of Lyon',
    date: 'c. 180 AD',
    tradition: 'Western Latin/Greek',
    genre: 'Polemical/Apologetic',
    doctrines: ['Christology', 'Recapitulation', 'Canon', 'Apostolic Succession'],
    controversy: 'Anti-Gnostic',
    excerpt: '"The Word of God, our Lord Jesus Christ... did, through His transcendent love, become what we are, that He might bring us to be even what He is Himself." — Book V, Preface\n\nIrenaeus\'s magnum opus is the earliest and most comprehensive refutation of Gnosticism. He argues for the unity of the Old and New Testaments, the goodness of creation, the reality of the Incarnation, and the doctrine of recapitulation — Christ "sums up" all of human history in Himself, undoing the damage of the Fall.',
    crossRefs: ['Genesis 1:31', 'John 1:14', 'Ephesians 1:10'],
    relatedWorks: ['Nag Hammadi texts', 'Council of Nicaea (325)', 'Athanasius, On the Incarnation']
  },
  {
    id: 'augustine-confessions',
    title: 'Confessions',
    author: 'Augustine of Hippo',
    date: 'c. 397 AD',
    tradition: 'Western Latin',
    genre: 'Autobiography/Theological',
    doctrines: ['Grace', 'Original Sin', 'Free Will', 'Providence'],
    excerpt: '"You have made us for yourself, O Lord, and our hearts are restless until they rest in you." — Book I.1\n\nThe Confessions is both the first autobiography in Western literature and a profound theological meditation on grace, sin, memory, time, and the nature of God. Augustine traces his spiritual journey from Manichaeism through Neoplatonism to Christian faith, demonstrating that the human soul finds its fulfillment only in union with God.',
    crossRefs: ['Psalm 27:8', 'Romans 7:18-25', 'Philippians 3:13-14'],
    relatedWorks: ['Augustine, City of God', 'Augustine, On the Trinity']
  },
  {
    id: 'aquinas-summa',
    title: 'Summa Theologiae',
    author: 'Thomas Aquinas',
    date: '1265–1274',
    tradition: 'Western Latin/Catholic',
    genre: 'Systematic Theology',
    doctrines: ['Natural Theology', 'Divine Attributes', 'Christology', 'Sacraments', 'Ethics'],
    excerpt: '"The existence of God can be proved in five ways." — I, q. 2, art. 3\n\nThe Summa is the most comprehensive systematic theology ever written. Its three parts cover God\'s existence and nature (Prima Pars), human moral life and the virtues (Secunda Pars), and Christ and the sacraments (Tertia Pars). Thomas\'s method synthesizes Aristotelian philosophy with Christian revelation.',
    crossRefs: ['Romans 1:20', 'Wisdom 13:1-9', 'Exodus 3:14'],
    relatedWorks: ['Aristotle, Metaphysics', 'Boethius, Consolation of Philosophy']
  }
];

export const councils: Council[] = [
  {
    id: 'nicaea-i',
    name: 'First Council of Nicaea',
    year: 325,
    location: 'Nicaea (modern İznik, Turkey)',
    scope: 'ecumenical',
    keyDecisions: ['Condemned Arianism', 'Affirmed the full divinity of the Son (homoousios)', 'Produced the original Nicene Creed', 'Established the date of Easter', 'Set rules for church organization'],
    creeds: ['Nicene Creed (325)'],
    description: 'The first ecumenical council, convened by Emperor Constantine I, addressed the Arian controversy — the claim that the Son was a created being, not co-eternal with the Father. The council affirmed that the Son is homoousios (of one substance) with the Father, establishing the theological foundation of Trinitarian orthodoxy.'
  },
  {
    id: 'constantinople-i',
    name: 'First Council of Constantinople',
    year: 381,
    location: 'Constantinople (modern Istanbul)',
    scope: 'ecumenical',
    keyDecisions: ['Expanded the Nicene Creed (Niceno-Constantinopolitan Creed)', 'Affirmed the full divinity of the Holy Spirit', 'Condemned Apollinarianism', 'Established Constantinople as second in honor after Rome'],
    creeds: ['Niceno-Constantinopolitan Creed (381)'],
    description: 'This council completed the Trinitarian formula by affirming the full divinity and personhood of the Holy Spirit ("the Lord, the Giver of Life, who proceeds from the Father"). It also condemned Apollinarianism (the denial of Christ\'s human rational soul).'
  },
  {
    id: 'ephesus',
    name: 'Council of Ephesus',
    year: 431,
    location: 'Ephesus',
    scope: 'ecumenical',
    keyDecisions: ['Affirmed Mary as Theotokos (God-bearer)', 'Condemned Nestorianism', 'Prohibited alterations to the Nicene Creed'],
    description: 'Called to address the teaching of Nestorius, who objected to calling Mary Theotokos and appeared to divide Christ into two persons. The council affirmed the unity of Christ\'s person and Mary\'s title as Theotokos — she bore not merely a man but the incarnate God.'
  },
  {
    id: 'chalcedon',
    name: 'Council of Chalcedon',
    year: 451,
    location: 'Chalcedon (modern Kadıköy, Istanbul)',
    scope: 'ecumenical',
    keyDecisions: ['Defined Christ as one person in two natures (divine and human)', 'Condemned Eutychianism/Monophysitism', 'Produced the Chalcedonian Definition'],
    creeds: ['Chalcedonian Definition (451)'],
    description: 'The pivotal council for Christology. It defined that Christ is "truly God and truly man," with two natures — divine and human — united "without confusion, without change, without division, without separation" in one person (hypostasis). This formula remains the standard Christological definition for Orthodox, Catholic, and Protestant Christianity.'
  },
  {
    id: 'nicaea-ii',
    name: 'Second Council of Nicaea',
    year: 787,
    location: 'Nicaea',
    scope: 'ecumenical',
    keyDecisions: ['Affirmed the veneration of icons', 'Distinguished between latreia (worship due to God) and proskynesis (veneration of icons)', 'Ended the Iconoclast Controversy'],
    description: 'Convened to resolve the Iconoclast Controversy. The council affirmed that icons of Christ, the Theotokos, and the saints may be venerated (honored) but not worshiped (which is due to God alone). The council argued that denying the depictability of Christ implicitly denies the reality of the Incarnation.'
  }
];

export const manuscripts: Manuscript[] = [
  { id: 'p52', designation: 'P52 (Rylands Library Papyrus)', date: 'c. 125 AD', type: 'papyrus', contents: 'John 18:31-33, 37-38', location: 'John Rylands Library, Manchester', significance: 'The oldest known fragment of any New Testament book. Dates to within a generation of the Gospel of John\'s composition, demonstrating early circulation in Egypt.' },
  { id: 'p66', designation: 'P66 (Bodmer Papyrus II)', date: 'c. 200 AD', type: 'papyrus', contents: 'Most of the Gospel of John', location: 'Bodmer Library, Geneva', significance: 'One of the earliest substantial papyri of a single Gospel book. Contains nearly complete text of John with high textual quality.' },
  { id: 'p75', designation: 'P75 (Bodmer Papyrus XIV-XV)', date: 'c. 175-225 AD', type: 'papyrus', contents: 'Luke 3-24, John 1-15', location: 'Vatican Library', significance: 'Early witness to Luke and John. Its text is extremely close to Codex Vaticanus (4th century), showing the stability of the textual tradition.' },
  { id: 'sinaiticus', designation: 'Codex Sinaiticus (א)', date: 'c. 330-360 AD', type: 'uncial', contents: 'Complete New Testament + portions of Old Testament (LXX)', location: 'British Library, London', significance: 'One of the two oldest complete New Testament manuscripts. Discovered by Tischendorf at St. Catherine\'s Monastery, Sinai, in 1844. Contains the complete NT plus Epistle of Barnabas and Shepherd of Hermas.' },
  { id: 'vaticanus', designation: 'Codex Vaticanus (B)', date: 'c. 300-325 AD', type: 'uncial', contents: 'Nearly complete Bible (OT + NT)', location: 'Vatican Library, Rome', significance: 'Perhaps the oldest nearly complete Bible manuscript. Its text is considered one of the highest quality witnesses to the original NT text. Has been in the Vatican Library since at least 1481.' },
];

export const timelineEvents = [
  { year: 33, title: 'Crucifixion & Resurrection of Jesus', category: 'event', era: 'Apostolic' },
  { year: 49, title: 'Council of Jerusalem', category: 'council', era: 'Apostolic' },
  { year: 64, title: 'Great Fire of Rome — Nero persecutes Christians', category: 'event', era: 'Apostolic' },
  { year: 70, title: 'Destruction of the Temple in Jerusalem', category: 'event', era: 'Apostolic' },
  { year: 95, title: 'Book of Revelation written', category: 'event', era: 'Apostolic' },
  { year: 100, title: 'Didache composed', category: 'document', era: 'Apostolic' },
  { year: 107, title: 'Ignatius of Antioch martyred', category: 'figure', era: 'Apostolic' },
  { year: 155, title: 'Polycarp of Smyrna martyred', category: 'figure', era: 'Ante-Nicene' },
  { year: 180, title: 'Irenaeus writes Against Heresies', category: 'document', era: 'Ante-Nicene' },
  { year: 250, title: 'Decian persecution', category: 'event', era: 'Ante-Nicene' },
  { year: 313, title: 'Edict of Milan — Christianity legalized', category: 'event', era: 'Nicene' },
  { year: 325, title: 'First Council of Nicaea', category: 'council', era: 'Nicene' },
  { year: 367, title: 'Athanasius\'s 39th Festal Letter — earliest complete NT canon list', category: 'document', era: 'Nicene' },
  { year: 381, title: 'First Council of Constantinople', category: 'council', era: 'Nicene' },
  { year: 397, title: 'Augustine writes Confessions', category: 'document', era: 'Nicene' },
  { year: 431, title: 'Council of Ephesus', category: 'council', era: 'Nicene' },
  { year: 451, title: 'Council of Chalcedon', category: 'council', era: 'Nicene' },
  { year: 529, title: 'Second Council of Orange (Semi-Pelagianism condemned)', category: 'council', era: 'Post-Nicene' },
  { year: 553, title: 'Second Council of Constantinople', category: 'council', era: 'Post-Nicene' },
  { year: 680, title: 'Third Council of Constantinople', category: 'council', era: 'Post-Nicene' },
  { year: 787, title: 'Second Council of Nicaea — Icons affirmed', category: 'council', era: 'Post-Nicene' },
  { year: 1054, title: 'Great Schism — East and West divide', category: 'event', era: 'Medieval' },
  { year: 1265, title: 'Aquinas begins Summa Theologiae', category: 'document', era: 'Medieval' },
  { year: 1341, title: 'Palamite Councils — Gregory Palamas affirmed', category: 'council', era: 'Medieval' },
  { year: 1517, title: 'Luther\'s 95 Theses — Protestant Reformation begins', category: 'event', era: 'Reformation' },
  { year: 1534, title: 'Act of Supremacy — Church of England separates from Rome', category: 'event', era: 'Reformation' },
  { year: 1545, title: 'Council of Trent begins (Catholic Counter-Reformation)', category: 'council', era: 'Reformation' },
  { year: 1618, title: 'Synod of Dort — Five Points of Calvinism', category: 'council', era: 'Reformation' },
  { year: 1647, title: 'Westminster Confession of Faith', category: 'document', era: 'Reformation' },
  { year: 1870, title: 'Vatican I — Papal Infallibility defined', category: 'council', era: 'Modern' },
  { year: 1962, title: 'Vatican II begins', category: 'council', era: 'Modern' },
  { year: 1978, title: 'Chicago Statement on Biblical Inerrancy', category: 'document', era: 'Modern' },
];
