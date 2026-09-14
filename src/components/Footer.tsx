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
    { name: 'Şişli Çift Terapisi', href: '/sisli-cift-terapisi/' },
    { name: 'Online Psikolog', href: '/online-psikolog/' },
  ];

  return (
    <footer className="bg-[#192a3d] text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Bio & Brand */}
          <div className="lg:col-span-4 space-y-4">
            <Logo light showText />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-4">
              Uzman Psikolog &amp; Aile Danışmanı Esra Sayın, İstanbul Cihangir’deki ofisinde yüz yüze ve online platformlarda bilimsel terapi ekolleriyle bireysel, çift ve aile danışmanlığı hizmeti sunmaktadır.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_INFO.socials.doktorTakvimi}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doktor Takvimi"
                className="px-3 py-1.5 rounded-full bg-slate-800 hover:bg-indigo-600 text-[11px] font-bold text-white transition-colors inline-flex items-center gap-1"
              >
                <span>DoktorTakvimi</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Services / Therapies */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-700/60 pb-2">
              Terapi Alanları
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>•</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/istanbul-terapiler/"
                  className="text-indigo-400 font-bold hover:underline"
                >
                  Tüm Terapileri Görüntüle →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Local Locations */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-700/60 pb-2">
              Hizmet Bölgeleri
            </h3>
            <ul className="space-y-2 text-xs">
              {localSeoLinks.map((loc) => (
                <li key={loc.href}>
                  <Link
                    href={loc.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>•</span>
                    <span>{loc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-700/60 pb-2">
              İletişim &amp; Adres
            </h3>
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
              <span>
                {SITE_INFO.address.street}, {SITE_INFO.address.district}, {SITE_INFO.address.city}
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white font-bold text-white">
                {SITE_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white">
                {SITE_INFO.email}
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
              <Clock className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
              <span>{SITE_INFO.workingHours}</span>
            </div>

            <div className="pt-2">
              <Link
                href="/onam-formu/"
                className="inline-block text-[11px] text-slate-400 hover:text-indigo-300 underline"
              >
                Aydınlatılmış Onam Formu &amp; KVKK Metni
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory & Ethical Compliance Notice */}
        <div className="border-t border-slate-800 pt-6 pb-4">
          <div className="bg-slate-800/40 rounded-xl p-4 text-[11px] text-slate-400 leading-relaxed border border-slate-700/50">
            <strong className="text-slate-300">Yasal ve Etik Bilgilendirme:</strong> Bu sitede yer alan makale, içerik ve bilgiler yalnızca genel psikolojik bilgilendirme amaçlıdır. 1219 Sayılı Tababet ve Şuabatı San&apos;atlarının Tarzı İcrasına Dair Kanun uyarınca, psikologlar hekim değildir; sitede sunulan hizmetler tıbbi muayene, teşhis veya tedavi niteliği taşımaz. Psikiyatrik tanı ve farmakolojik tedavi gerektiren durumlarda lütfen bir psikiyatri hekimine başvurunuz.
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Psikolog &amp; Aile Danışmanı Esra Sayın. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-slate-300">
              Anasayfa
            </Link>
            <Link href="/blog/" className="hover:text-slate-300">
              Blog
            </Link>
            <Link href="/istanbul-psikolog-tavsiye/" className="hover:text-slate-300">
              Yorumlar
            </Link>
            <Link href="/onam-formu/" className="hover:text-slate-300">
              Onam Formu
            </Link>
            <Link href="/istanbul-psikolog-iletisim/" className="hover:text-slate-300">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
