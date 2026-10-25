import { MetadataRoute } from 'next';
import { posts, pages, SITE_INFO } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_INFO.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // 7 Odak Bölge Sayfaları (Cihangir, Beyoğlu, Taksim, Gümüşsuyu, Nişantaşı, Şişli, Kurtuluş)
  const regionalSlugs = new Set([
    'cihangir-psikolog',
    'beyoglu-psikolog',
    'taksim-psikolog',
    'gumussuyu-psikolog',
    'nisantasi-psikolog',
    'sisli-psikolog',
    'kurtulus-psikolog',
  ]);

  // All Pages
  const pageRoutes: MetadataRoute.Sitemap = pages
    .filter((p) => p.permalink && p.permalink !== '' && p.permalink !== 'anasayfa')
    .map((p) => {
      const isRegional = regionalSlugs.has(p.slug || p.permalink);
      return {
        url: `${baseUrl}/${p.permalink}/`,
        lastModified: p.modified ? new Date(p.modified) : new Date(),
        changeFrequency: isRegional ? 'daily' : 'weekly',
        priority: isRegional ? 0.95 : (p.permalink.includes('psikolog') || p.permalink.includes('danismanlik') ? 0.9 : 0.8),
      };
    });

  // All Blog Posts
  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/${p.permalink}/`,
    lastModified: p.modified ? new Date(p.modified) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...pageRoutes, ...postRoutes];
}
