import { BibleBook, BibleCanon } from './types';
import { deuterocanonicalBooks } from './books-deuterocanon';

export const bibleBooks: BibleBook[] = [
  // Old Testament — Law
  { id: 'genesis', slug: 'genesis', name: 'Genesis', testament: 'old', chapterCount: 50, order: 1, genre: 'law', summary: 'The origin of the universe, humanity, sin, and the covenant family of Abraham, Isaac, Jacob, and Joseph.' },
  { id: 'exodus', slug: 'exodus', name: 'Exodus', testament: 'old', chapterCount: 40, order: 2, genre: 'law', summary: 'Israel\'s deliverance from Egyptian slavery, the giving of the Law at Sinai, and the construction of the tabernacle.' },
  { id: 'leviticus', slug: 'leviticus', name: 'Leviticus', testament: 'old', chapterCount: 27, order: 3, genre: 'law', summary: 'Priestly law governing sacrifice, purity, and holiness for the covenant nation.' },
  { id: 'numbers', slug: 'numbers', name: 'Numbers', testament: 'old', chapterCount: 36, order: 4, genre: 'law', summary: 'Israel\'s forty years of wilderness wandering between Sinai and the plains of Moab.' },
  { id: 'deuteronomy', slug: 'deuteronomy', name: 'Deuteronomy', testament: 'old', chapterCount: 34, order: 5, genre: 'law', summary: 'Moses\' final addresses renewing the covenant before Israel enters the Promised Land.' },
  // Old Testament — History
  { id: 'joshua', slug: 'joshua', name: 'Joshua', testament: 'old', chapterCount: 24, order: 6, genre: 'history', summary: 'The conquest and division of the land of Canaan under Joshua.' },
  { id: 'judges', slug: 'judges', name: 'Judges', testament: 'old', chapterCount: 21, order: 7, genre: 'history', summary: 'Israel\'s repeated cycle of apostasy, oppression, and deliverance through raised-up judges.' },
  { id: 'ruth', slug: 'ruth', name: 'Ruth', testament: 'old', chapterCount: 4, order: 8, genre: 'history', summary: 'A Moabite widow\'s loyalty and redemption, placing her in the lineage of King David.' },
  { id: '1samuel', slug: '1samuel', name: '1 Samuel', testament: 'old', chapterCount: 31, order: 9, genre: 'history', summary: 'The transition from judges to monarchy, and the rise of Saul and David.' },
  { id: '2samuel', slug: '2samuel', name: '2 Samuel', testament: 'old', chapterCount: 24, order: 10, genre: 'history', summary: 'David\'s reign as king, his triumphs, his sin, and God\'s covenant promise to his house.' },
  { id: '1kings', slug: '1kings', name: '1 Kings', testament: 'old', chapterCount: 22, order: 11, genre: 'history', summary: 'Solomon\'s reign and temple, and the division of the kingdom into Israel and Judah.' },
  { id: '2kings', slug: '2kings', name: '2 Kings', testament: 'old', chapterCount: 25, order: 12, genre: 'history', summary: 'The decline and fall of the divided kingdoms, ending in exile to Assyria and Babylon.' },
  { id: '1chronicles', slug: '1chronicles', name: '1 Chronicles', testament: 'old', chapterCount: 29, order: 13, genre: 'history', summary: 'A priestly retelling of Israel\'s genealogy and David\'s reign, emphasizing covenant and temple.' },
  { id: '2chronicles', slug: '2chronicles', name: '2 Chronicles', testament: 'old', chapterCount: 36, order: 14, genre: 'history', summary: 'The reigns of Solomon and the kings of Judah down to the Babylonian exile.' },
  { id: 'ezra', slug: 'ezra', name: 'Ezra', testament: 'old', chapterCount: 10, order: 15, genre: 'history', summary: 'The return from Babylonian exile and the rebuilding of the temple in Jerusalem.' },
  { id: 'nehemiah', slug: 'nehemiah', name: 'Nehemiah', testament: 'old', chapterCount: 13, order: 16, genre: 'history', summary: 'The rebuilding of Jerusalem\'s walls and the spiritual renewal of the returned exiles.' },
  { id: 'esther', slug: 'esther', name: 'Esther', testament: 'old', chapterCount: 10, order: 17, genre: 'history', summary: 'God\'s hidden providence delivering the Jewish people in Persia through Queen Esther.' },
  // Old Testament — Wisdom
  { id: 'job', slug: 'job', name: 'Job', testament: 'old', chapterCount: 42, order: 18, genre: 'wisdom', summary: 'A righteous man\'s suffering and his wrestling with God over justice and providence.' },
  { id: 'psalms', slug: 'psalms', name: 'Psalms', testament: 'old', chapterCount: 150, order: 19, genre: 'wisdom', summary: 'Israel\'s inspired songbook of praise, lament, thanksgiving, and messianic hope.' },
  { id: 'proverbs', slug: 'proverbs', name: 'Proverbs', testament: 'old', chapterCount: 31, order: 20, genre: 'wisdom', summary: 'Practical wisdom for righteous living, largely attributed to Solomon.' },
  { id: 'ecclesiastes', slug: 'ecclesiastes', name: 'Ecclesiastes', testament: 'old', chapterCount: 12, order: 21, genre: 'wisdom', summary: 'A meditation on the meaninglessness of life "under the sun" apart from God.' },
  { id: 'songofsolomon', slug: 'songofsolomon', name: 'Song of Solomon', testament: 'old', chapterCount: 8, order: 22, genre: 'wisdom', summary: 'A poetic celebration of covenantal love between bride and groom.' },
  // Old Testament — Major Prophets
  { id: 'isaiah', slug: 'isaiah', name: 'Isaiah', testament: 'old', chapterCount: 66, order: 23, genre: 'prophecy', summary: 'Judgment on Judah\'s sin and glorious hope in the coming Messiah and Suffering Servant.' },
  { id: 'jeremiah', slug: 'jeremiah', name: 'Jeremiah', testament: 'old', chapterCount: 52, order: 24, genre: 'prophecy', summary: 'The "weeping prophet" warns Judah of coming judgment and promises a New Covenant.' },
  { id: 'lamentations', slug: 'lamentations', name: 'Lamentations', testament: 'old', chapterCount: 5, order: 25, genre: 'prophecy', summary: 'Poetic laments mourning the destruction of Jerusalem.' },
  { id: 'ezekiel', slug: 'ezekiel', name: 'Ezekiel', testament: 'old', chapterCount: 48, order: 26, genre: 'prophecy', summary: 'Visions of judgment and restoration given to a prophet-priest among the exiles in Babylon.' },
  { id: 'daniel', slug: 'daniel', name: 'Daniel', testament: 'old', chapterCount: 12, order: 27, genre: 'apocalyptic', summary: 'Faithful exiles in Babylon and apocalyptic visions of God\'s coming kingdom.' },
  // Old Testament — Minor Prophets
  { id: 'hosea', slug: 'hosea', name: 'Hosea', testament: 'old', chapterCount: 14, order: 28, genre: 'prophecy', summary: 'God\'s covenant faithfulness pictured through Hosea\'s marriage to an unfaithful wife.' },
  { id: 'joel', slug: 'joel', name: 'Joel', testament: 'old', chapterCount: 3, order: 29, genre: 'prophecy', summary: 'A locust plague becomes the occasion for a call to repentance and the promise of the Spirit.' },
  { id: 'amos', slug: 'amos', name: 'Amos', testament: 'old', chapterCount: 9, order: 30, genre: 'prophecy', summary: 'A shepherd-prophet denounces social injustice and empty religion in Israel.' },
  { id: 'obadiah', slug: 'obadiah', name: 'Obadiah', testament: 'old', chapterCount: 1, order: 31, genre: 'prophecy', summary: 'Judgment pronounced on Edom for its violence against Israel.' },
  { id: 'jonah', slug: 'jonah', name: 'Jonah', testament: 'old', chapterCount: 4, order: 32, genre: 'prophecy', summary: 'A reluctant prophet is sent to call pagan Nineveh to repentance.' },
  { id: 'micah', slug: 'micah', name: 'Micah', testament: 'old', chapterCount: 7, order: 33, genre: 'prophecy', summary: 'Judgment on corrupt leaders and the promise of a ruler born in Bethlehem.' },
  { id: 'nahum', slug: 'nahum', name: 'Nahum', testament: 'old', chapterCount: 3, order: 34, genre: 'prophecy', summary: 'The coming judgment of God on the cruel Assyrian capital, Nineveh.' },
  { id: 'habakkuk', slug: 'habakkuk', name: 'Habakkuk', testament: 'old', chapterCount: 3, order: 35, genre: 'prophecy', summary: 'A prophet questions God\'s justice and learns that "the righteous shall live by faith."' },
  { id: 'zephaniah', slug: 'zephaniah', name: 'Zephaniah', testament: 'old', chapterCount: 3, order: 36, genre: 'prophecy', summary: 'The coming Day of the Lord, judgment and the promise of a purified remnant.' },
  { id: 'haggai', slug: 'haggai', name: 'Haggai', testament: 'old', chapterCount: 2, order: 37, genre: 'prophecy', summary: 'A call to the returned exiles to rebuild the temple.' },
  { id: 'zechariah', slug: 'zechariah', name: 'Zechariah', testament: 'old', chapterCount: 14, order: 38, genre: 'prophecy', summary: 'Visions encouraging the rebuilding of the temple and messianic prophecy.' },
  { id: 'malachi', slug: 'malachi', name: 'Malachi', testament: 'old', chapterCount: 4, order: 39, genre: 'prophecy', summary: 'The last Old Testament prophet rebukes complacent worship and promises a coming messenger.' },
  // New Testament — Gospels
  { id: 'matthew', slug: 'matthew', name: 'Matthew', testament: 'new', chapterCount: 28, order: 40, genre: 'gospel', summary: 'Jesus presented as the promised Jewish Messiah and King, fulfilling the Law and Prophets.' },
  { id: 'mark', slug: 'mark', name: 'Mark', testament: 'new', chapterCount: 16, order: 41, genre: 'gospel', summary: 'A fast-paced account of Jesus as the suffering Servant, emphasizing his actions.' },
  { id: 'luke', slug: 'luke', name: 'Luke', testament: 'new', chapterCount: 24, order: 42, genre: 'gospel', summary: 'A careful historical account of Jesus as Savior for both Jew and Gentile, rich in parables.' },
  { id: 'john', slug: 'john', name: 'John', testament: 'new', chapterCount: 21, order: 43, genre: 'gospel', summary: 'Jesus presented as the eternal Son of God, through signs and "I am" discourses.' },
  // New Testament — History
  { id: 'acts', slug: 'acts', name: 'Acts', testament: 'new', chapterCount: 28, order: 44, genre: 'history', summary: 'The birth and spread of the church from Jerusalem to Rome through the Holy Spirit.' },
  // New Testament — Pauline Epistles
  { id: 'romans', slug: 'romans', name: 'Romans', testament: 'new', chapterCount: 16, order: 45, genre: 'epistle', summary: 'Paul\'s systematic exposition of the gospel: sin, justification by faith, and life in the Spirit.' },
  { id: '1corinthians', slug: '1corinthians', name: '1 Corinthians', testament: 'new', chapterCount: 16, order: 46, genre: 'epistle', summary: 'Correction of division, immorality, and disorder in the church at Corinth.' },
  { id: '2corinthians', slug: '2corinthians', name: '2 Corinthians', testament: 'new', chapterCount: 13, order: 47, genre: 'epistle', summary: 'Paul\'s defense of his apostolic ministry amid suffering and opposition.' },
  { id: 'galatians', slug: 'galatians', name: 'Galatians', testament: 'new', chapterCount: 6, order: 48, genre: 'epistle', summary: 'A defense of justification by faith alone against a return to legalism.' },
  { id: 'ephesians', slug: 'ephesians', name: 'Ephesians', testament: 'new', chapterCount: 6, order: 49, genre: 'epistle', summary: 'The believer\'s riches in Christ and the call to unity and holy living.' },
  { id: 'philippians', slug: 'philippians', name: 'Philippians', testament: 'new', chapterCount: 4, order: 50, genre: 'epistle', summary: 'A letter of joy from prison, centered on Christ\'s humility and exaltation.' },
  { id: 'colossians', slug: 'colossians', name: 'Colossians', testament: 'new', chapterCount: 4, order: 51, genre: 'epistle', summary: 'The supremacy and sufficiency of Christ against early syncretistic error.' },
  { id: '1thessalonians', slug: '1thessalonians', name: '1 Thessalonians', testament: 'new', chapterCount: 5, order: 52, genre: 'epistle', summary: 'Encouragement to a young church, with teaching on the return of Christ.' },
  { id: '2thessalonians', slug: '2thessalonians', name: '2 Thessalonians', testament: 'new', chapterCount: 3, order: 53, genre: 'epistle', summary: 'Correction of confusion about the Day of the Lord and a call to steady work.' },
  { id: '1timothy', slug: '1timothy', name: '1 Timothy', testament: 'new', chapterCount: 6, order: 54, genre: 'epistle', summary: 'Pastoral instruction to a young leader on church order and sound doctrine.' },
  { id: '2timothy', slug: '2timothy', name: '2 Timothy', testament: 'new', chapterCount: 4, order: 55, genre: 'epistle', summary: 'Paul\'s final charge to Timothy to guard the gospel and endure hardship.' },
  { id: 'titus', slug: 'titus', name: 'Titus', testament: 'new', chapterCount: 3, order: 56, genre: 'epistle', summary: 'Instruction on church leadership and sound doctrine producing good works.' },
  { id: 'philemon', slug: 'philemon', name: 'Philemon', testament: 'new', chapterCount: 1, order: 57, genre: 'epistle', summary: 'Paul\'s personal appeal to receive back the runaway slave Onesimus as a brother.' },
  // New Testament — General Epistles
  { id: 'hebrews', slug: 'hebrews', name: 'Hebrews', testament: 'new', chapterCount: 13, order: 58, genre: 'epistle', summary: 'The superiority of Christ\'s person and priesthood over the Old Covenant system.' },
  { id: 'james', slug: 'james', name: 'James', testament: 'new', chapterCount: 5, order: 59, genre: 'epistle', summary: 'Practical wisdom on living out genuine faith through works and endurance.' },
  { id: '1peter', slug: '1peter', name: '1 Peter', testament: 'new', chapterCount: 5, order: 60, genre: 'epistle', summary: 'Encouragement to suffering believers to stand firm as exiles in a hostile world.' },
  { id: '2peter', slug: '2peter', name: '2 Peter', testament: 'new', chapterCount: 3, order: 61, genre: 'epistle', summary: 'A warning against false teachers and an affirmation of Christ\'s certain return.' },
  { id: '1john', slug: '1john', name: '1 John', testament: 'new', chapterCount: 5, order: 62, genre: 'epistle', summary: 'Tests of genuine fellowship with God: truth, obedience, and love.' },
  { id: '2john', slug: '2john', name: '2 John', testament: 'new', chapterCount: 1, order: 63, genre: 'epistle', summary: 'A brief warning to walk in truth and love and to reject false teachers.' },
  { id: '3john', slug: '3john', name: '3 John', testament: 'new', chapterCount: 1, order: 64, genre: 'epistle', summary: 'Commendation of hospitality to traveling gospel workers.' },
  { id: 'jude', slug: 'jude', name: 'Jude', testament: 'new', chapterCount: 1, order: 65, genre: 'epistle', summary: 'An urgent call to contend for the faith against infiltrating false teachers.' },
  // New Testament — Apocalyptic
  { id: 'revelation', slug: 'revelation', name: 'Revelation', testament: 'new', chapterCount: 22, order: 66, genre: 'apocalyptic', summary: 'John\'s apocalyptic vision of Christ\'s ultimate victory and the new creation.' },
];

export { deuterocanonicalBooks };

// All books, including the Catholic Deuterocanon and Eastern Orthodox Anagignoskomena.
export const allBibleBooks: BibleBook[] = [...bibleBooks, ...deuterocanonicalBooks];

export function getBookBySlug(slug: string): BibleBook | undefined {
  return allBibleBooks.find((b) => b.slug === slug);
}

export function getBooksByTestament(testament: 'old' | 'new'): BibleBook[] {
  return bibleBooks.filter((b) => b.testament === testament).sort((a, b) => a.order - b.order);
}

/** Books recognized beyond the 66-book Protestant canon, optionally filtered to one tradition. */
export function getDeuterocanonicalBooks(canon?: BibleCanon): BibleBook[] {
  const books = canon
    ? deuterocanonicalBooks.filter((b) => b.canon?.includes(canon))
    : deuterocanonicalBooks;
  return books.slice().sort((a, b) => a.order - b.order);
}
