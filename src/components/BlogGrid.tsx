import React from 'react';
import Link from 'next/link';
import BlogCard from './BlogCard';
import { BlogPost } from '@/lib/types';

interface BlogGridProps {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
  italicText?: string;
  showViewAll?: boolean;
}

export default function BlogGrid({
  posts,
  title = 'Psikoloji ve İlişki Dinamikleri İçin',
  italicText = 'bilgilendirici',
  subtitle = '/ PSİKOLOJİ BLOGU /',
  showViewAll = true,
}: BlogGridProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching screenshot 3 */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">
            {subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mt-3 leading-tight">
            {title}{' '}
            <span className="font-serif italic font-normal text-slate-800 block sm:inline">
              {italicText}
            </span>{' '}
            blog yazıları
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Posts Button */}
        {showViewAll && (
          <div className="mt-14 text-center">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 bg-[#192a3d] text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:bg-slate-800 transition-all shadow-sm active:scale-95"
            >
              <span>Tüm Blog Yazılarını İncele</span>
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
