import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            / UZMANLIK ALANLARI &amp; DANIŞMANLIK HİZMETLERİ /
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mt-2">
            Duygusal Denge ve Sağlıklı İlişkiler İçin{' '}
            <span className="font-serif italic font-normal text-slate-800">
              Kişiye Özel Danışmanlık
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
            Yaşamın getirdiği zorlukları anlamlandırmanız, ilişkilerinizi güçlendirmeniz ve kişisel farkındalığınızı artırmanız için yanınızdayız.
          </p>
        </div>

        {/* 5 Core Services Grid matching the original site */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <Link
              key={service.slug}
              href={`/${service.slug}/`}
              className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 ${
                index >= 3 ? 'lg:col-span-1 lg:last:col-span-1' : ''
              }`}
            >
              <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[11px] font-bold text-indigo-800 px-2.5 py-1 rounded-full shadow-sm">
                  {service.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
                  <span>Detaylı Bilgi &amp; Süreç</span>
                  <span className="ml-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/istanbul-psikolog-randevu/"
            className="inline-flex items-center gap-2 bg-[#2c3e50] text-white hover:bg-[#1a252f] text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-all shadow-sm active:scale-95"
          >
            <span>Danışmanlık Randevusu Oluştur</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
