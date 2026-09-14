'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { SITE_INFO } from '@/lib/data';

interface HeaderProps {
  onOpenAppointment?: () => void;
}

export default function Header({ onOpenAppointment }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkında', href: '/istanbul-psikolog-esra-sayin/' },
    { name: 'Danışmanlıklar', href: '/istanbul-terapiler/' },
    { name: 'Danışan Yorumları', href: '/istanbul-psikolog-tavsiye/' },
    { name: 'İletişim', href: '/istanbul-psikolog-iletisim/' },
  ];

  return (
    <>
      {/* Floating Dark Pill Header - Enlarged & prominent */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 ${
          isScrolled
            ? 'py-2.5 sm:py-3 bg-white/95 backdrop-blur-md shadow-md'
            : 'pt-3 sm:pt-4 pb-2 sm:pb-3 bg-transparent'
        }`}
      >
        <div className="max-w-[1680px] 2xl:max-w-[1780px] mx-auto">
          <div className="bg-[#2c3e50] rounded-2xl md:rounded-[2.2rem] px-5 sm:px-8 py-3.5 sm:py-4.5 md:py-5 flex items-center justify-between shadow-xl border border-white/10">
            {/* Mobile Hamburger toggle - Light circular button matching original media_1789416076912.png */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menüyü Aç"
                className="w-10 h-10 rounded-full bg-[#dbe2ea] active:bg-slate-300 flex items-center justify-center text-slate-800 transition-colors shadow-sm"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-800" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-800" />
                )}
              </button>
            </div>

            {/* Logo on Left - Enlarged */}
            <div className="flex items-center">
              <Logo light showText className="scale-95 sm:scale-105 md:scale-110 origin-left" />
            </div>

            {/* Desktop Navigation Links (Center) - Larger font and generous spacing */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[14px] xl:text-[15px] font-semibold tracking-wide transition-colors ${
                      isActive
                        ? 'text-white font-bold underline decoration-indigo-400 decoration-2 underline-offset-8'
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right: RANDEVU / RANDEVU AL Pill Button */}
            <div className="flex items-center">
              {onOpenAppointment ? (
                <button
                  onClick={onOpenAppointment}
                  className="px-4 sm:px-7 py-2 sm:py-3 rounded-full border border-slate-400/60 lg:border-indigo-300/40 hover:border-white/60 bg-transparent lg:bg-white/5 hover:bg-white/15 text-white text-xs sm:text-[13px] font-semibold lg:font-bold tracking-wider transition-all uppercase inline-flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span className="hidden sm:inline">RANDEVU AL</span>
                  <span className="sm:hidden">RANDEVU</span>
                  <ChevronRight className="w-3.5 h-3.5 text-white hidden sm:inline" />
                </button>
              ) : (
                <Link
                  href="/istanbul-psikolog-randevu/"
                  className="px-4 sm:px-7 py-2 sm:py-3 rounded-full border border-slate-400/60 lg:border-indigo-300/40 hover:border-white/60 bg-transparent lg:bg-white/5 hover:bg-white/15 text-white text-xs sm:text-[13px] font-semibold lg:font-bold tracking-wider transition-all uppercase inline-flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span className="hidden sm:inline">RANDEVU AL</span>
                  <span className="sm:hidden">RANDEVU</span>
                  <ChevronRight className="w-3.5 h-3.5 text-white hidden sm:inline" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
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
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 bg-[#2c3e50] text-white py-3 rounded-xl font-bold text-sm"
              >
                <span>Hemen Ara: {SITE_INFO.phone}</span>
              </a>

              <Link
                href="/istanbul-psikolog-randevu/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 border-2 border-[#2c3e50] text-[#2c3e50] py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50"
              >
                <span>Randevu Oluştur</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
