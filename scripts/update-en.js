#!/usr/bin/env node

/**
 * Update en.json with all extracted keys
 */

const fs = require('fs');
const path = require('path');

// Read the current en.json
const currentEn = JSON.parse(fs.readFileSync('messages/en.json', 'utf-8'));

// Add component translations
currentEn.components = {
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

// Write the updated en.json
fs.writeFileSync('messages/en.json', JSON.stringify(currentEn, null, 2));

console.log('✅ en.json updated successfully!');
console.log('✨ Added component translations for Footer, Navbar, InterlinearReader, and SemanticDefenseSlideshow');
