import fs from 'fs';

const pages = JSON.parse(fs.readFileSync('src/data/pages.json', 'utf8'));

pages.forEach((p) => {
  if (!p.content) return;
  // Strip data-tpgb-dynamic attribute
  p.content = p.content.replace(/data-tpgb-dynamic="[^"]*"/gi, '');
  // Also replace any remaining Save the Earth
  p.content = p.content.replace(/Save the Earth for future Generations\.?/gi, '');
});

fs.writeFileSync('src/data/pages.json', JSON.stringify(pages, null, 2), 'utf8');
console.log('Successfully stripped all data-tpgb-dynamic and Save the Earth tags!');
