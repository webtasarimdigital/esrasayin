'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, ChevronRight, ArrowRight } from 'lucide-react';
import ContactSection from './ContactSection';

export default function ServicesIndexView() {
  const servicesList = [
    {
      title: 'Bireysel Danışmanlık',
      href: '/istanbul-bireysel-terapi/',
      image: '/images/bireysel.webp',
      badge: 'İstanbul / Online',
    },
    {
      title: 'Aile Danışmanlığı',
      href: '/istanbul-aile-terapisi/',
      image: '/images/aile2.webp',
      badge: 'İstanbul / Online',
    },
    {
      title: 'Çift Danışmanlığı',
      href: '/istanbul-cift-terapisi/',
      image: '/images/cift.webp',
      badge: 'İstanbul / Online',
    },
    {
      title: 'Evlilik Danışmanlığı',
      href: '/istanbul-evlilik-terapisi/',
      image: '/images/evlilik.webp',
      badge: 'İstanbul / Online',
    },
    {
      title: 'Cinsel Danışmanlık',
      href: '/istanbul-cinsel-terapi/',
      image: '/images/sex.webp',
      badge: 'İstanbul / Online',
    },
  ];

  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Banner - Exact match to media_1789415309116.png (Görsel 3) */}
        <div className="bg-[#f4f2fa] rounded-2xl sm:rounded-[2.5rem] py-12 sm:py-16 text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            Danışmanlıklar
          </h1>
          <nav className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            <Link href="/" className="hover:underline inline-flex items-center gap-1 text-slate-700">
              <Home className="w-3.5 h-3.5" />
              <span>İSTANBUL PSİKOLOG</span>
            </Link>
            <span>&gt;</span>
            <span className="text-indigo-600 font-bold">DANIŞMANLIKLAR</span>
          </nav>
        </div>

        {/* Services Grid - 1 Promo Card + 5 Service Cards = Exactly 6 cards (2x3 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Intro Card with Button */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3 block">
                / CİHANGİR PSİKOLOG /
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-4">
                Zihinsel Sağlığınız için{' '}
                <span className="font-serif italic font-normal text-slate-800 block mt-1">
                  İstanbul Psikolog&apos;dan randevu alın
                </span>
              </h2>
            </div>

            <div className="pt-6">
              <Link
                href="/istanbul-psikolog-randevu/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-50 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                <span>İNCELEYİN</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Service Cards matching Görsel 3 */}
          {servicesList.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md flex flex-col justify-between p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* Top Badge */}
              <div className="relative z-10 self-start">
                <span className="inline-block bg-[#8088E6] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {service.badge}
                </span>
              </div>

              {/* Bottom Title & Link */}
              <div className="relative z-10 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-1.5 drop-shadow-md">
                  {service.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-200 group-hover:text-white transition-colors">
                  <span>İnceleyin</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Contact Section */}
      <div className="mt-16">
        <ContactSection />
      </div>
    </div>
  );
}
