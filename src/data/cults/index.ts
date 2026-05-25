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
