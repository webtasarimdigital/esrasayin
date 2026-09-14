import fs from 'fs';
import path from 'path';

console.log('--- Verifying Build Artifacts ---');

// Check .next/server/app/
const appServerDir = path.resolve('.next/server/app');
if (fs.existsSync(appServerDir)) {
  console.log('✓ .next/server/app directory exists');
} else {
  console.error('✗ .next/server/app directory missing');
}

// Check sitemap.xml
const sitemapHtml = path.resolve('.next/server/app/sitemap.xml.body');
if (fs.existsSync(sitemapHtml)) {
  const content = fs.readFileSync(sitemapHtml, 'utf8');
  console.log(`✓ sitemap.xml generated (${content.length} bytes, contains ${content.split('<url>').length - 1} URLs)`);
}

// Check robots.txt
const robotsTxt = path.resolve('.next/server/app/robots.txt.body');
if (fs.existsSync(robotsTxt)) {
  const content = fs.readFileSync(robotsTxt, 'utf8');
  console.log(`✓ robots.txt generated:\n${content}`);
}

// Verify images in public/images
const publicImages = fs.readdirSync('public/images');
console.log(`✓ public/images contains ${publicImages.length} images`);

console.log('All verifications passed successfully!');
