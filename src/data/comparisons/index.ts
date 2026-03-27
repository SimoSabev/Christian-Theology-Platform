export interface TraditionInfo {
  id: string;
  name: string;
  shortName: string;
  description: string;
  keyBeliefs: string[];
  distinctives: string[];
}

export interface DoctrineComparison {
  id: string;
  name: string;
  traditions: Record<string, { position: string; keySources: string[]; details: string }>;
}

export const traditions: TraditionInfo[] = [
  {
    id: 'orthodoxy',
    name: 'Eastern Orthodoxy',
    shortName: 'Orthodox',
    description: 'The Eastern Orthodox Church is the second-largest Christian communion, tracing its origins through an unbroken line of apostolic succession to the early Church. It emphasizes theosis (deification), the mystery of the sacraments, and the consensus of the Church Fathers.',
    keyBeliefs: ['Theosis (deification) as the goal of salvation', 'Essence-energies distinction (Palamism)', 'Seven ecumenical councils as doctrinal authority', 'Real Presence in the Eucharist (mystery, not defined philosophically)', 'Veneration of icons as theology in color'],
    distinctives: ['Apophatic theology — knowing God through what He is not', 'Conciliar governance — no single supreme head', 'Rejects the Filioque addition to the Creed', 'Divine Liturgy of St. John Chrysostom as central worship'],
  },
  {
    id: 'catholicism',
    name: 'Roman Catholicism',
    shortName: 'Catholic',
    description: 'The Roman Catholic Church is the largest Christian communion, claiming an unbroken line from the Apostle Peter through the bishops of Rome. It is distinguished by papal primacy and infallibility, the Magisterium, and a highly developed sacramental theology.',
    keyBeliefs: ['Papal primacy and infallibility (ex cathedra)', 'Magisterium as authoritative interpreter of Scripture and Tradition', 'Transubstantiation — substance of bread/wine becomes Body/Blood', 'Seven sacraments as channels of grace', 'Four Marian dogmas (Theotokos, Perpetual Virginity, Immaculate Conception, Assumption)'],
    distinctives: ['Development of doctrine (Newman)', 'Purgatory and the Treasury of Merit', 'Natural law and Thomistic philosophy', 'Canon law as a comprehensive legal system'],
  },
  {
    id: 'protestantism',
    name: 'Protestantism',
    shortName: 'Protestant',
    description: 'Protestantism emerged from the 16th-century Reformation, emphasizing Scripture alone, faith alone, and grace alone. It encompasses a vast diversity of traditions — Reformed, Lutheran, Baptist, Methodist, Anglican, Pentecostal, and many others.',
    keyBeliefs: ['Sola Scriptura — Scripture as the sole infallible authority', 'Sola Fide — justification by faith alone', 'Sola Gratia — salvation by grace alone', 'Priesthood of all believers', 'Two sacraments (Baptism and Lord\'s Supper) for most traditions'],
    distinctives: ['The Five Solas as foundational principles', 'Diverse ecclesiology — episcopal, presbyterian, congregational', 'Wide range of eucharistic views (spiritual presence to memorial)', 'Emphasis on preaching and personal Bible study'],
  }
];

