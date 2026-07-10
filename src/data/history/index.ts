import { HistoricalEvent, KeyFigure } from './types';
export type { HistoricalEvent, KeyFigure, HistoryCategory } from './types';

export const historicalEvents: HistoricalEvent[] = [
  {
    id: 'pentecost-acts-2',
    slug: 'pentecost-acts-2',
    name: 'Pentecost and the Birth of the Church',
    category: 'revival',
    startYear: 30,
    location: ['Jerusalem', 'Judea'],
    keyFigures: [
      { name: 'Peter', dates: 'c. 1–68 AD', role: 'Preached the inaugural sermon; declared the resurrection and called for repentance and baptism' },
      { name: 'The Eleven Apostles', dates: 'c. 30 AD', role: 'Filled with the Holy Spirit; spoke in other tongues as the Spirit enabled' },
      { name: 'James, brother of Jesus', dates: 'c. 62 AD', role: 'Leader of the Jerusalem church; later martyred' },
    ],
    description: 'Fifty days after the Passover at which Jesus was crucified, the 120 disciples gathered in Jerusalem were filled with the Holy Spirit and began speaking in the languages of the diaspora Jews gathered for the Feast of Weeks. Peter preached the inaugural sermon of the Christian church, declaring the crucified and risen Jesus as Lord and Messiah. Three thousand people were baptized that day. The church was born as a supernatural community of witness, breaking bread, prayer, and fellowship.',
    theologicalImpact: 'Pentecost marks the transition from the ministry of Jesus to the ministry of the Spirit-indwelt church. It fulfills Joel 2:28–32, vindicates the resurrection, and inaugurates the new-covenant people of God as a Spirit-empowered missionary community.',
    estimatedConverts: '3,000 on the first day; rapid growth throughout Judea, Samaria, and the surrounding regions',
    significance: 'The founding event of the Christian church. Pentecost demonstrates that the resurrection of Christ is a publicly proclaimed historical fact and that the age of the Spirit has arrived. The early church\'s explosive growth in Jerusalem — where opponents could have disproved the resurrection — provides powerful historical testimony.',
    sources: [
      'Acts 2:1–41',
      'F.F. Bruce, The Book of the Acts (NICNT, Eerdmans, 1988)',
      'Craig Keener, Acts: An Exegetical Commentary (Baker, 2012)',
    ],
  },
  {
    id: 'diocletianic-persecution',
    slug: 'diocletianic-persecution',
    name: 'The Diocletianic Persecution',
    category: 'persecution',
    startYear: 303,
    endYear: 313,
    location: ['Roman Empire', 'North Africa', 'Asia Minor', 'Egypt', 'Palestine', 'Spain', 'Gaul'],
    keyFigures: [
      { name: 'Emperor Diocletian', dates: '244–311 AD', role: 'Issued the four edicts of persecution beginning February 23, 303; sought to eliminate Christianity from the empire' },
      { name: 'Galerius', dates: '260–311 AD', role: 'Co-emperor; primary instigator of the persecution; later issued the Edict of Toleration (311) on his deathbed' },
      { name: 'Emperor Constantine I', dates: '272–337 AD', role: 'Ended the persecution and issued the Edict of Milan (313) granting religious freedom' },
    ],
    description: 'The Diocletianic persecution, also called the Great Persecution, was the last and most severe imperial assault on Christianity. Diocletian\'s four edicts ordered the destruction of churches and Scriptures, the revocation of civil rights for Christians, the imprisonment of clergy, and universal sacrifice to the Roman gods on pain of death. In North Africa, Egypt, and the East, thousands were tortured and martyred. The persecution was uneven — less severe in the western provinces under Constantius Chlorus. It ended with Galerius\'s Edict of Toleration (311) and was definitively closed by Constantine\'s Edict of Milan (313).',
    theologicalImpact: 'The persecution created the Donatist schism in North Africa, as churches debated the status of the traditores (those who handed over the Scriptures). It also produced the canon of saints and martyrs whose testimony became a pillar of early church identity.',
    estimatedMartyrs: 'Estimates range from hundreds to several thousand; precise numbers are debated by historians. The Diocletianic period produced the most extensive list of named Christian martyrs in the ancient church.',
    significance: 'The Great Persecution demonstrated that imperial power could not destroy the church. The survival and rapid expansion of Christianity immediately after the most concerted attempt to extirpate it is a powerful historical datum. Tertullian\'s axiom — "the blood of the martyrs is the seed of the church" — was never more clearly illustrated.',
    sources: [
      'Eusebius of Caesarea, Ecclesiastical History, Books VIII–X',
      'Lactantius, De Mortibus Persecutorum',
      'W.H.C. Frend, Martyrdom and Persecution in the Early Church (Blackwell, 1965)',
      'G.E.M. de Ste. Croix, Christian Persecution, Martyrdom, and Orthodoxy (Oxford, 2006)',
    ],
  },
  {
    id: 'protestant-reformation',
    slug: 'protestant-reformation',
    name: 'The Protestant Reformation',
    category: 'figure',
    startYear: 1517,
    endYear: 1648,
    location: ['Germany', 'Switzerland', 'England', 'Scotland', 'France', 'Netherlands', 'Scandinavia'],
    keyFigures: [
      { name: 'Martin Luther', dates: '1483–1546', role: 'Posted the 95 Theses (1517); translated the Bible into German; established the theological foundations of Lutheranism' },
      { name: 'John Calvin', dates: '1509–1564', role: 'Systematized Reformed theology; established Geneva as a model Reformed city; authored the Institutes of the Christian Religion' },
      { name: 'Ulrich Zwingli', dates: '1484–1531', role: 'Led the Reformation in Zurich; distinguished from Luther on the Lord\'s Supper; died in battle' },
      { name: 'William Tyndale', dates: '1494–1536', role: 'Translated the Bible into English; martyred by burning' },
      { name: 'Thomas Cranmer', dates: '1489–1556', role: 'Archbishop of Canterbury; produced the Book of Common Prayer; martyred under Mary I' },
    ],
    description: 'The Protestant Reformation was the 16th-century movement that permanently fractured Western Christendom, recovering the biblical doctrines of Scripture\'s authority, justification by faith alone, and the priesthood of all believers. Triggered by Martin Luther\'s protest against indulgences (1517), the movement spread rapidly through Germany, Switzerland, England, Scotland, and the Netherlands. It produced enduring theological traditions (Lutheran, Reformed, Anglican, Anabaptist), the translation of Scripture into vernacular languages, and a renewed emphasis on lay biblical literacy. The Peace of Westphalia (1648) recognized the permanent existence of Protestant states in Europe.',
    theologicalImpact: 'The Reformation recovered sola fide, sola gratia, sola Scriptura, and the other Reformation solas, reversing centuries of doctrinal accretion. It established the principle that the church must always be reforming (ecclesia semper reformanda) according to the Word of God.',
    significance: 'One of the most consequential religious movements in Western history, reshaping not only theology but education, literacy, politics, and economics. The Reformation\'s recovery of the biblical gospel has shaped evangelical Christianity to the present day.',
    sources: [
      'Roland Bainton, Here I Stand: A Life of Martin Luther (Abingdon, 1950)',
      'Alister McGrath, Reformation Thought: An Introduction, 4th ed. (Wiley-Blackwell, 2012)',
      'Diarmaid MacCulloch, The Reformation: A History (Viking, 2003)',
      'Heiko Oberman, Luther: Man Between God and the Devil (Yale, 1989)',
    ],
  },
  {
    id: 'first-great-awakening',
    slug: 'first-great-awakening',
    name: 'The First Great Awakening',
    category: 'revival',
    startYear: 1730,
    endYear: 1743,
    location: ['Colonial New England', 'Mid-Atlantic colonies', 'Great Britain'],
    keyFigures: [
      { name: 'Jonathan Edwards', dates: '1703–1758', role: 'Theologian-preacher of the revival; preached "Sinners in the Hands of an Angry God" (1741); authored A Faithful Narrative and A Treatise Concerning Religious Affections' },
      { name: 'George Whitefield', dates: '1714–1770', role: 'Itinerant evangelist whose outdoor preaching drew tens of thousands; the catalytic figure of the transatlantic awakening' },
      { name: 'Gilbert Tennent', dates: '1703–1764', role: 'Presbyterian revivalist in the Middle Colonies; his sermon "The Danger of an Unconverted Ministry" was influential and controversial' },
    ],
    description: 'The First Great Awakening was a series of powerful revivals that swept through the British colonies in North America and Great Britain from the 1730s through the early 1740s. Characterized by intense conviction of sin, public weeping, and dramatic conversions, the revival began in Northampton, Massachusetts, under Jonathan Edwards (1734–35), and was supercharged by George Whitefield\'s colonial tours (1739–40). It crossed denominational lines — touching Calvinist Congregationalists, Presbyterians, and even some Anglican communities — and created the template for American evangelical revivalism. It also contributed to the democratic, egalitarian spirit of the colonial era.',
    theologicalImpact: 'The Awakening revitalized Calvinist orthodoxy (through Edwards), established itinerant evangelism as a legitimate ministry form, and produced enduring institutions (Princeton University, Dartmouth College). Edwards\'s Treatise on Religious Affections became the definitive evangelical analysis of genuine versus spurious religious experience.',
    estimatedConverts: 'Tens of thousands of documented conversions and church memberships across the colonies',
    significance: 'Regarded as the birthplace of American evangelical Protestantism. The Awakening demonstrated that theological orthodoxy and fervent spiritual experience are not mutually exclusive, a tension Edwards navigated with extraordinary intellectual precision.',
    sources: [
      'Jonathan Edwards, A Faithful Narrative of the Surprising Work of God (1737)',
      'Jonathan Edwards, Religious Affections (1746)',
      'Frank Lambert, Inventing the "Great Awakening" (Princeton, 1999)',
      'Iain Murray, Jonathan Edwards: A New Biography (Banner of Truth, 1987)',
    ],
  },
  {
    id: 'edict-of-milan',
    slug: 'edict-of-milan',
    name: 'The Edict of Milan and the Constantinian Settlement',
    category: 'figure',
    startYear: 313,
    endYear: 380,
    location: ['Roman Empire', 'Milan', 'Constantinople'],
    keyFigures: [
      { name: 'Emperor Constantine I', dates: '272–337 AD', role: 'Issued the Edict of Milan (313); convened the Council of Nicaea (325); promoted Christianity as a favored religion of the empire' },
      { name: 'Emperor Licinius', dates: '263–325 AD', role: 'Co-issued the Edict of Milan with Constantine; later persecuted Christians before his defeat by Constantine' },
      { name: 'Emperor Theodosius I', dates: '347–395 AD', role: 'Issued the Edict of Thessalonica (380), making Nicene Christianity the official state religion of the Roman Empire' },
    ],
    description: 'The Edict of Milan (313 AD), issued jointly by Emperors Constantine and Licinius, granted religious toleration throughout the Roman Empire and restored confiscated property to Christians. This ended the Great Persecution and marked the beginning of Christianity\'s extraordinary rise to imperial favor. Constantine called the Council of Nicaea (325) to resolve the Arian controversy and preserve imperial unity. The Constantinian settlement culminated in the Edict of Thessalonica (380), by which Emperor Theodosius I made Nicene Christianity the sole official religion of the Roman Empire, beginning the era of Christendom.',
    theologicalImpact: 'The Constantinian shift transformed Christianity from a persecuted minority to the established religion of the most powerful empire in the world. It enabled the convening of the ecumenical councils that formalized Trinitarian and Christological doctrine. It also introduced complex entanglements between church and state that have been debated ever since.',
    significance: 'The Edict of Milan is the hinge point of Western religious history. It enabled the seven ecumenical councils, the codification of Christian theology, and the evangelization of pagan Europe. It also represents the beginning of the complex — and sometimes corrupting — alliance between Christianity and political power.',
    sources: [
      'Eusebius of Caesarea, Life of Constantine',
      'Lactantius, De Mortibus Persecutorum',
      'Henry Chadwick, The Early Church (Penguin, 1993)',
      'Jaroslav Pelikan, The Christian Tradition, Vol. 1 (University of Chicago, 1971)',
    ],
  },
];

