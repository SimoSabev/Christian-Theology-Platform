#!/usr/bin/env node

/**
 * i18n Key Extraction Script
 *
 * Scans the codebase for hardcoded user-facing text and generates translation keys.
 * Creates a comprehensive message structure for all 26 locales.
 */

const fs = require('fs');
const path = require('path');

/**
 * Scan a file for hardcoded text patterns
 */
function extractKeysFromFile(filePath) {
  const keys = [];
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    // Skip comments and imports
    if (line.trim().startsWith('//') || line.trim().startsWith('*') ||
        line.includes('import') || line.includes('export')) {
      return;
    }

    // Extract string literals
    const stringMatches = line.matchAll(/['"`]([^'"`]+)['"`]/g);
    for (const match of stringMatches) {
      const value = match[1].trim();
      if (!value) continue;

      // Skip technical strings (dates, IDs, paths)
      if (value.match(/^[a-z0-9-]+$/i) || value.match(/^\d+$/)) {
        continue;
      }

      // Skip very short technical terms
      if (value.length < 3) continue;

      // Categorize the key based on context
      const category = categorizeKey(value, filePath);

      // Generate a key name
      const key = generateKeyName(category, value, filePath);

      keys.push({
        key,
        value,
        filePath,
        lineNumber: index + 1,
        category
      });
    }
  });

  return keys;
}

/**
 * Categorize a key based on context and file path
 */
function categorizeKey(value, filePath) {
  // Check if the file path contains specific patterns
  if (filePath.includes('arguments')) {
    return 'data.arguments';
  }
  if (filePath.includes('manuscripts')) {
    return 'data.manuscripts';
  }
  if (filePath.includes('cults')) {
    return 'data.cults';
  }
  if (filePath.includes('semantic-defense')) {
    return 'data.semantic-defense';
  }

  // Check for common patterns in the value
  const lowerValue = value.toLowerCase();

  if (lowerValue.includes('title') || lowerValue.includes('name')) {
    return 'common.title';
  }
  if (lowerValue.includes('description') || lowerValue.includes('desc')) {
    return 'common.description';
  }
  if (lowerValue.includes('search') || lowerValue.includes('find')) {
    return 'common.search';
  }
  if (lowerValue.includes('close') || lowerValue.includes('cancel') || lowerValue.includes('back')) {
    return 'common.buttons';
  }
  if (lowerValue.includes('defend') || lowerValue.includes('argument') || lowerValue.includes('proposition')) {
    return 'defend';
  }
  if (lowerValue.includes('compare') || lowerValue.includes('tradition')) {
    return 'compare';
  }
  if (lowerValue.includes('source') || lowerValue.includes('manuscript') || lowerValue.includes('document')) {
    return 'sources';
  }

  return 'common';
}

/**
 * Generate a translation key name from the value and file path
 */
function generateKeyName(category, value, filePath) {
  // Extract file name (without extension)
  const fileName = path.basename(filePath, path.extname(filePath));
  const cleanFileName = fileName.replace(/[-_]/g, '');

  // Extract a meaningful portion from the value
  const valueWords = value.split(' ')
    .filter(word => word.length > 2)
    .slice(0, 3) // Take first 3 words
    .map(word => word.toLowerCase())
    .join('-');

  // Generate the key
  const key = `${category}.${cleanFileName}.${valueWords}`;

  return key;
}

/**
 * Scan all data files in the src directory
 */
function scanDataFiles(baseDir) {
  const keys = [];
  const categories = new Set();

  // Define files to scan
  const filesToScan = [
    'src/data/arguments/cosmological.ts',
    'src/data/arguments/ontological.ts',
    'src/data/arguments/teleological-moral-historical.ts',
    'src/data/manuscripts/codexes.ts',
    'src/data/manuscripts/papyri.ts',
    'src/data/manuscripts/papyri-additional.ts',
    'src/data/manuscripts/other-documents.ts',
    'src/data/cults/index.ts',
    'src/data/semantic-defense/arguments.ts',
    'src/data/semantic-defense/arguments-nt-advanced.ts',
    'src/data/semantic-defense/arguments-ot-nt.ts',
    'src/data/semantic-defense/tutorial.ts'
  ];

  filesToScan.forEach(filePath => {
    const fullPath = path.join(baseDir, filePath);
    if (fs.existsSync(fullPath)) {
      const fileKeys = extractKeysFromFile(fullPath);
      keys.push(...fileKeys);

      // Extract category from path
      if (filePath.includes('arguments')) categories.add('data.arguments');
      if (filePath.includes('manuscripts')) categories.add('data.manuscripts');
      if (filePath.includes('cults')) categories.add('data.cults');
      if (filePath.includes('semantic-defense')) categories.add('data.semantic-defense');
    }
  });

  return { keys, categories };
}

/**
 * Generate a JSON structure from extracted keys
 */
function generateMessageStructure(keys) {
  const structure = {};

  // Group keys by category
  keys.forEach(keyData => {
    const [category, subcategory, ...rest] = keyData.key.split('.');
    let current = structure;

    // Create category structure if it doesn't exist
    if (!structure[category]) {
      structure[category] = {};
    }
    current = structure[category];

    // Create subcategory structure
    if (subcategory && !current[subcategory]) {
      current[subcategory] = {};
    }
    if (subcategory) {
      current = current[subcategory];
    }

    // Add the key-value pair
    const finalKey = rest.join('.');
    current[finalKey] = keyData.value;
  });

  return structure;
}

/**
 * Generate TypeScript type definitions from message structure
 */
function generateTypesFromStructure(structure) {
  let types = '/**\n * Auto-generated TypeScript types for i18n messages\n * Do not manually edit - this is generated from message files\n *\n */\n\n';

  const generatedKeys = new Set();

  // Simple recursive function to generate types
  function generateType(obj, prefix = '') {
    let typeDef = '';

    for (const [key, value] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'object' && value !== null) {
        // If it's an object, recurse
        typeDef += generateType(value, fullKey);
      } else {
        // Sanitize the fullKey to be a valid TypeScript identifier
        let safeFullKey = fullKey.replace(/[^a-zA-Z0-9_]/g, 'Component');
        
        while (generatedKeys.has(safeFullKey)) {
          safeFullKey += '_';
        }
        generatedKeys.add(safeFullKey);

        if (Array.isArray(value)) {
          typeDef += `export type ${safeFullKey} = string[];\n`;
        } else if (typeof value === 'string') {
          typeDef += `export type ${safeFullKey} = string;\n`;
        }
      }
    }

    return typeDef;
  }

  types += generateType(structure);

  return types;
}

/**
 * Main function
 */
function main() {
  const baseDir = process.cwd();

  console.log('🔍 Scanning codebase for hardcoded text...\n');

  // Scan data files
  const result = scanDataFiles(baseDir);
  console.log(`✓ Found ${result.keys.length} hardcoded strings in ${result.categories.size} categories\n`);

  // Group keys by category
  const categorizedKeys = new Map();
  result.keys.forEach(key => {
    if (!categorizedKeys.has(key.category)) {
      categorizedKeys.set(key.category, []);
    }
    categorizedKeys.get(key.category).push(key);
  });

  // Print summary
  console.log('📋 Key Summary:');
  categorizedKeys.forEach((keys, category) => {
    console.log(`  ${category}: ${keys.length} keys`);
  });

  // Generate message structure
  const messageStructure = generateMessageStructure(result.keys);

  // Save to file
  const outputPath = path.join(baseDir, 'i18n-extraction-results.json');
  fs.writeFileSync(outputPath, JSON.stringify(messageStructure, null, 2));

  console.log(`\n💾 Results saved to: ${outputPath}`);

  // Generate TypeScript types
  const typesPath = path.join(baseDir, 'src/types/generated-i18n.ts');
  const types = generateTypesFromStructure(messageStructure);
  fs.writeFileSync(typesPath, types);

  console.log(`\n📄 TypeScript types saved to: ${typesPath}`);

  console.log('\n✨ Extraction complete!');
  console.log('\nNext steps:');
  console.log('  1. Review the extracted keys in i18n-extraction-results.json');
  console.log('  2. Update message structure in messages/en.json');
  console.log('  3. Copy to all 26 locales');
  console.log('  4. Translate the content');
}

// Run the extraction
main();

module.exports = { extractKeysFromFile, categorizeKey, generateKeyName, scanDataFiles, generateMessageStructure };
