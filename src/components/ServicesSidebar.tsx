'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Logo from './Logo';

interface ServicesSidebarProps {
  currentSlug?: string;
  onOpenAppointment?: () => void;
}

export const ALL_SERVICES = [
  { name: 'Bireysel Danışmanlık', href: '/istanbul-bireysel-terapi/' },
  { name: 'Aile Danışmanlığı', href: '/istanbul-aile-terapisi/' },
  { name: 'Çift Danışmanlığı', href: '/istanbul-cift-terapisi/' },
  { name: 'Evlilik Danışmanlığı', href: '/istanbul-evlilik-terapisi/' },
  { name: 'Cinsel Danışmanlık', href: '/istanbul-cinsel-terapi/' },
  { name: 'Aile İçi İletişim Sorunları', href: '/aile-ici-iletisim-sorunlari/' },
  { name: 'BDT', href: '/bilissel-davranisci-terapi/' },
  { name: 'EMDR Danışmanlığı', href: '/emdr-terapisi/' },
  { name: 'Ergen Danışmanlığı', href: '/ergen-terapisi/' },
  { name: 'Fobi & Korku Danışmanlığı', href: '/fobi-korku-terapisi/' },
  { name: 'Kaygı Bozuklukları', href: '/kaygi-bozukluklari/' },
  { name: 'Panik Atak', href: '/panik-atak/' },
  { name: 'Şema Eğilimli Danışmanlık', href: '/sema-terapi/' },
  { name: 'Sistematik Aile Danışmanlığı', href: '/573-sistematik-aile-terapisi-nedir-nasil-uygulanir/' },
  { name: 'Stres Yönetimi', href: '/stres-yonetimi/' },
];

export default function ServicesSidebar({ currentSlug = '', onOpenAppointment }: ServicesSidebarProps) {
  return (
    <aside className="space-y-6">
      {/* 1. Danışmanlıklar List Card (Exact match to media_1789415391296.png) */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 pb-3 mb-3 border-b border-slate-100">
          Danışmanlıklar
        </h3>

        <ul className="space-y-1">
          {ALL_SERVICES.map((item) => {
            const isActive =
              currentSlug &&
              (item.href.includes(currentSlug) || currentSlug.includes(item.href.replace(/\//g, '')));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 py-1.5 px-2 rounded-lg text-xs sm:text-[13px] transition-all duration-200 ${
                    isActive
                      ? 'text-indigo-600 font-bold bg-indigo-50/40'
                      : 'text-slate-600 hover:text-indigo-600 hover:translate-x-1'
                  }`}
                >
                  <span className={`text-[11px] ${isActive ? 'text-indigo-600 font-bold' : 'text-indigo-400'}`}>
                    •
                  </span>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 2. Appointment CTA Banner Widget (Exact match to media_1789415391296.png) */}
      <div className="bg-[#f9fafc] rounded-2xl sm:rounded-3xl p-6 text-center border border-slate-200/80 shadow-sm flex flex-col items-center justify-center">
        <div className="mb-2">
          <Logo showText={false} className="scale-90" />
        </div>

        <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
          Psikolog &amp; Aile Danışmanı
        </p>

        <h4 className="text-2xl font-bold font-serif italic text-slate-900 mt-1 mb-5">
          Seanslara Başlayın
        </h4>

        {onOpenAppointment ? (
          <button
            onClick={onOpenAppointment}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-indigo-600 text-indigo-700 bg-white hover:bg-indigo-50 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <span>RANDEVU AL</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <Link
            href="/istanbul-psikolog-randevu/"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-indigo-600 text-indigo-700 bg-white hover:bg-indigo-50 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <span>RANDEVU AL</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </aside>
  );
}
