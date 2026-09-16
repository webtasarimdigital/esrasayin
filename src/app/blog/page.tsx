import React from 'react';
import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { posts, SITE_INFO } from '@/lib/data';
import { getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Psikoloji & Mental Sağlık Blogu',
  description: 'Psikolog Esra Sayın tarafından kaleme alınan kaygı, ilişki sorunları, EMDR, aile iletişimi ve ruh sağlığı üzerine rehber niteliğinde blog yazıları.',
  alternates: {
    canonical: `${SITE_INFO.url}/blog/`,
  },
};

export default function BlogIndexPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Anasayfa', url: '/' },
    { name: 'Blog', url: '/blog/' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">
              / PSİKOLOJİ &amp; MENTAL SAĞLIK BLOGU /
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mt-3 leading-tight">
              Zihinsel Sağlığınız için{' '}
              <span className="font-serif italic font-normal text-slate-800">
                özel olarak yazılmış
              </span>{' '}
              blog yazıları
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Kaygı bozuklukları, çift ilişkileri, travma, yas süreci ve danışmanlık ekolleri üzerine güncel, bilimsel ve rehber niteliğinde makaleler.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
