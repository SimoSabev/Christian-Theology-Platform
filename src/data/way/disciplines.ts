// src/data/way/disciplines.ts
import { SpiritualDiscipline } from '@/types/way';

export const spiritualDisciplines: SpiritualDiscipline[] = [
  {
    id: 'prayer',
    name: 'Prayer',
    category: 'Engagement',
    description:
      'Prayer is the fundamental act of relating to God — the turning of the whole person toward the One who made and sustains us. Across all Christian traditions, prayer encompasses a spectrum of forms: petition (asking), thanksgiving (gratitude), confession (honesty about failure), adoration (worship for who God is), and contemplation (silent presence). Catholic, Orthodox, Protestant, and Charismatic traditions all affirm the centrality of prayer while emphasizing different modes and postures. The classic Anglican Book of Common Prayer and the Orthodox Horologion offer structured daily frameworks; Charismatic traditions emphasize spontaneous Spirit-led expression; the contemplative tradition cultivates deep interior silence. What unites these approaches is the conviction that God is personal, present, and genuinely responsive — that prayer changes things, and that among the things it changes most profoundly is the one who prays.',
    starterPractice:
      'Set a timer for 5 minutes each morning. Begin by sitting quietly, then pray aloud or in writing: 1 minute of gratitude, 1 minute of honest confession, 1 minute of adoration, 2 minutes of intercession for others. Do this for 7 consecutive days before extending the time.',
    tradition: 'Universal',
    duration: 'Daily, beginning with 5 minutes',
  },
  {
    id: 'fasting',
    name: 'Fasting',
    category: 'Abstinence',
    description:
      'Fasting — the voluntary abstention from food (or other appetite-satisfying activities) for a period of time — is one of the most ancient spiritual disciplines, practised across virtually all world religions and present in Christianity from its earliest centuries. Jesus assumed his disciples would fast (Matthew 6:16-18), offering guidance on how rather than whether. In the Christian tradition, fasting serves multiple purposes: it trains the body\'s appetites to submit to the spirit, it creates space for intensified prayer, it expresses solidarity with the poor, and it sharpens spiritual sensitivity by removing the numbing effects of constant consumption. The Orthodox tradition maintains the most rigorous fasting calendar — roughly half the year involves some form of fasting. The Catholic tradition observes fasting on Ash Wednesday and Good Friday. Protestant traditions vary widely, with many evangelicals practising periodic personal fasts. Dallas Willard described fasting as a "training" of the will, not merely a spiritual technique.',
    starterPractice:
      'Try a partial fast: skip one meal this week and use that time to pray instead. Drink water. When hunger arises, let it remind you to pray rather than eat. Notice what you feel — discomfort, clarity, restlessness, freedom. Do not attempt extended fasting without medical advice.',
    tradition: 'Universal',
    duration: 'Weekly or periodic',
  },
  {
    id: 'scripture-reading',
    name: 'Scripture Reading & Meditation',
    category: 'Engagement',
    description:
      'Scripture reading, as a spiritual discipline, is distinct from academic Bible study — though it may include careful attention to text. The goal is not information acquisition but transformation through encounter with the living Word. The Protestant Reformation placed daily Scripture reading at the centre of lay Christian practice, and Luther\'s insistence that every Christian should read the Bible for themselves democratized access to the sacred text in ways that shaped Western culture. The Benedictine tradition contributed Lectio Divina — slow, receptive, prayerful reading that attends to what the text does in the reader as much as what the text says. The Orthodox tradition approaches Scripture through the lens of patristic commentary and liturgical context. All traditions agree that Scripture is not merely historical document but living address: the same Spirit who inspired the text is present to illuminate it for each reader in each moment.',
    starterPractice:
      'Read one Psalm each day for the next 30 days. Read it once quickly, then once slowly, then ask: What does this reveal about God? What does it reveal about the human heart? Is there a single line that feels directly addressed to me today? Write your answer in a journal.',
    tradition: 'Universal',
    duration: 'Daily',
  },
  {
    id: 'solitude',
    name: 'Solitude',
    category: 'Abstinence',
    description:
      'Solitude — the intentional withdrawal from human company for the purpose of being alone with God — is modelled by Jesus himself, who regularly withdrew from crowds and even his disciples to pray in solitary places (Mark 1:35, Luke 5:16). The Desert Fathers and Mothers of third and fourth century Egypt took this to its radical extreme, withdrawing to the wilderness to strip the soul of every worldly distraction and encounter God in undiluted simplicity. Their wisdom, collected in the Sayings of the Desert Fathers (Apophthegmata Patrum), remains one of the richest resources of the contemplative tradition. Solitude is not mere aloneness — it is the creation of the interior conditions in which genuine encounter with God becomes possible. In a culture saturated with social media, constant connectivity, and the fear of being alone with oneself, solitude has become one of the most counter-cultural of all spiritual practices — and perhaps one of the most needed.',
    starterPractice:
      'Once this week, set aside one hour of intentional solitude. No phone, no music, no reading. Go for a walk alone or sit in a quiet space. Notice the initial discomfort or restlessness. Stay with it. Simply be present to yourself and to God. Bring no agenda.',
    tradition: 'Universal',
    duration: 'Weekly minimum; daily practice recommended',
  },
  {
    id: 'silence',
    name: 'Silence',
    category: 'Abstinence',
    description:
      'Silence is the companion discipline to solitude — the quieting not just of physical location but of the interior noise of words, plans, anxiety, and commentary. In the Rule of Saint Benedict, silence is given particular priority: monks should even limit "good, holy, and edifying speech." This is not because speech is bad but because interior silence is the prerequisite for hearing God. The Quaker tradition has made corporate silence — gathering together in wordless waiting upon God — the centre of its worship. The contemplative traditions of both East and West teach that God speaks most clearly not in the earthquake or fire, but in the still small voice (1 Kings 19:12) — the voice that requires quiet to be heard. Silence also teaches us to distinguish between what we genuinely think and believe and what we have simply absorbed from the noise of our culture. It is a discipline of discernment as much as a discipline of prayer.',
    starterPractice:
      'Set a 5-minute timer. Sit in silence. When thoughts arise — and they will, constantly — do not fight them, but do not follow them either. Simply notice them and let them pass, returning your attention gently to the present moment. Do this daily for one week before extending.',
    tradition: 'Universal',
    duration: 'Daily, starting with 5 minutes',
  },
  {
    id: 'corporate-worship',
    name: 'Corporate Worship',
    category: 'Engagement',
    description:
      'Corporate worship — gathering with other believers to pray, sing, hear the Word proclaimed, and receive the sacraments — is not optional for the Christian life in any of the historic traditions. Hebrews 10:25 warns against "neglecting to meet together." The gathered assembly is not a supplement to private spirituality but its constitutive context: the individual believer is formed and sustained by the Body of Christ. Different traditions emphasize different elements: the Catholic and Orthodox traditions centre worship on the Eucharist — the sacrificial re-presentation of Christ\'s body and blood; the Protestant tradition centres it on the preached Word; the Charismatic tradition emphasizes the immediate work of the Spirit in praise and gifts. All traditions agree that something happens in the gathered assembly that cannot happen in isolation — the Church is constituted by its gathering, and its gathering constitutes the individual as member of the Body.',
    starterPractice:
      'Attend one worship service this week with the intention of participation rather than observation. Choose one element — singing, the prayer, the communion — and give it your full attention and genuine engagement. Afterwards, sit for five minutes and reflect: what happened?',
    tradition: 'Universal',
    duration: 'Weekly',
  },
  {
    id: 'service',
    name: 'Service / Diakonia',
    category: 'Engagement',
    description:
      'Service (diakonia in Greek — the word from which "deacon" derives) is the practice of placing oneself at the disposal of others in concrete, practical ways. Jesus made it definitional of greatness in His kingdom: "Whoever would be great among you must be your servant" (Matthew 20:26). In the parable of the sheep and goats (Matthew 25:31-46), the criterion for judgment is not doctrinal fidelity but practical service: "I was hungry and you gave me food." The Christian tradition has understood this as the necessary outward expression of inward transformation — faith without works is dead (James 2:17). Service disciplines the ego by requiring the subordination of one\'s own preferences to the needs of another. It breaks open the boundaries of self-concern and trains the heart toward others. In its fullest expression — the voluntary service of the overlooked, the sick, the marginalized — service becomes an encounter with Christ Himself.',
    starterPractice:
      'Identify one concrete act of service you can perform this week that costs you something: time, comfort, or money. Perform it without announcing it to anyone. Notice what it does in you — the resistance before, and the quality of aliveness after.',
    tradition: 'Universal',
    duration: 'Weekly practice; periodic intensive service',
  },
  {
    id: 'fellowship',
    name: 'Fellowship / Koinonia',
    category: 'Engagement',
    description:
      'Koinonia — the Greek word usually translated "fellowship" — is richer than its contemporary English cognate suggests. It means participation, sharing, communion — the deep mutual belonging of those who share a common life in Christ. Acts 2:42 describes the early church as devoted to "the apostles\' teaching and the fellowship, to the breaking of bread and the prayers." This is more than socializing with people you find congenial: koinonia involves mutual accountability, shared vulnerability, bearing one another\'s burdens (Galatians 6:2), confession of sins to one another (James 5:16), and the kind of honest, loving community that forms character in ways that private devotion alone cannot. The small group, the spiritual friendship, the confessor relationship, the covenant community — these are the structures through which koinonia becomes real. Fellowship is a discipline precisely because genuine community requires deliberate investment against the gravitational pull of isolation.',
    starterPractice:
      'Identify one person with whom you could cultivate a deeper spiritual friendship. Invite them to meet once a month to pray together and share honestly about their interior life. Prepare by asking yourself: what is one true thing about my spiritual life I rarely tell anyone?',
    tradition: 'Universal',
    duration: 'Regular, ongoing',
  },
  {
    id: 'confession',
    name: 'Confession & Repentance',
    category: 'Engagement',
    description:
      'Confession is the practice of bringing hidden failure into the light — before God and, in many traditions, before another human being. Its foundation is the conviction that sin is not merely a private matter between the individual and God but has a communal dimension, and that the act of speaking failure aloud breaks its power in a way that silent private confession often does not. Catholic and Orthodox traditions offer sacramental confession with ordained ministers, understanding the absolution pronounced as a genuine act of God through the Church. Protestant and evangelical traditions generally emphasize personal confession to God, though many also practise confession to a trusted friend, spiritual director, or small group. James 5:16 — "confess your sins to one another and pray for one another, that you may be healed" — grounds the communal dimension of confession in apostolic teaching. Repentance (μετάνοια, metanoia) is the deeper interior movement: a change of mind that redirects the whole orientation of one\'s life.',
    starterPractice:
      'Practise the Examen this evening: sit quietly, review your day, notice where you fell short, name it honestly before God, receive forgiveness without self-flagellation, and set one intention for tomorrow. Repeat daily for two weeks.',
    tradition: 'Universal',
    duration: 'Daily Examen; sacramental or shared confession periodically',
  },
  {
    id: 'generosity',
    name: 'Generosity / Giving',
    category: 'Engagement',
    description:
      'Generosity as a spiritual discipline is the deliberate practice of releasing what we hold in order to bless others and express trust in God\'s provision. The tithe — giving ten percent of one\'s income — is the baseline in much of the Old Testament, and Jesus commends it while pointing to a even more radical giving: the widow who gave all she had (Mark 12:41-44). Paul\'s principle in 2 Corinthians 9:7 — "Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver" — emphasizes the interior quality of giving over mere compliance with a percentage. Generosity is a discipline because money is one of the most powerful gods of the contemporary world, and our relationship to it reveals our actual (rather than confessed) theology. Where our treasure is, there our heart will be also (Matthew 6:21). The practice of regular, deliberate, joyful generosity loosens the grip of financial anxiety, forms a heart of compassion, and participates in God\'s own economy of abundant giving.',
    starterPractice:
      'Give something away this week that costs you enough to feel it. It may be money to an organization you trust, time to a person in need, or a physical possession of genuine value. Do it without expecting recognition. Notice the feeling of release.',
    tradition: 'Universal',
    duration: 'Ongoing, systematic',
  },
  {
    id: 'sabbath',
    name: 'Sabbath',
    category: 'Abstinence',
    description:
      'Sabbath — the weekly day of rest commanded in the Fourth Commandment — is perhaps the most neglected of all spiritual disciplines in contemporary Western Christianity, precisely because it cuts most sharply against the grain of a culture defined by productivity, achievement, and the anxiety of always being behind. The Sabbath was built into creation itself (Genesis 2:2-3) and into the covenant at Sinai. Jesus\' approach to Sabbath was radical in both directions: he violated the rigid Pharisaic application while insisting that the Sabbath was made for humanity, not humanity for the Sabbath (Mark 2:27). The discipline of Sabbath is the practice of one day each week in which productive work stops, and we remind ourselves — through rest, worship, play, and communion — that we are creatures rather than machines, and that the world\'s continuance does not depend on our continuous effort. In surrendering one day, we receive our humanity back.',
    starterPractice:
      'Choose one day this week to be technology-minimal and work-free. Plan ahead so that the day can genuinely rest. Use it for worship, unhurried eating, time in nature, and activities that feel like play or renewal rather than achievement. Notice what your resistance to this reveals.',
    tradition: 'Universal',
    duration: 'Weekly',
  },
  {
    id: 'contemplative-meditation',
    name: 'Contemplative Meditation',
    category: 'Abstinence',
    description:
      'Contemplative meditation in the Christian tradition differs from mindfulness practices in its directional orientation: it is not merely the cultivation of non-attachment or present-moment awareness, but the loving and receptive attention of a soul toward God. The apophatic (or "negative") tradition — represented by Pseudo-Dionysius, Meister Eckhart, the author of The Cloud of Unknowing, and John of the Cross — approaches God through the stripping away of all images, concepts, and feelings, resting in pure loving attention beyond the intellect\'s reach. Centering Prayer, developed by Trappist monks in the 1970s as a contemporary form of this tradition, uses a single sacred word as an anchor for attention and a signal of consent to God\'s presence. The kataphatic tradition uses positive images — particularly the sacred humanity of Christ — as the vehicle of contemplative encounter. Both are legitimate and time-honoured ways of entering the interior silence in which God moves most deeply.',
    starterPractice:
      'Set a 5-minute timer. Sit in silence. When thoughts arise, gently return your attention to a single sacred word — "Jesus," "Peace," "Come," or another word of your choosing. Do not reflect on the word, simply use it to return your attention. Do this daily for two weeks before extending to 20 minutes.',
    tradition: 'Catholic / Orthodox / Ecumenical',
    duration: 'Daily, 20 minutes',
  },
];
