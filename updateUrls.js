const fs = require('fs');
const urls = require('./thumb-urls.json');

urls['P52 recto'] = 'https://upload.wikimedia.org/wikipedia/commons/3/32/P52_recto.jpg';
urls['P52 verso'] = 'https://upload.wikimedia.org/wikipedia/commons/4/49/P52_verso.jpg';
urls['Great Isaiah Scroll'] = 'https://upload.wikimedia.org/wikipedia/commons/3/31/Great_Isaiah_Scroll.jpg';

const files = [
  'src/data/manuscripts/papyri.ts',
  'src/data/manuscripts/papyri-additional.ts',
  'src/data/manuscripts/codexes.ts',
  'src/data/manuscripts/other-documents.ts'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  const rules = [
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(P52_recto)[^'"`]*['"`]/g, "'" + urls['P52 recto'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(P52_verso)[^'"`]*['"`]/g, "'" + urls['P52 verso'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Papyrus[^'"`]*66|Bodmer)[^'"`]*['"`]/ig, "'" + urls['Papyrus 66'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Papyrus[^'"`]*75|Bodmer[^'"`]*XV)[^'"`]*['"`]/ig, "'" + urls['Papyrus 75'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Papyrus[^'"`]*45|Chester_Beatty[^'"`]*I)[^'"`]*['"`]/ig, "'" + urls['Papyrus 45'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(P46)[^'"`]*['"`]/ig, "'" + urls['Papyrus 46'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Papyrus[^'"`]*47|Chester_Beatty[^'"`]*III)[^'"`]*['"`]/ig, "'" + urls['Papyrus 47'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Papyrus[^'"`]*72)[^'"`]*['"`]/ig, "'" + urls['Papyrus 72'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Codex_?Sinaiticus)[^'"`]*['"`]/ig, "'" + urls['Codex Sinaiticus'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Codex_?Vaticanus)[^'"`]*['"`]/ig, "'" + urls['Codex Vaticanus'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Codex_?Alexandrinus)[^'"`]*['"`]/ig, "'" + urls['Codex Alexandrinus'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Codex_?Bezae)[^'"`]*['"`]/ig, "'" + urls['Codex Bezae'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Great_?Isaiah_?Scroll)[^'"`]*['"`]/ig, "'" + urls['Great Isaiah Scroll'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Leningrad)[^'"`]*['"`]/ig, "'" + urls['Leningrad Codex'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Aleppo)[^'"`]*['"`]/ig, "'" + urls['Aleppo Codex'] + "'"],
    [/['"`]https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^'"`]+(Amiatinus)[^'"`]*['"`]/ig, "'" + urls['Codex Amiatinus'] + "'"]
  ];

  rules.forEach(([regex, replacement]) => {
    if (replacement && replacement !== "'undefined'") {
      content = content.replace(regex, replacement);
    }
  });

  fs.writeFileSync(f, content);
});

console.log('URLs replaced in files!');
