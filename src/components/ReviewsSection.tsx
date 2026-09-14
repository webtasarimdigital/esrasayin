import React from 'react';
import Link from 'next/link';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, SITE_INFO } from '@/lib/data';

export default function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            / DANIŞAN MEMNUNİYETİ &amp; DEĞERLENDİRMELER /
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mt-2">
            Terapi Sürecini Deneyimleyen{' '}
            <span className="font-serif italic font-normal text-slate-800">
              Danışanlarımızın Yorumları
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-4">
            DoktorTakvimi, DoktorSitesi ve Google Haritalar üzerinden doğrulanmış bağımsız değerlendirmeler.
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
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {t.platform}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic mb-4">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.service || 'Danışan'}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Onaylı</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Verification Links */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-slate-600">
          <a
            href={SITE_INFO.socials.doktorTakvimi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 transition-colors shadow-sm"
          >
            <span>DoktorTakvimi Profilini İncele</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={SITE_INFO.socials.doktorSitesi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 transition-colors shadow-sm"
          >
            <span>DoktorSitesi Profilini İncele</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={SITE_INFO.socials.googleMap}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 transition-colors shadow-sm"
          >
            <span>Google Harita Yorumlarını Gör</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
