#!/usr/bin/env node

/**
 * Copy en.json structure to all 26 locale files
 */

const fs = require('fs');
const path = require('path');

// Read the English message file
const enJson = JSON.parse(fs.readFileSync('messages/en.json', 'utf-8'));

// List of all locales to copy to
const locales = [
  'es', 'pt', 'fr', 'de', 'it', 'nl',
  'ru', 'uk', 'ro', 'pl', 'el', 'bg',
  'ar', 'am', 'sw',
  'ko', 'zh-CN', 'zh-TW', 'ja',
  'hi', 'id', 'fil', 'vi', 'tr', 'fa'
];

function deepMergeKeepExisting(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMergeKeepExisting(target[key], source[key]);
    } else {
      // Keep existing translation, otherwise apply English source
      if (!(key in target) || target[key] === null || target[key] === undefined) {
        target[key] = source[key];
      }
    }
  }
}

// Copy structure to all locales
locales.forEach(locale => {
  const localePath = `messages/${locale}.json`;
  let localeJson = {};
  if (fs.existsSync(localePath)) {
    localeJson = JSON.parse(fs.readFileSync(localePath, 'utf-8'));
  }

  // Deep merge enJson into localeJson while keeping existing translated values
  deepMergeKeepExisting(localeJson, enJson);

  // Write the locale file
  fs.writeFileSync(localePath, JSON.stringify(localeJson, null, 2));

  console.log(`✅ Copied structure and new keys to ${locale}.json`);
});

console.log('\n✨ Structure copied to all 26 locales!');
console.log('📝 Next step: Translate the content in each locale file');