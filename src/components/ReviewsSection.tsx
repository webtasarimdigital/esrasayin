import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ExternalLink, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS, SITE_INFO } from '@/lib/data';

export default function ReviewsSection() {
  const platformLogos = [
    {
      name: 'DoktorTakvimi',
      image: '/images/doktortakvimi.webp',
      url: SITE_INFO.socials.doktorTakvimi,
    },
    {
      name: 'DoktorSitesi',
      image: '/images/doktorsitesicom.webp',
      url: SITE_INFO.socials.doktorSitesi,
    },
    {
      name: 'BulutPlatform',
      image: '/images/bulutklinik-randevu.webp',
      url: 'https://bulutklinik.com/dr-esra-sayin',
    },
    {
      name: 'Psikolog Pro',
      image: '/images/psikolog-pro-randevu.webp',
      url: 'https://psikolog.pro/detay/uzman-psikolog-esra-sayin',
    },
    {
      name: 'Türk Hekimleri',
      image: '/images/turkhekimleri.webp',
      url: 'https://www.turkhekimleri.com/pskesrasayin/psikoloji/istanbul',
    },
    {
      name: 'Psikolist',
      image: '/images/psikolist.webp',
      url: 'https://psikolist.com/uzmanlar/detay/esra-sayin/R0XvNyL',
    },
    {
      name: 'Doktor Portalı',
      image: '/images/doktoruzman.webp',
      url: 'https://www.doktoruzman.com/uzman/esra-sayin/psikoloji/istanbul',
    },
    {
      name: 'PsikolojiPark',
      image: '/images/psikolojipark.webp',
      url: 'https://psikolojipark.com/esrasayin',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200/60 rounded-3xl" id="danisan-yorumlari">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            / DANIŞAN MEMNUNİYETİ &amp; DEĞERLENDİRMELER /
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mt-2">
            Danışmanlık Sürecini Deneyimleyen{' '}
            <span className="font-serif italic font-normal text-slate-800">
              Danışanlarımızın Yorumları
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-4">
            DoktorTakvimi, DoktorSitesi ve bağımsız sağlık platformları üzerinden doğrulanmış gerçek danışan geri bildirimleri.
          </p>

          {/* Aggregated Rating summary */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900">5.0 / 5.0</span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-medium text-slate-600">Tam Danışan Memnuniyeti</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => {
            const initials = t.name
              .replace(/\./g, '')
              .split(' ')
              .filter(Boolean)
              .map((n) => n[0])
              .join('')
              .toUpperCase() || 'D';

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Stars + Platform */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {t.platform}
                    </span>
                  </div>

                  {/* Title */}
                  {t.title && (
                    <h3 className="text-base font-bold text-slate-900 mb-2.5">
                      {t.title}
                    </h3>
                  )}

                  {/* Comment */}
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                {/* Author Card Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-xs flex items-center justify-center shadow-sm flex-shrink-0">
                      {initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                      <p className="text-xs text-slate-500">{t.service || 'Danışan'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Doğrulanmış</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platform Verification Logos Section (Local images, 100% reliable) */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Kayıtlı ve Doğrulanmış Sağlık Platformları
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Esra Sayın&apos;ın profil ve danışan yorumlarını doğrudan ilgili platformlar üzerinden inceleyebilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {platformLogos.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-indigo-400 hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 group"
              >
                <div className="relative w-full h-10 sm:h-12 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 group-hover:text-indigo-600 transition-colors">
                  <span>{item.name}</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

