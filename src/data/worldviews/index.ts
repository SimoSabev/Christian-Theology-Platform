import { Worldview } from './types';
export type { Worldview, WorldviewCategory } from './types';

export const worldviews: Worldview[] = [
  {
    id: 'islam',
    slug: 'islam',
    name: 'Islam',
    category: 'religion',
    founder: 'Muhammad ibn Abdullah',
    dateFounded: '610 AD (first revelation); 622 AD (Hijra, founding of the Islamic community)',
    sacredTexts: ['The Quran', 'The Hadith (sayings and deeds of Muhammad)', 'The Sunnah'],
    beliefs: {
      god: 'Strict tawhid (absolute divine unity): Allah is one, indivisible, and without partners. The Trinity is condemned as shirk (polytheism). Allah is transcendent and does not have a Son.',
      afterlife: 'Paradise (Jannah) for the faithful — a physical garden of pleasure. Hell (Jahannam) for the wicked and unbelievers. Entry is determined by the weight of deeds on the scales of justice, with Allah\'s mercy as an additional factor.',
      salvation: 'There is no concept of original sin or substitutionary atonement. Salvation (falah) is achieved through submission to Allah, performance of the Five Pillars, and accumulation of righteous deeds. No assurance of salvation is possible.',
      ethics: 'Sharia (Islamic law) governs all of life. Derived from Quran and Hadith. Emphasis on submission, justice, and community. No separation of religion and state in classical Islam.',
    },
    estimatedMembership: '1.8–2 billion worldwide (2024 estimate)',
    majorBranches: ['Sunni (85–90%)', 'Shia (10–15%)', 'Sufi (mystical tradition within both)', 'Ibadi (small branch in Oman)', 'Ahmadiyya (considered non-Muslim by mainstream)'],
    geographicConcentration: ['Middle East and North Africa', 'South Asia (Pakistan, Bangladesh, India)', 'Southeast Asia (Indonesia, Malaysia)', 'Sub-Saharan Africa', 'Central Asia'],
    keyDifferencesFromChristianity: [
      { issue: 'Nature of God', christianity: 'One God eternally existing in three Persons (Trinity)', thisWorldview: 'Allah is absolutely one; the Trinity is shirk (polytheism)' },
      { issue: 'Identity of Jesus', christianity: 'Jesus is fully God and fully man, the eternal Son of God', thisWorldview: 'Isa (Jesus) is a human prophet, not divine; He did not die on the cross (Quran 4:157)' },
      { issue: 'Atonement', christianity: 'Christ\'s death on the cross is the only basis of salvation', thisWorldview: 'There is no atonement; sin is forgiven by Allah\'s mercy and human repentance and deeds' },
      { issue: 'Scripture', christianity: 'The Bible (Old and New Testaments) is the complete, reliable Word of God', thisWorldview: 'The Quran supersedes all previous scriptures; the Bible has been corrupted (tahrif)' },
      { issue: 'Resurrection', christianity: 'Christ rose bodily from the dead — the central fact of the faith', thisWorldview: 'Jesus did not die; therefore no resurrection; someone else (possibly Judas) was crucified' },
    ],
    apologeticIssues: [
      {
        topic: 'The Crucifixion Denial',
        objection: 'The Quran (4:157) states that Jesus was not crucified; it only appeared so. Therefore, the historical foundation of Christianity is false.',
        response: 'The crucifixion of Jesus is among the most historically attested facts of antiquity, accepted by virtually all critical historians — Jewish, pagan, and Christian sources from the 1st and 2nd centuries (Tacitus, Josephus, the Talmud). The Quranic denial, written 600 years after the event, cannot override this convergent historical testimony. See: N.T. Wright, The Resurrection of the Son of God.',
      },
      {
        topic: 'The Reliability of the Bible (Tahrif)',
        objection: 'The Bible has been corrupted (tahrif). The original Torah and Gospel (Injil) said what the Quran says, but Jews and Christians changed them.',
        response: 'The manuscript evidence for the New Testament (5,800+ Greek manuscripts) predates Muhammad by centuries and shows extraordinary textual consistency. The charge of corruption cannot be sustained historically — the Dead Sea Scrolls confirm the OT\'s integrity since 250 BC. The Quran itself affirms that the Torah and Gospel are trustworthy (Quran 5:46–47). See: F.F. Bruce, The New Testament Documents.',
      },
    ],
    sources: [
      'Norman Geisler & Abdul Saleeb, Answering Islam (Baker, 1993)',
      'James White, What Every Christian Needs to Know About the Quran (Bethany House, 2013)',
      'Ravi Zacharias, Light in the Shadow of Jihad (Multnomah, 2002)',
      'The Quran (various translations)',
    ],
  },
  {
    id: 'judaism',
    slug: 'judaism',
    name: 'Judaism',
    category: 'religion',
    founder: 'Abraham (patriarchal origins, c. 2000 BC); Moses (Mosaic covenant, c. 1446 BC). Rabbinic Judaism emerged after the destruction of the Temple (70 AD).',
    dateFounded: 'c. 2000 BC (Abrahamic covenant); formalized under Moses c. 1446 BC',
    sacredTexts: ['The Tanakh (Torah, Nevi\'im, Ketuvim — the Hebrew Bible)', 'The Talmud (Mishnah + Gemara)', 'The Midrash', 'Works of Maimonides and other rabbinical authorities'],
    beliefs: {
      god: 'Strict monotheism (Echad — absolute unity). YHWH is the one God of Israel, personal, covenant-keeping, and holy. The Trinity is rejected as incompatible with monotheism.',
      afterlife: 'Varied views. Traditional Judaism affirms bodily resurrection and a world to come (Olam Ha-Ba). Reform and Liberal Judaism often de-emphasize or allegorize this. Gehinnom (temporary purgatory) and Garden of Eden (reward) are classical categories.',
      salvation: 'Covenant faithfulness through Torah observance and repentance (teshuvah). Atonement through the Yom Kippur (Day of Atonement) liturgy and sincere repentance, especially after the Temple\'s destruction. No need for a mediator-savior.',
      ethics: 'The 613 commandments (mitzvot) of the Torah govern all of life. Emphasis on justice (tzedakah), loving-kindness (chesed), and repair of the world (tikkun olam).',
    },
    estimatedMembership: '14–15 million worldwide (2024 estimate)',
    majorBranches: ['Orthodox Judaism (strict halakhic observance)', 'Conservative/Masorti Judaism', 'Reform/Liberal Judaism', 'Reconstructionist Judaism', 'Messianic Judaism (accepted Jesus as Messiah — disputed by mainstream Judaism)'],
    geographicConcentration: ['Israel (7.2 million)', 'United States (6–7 million)', 'France', 'Canada', 'United Kingdom', 'Argentina'],
    keyDifferencesFromChristianity: [
      { issue: 'Messianic Expectation', christianity: 'Jesus of Nazareth fulfilled the Messianic prophecies and is the promised Messiah', thisWorldview: 'The Messiah has not yet come; Jesus did not fulfill the required criteria (Temple rebuilt, world peace, ingathering of exiles)' },
      { issue: 'Atonement', christianity: 'Atonement requires blood sacrifice; Christ is the final sacrifice (Hebrews 9–10)', thisWorldview: 'After 70 AD, prayer, repentance, and deeds of kindness replace sacrifice for atonement (Hosea 6:6)' },
      { issue: 'New Testament', christianity: 'The New Testament is the divinely inspired fulfillment and completion of the Hebrew Scriptures', thisWorldview: 'The New Testament is not Scripture; the Oral Torah (Talmud) is the authoritative interpretation of the written Torah' },
      { issue: 'Nature of Sin', christianity: 'Humans are fallen in Adam and require a supernatural redemption', thisWorldview: 'Humans have a good inclination (yetzer hatov) and evil inclination (yetzer hara); sin is manageable through Torah observance' },
    ],
    apologeticIssues: [
      {
        topic: 'Isaiah 53 and the Suffering Servant',
        objection: 'Isaiah 53 refers to the nation of Israel, not an individual Messiah. The servant who suffers is the Jewish people suffering for the sins of the nations.',
        response: 'The singular masculine pronouns, the substitutionary language ("wounded for our transgressions"), and the servant\'s sinlessness all point to an individual. The Targum and early rabbinic sources identified the Servant as the Messiah before the polemic against Christian use of the text developed. The New Testament application is the most natural reading of the Hebrew. See: Michael Brown, Answering Jewish Objections to Jesus.',
      },
    ],
    sources: [
      'Michael Brown, Answering Jewish Objections to Jesus, 5 vols. (Baker, 2000–2010)',
      'Arnold Fruchtenbaum, Jesus Was a Jew (Ariel Ministries, 1974)',
      'Alfred Edersheim, The Life and Times of Jesus the Messiah (1883)',
      'Walter Kaiser, The Messiah in the Old Testament (Zondervan, 1995)',
    ],
  },
  {
    id: 'buddhism',
    slug: 'buddhism',
    name: 'Buddhism',
    category: 'religion',
    founder: 'Siddhartha Gautama (the Buddha, "the Awakened One")',
    dateFounded: 'c. 5th–4th century BC, in the Gangetic Plain of northeastern India',
    sacredTexts: ['Tipitaka (Pali Canon — Theravada)', 'Mahayana Sutras (including the Prajnaparamita and Lotus Sutra)', 'Tibetan Book of the Dead (Vajrayana)'],
    beliefs: {
      god: 'In most forms, Buddhism is non-theistic — there is no creator God, no personal deity who answers prayer. The Buddha is revered as an enlightened teacher, not a savior-god. Some Mahayana traditions (e.g., Pure Land) attribute quasi-divine qualities to celestial Buddhas and Bodhisattvas.',
      afterlife: 'Samsara: the cycle of death and rebirth (reincarnation) governed by karma. The goal is Nirvana — the extinguishing of craving and the self, thus ending the cycle. Nirvana is not a personal heaven but the cessation of individual existence.',
      salvation: 'No concept of salvation by a savior. Liberation (moksha/nirvana) is achieved by following the Noble Eightfold Path, which leads to the extinguishing of desire and the ending of suffering (dukkha).',
      ethics: 'The Five Precepts (no killing, stealing, sexual misconduct, lying, intoxicants). Emphasis on compassion (karuna), non-violence (ahimsa), and the Middle Way between asceticism and indulgence.',
    },
    estimatedMembership: '500–600 million worldwide (2024 estimate)',
    majorBranches: ['Theravada ("Way of the Elders" — Southeast Asia)', 'Mahayana ("Great Vehicle" — East Asia)', 'Vajrayana/Tibetan Buddhism', 'Zen Buddhism (a Mahayana school)', 'Pure Land Buddhism'],
    geographicConcentration: ['East Asia (China, Japan, Korea)', 'Southeast Asia (Thailand, Myanmar, Sri Lanka)', 'Tibet and Central Asia', 'Growing Western convert communities'],
    keyDifferencesFromChristianity: [
      { issue: 'God', christianity: 'A personal, triune God who created the universe and is actively involved in history', thisWorldview: 'No personal creator God; reality is impersonal; theism is a distraction from the path to liberation' },
      { issue: 'The Self', christianity: 'Humans are persons made in God\'s image, whose individual identity persists eternally', thisWorldview: 'Anatta (no-self): the individual self is an illusion; liberation involves its dissolution' },
      { issue: 'Salvation', christianity: 'Salvation is a free gift received through faith in Christ\'s atoning work', thisWorldview: 'Liberation is achieved by self-effort through the Eightfold Path; there is no savior and no grace' },
      { issue: 'Suffering', christianity: 'Suffering is the result of the Fall and will be ultimately resolved in the new creation', thisWorldview: 'Suffering (dukkha) is caused by desire (tanha); elimination of desire ends suffering' },
    ],
    sources: [
      'Ravi Zacharias, The Lotus and the Cross (Multnomah, 2001)',
      'Dean Halverson, ed., The Illustrated Guide to World Religions (Bethany House, 1996)',
      'Norman Anderson, The World\'s Religions (IVP, 1991)',
    ],
  },
  {
    id: 'hinduism',
    slug: 'hinduism',
    name: 'Hinduism',
    category: 'religion',
    founder: 'No single founder. The oldest stratum (Vedic religion) developed in the Indus Valley, c. 1500–1200 BC.',
    dateFounded: 'c. 1500 BC (Vedic period); the term "Hinduism" is a 19th-century Western umbrella concept',
    sacredTexts: ['The Vedas (Rigveda, Samaveda, Yajurveda, Atharvaveda)', 'The Upanishads', 'The Bhagavad Gita', 'The Ramayana', 'The Mahabharata', 'The Puranas'],
    beliefs: {
      god: 'Highly pluralistic. Ranges from strict monism (Advaita Vedanta: Brahman is the only ultimate reality; individual souls and the material world are maya/illusion) to polytheism (330 million deities) to devotional theism (Vaishnavism, Shaivism). Most Hindus are functionally henotheistic or polytheistic.',
      afterlife: 'Samsara (cycle of rebirth) governed by karma. The goal is moksha — liberation from the cycle of rebirth. The nature of moksha varies: in Advaita, the individual soul (atman) merges into Brahman; in devotional Hinduism, it may be eternal fellowship with a deity.',
      salvation: 'Moksha is achieved through various paths (margas): jnana (knowledge), bhakti (devotion), karma (works/right action), and raja (meditation/yoga). No concept of a savior who atones for sin — each soul works out its own liberation across many lifetimes.',
      ethics: 'Dharma (cosmic and moral order, righteous duty) guides ethical life. The caste system (though contested) traditionally governed social ethics. Ahimsa (non-violence) is a widely shared value. Ethics are highly context-dependent rather than universal.',
    },
    estimatedMembership: '1.1–1.2 billion worldwide (2024 estimate)',
    majorBranches: ['Vaishnavism (devotion to Vishnu/Krishna)', 'Shaivism (devotion to Shiva)', 'Shaktism (devotion to the Goddess)', 'Smartism (non-sectarian, Advaita-influenced)'],
    geographicConcentration: ['India (primary homeland)', 'Nepal', 'Indonesia (Bali)', 'Diaspora communities globally (UK, USA, Canada, Caribbean)'],
    keyDifferencesFromChristianity: [
      { issue: 'God', christianity: 'One personal God, the Creator, distinct from and sovereign over His creation', thisWorldview: 'Brahman is the impersonal ultimate reality; the personal gods are manifestations; creation may be maya (illusion)' },
      { issue: 'Sin and Guilt', christianity: 'Sin is rebellion against a holy personal God requiring atonement', thisWorldview: 'No concept of sin as moral guilt before a personal God; karma is an impersonal law of cause and effect' },
      { issue: 'Salvation', christianity: 'Salvation is a free gift through Christ\'s atoning death, received by faith', thisWorldview: 'Liberation is earned through lifetimes of spiritual effort; there is no grace in the evangelical sense' },
      { issue: 'Jesus', christianity: 'Jesus is uniquely the eternal Son of God, the only mediator between God and humanity', thisWorldview: 'Jesus may be acknowledged as an avatar or enlightened teacher, one among many manifestations of the divine' },
    ],
    sources: [
      'Ravi Zacharias, The Lotus and the Cross (Multnomah, 2001)',
      'Ravi Zacharias, Jesus Among Other Gods (Word Publishing, 2000)',
      'Dean Halverson, ed., The Illustrated Guide to World Religions (Bethany House, 1996)',
      'Josh McDowell & Don Stewart, Handbook of Today\'s Religions (Thomas Nelson, 1983)',
    ],
  },
  {
    id: 'atheism-naturalism',
    slug: 'atheism-naturalism',
    name: 'Atheism / Naturalism',
    category: 'secular',
    founder: 'No single founder; philosophical antecedents include Democritus (c. 460 BC), David Hume, and Bertrand Russell. Modern New Atheism: Richard Dawkins, Christopher Hitchens, Sam Harris, Daniel Dennett.',
    dateFounded: 'Ancient roots; as a coherent intellectual movement, largely a product of the European Enlightenment (18th century) and Darwinian evolution (1859 onward).',
    sacredTexts: ['No sacred texts; representative works include Charles Darwin\'s On the Origin of Species (1859)', 'Richard Dawkins, The God Delusion (2006)', 'Sam Harris, The End of Faith (2004)'],
    beliefs: {
      god: 'There is no God or supernatural being. The universe is a closed system of natural causes. Reality consists entirely of matter-energy operating under natural laws (physicalism/materialism).',
      afterlife: 'No afterlife. Consciousness is a product of brain activity and ceases at death. Personal identity is dissolved with the death of the body.',
      salvation: 'No salvation needed or available. Human flourishing is achieved through reason, science, and humanistic ethics. Moral progress is the collective improvement of human civilization.',
      ethics: 'Typically grounded in evolutionary ethics, utilitarian calculus, or social contract theory. Objective moral values are either denied (moral relativism) or grounded in human flourishing and rational consensus.',
    },
    estimatedMembership: '1–1.2 billion self-identified non-religious (atheist, agnostic, secular) worldwide; significant internal variation',
    majorBranches: ['Philosophical atheism (academic/analytical)', 'New Atheism (popular/anti-religious)', 'Secular Humanism', 'Agnosticism (withholding judgment)'],
    geographicConcentration: ['Western Europe (especially Scandinavia, Czech Republic)', 'China (state atheism)', 'East Asia', 'Growing in North America and Australia'],
    keyDifferencesFromChristianity: [
      { issue: 'God\'s existence', christianity: 'God is a self-existent, personal, omnipotent creator who sustains all things', thisWorldview: 'No God exists; the universe is self-sufficient and ultimately unexplained or uncaused' },
      { issue: 'The origin of the universe', christianity: 'God created the universe ex nihilo; the universe had a beginning and requires a transcendent cause', thisWorldview: 'The universe either had no cause (brute fact) or arose from quantum fluctuations in a pre-existing vacuum' },
      { issue: 'Morality', christianity: 'Objective moral values are grounded in the character of a holy, personal God', thisWorldview: 'Morality is either an evolved adaptation with no objective grounding, or is grounded in human reason and flourishing' },
      { issue: 'Meaning and purpose', christianity: 'Human life has transcendent meaning derived from being created in God\'s image and living in relation to Him', thisWorldview: 'Meaning is self-created or discovered; the universe has no inherent purpose' },
    ],
    apologeticIssues: [
      {
        topic: 'The Problem of Evil',
        objection: 'The existence of gratuitous evil and suffering is incompatible with the existence of an all-good, all-powerful God.',
        response: 'The logical problem of evil (Mackie) has been answered by Alvin Plantinga\'s Free Will Defense, which shows that God and moral evil are logically compatible. The evidential problem concedes that God and evil are compossible but argues that gratuitous evil is improbable given theism. Christians respond that God can permit evil for goods that finite humans cannot always perceive, and the redemption narrative culminates in the defeat of evil (Romans 8:18; Revelation 21:4). See: Alvin Plantinga, God, Freedom, and Evil.',
      },
      {
        topic: 'The Kalam Cosmological Argument',
        objection: 'The universe may be eternal or self-caused; quantum mechanics shows that causation may not apply at the cosmic scale.',
        response: 'The Borde-Guth-Vilenkin theorem (2003) demonstrates that any universe with a net positive expansion must have a beginning, regardless of what preceded it. Quantum "fluctuations" require a pre-existing quantum vacuum with specific physical properties — these cannot be "nothing." See: William Lane Craig, Reasonable Faith.',
      },
    ],
    sources: [
      'William Lane Craig, Reasonable Faith, 3rd ed. (Crossway, 2008)',
      'Alvin Plantinga, God, Freedom, and Evil (Eerdmans, 1974)',
      'C.S. Lewis, Mere Christianity (Geoffrey Bles, 1952)',
      'Frank Turek & Norman Geisler, I Don\'t Have Enough Faith to Be an Atheist (Crossway, 2004)',
    ],
  },
  {
    id: 'mormonism',
    slug: 'mormonism',
    name: 'Mormonism (The Church of Jesus Christ of Latter-day Saints)',
    category: 'religion',
    founder: 'Joseph Smith Jr.',
    dateFounded: '1830, in Fayette, New York',
    sacredTexts: ['The Book of Mormon ("Another Testament of Jesus Christ")', 'Doctrine and Covenants', 'The Pearl of Great Price', 'The King James Bible ("as far as it is translated correctly")'],
    beliefs: {
      god: 'Finite polytheism. God the Father (Elohim) is an exalted, glorified man with a physical body of flesh and bones. Jesus and the Holy Spirit are separate gods. God was once as man is now, and man may become as God is (Lorenzo Snow couplet). The Bible\'s infinite, incorporeal God is explicitly rejected.',
      afterlife: 'Three degrees of glory: Celestial (highest, for faithful Mormons), Terrestrial (honorable non-Mormons), and Telestial (wicked). Outer Darkness reserved for apostates. Eternal progression: the exalted in the Celestial kingdom may become gods and procreate spirit children.',
      salvation: 'General salvation (resurrection) is free to all through Christ. Exaltation (becoming gods) requires faith, repentance, baptism by LDS authority, confirmation, temple ordinances, and obedience to LDS law. No eternal security.',
      ethics: 'The Word of Wisdom (no tea, coffee, alcohol, tobacco), law of chastity, tithing, temple attendance. Emphasis on family, community, and missionary service.',
    },
    estimatedMembership: '17 million members on LDS records; approximately 7–8 million active practitioners (2024 estimate)',
    majorBranches: ['The Church of Jesus Christ of Latter-day Saints (Utah — dominant)', 'Community of Christ (formerly RLDS)', 'Fundamentalist LDS (polygamy-practicing splinter groups)'],
    geographicConcentration: ['Western United States (especially Utah)', 'Latin America (fastest-growing region)', 'Pacific Islands', 'Growing worldwide missions'],
    keyDifferencesFromChristianity: [
      { issue: 'God', christianity: 'God is eternal, infinite, incorporeal Spirit — the uncreated Creator', thisWorldview: 'God the Father is an exalted man with a physical body; was once mortal; is finite and progressing' },
      { issue: 'Jesus Christ', christianity: 'Jesus is the eternal, uncreated Son of God, of one substance with the Father (homoousios)', thisWorldview: 'Jesus is a separate god, the firstborn spirit child of Heavenly Father and Mother in Heaven; was Lucifer\'s brother in a pre-mortal existence' },
      { issue: 'Scripture and Revelation', christianity: 'The 66 books of the Bible are the complete, closed canon of Scripture', thisWorldview: 'The Bible is incomplete and corrupted; the Book of Mormon and ongoing prophetic revelation supplement and supersede it' },
      { issue: 'Exaltation', christianity: 'Humans are creatures who will be glorified but never become divine beings equal to God', thisWorldview: 'Faithful Mormons may achieve exaltation — becoming gods, creating worlds, and procreating spirit children eternally' },
    ],
    apologeticIssues: [
      {
        topic: 'The Book of Mormon and Archaeology',
        objection: 'The LDS Church claims the Book of Mormon is a historical record of ancient civilizations in the Americas.',
        response: 'No archaeological, genetic, or linguistic evidence supports the existence of the Nephite or Lamanite peoples as described. The Smithsonian Institution has formally stated that it does not use the Book of Mormon as a guide to archaeology. DNA evidence consistently shows that Native Americans descend from Asian ancestry, not Middle Eastern Hebraic peoples. See: Thomas Murphy, "Lamanite Genesis, Genealogy, and Genetics"; Simon Southerton, Losing a Lost Tribe.',
      },
    ],
    sources: [
      'James White, Is the Mormon My Brother? (Bethany House, 1997)',
      'Walter Martin, The Kingdom of the Cults (Bethany House, 1965; updated ed.)',
      'Bill McKeever & Eric Johnson, Mormonism 101 (Baker, 2000)',
      'Jerald and Sandra Tanner, The Changing World of Mormonism (Moody, 1981)',
    ],
  },
];

export function getWorldviewBySlug(slug: string): Worldview | undefined {
  return worldviews.find(w => w.slug === slug);
}

export function getWorldviewsByCategory(category: Worldview['category']): Worldview[] {
  return worldviews.filter(w => w.category === category);
}
