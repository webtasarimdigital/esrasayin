import fs from 'fs';

const html = fs.readFileSync('scripts/original-about.html', 'utf8');

// Also check homepage about section from step 27 content
const hp = fs.readFileSync('C:/Users/omerf/.gemini/antigravity/brain/16f03895-63db-4f87-9a1e-ba2cc465263c/.system_generated/steps/27/content.md', 'utf8');

console.log('=== HOMEPAGE ABOUT SECTION ===');
const hpIdx = hp.indexOf('Hakkımda');
if (hpIdx !== -1) {
  const snippet = hp.substring(hpIdx - 100, hpIdx + 1500)
                    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                    .replace(/<[^>]+>/g, ' ')
                    .replace(/\s+/g, ' ');
  console.log(snippet);
}

console.log('\n=== ABOUT PAGE CONTENT ===');
const start = html.indexOf('entry-content');
if (start !== -1) {
  const snippet2 = html.substring(start, start + 4000)
                       .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                       .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                       .replace(/<[^>]+>/g, ' ')
                       .replace(/\s+/g, ' ');
  console.log(snippet2);
}
