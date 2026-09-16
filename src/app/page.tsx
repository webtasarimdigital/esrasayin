import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartHandshake, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import BlogGrid from '@/components/BlogGrid';
import ReviewsSection from '@/components/ReviewsSection';
import FaqAccordion from '@/components/FaqAccordion';
import ContactSection from '@/components/ContactSection';
import { getLatestPosts } from '@/lib/data';

export default function HomePage() {
  const latestPosts = getLatestPosts(6);

  return (
    <>
      {/* Hero Section matching Screenshot 2 */}
      <HeroSection />

      {/* About Esra Sayın Teaser Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                <Image
                  src="/images/psikolog-esra-sayin-uniform.webp"
                  alt="Psikolog Esra Sayın Danışmanlık"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Hakkımda
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                Psikolog, Aile Danışmanı ve Çift Danışmanı olan <strong>Esra Sayın</strong> 1987 yılında İstanbul&apos;da doğmuştur. Lisans eğitimini üç yılda tamamlayarak Onur derecesiyle mezun olmuştur.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Özellikle Aile Danışmanlığı, Çift Danışmanlığı ve Bireysel Danışmanlık alanında çok sayıda danışan görmüştür. Uzun yıllar Türk Hava Yolları Anonim Şirketi&apos;nde çalıştıktan sonra 2022 yılında <strong>ESRA SAYIN PSİKOAKADEMİ</strong>&apos;yi kurmuştur. 2022 yılından beri kurucusu olduğu bu kurumda Cihangir&apos;de aktif olarak 12 yaş üstü danışan görmektedir.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 flex-shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">İlişki &amp; Çift Odaklı</h4>
                    <p className="text-xs text-slate-500">İletişim tıkanıklıkları ve çatışma çözümü</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Etik &amp; Gizlilik</h4>
                    <p className="text-xs text-slate-500">100% danışan mahremiyeti ve güvenli alan</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Kanıta Dayalı Ekoller</h4>
                    <p className="text-xs text-slate-500">EMDR, BDT ve Şema Danışmanlığı entegrasyonu</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Merkezi Lokasyon</h4>
                    <p className="text-xs text-slate-500">Cihangir Sıraselviler Cad. kolay ulaşım</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/istanbul-psikolog-esra-sayin/"
                  className="inline-flex items-center gap-2 bg-[#192a3d] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-sm"
                >
                  <span>Özgeçmiş &amp; Detaylar</span>
                  <span>→</span>
                </Link>

                <Link
                  href="/istanbul-psikolog-randevu/"
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-bold text-xs uppercase tracking-wider"
                >
                  <span>Hemen Randevu Al</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <ServicesGrid />

      {/* Blog Section matching Screenshot 3 */}
      <BlogGrid posts={latestPosts} />

      {/* Testimonials and Reviews Section */}
      <ReviewsSection />

      {/* FAQ Accordion Section */}
      <FaqAccordion />

      {/* Contact, Map and Form Section */}
      <ContactSection />
    </>
  );
}
