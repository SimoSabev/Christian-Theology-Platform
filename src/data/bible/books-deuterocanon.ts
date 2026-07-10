import { BibleBook } from './types';

// Books recognized as Scripture beyond the 66-book Protestant canon.
// Catholics call these the "Deuterocanonical" books; Eastern Orthodox
// Christians call this wider body the "Anagignoskomena." See types.ts
// for the full explanation of each canon tag.
export const deuterocanonicalBooks: BibleBook[] = [
  // Recognized by both Catholic and Orthodox canons
  {
    id: 'tobit', slug: 'tobit', name: 'Tobit', testament: 'old', chapterCount: 14, order: 100,
    genre: 'history', canon: ['catholic', 'orthodox'],
    summary: 'A pious Israelite exile in Nineveh, his son Tobias\'s journey guided by the angel Raphael, and the healing of Sarah — a tale of providence, almsgiving, and family faithfulness.',
  },
  {
    id: 'judith', slug: 'judith', name: 'Judith', testament: 'old', chapterCount: 16, order: 101,
    genre: 'history', canon: ['catholic', 'orthodox'],
    summary: 'A courageous Israelite widow delivers her besieged city by beheading the invading Assyrian general Holofernes.',
  },
  {
    id: 'wisdom', slug: 'wisdom', name: 'Wisdom of Solomon', testament: 'old', chapterCount: 19, order: 102,
    genre: 'wisdom', canon: ['catholic', 'orthodox'],
    summary: 'A meditation on divine Wisdom, the immortality of the righteous soul, and God\'s justice, written in Solomon\'s voice for a Hellenistic Jewish audience.',
  },
  {
    id: 'sirach', slug: 'sirach', name: 'Sirach (Ecclesiasticus)', testament: 'old', chapterCount: 51, order: 103,
    genre: 'wisdom', canon: ['catholic', 'orthodox'],
    summary: 'Extended practical wisdom sayings by Jesus ben Sirach on ethics, friendship, family, and the praise of Israel\'s ancestors.',
  },
  {
    id: 'baruch', slug: 'baruch', name: 'Baruch', testament: 'old', chapterCount: 6, order: 104,
    genre: 'prophecy', canon: ['catholic', 'orthodox'],
    summary: 'Attributed to Jeremiah\'s scribe Baruch: a confession of exile\'s sin, praise of Wisdom, and — as its sixth chapter — the Letter of Jeremiah warning against Babylonian idolatry.',
  },
  {
    id: '1maccabees', slug: '1maccabees', name: '1 Maccabees', testament: 'old', chapterCount: 16, order: 105,
    genre: 'history', canon: ['catholic', 'orthodox'],
    summary: 'The Jewish revolt of the Maccabee family against Seleucid oppression and the rededication of the Jerusalem Temple, commemorated at Hanukkah.',
  },
  {
    id: '2maccabees', slug: '2maccabees', name: '2 Maccabees', testament: 'old', chapterCount: 15, order: 106,
    genre: 'history', canon: ['catholic', 'orthodox'],
    summary: 'A theological retelling of the Maccabean revolt, containing some of the clearest Old Testament affirmations of bodily resurrection and prayer for the dead.',
  },
  // Recognized only by the Eastern Orthodox Anagignoskomena (beyond the Catholic seven)
  {
    id: '1esdras', slug: '1esdras', name: '1 Esdras', testament: 'old', chapterCount: 9, order: 107,
    genre: 'history', canon: ['orthodox'],
    summary: 'A Greek retelling overlapping Ezra-Nehemiah and 2 Chronicles, including an added tale of three royal bodyguards debating the greatest power on earth.',
  },
  {
    id: 'prayer-of-manasseh', slug: 'prayer-of-manasseh', name: 'Prayer of Manasseh', testament: 'old', chapterCount: 1, order: 108,
    genre: 'wisdom', canon: ['orthodox'],
    summary: 'A brief penitential prayer attributed to the wicked king Manasseh after his captivity in Babylon (2 Chronicles 33:11-13).',
  },
  {
    id: 'psalm151', slug: 'psalm151', name: 'Psalm 151', testament: 'old', chapterCount: 1, order: 109,
    genre: 'wisdom', canon: ['orthodox'],
    summary: 'A short additional psalm on David\'s anointing and defeat of Goliath, appended to the Psalter in the Greek and Slavonic traditions.',
  },
  {
    id: '3maccabees', slug: '3maccabees', name: '3 Maccabees', testament: 'old', chapterCount: 7, order: 110,
    genre: 'history', canon: ['orthodox'],
    summary: 'Recounts a persecution of Egyptian Jews under Ptolemy IV and their deliverance — despite its title, unrelated to the Maccabean revolt of 1-2 Maccabees.',
  },
  // Printed as a non-liturgical appendix in Slavonic Bibles only
  {
    id: '2esdras', slug: '2esdras', name: '2 Esdras (4 Ezra)', testament: 'old', chapterCount: 16, order: 111,
    genre: 'apocalyptic', canon: ['orthodox-appendix'],
    summary: 'Jewish apocalyptic visions wrestling with theodicy and the end times; printed as an appendix in Slavonic Bibles but not read liturgically.',
  },
  {
    id: '4maccabees', slug: '4maccabees', name: '4 Maccabees', testament: 'old', chapterCount: 18, order: 112,
    genre: 'wisdom', canon: ['orthodox-appendix'],
    summary: 'A philosophical treatise on reason\'s mastery over passion, illustrated by the martyrdoms of Eleazar and the seven brothers; printed as an appendix in Greek and Slavonic Bibles.',
  },
];
