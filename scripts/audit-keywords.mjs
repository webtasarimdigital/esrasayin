import fs from 'fs';

const posts = JSON.parse(fs.readFileSync('src/data/posts.json', 'utf8'));
const pages = JSON.parse(fs.readFileSync('src/data/pages.json', 'utf8'));

console.log(`Checking ${posts.length} posts and ${pages.length} pages for sensitive terms...`);

let issuesCount = 0;
const prohibitedKeywords = ['tedavi', 'tedavisi', 'hasta ', 'hastalar', 'tedavi edilir'];

posts.forEach((p) => {
  prohibitedKeywords.forEach((kw) => {
    if (p.title.toLowerCase().includes(kw)) {
      console.log(`[POST TITLE HIT] ID: ${p.id} | KW: "${kw}" | Title: "${p.title}"`);
      issuesCount++;
    }
  });
});

pages.forEach((p) => {
  prohibitedKeywords.forEach((kw) => {
    if (p.title.toLowerCase().includes(kw)) {
      console.log(`[PAGE TITLE HIT] ID: ${p.id} | KW: "${kw}" | Title: "${p.title}"`);
      issuesCount++;
    }
  });
});

console.log(`Total sensitive title hits: ${issuesCount}`);
