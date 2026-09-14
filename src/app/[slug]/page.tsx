import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, Calendar, ArrowLeft, Home, Brain, Users, ArrowRight } from 'lucide-react';
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
import ServicesSidebar from '@/components/ServicesSidebar';
import ServiceMethodsBanner from '@/components/ServiceMethodsBanner';
import ServicesIndexView from '@/components/ServicesIndexView';

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

function getServiceImage(slug: string, title: string): string {
  const s = `${slug} ${title}`.toLowerCase();
  if (s.includes('bireysel')) return '/images/bireysel-1400x680.webp';
  if (s.includes('cift') || s.includes('çift')) return '/images/cift-1400x680.webp';
  if (s.includes('evlilik')) return '/images/evlilik-1400x680.webp';
  if (s.includes('cinsel')) return '/images/cinsel-terapi-1400x680.webp';
  if (s.includes('aile')) return '/images/aile-terapisi-1400x680.webp';
  if (s.includes('bilissel') || s.includes('bdt')) return '/images/bilissel-1400x680.webp';
  if (s.includes('emdr')) return '/images/emdr2-1400x680.webp';
  if (s.includes('ergen') || s.includes('ebeveyn')) return '/images/ebeveyn-1400x680.webp';
  if (s.includes('fobi') || s.includes('korku')) return '/images/fobi-1-1400x680.webp';
  if (s.includes('kaygi') || s.includes('kaygı')) return '/images/kaygi-1400x680.webp';
  if (s.includes('panik')) return '/images/panik-1400x680.webp';
  if (s.includes('sema') || s.includes('şema')) return '/images/sema-1400x680.webp';
  if (s.includes('stres')) return '/images/stres-yoneim-1400x680.webp';
  return '/images/psikolog-esra-sayin-uniform.webp';
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb & Title Header */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                {post.title}
              </h1>
              <nav className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                <Link href="/" className="hover:underline inline-flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" />
                  <span>İSTANBUL PSİKOLOG</span>
                </Link>
                <span>&gt;</span>
                <span className="text-slate-500">{post.title}</span>
              </nav>
            </div>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="max-w-4xl mx-auto relative aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 mb-12 bg-slate-100">
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
            )}

            {/* Main Content + Sidebar Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-8">
                <div
                  className="prose-content max-w-none text-slate-700 bg-white"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* 2 Bottom Recommendation Cards */}
                <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/istanbul-bireysel-terapi/"
                    className="p-5 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/80 transition-all group flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-[#8088E6] flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        Bireysel Danışmanlık
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        Danışmanlık seansları ile sorunlarınızı geride bırakmanıza yardımcı olur.
                      </p>
                      <span className="text-xs font-bold text-indigo-600 inline-flex items-center gap-1 mt-2">
                        <span>İncele</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/istanbul-aile-terapisi/"
                    className="p-5 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/80 transition-all group flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-[#8088E6] flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        Aile Danışmanlığı
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        Seanslara başlayarak bu bağı güçlendirin ve sorunlarınızı çözün.
                      </p>
                      <span className="text-xs font-bold text-indigo-600 inline-flex items-center gap-1 mt-2">
                        <span>İncele</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-28">
                  <ServicesSidebar currentSlug={post.permalink} />
                </div>
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

        {/* Methods Banner at bottom */}
        <ServiceMethodsBanner />
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

    // If this is the Danışmanlıklar index page (/istanbul-terapiler/), render ServicesIndexView (Görsel 3)
    if (params.slug === 'istanbul-terapiler') {
      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
          <ServicesIndexView />
        </>
      );
    }

    const isContactPage = params.slug.includes('iletisim');
    const isReviewPage = params.slug.includes('tavsiye');
    const isAppointmentPage = params.slug.includes('randevu');
    const featuredImg = getServiceImage(page.slug, page.title);

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <div className="py-6 sm:py-10 bg-white">
          {/* Top Title & Breadcrumb Banner (Exact match to media_1789415391296.png - Görsel 5) */}
          <div className="bg-[#f0f1f8] py-12 sm:py-14 mb-8 sm:mb-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                {page.title}
              </h1>
              <nav className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                <Link href="/" className="hover:underline inline-flex items-center gap-1.5 text-slate-800">
                  <Home className="w-3.5 h-3.5" />
                  <span>İSTANBUL PSİKOLOG</span>
                </Link>
                <span className="text-slate-400">&gt;</span>
                <span className="text-indigo-600 font-bold">{page.title}</span>
              </nav>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* If reviews page */}
            {isReviewPage && (
              <div className="mb-12">
                <ReviewsSection />
              </div>
            )}

            {/* If contact page */}
            {isContactPage && (
              <div className="mb-12">
                <ContactSection />
              </div>
            )}

            {/* If appointment page */}
            {isAppointmentPage && (
              <div className="mb-12">
                <ContactSection />
              </div>
            )}

            {/* Standard Service Page Layout (Exact match to media_1789415391296.png - Görsel 5) */}
            {!isContactPage && !isAppointmentPage && (
              <>
                {/* Large Featured Image */}
                <div className="max-w-4xl mx-auto relative aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-100 mb-12 bg-slate-100">
                  <Image
                    src={featuredImg}
                    alt={page.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                  />
                </div>

                {/* 2-Column Grid: Content on Left, Services Sidebar on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Content */}
                  <div className="lg:col-span-8">
                    {page.content ? (
                      <div
                        className="prose-content max-w-none text-slate-700 bg-white"
                        dangerouslySetInnerHTML={{ __html: page.content }}
                      />
                    ) : (
                      <div className="p-8 bg-slate-50 rounded-2xl text-slate-600">
                        {page.excerpt || 'Bu hizmet alanı hakkında detaylı bilgi ve randevu için bize ulaşabilirsiniz.'}
                      </div>
                    )}

                    {/* 2 Bottom Recommendation Cards (Exact match to media_1789415391296.png - Görsel 5) */}
                    <div className="mt-12 bg-[#f8f9fc] rounded-2xl p-6 sm:p-8 border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Link
                        href="/istanbul-bireysel-terapi/"
                        className="group flex flex-col justify-between"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                            <Brain className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              Bireysel Danışmanlık
                            </h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                              Aile ve Evlilik, Çift, İlişki Danışmanı Esra SAYIN, danışmanlık seansları ile sorunlarınızı geride bırakmanıza yardımcı olur.
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 pl-16">
                          <ArrowRight className="w-4 h-4 text-slate-800 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>

                      <Link
                        href="/istanbul-aile-terapisi/"
                        className="group flex flex-col justify-between"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                            <Users className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              Aile Danışmanlığı
                            </h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                              Aile karmaşık ancak bağları güçlü bir yapıdır. Seanslara başlayarak bu bağı güçlendirin ve sorunlarınızı çözün.
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 pl-16">
                          <ArrowRight className="w-4 h-4 text-slate-800 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Sticky Services Sidebar */}
                  <div className="lg:col-span-4">
                    <div className="sticky top-28">
                      <ServicesSidebar currentSlug={page.slug} />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Default FAQ section on information pages */}
            <div className="mt-16 pt-12 border-t border-slate-100">
              <FaqAccordion />
            </div>
          </div>
        </div>

        {/* Danışmanlık Yöntemleri Banner (Yüz yüze veya Online) */}
        <ServiceMethodsBanner />

        {/* Contact Section at bottom */}
        <ContactSection />
      </>
    );
  }

  // Not found
  notFound();
}
