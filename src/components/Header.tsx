'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { SITE_INFO } from '@/lib/data';

interface HeaderProps {
  onOpenAppointment?: () => void;
}

export default function Header({ onOpenAppointment }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
    {
      name: 'Danışmanlıklar',
      href: '/istanbul-terapiler/',
      dropdown: [
        { name: 'Bireysel Danışmanlık', href: '/istanbul-bireysel-terapi/' },
        { name: 'Aile Danışmanlığı', href: '/istanbul-aile-terapisi/' },
        { name: 'Çift Danışmanlığı', href: '/istanbul-cift-terapisi/' },
        { name: 'Evlilik Danışmanlığı', href: '/istanbul-evlilik-terapisi/' },
        { name: 'Cinsel Danışmanlık', href: '/istanbul-cinsel-terapi/' },
        { name: 'EMDR Terapisi', href: '/emdr-terapisi/' },
        { name: 'Bilişsel Davranışçı Terapi (BDT)', href: '/bilissel-davranisci-terapi/' },
        { name: 'Şema Terapi', href: '/sema-terapi/' },
        { name: 'Ergen Danışmanlığı', href: '/ergen-terapisi/' },
        { name: 'Online Danışmanlık', href: '/online-psikolog/' },
      ],
    },
    { name: 'Danışan Yorumları', href: '/istanbul-psikolog-tavsiye/' },
    { name: 'İletişim', href: '/istanbul-psikolog-iletisim/' },
  ];

  return (
    <>
      {/* Floating Dark Pill Header - Sticks cleanly without hollow gap on scroll */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 ${
          isScrolled
            ? 'py-2 bg-white/95 backdrop-blur-md shadow-sm'
            : 'pt-3 pb-2 bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] 2xl:max-w-[1760px] mx-auto">
          <div className="bg-[#2c3e50] rounded-2xl md:rounded-[2rem] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-lg border border-white/10">
            {/* Mobile Hamburger toggle */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menüyü Aç"
                className="w-10 h-10 rounded-full bg-white/10 active:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>

            {/* Logo on Left */}
            <div className="flex items-center">
              <Logo light showText className="scale-95 sm:scale-100" />
            </div>

            {/* Desktop Navigation Links (Center) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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
                        className={`flex items-center gap-1 text-[13px] font-semibold tracking-wide transition-colors py-1 ${
                          isActive
                            ? 'text-white font-bold'
                            : 'text-gray-200 hover:text-white'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-300" />
                      </Link>

                      {isServicesOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
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
                    className={`text-[13px] font-semibold tracking-wide transition-colors ${
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

            {/* Right: RANDEVU AL Pill Button */}
            <div className="flex items-center">
              {onOpenAppointment ? (
                <button
                  onClick={onOpenAppointment}
                  className="px-5 sm:px-6 py-2 rounded-full border border-indigo-300/40 hover:border-white/60 bg-white/5 hover:bg-white/15 text-white text-xs font-bold tracking-wider transition-all uppercase inline-flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span>RANDEVU AL</span>
                  <ChevronRight className="w-3.5 h-3.5 text-white" />
                </button>
              ) : (
                <Link
                  href="/istanbul-psikolog-randevu/"
                  className="px-5 sm:px-6 py-2 rounded-full border border-indigo-300/40 hover:border-white/60 bg-white/5 hover:bg-white/15 text-white text-xs font-bold tracking-wider transition-all uppercase inline-flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span>RANDEVU AL</span>
                  <ChevronRight className="w-3.5 h-3.5 text-white" />
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
