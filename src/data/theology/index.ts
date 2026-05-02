import { TheologyTopic, ApologeticsMethod } from './types';
export type { TheologyTopic, ApologeticsMethod } from './types';

export const theologyTopics: TheologyTopic[] = [
  {
    id: 'trinity',
    slug: 'trinity',
    name: 'The Holy Trinity',
    category: 'doctrine',
    description: 'The doctrine of the Trinity affirms that the one God eternally exists as three distinct Persons — Father, Son, and Holy Spirit — each fully God, sharing one divine nature (ousia), yet distinguishable in Person (hypostasis). It is the foundational doctrine of Christian theism and was formally articulated at the councils of Nicaea (325 AD) and Constantinople (381 AD).',
    biblicalBasis: [
      { reference: 'Matthew 28:19', teaching: 'The baptismal formula names all three Persons in the singular name of God, indicating unity of essence and plurality of Persons.' },
      { reference: 'John 1:1', teaching: 'The Word (Logos) was with God and was God, distinguishing Person from the Father while affirming full deity.' },
      { reference: '2 Corinthians 13:14', teaching: 'The Apostolic benediction blesses in the name of the three Persons, each with distinct attributes.' },
      { reference: 'John 14:16–17', teaching: 'Jesus speaks of the Father sending "another Comforter," distinguishing three Persons in one divine economy.' },
      { reference: 'Isaiah 6:3; Revelation 4:8', teaching: 'The triple "Holy" (Trisagion) sung by the seraphim is interpreted in Christian theology as a reference to the three-in-one nature of God.' },
    ],
    historicalDevelopment: 'The formal doctrine developed in response to Arianism, which denied the full deity of the Son. The Council of Nicaea (325) affirmed the Son is homoousios (of the same substance) with the Father. The Council of Constantinople (381) extended this to the Holy Spirit. The Athanasian Creed (c. 500 AD) provided the classic formulation. Augustine\'s De Trinitate developed the Western psychological analogy.',
    keyTerms: [
      { term: 'Ousia', definition: 'Greek: the one divine essence or substance shared by all three Persons.' },
      { term: 'Hypostasis', definition: 'Greek: a distinct Person — Father, Son, or Spirit — within the one divine being.' },
      { term: 'Homoousios', definition: 'Of the same substance; the Nicene affirmation that the Son is fully divine, not a lesser being.' },
      { term: 'Perichoresis', definition: 'The mutual indwelling or coinherence of the three Persons within the divine life.' },
    ],
    views: [
      {
        name: 'Classical Trinitarianism',
        description: 'One God in three co-equal, co-eternal Persons, each fully divine, sharing one essence.',
        keyProponents: ['Athanasius of Alexandria', 'the Cappadocian Fathers', 'Augustine of Hippo', 'Thomas Aquinas'],
        strengths: ['Faithful to the full sweep of biblical revelation', 'Affirmed by all seven ecumenical councils', 'Solves the problem of divine self-love and internal relationship before creation'],
        weaknesses: ['Abstract formulation relies on Greek philosophical vocabulary not used directly in Scripture'],
      },
      {
        name: 'Modalism (Oneness/Sabellian)',
        description: 'God is one Person who manifests in three successive "modes" — not three distinct Persons simultaneously.',
        keyProponents: ['Sabellius (3rd century)', 'Oneness Pentecostalism (20th century)'],
        strengths: ['Appears to defend strict monotheism'],
        weaknesses: ['Contradicted by the simultaneous presence of Father and Son at Jesus\'s baptism (Matthew 3:16–17)', 'Cannot account for the Son praying to the Father', 'Condemned at the Council of Constantinople (381)'],
      },
      {
        name: 'Arianism',
        description: 'The Son is a created, subordinate being — not fully God. Revived by Jehovah\'s Witnesses.',
        keyProponents: ['Arius of Alexandria (4th century)', 'Jehovah\'s Witnesses'],
        strengths: ['Claims simplicity of monotheism'],
        weaknesses: ['Contradicts John 1:1, Colossians 1:15–20, Hebrews 1:3', 'Condemned at Nicaea (325)', 'An inferior savior cannot accomplish infinite atonement'],
      },
    ],
    heresiesToAvoid: [
      { name: 'Arianism', error: 'Denies the full deity of the Son, reducing Him to a created being.' },
      { name: 'Modalism / Sabellianism', error: 'Denies the distinct Persons, reducing the Trinity to one Person wearing different masks.' },
      { name: 'Tritheism', error: 'Treats Father, Son, and Spirit as three separate gods rather than one God in three Persons.' },
      { name: 'Subordinationism', error: 'Treats the Son or Spirit as ontologically inferior to the Father in essence, not merely in role.' },
    ],
    sources: [
      'Athanasius, De Incarnatione',
      'Augustine of Hippo, De Trinitate',
      'Wayne Grudem, Systematic Theology (Zondervan, 1994)',
      'John Frame, The Doctrine of God (P&R Publishing, 2002)',
      'Millard Erickson, God in Three Persons (Baker, 1995)',
    ],
  },
  {
    id: 'penal-substitution',
    slug: 'penal-substitution',
    name: 'Atonement: Penal Substitution',
    category: 'atonement',
    description: 'Penal Substitutionary Atonement (PSA) holds that Jesus Christ, in His death on the cross, bore the full penalty of human sin in the place of sinners, satisfying the retributive justice of God and securing forgiveness and reconciliation for all who believe. It is the predominant Reformation understanding of the atonement and is grounded in the legal and sacrificial categories of both Testaments.',
    biblicalBasis: [
      { reference: 'Isaiah 53:4–6', teaching: 'The Suffering Servant bears the iniquities of the people; the punishment that brought peace fell on Him.' },
      { reference: 'Romans 3:25–26', teaching: 'God presented Christ as a propitiation to demonstrate His righteousness, so He could be both just and the justifier.' },
      { reference: '2 Corinthians 5:21', teaching: 'God made Christ, who had no sin, to be sin for us, so we might become the righteousness of God.' },
      { reference: 'Galatians 3:13', teaching: 'Christ redeemed us from the curse of the law by becoming a curse for us.' },
      { reference: '1 Peter 2:24', teaching: 'He himself bore our sins in his body on the cross.' },
    ],
    historicalDevelopment: 'Anselm of Canterbury\'s Cur Deus Homo (1098) developed satisfaction theory. The Reformers — Luther, Calvin, and Melanchthon — refined this into penal substitution, emphasizing that Christ bore the legal penalty (poena) of divine law. The Westminster Confession (1647) and the London Baptist Confession (1689) codified PSA as the orthodox Protestant view.',
    keyTerms: [
      { term: 'Propitiation', definition: 'The satisfaction of God\'s wrath against sin, turning His disposition from wrath to favor.' },
      { term: 'Expiation', definition: 'The removal or covering of the guilt of sin.' },
      { term: 'Imputation', definition: 'The crediting of Adam\'s sin to humanity and of Christ\'s righteousness to believers.' },
      { term: 'Substitution', definition: 'Christ dying in the place of (anti, hyper) sinners, not merely on behalf of them.' },
    ],
    views: [
      {
        name: 'Penal Substitution',
        description: 'Christ bore the legal penalty of sin in the place of sinners, satisfying divine justice.',
        keyProponents: ['John Calvin', 'Charles Hodge', 'J.I. Packer', 'John Stott'],
        strengths: ['Accounts for Paul\'s legal vocabulary in Romans and Galatians', 'Explains why blood sacrifice was necessary', 'Takes divine justice seriously'],
        weaknesses: ['Critics charge it risks an internal conflict in the Godhead', 'Some view it as endorsing "divine child abuse" — a misunderstanding of Trinitarian unity'],
      },
      {
        name: 'Moral Influence Theory',
        description: 'Christ\'s death is primarily an example of self-sacrificial love that moves sinners to repentance.',
        keyProponents: ['Peter Abelard', 'Hastings Rashdall', 'liberal Protestantism'],
        strengths: ['Emphasizes the love of God'],
        weaknesses: ['Reduces the atonement to mere exemplarism', 'Does not account for why an innocent death is necessary', 'Undermines the objective dealing with sin'],
      },
      {
        name: 'Christus Victor',
        description: 'The atonement is primarily a victory over sin, death, and the devil rather than a legal transaction.',
        keyProponents: ['Gustaf Aulén', 'Eastern Orthodoxy'],
        strengths: ['Captures important biblical imagery of cosmic victory (Colossians 2:14–15)', 'Integrates resurrection into the atonement'],
        weaknesses: ['As a standalone theory, fails to explain how victory is achieved and the problem of guilt addressed'],
      },
    ],
    heresiesToAvoid: [
      { name: 'Socinianism', error: 'Denies that God\'s justice required satisfaction, reducing the atonement to moral influence.' },
      { name: 'Universalism', error: 'Claims Christ\'s substitution automatically saves all, negating the necessity of faith.' },
    ],
    sources: [
      'John Stott, The Cross of Christ (IVP, 1986)',
      'Leon Morris, The Apostolic Preaching of the Cross (Eerdmans, 1955)',
      'J.I. Packer, "What Did the Cross Achieve? The Logic of Penal Substitution," Tyndale Bulletin 25 (1974)',
      'Anselm of Canterbury, Cur Deus Homo (1098)',
      'Wayne Grudem, Systematic Theology (Zondervan, 1994)',
    ],
  },
  {
    id: 'resurrection',
    slug: 'resurrection',
    name: 'The Bodily Resurrection of Christ',
    category: 'doctrine',
    description: 'The resurrection of Jesus Christ from the dead is the central, non-negotiable fact of the Christian faith. It is a bodily, physical, space-time event in which the crucified Jesus of Nazareth rose on the third day, appeared to numerous witnesses, and ascended to the right hand of the Father. Without the resurrection, Christianity collapses (1 Corinthians 15:17); with it, every claim of Christ is vindicated.',
    biblicalBasis: [
      { reference: '1 Corinthians 15:3–8', teaching: 'Paul\'s early creed (received within years of the crucifixion) lists the resurrection and specific post-resurrection appearances as foundational facts.' },
      { reference: 'Luke 24:36–43', teaching: 'The risen Christ invites the disciples to touch His physical body and eats fish, demonstrating corporeal resurrection.' },
      { reference: 'John 20:24–29', teaching: 'Thomas is invited to touch the wounds; his confession "My Lord and my God" affirms the identity of the risen One.' },
      { reference: 'Acts 2:22–32', teaching: 'Peter\'s Pentecost sermon argues from the empty tomb and from Psalm 16 that God did not permit His Holy One to see decay.' },
      { reference: 'Romans 1:4', teaching: 'Jesus was declared to be the Son of God with power by the resurrection from the dead.' },
    ],
    historicalDevelopment: 'The early church proclaimed the resurrection as historical fact, not allegory. The empty tomb was acknowledged even by first-century opponents (Matthew 28:13). The Nicene Creed (325) includes "on the third day he rose again." Reformation theology retained bodily resurrection against spiritualizing tendencies. In the modern era, scholars such as N.T. Wright and Gary Habermas have mounted extensive historical defenses.',
    keyTerms: [
      { term: 'Bodily resurrection', definition: 'The return to life of the same body that was crucified, though glorified and imperishable.' },
      { term: 'Empty tomb', definition: 'The historical datum that the tomb of Jesus was found empty on the third day, acknowledged by friend and foe alike.' },
      { term: 'Post-resurrection appearances', definition: 'The multiple, varied appearances of the risen Christ to individuals and groups, including a crowd of over 500.' },
    ],
    views: [
      {
        name: 'Bodily Physical Resurrection (Orthodox)',
        description: 'The same body that was buried rose physically from the dead, transformed into a glorified body.',
        keyProponents: ['N.T. Wright', 'Gary Habermas', 'Michael Licona', 'J.P. Moreland'],
        strengths: ['Accounts for the empty tomb', 'Explains the conversion of Paul and James', 'Fits 1st-century Jewish resurrection expectations'],
        weaknesses: ['Requires a supernatural cause'],
      },
      {
        name: 'Hallucination Theory',
        description: 'The disciples had grief-induced visions of the risen Jesus.',
        keyProponents: ['Gerd Lüdemann'],
        strengths: ['Naturalistic'],
        weaknesses: ['Cannot account for the empty tomb', 'Hallucinations are private, not group experiences', 'Does not explain the conversion of skeptics Paul and James'],
      },
    ],
    heresiesToAvoid: [
      { name: 'Docetism', error: 'Claims Jesus only appeared to have a body, making the resurrection irrelevant.' },
      { name: 'Spiritual Resurrection Theory', error: 'Reduces the resurrection to a subjective spiritual experience, denying the empty tomb and physical appearances.' },
    ],
    sources: [
      'N.T. Wright, The Resurrection of the Son of God (Fortress Press, 2003)',
      'Gary Habermas & Michael Licona, The Case for the Resurrection of Jesus (Kregel, 2004)',
      'William Lane Craig, The Son Rises (Moody, 1981)',
      'Josh McDowell, Evidence That Demands a Verdict (Thomas Nelson, 1999)',
    ],
  },
  {
    id: 'justification-by-faith',
    slug: 'justification-by-faith',
    name: 'Justification by Faith Alone (Sola Fide)',
    category: 'doctrine',
    description: 'Justification is the judicial act of God by which He declares the believing sinner righteous, not on the basis of their own works or merit, but solely on the basis of the righteousness of Christ imputed to them and received through faith alone. This was the material principle of the Protestant Reformation and is described by Luther as the article by which the church stands or falls.',
    biblicalBasis: [
      { reference: 'Romans 3:21–26', teaching: 'A righteousness from God, apart from law, is revealed, received through faith in Jesus Christ for all who believe.' },
      { reference: 'Romans 4:1–8', teaching: 'Abraham was justified by faith, not works; David describes the blessedness of the man to whom God credits righteousness apart from works.' },
      { reference: 'Galatians 2:16', teaching: 'A person is not justified by works of the law but through faith in Jesus Christ.' },
      { reference: 'Ephesians 2:8–9', teaching: 'For it is by grace you have been saved, through faith — not by works, so that no one can boast.' },
      { reference: 'Philippians 3:9', teaching: 'Paul desires to be found in Christ, not having his own righteousness from the law, but the righteousness that comes through faith.' },
    ],
    historicalDevelopment: 'Augustine emphasized grace over works but did not articulate imputed righteousness clearly. Medieval Catholicism developed an infused righteousness through sacraments. Martin Luther\'s tower experience (c. 1515) led to the recovery of the Pauline doctrine of justification by faith alone. The Council of Trent (1545–63) condemned sola fide. The Reformation confessions — Augsburg, Westminster — defined justification as forensic (declarative) rather than transformative.',
    keyTerms: [
      { term: 'Justification', definition: 'A forensic/legal declaration by God that the sinner is righteous, not an infusion of righteousness.' },
      { term: 'Imputation', definition: 'The crediting of Christ\'s active obedience (positive righteousness) and passive obedience (death) to the believer\'s account.' },
      { term: 'Sola Fide', definition: 'By faith alone — the Reformation slogan capturing that faith is the sole instrument of justification, not works.' },
      { term: 'Forensic justification', definition: 'A legal verdict of "not guilty and righteous" pronounced by the Divine Judge, not a process of moral transformation.' },
    ],
    heresiesToAvoid: [
      { name: 'Roman Catholic Justification', error: 'Conflates justification with sanctification, making justification an ongoing process of infused grace through sacraments.' },
      { name: 'Antinomianism', error: 'Uses justification by faith as license for sin, ignoring that genuine faith always produces fruit.' },
      { name: 'Moralism/Legalism', error: 'Adds human works or merit as a contributing ground of justification alongside Christ\'s righteousness.' },
    ],
    sources: [
      'Martin Luther, Commentary on Galatians (1535)',
      'R.C. Sproul, Faith Alone (Baker, 1995)',
      'Thomas Schreiner, Faith Alone — The Doctrine of Justification (Zondervan, 2015)',
      'Wayne Grudem, Systematic Theology, Ch. 36 (Zondervan, 1994)',
      'Alister McGrath, Iustitia Dei: A History of the Christian Doctrine of Justification (Cambridge, 2005)',
    ],
  },
];

