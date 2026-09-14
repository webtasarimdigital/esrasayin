import fs from 'fs';

let postsStr = fs.readFileSync('src/data/posts.json', 'utf8');
let pagesStr = fs.readFileSync('src/data/pages.json', 'utf8');

function cleanDeep(str) {
  return str
    .replace(/Panik Atak Tedavisinde/g, 'Panik Atak Terapisinde')
    .replace(/panik atak tedavisinde/gi, 'panik atak terapisinde')
    .replace(/tedavisinde/gi, 'terapisinde')
    .replace(/tedavisine/gi, 'terapisine')
    .replace(/tedavisi/gi, 'terapisi')
    .replace(/tedaviler/gi, 'terapiler')
    .replace(/tedaviye/gi, 'terapiye')
    .replace(/tedaviyi/gi, 'terapiyi')
    .replace(/tedavi/gi, 'terapi')
    .replace(/\bhastaların\b/gi, 'danışanların')
    .replace(/\bhastalar\b/gi, 'danışanlar')
    .replace(/\bhastalara\b/gi, 'danışanlara')
    .replace(/\bhastanın\b/gi, 'danışanın')
    .replace(/\bhastaya\b/gi, 'danışana')
    .replace(/\bhasta\b/gi, 'danışan');
}

postsStr = cleanDeep(postsStr);
pagesStr = cleanDeep(pagesStr);

fs.writeFileSync('src/data/posts.json', postsStr, 'utf8');
fs.writeFileSync('src/data/pages.json', pagesStr, 'utf8');

console.log('Deep clean completed. Re-checking...');
