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
    semanticDefenseIds: ['sd-john1-1', 'sd-col-1-15', 'sd-john-8-58']
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
    semanticDefenseIds: ['sd-holy-spirit-person', 'sd-acts-13-2']
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
    semanticDefenseIds: ['sd-lds-bom-archaeology', 'sd-lds-dna']
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
    semanticDefenseIds: ['sd-lds-exaltation', 'sd-isaiah-43-10']
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
    semanticDefenseIds: ['sd-islam-crucifixion', 'sd-tacitus-annals']
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
    semanticDefenseIds: ['sd-trinity-not-tritheism', 'sd-matthew-28-19']
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
    semanticDefenseIds: ['sd-matthew-3-16', 'sd-trinity-modalism']
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
