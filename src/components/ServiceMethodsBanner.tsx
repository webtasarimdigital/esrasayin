'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface ServiceMethodsBannerProps {
  onOpenAppointment?: () => void;
}

export default function ServiceMethodsBanner({ onOpenAppointment }: ServiceMethodsBannerProps) {
  const [activeTab, setActiveTab] = useState<'online' | 'yuzyuze'>('online');

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            / YÜZ YÜZE VEYA ONLİNE /
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mt-2">
            Danışmanlık{' '}
            <span className="font-serif italic font-normal text-slate-800">
              yöntemleri
            </span>
          </h2>

          {/* Interactive Switch Pills */}
          <div className="inline-flex items-center p-1 bg-[#2c3e50] rounded-full mt-6 shadow-md">
            <button
              onClick={() => setActiveTab('yuzyuze')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'yuzyuze'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              YÜZ YÜZE
            </button>
            <button
              onClick={() => setActiveTab('online')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'online'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              ONLİNE
            </button>
          </div>
        </div>

        {/* Big Rounded Interactive Banner matching media_1789408370012.png */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#1e293b] border border-slate-700 min-h-[380px] sm:min-h-[440px] flex flex-col lg:flex-row items-stretch">
          {/* Left Text Block with Dark Backdrop */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between z-10 bg-[#1e293b]/95 lg:bg-[#1e293b]/90 backdrop-blur-sm">
            <div>
              <h3 className="text-4xl sm:text-5xl font-serif italic text-white mb-4">
                {activeTab === 'online' ? 'Online' : 'Yüz Yüze'}
              </h3>
              <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed mb-8">
                {activeTab === 'online'
                  ? "Online danışmanlık seanslarına katılarak Türkiye'nin ve dünyanın herhangi bir yerinden seanslara katılabilirsiniz. Yüz yüze danışmanlık ve online danışmanlık arasında hiçbir fark yoktur. Danışmanlık süreci, online seanslarda da yüz yüze seanslarda olduğu gibi gerçekleşmektedir."
                  : "İstanbul Beyoğlu Cihangir'deki Sıraselviler Caddesi üzerinde yer alan ofisimizde, sakin ve güvenli bir ortamda yüz yüze seanslar gerçekleştirilmektedir. Tüm görüşmeler koşulsuz gizlilik ve profesyonel etik kuralları çerçevesinde yürütülür."}
              </p>
            </div>

            <div>
              {onOpenAppointment ? (
                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <span>RANDEVU AL</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-900" />
                </button>
              ) : (
                <Link
                  href="/istanbul-psikolog-randevu/"
                  className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <span>RANDEVU AL</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-900" />
                </Link>
              )}
            </div>
          </div>

          {/* Right Image Block */}
          <div className="w-full lg:w-1/2 relative min-h-[280px] lg:min-h-full">
            <Image
              src="/images/psikolog-esra-sayin-updated-hero.webp"
              alt="Psikolog Esra Sayın Danışmanlık"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
