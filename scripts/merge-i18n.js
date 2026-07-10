// scripts/merge-i18n.js
// This script was used once to mirror i18n keys. Kept as documentation.
// Run with: node --input-type=module < scripts/merge-i18n.js
import fs from 'fs';
import path from 'path';

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const NEW = { hero: en.hero, command: en.command, lens: en.lens };

for (const f of fs.readdirSync('messages')) {
  if (f === 'en.json' || f === 'schema.json' || !f.endsWith('.json')) continue;
  const p = path.join('messages', f);
  const obj = JSON.parse(fs.readFileSync(p, 'utf8'));
  const merged = {
    ...obj,
    hero: obj.hero || NEW.hero,
    command: obj.command || NEW.command,
    lens: obj.lens || NEW.lens,
  };
  fs.writeFileSync(p, JSON.stringify(merged, null, 2) + '\n');
  console.log('merged', f);
}
console.log('Done!');
