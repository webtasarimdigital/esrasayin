'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SITE_INFO } from '@/lib/data';

interface HeroSectionProps {
  onOpenAppointment?: () => void;
}

export default function HeroSection({ onOpenAppointment }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-4 pb-12 md:pt-10 md:pb-20 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Tagline / Subtitle matching screenshot 2 */}
            <div className="inline-block mb-3">
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-indigo-600 uppercase">
                / İSTANBUL YÜZ YÜZE &amp; ONLİNE PSİKOLOG /
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium tracking-tight text-slate-900 leading-[1.15] mb-4">
              Aile ve Evlilik, Çift, İlişki Danışmanı{' '}
              <span className="font-serif italic font-normal text-slate-800 block sm:inline">
                Esra Sayın
              </span>
            </h1>

            {/* Horizontal Line matching screenshot 2 */}
            <div className="w-full max-w-xl h-[1.5px] bg-slate-200 my-4" />

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mb-6">
              İstanbul Cihangir’de yüz yüze, Online ile Türkiye’nin ve dünyanın her yerine psikolojik danışmanlık hizmeti veriyorum.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              {onOpenAppointment ? (
                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-indigo-600 text-indigo-700 bg-white hover:bg-indigo-50 font-bold text-sm tracking-wide transition-all shadow-sm active:scale-95"
                >
                  <span>RANDEVU AL</span>
                  <ChevronRight className="w-4 h-4 text-indigo-600" />
                </button>
              ) : (
                <Link
                  href="/istanbul-psikolog-randevu/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-indigo-600 text-indigo-700 bg-white hover:bg-indigo-50 font-bold text-sm tracking-wide transition-all shadow-sm active:scale-95"
                >
                  <span>RANDEVU AL</span>
                  <ChevronRight className="w-4 h-4 text-indigo-600" />
                </Link>
              )}

              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#192a3d] text-white hover:bg-slate-800 font-bold text-sm tracking-wide transition-all shadow-md active:scale-95"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <span>HEMEN ARAYIN</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Bilimsel Terapi Ekolleri</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Yüksek Gizlilik &amp; Etik</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Yüz Yüze &amp; Online</span>
              </div>
            </div>
          </div>

          {/* Portrait Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="/images/psikolog-esra-sayin-updated-hero.webp"
                alt="Psikolog & Aile Danışmanı Esra Sayın"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Esra Sayın</p>
                    <p className="text-[11px] text-slate-500">Uzman Psikolog &amp; Aile Danışmanı</p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200">
                    <span className="text-amber-500 text-xs">★</span>
                    <span className="text-xs font-bold text-amber-800">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
