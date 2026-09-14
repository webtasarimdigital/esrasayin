import fs from 'fs';
import path from 'path';

const API_BASE = 'https://esrasayin.com.tr/wp-json/wp/v2';

// Regulatory sanitizer for psychologist advertising rules (1219 S.K. & TPD)
function sanitizeText(text) {
  if (!text) return '';
  let cleaned = text;

  // Replacement patterns for prohibited/restricted medical terms
  const replacements = [
    // Tedavi variants
    [/\bOKB Tedavisi\b/gi, 'OKB Terapisi ve Danışmanlığı'],
    [/\bSosyal Fobi Tedavisi\b/gi, 'Sosyal Fobi Terapisi ve Danışmanlığı'],
    [/\bTükenmişlik Sendromu Tedavisi\b/gi, 'Tükenmişlik Sendromu Terapisi ve Danışmanlığı'],
    [/\bAnksiyete Tedavisi\b/gi, 'Anksiyete Terapisi ve Danışmanlığı'],
    [/\bDepresyon Tedavisi\b/gi, 'Depresyon Terapisi ve Danışmanlığı'],
    [/\btedavi edilir\b/gi, 'terapi süreciyle ele alınır'],
    [/\btedavi edilebilir\b/gi, 'psikoterapi desteğiyle aşılabilir'],
    [/\btedavi edilmediğinde\b/gi, 'destek alınmadığında'],
    [/\btedavi edilmesinde\b/gi, 'terapi sürecinde'],
    [/\btedavi yöntemi\b/gi, 'terapi yöntemi'],
    [/\btedavi yöntemleri\b/gi, 'terapi yaklaşımları'],
    [/\btedavi süreci\b/gi, 'terapi süreci'],
    [/\btedavi sürecinde\b/gi, 'terapi sürecinde'],
    [/\btedavinin etkinliğini\b/gi, 'terapinin etkinliğini'],
    [/\btedavide\b/gi, 'terapi sürecinde'],
    [/\btedaviye\b/gi, 'terapiye'],
    [/\btedavisi\b/gi, 'terapisi'],
    [/\btedaviler\b/gi, 'terapiler'],
    [/\btedavi\b/gi, 'terapi'],
    
    // Hasta -> Danışan
    [/\bhastaların\b/gi, 'danışanların'],
    [/\bhastalara\b/gi, 'danışanlara'],
    [/\bhastanın\b/gi, 'danışanın'],
    [/\bhastaya\b/gi, 'danışana'],
    [/\bhastalar\b/gi, 'danışanlar'],
    [/\bhasta\b/gi, 'danışan'],
    
    // Klinik -> Danışmanlık Merkezi / Ofis
    [/\bkliniğimde\b/gi, 'Cihangir ofisimde'],
    [/\bkliniğimizde\b/gi, 'ofisimizde'],
    [/\bkliniğe\b/gi, 'ofise'],
    [/\bklinikte\b/gi, 'ofiste'],
    
    // Teşhis
    [/\bteşhis konulan\b/gi, 'değerlendirilen'],
    [/\bteşhis ve tedavi\b/gi, 'psikolojik değerlendirme ve danışmanlık'],
    [/\bteşhis\b/gi, 'değerlendirme']
  ];

  for (const [pattern, replacement] of replacements) {
    cleaned = cleaned.replace(pattern, replacement);
  }

  return cleaned;
}

async function fetchAll(endpoint) {
  let page = 1;
  let allItems = [];
  while (true) {
    const url = `${API_BASE}/${endpoint}?per_page=100&page=${page}`;
    console.log(`Fetching: ${url}`);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        if (res.status === 400) break; // no more pages
        throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      if (!Array.isArray(data) || data.length === 0) break;
      allItems = allItems.concat(data);
      const totalPages = parseInt(res.headers.get('x-wp-totalpages') || '1', 10);
      if (page >= totalPages) break;
      page++;
    } catch (err) {
      console.error(`Error fetching page ${page} of ${endpoint}:`, err.message);
      break;
    }
  }
  return allItems;
}

async function run() {
  const dataDir = path.resolve('src/data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  console.log('--- Fetching Posts ---');
  const postsRaw = await fetchAll('posts');
  console.log(`Fetched ${postsRaw.length} posts.`);

  console.log('--- Fetching Pages ---');
  const pagesRaw = await fetchAll('pages');
  console.log(`Fetched ${pagesRaw.length} pages.`);

  console.log('--- Fetching Categories ---');
  const categoriesRaw = await fetchAll('categories');
  console.log(`Fetched ${categoriesRaw.length} categories.`);

  // Clean and process posts
  const posts = postsRaw.map(p => {
    // Extract permalink path: e.g. https://esrasayin.com.tr/1034-beyoglu-yas-terapisi-kayip-destek/ -> 1034-beyoglu-yas-terapisi-kayip-destek
    const linkMatch = p.link.match(/esrasayin\.com\.tr\/([^/]+)/);
    const permalinkSlug = linkMatch ? linkMatch[1] : p.slug;

    return {
      id: p.id,
      slug: p.slug,
      permalink: permalinkSlug,
      title: sanitizeText(p.title?.rendered || ''),
      rawTitle: p.title?.rendered || '',
      excerpt: sanitizeText(p.excerpt?.rendered?.replace(/<[^>]+>/g, '').trim() || ''),
      content: sanitizeText(p.content?.rendered || ''),
      date: p.date,
      modified: p.modified,
      categories: p.categories,
      featured_image: p.tpgb_featured_images?.full?.[0] || p.tpgb_featured_images?.tp_image_grid?.[0] || '/images/psikolog-esra-sayin-updated-hero.webp',
      author: p.tpgb_post_meta_info?.author_name || 'Esra Sayın'
    };
  });

  // Clean and process pages
  const pages = pagesRaw.map(p => {
    const linkMatch = p.link.match(/esrasayin\.com\.tr\/([^/]+)/);
    const permalinkSlug = linkMatch ? linkMatch[1] : p.slug;

    return {
      id: p.id,
      slug: p.slug,
      permalink: permalinkSlug,
      title: sanitizeText(p.title?.rendered || ''),
      rawTitle: p.title?.rendered || '',
      excerpt: sanitizeText(p.excerpt?.rendered?.replace(/<[^>]+>/g, '').trim() || ''),
      content: sanitizeText(p.content?.rendered || ''),
      date: p.date,
      modified: p.modified
    };
  });

  fs.writeFileSync(path.join(dataDir, 'posts.json'), JSON.stringify(posts, null, 2), 'utf8');
  fs.writeFileSync(path.join(dataDir, 'pages.json'), JSON.stringify(pages, null, 2), 'utf8');
  fs.writeFileSync(path.join(dataDir, 'categories.json'), JSON.stringify(categoriesRaw, null, 2), 'utf8');

  console.log(`Saved ${posts.length} sanitized posts to src/data/posts.json`);
  console.log(`Saved ${pages.length} sanitized pages to src/data/pages.json`);
  console.log(`Saved ${categoriesRaw.length} categories to src/data/categories.json`);
}

run().catch(console.error);
