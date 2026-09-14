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
            / UZMANLIK ALANLARI &amp; HİZMETLER /
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mt-2">
            Zihinsel ve Duygusal Denge İçin{' '}
            <span className="font-serif italic font-normal text-slate-800">
              Kişiye Özel Terapi Yaklaşımları
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
            Bilimsel dayanaklı psikoterapi ekolleriyle, yaşamın getirdiği zorlukları anlamlandırmanız ve aşmanız için yanınızdayız.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}/`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
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
            href="/istanbul-terapiler/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-indigo-600 px-6 py-3 rounded-full border border-slate-300 hover:border-indigo-600 transition-all"
          >
            <span>Tüm Terapi &amp; Danışmanlık Alanlarını İncele</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
