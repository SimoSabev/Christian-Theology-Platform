const fs = require('fs');

const papyriStr = fs.readFileSync('./src/data/manuscripts/papyri.ts', 'utf-8');
const codexPath = './src/data/manuscripts/codexes.ts';
let codexStr = fs.readFileSync(codexPath, 'utf-8');

// Find the start of P66 array
const p66Start = papyriStr.indexOf("id: 'p66'");
// Within P66, find the full verses array for John 1:1-14
// Wait, in papyri.ts, P66 has TWO passage items now: John 1:1-5 and John 1:6-14 or they are combined?
// Let's just extract EVERYTHING inside 'verses: [' after "The Logos Hymn"
const titleStart = papyriStr.indexOf("title: 'The Logos Hymn", p66Start);

const startVerses = papyriStr.indexOf('verses: [', titleStart);
let endVerses = -1;
let braceCount = 0;

for (let i = startVerses; i < papyriStr.length; i++) {
  if (papyriStr[i] === '[') braceCount++;
  if (papyriStr[i] === ']') {
    braceCount--;
    if (braceCount === 0) {
      endVerses = i + 1;
      break;
    }
  }
}

let extractedVerses = papyriStr.substring(startVerses, endVerses);

// Now find Vaticanus
const vStart = codexStr.indexOf("id: 'vaticanus'");
const vTitleStart = codexStr.indexOf("title: 'John 1:1–14", vStart);

const vStartVerses = codexStr.indexOf('verses: [', vTitleStart);
let vEndVerses = -1;
let vBraceCount = 0;

for (let i = vStartVerses; i < codexStr.length; i++) {
  if (codexStr[i] === '[') vBraceCount++;
  if (codexStr[i] === ']') {
    vBraceCount--;
    if (vBraceCount === 0) {
      vEndVerses = i + 1;
      break;
    }
  }
}

const before = codexStr.substring(0, vStartVerses);
const after = codexStr.substring(vEndVerses);

codexStr = before + extractedVerses + after;
fs.writeFileSync(codexPath, codexStr);
console.log("SUCCESS");
