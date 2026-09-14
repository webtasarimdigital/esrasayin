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

  // All Pages
  const pageRoutes: MetadataRoute.Sitemap = pages
    .filter((p) => p.permalink && p.permalink !== '')
    .map((p) => ({
      url: `${baseUrl}/${p.permalink}/`,
      lastModified: p.modified ? new Date(p.modified) : new Date(),
      changeFrequency: 'weekly',
      priority: p.permalink.includes('terapi') || p.permalink.includes('psikolog') ? 0.9 : 0.8,
    }));

  // All Blog Posts
  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/${p.permalink}/`,
    lastModified: p.modified ? new Date(p.modified) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...pageRoutes, ...postRoutes];
}
