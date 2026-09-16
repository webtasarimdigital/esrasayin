import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { SITE_INFO, SERVICES } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const localSeoLinks = [
    { name: 'Beyoğlu Psikolog', href: '/beyoglu-psikolog/' },
    { name: 'Cihangir Psikolog', href: '/cihangir-psikolog/' },
    { name: 'Taksim Psikolog', href: '/taksim-psikolog/' },
    { name: 'Şişli Psikolog', href: '/sisli-psikolog/' },
    { name: 'Nişantaşı Psikolog', href: '/nisantasi-psikolog/' },
    { name: 'Şişli Aile Danışmanlığı', href: '/sisli-aile-danismanligi/' },
    { name: 'Şişli Çift Danışmanlığı', href: '/sisli-cift-terapisi/' },
    { name: 'Online Psikolog', href: '/online-psikolog/' },
  ];

  return (
    <footer className="bg-[#192a3d] text-slate-200 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Bio & Brand */}
          <div className="lg:col-span-4 space-y-4">
            <Logo light showText />
            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed mt-4">
              Psikolog &amp; Aile Danışmanı Esra Sayın, İstanbul Cihangir’deki ofisinde yüz yüze ve online platformlarda bilimsel ekollerle bireysel, çift ve aile danışmanlığı hizmeti sunmaktadır.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SITE_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SITE_INFO.socials.doktorTakvimi}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doktor Takvimi"
                className="px-3.5 py-2 rounded-full bg-slate-800 hover:bg-indigo-600 text-xs font-bold text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>DoktorTakvimi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Services / Counseling */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-b border-slate-700/80 pb-2">
              Danışmanlık Alanları
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-[15px]">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/`}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Local Locations */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-b border-slate-700/80 pb-2">
              Hizmet Bölgeleri
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-[15px]">
              {localSeoLinks.map((loc) => (
                <li key={loc.href}>
                  <Link
                    href={loc.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{loc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-b border-slate-700/80 pb-2">
              İletişim &amp; Adres
            </h3>
            <div className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-300">
              <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <span>
                {SITE_INFO.address.street}, {SITE_INFO.address.district}, {SITE_INFO.address.city}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-[15px] text-slate-300">
              <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-indigo-300 font-bold text-white text-base">
                {SITE_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-[15px] text-slate-300">
              <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white">
                {SITE_INFO.email}
              </a>
            </div>
            <div className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-300 pt-1">
              <Clock className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <span>{SITE_INFO.workingHours}</span>
            </div>

            <div className="pt-2">
              <Link
                href="/onam-formu/"
                className="inline-block text-xs sm:text-sm text-slate-300 hover:text-indigo-300 underline font-medium"
              >
                Aydınlatılmış Onam Formu &amp; KVKK Metni
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory & Ethical Compliance Notice */}
        <div className="border-t border-slate-800 pt-6 pb-4">
          <div className="bg-slate-800/50 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-slate-300 leading-relaxed border border-slate-700/60">
            <strong className="text-white font-semibold">Yasal ve Etik Bilgilendirme:</strong> Bu sitede yer alan makale, içerik ve bilgiler yalnızca genel psikolojik bilgilendirme amaçlıdır. 1219 Sayılı Tababet ve Şuabatı San&apos;atlarının Tarzı İcrasına Dair Kanun uyarınca, psikologlar hekim değildir; sitede sunulan hizmetler tıbbi muayene, teşhis veya tedavi niteliği taşımaz. Psikiyatrik tanı ve farmakolojik tedavi gerektiren durumlarda lütfen bir psikiyatri hekimine başvurunuz.
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-400 gap-4">
          <p>© {currentYear} Psikolog &amp; Aile Danışmanı Esra Sayın. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-white transition-colors">
              Anasayfa
            </Link>
            <Link href="/blog/" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/istanbul-psikolog-tavsiye/" className="hover:text-white transition-colors">
              Yorumlar
            </Link>
            <Link href="/onam-formu/" className="hover:text-white transition-colors">
              Onam Formu
            </Link>
            <Link href="/istanbul-psikolog-iletisim/" className="hover:text-white transition-colors">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
