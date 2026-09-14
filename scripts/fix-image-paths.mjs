import fs from 'fs';
import path from 'path';

let postsStr = fs.readFileSync('src/data/posts.json', 'utf8');
let pagesStr = fs.readFileSync('src/data/pages.json', 'utf8');

// Replace any wp-content/uploads URL with local /images/ URL if file exists
function replaceWpImages(str) {
  return str.replace(/https:\/\/esrasayin\.com\.tr\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/([^"'\s\\)\/]+)/g, (match, filename) => {
    // Check if filename exists in public/images
    if (fs.existsSync(path.join('public/images', filename))) {
      return `/images/${filename}`;
    }
    return match;
  });
}

postsStr = replaceWpImages(postsStr);
pagesStr = replaceWpImages(pagesStr);

fs.writeFileSync('src/data/posts.json', postsStr, 'utf8');
fs.writeFileSync('src/data/pages.json', pagesStr, 'utf8');

console.log('Fixed image paths in posts.json and pages.json to local /images/');
