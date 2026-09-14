import fs from 'fs';

const pages = JSON.parse(fs.readFileSync('src/data/pages.json', 'utf8'));

let cleanedCount = 0;

pages.forEach((p) => {
  // Skip pages that we custom created or that don't need header stripping
  if (p.permalink === 'istanbul-psikolog-esra-sayin') return;

  if (p.content && (p.content.includes('tp-breadcrumbs') || p.content.includes('Save the Earth') || p.content.includes('tpgb-block-14b9'))) {
    // Find the real article start, usually the first <h2
    const h2Idx = p.content.indexOf('<h2');
    if (h2Idx !== -1) {
      let mainContent = p.content.substring(h2Idx);

      // Also clean any unrendered tpgb-switcher at the bottom
      const switcherIdx = mainContent.indexOf('tpgb-switcher');
      if (switcherIdx !== -1) {
        const containerRowIdx = mainContent.lastIndexOf('<div  class="tpgb-container-row', switcherIdx);
        if (containerRowIdx !== -1) {
          mainContent = mainContent.substring(0, containerRowIdx);
        }
      }

      // Also clean duplicated recommendation cards at the bottom if already present in content
      const bRecomIdx = mainContent.indexOf('Bireysel Danışmanlık');
      const aRecomIdx = mainContent.indexOf('Aile Danışmanlığı');
      // Only if it's near the end and matches the 2-card bottom block
      const lastRowIdx = mainContent.lastIndexOf('<div  class="tpgb-container-row');
      if (lastRowIdx > mainContent.length - 3000 && (mainContent.includes('fas fa-brain') || mainContent.includes('fas fa-users'))) {
        // Find where the 2-card block starts
        const brainIdx = mainContent.lastIndexOf('fas fa-brain');
        if (brainIdx !== -1) {
          const blockStart = mainContent.lastIndexOf('<div  class="tpgb-container-row', brainIdx);
          if (blockStart !== -1) {
            mainContent = mainContent.substring(0, blockStart);
          }
        }
      }

      p.content = mainContent.trim();
      cleanedCount++;
      console.log(`Cleaned WP garbage from: ${p.permalink}`);
    }
  }
});

fs.writeFileSync('src/data/pages.json', JSON.stringify(pages, null, 2), 'utf8');
console.log(`Successfully cleaned ${cleanedCount} pages in pages.json!`);
