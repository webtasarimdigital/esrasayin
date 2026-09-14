import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, Calendar, ArrowLeft, Clock, User, Share2 } from 'lucide-react';
import {
  posts,
  pages,
  getPostBySlugOrPermalink,
  getPageBySlugOrPermalink,
  getRelatedPosts,
  SITE_INFO,
} from '@/lib/data';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/seo';
import BlogCard from '@/components/BlogCard';
import ContactSection from '@/components/ContactSection';
import ReviewsSection from '@/components/ReviewsSection';
import FaqAccordion from '@/components/FaqAccordion';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const postParams = posts.map((p) => ({ slug: p.permalink }));
  const pageParams = pages
    .filter((p) => p.permalink && p.permalink !== '')
    .map((p) => ({ slug: p.permalink }));

  // Also include raw slug aliases if different from permalink
  const postSlugParams = posts
    .filter((p) => p.slug !== p.permalink)
    .map((p) => ({ slug: p.slug }));

  return [...postParams, ...pageParams, ...postSlugParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlugOrPermalink(params.slug);
  if (post) {
    const canonical = `${SITE_INFO.url}/${post.permalink}/`;
    return {
      title: post.title,
      description: post.excerpt || `${post.title} hakkında Uzman Psikolog Esra Sayın bilgilendirme rehberi.`,
      alternates: {
        canonical,
      },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: canonical,
        type: 'article',
        publishedTime: post.date,
        modifiedTime: post.modified,
        images: [
          {
            url: post.featured_image?.startsWith('http')
              ? post.featured_image
              : `${SITE_INFO.url}${post.featured_image}`,
          },
        ],
      },
    };
  }

  const page = getPageBySlugOrPermalink(params.slug);
  if (page) {
    const canonical = `${SITE_INFO.url}/${page.permalink}/`;
    return {
      title: page.title,
      description: page.excerpt || `${page.title} - Uzman Psikolog & Aile Danışmanı Esra Sayın.`,
      alternates: {
        canonical,
      },
      openGraph: {
        title: page.title,
        description: page.excerpt,
        url: canonical,
        type: 'website',
      },
    };
  }

  return {
    title: 'Sayfa Bulunamadı',
  };
}

export default function DynamicSlugPage({ params }: PageProps) {
  const post = getPostBySlugOrPermalink(params.slug);

  // If this route is a Blog Post
  if (post) {
    const articleSchema = getArticleSchema(post);
    const breadcrumbSchema = getBreadcrumbSchema([
      { name: 'Anasayfa', url: '/' },
      { name: 'Blog', url: '/blog/' },
      { name: post.title, url: `/${post.permalink}/` },
    ]);
    const relatedPosts = getRelatedPosts(post.id, 3);
    const formattedDate = new Date(post.date).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <article className="py-12 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-indigo-600 transition-colors">
                Anasayfa
              </Link>
              <span>/</span>
              <Link href="/blog/" className="hover:text-indigo-600 transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-medium truncate max-w-xs sm:max-w-sm">
                {post.title}
              </span>
            </nav>

            {/* Post Header */}
            <header className="mb-8">
              <div className="mb-3">
                <span className="inline-block bg-[#ffedd5] text-[#c2410c] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  BİREYSEL PSİKOLOJİ
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 py-3 border-y border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-200 overflow-hidden relative">
                    <Image
                      src="/images/psikolog-esra-sayin-updated-hero.webp"
                      alt="Esra Sayın"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-semibold text-slate-800">
                    Uzman Psikolog Esra Sayın
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <time dateTime={post.date}>{formattedDate}</time>
                </div>

                <div className="flex items-center gap-1.5 ml-auto text-indigo-600">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Bilgilendirici Rehber</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-10 shadow-lg bg-slate-100 border border-slate-200/60">
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 850px"
                  className="object-cover"
                />
              </div>
            )}

            {/* Post Content */}
            <div
              className="prose-content max-w-none text-slate-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Card */}
            <div className="mt-12 p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-md border-2 border-white">
                <Image
                  src="/images/psikolog-esra-sayin-updated-hero.webp"
                  alt="Esra Sayın"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  Esra Sayın
                </h3>
                <p className="text-xs text-indigo-600 font-medium">
                  Uzman Psikolog &amp; Aile Danışmanı
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  İstanbul Beyoğlu Cihangir&apos;deki ofisinde yüz yüze ve online olarak BDT, EMDR ve Şema Terapi ekolleriyle yetişkin, çift ve ailelere psikolojik danışmanlık hizmeti sunmaktadır.
                </p>
                <div className="pt-1 flex items-center justify-center sm:justify-start gap-4">
                  <Link
                    href="/istanbul-psikolog-randevu/"
                    className="text-xs font-bold text-indigo-700 hover:underline"
                  >
                    Randevu Al →
                  </Link>
                  <Link
                    href="/istanbul-psikolog-esra-sayin/"
                    className="text-xs font-bold text-slate-600 hover:underline"
                  >
                    Hakkında Detaylı Bilgi →
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom CTA Box */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[#192a3d] to-indigo-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div>
                <h3 className="text-lg font-bold">
                  Destek Almak İçin İlk Adımı Atın
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  İstanbul Cihangir ofisimizde veya online görüşmeyle randevunuzu hemen oluşturun.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{SITE_INFO.phone}</span>
                </a>
                <Link
                  href="/istanbul-psikolog-randevu/"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs uppercase"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Randevu Al</span>
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-12 border-t border-slate-200">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    İlginizi Çekebilecek Diğer Yazılar
                  </h3>
                  <Link
                    href="/blog/"
                    className="text-xs font-bold text-indigo-600 hover:underline"
                  >
                    Tümünü Gör →
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((rPost) => (
                    <BlogCard key={rPost.id} post={rPost} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </>
    );
  }

  // If this route is a Site Page
  const page = getPageBySlugOrPermalink(params.slug);
  if (page) {
    const breadcrumbSchema = getBreadcrumbSchema([
      { name: 'Anasayfa', url: '/' },
      { name: page.title, url: `/${page.permalink}/` },
    ]);

    const isContactPage = params.slug.includes('iletisim');
    const isReviewPage = params.slug.includes('tavsiye');
    const isAppointmentPage = params.slug.includes('randevu');

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <div className="py-12 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-indigo-600 transition-colors">
                Anasayfa
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">{page.title}</span>
            </nav>

            {/* Page Header */}
            <header className="mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
                / {SITE_INFO.name.toUpperCase()} /
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 leading-tight">
                {page.title}
              </h1>
              {page.excerpt && (
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {page.excerpt}
                </p>
              )}
            </header>

            {/* If reviews page, display verified reviews component */}
            {isReviewPage && (
              <div className="mb-12">
                <ReviewsSection />
              </div>
            )}

            {/* If contact or appointment page, display contact section */}
            {isContactPage && (
              <div className="mb-12">
                <ContactSection />
              </div>
            )}

            {/* Render Main Content if available */}
            {page.content && !isContactPage && (
              <div className="bg-slate-50/50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-12">
                <div
                  className="prose-content max-w-none text-slate-700"
                  dangerouslySetInnerHTML={{ __html: page.content }}
                />
              </div>
            )}

            {/* If appointment page, add appointment CTA block */}
            {isAppointmentPage && (
              <div className="mb-12">
                <ContactSection />
              </div>
            )}

            {/* Default FAQ section on information pages */}
            <div className="mt-12">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </>
    );
  }

  // Not found
  notFound();
}
