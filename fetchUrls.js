const fs = require('fs');

const titles = [
  'File:P52_recto.jpg',
  'File:P52_verso.jpg',
  'File:Papyrus_66.jpg',
  'File:Papyrus_Bodmer_XV.jpg',
  'File:P._Chester_Beatty_I,_folio_13-14,_recto.jpg',
  'File:P46.jpg',
  'File:P._Chester_Beatty_III,_folio_3_recto.jpg',
  'File:Bodmer_Papyrus_VIII_(1_-_2_Peter)_01.jpg', // P72
  'File:Codex_Sinaiticus.jpg', 
  'File:Codex_Vaticanus_B,_2Thess._3,11-18,_Hebr._1,1-2,2.jpg',
  'File:Codex_Alexandrinus.jpg',
  'File:Codex_Bezae.jpg',
  'File:Great_Isaiah_Scroll.jpg',
  'File:Leningrad_Codex_Folio_474a.jpg',
  'File:Aleppo_Codex_Joshua_1_1.jpg',
  'File:Codex_Amiatinus_Ezra.jpg'
];

async function run() {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&format=json&titles=' + encodeURIComponent(titles.join('|'));
  const res = await fetch(url, {headers: {'User-Agent': 'study-theology/1.0'}});
  const data = await res.json();
  const pages = data.query.pages;
  const urls = {};
  for(let id in pages) {
    if(pages[id].imageinfo) {
      urls[pages[id].title] = pages[id].imageinfo[0].url;
    }
  }
  fs.writeFileSync('wiki-urls.json', JSON.stringify(urls, null, 2));
  console.log('Saved properly!');
}

run();
