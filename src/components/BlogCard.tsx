import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
  badge?: string;
}

export default function BlogCard({ post, badge = 'BİREYSEL PSİKOLOJİ' }: BlogCardProps) {
  // Format date to Turkish uppercase like "HAZİRAN 30, 2026"
  const formattedDate = new Date(post.date).toLocaleDateString('tr-TR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).toUpperCase();

  const imageSrc = post.featured_image?.startsWith('http')
    ? post.featured_image
    : post.featured_image || '/images/beyoglu-psikolog.webp';

  return (
    <article className="group flex flex-col bg-transparent">
      {/* Image container matching screenshot 3 with rounded corners */}
      <Link
        href={`/${post.permalink}/`}
        className="block relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 shadow-sm group-hover:shadow-md transition-shadow"
      >
        <Image
          src={imageSrc}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="pt-4 flex flex-col flex-1">
        {/* Badge matching screenshot 3: soft peach pill badge */}
        <div>
          <span className="inline-block bg-[#ffedd5] text-[#c2410c] text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            {badge}
          </span>
        </div>

        {/* Title matching screenshot 3 */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mt-2.5 mb-2 leading-snug line-clamp-2">
          <Link href={`/${post.permalink}/`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-3">
            {post.excerpt}
          </p>
        )}

        {/* Date matching screenshot 3: light blue/indigo uppercase */}
        <div className="mt-auto pt-2">
          <time
            dateTime={post.date}
            className="text-[11px] sm:text-xs font-semibold text-indigo-500 uppercase tracking-wide"
          >
            {formattedDate}
          </time>
        </div>
      </div>
    </article>
  );
}
