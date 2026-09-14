'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { SITE_INFO } from '@/lib/data';

interface HeaderProps {
  onOpenAppointment?: () => void;
}

export default function Header({ onOpenAppointment }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkında', href: '/istanbul-psikolog-esra-sayin/' },
    {
      name: 'Terapiler',
      href: '/istanbul-terapiler/',
      dropdown: [
        { name: 'Bireysel Terapi', href: '/istanbul-bireysel-terapi/' },
        { name: 'Aile Terapisi', href: '/istanbul-aile-terapisi/' },
        { name: 'Çift Terapisi', href: '/istanbul-cift-terapisi/' },
        { name: 'Evlilik Terapisi', href: '/istanbul-evlilik-terapisi/' },
        { name: 'Cinsel Terapi', href: '/istanbul-cinsel-terapi/' },
        { name: 'EMDR Terapisi', href: '/emdr-terapisi/' },
        { name: 'Bilişsel Davranışçı Terapi (BDT)', href: '/bilissel-davranisci-terapi/' },
        { name: 'Şema Terapi', href: '/sema-terapi/' },
        { name: 'Ergen Terapisi', href: '/ergen-terapisi/' },
        { name: 'Online Psikolog', href: '/online-psikolog/' },
      ],
    },
    { name: 'Blog', href: '/blog/' },
    { name: 'Yorumlar', href: '/istanbul-psikolog-tavsiye/' },
    { name: 'İletişim', href: '/istanbul-psikolog-iletisim/' },
  ];

  return (
    <>
      {/* Top Banner for Desktop */}
      <div className="hidden lg:block bg-[#192a3d] text-gray-300 text-xs py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>📍 İstanbul Cihangir / Beyoğlu &amp; Online Danışmanlık</span>
            <span>🕒 {SITE_INFO.workingHours}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
              className="hover:text-white flex items-center gap-1.5 transition-colors font-medium text-emerald-400"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SITE_INFO.phone}</span>
            </a>
            <span className="text-gray-500">|</span>
            <a
              href={SITE_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={SITE_INFO.socials.doktorTakvimi}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              DoktorTakvimi
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur shadow-sm py-2.5'
            : 'bg-white py-3 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* MOBILE HEADER (Matches the reference screenshot precisely: dark pill container) */}
          <div className="lg:hidden">
            <div className="bg-[#2c3e50] rounded-2xl px-3.5 py-2.5 flex items-center justify-between shadow-md">
              {/* Hamburger circular button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menüyü Aç"
                className="w-10 h-10 rounded-full bg-white/15 active:bg-white/25 flex items-center justify-center text-white transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>

              {/* Centered Logo */}
              <div className="flex-1 flex justify-center px-2">
                <Logo light showText className="scale-95" />
              </div>

              {/* Pill RANDEVU Button */}
              {onOpenAppointment ? (
                <button
                  onClick={onOpenAppointment}
                  className="px-4 py-1.5 rounded-full border border-indigo-400/60 bg-indigo-950/40 text-white text-xs font-bold tracking-wider hover:bg-indigo-900/60 transition-colors uppercase"
                >
                  RANDEVU
                </button>
              ) : (
                <Link
                  href="/istanbul-psikolog-randevu/"
                  className="px-4 py-1.5 rounded-full border border-indigo-400/60 bg-indigo-950/40 text-white text-xs font-bold tracking-wider hover:bg-indigo-900/60 transition-colors uppercase"
                >
                  RANDEVU
                </Link>
              )}
            </div>
          </div>

          {/* DESKTOP HEADER */}
          <div className="hidden lg:flex items-center justify-between">
            <Logo showText />

            <nav className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));

                if (link.dropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                          isActive
                            ? 'text-indigo-600'
                            : 'text-slate-700 hover:text-indigo-600'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      </Link>

                      {isServicesOpen && (
                        <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-indigo-600 font-bold'
                        : 'text-slate-700 hover:text-indigo-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-indigo-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{SITE_INFO.phone}</span>
              </a>

              {onOpenAppointment ? (
                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-2 bg-[#192a3d] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-indigo-900 transition-all shadow-sm active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Randevu Al</span>
                </button>
              ) : (
                <Link
                  href="/istanbul-psikolog-randevu/"
                  className="inline-flex items-center gap-2 bg-[#192a3d] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-indigo-900 transition-all shadow-sm active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Randevu Al</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="fixed inset-y-0 left-0 w-[82%] max-w-sm bg-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-left duration-200">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <Logo showText />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="py-1">
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${
                        pathname === link.href
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-6 pt-1 space-y-1">
                        {link.dropdown.slice(0, 6).map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-1.5 text-xs text-slate-500 hover:text-indigo-600"
                          >
                            • {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 bg-[#192a3d] text-white py-3 rounded-xl font-bold text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{SITE_INFO.phone}</span>
              </a>

              <Link
                href="/istanbul-psikolog-randevu/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 border-2 border-[#192a3d] text-[#192a3d] py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50"
              >
                <Calendar className="w-4 h-4" />
                <span>Randevu Oluştur</span>
              </Link>

              <div className="text-center pt-2">
                <p className="text-[11px] text-slate-400">
                  {SITE_INFO.address.district}, {SITE_INFO.address.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
