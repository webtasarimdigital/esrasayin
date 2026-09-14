'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ChevronRight, Brain, Users, HeartHandshake, CircleDot, ArrowRight } from 'lucide-react';
import { SITE_INFO } from '@/lib/data';

interface HeroSectionProps {
  onOpenAppointment?: () => void;
}

export default function HeroSection({ onOpenAppointment }: HeroSectionProps) {
  const quickServices = [
    {
      title: 'Bireysel Danışmanlık',
      description: 'Uzman Klinik Psikolog, Aile ve Çift Danışmanı Esra SAYIN, Danışmanlık seansları ile sorunlarınızı geride bırakmanıza yardımcı olur.',
      href: '/istanbul-bireysel-terapi/',
      icon: Brain,
    },
    {
      title: 'Aile Danışmanlığı',
      description: 'Aile karmaşık ancak bağları güçlü bir yapıdır. Seanslara başlayarak bu bağı güçlendirin ve sorunlarınızı çözün.',
      href: '/istanbul-aile-terapisi/',
      icon: Users,
    },
    {
      title: 'Çift Danışmanlığı',
      description: 'Online çift danışmanlığı ve İstanbul çift danışmanlığı hizmetlerimizle partnerinizle aranızdaki sorunları çözün.',
      href: '/istanbul-cift-terapisi/',
      icon: HeartHandshake,
    },
    {
      title: 'Evlilik Danışmanlığı',
      description: 'Evliliğinizde aşamadığınız sorunları danışmanlık seansları ile geride bırakabilirsiniz. Danışmanlık almaya bugün başlayın.',
      href: '/istanbul-evlilik-terapisi/',
      icon: CircleDot,
    },
  ];

  return (
    <section className="pt-1 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1600px] 2xl:max-w-[1760px] mx-auto">
        {/* MOBILE HERO (< lg) - Exact match to media_1789416076912.png */}
        <div className="block lg:hidden pt-4 pb-4">
          {/* Subtitle */}
          <span className="inline-block text-[11px] font-bold tracking-widest text-indigo-600 uppercase mb-2">
            / İSTANBUL YÜZ YÜZE &amp; ONLİNE PSİKOLOG /
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-[1.2] tracking-tight mb-2">
            Aile ve Evlilik, Çift, İlişki Danışmanı{' '}
            <span className="font-serif italic font-normal text-slate-900 block mt-1 text-3xl sm:text-4xl">
              Esra Sayın
            </span>
          </h1>

          {/* Separator Line */}
          <div className="w-full h-[1px] bg-slate-300/80 my-4" />

          {/* Subtext */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
            İstanbul Cihangir&apos;de yüz yüze, Online ile Türkiye&apos;nin ve dünyanın her yerine psikolojik danışmanlık hizmeti veriyorum.
          </p>

          {/* Buttons Row */}
          <div className="flex items-center gap-4 mb-6">
            {onOpenAppointment ? (
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border-2 border-indigo-600 text-indigo-700 bg-white hover:bg-indigo-50 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                <span>RANDEVU AL</span>
                <ChevronRight className="w-4 h-4 text-indigo-600" />
              </button>
            ) : (
              <Link
                href="/istanbul-psikolog-randevu/"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border-2 border-indigo-600 text-indigo-700 bg-white hover:bg-indigo-50 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                <span>RANDEVU AL</span>
                <ChevronRight className="w-4 h-4 text-indigo-600" />
              </Link>
            )}

            <a
              href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2.5 text-slate-800 hover:text-indigo-600 font-bold text-xs uppercase tracking-wider transition-all"
            >
              <div className="w-9 h-9 rounded-full bg-[#2c3e50] flex items-center justify-center shadow-sm flex-shrink-0">
                <Phone className="w-4 h-4 text-white fill-white" />
              </div>
              <span>HEMEN ARAYIN</span>
            </a>
          </div>

          {/* Fully visible photo of Esra Sayın under text */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
            <Image
              src="/images/psikolog-esra-sayin-updated-hero.webp"
              alt="Psikolog & Aile Danışmanı Esra Sayın"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* DESKTOP HERO BANNER (lg+) - Exact match to media_1789400631323.png */}
        <div
          className="hidden lg:flex relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 min-h-[640px] xl:min-h-[700px] items-center p-8 lg:p-12 xl:p-14 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/psikolog-esra-sayin-updated-hero.webp')",
            backgroundPosition: 'right 12% center',
          }}
        >
          {/* Floating White Card on Left with decore.webp wave background */}
          <div
            className="relative z-10 w-full max-w-xl xl:max-w-[580px] bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-slate-100 flex flex-col justify-between bg-no-repeat"
            style={{
              backgroundImage: "url('/images/decore.webp')",
              backgroundPosition: 'top 10% right -10px',
              backgroundSize: '320px auto',
            }}
          >
            {/* Top Subtitle */}
            <div>
              <span className="inline-block text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">
                / İSTANBUL YÜZ YÜZE &amp; ONLİNE PSİKOLOG /
              </span>

              {/* Main Heading matching screenshot */}
              <h1 className="text-3xl lg:text-[40px] font-bold text-slate-900 leading-[1.18] tracking-tight mb-2">
                Aile ve Evlilik, Çift, İlişki Danışmanı{' '}
                <span className="font-serif italic font-normal text-slate-900 block mt-1">
                  Esra Sayın
                </span>
              </h1>
            </div>

            {/* Separator Line */}
            <div className="w-full h-[1.5px] bg-slate-200/80 my-5 sm:my-6" />

            {/* Subtext */}
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8 font-normal">
              İstanbul Cihangir&apos;de yüz yüze, Online ile Türkiye&apos;nin ve dünyanın her yerine psikolojik danışmanlık hizmeti veriyorum.
            </p>

            {/* Buttons Row */}
            <div className="flex items-center gap-4">
              {onOpenAppointment ? (
                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-700 bg-white hover:bg-indigo-50 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
                >
                  <span>RANDEVU AL</span>
                  <ChevronRight className="w-4 h-4 text-indigo-600" />
                </button>
              ) : (
                <Link
                  href="/istanbul-psikolog-randevu/"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-700 bg-white hover:bg-indigo-50 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
                >
                  <span>RANDEVU AL</span>
                  <ChevronRight className="w-4 h-4 text-indigo-600" />
                </Link>
              )}

              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2c3e50] hover:bg-[#1a252f] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-3 h-3 text-white fill-white" />
                </div>
                <span>HEMEN ARAYIN</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 CONSULTATION CARDS DIRECTLY BENEATH HERO (From media_1789400631323.png) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-10 sm:pt-14">
          {quickServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50/80 transition-all"
              >
                {/* Purple Icon on Left */}
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#8088E6] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#8088E6] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center text-slate-900 font-bold group-hover:text-indigo-600 group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
