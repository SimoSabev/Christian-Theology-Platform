#!/usr/bin/env node

/**
 * Copy en.json structure to all 26 locale files
 */

const fs = require('fs');
const path = require('path');

// Read the English message file
const enJson = JSON.parse(fs.readFileSync('messages/en.json', 'utf-8'));

// Add components section to en.json
enJson.components = {
  interlinearReader: {
    transliteration: 'Transliteration',
    gloss: 'Gloss',
    lemma: 'Lemma',
    parsing: 'Parsing',
    fullParsing: 'Full Parsing',
    strongs: 'Strong\'s'
  },
  semanticSlideShow: {
    vs: 'vs'
  },
  footer: {
    nav: {
      cosmological: 'Cosmological',
      ontological: 'Ontological',
      teleological: 'Teleological',
      moral: 'Moral',
      historical: 'Historical',
      orthodoxy: 'Eastern Orthodoxy',
      catholicism: 'Roman Catholicism',
      protestantism: 'Protestantism',
      sideBySide: 'Side-by-Side Tool',
      manuscripts: 'Manuscripts',
      churchFathers: 'Church Fathers',
      councilsCreeds: 'Councils & Creeds',
      argumentTree: 'Argument Tree',
      debateMode: 'Debate Mode',
      timeline: 'Timeline'
    },
    copyright: 'Built with ❤️ for the study of theology'
  },
  navbar: {
    brandName: 'Theology Study',
    searchPlaceholder: 'Start typing to search arguments, sources, and doctrines...'
  }
};

// Write updated en.json
fs.writeFileSync('messages/en.json', JSON.stringify(enJson, null, 2));

// List of all locales to copy to
const locales = [
  'es', 'pt', 'fr', 'de', 'it', 'nl',
  'ru', 'uk', 'ro', 'pl', 'el', 'bg',
  'ar', 'am', 'sw',
  'ko', 'zh-CN', 'zh-TW', 'ja',
  'hi', 'id', 'fil', 'vi', 'tr', 'fa'
];

// Copy structure to all locales (will be translated manually)
locales.forEach(locale => {
  const localePath = `messages/${locale}.json`;
  const localeJson = JSON.parse(fs.readFileSync(localePath, 'utf-8'));

  // Copy the components section
  localeJson.components = JSON.parse(JSON.stringify(enJson.components));

  // Write the locale file
  fs.writeFileSync(localePath, JSON.stringify(localeJson, null, 2));

  console.log(`✅ Copied structure to ${locale}.json`);
});

console.log('\n✨ Structure copied to all 26 locales!');
console.log('📝 Next step: Translate the content in each locale file');