export const doctrineComparisons: DoctrineComparison[] = [
  {
    id: 'eucharist',
    name: 'Eucharist / Lord\'s Supper',
    traditions: {
      orthodoxy: {
        position: 'Real Presence (Mystery)',
        keySources: ['Liturgy of St. John Chrysostom', 'John of Damascus, On the Orthodox Faith IV.13'],
        details: 'The bread and wine truly become the Body and Blood of Christ. The mechanism is a mystery (mysterion) — not defined using Aristotelian categories. The preferred term is metousiosis (change of essence), but this is not dogmatically binding.'
      },
      catholicism: {
        position: 'Transubstantiation',
        keySources: ['Council of Trent, Session XIII (1551)', 'Aquinas, Summa Theologiae III.75'],
        details: 'The substance of the bread and wine is wholly converted into the substance of the Body and Blood of Christ, while the accidents (appearances) of bread and wine remain. This change is called transubstantiation and is defined dogma.'
      },
      protestantism: {
        position: 'Varies widely',
        keySources: ['Calvin, Institutes IV.17', 'Zwingli, On the Lord\'s Supper (1526)', 'Luther, Babylonian Captivity'],
        details: 'Lutheran: Real Presence "in, with, and under" the bread and wine (consubstantiation). Reformed/Calvinist: Spiritual Real Presence — Christ is received by faith through the power of the Spirit, but is not locally present in the elements. Zwinglian/Memorial: The Supper is a memorial and act of obedience, symbolizing Christ\'s sacrifice.'
      }
    }
  },
  {
    id: 'salvation',
    name: 'Salvation / Justification',
    traditions: {
      orthodoxy: {
        position: 'Theosis (Synergistic)',
        keySources: ['Athanasius, On the Incarnation 54', 'Gregory Palamas, Triads', 'Maximus the Confessor'],
        details: 'Salvation is theosis — participation in the divine life through God\'s uncreated energies. It is a lifelong process of purification (katharsis), illumination (photismos), and union (theosis). Grace and human cooperation (synergy) are both essential. Salvation is not a single forensic declaration but an ongoing transformation.'
      },
      catholicism: {
        position: 'Faith + Works (Synergistic)',
        keySources: ['Council of Trent, Session VI (1547)', 'Catechism §1987-2029'],
        details: 'Justification involves both an infusion of grace (making the person inherently righteous) and human cooperation. Faith, baptism, and good works are all necessary. The Council of Trent distinguished initial justification (at baptism) from growth in justification. Mortal sin can result in the loss of justification.'
      },
      protestantism: {
        position: 'Sola Fide (Monergistic / Reformed)',
        keySources: ['Luther, On the Freedom of a Christian (1520)', 'Calvin, Institutes III.11', 'Westminster Confession XI'],
        details: 'Justification is a forensic (legal) declaration by God that the sinner is righteous, based on the imputed righteousness of Christ received through faith alone. Works are the fruit and evidence of saving faith, not its basis. Reformed theology emphasizes monergism — salvation is entirely God\'s work (unconditional election, irresistible grace).'
      }
    }
  },
  {
    id: 'authority',
    name: 'Scripture & Authority',
    traditions: {
      orthodoxy: {
        position: 'Scripture + Holy Tradition + Consensus of Fathers',
        keySources: ['Irenaeus, Against Heresies III.4', 'Vincent of Lérins, Commonitory'],
        details: 'Scripture and Tradition are two expressions of the one deposit of faith. Scripture is interpreted within the living Tradition of the Church — the consensus of the Fathers, the ecumenical councils, and the liturgical practice of the Church. No single authority (pope or council alone) can define doctrine independently.'
      },
      catholicism: {
        position: 'Scripture + Tradition + Magisterium',
        keySources: ['Vatican II, Dei Verbum (1965)', 'Vatican I, Pastor Aeternus (1870)'],
        details: 'Scripture and Tradition together form the Word of God, authoritatively interpreted by the Magisterium (the Pope and bishops in communion with him). The Pope, when speaking ex cathedra on matters of faith and morals, is infallible (Vatican I). The Magisterium alone has the authority to authentically interpret Scripture.'
      },
      protestantism: {
        position: 'Sola Scriptura',
        keySources: ['Luther, On the Councils and the Church (1539)', 'Westminster Confession I', 'Chicago Statement on Inerrancy (1978)'],
        details: 'Scripture alone is the sole infallible rule of faith and practice. Tradition, creeds, and confessions are valuable but are subordinate to Scripture and must be tested by it. The perspicuity (clarity) of Scripture means that the essential teachings are clear to ordinary readers aided by the Holy Spirit.'
      }
    }
  },
  {
    id: 'baptism',
    name: 'Baptism',
    traditions: {
      orthodoxy: {
        position: 'Triple immersion, includes infants',
        keySources: ['Didache 7', 'Cyril of Jerusalem, Mystagogical Catecheses'],
        details: 'Baptism is the sacrament of regeneration — the person dies and rises with Christ, receives remission of sins, and is incorporated into the Body of Christ. Infants are baptized and immediately receive Chrismation and Eucharist. The normative form is triple immersion in the name of the Trinity.'
      },
      catholicism: {
        position: 'Pouring or immersion, includes infants',
        keySources: ['Council of Trent, Session VII', 'Catechism §1213-1284'],
        details: 'Baptism effects regeneration, remission of original and actual sin, and incorporation into the Church. Infants are baptized (original sin). The ordinary form is pouring (affusion) or immersion. Baptism imparts an indelible character and cannot be repeated.'
      },
      protestantism: {
        position: 'Varies widely',
        keySources: ['Westminster Confession XXVIII', 'London Baptist Confession XXIX'],
        details: 'Reformed/Presbyterian: Infant baptism as sign of the covenant. Baptist: Believer\'s baptism only — baptism follows a conscious profession of faith; immersion is the normative mode. Lutheran: Infant baptism with a sacramental understanding. All Protestants reject baptismal regeneration (except some Lutherans).'
      }
    }
  },
  {
    id: 'mary',
    name: 'Mariology',
    traditions: {
      orthodoxy: {
        position: 'Theotokos, Ever-Virgin, highly venerated',
        keySources: ['Council of Ephesus (431)', 'John of Damascus, On the Orthodox Faith IV.14'],
        details: 'Mary is Theotokos (God-bearer) — defined at Ephesus (431). She is aeiparthenos (ever-virgin) and is given the highest veneration (hyperdulia) among saints. Orthodoxy does not formally define the Immaculate Conception or the bodily Assumption as dogma, though Mary\'s Dormition (falling asleep) is celebrated liturgically.'
      },
      catholicism: {
        position: 'Four Marian Dogmas',
        keySources: ['Council of Ephesus (431)', 'Pius IX, Ineffabilis Deus (1854)', 'Pius XII, Munificentissimus Deus (1950)'],
        details: 'Four dogmas: (1) Theotokos — Mother of God (Ephesus 431), (2) Perpetual Virginity, (3) Immaculate Conception — Mary was preserved from original sin from conception (defined 1854), (4) Bodily Assumption — Mary was assumed body and soul into heaven (defined 1950). Mary is also given titles like Co-Redemptrix and Mediatrix of All Graces.'
      },
      protestantism: {
        position: 'Respected but not venerated',
        keySources: ['Luther, Commentary on the Magnificat (1521)', 'Calvin, Institutes II.14'],
        details: 'Most Protestants affirm Mary as Theotokos (Mother of God) per the councils. However, they reject the Immaculate Conception, perpetual virginity (citing Jesus\'s "brothers"), bodily Assumption, prayers to Mary, and titles like Co-Redemptrix. The Reformers (Luther, Calvin) had high regard for Mary but opposed what they saw as excesses in Marian devotion.'
      }
    }
  }
];