export const apologeticsMethods: ApologeticsMethod[] = [
  {
    id: 'classical-apologetics',
    slug: 'classical-apologetics',
    name: 'Classical Apologetics',
    description: 'Classical apologetics employs natural theology — arguments for God\'s existence from reason and evidence alone — as a first step, before moving to the historical case for Christianity. It contends that once theism is established, the specific truth of the Christian faith can be defended on historical grounds. It draws from the tradition of Aquinas, and was advanced in the 20th century by C.S. Lewis, Norman Geisler, and William Lane Craig.',
    keyFigures: [
      { name: 'Thomas Aquinas', work: 'Summa Theologiae — the Five Ways' },
      { name: 'Norman Geisler', work: 'Baker Encyclopedia of Christian Apologetics; Christian Apologetics' },
      { name: 'William Lane Craig', work: 'Reasonable Faith; On Guard' },
      { name: 'C.S. Lewis', work: 'Mere Christianity' },
    ],
    methodology: 'Two-step approach: (1) Use natural theology (cosmological, teleological, moral arguments) to establish theism; (2) Use historical evidence to establish the truth of Christianity specifically — including the resurrection and the reliability of Scripture.',
    keyArguments: [
      'Kalam Cosmological Argument: Whatever begins to exist has a cause; the universe began to exist; therefore, the universe has a cause with attributes consistent with theism.',
      'Teleological Argument (Fine-Tuning): The precise calibration of the fundamental constants of the universe to permit life is best explained by an intelligent designer.',
      'Moral Argument: Objective moral values and duties exist; they are best explained by the existence of a morally perfect God.',
      'Historical Resurrection Argument: The minimal facts of the crucifixion, empty tomb, post-resurrection appearances, and the transformation of the disciples are best explained by the bodily resurrection of Jesus.',
    ],
    biblicalBasis: [
      'Romans 1:18–20 — God\'s eternal power and divine nature are clearly perceived in creation, leaving humanity without excuse.',
      'Acts 17:22–31 — Paul\'s Areopagus sermon employs natural theology to an audience without biblical presuppositions.',
      '1 Peter 3:15 — Always be prepared to give a defense (apologia) to anyone who asks for a reason for the hope within you.',
    ],
    strengths: [
      'Accessible to non-believers who do not accept biblical authority',
      'Engages mainstream philosophical and scientific discourse',
      'Two-step method keeps arguments logically ordered and manageable',
      'Rich historical tradition of intellectual engagement',
    ],
    criticisms: [
      'Presuppositionalists argue that neutral ground is an illusion — all reasoning is governed by one\'s foundational commitments',
      'Probabilistic arguments may not achieve the certainty that faith demands',
      'Critics argue natural theology alone cannot reach the specific God of the Bible',
    ],
    sources: [
      'William Lane Craig, Reasonable Faith, 3rd ed. (Crossway, 2008)',
      'Norman Geisler, Christian Apologetics (Baker, 1976)',
      'C.S. Lewis, Mere Christianity (Geoffrey Bles, 1952)',
      'Thomas Aquinas, Summa Theologiae I, Q. 2',
    ],
  },
  {
    id: 'evidential-apologetics',
    slug: 'evidential-apologetics',
    name: 'Evidential Apologetics',
    description: 'Evidential apologetics defends Christianity primarily through historical and empirical evidence without necessarily first establishing theism through natural theology. It contends that the historical evidence for the resurrection is so compelling that it can justify both theism and Christian faith in a single argumentative move. Key figures include Gary Habermas, Josh McDowell, and John Warwick Montgomery.',
    keyFigures: [
      { name: 'Gary Habermas', work: 'The Historical Jesus; The Case for the Resurrection of Jesus' },
      { name: 'Josh McDowell', work: 'Evidence That Demands a Verdict; The New Evidence That Demands a Verdict' },
      { name: 'John Warwick Montgomery', work: 'History and Christianity; Faith Founded on Fact' },
      { name: 'Simon Greenleaf', work: 'The Testimony of the Evangelists Examined by the Rules of Evidence' },
    ],
    methodology: 'Marshaling historical evidence — the reliability of the New Testament documents, the crucifixion, the empty tomb, the post-resurrection appearances, and the minimal facts accepted by the majority of critical scholars — to argue that Christianity is the most historically defensible explanation of the data.',
    keyArguments: [
      'Minimal Facts Argument: Starting only from facts accepted by the broad scholarly consensus (crucifixion, empty tomb, appearances, conversions of Paul and James), the resurrection best explains the evidence.',
      'The New Testament documents meet legal standards of evidence (Greenleaf) and pass the bibliographic, internal, and external tests of reliability.',
      'The rapid growth of Christianity in Jerusalem, where the events occurred and witnesses were alive, confirms the historical basis.',
      'The transformation of Paul and James — skeptics and enemies — is inexplicable apart from genuine resurrection appearances.',
    ],
    biblicalBasis: [
      'Luke 1:1–4 — Luke explicitly writes as a careful historian, having investigated everything from the beginning.',
      'Acts 1:3 — Jesus presented himself alive after his suffering by many convincing proofs.',
      '1 Corinthians 15:6 — The appearance to over five hundred brothers at one time, most of whom were still alive when Paul wrote.',
    ],
    strengths: [
      'Engages skeptics on their own historical-critical turf',
      'The minimal facts approach is compelling because it uses only data accepted by critics',
      'Historically rich — appeals to archaeology, manuscript evidence, and primary sources',
    ],
    criticisms: [
      'Some argue it concedes too much to the historical-critical method',
      'Presuppositionalists contend that without addressing the non-believer\'s foundational assumptions, historical arguments will always be resisted',
      'Does not directly address natural theology, which some see as a weakness',
    ],
    sources: [
      'Gary Habermas & Michael Licona, The Case for the Resurrection of Jesus (Kregel, 2004)',
      'Josh McDowell, Evidence That Demands a Verdict (Thomas Nelson, 1999)',
      'John Warwick Montgomery, History and Christianity (Bethany, 1964)',
      'Simon Greenleaf, The Testimony of the Evangelists (1847)',
    ],
  },
  {
    id: 'presuppositional-apologetics',
    slug: 'presuppositional-apologetics',
    name: 'Presuppositional Apologetics',
    description: 'Presuppositional apologetics contends that every person reasons from foundational presuppositions, and that the Christian worldview — centered on the triune God of Scripture — is the only worldview that can provide the preconditions of intelligibility: logic, morality, science, and knowledge itself. Rather than appealing to neutral ground, the presuppositionalist exposes the internal contradictions of the unbeliever\'s worldview while arguing that only the Christian worldview is self-consistent. It was developed principally by Cornelius Van Til.',
    keyFigures: [
      { name: 'Cornelius Van Til', work: 'The Defense of the Faith; Apologetics' },
      { name: 'Greg Bahnsen', work: 'Van Til\'s Apologetic; Always Ready' },
      { name: 'John Frame', work: 'Apologetics: A Justification of Christian Belief' },
      { name: 'Francis Schaeffer', work: 'The God Who Is There; He Is There and He Is Not Silent' },
    ],
    methodology: 'Transcendental argument: argue that the Christian worldview alone provides the necessary conditions for the possibility of knowledge, logic, and morality. Use the "indirect method" — assume the unbeliever\'s worldview for the sake of argument, demonstrate its internal contradictions (reductio ad absurdum), and show that the Christian worldview uniquely satisfies the transcendental conditions required for rational discourse.',
    keyArguments: [
      'Transcendental Argument for God (TAG): The preconditions of intelligibility (logic, uniformity of nature, moral absolutes) are impossible apart from the Christian God.',
      'All reasoning presupposes fixed laws of logic; fixed laws of logic presuppose a rational, immaterial, universal lawgiver — the God of Scripture.',
      'The problem of induction (why the future will resemble the past) is only solvable within a theistic worldview that affirms God\'s sovereign governance of creation.',
      'Without God, there is no basis for objective moral values; yet the unbeliever borrows moral capital from the Christian worldview while rejecting its foundation.',
    ],
    biblicalBasis: [
      'Proverbs 1:7 — The fear of the Lord is the beginning (presupposition) of all knowledge.',
      'Colossians 2:3 — In Christ are hidden all the treasures of wisdom and knowledge.',
      'Romans 1:21 — Fallen humanity suppresses the truth in unrighteousness, knowing God but refusing to honor Him.',
    ],
    strengths: [
      'Exposes the foundational inconsistency of non-Christian worldviews',
      'Does not compromise by accepting the unbeliever\'s assumed neutral ground',
      'Defends the authority of Scripture without first subordinating it to autonomous reason',
      'Philosophically rigorous and addresses worldview-level assumptions',
    ],
    criticisms: [
      'Can appear circular (the Bible is true because the Bible says so)',
      'Some argue it is too abstract and inaccessible in popular evangelism',
      'Critics contend that the indirect method is itself a concession to the unbeliever\'s rationalism',
    ],
    sources: [
      'Cornelius Van Til, The Defense of the Faith (P&R Publishing, 1955)',
      'Greg Bahnsen, Van Til\'s Apologetic: Readings and Analysis (P&R Publishing, 1998)',
      'John Frame, Apologetics: A Justification of Christian Belief (P&R Publishing, 2015)',
      'Francis Schaeffer, The God Who Is There (IVP, 1968)',
    ],
  },
];

export function getTopicBySlug(slug: string): TheologyTopic | undefined {
  return theologyTopics.find(t => t.slug === slug);
}

export function getTopicsByCategory(category: TheologyTopic['category']): TheologyTopic[] {
  return theologyTopics.filter(t => t.category === category);
}

export function getMethodBySlug(slug: string): ApologeticsMethod | undefined {
  return apologeticsMethods.find(m => m.slug === slug);
}
