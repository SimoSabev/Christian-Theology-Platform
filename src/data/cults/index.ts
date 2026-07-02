import { CultCategory, CultObjection, CultCategoryInfo } from './types';
export type { CultCategory, CultObjection, CultCategoryInfo };

export const cultObjections: CultObjection[] = [
  {
    id: 'jw-deity-of-christ',
    slug: 'deity-of-christ',
    name: 'The Deity of Christ vs Arianism',
    category: 'jehovahs-witnesses',
    shortDescription: 'Examining the New World Translation\'s systematic alteration of verses affirming Jesus as Almighty God.',
    historicalBackground: 'Jehovah\'s Witnesses (formulated in the late 19th century by Charles Taze Russell) revive the ancient 4th-century heresy of Arianism. They teach that Jesus is not eternal God, but rather the Archangel Michael, the first created being through whom all other things were made.',
    cultPosition: 'The New World Translation (NWT) intentionally alters key Christological passages. Most notably, they translate John 1:1 as "the Word was a god", and insert the word "other" into Colossians 1:16 ("by means of him all [other] things were created"). They claim Jesus is a lesser divine being.',
    orthodoxResponse: 'Historic, orthodox Christianity affirms that Jesus is fully God and fully man, co-eternal with the Father. He is the Creator of all things, not a created being. This is established through rigorous Greek exegesis of John 1:1, Colossians 1:15-20, Philippians 2:5-11, and His repeated acquisition of the divine name "I AM" (Exodus 3:14 / John 8:58).',
    keySources: [
      'The New World Translation (Watchtower Bible and Tract Society)',
      'Reasoning from the Scriptures (Watchtower publication)',
      'Bruce Metzger, "The Jehovah\'s Witnesses and Jesus Christ"',
      'James White, "The Forgotten Trinity"'
    ],
    semanticDefenseIds: ['sd-john1-1', 'sd-col-1-15', 'sd-john-8-58'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: 'John 1:1',
        abuse: 'The NWT renders this as "the Word was a god" (with a lowercase "g"), arguing that the absence of the definite article before theos means Jesus is merely "a god" — a lesser divine being.',
        response: 'In Greek, predicate nouns preceding the verb often lack the article (Colwell\'s Rule). The construction "Theos en ho Logos" places theos in the predicate position to convey the qualitative nature of the Word — that the Word fully shares the divine nature — not to introduce an indefinite "a god." Every other place in John where the definite article precedes theos (ho theos) refers to the Father, consistent with the distinction of Persons in one divine nature. The NWT\'s own translation is inconsistent: using the same Greek construction elsewhere, they do not translate other theos references as "a god."',
      },
      {
        verse: 'Colossians 1:15–16',
        abuse: 'JWs insert "other" into the text ("by means of him all [other] things were created"), claiming this establishes Jesus as a creature who then created everything else after himself.',
        response: 'The word "other" does not appear in any Greek manuscript of Colossians 1:15–16. The NWT inserts it without textual basis. The Greek text simply reads "in him all things were created." Furthermore, Paul\'s point is that Jesus is the firstborn (prototokos) over all creation — a title of supremacy and preeminence (as in Psalm 89:27 where David is made "firstborn" over kings he did not precede chronologically), not of creaturely origin. Verse 17 explicitly states "He is before all things" — a claim of pre-existence consistent with eternal divinity.',
      },
      {
        verse: 'John 14:28',
        abuse: '"The Father is greater than I" — JWs use this to prove Jesus is a lesser being than the Father, confirming their Arian theology that the Son is subordinate in nature.',
        response: 'This verse reflects functional, economic subordination during the incarnation — not ontological inferiority of nature. The Son, who "though he was in the form of God, did not count equality with God a thing to be grasped" (Philippians 2:6), voluntarily took on human form and submitted to the Father\'s will for redemptive purposes. The same passage that says "the Father is greater than I" (John 14:28) also says "I and the Father are one" (John 10:30) and "whoever has seen me has seen the Father" (John 14:9). Subordination of role is fully compatible with equality of nature.',
      },
    ],
    pastoralNote: 'If someone you love is involved with Jehovah\'s Witnesses, approach them with patience and genuine care rather than argument alone. JWs are typically sincere people who believe they are honoring God. They have often invested years of study and community in the Watchtower organization, and leaving involves not only intellectual rethinking but the loss of an entire social world. Begin with questions rather than declarations — ask them to show you in the Greek text why the NWT adds "other" to Colossians 1:16, or why John 1:1 would be translated differently from identical Greek constructions elsewhere. Pray for them consistently. If they have family still in the organization, leaving may mean shunning — be prepared to be a genuine community for them if they take steps toward orthodoxy.',
  },
  {
    id: 'jw-holy-spirit',
    slug: 'holy-spirit-impersonal',
    name: 'The Holy Spirit as an Impersonal Force',
    category: 'jehovahs-witnesses',
    shortDescription: 'Jehovah\'s Witnesses deny the personhood and deity of the Holy Spirit, teaching He is merely an impersonal "active force" of God — like electricity.',
    historicalBackground: 'The Watchtower Society\'s denial of the Holy Spirit\'s personhood is a direct consequence of its Arian theology. Having denied the full deity of the Son, the NWT systematically renders pneuma hagion (Holy Spirit) in lowercase ("holy spirit") and strips the Spirit of personal attributes throughout its translation.',
    cultPosition: 'The Watchtower teaches that the Holy Spirit is not a person but God\'s "active force" — comparable to electricity or wind. The NWT renders Acts 2:4 as the disciples being "filled with holy spirit" (lowercase), and treats all personal references to the Spirit as mere personification or literary device.',
    orthodoxResponse: 'The Holy Spirit is a distinct Person of the Trinity, not an impersonal force. Personal pronouns are used of Him in the Greek text: John 14:26 uses the masculine pronoun ekeinos ("he, that one") to refer to the Holy Spirit — even though "spirit" (pneuma) is grammatically neuter in Greek. The Spirit speaks (Acts 13:2), can be lied to (Acts 5:3), can be grieved (Ephesians 4:30), intercedes with groanings (Romans 8:26), and searches the deep things of God (1 Corinthians 2:10). An impersonal force cannot perform any of these actions.',
    keySources: [
      'James White, The Forgotten Trinity (Bethany House, 1998)',
      'Ron Rhodes, Reasoning from the Scriptures with Jehovah\'s Witnesses (Harvest House, 1993)',
      'Watchtower Bible and Tract Society, Reasoning from the Scriptures (1985)'
    ],
    semanticDefenseIds: ['sd-holy-spirit-person', 'sd-acts-13-2'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: 'John 14:26',
        abuse: 'JWs argue that the Holy Spirit is referred to as "it" in the NWT and that the use of pronouns merely reflects the grammatical gender of pneuma (neuter), not personal identity.',
        response: 'John 14:26 uses the masculine pronoun ekeinos ("he, that one") to refer to the Holy Spirit — even though pneuma is grammatically neuter. This is a deliberate grammatical choice by John to indicate the Spirit\'s personal identity. A writer following grammatical gender alone would use the neuter ekeino. The choice of masculine ekeinos overrides grammar to assert personhood.',
      },
      {
        verse: 'Acts 5:3–4',
        abuse: 'JWs treat Peter\'s words to Ananias as merely poetic — "lying to the Holy Spirit" is interpreted as lying to an active force, not a person.',
        response: 'Acts 5:3–4 in rapid succession says Ananias lied to "the Holy Spirit" and then to "God" — equating the two directly. An impersonal force cannot be lied to; lying requires a personal subject who can be deceived and who has moral standing. Peter\'s language only makes sense if the Holy Spirit is a divine Person. Furthermore, the Holy Spirit speaks (Acts 13:2), has a will (1 Corinthians 12:11), can be grieved (Ephesians 4:30), and intercedes with groanings (Romans 8:26) — activities that are definitionally personal.',
      },
    ],
    pastoralNote: 'JWs who question the Watchtower\'s teaching on the Holy Spirit often find themselves in a strange position: the biblical evidence for the Spirit\'s personhood is overwhelming once they read the Greek text carefully. The key pastoral move is to focus on experience — ask whether they have ever felt a personal presence in prayer, ever sensed a prompting that seemed to come from outside themselves. Then show them how the New Testament describes that presence in personal terms. Be patient: leaving the Watchtower\'s worldview is a multi-year journey, not a single conversation.',
  },
  {
    id: 'lds-book-of-mormon',
    slug: 'book-of-mormon',
    name: 'The Book of Mormon as Scripture',
    category: 'lds',
    shortDescription: 'The LDS Church claims the Book of Mormon is "Another Testament of Jesus Christ," a historical record of ancient civilizations in the Americas. Archaeological, genetic, and linguistic evidence has failed to corroborate it.',
    historicalBackground: 'Joseph Smith published the Book of Mormon in 1830, claiming to have translated it from gold plates using a seer stone, guided by the angel Moroni. The book claims to document two major civilizations in ancient America descended from Near Eastern peoples (Jaredites from the Tower of Babel; Nephites and Lamanites from Jerusalem, c. 600 BC). The LDS Church teaches it is the "most correct book on earth."',
    cultPosition: 'The Book of Mormon is divinely inspired Scripture, on par with or superior to the Bible. Its historical claims are treated as literal history: real cities, real wars, real civilizations descended from Israelite ancestors. Members are encouraged to pray and receive a "burning in the bosom" — a subjective spiritual confirmation — as the primary test of its authenticity.',
    orthodoxResponse: 'No archaeological, genetic, or linguistic evidence supports the Book of Mormon\'s historical claims. (1) The Smithsonian Institution has formally stated it does not use the Book of Mormon as an archaeological guide. (2) DNA evidence consistently shows Native Americans descend from Asian ancestry crossing the Bering land bridge, not from Middle Eastern Hebraic peoples. (3) Plants, animals, and technologies described in the book (horses, steel, chariots, wheat, barley) are anachronistic — absent from pre-Columbian America in the relevant periods. (4) Numerous anachronisms in the KJV passages quoted in the Book of Mormon (including the Sermon on the Mount from Matthew) demonstrate its 19th-century origin. Subjective experience ("burning in the bosom") is not a reliable epistemological standard — the Quran, the Book of Mormon, and the Bible cannot all be verified by the same method.',
    keySources: [
      'Thomas Murphy, "Lamanite Genesis, Genealogy, and Genetics," in American Apocrypha (Signature Books, 2002)',
      'Simon Southerton, Losing a Lost Tribe: Native Americans, DNA, and the Mormon Church (Signature Books, 2004)',
      'Bill McKeever & Eric Johnson, Mormonism 101 (Baker, 2000)',
      'Smithsonian Institution, "Statement Regarding the Book of Mormon" (official communication)'
    ],
    semanticDefenseIds: ['sd-lds-bom-archaeology', 'sd-lds-dna'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: 'Galatians 1:8',
        abuse: 'LDS missionaries use this verse to claim that the original gospel was lost and needed to be restored — which is why God sent the Book of Mormon as "another gospel" through Joseph Smith.',
        response: 'Paul\'s point is precisely the opposite: if anyone — including an angel — preaches a gospel different from the apostolic gospel, they are accursed. The Book of Mormon represents exactly the kind of alternative gospel that Paul warns against. Furthermore, the "restoration" narrative contradicts Jesus\'s promise that the gates of Hades would not prevail against the church (Matthew 16:18) and the apostolic confidence that the faith was "once for all delivered to the saints" (Jude 3).',
      },
      {
        verse: 'Ezekiel 37:15–20 (The Two Sticks)',
        abuse: 'LDS teachers claim the "stick of Judah" is the Bible and the "stick of Joseph" is the Book of Mormon, prophesying a second scripture from the descendants of Joseph (Native Americans).',
        response: 'Ezekiel 37:15–22 explicitly interprets its own symbolism: the two sticks represent the two kingdoms of Israel (Judah and Ephraim/Israel) being reunited under one king. This is a prophecy about the political reunification of the divided monarchy — fulfilled in the return from exile and ultimately in Christ — not about two books of scripture. No ancient Jewish or Christian interpreter read this passage as referring to an additional scriptural document.',
      },
    ],
    pastoralNote: 'Former Latter-day Saints often describe the process of discovering the Book of Mormon\'s historical problems as deeply disorienting — the entire edifice of their spiritual world was built on its truth. If someone you love is working through these questions, resist the temptation to give them an overwhelming list of evidential problems. Focus instead on the person of Jesus: who does the LDS church say He is? Who does the Bible say He is? The Christological difference — the eternal, uncreated God in flesh versus a created spirit-child who progressed to divinity — is the heart of the matter. Introduce them to the historically attested Jesus of the New Testament documents, and trust the Holy Spirit to do the work of revealing truth.',
  },
  {
    id: 'lds-exaltation',
    slug: 'exaltation',
    name: 'LDS Exaltation: Becoming Gods',
    category: 'lds',
    shortDescription: 'LDS theology teaches that faithful members may achieve "exaltation" — becoming gods who create worlds and procreate spirit children for eternity. This directly contradicts the biblical doctrine of the absolute distinction between Creator and creature.',
    historicalBackground: 'Joseph Smith\'s King Follett Discourse (1844) and the Lorenzo Snow couplet ("As man now is, God once was; as God now is, man may become") formalize LDS exaltation theology. It derives from Smith\'s later revelation that God the Father was once a mortal man who progressed to godhood — making him a finite, progressing deity, not the eternal, unchanging God of Scripture.',
    cultPosition: 'Humans are literally the spirit children of a Heavenly Father and Heavenly Mother. Faithful LDS members who receive all temple ordinances and keep LDS commandments may achieve exaltation in the Celestial Kingdom — becoming gods themselves, receiving "all that the Father has" (D&C 84:38), creating worlds, and procreating spirit children in eternity. This is described as the full realization of human potential.',
    orthodoxResponse: 'The Bible is unambiguous: there is only one God, and He is not a progressing, finite, once-mortal being. Isaiah 43:10 — "Before me no god was formed, nor will there be one after me" — directly contradicts the LDS teaching that God the Father became God, and that others may become gods after him. Isaiah 44:6, 8; 45:5–6, 21–22; 46:9 repeatedly and emphatically deny any other gods existing. The satanic temptation in Genesis 3:5 ("you will be like God") is precisely what LDS exaltation theology promises. The biblical God is eternal (Psalm 90:2), immutable (Malachi 3:6), and the Creator who is categorically distinct from His creation — He does not share His nature with creatures.',
    keySources: [
      'Joseph Smith, King Follett Discourse (April 7, 1844)',
      'James White, Is the Mormon My Brother? (Bethany House, 1997)',
      'Walter Martin, The Kingdom of the Cults (Bethany House, rev. ed. 1997)',
      'Francis Beckwith, Carl Mosser & Paul Owen, eds., The New Mormon Challenge (Zondervan, 2002)'
    ],
    semanticDefenseIds: ['sd-lds-exaltation', 'sd-isaiah-43-10'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: 'John 10:34 ("Is it not written in your law, I said, you are gods?")',
        abuse: 'LDS theology cites this verse as Jesus\'s confirmation that humans can become gods, supporting the exaltation doctrine.',
        response: 'Jesus is quoting Psalm 82:6, which addresses corrupt human judges — called "gods" (elohim) ironically because they were invested with divine authority as God\'s representatives but were abusing that office. The Psalm ends with their condemnation to death like mere men. Jesus\'s point is an argument from the lesser to the greater: if even corrupt human judges were called "elohim" in Scripture, why is it blasphemy for the one whom the Father sanctified and sent into the world to say "I am the Son of God"? This is a defense of His own unique divine Sonship, not a teaching on human deification.',
      },
      {
        verse: 'Isaiah 43:10 ("Before me no god was formed")',
        abuse: 'LDS theology must interpret this as applying only to gods within this universe or planet, not to the eternal Father of the cosmos, since they teach that God was once a mortal man on another world.',
        response: 'Isaiah 43:10 is unambiguous: "Before me no god was formed, nor will there be one after me." This directly refutes the Lorenzo Snow couplet ("As man now is, God once was") on its own terms. There was no god before YHWH — no prior being who progressed to godhood — and there will be no god after Him. The LDS reinterpretation requires imposing a cosmological qualifier ("in this universe") that simply does not exist in the text, and contradicts the most natural and consistent reading of Isaiah\'s radical monotheism (Isaiah 44:6, 8; 45:5–6, 21–22).',
      },
    ],
    pastoralNote: 'The exaltation doctrine is often the last LDS teaching to fall for those reconsidering their faith, because it is woven into the deepest hopes of faithful members — the promise of eternal family, eternal progression, and becoming like God. Approach this with deep sensitivity. The Christian doctrine of theosis (participation in the divine nature, 2 Peter 1:4) offers a genuine counterpart that does not require the creature to become the Creator, but does promise an intimacy with God so profound that it transforms the believer into His likeness. Point to the richness of what Christianity actually offers rather than only to what LDS teaching gets wrong.',
  },
  {
    id: 'islam-crucifixion',
    slug: 'crucifixion-denial',
    name: 'The Quranic Denial of the Crucifixion',
    category: 'islam',
    shortDescription: 'Surah 4:157 states that Jesus was not crucified — "it only appeared so to them." This directly contradicts the most historically attested fact about Jesus in ancient sources.',
    historicalBackground: 'The Quran was compiled in the 7th century AD, approximately 600 years after the crucifixion. The Quranic account of the crucifixion appears to reflect Docetic or Gnostic traditions circulating in the Arabian Peninsula in Muhammad\'s time — particularly the idea that Simon of Cyrene or Judas was substituted for Jesus. Islamic theology requires the denial of the crucifixion because the death of a prophet would be seen as a divine defeat.',
    cultPosition: 'Surah 4:157–158 states: "They did not kill him, nor did they crucify him, but it was made to appear so to them... they did not slay him of a certainty. Nay, Allah raised him up unto Himself." Most Islamic interpreters teach that someone else (often identified as Judas or Simon of Cyrene) was made to resemble Jesus and crucified in his place, while Jesus was taken directly to heaven.',
    orthodoxResponse: 'The crucifixion of Jesus of Nazareth is among the most securely established facts in ancient history — accepted by virtually every critical historian, regardless of religious persuasion. The evidence includes: (1) Roman historian Tacitus (Annals 15.44, c. 116 AD) — "Christus...was executed at the hands of the procurator Pontius Pilate." (2) Josephus, Antiquities 18.3.3 (c. 93 AD). (3) The Jewish Talmud (Sanhedrin 43a). (4) The letters of Paul (written within 20 years of the crucifixion) treat the death and resurrection as foundational. (5) The Docetic teachings that Jesus didn\'t really die were condemned as heresy by the 2nd-century church. The Quran\'s denial, written 600 years after the event and contradicting all contemporary sources, cannot overturn this convergent historical testimony.',
    keySources: [
      'Norman Geisler & Abdul Saleeb, Answering Islam (Baker, 2nd ed. 2002)',
      'James White, What Every Christian Needs to Know About the Quran (Bethany House, 2013)',
      'Tacitus, Annals 15.44',
      'Gary Habermas, The Historical Jesus (College Press, 1996)'
    ],
    semanticDefenseIds: ['sd-islam-crucifixion', 'sd-tacitus-annals'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: 'Surah 4:157–158',
        abuse: 'Muslims cite this Quranic text as divine revelation that Jesus was not crucified, and that the crucifixion was an appearance only — establishing the Islamic position over against the New Testament accounts.',
        response: 'The Quran was written approximately 600 years after the crucifixion, while the New Testament documents were written within decades of the events by eyewitnesses and their associates. The crucifixion of Jesus is one of the most historically certain facts of antiquity — attested by Tacitus, Josephus, the Talmud, and multiple independent early Christian sources. The Quranic account appears to reflect Gnostic/Docetic traditions (the substitution theory) circulating in 7th-century Arabia. On the standard canons of historical method, earlier and independent sources outweigh later, single-source claims.',
      },
      {
        verse: 'John 14:16 ("Another Comforter / Paraclete")',
        abuse: 'Islamic apologists argue that the Greek parakletos (Comforter/Helper) is a corruption of periklutos (Praised One) — which they claim refers to Muhammad, whose name means "praised" in Arabic.',
        response: 'There is no manuscript evidence — not a single Greek manuscript among the thousands available — that reads periklutos rather than parakletos. The claim is entirely without textual basis. Furthermore, the passage itself identifies the Paraclete as "the Spirit of truth, whom the world cannot receive" — a description that cannot apply to Muhammad, who was received by millions. John 14:17 says the Paraclete "lives with you and will be in you" — a description of indwelling that applies to the Holy Spirit, not to a historical prophet who lived 600 years later.',
      },
    ],
    pastoralNote: 'When speaking with Muslims about the crucifixion, begin not with apologetics but with genuine respect for their reverence for Jesus (Isa) as a prophet. Muslims honor Jesus deeply — they simply cannot accept that God would allow His prophet to die in this way. The pastoral opportunity is to show that the crucifixion, far from being a defeat, is the central act of divine love: God Himself bearing our sin and death in order to bring us to Himself. The resurrection, which vindicates rather than contradicts the cross, is the historical pivot point. Engage with the historical evidence for the resurrection with intellectual honesty and personal warmth.',
  },
  {
    id: 'islam-trinity',
    slug: 'trinity-shirk',
    name: 'The Islamic Objection to the Trinity as Shirk',
    category: 'islam',
    shortDescription: 'Islam condemns the Christian doctrine of the Trinity as shirk — the unforgivable sin of associating partners with Allah. The Quran appears to misidentify the Trinity as a triad of Allah, Jesus, and Mary.',
    historicalBackground: 'The Quran consistently presents the Trinity as a form of polytheism. Surah 5:116 addresses the question of whether Jesus commanded people to worship "me and my mother as deities beside Allah" — a formulation that suggests Muhammad encountered a Marian sect rather than orthodox Trinitarian Christianity. Mainstream Islam, from the Mutazilites to Ash\'arism, has viewed the Trinity as irreconcilable with tawhid (the absolute unity of God).',
    cultPosition: 'The Trinity is shirk — the greatest sin in Islam, which Allah will never forgive (Surah 4:48, 116). To say God is "three" or that Jesus is the Son of God is blasphemy. Surah 5:73 states: "They have certainly disbelieved who say, \'Allah is the third of three.\'" Surah 112 (Al-Ikhlas) defines Allah as Ahad (one, indivisible) and explicitly denies that He has a son.',
    orthodoxResponse: 'The Islamic objection to the Trinity conflates Trinitarian theology with tritheism (three separate gods) or a biological father-son relationship — both of which orthodox Christianity explicitly rejects. The Trinity does not teach three gods; it teaches one God in three Persons. Furthermore, the Quran\'s apparent identification of the Trinity as Father, Jesus, and Mary (Surah 5:116) does not describe orthodox Christian theology — suggesting Muhammad\'s information about Christianity came from heterodox sources. The biblical basis for the Trinity — the simultaneous presence of Father, Son, and Spirit at Jesus\'s baptism (Matthew 3:16–17), the Great Commission formula (Matthew 28:19), and the interchangeability of "God" and "Lord" applied to Jesus — constitutes a revelation of one God in three Persons, not a compromise of monotheism.',
    keySources: [
      'James White, What Every Christian Needs to Know About the Quran (Bethany House, 2013)',
      'Norman Geisler & Abdul Saleeb, Answering Islam (Baker, 2nd ed. 2002)',
      'Wayne Grudem, Systematic Theology, Ch. 14 (Zondervan, 1994)',
      'Nabeel Qureshi, Seeking Allah, Finding Jesus (Zondervan, 2014)'
    ],
    semanticDefenseIds: ['sd-trinity-not-tritheism', 'sd-matthew-28-19'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: 'Surah 5:73 ("They have certainly disbelieved who say Allah is the third of three")',
        abuse: 'Muslims cite this verse to show that the Quran explicitly condemns the Trinity as polytheism, treating "three" as meaning three gods rather than one God in three Persons.',
        response: 'Orthodox Trinitarian theology does not teach three gods — it teaches one God in three Persons. The Quran\'s formulation suggests familiarity with a form of Christian belief that was tritheistic (three separate gods) or that included Mary as a third member of the Godhead (Surah 5:116). These do not represent orthodox Christianity. The Trinity is a monotheistic doctrine: one divine essence (ousia), three Persons (hypostases). This is not "three thirds" of God but one God fully present in each Person.',
      },
      {
        verse: 'Deuteronomy 6:4 ("Hear O Israel, the LORD our God, the LORD is one")',
        abuse: 'Muslims cite the Shema as proof that strict numerical oneness rules out any doctrine of the Trinity.',
        response: 'The Hebrew word for "one" here is echad, which elsewhere in the Hebrew Bible refers to a compound unity — "one flesh" in marriage (Genesis 2:24), "one cluster" of grapes (Numbers 13:23). The Shema affirms the unity of God against polytheism; it does not specify whether that unity is simple or complex. The New Testament reveals that the one God of Israel is Father, Son, and Holy Spirit — a revelation that deepens rather than contradicts the Shema. Jesus himself endorsed the Shema (Mark 12:29) while claiming divine identity (John 8:58).',
      },
    ],
    pastoralNote: 'The Trinity is the most difficult doctrine to communicate cross-culturally, because the Islamic concept of tawhid (strict unity) is so deeply embedded in Muslim identity that any qualification of God\'s oneness can feel like an attack on the most fundamental truth. Begin by affirming what you share: God is one, God is great, God is holy. Then ask open questions: What does the Old Testament mean when God says "Let us make man in our image" (Genesis 1:26)? What does it mean that the Spirit of God moved over the waters? Who is the Angel of the LORD who appears as God Himself? The Trinitarian revelation is not an imposition on the Old Testament but its culmination.',
  },
  {
    id: 'modalism-oneness',
    slug: 'modalism-oneness',
    name: 'Oneness Pentecostalism: Modalism and "Jesus Only" Baptism',
    category: 'oneness-pentecostalism',
    shortDescription: 'Oneness Pentecostalism teaches that God is one Person who manifests in different modes — Father, Son, and Spirit are not distinct Persons but titles for the same individual Being. Baptism must be performed "in Jesus\' name only," not in the Trinitarian formula.',
    historicalBackground: 'The "New Issue" controversy emerged at a Pentecostal camp meeting in Arroyo Seco, California, in 1913, when R.E. McAlister observed that the apostles baptized in "Jesus\' name" rather than the Trinitarian formula. John G. Scheppe\'s subsequent "revelation" that Jesus was the full name of the Godhead launched a movement. The United Pentecostal Church International (UPCI) is the largest Oneness Pentecostal denomination, formed in 1945.',
    cultPosition: 'God is absolutely one Person — Jesus Christ — who manifested as "Father" in creation and Old Testament contexts, as "Son" in the incarnation, and as "Holy Spirit" in the church age. The three Persons of the Trinity are merely three modes or manifestations of one Person. Baptism in "Jesus\' name only" (Acts 2:38) is essential for salvation; those baptized in the Trinitarian formula must be re-baptized. Speaking in tongues as the initial evidence of the Holy Spirit is required for salvation.',
    orthodoxResponse: 'Modalism was condemned as heresy by the early church under Tertullian, Hippolytus, and at the Council of Constantinople (381). The critical biblical refutation is the simultaneous presence of three distinct Persons at Jesus\'s baptism: the Father speaks from heaven, the Son is in the water, and the Holy Spirit descends as a dove — they cannot be sequential modes of one Person if all three are present simultaneously (Matthew 3:16–17). Jesus prays to the Father throughout John 14–17 — a Person does not pray to Himself. Jesus says the Father is "greater" than He is (John 14:28) — a Person in two modes cannot be greater than Himself in another mode. The Great Commission formula (Matthew 28:19) uses the singular "name" with three distinct Persons, indicating the three share one divine name while being distinguishable.',
    keySources: [
      'James White, The Forgotten Trinity (Bethany House, 1998)',
      'David Bernard, The New Birth (Word Aflame Press, 1984) — Oneness position',
      'Gregory Boyd, Oneness Pentecostals and the Trinity (Baker, 1992)',
      'Roger Olson, The Story of Christian Theology (IVP, 1999)'
    ],
    semanticDefenseIds: ['sd-matthew-3-16', 'sd-trinity-modalism'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: 'Acts 2:38 ("Baptize in the name of Jesus Christ")',
        abuse: 'Oneness Pentecostals argue that the apostles baptized only in "Jesus\' name" — proving that this is the correct formula and that the Trinitarian formula in Matthew 28:19 is either later addition or misunderstood.',
        response: 'Acts 2:38 and Matthew 28:19 are not contradictory. The apostles baptized "in the name of Jesus" to identify Jesus as the Messiah and Lord — distinguishing Christian baptism from Jewish baptism and marking entry into the New Covenant community under Jesus\'s authority. Matthew 28:19 gives the fuller formula: the singular "name" (not "names") encompasses Father, Son, and Holy Spirit — consistent with Trinitarian theology. There is no textual reason to treat the Acts formula as superseding the Matthew formula; both reflect authentic apostolic practice.',
      },
      {
        verse: 'John 10:30 ("I and the Father are one")',
        abuse: 'Oneness Pentecostals use this verse to support their modalism — Jesus and the Father are one Person, not two distinct Persons of one God.',
        response: 'John 10:30 uses the Greek hen (neuter "one thing"), not heis (masculine "one person"). Jesus claims ontological unity of essence, not personal identity. The Jews understood this as a claim to divine equality, not to identity with the Father (v.33). If Jesus were the Father himself, He could not simultaneously be distinct from the Father — yet John\'s Gospel consistently portrays Jesus praying to the Father (John 17), promising to send "another Comforter" (John 14:16), and saying "the Father is greater than I" (John 14:28). Modalism requires Jesus to be praying to Himself.',
      },
    ],
    pastoralNote: 'Oneness Pentecostals are often deeply committed Christians with a genuine experience of the Holy Spirit and a passionate love for Jesus. The disagreement over the Trinity is real and important, but approach it as a disagreement between Christians seeking truth rather than as an encounter with a cult in the pejorative sense. The most effective pastoral question is the baptism scene: at Jesus\'s baptism (Matthew 3:16–17), who is speaking from heaven while Jesus is in the water while the Spirit descends as a dove? If God is one Person manifesting in modes, this scene is either sequential (which the text does not suggest) or requires one Person to be simultaneously in three different places doing three different things — which strains the modalist interpretation to breaking point.',
  },
  {
    id: 'cs-matter-is-illusion',
    slug: 'matter-sin-sickness-illusion',
    name: 'Christian Science: Matter, Sin, and Sickness as Illusion',
    category: 'christian-science',
    shortDescription: 'Christian Science teaches that matter, sin, sickness, and death are unreal illusions of "mortal mind" — a denial of the physical creation, the reality of sin, and the bodily nature of salvation.',
    historicalBackground: 'Mary Baker Eddy founded Christian Science after claiming a healing in 1866, and published Science and Health with Key to the Scriptures (first edition 1875), the movement\'s doctrinal textbook, read alongside the Bible in every service. The Church of Christ, Scientist was organized in Boston in 1879. Eddy\'s system is a form of philosophical idealism fused with metaphysical healing: only Mind (God) is truly real, and the material world — including the body and its diseases — is a false belief to be overcome by correct thinking.',
    cultPosition: 'Christian Science teaches that God is the only reality — infinite Mind, Spirit, Principle, Love — and that matter does not truly exist. Science and Health states, "There is no life, truth, intelligence, nor substance in matter. All is infinite Mind and its infinite manifestation." Consequently, sin, sickness, suffering, and death are illusions of "mortal mind" with no real existence. Healing comes not through medicine but through the mental correction of these false beliefs. The atonement is redefined as the demonstration of divine Principle, not a substitutionary death for real sin.',
    orthodoxResponse: 'Historic Christianity affirms that God created a genuinely material universe and pronounced it "very good" (Genesis 1:31). The physical body is not an illusion to be transcended but part of God\'s good creation, destined for bodily resurrection (1 Corinthians 15). Sin is not a mistaken belief but a real moral rebellion against a holy God (Romans 3:23), and sickness and death are real consequences of the Fall (Genesis 3; Romans 5:12). Most critically, the denial of material reality collapses the incarnation: "the Word became flesh" (John 1:14, Greek sarx egeneto — literally "became flesh") and the atonement, in which Jesus "bore our sins in his body on the tree" (1 Peter 2:24). If matter is unreal, Christ neither truly took on a body nor truly died — which the New Testament treats as the very ground of salvation (1 Corinthians 15:3–4, 17). Eddy\'s system, though it uses Christian vocabulary, empties every central term of its biblical content.',
    keySources: [
      'Mary Baker Eddy, Science and Health with Key to the Scriptures (1875; Christian Science Publishing Society)',
      'Walter Martin, The Kingdom of the Cults (Bethany House, rev. ed. 1997)',
      'Anthony A. Hoekema, The Four Major Cults (Eerdmans, 1963)',
      'Ron Rhodes, The Challenge of the Cults and New Religions (Zondervan, 2001)'
    ],
    semanticDefenseIds: ['sd-nt-word-tabernacled', 'sd-john-19-30'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: 'John 1:14 ("The Word became flesh")',
        abuse: 'Christian Science reinterprets the incarnation spiritually: Jesus is the demonstration of the divine idea of "Christ," not God actually taking on real material flesh, since matter is unreal.',
        response: 'The Greek is unambiguous: kai ho Logos sarx egeneto — "and the Word became flesh." Sarx is the ordinary word for physical flesh, and egeneto ("became") denotes a real entrance into a new mode of existence, not the appearance of one. John writes precisely to exclude the docetic idea that Christ only seemed to be material (a heresy he also confronts in 1 John 4:2–3, which makes confession that "Jesus Christ has come in the flesh" the test of true doctrine). If matter is illusory, the incarnation is a fiction, and with it the whole apostolic gospel of a God who genuinely entered His creation to redeem it.',
      },
      {
        verse: 'Genesis 1:31 ("God saw everything that he had made, and behold, it was very good")',
        abuse: 'Christian Science treats the "true" creation as purely spiritual (the account of Genesis 1), while the material creation of Genesis 2 is dismissed as the false "mortal mind" record — so the physical world is not truly God\'s good work.',
        response: 'Genesis 1 presents a material creation — light, waters, plants "yielding seed," living creatures, and human bodies formed "male and female" — and God declares this physical order "very good" (tov meod). Scripture never treats matter as evil or illusory; the problem is sin, not materiality. The consistent biblical trajectory runs from a good material creation, through its corruption by real sin, to its real redemption in a bodily resurrection and "a new heaven and a new earth" (Revelation 21:1). To spiritualize away the physical creation is to reject the doctrine of creation itself.',
      },
      {
        verse: '1 Peter 2:24 ("He himself bore our sins in his body on the tree")',
        abuse: 'Because sin and matter are illusions, Christian Science redefines the atonement as Jesus demonstrating the unreality of evil and the power of divine Principle — not a real bodily death paying for real sin.',
        response: 'Peter grounds salvation in a bodily event: Christ "bore our sins in his body (Greek sōma) on the tree, that we might die to sin and live to righteousness; by his wounds you have been healed." This requires a real body, real wounds, and real sin to be borne. Paul makes the same point the hinge of the faith: "if Christ has not been raised, your faith is futile and you are still in your sins" (1 Corinthians 15:17). The atonement is not a metaphysical demonstration but a substitutionary death (Isaiah 53:5–6; 2 Corinthians 5:21). Christian Science retains the word "atonement" while removing everything the Bible means by it.',
      },
    ],
    pastoralNote: 'People drawn to Christian Science are often seeking relief from suffering and are attracted by its promise of healing and its serene, optimistic tone. Tragically, its denial of physical illness has led some adherents to forgo medical care for themselves and their children, sometimes with fatal results — so pastoral care here can carry real urgency and should be marked by gentleness rather than triumphalism. Begin with the goodness of the body: God made it, Christ took one, and the resurrection redeems it — Christianity is not a flight from the physical but its redemption. Affirm the genuine longing for healing, then point to the God who does not deny our pain but entered it, bore it in a real body, and promises to wipe away every tear (Revelation 21:4).',
  },
  {
    id: 'cs-science-and-health-revelation',
    slug: 'science-and-health-as-revelation',
    name: 'Christian Science: "Science and Health" as Higher Revelation',
    category: 'christian-science',
    shortDescription: 'Christian Science treats Mary Baker Eddy\'s Science and Health with Key to the Scriptures as the inspired interpretive key to the Bible — a second authority that governs how Scripture may be read, displacing the sufficiency of Scripture itself.',
    historicalBackground: 'Mary Baker Eddy published Science and Health with Key to the Scriptures in 1875 and revised it repeatedly until her death in 1910. In the Church of Christ, Scientist, it functions not as commentary but as authoritative "revelation": at the heart of every Sunday service, an appointed reader reads correlated passages from the King James Bible and from Science and Health, with no sermon — the two are read side by side as the church\'s "dual and impersonal pastor." Eddy taught that her book supplied the spiritual "Key" without which Scripture could not be rightly understood, effectively subordinating the Bible to her interpretation.',
    cultPosition: 'Christian Science affirms the Bible as its "sufficient guide to eternal Life," yet in practice reads it only through Eddy\'s Science and Health, which it regards as divinely inspired and free from the errors it attributes to the biblical text. Eddy claimed that God was the author of her book and that it contained the final, scientific revelation of Christ\'s method. Passages of Scripture are systematically reinterpreted through her metaphysical categories (God as Mind, matter as illusion), so that the plain sense of the text is overridden by the "Key."',
    orthodoxResponse: 'Scripture presents itself as sufficient and complete for faith and life, needing no external key of later revelation. Paul tells Timothy that "all Scripture is breathed out by God and profitable... that the man of God may be complete, equipped for every good work" (2 Timothy 3:16–17) — the God-breathed writings, not a nineteenth-century supplement, make one complete. Scripture closes with a solemn warning against adding to the prophetic word (Revelation 22:18–19), and Jude appeals to "the faith once for all delivered to the saints" (Jude 3) — once for all, not progressively unveiled through Eddy. The Berean commendation is instructive: they tested even apostolic preaching "against the Scriptures" (Acts 17:11), the reverse of testing Scripture against a later book. A revelation that must be filtered through Science and Health to yield its true meaning is no longer the Bible speaking, but Eddy speaking through the Bible.',
    keySources: [
      'Mary Baker Eddy, Science and Health with Key to the Scriptures (1875; Christian Science Publishing Society)',
      'Anthony A. Hoekema, The Four Major Cults (Eerdmans, 1963)',
      'Walter Martin, The Kingdom of the Cults (Bethany House, rev. ed. 1997)',
      'Church Manual of The First Church of Christ, Scientist (on the "impersonal pastor")'
    ],
    semanticDefenseIds: ['sd-2-tim-3-16', 'sd-scripture-sufficiency'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: '2 Timothy 3:16 ("All Scripture is breathed out by God")',
        abuse: 'Christian Science affirms the inspiration of Scripture in principle but treats Science and Health as the indispensable "Key" that unlocks its true, spiritual meaning — so that the Bible cannot function as sufficient without Eddy\'s interpretation.',
        response: 'Paul\'s point is precisely sufficiency: the God-breathed Scriptures are "profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work" (2 Timothy 3:16–17). If Scripture alone makes the believer complete and fully equipped, no additional revelatory key is required to render it usable. To make Science and Health the necessary lens is to deny the very sufficiency this verse asserts — it treats the God-breathed text as insufficient until supplemented by a human author.',
      },
      {
        verse: 'Revelation 22:18–19 (the warning against adding to the words)',
        abuse: 'Christian Science does not formally claim to add to the biblical canon, but functionally elevates Science and Health to co-equal authority, read alongside Scripture as the church\'s pastor and governing its interpretation.',
        response: 'John closes the canon with a severe warning against adding to or taking from "the words of the prophecy of this book," reflecting the consistent biblical concern (Deuteronomy 4:2; 12:32; Proverbs 30:6) that God\'s word not be supplemented by human additions. A book that is read as the co-pastor of the church, without which Scripture cannot be understood, functions as an addition in the most consequential sense — it becomes the controlling authority. The orthodox posture is the opposite: every teacher, book, and tradition stands under Scripture and is judged by it, never the reverse.',
      },
      {
        verse: 'Acts 17:11 (the Bereans "examining the Scriptures")',
        abuse: 'Christian Science encourages members to study Science and Health as the trustworthy guide by which the meaning of the Bible is discerned, making Eddy\'s text the standard of judgment.',
        response: 'Luke commends the Bereans as "more noble" because they received the message eagerly yet examined even the apostle Paul\'s preaching "against the Scriptures... to see if these things were so" (Acts 17:11). Scripture is the standard against which teaching is measured — including apostolic teaching. Christian Science inverts this: it measures Scripture against Eddy. The Berean method requires that Science and Health itself be tested against the Bible, and where Eddy denies the reality of the body, the atonement, and the bodily resurrection, she fails that test decisively.',
      },
    ],
    pastoralNote: 'For a lifelong Christian Scientist, Science and Health is not merely a book but the trusted key that has organized their entire spiritual life, and questioning it can feel like questioning God. Rather than attacking Eddy directly, invite them into the text of Scripture on its own terms: read a Gospel account of Jesus healing a real body, or Paul\'s argument in 1 Corinthians 15, and simply ask what the passage says before any "key" is applied. Many raised in Christian Science have never encountered the Bible without Eddy\'s interpolations. Gently model the sufficiency of Scripture by letting it speak plainly, and trust the living Word to draw them.',
  },
  {
    id: 'cs-healing-and-suffering',
    slug: 'healing-testimony-and-the-problem-of-suffering',
    name: 'Christian Science: Healing Claims and the Reality of Suffering',
    category: 'christian-science',
    shortDescription: 'Christian Science rests much of its credibility on testimonies of healing through correct thought alone, treating sickness as a mental error to be corrected — a claim that collides with medical reality and with the Bible\'s honest theology of suffering.',
    historicalBackground: 'Mary Baker Eddy attributed her own recovery from an 1866 injury to a spiritual insight into the healing method of Jesus, and healing became the movement\'s central evidence and practice. Christian Science "practitioners" are trained to treat conditions through prayer and mental correction rather than medicine, and the church has long published testimonies of healing in its periodicals. Historically, adherents have declined medical treatment — including for their children — on the conviction that disease has no real existence. This has produced documented cases of preventable death and, in several U.S. jurisdictions, legal proceedings over the withholding of care from minors.',
    cultPosition: 'Because matter and disease are unreal illusions of "mortal mind," Christian Science teaches that genuine healing comes by correcting the false belief in sickness, not by treating a body that only seems to be ill. Testimonies of recovery are offered as empirical proof of the "Science" of Christ. Suffering is not something God permits within a fallen but real creation; it is an error to be dispelled by right understanding. Reliance on medicine is regarded as a concession to the illusion and a hindrance to spiritual healing.',
    orthodoxResponse: 'Scripture never treats suffering as an illusion to be thought away; it treats it as a real feature of a fallen world that God enters, redeems, and ultimately abolishes. Jesus healed real bodies with real diseases (Mark 1:40–42), yet he also wept at a real grave (John 11:35) and sweat in real anguish (Luke 22:44). Paul, a man of great faith, was left with a "thorn in the flesh" that God did not remove, teaching him that "my grace is sufficient for you, for my power is made perfect in weakness" (2 Corinthians 12:7–9) — a theology impossible if sickness were merely a mistaken thought. Paul commends medicine (1 Timothy 5:23), leaves a co-worker sick (2 Timothy 4:20), and calls Luke "the beloved physician" (Colossians 4:14). Anecdotal healing testimonies cannot establish a metaphysic that the New Testament flatly contradicts, and the pastoral stakes are grave: a doctrine that denies real illness can and has cost real lives. The Christian hope is not that suffering is unreal but that it is temporary — God "will wipe away every tear," and "death shall be no more" (Revelation 21:4).',
    keySources: [
      'Mary Baker Eddy, Science and Health with Key to the Scriptures (1875; Christian Science Publishing Society)',
      'Rita Swan, "Children, Medicine, Religion, and the Law," in Advances in Pediatrics (on withheld care)',
      'Anthony A. Hoekema, The Four Major Cults (Eerdmans, 1963)',
      'Ron Rhodes, The Challenge of the Cults and New Religions (Zondervan, 2001)'
    ],
    semanticDefenseIds: ['sd-2-cor-12-9', 'sd-suffering-theodicy'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: 'Isaiah 53:5 / 1 Peter 2:24 ("by his wounds you have been healed")',
        abuse: 'Christian Science reads "healed" as proof that the atonement guarantees the dispelling of physical sickness through correct spiritual understanding, since disease is unreal.',
        response: 'Peter quotes Isaiah 53:5 in a context explicitly about sin, not physical disease: Christ "bore our sins in his body on the tree, that we might die to sin and live to righteousness; by his wounds you have been healed" (1 Peter 2:24). The healing in view is reconciliation to God from real sin — accomplished through Christ\'s real wounds and real body. The passage grounds salvation in a physical event, which is the opposite of Eddy\'s denial of matter. Where Scripture does describe bodily healing, it treats the body and its diseases as real things God graciously restores, never as illusions the sufferer must intellectually reject.',
      },
      {
        verse: '2 Corinthians 12:7–9 (Paul\'s "thorn in the flesh")',
        abuse: 'Christian Science must treat Paul\'s unhealed affliction as a failure to grasp the Science of healing, since a truly enlightened understanding would have dispelled the illusion of the thorn.',
        response: 'Paul pleaded three times for the thorn\'s removal, and the Lord answered not by healing but by refusing to heal: "My grace is sufficient for you, for my power is made perfect in weakness" (2 Corinthians 12:9). Paul then rejoices in weaknesses so that Christ\'s power may rest on him. This is unintelligible on Christian Science premises — an apostle of surpassing faith, left afflicted by God\'s own deliberate choice, learning that God\'s purposes are served through real weakness. Scripture presents suffering not as an error awaiting correction but as a real trial God can sanctify (Romans 5:3–5; James 1:2–4).',
      },
      {
        verse: 'Colossians 4:14 / 1 Timothy 5:23 (medicine and "the beloved physician")',
        abuse: 'Because reliance on matter is a concession to illusion, Christian Science discourages medical treatment, treating recourse to physicians as spiritual failure.',
        response: 'Paul, writing under inspiration, refers warmly to "Luke the beloved physician" (Colossians 4:14) and counsels Timothy, "no longer drink only water, but use a little wine for the sake of your stomach and your frequent ailments" (1 Timothy 5:23) — plain endorsement of ordinary physical remedy. He also reports leaving Trophimus "ill at Miletus" (2 Timothy 4:20), with no suggestion that this reflected a defect of faith. Scripture treats bodies and their ailments as real, and their care through material means as good and wise. The refusal of medicine on the ground that illness is unreal has no biblical warrant and, tragically, has proven deadly — a strong practical confirmation that the underlying doctrine is false.',
      },
    ],
    pastoralNote: 'This is the point where Christian Science can do the most tangible harm, so gentleness must be paired with clarity, especially where children\'s welfare is involved. Many adherents cling to the healing doctrine because they have staked their identity and hope on it, and admitting illness is real can feel like spiritual defeat. Do not mock the longing for healing — it is good and God-given. Instead, present the God who neither denies pain nor abandons us to it: who took a real body, suffered in it, and rose in it, and who works even through physicians and medicine as gifts of his providence. The gospel offers something Christian Science cannot: not the pretense that suffering is nothing, but the promise that in Christ it is neither meaningless nor final.',
  },
  {
    id: 'new-age-you-are-divine',
    slug: 'human-divinity-pantheism',
    name: 'New Age: "You Are Divine" and the Pantheist Self',
    category: 'new-age',
    shortDescription: 'The New Age movement teaches that all is one, that the self is divine, and that salvation is the awakening to one\'s own godhood — reviving the serpent\'s original promise, "you will be like God."',
    historicalBackground: 'The New Age movement is a diffuse, decentralized spiritual current that crystallized in the West in the 1970s–80s, drawing on 19th-century Theosophy (Helena Blavatsky), Hinduism and Buddhism (monism and reincarnation), Western esotericism, and the human-potential movement. It has no single founder or creed; figures such as Blavatsky, Alice Bailey, and later popularizers like Shirley MacLaine and the channeled Course in Miracles shaped it. Its worldview is broadly pantheistic or monistic: God is an impersonal divine energy of which everything, including the self, is a part.',
    cultPosition: 'New Age spirituality teaches that "all is one" (monism) and that this one reality is divine (pantheism). The individual self is therefore ultimately divine — a "spark" of God who has forgotten its true identity. Salvation is not forgiveness of sin but enlightenment: the awakening to one\'s own godhood and unity with the cosmos, often across many reincarnations as the soul evolves. Shirley MacLaine\'s declaration "I am God" captures the ethic. Sin and judgment are illusions or lower-consciousness constructs; there is no personal Creator distinct from creation and no final judgment to fear.',
    orthodoxResponse: 'The Bible opens by drawing an absolute line between Creator and creature: "In the beginning, God created the heavens and the earth" (Genesis 1:1). God is personal, holy, and ontologically distinct from what He has made; creation is not an emanation of God but a work of God. The claim that the self is divine is precisely the serpent\'s promise in Eden — "you will be like God" (Genesis 3:5) — the archetypal temptation, not the path to salvation. Scripture insists there is one God and no other (Isaiah 45:5–6), that human beings are creatures made in God\'s image but not sharers in His essence, and that death is followed by judgment, not endless reincarnation: "it is appointed for man to die once, and after that comes judgment" (Hebrews 9:27). Salvation is not self-realization but reconciliation with a personal God through the real forgiveness of real sin (Ephesians 2:8–9).',
    keySources: [
      'Douglas Groothuis, Unmasking the New Age (InterVarsity Press, 1986)',
      'Ron Rhodes, The Challenge of the Cults and New Religions (Zondervan, 2001)',
      'Norman Geisler & J. Yutaka Amano, The Reincarnation Sensation (Tyndale, 1986)',
      'Peter Jones, The Gnostic Empire Strikes Back (P&R Publishing, 1992)'
    ],
    semanticDefenseIds: ['sd-ot-unchanging-creator', 'sd-nt-equal-god'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: 'Luke 17:21 ("The kingdom of God is within you")',
        abuse: 'New Age teachers cite this to claim that divinity is already within every person — that God is an inner reality to be discovered, confirming the divine self.',
        response: 'The Greek entos hymōn is better rendered "the kingdom of God is in your midst" (as most modern translations have it), and Jesus is speaking to the Pharisees — hardly candidates for having the divine kingdom resident "within" them as an inner spark. His point is that the kingdom had arrived in His own person, standing among them, not that each individual is intrinsically divine. Elsewhere Jesus is explicit that entering the kingdom requires new birth "from above" (John 3:3) and repentance (Mark 1:15) — the discovery of a Savior outside oneself, not the awakening of godhood within.',
      },
      {
        verse: 'Psalm 82:6 / John 10:34 ("You are gods")',
        abuse: 'New Age writers use "I said, you are gods" as biblical proof that humans are divine and simply need to realize it.',
        response: 'Psalm 82 addresses corrupt human judges, ironically called "gods" (elohim) because they held delegated authority as God\'s representatives — and the very next verse pronounces their sentence: "you shall die like men" (Psalm 82:7). The passage undercuts, rather than supports, human divinity: these "gods" are mortal and under judgment. When Jesus cites it (John 10:34–36), He argues from the lesser to the greater to defend His own unique divine Sonship, not to teach that all people are gods. The whole of Scripture maintains the Creator–creature distinction: "I am God, and there is no other" (Isaiah 45:22).',
      },
      {
        verse: 'Genesis 3:5 ("You will be like God")',
        abuse: 'While rarely cited approvingly, the New Age ideal — the self realizing its own godhood — is in substance the promise offered here, and some esoteric writers explicitly rehabilitate the serpent as a bringer of liberating knowledge.',
        response: 'Genesis presents this promise as the primal lie. The serpent\'s offer — autonomy, secret knowledge, and self-deification apart from God — is exactly what the Fall consists of, and its fruit is not enlightenment but alienation, shame, and death (Genesis 3:7–19). That some esoteric traditions openly cast the serpent as a liberator only confirms how directly the New Age vision inverts the biblical account. The gospel offers the opposite movement: not the creature grasping at godhood, but God graciously stooping to redeem the creature (Philippians 2:6–8).',
      },
    ],
    pastoralNote: 'Those drawn to New Age spirituality are often earnest seekers disillusioned with materialism and hungry for transcendence, meaning, and healing — genuine desires that the church should honor rather than mock. The pantheist offer of unity and inner divinity can feel empowering, but it ultimately leaves the seeker alone: an impersonal divine energy cannot love, forgive, or be known personally. The most compelling counter is not argument but the personal God of the gospel — a God who is not the seeker\'s own higher self but a Father who speaks, who loves, who forgives real guilt, and who offers a relationship no meditative technique can manufacture. Meet the longing for the transcendent with the God who came near.',
  },
  {
    id: 'new-age-reincarnation',
    slug: 'reincarnation-vs-resurrection',
    name: 'New Age: Reincarnation vs. Resurrection and Judgment',
    category: 'new-age',
    shortDescription: 'New Age spirituality teaches that the soul passes through many lifetimes, evolving toward enlightenment across endless rebirths — a cyclical view of destiny that Scripture answers with a single life, a bodily resurrection, and a final judgment.',
    historicalBackground: 'Reincarnation entered Western spirituality chiefly through nineteenth-century Theosophy (Helena Blavatsky), which imported and reshaped Hindu and Buddhist ideas of samsara and karma for a Western audience. In the New Age synthesis, reincarnation is typically fused with an optimistic doctrine of "spiritual evolution": the soul is not trapped in suffering (as in much classical Eastern thought) but is progressively perfecting itself over many lives, working off karma and ascending toward unity with the divine. Popularized by figures such as Shirley MacLaine and by the therapeutic vogue for "past-life regression," reincarnation became one of the most widely held New Age beliefs.',
    cultPosition: 'The New Age holds that the true self is an eternal soul that has lived many lives and will live many more, migrating from body to body until it attains enlightenment and reunion with the divine source. Moral consequences are handled by karma across lifetimes rather than by judgment before a personal God; there is therefore no final reckoning to fear and no urgency of decision within a single life. Death is merely a transition, and the self\'s ultimate destiny is guaranteed by the evolutionary process itself.',
    orthodoxResponse: 'Scripture is emphatic and precise: "it is appointed for man to die once, and after that comes judgment" (Hebrews 9:27). One life, one death, then judgment — not an indefinite series of rebirths in which consequences are endlessly deferred. The Christian hope is not escape from the body into further incarnations but the resurrection of the body (1 Corinthians 15:42–44) and everlasting life with a personal God. Where the New Age locates salvation in a self-driven evolutionary ascent, the gospel locates it in grace: the dead cannot perfect themselves, and Christ\'s own resurrection is "the firstfruits of those who have fallen asleep" (1 Corinthians 15:20), the pattern and guarantee of the believer\'s future. Reincarnation also empties the cross of meaning — if every soul is guaranteed unlimited chances to work off its own karma, there is nothing for a Savior to accomplish. The finality of Hebrews 9:27 is precisely what makes the once-for-all sacrifice of Christ (Hebrews 9:26, 28) good news.',
    keySources: [
      'Norman Geisler & J. Yutaka Amano, The Reincarnation Sensation (Tyndale, 1986)',
      'Douglas Groothuis, Unmasking the New Age (InterVarsity Press, 1986)',
      'Mark Albrecht, Reincarnation: A Christian Appraisal (InterVarsity Press, 1982)',
      'Ron Rhodes, The Challenge of the Cults and New Religions (Zondervan, 2001)'
    ],
    semanticDefenseIds: ['sd-heb-9-27', 'sd-1-cor-15-resurrection'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: 'John 9:2 ("who sinned, this man or his parents, that he was born blind?")',
        abuse: 'New Age writers argue that the disciples\' question assumes the man could have sinned before birth — that is, in a previous life — showing that reincarnation was accepted in Jesus\'s day and implicit in the New Testament.',
        response: 'The disciples\' question reflects a common Jewish assumption that suffering is a direct penalty for specific sin, not a belief in reincarnation; first-century Judaism did not teach the transmigration of souls. In any case, Jesus rejects both proposed causes outright: "It was not that this man sinned, or his parents, but that the works of God might be displayed in him" (John 9:3). Far from endorsing pre-existent sin, Jesus dismisses the framing entirely and redirects to God\'s redemptive purpose. A text in which Jesus denies both options cannot establish the option he never affirmed.',
      },
      {
        verse: 'Matthew 11:14 (John the Baptist "is Elijah who is to come")',
        abuse: 'New Age teachers cite Jesus\'s statement that John the Baptist "is Elijah" as evidence that John was the reincarnation of Elijah, and thus that Jesus taught reincarnation.',
        response: 'The angel had already explained the sense before John\'s birth: he would go before the Lord "in the spirit and power of Elijah" (Luke 1:17) — a functional likeness in prophetic role, not a transfer of soul. This is confirmed decisively at the Transfiguration, where Elijah appears in person alongside Moses and Jesus (Matthew 17:3): Elijah is manifestly Elijah, not John, and the two are distinct persons living (or appearing) at the same time. Moreover Elijah never died but was taken up in a whirlwind (2 Kings 2:11), so there was no "soul" to be reborn. John himself flatly denied being Elijah (John 1:21). The Elijah-John identification is typological, not reincarnational.',
      },
      {
        verse: 'Hebrews 9:27 ("it is appointed for man to die once, and after that comes judgment")',
        abuse: 'Some New Age interpreters try to soften this verse as applying only to a particular body or a single stage, preserving room for the soul\'s many deaths and rebirths.',
        response: 'The text will not bear the softening. "It is appointed for man to die once (hapax), and after that comes judgment" sets death as a singular appointment followed directly by judgment — the very structure reincarnation denies. The word hapax ("once for all") is the same emphasis applied in the next verse to Christ, who was offered "once to bear the sins of many" (Hebrews 9:28). The parallel is deliberate: as Christ died once, so man dies once. There is no textual space for a cycle of deaths; the one death and the one judgment are what make the one sacrifice sufficient.',
      },
    ],
    pastoralNote: 'Reincarnation can feel comforting — it seems to offer endless second chances and to soften the finality of death — so the biblical insistence on one life and a coming judgment may land as harsh. But handled rightly, it is liberating rather than frightening: the gospel says you do not have to earn your way up through countless lives of karmic striving, because Christ has already done what no amount of self-perfection could. Where the seeker fears judgment, point them to the Judge who bore the judgment himself. Where they grieve a loved one\'s death, offer not the vague hope of rebirth elsewhere but the concrete promise of resurrection and reunion in a renewed creation. Meet the longing for continuance with the surer hope of everlasting life.',
  },
  {
    id: 'new-age-channeling-and-energy',
    slug: 'channeling-and-energy-practices',
    name: 'New Age: Channeling, Mediums, and Energy Practices',
    category: 'new-age',
    shortDescription: 'New Age spirituality embraces channeling, mediumship, and the manipulation of subtle "energies" as paths to guidance and healing — practices the Bible does not dismiss as empty but warns against as real spiritual danger.',
    historicalBackground: 'Contacting spirits and unseen forces is ancient, but the modern New Age forms trace through nineteenth-century Spiritualism (séances, mediums) and Theosophy\'s claimed communications from "Ascended Masters." In the late twentieth century "channeling" — a medium allowing a discarnate entity to speak through them — became prominent through figures such as J.Z. Knight (channeling "Ramtha") and the channeled text A Course in Miracles. Alongside this runs a family of energy-based practices (chakra work, Reiki, therapeutic "energy" healing, crystals) premised on an impersonal life-force that the practitioner learns to channel and balance. The common thread is the pursuit of guidance, power, or healing from a spiritual realm approached apart from the God of Scripture.',
    cultPosition: 'The New Age treats the spirit realm as generally benevolent and accessible: channeled entities and "spirit guides" are wise teachers offering higher knowledge; mediums bridge the living and the dead; and unseen energies can be sensed, directed, and harmonized for healing and enlightenment. Because all is ultimately one divine energy, contacting spirits or manipulating life-force is seen as natural spiritual technology, morally neutral or positively good, and a means of accelerating the self\'s evolution toward godhood.',
    orthodoxResponse: 'Scripture does not treat the spirit world as an open, friendly resource; it forbids these practices precisely because the realm is real and not safely neutral. The Law lists them together for prohibition: "There shall not be found among you anyone... who practices divination or tells fortunes or interprets omens... or a medium or a necromancer or one who inquires of the dead, for whoever does these things is an abomination to the LORD" (Deuteronomy 18:10–12). The reason is not superstition but danger: Paul warns that "even Satan disguises himself as an angel of light" (2 Corinthians 11:14), so a "wise" channeled guide may be exactly the deceiving spirit John tells believers to test rather than trust (1 John 4:1). Saul\'s consultation of the medium at Endor ends in condemnation and death (1 Samuel 28; 1 Chronicles 10:13–14). The Christian is not left to negotiate the spirit realm alone: guidance comes from the Word and the indwelling Holy Spirit, and the dead are entrusted to God, not summoned by the living. Where the New Age reaches into the unseen for power, the gospel offers relationship with the God who reaches down in love — and warns that the shortcut through spirits leads not upward but into bondage.',
    keySources: [
      'Douglas Groothuis, Confronting the New Age (InterVarsity Press, 1988)',
      'Ron Rhodes, The Challenge of the Cults and New Religions (Zondervan, 2001)',
      'Peter Jones, The Gnostic Empire Strikes Back (P&R Publishing, 1992)',
      'Elliot Miller, A Crash Course on the New Age Movement (Baker, 1989)'
    ],
    semanticDefenseIds: ['sd-deut-18-10', 'sd-1-john-4-1'],
    historicalOrModern: 'modern',
    keyVersesAbused: [
      {
        verse: '1 Corinthians 12:8–10 ("word of knowledge," "distinguishing between spirits")',
        abuse: 'New Age teachers point to the Bible\'s own language of spiritual gifts, spirit-communication, and "words of knowledge" to argue that channeling and psychic sensitivity are simply the same phenomena the church has always affirmed.',
        response: 'Paul\'s spiritual gifts are given by the Holy Spirit to the church "for the common good" (1 Corinthians 12:7) and are exercised under his lordship, in submission to apostolic doctrine — the very opposite of an autonomous medium yielding their will to an unknown entity. Tellingly, the same list includes "the ability to distinguish between spirits" (v. 10), which presupposes that not every spirit is from God. John makes the duty explicit: "do not believe every spirit, but test the spirits to see whether they are from God" (1 John 4:1), and the test is confession that Jesus Christ has come in the flesh (4:2–3). Channeled entities routinely fail that test. Biblical gifts and New Age channeling are not the same phenomenon under different names; one flows from the Spirit of truth, the other from spirits Scripture commands us to test and, where they deny Christ, to reject.',
      },
      {
        verse: '1 Samuel 28 (Saul and the medium at Endor)',
        abuse: 'The apparent success of the medium in bringing up Samuel is cited as biblical precedent that mediumship works and can even summon the righteous dead.',
        response: 'Whatever exactly occurred at Endor, the narrative is framed as sin, not sanction. Saul had himself expelled the mediums in obedience to the Law (1 Samuel 28:3, 9), and his secret return to one is presented as a final act of apostasy. The inspired verdict is unambiguous: "Saul died for his breach of faith... and also because he consulted a medium, seeking guidance, and did not seek guidance from the LORD. Therefore the LORD put him to death" (1 Chronicles 10:13–14). The passage is a warning against consulting the dead, not a manual for doing so — the one biblical figure who seeks a medium is condemned for it.',
      },
      {
        verse: 'Acts 16:16–18 (the slave girl with a "spirit of divination")',
        abuse: 'The girl\'s spirit accurately announced that Paul and his companions were "servants of the Most High God," which is taken to show that channeled and psychic spirits speak truth and can even affirm the gospel.',
        response: 'The spirit did speak true words — yet Paul, "greatly annoyed," commanded it to come out (Acts 16:18), because a true statement from a deceiving spirit is a lure, not an endorsement. This mirrors 2 Corinthians 11:14: Satan appears as an angel of light, and demons in the Gospels sometimes announce Jesus\'s true identity (Mark 1:24) while remaining demons. The episode teaches discernment, not trust: the accuracy of a spirit message is no proof of its source or safety. Paul\'s response — expelling the spirit rather than consulting it — models the biblical stance toward channeling and divination.',
      },
    ],
    pastoralNote: 'People engaged in channeling or energy practices are often sincerely seeking guidance, healing, or contact with a deceased loved one, and they may report genuinely uncanny experiences that a flat denial only alienates. Take the reality of the spiritual realm seriously rather than dismissing it as fantasy — Scripture does. The pastoral concern is protective, not superstitious: these doorways can lead into deception, fear, and bondage, and many who leave the New Age describe exactly that arc. Point to the God who does not have to be summoned, coaxed, or channeled, but who speaks clearly in his Word, indwells his people by his Spirit, and holds the departed safely in his hand. Where they have known fear from the spirit realm, offer the perfect love that casts out fear (1 John 4:18).',
  },
  {
    id: 'arianism-created-son',
    slug: 'the-son-a-created-being',
    name: 'Arianism: "There Was When the Son Was Not"',
    category: 'arianism',
    shortDescription: 'The fourth-century heresy of Arius held that the Son is the first and highest creature, made by the Father out of nothing — denying that Christ is co-eternal and consubstantial with God. It was condemned at the Council of Nicaea in 325.',
    historicalBackground: 'Arius (c. 256–336), a presbyter in Alexandria, taught that the Son, though the first and greatest of God\'s creatures, was created and therefore not eternal — summarized in the slogan ēn pote hote ouk ēn, "there was when he was not." The controversy convulsed the fourth-century church. The First Council of Nicaea (325), convened by Emperor Constantine, condemned Arianism and confessed the Son to be homoousios ("of the same substance/essence") with the Father, "begotten, not made." Arius\'s chief opponent was Athanasius of Alexandria. Despite Nicaea, Arianism persisted for decades (surviving among some Germanic tribes for centuries) until the Council of Constantinople (381) reaffirmed Nicene orthodoxy. Modern groups such as the Jehovah\'s Witnesses revive its central claim.',
    cultPosition: 'Arianism holds that only the Father is truly, eternally God (agenētos, unbegotten and without origin). The Son is a distinct, subordinate being whom the Father created out of nothing before all ages — the instrument through whom the Father then made everything else. Therefore the Son is not co-eternal: "there was when he was not." He is called "God" only in a derived, honorary sense, not by nature. Arius appealed to texts stressing the Son\'s subordination and to titles such as "firstborn" and "only-begotten" to argue for the Son\'s creaturely origin.',
    orthodoxResponse: 'The historic church, at Nicaea (325) and Constantinople (381), confessed the Son as "God from God, Light from Light, true God from true God, begotten not made, of one substance (homoousios) with the Father." Scripture teaches the Son\'s full deity and eternity: He is the Word who "was in the beginning with God, and was God" (John 1:1), the one through whom "all things were made" and "without him was not any thing made that was made" (John 1:3) — the Maker of all cannot be Himself a made thing. He is "before all things" (Colossians 1:17), the "radiance of the glory of God and the exact imprint of his nature" (Hebrews 1:3), addressed by the Father as "God" (Hebrews 1:8). Athanasius\'s decisive argument was soteriological: only God can save; if the Son were a creature, He could not reconcile creatures to God. "Begotten, not made" preserves the biblical distinction — the Son is eternally generated from the Father\'s own being, not fashioned as a creature out of nothing.',
    keySources: [
      'The Nicene Creed (Council of Nicaea, 325; Council of Constantinople, 381)',
      'Athanasius, On the Incarnation and the Orations Against the Arians (4th century)',
      'R.P.C. Hanson, The Search for the Christian Doctrine of God: The Arian Controversy 318–381 (T&T Clark, 1988)',
      'John Behr, The Nicene Faith (St Vladimir\'s Seminary Press, 2004)'
    ],
    semanticDefenseIds: ['sd-john1-1', 'sd-nt-monogenes-theos', 'sd-nt-col-1-17', 'sd-heb-1-3', 'sd-john-8-58'],
    historicalOrModern: 'historical',
    keyVersesAbused: [
      {
        verse: 'John 1:1 ("and the Word was God")',
        abuse: 'Arians (ancient and modern) argue that because ho theos ("the God," with the article) refers to the Father, the anarthrous theos applied to the Word means the Word is "a god" — a lesser, created divine being.',
        response: 'In "kai theos ēn ho logos," theos is a predicate noun preceding the verb, and such predicates regularly drop the article while remaining definite or qualitative (Colwell\'s Rule; cf. the qualitative force John intends). The clause asserts that the Word fully shares the divine nature, while the word order distinguishes the Word from the Father as a distinct person — exactly the balance Nicaea later articulated: one essence, distinct persons. Crucially, John 1:3 says everything that came into being was made through the Word, placing the Word on the Creator side of the Creator–creature line. A being through whom all created things were made cannot itself be a created thing.',
      },
      {
        verse: 'John 3:16 / John 1:18 ("only-begotten" — monogenēs)',
        abuse: 'Arians take "only-begotten" (monogenēs) to mean the Son had a beginning — that He was "begotten" in the sense of being brought into existence, and so is not eternal.',
        response: 'The Greek monogenēs derives from monos ("only") and genos ("kind/class"), meaning "one of a kind, unique," not "begotten in time." It describes the Son\'s unique relationship to the Father, not a point of origin. The best manuscripts of John 1:18 read monogenēs theos — "the only-begotten God" (or "God the only Son") — a phrase that directly affirms the Son\'s deity. Nicaea captured the sense precisely with "begotten, not made": eternal generation from the Father\'s own being is categorically different from creation out of nothing. The Son is eternally from the Father, never a creature who began to exist.',
      },
      {
        verse: 'Colossians 1:15 ("the firstborn of all creation" — prōtotokos)',
        abuse: 'Arius read "firstborn of all creation" as "first-created," making the Son the first and highest creature the Father produced.',
        response: 'Prōtotokos denotes rank and preeminence, not chronological origin. In Psalm 89:27 God makes David "the firstborn, the highest of the kings of the earth" — a title of supremacy, though David was neither literally firstborn nor pre-existent. Paul\'s very next words exclude the Arian reading: "for by him all things were created... all things were created through him and for him. And he is before all things, and in him all things hold together" (Colossians 1:16–17). The one who created "all things" and exists "before all things" stands outside and above creation as its Lord, not within it as its first member.',
      },
      {
        verse: 'Proverbs 8:22 ("The LORD created me at the beginning of his work")',
        abuse: 'Arians identified the Son with personified Wisdom in Proverbs 8 and used the Septuagint\'s ektisen ("created me") to prove the Son was created.',
        response: 'Reading the Son straightforwardly into Wisdom in Proverbs 8 is exegetically fragile — the passage is a poetic personification of Wisdom, not a Christological treatise. Even granting the association, the Hebrew verb qanah (v. 22) commonly means "possessed" or "acquired" (so many versions: "The LORD possessed me at the beginning of his way"), and the imagery of Wisdom being "brought forth" (vv. 24–25) fits eternal generation rather than creation from nothing. Athanasius argued that Scripture\'s clear teaching — the Son as eternal Creator (John 1:3; Colossians 1:16) — must govern the interpretation of a poetic and disputed text, not the reverse.',
      },
    ],
    pastoralNote: 'Arianism is an ancient heresy, but it is not merely a museum piece: its central instinct — that a truly monotheistic God cannot also be a Trinity, so the Son must be less than God — recurs whenever the mystery of the Godhead is pressed into the mold of human logic, and it is the theological engine behind modern groups like the Jehovah\'s Witnesses. When engaging someone drawn to an Arian view, honor the genuine concern behind it: a desire to protect the oneness and supremacy of God. Then show that Nicene orthodoxy protects that very concern better than Arianism does — for if only God can save, a created Son could not. The historic creeds were not philosophical impositions on the Bible but the church\'s careful, hard-won effort to say no more and no less than Scripture says about Christ.',
  },
  {
    id: 'arianism-i-am-eternality',
    slug: 'the-eternal-i-am',
    name: 'Arianism: "Before Abraham Was, I Am" and the Eternity of the Son',
    category: 'arianism',
    shortDescription: 'The Arian slogan "there was when he was not" collapses before Jesus\'s own claim, "before Abraham was, I am" (John 8:58) — a declaration of timeless existence and of the divine Name that the church confessed at Nicaea as the eternity of the Son.',
    historicalBackground: 'The heart of Arius\'s teaching was temporal: the Son had a beginning ("there was when he was not," ēn pote hote ouk ēn), and so, however exalted, he belonged on the creaturely side of eternity. The Nicene response in 325 confessed the Son as "begotten of the Father before all ages... true God from true God, begotten not made," deliberately excluding any point at which the Son was not. Athanasius and the Cappadocians pressed the point that the Son\'s generation is eternal and internal to God\'s own being, not an event in time. Modern Arian groups such as the Jehovah\'s Witnesses inherit the temporal claim, and their New World Translation renders John 8:58 as "before Abraham came into existence, I have been," softening the present-tense "I am" precisely to avoid its force.',
    cultPosition: 'Arianism holds that the Son, as the first and highest creature, came into existence before the ages but is not himself without beginning — only the Father is truly eternal and unoriginate (agenētos). Texts in which Jesus appears to claim pre-existence are read as referring to a created pre-existence: the Son existed before Abraham because he was made before Abraham, as the firstborn of creation, not because he is the eternal God. To blunt John 8:58, the claim to timeless "I am" is recast as merely "I have been" — long-lived, but still a creature with an origin.',
    orthodoxResponse: 'In John 8:58 Jesus answers a question about time ("you are not yet fifty years old, and have you seen Abraham?") with a statement that shatters time: "Truly, truly, I say to you, before Abraham was (genesthai, "came to be"), I am (egō eimi)." He does not say "I was" but "I am" — an absolute present that asserts timeless, uncaused existence, standing behind and before the coming-to-be of Abraham. The phrase egō eimi also echoes the divine self-naming of Exodus 3:14 and the "I am he" declarations of Isaiah (43:10; 46:4, LXX egō eimi), which is why his hearers immediately "picked up stones to throw at him" (John 8:59) — the penalty for blasphemy, not for claiming mere longevity. This is exactly the Son whom John 1:1 places "in the beginning... with God," and through whom all things were made (John 1:3): a being who exists before all created things and outside the category of coming-to-be cannot himself have come to be. Nicaea\'s "begotten, not made... before all ages" simply confesses what Jesus here declares.',
    keySources: [
      'The Nicene Creed (Council of Nicaea, 325; Council of Constantinople, 381)',
      'Athanasius, Orations Against the Arians (4th century)',
      'D.A. Carson, The Gospel According to John (Eerdmans/Pillar, 1991)',
      'James White, The Forgotten Trinity (Bethany House, 1998)'
    ],
    semanticDefenseIds: ['sd-john-8-58', 'sd-john1-1', 'sd-exodus-3-14'],
    historicalOrModern: 'historical',
    keyVersesAbused: [
      {
        verse: 'John 8:58 ("Before Abraham was, I am")',
        abuse: 'Arians (and the New World Translation) render the present-tense egō eimi as "I have been," making Jesus claim only a long, created pre-existence — he existed before Abraham because he was created before Abraham — not eternal, uncreated being.',
        response: 'Jesus deliberately contrasts two verbs: Abraham "came to be" (genesthai, an origin in time), but of himself he says egō eimi — "I am," an unbounded present, not "I was" or "I have been." The grammar sets timeless being over against coming-into-existence, which is the precise opposite of the Arian claim. The reaction of his hearers settles the meaning: they took up stones (John 8:59), the response to blasphemy, because they heard a claim to the divine Name (Exodus 3:14) and the "I am he" of Isaiah (43:10). A claim merely to be very old provokes no stoning; a claim to be the eternal I AM does. The one who is "before Abraham" in this sense cannot be a creature made before Abraham.',
      },
      {
        verse: 'John 17:5 ("the glory that I had with you before the world existed")',
        abuse: 'Arians read this as the pre-existent glory of an exalted creature — the Son enjoyed glory with the Father before creation because he was the first thing created, not because he is eternal God.',
        response: 'Jesus prays to be glorified "with the glory that I had with you before the world existed" (John 17:5). He claims to have shared the Father\'s own glory before the created order began — yet God explicitly refuses to give his glory to another: "I am the LORD... my glory I give to no other" (Isaiah 42:8; 48:11). A creature cannot possess the divine glory the Father shares with no creature. The Son\'s pre-cosmic glory places him before and outside creation, on the Creator\'s side of the line — consistent with John 1:1–3 and irreconcilable with a Son who "was not" until the Father made him.',
      },
    ],
    pastoralNote: 'When speaking with a Jehovah\'s Witness or anyone shaped by Arian assumptions, John 8:58 is often the most fruitful passage, because the issue turns on a single, checkable point: does Jesus say "I was" or "I am," and why did his hearers reach for stones? Invite them to read the verse in Greek or in a standard translation alongside their own, and to explain the stoning if Jesus claimed only to be old. Do this gently and with real respect — the concern to guard God\'s oneness is a good instinct, and Nicene faith honors it better than Arianism, since it is the one eternal God who himself comes to save. The goal is not to win an argument but to let the eternal "I am" speak for himself.',
  },
  {
    id: 'arianism-nicaea-homoousios',
    slug: 'nicaea-and-homoousios',
    name: 'Arianism: Nicaea, homoousios, and the Charge of an Imposed Creed',
    category: 'arianism',
    shortDescription: 'Arians ancient and modern object that the Nicene word homoousios ("of the same substance") is an unbiblical, philosophical imposition on Scripture. In fact it was the church\'s minimal safeguard for exactly what Scripture teaches, forged against Arian evasions.',
    historicalBackground: 'When the Council of Nicaea met in 325 to address the Arian controversy, the bishops found that every biblical title they proposed for the Son — "God," "from God," "power," "image" — could be reinterpreted by the Arians in a creaturely sense. To close the evasions, the council adopted a term not found verbatim in Scripture: homoousios, "of the same substance/essence" as the Father. Arius\'s later sympathizers countered with the near-identical homoiousios ("of like substance"), the famous single-iota difference. Athanasius spent much of his career defending homoousios not as philosophy for its own sake but as the only word the Arians could not twist. The Council of Constantinople (381) reaffirmed it, and it stands in the Nicene Creed confessed by the church ever since.',
    cultPosition: 'Arians (and modern heirs such as the Jehovah\'s Witnesses) argue that homoousios is a foreign, extra-biblical, Greek-philosophical term smuggled into the faith by Constantine\'s council — proof that the Trinity is a later corruption rather than apostolic teaching. Since the word appears nowhere in the Bible, they claim, no one is bound to it, and the "true" biblical picture is the simpler, subordinationist one: one God the Father, and a lesser, created Son. The creed, on this telling, imposed philosophy on a Bible that never taught the Son\'s consubstantiality.',
    orthodoxResponse: 'A term need not appear verbatim in Scripture to express Scripture faithfully — "Trinity," "incarnation," and even "Bible" are all in the same position, as is the Arians\' own vocabulary. Homoousios was adopted precisely because the plain biblical data required it and the Arians could evade every merely biblical phrase: if the Son is the one through whom "all things were made" (John 1:3), is "before all things" (Colossians 1:17), bears "the exact imprint of [God\'s] nature" (Hebrews 1:3), is addressed by the Father as "God" (Hebrews 1:8), and is the eternal "I am" (John 8:58), then he shares the Father\'s very being — which is all homoousios means. The council did not invent a doctrine; it drew a boundary around the biblical confession that Arianism kept slipping past. Nor was the outcome Constantine\'s political fiat: Arianism actually enjoyed imperial favor for decades after 325, yet Nicene orthodoxy prevailed because it did justice to the texts. Athanasius\'s deepest argument was soteriological and thoroughly biblical — only God can save, so a Son of merely "like" substance could not reconcile us to God (Hebrews 2:14–17). The word is extra-biblical; the truth it guards is not.',
    keySources: [
      'The Nicene Creed (Council of Nicaea, 325; Council of Constantinople, 381)',
      'Athanasius, De Decretis (On the Decrees of the Council of Nicaea) and Orations Against the Arians',
      'R.P.C. Hanson, The Search for the Christian Doctrine of God: The Arian Controversy 318–381 (T&T Clark, 1988)',
      'Lewis Ayres, Nicaea and Its Legacy (Oxford University Press, 2004)'
    ],
    semanticDefenseIds: ['sd-heb-1-3', 'sd-nicaea-homoousios'],
    historicalOrModern: 'historical',
    keyVersesAbused: [
      {
        verse: 'Deuteronomy 4:2 ("You shall not add to the word")',
        abuse: 'Arians and their heirs appeal to the prohibition against adding to God\'s word to argue that Nicaea\'s extra-biblical homoousios is an illegitimate addition to Scripture.',
        response: 'The prohibition is against adding new commands or contrary doctrines to God\'s revelation, not against using precise words to summarize and defend what revelation says. By that misreading, "monotheism," "Trinity," and "incarnation" would all be forbidden, and even the Arians\' own term homoiousios would be self-condemned. A creed that uses a new word to fence an old truth adds nothing to Scripture; it protects Scripture\'s meaning against distortion — exactly what the Bereans model when they test teaching by the text (Acts 17:11). Homoousios adds no content beyond what John 1, Colossians 1, and Hebrews 1 already assert; it merely states it in a form Arianism could not evade.',
      },
      {
        verse: 'Hebrews 1:3 ("the exact imprint of his nature")',
        abuse: 'Arians take "imprint" or "image" language to imply derivation and therefore inferiority — an image is less than, and later than, its original, so the Son is a lesser being.',
        response: 'Hebrews 1:3 says the Son is "the radiance of the glory of God and the exact imprint of his nature (charaktēr tēs hypostaseōs autou)," upholding the universe by his word — hardly the description of a creature. "Radiance" (apaugasma) conveys that the Son is to the Father as light is to its source: never later than, never separable from, of the very same nature. Charaktēr denotes an exact reproduction of the very substance (hypostasis), not a diminished copy. The same chapter has the Father address the Son directly as "God" whose throne is "forever and ever" (Hebrews 1:8) and as the unchanging Creator of heaven and earth (1:10–12). This is precisely the consubstantiality homoousios was coined to confess: same nature, distinct person.',
      },
    ],
    pastoralNote: 'The "unbiblical word" objection can sound powerful to someone taught that any term absent from the Bible is suspect, so it helps to disarm it plainly: point out that "Bible" and "Trinity" are themselves not in the Bible, and that the objectors freely use extra-biblical words of their own. Then move the conversation from the word to the texts it guards — walk slowly through John 1:1–3, Colossians 1:16–17, and Hebrews 1, and ask what these passages require us to say about the Son. Homoousios is not a hurdle between the seeker and the Bible; it is a fence the church built after discovering how easily the biblical language could be evaded. Framed that way, the creed appears not as imposition but as faithful stewardship of exactly what Scripture says.',
  },
  {
    id: 'gnosticism-secret-knowledge',
    slug: 'secret-knowledge-and-the-demiurge',
    name: 'Gnosticism: Secret Knowledge, the Demiurge, and the Denial of the Incarnation',
    category: 'gnosticism',
    shortDescription: 'The ancient Gnostic systems taught that the material world is the flawed product of a lesser deity (the demiurge), that salvation comes through secret knowledge (gnōsis), and that the divine Christ could not truly take on evil matter — heresies the early church fathers refuted at length.',
    historicalBackground: 'Gnosticism was a family of religious movements that flourished in the second and third centuries AD, blending Christian, Jewish, Platonic, and Eastern elements. Its teachers included Valentinus, Basilides, and Marcion (a related dualist). The movement is known both from the polemics of the church fathers — above all Irenaeus\'s Against Heresies (c. 180) and the works of Tertullian and Hippolytus — and from primary Gnostic texts, most famously the Coptic library discovered at Nag Hammadi in Egypt in 1945 (including the Gospel of Thomas, the Gospel of Truth, and the Apocryphon of John). The church rejected Gnosticism as fundamentally incompatible with the apostolic faith.',
    cultPosition: 'Classic Gnosticism is radically dualist: spirit is good, matter is evil. The true, unknowable God is utterly transcendent, and from Him emanate a series of divine beings (aeons) filling the divine "fullness" (plērōma). The material cosmos was fashioned not by the supreme God but by an inferior, ignorant, or malevolent craftsman — the demiurge, often identified with the Old Testament Creator. Human beings are divine sparks trapped in evil bodies; salvation comes not through Christ\'s atoning death but through secret saving knowledge (gnōsis) that awakens the spark to its true origin. Because matter is evil, most Gnostics denied that the divine Christ genuinely took on flesh, teaching instead that He only appeared to have a body (docetism) or that the divine Christ descended on the man Jesus temporarily and departed before the cross.',
    orthodoxResponse: 'The apostolic faith contradicts Gnosticism at every point. There is one God who is Himself the Creator of both spirit and matter, and His material creation is good (Genesis 1:31; 1 Timothy 4:4, "everything created by God is good"). Salvation is not esoteric knowledge for an elite but the gift of God offered openly to all who believe (Ephesians 2:8–9); Jesus taught "openly to the world" and "said nothing in secret" (John 18:20). Above all, orthodoxy insists on a real incarnation: "the Word became flesh (sarx) and dwelt among us" (John 1:14), and John makes the confession that "Jesus Christ has come in the flesh" the very test of the Spirit of truth against the spirit of antichrist (1 John 4:2–3) — a direct blow against docetism. Paul answers the plērōma speculation head-on: "in him the whole fullness of deity (pan to plērōma tēs theotētos) dwells bodily" (Colossians 2:9) — the divine fullness is not dispersed among aeons but present completely in the incarnate Christ. Irenaeus argued that the same God is Creator and Redeemer, and that what Christ did not truly assume He could not redeem; a merely apparent body means a merely apparent salvation.',
    keySources: [
      'Irenaeus of Lyons, Against Heresies (Adversus Haereses, c. 180 AD)',
      'The Nag Hammadi Library (Coptic texts discovered 1945; ed. James M. Robinson)',
      'Tertullian, Against Marcion and The Prescription Against Heretics (c. 200 AD)',
      'Bart D. Ehrman, Lost Christianities (Oxford University Press, 2003) — for historical survey'
    ],
    semanticDefenseIds: ['sd-nt-word-tabernacled', 'sd-col-2-9'],
    historicalOrModern: 'historical',
    keyVersesAbused: [
      {
        verse: 'Colossians 2:9 ("in him the whole fullness of deity dwells bodily")',
        abuse: 'Gnostics used the term plērōma ("fullness") for the totality of divine aeons emanating from the unknowable God, treating Christ as one mediating aeon among many within that fullness.',
        response: 'Paul appears to seize the Gnostics\' own vocabulary and turn it against them: "in him [Christ] the whole fullness of deity (pan to plērōma tēs theotētos) dwells bodily (sōmatikōs)." Two words demolish the Gnostic system at once. Pan to plērōma — the whole fullness — is not dispersed across a hierarchy of aeons but resident completely in Christ. And sōmatikōs — "bodily" — affirms precisely what Gnosticism denied: that this divine fullness dwells in a real, physical body. Far from being one aeon among many, Christ is the entire divine fullness incarnate.',
      },
      {
        verse: 'John 1:14 ("The Word became flesh")',
        abuse: 'Docetic Gnostics taught that the divine Christ only seemed (Greek dokeō, "to appear") to have a body, since the pure divine could not truly unite with evil matter.',
        response: 'John writes ho Logos sarx egeneto — "the Word became flesh," using sarx, the concrete word for physical flesh, and egeneto, "became," denoting a genuine transition into a real bodily existence. The Gospel and epistles of John press this deliberately against docetism: "every spirit that confesses that Jesus Christ has come in the flesh is from God, and every spirit that does not confess Jesus is not from God" (1 John 4:2–3). The eyewitness claim is emphatically physical — "which we have heard, which we have seen with our eyes... and touched with our hands" (1 John 1:1). A Christ who only appeared to be human could neither truly die nor truly save.',
      },
      {
        verse: '1 Timothy 6:20 ("what is falsely called knowledge" — gnōsis)',
        abuse: 'Gnostics prized secret gnōsis as the means of salvation, reserved for spiritual initiates, and read the New Testament\'s language of "knowledge" and "mystery" as endorsement of their esoteric system.',
        response: 'Paul explicitly warns Timothy to guard against "the contradictions of what is falsely called knowledge (pseudōnymou gnōseōs)" — the phrase reads almost as a direct rebuke of the emerging Gnostic tendency. In the New Testament, the "mystery" of the gospel is not hidden esoteric doctrine but a truth once concealed and now openly revealed to all (Colossians 1:26–27; Romans 16:25–26). Saving knowledge is knowing the person of Christ (John 17:3, "this is eternal life, that they know you"), offered freely to the humble rather than doled out to an initiated elite. Salvation is by grace through faith, not by secret information (Ephesians 2:8–9).',
      },
      {
        verse: 'Genesis 1:1 / Genesis 1:31 (the Creator and the goodness of creation)',
        abuse: 'Gnostics (and Marcion) identified the Old Testament Creator with an inferior demiurge and treated the material world he made as evil or defective, severing the God of creation from the God of redemption.',
        response: 'Scripture allows no such division: the one God who created "the heavens and the earth" (Genesis 1:1) and pronounced His material creation "very good" (Genesis 1:31) is the same God who redeems it in Christ. The New Testament affirms creation\'s goodness explicitly — "everything created by God is good, and nothing is to be rejected" (1 Timothy 4:4) — and identifies the Son as the Creator\'s agent: "all things were made through him" (John 1:3; Colossians 1:16). Irenaeus\'s central argument against the Gnostics was exactly this unity: the Creator and the Redeemer are one God, and the material world is the good handiwork He entered and will restore, not a prison to escape.',
      },
    ],
    pastoralNote: 'Though the ancient Gnostic schools are long gone, the Gnostic impulse is remarkably durable and resurfaces in modern spirituality: the appeal of secret or "suppressed" knowledge, the sense that the physical body and world are obstacles to a purely spiritual salvation, and the popular fascination with "lost gospels" like Thomas as if they preserved a truer Jesus. When these ideas surface, the pastoral task is to recover the earthy realism of the Christian faith: God made matter and called it good, the Son took a real body and rose in one, and the hope of the gospel is not escape from creation but its resurrection and renewal. The faith was delivered openly, "once for all... to the saints" (Jude 3) — not whispered to initiates. Point people to the tangible, historical Jesus whom the apostles saw, heard, and touched.',
  },
  {
    id: 'gnosticism-demiurge-and-good-creation',
    slug: 'the-demiurge-and-the-goodness-of-the-body',
    name: 'Gnosticism: The Demiurge, Evil Matter, and the Redemption of the Body',
    category: 'gnosticism',
    shortDescription: 'Gnosticism traces the material world to an inferior, ignorant craftsman (the demiurge) and treats the body as a prison to escape. Scripture answers with one good Creator, a Son who took a real body, and a salvation that redeems the body rather than discarding it.',
    historicalBackground: 'Gnostic and related dualist systems (Valentinus, and the sharper dualism of Marcion) severed the God of redemption from the Creator, assigning the making of the material cosmos to a lesser, often malevolent or ignorant being — the demiurge, frequently identified with the God of the Old Testament. Because matter was evil or defective, the body was a trap for the divine spark, and salvation meant the spark\'s escape from embodiment. Against this, Irenaeus of Lyons (Against Heresies, c. 180) developed the doctrine of "recapitulation": the one Creator-God himself became incarnate in his Son to sum up and restore humanity from within real flesh — "what was not assumed is not healed." Tertullian argued similarly against Marcion that the Creator and the Father of Christ are one and the same good God.',
    cultPosition: 'Because spirit is good and matter is evil, the supreme, unknowable God could not have made the material world directly. It is the botched or malicious work of the demiurge, a lower power. Human bodies are prisons; the flesh is at best irrelevant and at worst hostile to salvation, which consists in the awakening and release of the inner spark, not in the healing of the body. Accordingly, the Gnostic denies that the divine Redeemer would truly take on flesh or that any bodily resurrection is desirable — the goal is to be free of the body, not raised in it.',
    orthodoxResponse: 'The apostolic faith confesses one God who is both Creator and Redeemer, and who does not despise the flesh but assumes and redeems it. Irenaeus\'s recapitulation captures the logic of Scripture: the Word "became flesh" (John 1:14) so that "what was not assumed is not healed" — a Redeemer who bypassed the body could not save embodied creatures. Far from being a prison to escape, the body is destined for resurrection: Christ rose bodily, inviting Thomas to touch his wounds and eating before the disciples (Luke 24:39–43; John 20:27), and Paul makes the bodily resurrection the linchpin of the faith — "if the dead are not raised... your faith is futile" (1 Corinthians 15:16–17). The Spirit-indwelt body is called a temple, and believers are told to "glorify God in your body" (1 Corinthians 6:19–20). Salvation\'s trajectory is not the soul\'s flight from matter but the redemption of the whole person and the renewal of creation itself — "the creation itself will be set free from its bondage to corruption" (Romans 8:21). Against the demiurge, Irenaeus and Tertullian insisted the Creator and the Father of Jesus are one good God; against contempt for the body, the incarnation and resurrection stand as permanent rebukes.',
    keySources: [
      'Irenaeus of Lyons, Against Heresies (Adversus Haereses), esp. Book V on recapitulation and the resurrection of the flesh (c. 180 AD)',
      'Tertullian, Against Marcion and On the Resurrection of the Flesh (c. 200–210 AD)',
      'Bart D. Ehrman, Lost Christianities (Oxford University Press, 2003) — for historical survey',
      'N.T. Wright, The Resurrection of the Son of God (Fortress, 2003)'
    ],
    semanticDefenseIds: ['sd-nt-word-tabernacled', 'sd-1-cor-15-resurrection'],
    historicalOrModern: 'historical',
    keyVersesAbused: [
      {
        verse: '1 Corinthians 15:50 ("flesh and blood cannot inherit the kingdom of God")',
        abuse: 'Gnostics seized on this phrase as proof that the body has no place in salvation — the material must be left behind, and any "resurrection" is purely spiritual, not bodily.',
        response: 'Paul is not disparaging the body but contrasting the perishable with the imperishable. In context he is describing the transformation of the body at the resurrection: "this perishable body must put on the imperishable" (1 Corinthians 15:53). "Flesh and blood" is an idiom for mortal, corruptible humanity as it now is; it cannot inherit the kingdom precisely because it "must" be raised and glorified — not discarded but changed (v. 51–52). The whole chapter is a sustained defense of bodily resurrection against those who denied it (v. 12–19), the very opposite of the Gnostic reading. Paul insists the same body is "sown perishable" and "raised imperishable" (v. 42).',
      },
      {
        verse: 'John 3:6 ("that which is born of the flesh is flesh, and that which is born of the Spirit is spirit")',
        abuse: 'Gnostics read Jesus\'s flesh/spirit language as an ontological dualism confirming that flesh belongs to the lower realm and only spirit can be saved.',
        response: 'Jesus is drawing a distinction between two births — natural physical birth and the new birth "from above" wrought by the Spirit (John 3:3–8) — not between an evil material realm and a good spiritual one. The same Gospel opens by declaring that all things were made through the Word (John 1:3) and that this Word "became flesh" (1:14), and it closes with the risen Jesus displaying his wounded, tangible body (John 20:27). John\'s theology is not dualist: the problem is not flesh as such but flesh apart from the Spirit\'s regenerating work. The remedy is new birth, not escape from the body.',
      },
      {
        verse: 'Colossians 1:16 ("all things were created through him... visible and invisible")',
        abuse: 'Marcion and the Gnostics assigned the visible, material creation to the demiurge, reserving the invisible spiritual realm for the true God — dividing creation between two authors.',
        response: 'Paul explicitly forecloses the division: in Christ "all things were created, in heaven and on earth, visible and invisible" (Colossians 1:16). The same Son is the agent of both the material and the spiritual orders; there is no second creator for the visible world. This is exactly Irenaeus\'s point against the Gnostics — the Creator of the physical cosmos and the Father of Jesus Christ are one God, and the Son who made the visible world is the same Son who entered it in the flesh and reconciles "all things" through the blood of his cross (1:20). Matter has one good Author, not an inferior demiurge.',
      },
    ],
    pastoralNote: 'The instinct that the body is a problem — a source of shame, appetite, sickness, and death to be transcended — is deeply human and recurs constantly, from ancient Gnosticism to modern "spiritual but not physical" pieties. Meet it not with abstraction but with the scandalously physical shape of the Christian story: God made bodies and called them good, the Son took one, hungered and wept and bled in one, and rose in one that could be touched. The Christian hope is not to be liberated from the body but to be raised imperishable. For someone weary of or ashamed of their embodiment, this is good news: the flesh is not the enemy but the very thing God stooped to redeem.',
  },
  {
    id: 'gnosticism-nag-hammadi-dating',
    slug: 'lost-gospels-and-late-dating',
    name: 'Gnosticism: The "Lost Gospels," Late Dating, and Public Apostolic Tradition',
    category: 'gnosticism',
    shortDescription: 'Popular accounts claim the Nag Hammadi "gospels" (Thomas, Judas, Philip) preserve a suppressed, truer Jesus. Their second-century dating and the public, checkable apostolic tradition tell against them and for the canonical Gospels.',
    historicalBackground: 'The 1945 discovery of a Coptic library at Nag Hammadi, Egypt, brought to light dozens of Gnostic texts — the Gospel of Thomas, the Gospel of Philip, the Gospel of Truth, the Apocryphon of John, and later (published 2006) the Gospel of Judas. Popular writers and novelists cast these as suppressed "lost gospels" revealing a Jesus the church allegedly hid. Historically, however, these texts are second-century (and later) compositions: the canonical Gospels of Matthew, Mark, Luke, and John are dated to the first century, within living memory of the events, while the Gnostic gospels reflect the developed dualist theology of the 100s–200s. Irenaeus (c. 180) already knew and refuted such texts, arguing that the apostolic teaching was public, geographically distributed, and traceable through the succession of bishops — the opposite of a hidden tradition.',
    cultPosition: 'Gnosticism claims a secret oral tradition of higher teaching passed from Jesus to an inner circle and preserved in texts like Thomas and Judas — a truer, more spiritual Jesus, later suppressed by an institutional church that canonized the "orthodox" four Gospels for reasons of power. On this account the Nag Hammadi texts are at least as ancient and authentic as the canonical Gospels, and the church\'s canon represents the victory of politics over the original esoteric message of Jesus.',
    orthodoxResponse: 'The historical evidence runs the other way on both date and character. On date: the canonical Gospels are first-century documents rooted in eyewitness testimony (Luke 1:1–4; John 21:24; 1 John 1:1–3), whereas the Nag Hammadi gospels are demonstrably second-century or later, dependent on the earlier tradition and reflecting a fully developed Gnostic system. The Gospel of Thomas, Judas, and Philip simply do not compete chronologically with Mark or the sources behind the Synoptics. On character: the Christian tradition was public, not secret. Jesus himself said, "I have spoken openly to the world... I have said nothing in secret" (John 18:20), and the faith was "once for all delivered to the saints" (Jude 3) — Jude 3, not to an initiated elite. Irenaeus\'s decisive argument against the Gnostics was exactly this: apostolic teaching was preached openly, deposited in churches across the empire, and handed down through public succession, so that any claim to a hidden, contradictory tradition is by definition a later invention. The idea of suppressed authentic gospels inverts the actual chronology and mistakes second-century sectarian writings for buried first-century truth.',
    keySources: [
      'Irenaeus of Lyons, Against Heresies (Adversus Haereses), Books I and III — on public apostolic tradition and succession (c. 180 AD)',
      'The Nag Hammadi Library (Coptic texts discovered 1945; ed. James M. Robinson)',
      'Bart D. Ehrman, Lost Christianities (Oxford University Press, 2003)',
      'Richard Bauckham, Jesus and the Eyewitnesses (Eerdmans, 2006)'
    ],
    semanticDefenseIds: ['sd-jude-3', 'sd-gospels-eyewitness'],
    historicalOrModern: 'historical',
    keyVersesAbused: [
      {
        verse: 'John 16:12 ("I still have many things to say to you, but you cannot bear them now")',
        abuse: 'Gnostics cite this as proof that Jesus held back secret teachings for a spiritual elite — teachings later recorded in the hidden gospels rather than the public four.',
        response: 'Jesus\'s very next words identify how the "many things" would come: "When the Spirit of truth comes, he will guide you into all the truth" (John 16:13). The promised further instruction is the Spirit\'s public leading of the apostles into the truth of the gospel — fulfilled in the apostolic preaching and writings addressed to the whole church, not in an esoteric transmission to initiates. This coheres with Jesus\'s explicit denial of secret teaching: "I have said nothing in secret" (John 18:20). The passage promises the Spirit\'s open illumination of the church, which is the opposite of a hidden Gnostic deposit.',
      },
      {
        verse: '1 Corinthians 2:6–7 ("we impart a secret and hidden wisdom of God")',
        abuse: 'Gnostics read Paul\'s language of "wisdom... among the mature" and "secret and hidden wisdom" as endorsement of an esoteric teaching reserved for spiritual initiates.',
        response: 'Paul\'s "hidden wisdom" is not a body of secret doctrine but the gospel of the crucified Christ — a "mystery" once concealed in God\'s plan and now openly proclaimed to all. He immediately defines it: this wisdom is Christ crucified (1 Corinthians 2:2, 8), "revealed to us through the Spirit" (2:10), and preached publicly (1:23). Elsewhere Paul insists the "mystery" is now "disclosed and made known to all nations" (Romans 16:25–26; Colossians 1:26). The wisdom is "hidden" only in the sense that it is spiritually discerned, not that it is doled out to an elite; Paul preached it in the open marketplace, not in a closed circle.',
      },
      {
        verse: 'Luke 1:1–4 (the eyewitness basis of the Gospel)',
        abuse: 'Some treat the canonical Gospels as no more historically grounded than the Gnostic gospels, all equally "theological" and late, so that Thomas or Judas may preserve Jesus just as reliably.',
        response: 'Luke opens by grounding his account in investigation and eyewitness testimony: he wrote after "those who from the beginning were eyewitnesses and ministers of the word delivered them to us," having "followed all things closely" so that Theophilus might have "certainty" (Luke 1:1–4). John makes the same eyewitness claim (John 21:24; 1 John 1:1–3). These are first-century documents tied to living memory. The Nag Hammadi gospels, by contrast, are second-century compositions with no comparable claim to eyewitness origin and clear dependence on the earlier tradition. Treating them as equal in historical weight ignores both their date and their derivative character.',
      },
    ],
    pastoralNote: 'The "lost gospels" narrative has enormous popular traction — spread by bestselling novels and documentaries — and can leave sincere people convinced the church buried the real Jesus. Rather than reacting defensively, treat it as a genuine historical question with a genuine historical answer: which documents are early and eyewitness-based, and which are late and derivative? Walk through the dating calmly; the facts favor the canonical Gospels decisively. Then move from the documents to the person: the Jesus of the eyewitness Gospels is more compelling, not less, than the disembodied revealer of the Gnostic texts. The real story is better than the "suppressed" one — a God who came openly, in public, in the flesh, and invited the world to see.',
  }
];