export const keyFigures: KeyFigure[] = [
  {
    id: 'augustine-of-hippo',
    slug: 'augustine-of-hippo',
    name: 'Augustine of Hippo',
    birthYear: 354,
    deathYear: 430,
    era: 'nicene',
    tradition: 'Latin Christianity; Bishop of Hippo (North Africa)',
    keyWorks: [
      'Confessions (c. 397–400)',
      'The City of God (413–426)',
      'De Trinitate (On the Trinity, c. 400–416)',
      'On Christian Doctrine (396–426)',
      'On the Predestination of the Saints (428)',
    ],
    theologicalContribution: 'Augustine is the towering figure of Western Christian theology. His Confessions gave the world Christian autobiography and a theology of restless hearts made for God. The City of God provided a Christian philosophy of history in the face of Rome\'s fall. His trinitarian theology (De Trinitate) developed the psychological analogy (memory, understanding, will). His anti-Pelagian writings — defending the doctrines of original sin, total depravity, and sovereign grace — shaped all subsequent Western theology, both Catholic and Protestant. He defined the church\'s doctrine of grace, predestination, and the sacraments.',
    significance: 'Often called the second founder of Christianity (after Paul). Every major stream of Western Christianity — Catholic, Lutheran, Reformed, Anglican — claims him as a formative influence. His theological categories shaped the medieval synthesis, the Reformation, and modern evangelical theology.',
    sources: [
      'Augustine, Confessions (trans. Henry Chadwick, Oxford, 1991)',
      'Peter Brown, Augustine of Hippo: A Biography (Faber, 1967)',
      'Alister McGrath, Christian Theology: An Introduction, 5th ed. (Wiley-Blackwell, 2011)',
    ],
  },
  {
    id: 'athanasius-of-alexandria',
    slug: 'athanasius-of-alexandria',
    name: 'Athanasius of Alexandria',
    birthYear: 296,
    deathYear: 373,
    era: 'nicene',
    tradition: 'Eastern Christianity; Bishop (Pope) of Alexandria, Egypt',
    keyWorks: [
      'On the Incarnation of the Word (c. 318)',
      'Discourse Against the Arians (339)',
      'Life of Anthony (357)',
      'Festal Letter 39 (367) — first known list of all 27 NT books',
    ],
    theologicalContribution: 'Athanasius was the primary defender of Nicene orthodoxy against the Arian heresy — exiled five times for his refusal to compromise the full deity of Christ ("Athanasius contra mundum" — Athanasius against the world). His On the Incarnation articulated the logic of the incarnation: only one who is truly God can restore what was lost in Adam. His Festal Letter of 367 is the earliest document listing all 27 books of the New Testament as canonical.',
    significance: 'Without Athanasius\'s tenacious defense of homoousios (the Son is of the same substance as the Father), the Arian heresy might have become the dominant form of Christianity. He is the patron saint of Trinitarian orthodoxy and the defender of the canon.',
    sources: [
      'Athanasius, On the Incarnation (trans. Crestwood, NY: St. Vladimir\'s Seminary Press, 1993)',
      'T.F. Torrance, Divine Meaning: Studies in Patristic Hermeneutics (T&T Clark, 1995)',
      'Khaled Anatolios, Athanasius: The Coherence of His Thought (Routledge, 1998)',
    ],
  },
  {
    id: 'martin-luther',
    slug: 'martin-luther',
    name: 'Martin Luther',
    birthYear: 1483,
    deathYear: 1546,
    era: 'reformation',
    tradition: 'German Reformation; founder of Lutheranism',
    keyWorks: [
      'Ninety-Five Theses (1517)',
      'The Bondage of the Will (1525)',
      'Commentary on Galatians (1535)',
      'Small Catechism (1529)',
      'Large Catechism (1529)',
      'German Bible Translation (1522 NT; 1534 complete)',
    ],
    theologicalContribution: 'Luther\'s recovery of justification by faith alone from Romans 1:17 was the explosive center of the Reformation. His translation of the Bible into the German vernacular gave Scripture to the people and shaped the German language. The Bondage of the Will — his debate with Erasmus — remains the most rigorous defense of sovereign grace in the history of theology. His Small Catechism provided a concise summary of the faith for households. His doctrine of vocation (Beruf) — that all legitimate work glorifies God — transformed the medieval hierarchy of spiritual vs. secular callings.',
    significance: 'Luther\'s recovery of the gospel broke the medieval sacramental stranglehold on grace and launched the Protestant Reformation, which reshaped the religious, intellectual, and political landscape of the Western world.',
    sources: [
      'Roland Bainton, Here I Stand: A Life of Martin Luther (Abingdon, 1950)',
      'Heiko Oberman, Luther: Man Between God and the Devil (Yale, 1989)',
      'Martin Luther, The Bondage of the Will (trans. Packer & Johnston, James Clarke, 1957)',
    ],
  },
  {
    id: 'john-calvin',
    slug: 'john-calvin',
    name: 'John Calvin',
    birthYear: 1509,
    deathYear: 1564,
    era: 'reformation',
    tradition: 'French-Swiss Reformation; founder of Reformed theology',
    keyWorks: [
      'Institutes of the Christian Religion (1536; final ed. 1559)',
      'Commentaries on the entire Bible',
      'Ecclesiastical Ordinances (1541)',
      'Genevan Catechism (1542)',
    ],
    theologicalContribution: 'Calvin systematized the theology of the Reformation in the Institutes — the most influential work of Protestant systematic theology. He developed the doctrines of divine sovereignty, predestination, covenant theology, and the spiritual presence in the Lord\'s Supper. His exhaustive biblical commentaries set the standard for Reformed exegesis. As the architect of Geneva\'s church order, he demonstrated a vision of the city as a Christian commonwealth. His theological legacy produced Presbyterianism, the Dutch Reformed tradition, Puritanism, and Congregationalism.',
    significance: 'Calvin\'s Institutes is to Protestant theology what Aquinas\'s Summa is to Catholic theology — the comprehensive systematic statement of the tradition. Reformed theology remains the dominant intellectual stream of evangelical Protestantism.',
    sources: [
      'John Calvin, Institutes of the Christian Religion (trans. Ford Lewis Battles, Westminster, 1960)',
      'Alister McGrath, A Life of John Calvin (Blackwell, 1990)',
      'Herman Bavinck, Reformed Dogmatics (Baker Academic, 2003–2008)',
    ],
  },
  {
    id: 'charles-spurgeon',
    slug: 'charles-spurgeon',
    name: 'Charles Haddon Spurgeon',
    birthYear: 1834,
    deathYear: 1892,
    era: 'post-reformation',
    tradition: 'Particular Baptist; Calvinistic',
    keyWorks: [
      'The Metropolitan Tabernacle Pulpit (63 volumes of published sermons)',
      'Morning by Morning and Evening by Evening (devotional)',
      'Lectures to My Students (1875–94)',
      'The Treasury of David (Psalms commentary, 7 vols., 1870–85)',
    ],
    theologicalContribution: 'Spurgeon was the "Prince of Preachers," whose sermons at the Metropolitan Tabernacle in London drew crowds of up to 10,000 weekly. He was a staunch Calvinist who nonetheless practiced vigorous evangelism, demonstrating that the doctrines of grace fuel rather than hinder outreach. He founded Spurgeon\'s College for the training of ministers, a colportage ministry, and over 60 charitable institutions. His "Down-Grade Controversy" (1887–88), in which he left the Baptist Union over the toleration of liberal theology, established the template for evangelical confessionalism in the modern era.',
    significance: 'Spurgeon\'s sermons remain among the most read in the English-speaking world. His integration of doctrinal depth, pastoral warmth, and evangelistic passion has made him a perennial model for Reformed preachers.',
    sources: [
      'Iain Murray, The Forgotten Spurgeon (Banner of Truth, 1966)',
      'Arnold Dallimore, Spurgeon: A New Biography (Banner of Truth, 1984)',
      'Charles Spurgeon, Lectures to My Students (Zondervan, 1954)',
    ],
  },
  {
    id: 'cs-lewis',
    slug: 'cs-lewis',
    name: 'C.S. Lewis',
    birthYear: 1898,
    deathYear: 1963,
    era: 'modern',
    tradition: 'Anglican; broadly orthodox Christianity',
    keyWorks: [
      'Mere Christianity (1952)',
      'The Problem of Pain (1940)',
      'Miracles (1947)',
      'The Screwtape Letters (1942)',
      'The Chronicles of Narnia (1950–56)',
      'Surprised by Joy (1955)',
      'The Abolition of Man (1943)',
    ],
    theologicalContribution: 'Lewis was the most influential popular Christian apologist of the 20th century. A former atheist and Oxford don, he converted to Christianity in 1931 and became an extraordinarily gifted defender of the faith to the secular mind. Mere Christianity distilled the rational case for Christianity for a lay audience. The Problem of Pain and Miracles engaged the philosophically literate skeptic. The Abolition of Man remains a definitive defense of objective moral values. His fiction — particularly the Narnia Chronicles and Space Trilogy — made Christian truth accessible through the power of imagination.',
    significance: 'Surveys consistently rank Lewis as the most influential Christian of the 20th century after Billy Graham. His work is credited with bringing millions to Christian faith and keeping millions within it.',
    sources: [
      'C.S. Lewis, Surprised by Joy (Geoffrey Bles, 1955)',
      'Alister McGrath, C.S. Lewis — A Life: Eccentric Genius, Reluctant Prophet (Tyndale House, 2013)',
      'Walter Hooper, C.S. Lewis: A Companion and Guide (HarperCollins, 1996)',
    ],
  },
];

export function getEventBySlug(slug: string): HistoricalEvent | undefined {
  return historicalEvents.find(e => e.slug === slug);
}

export function getEventsByCategory(category: HistoricalEvent['category']): HistoricalEvent[] {
  return historicalEvents.filter(e => e.category === category);
}

export function getFigureBySlug(slug: string): KeyFigure | undefined {
  return keyFigures.find(f => f.slug === slug);
}

export function getFiguresByEra(era: KeyFigure['era']): KeyFigure[] {
  return keyFigures.filter(f => f.era === era);
}
