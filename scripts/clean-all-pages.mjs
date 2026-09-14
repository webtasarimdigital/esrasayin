import fs from 'fs';

const pages = JSON.parse(fs.readFileSync('src/data/pages.json', 'utf8'));

let count = 0;

pages.forEach((p) => {
  if (p.permalink === 'istanbul-psikolog-esra-sayin') return;
  if (!p.content) return;

  let content = p.content;

  // 1. If content starts with tpgb-block-14b9 or tp-breadcrumbs container
  if (content.includes('tpgb-block-14b9') || content.includes('tp-breadcrumbs')) {
    // Find the end of this header block
    // In WordPress ThePlus, the header block is data-id="14b9_xxx"
    // After it closes with </div>, the next section starts
    const match = content.match(/data-id="14b9_\d+"/);
    if (match) {
      // find the next top level container row
      const searchAfter = content.indexOf(match[0]);
      // Let's find '<div  class="tpgb-container-row' that does NOT have 14b9
      const regexNext = /<div\s+class="tpgb-container-row\s+tpgb-block-(?!14b9)[^"]*"/g;
      regexNext.lastIndex = searchAfter;
      const nextMatch = regexNext.exec(content);
      if (nextMatch) {
        content = content.substring(nextMatch.index);
        count++;
        console.log(`Removed 14b9 header from: ${p.permalink}`);
      }
    }
  }

  // 2. Also remove any 'Save the Earth' or 'Zihinsel Sağlığınız' teaser widget at the very top of content
  if (content.includes('Zihinsel') && content.indexOf('Zihinsel') < 1000) {
    // find where the next container starts
    const zIdx = content.indexOf('Zihinsel');
    const nextH = content.indexOf('<h2', zIdx);
    if (nextH !== -1) {
      content = content.substring(nextH);
      console.log(`Removed Zihinsel teaser from: ${p.permalink}`);
    }
  }

  // 3. Remove switcher / methods banner at bottom if present
  const switcherIdx = content.indexOf('tpgb-switcher');
  if (switcherIdx !== -1) {
    const rowIdx = content.lastIndexOf('<div  class="tpgb-container-row', switcherIdx);
    if (rowIdx !== -1) {
      content = content.substring(0, rowIdx);
    }
  }

  p.content = content.trim();
});

fs.writeFileSync('src/data/pages.json', JSON.stringify(pages, null, 2), 'utf8');
console.log(`Cleaned total: ${count} pages!`);