export const cultCategories: CultCategoryInfo[] = [
  {
    id: 'jehovahs-witnesses',
    name: 'Jehovah\'s Witnesses',
    description: 'Arian revivals, the Watchtower Society, and the New World Translation',
    icon: '🏢',
    color: 'accent-blue',
    objectionCount: cultObjections.filter(o => o.category === 'jehovahs-witnesses').length
  },
  {
    id: 'lds',
    name: 'Mormonism (LDS)',
    description: 'Joseph Smith, the Book of Mormon, and exaltation theology',
    icon: '📖',
    color: 'accent-gold',
    objectionCount: cultObjections.filter(o => o.category === 'lds').length
  },
  {
    id: 'islam',
    name: 'Islamic Objections',
    description: 'The Quranic view of Jesus (Isa), the crucifixion, and the Trinity',
    icon: '☪️',
    color: 'accent-green',
    objectionCount: cultObjections.filter(o => o.category === 'islam').length
  },
  {
    id: 'oneness-pentecostalism',
    name: 'Oneness Pentecostalism',
    description: 'Modalism, "Jesus Only" baptism, and the denial of the Trinity\'s three Persons',
    icon: '🔥',
    color: 'accent-orange',
    objectionCount: cultObjections.filter(o => o.category === 'oneness-pentecostalism').length
  },
  {
    id: 'christian-science',
    name: 'Christian Science',
    description: 'Mary Baker Eddy\'s denial of physical reality, sin, sickness, and the atonement',
    icon: '✝️',
    color: 'accent-teal',
    objectionCount: cultObjections.filter(o => o.category === 'christian-science').length
  },
  {
    id: 'new-age',
    name: 'New Age Movement',
    description: 'Pantheism, human divinity, spiritual evolution, and the rejection of sin and judgment',
    icon: '🌙',
    color: 'accent-purple',
    objectionCount: cultObjections.filter(o => o.category === 'new-age').length
  },
  {
    id: 'arianism',
    name: 'Arianism',
    description: 'The ancient heresy that the Son is a created being — the theological root of Jehovah\'s Witnesses and similar groups',
    icon: '⚔️',
    color: 'accent-red',
    objectionCount: cultObjections.filter(o => o.category === 'arianism').length
  },
  {
    id: 'gnosticism',
    name: 'Gnosticism',
    description: 'Secret knowledge, the demiurge, the evil material world, and the denial of the incarnation',
    icon: '👁️',
    color: 'accent-indigo',
    objectionCount: cultObjections.filter(o => o.category === 'gnosticism').length
  }
];

export function getCultObjectionsByCategory(category: CultCategory): CultObjection[] {
  return cultObjections.filter(o => o.category === category);
}

export function getCultObjectionBySlug(slug: string): CultObjection | undefined {
  return cultObjections.find(o => o.slug === slug);
}

export function getCultCategoryInfo(id: CultCategory): CultCategoryInfo | undefined {
  return cultCategories.find(c => c.id === id);
}
