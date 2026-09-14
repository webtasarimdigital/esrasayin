import fs from 'fs';
import path from 'path';

const posts = JSON.parse(fs.readFileSync('src/data/posts.json', 'utf8'));
const pages = JSON.parse(fs.readFileSync('src/data/pages.json', 'utf8'));

const publicImagesDir = path.resolve('public/images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Copy existing files from /images to /public/images
const localImagesDir = path.resolve('images');
if (fs.existsSync(localImagesDir)) {
  for (const file of fs.readdirSync(localImagesDir)) {
    fs.copyFileSync(path.join(localImagesDir, file), path.join(publicImagesDir, file));
    console.log(`Copied local image: ${file}`);
  }
}

// Find all unique image URLs from posts and pages
const urlSet = new Set();

for (const p of posts) {
  if (p.featured_image && p.featured_image.startsWith('http')) {
    urlSet.add(p.featured_image);
  }
}

// Also check for specific images from pages
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2026/02/beyoglu-psikolog.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/esra-call-to-action.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/bireysel.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/aile2.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/cift.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/evlilik.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/sex.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/bilissel-1400x680.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/emdr2-1400x680.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/ebeveyn-1400x680.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/fobi-1-1400x680.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/kaygi-1400x680.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/panik-1400x680.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/sema-1400x680.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/stres-yoneim-1400x680.webp');
urlSet.add('https://esrasayin.com.tr/wp-content/uploads/2025/03/emdr-cift-1400x680.webp');

async function downloadAll() {
  for (const url of urlSet) {
    const filename = path.basename(new URL(url).pathname);
    const dest = path.join(publicImagesDir, filename);
    if (fs.existsSync(dest)) {
      console.log(`Already exists: ${filename}`);
      continue;
    }
    console.log(`Downloading: ${url} -> ${filename}`);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`Failed to fetch ${url}: ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`Saved ${filename} (${buffer.length} bytes)`);
    } catch (e) {
      console.warn(`Error downloading ${url}:`, e.message);
    }
  }
}

downloadAll().then(() => console.log('Done downloading images.')).catch(console.error);
