'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, MessageSquare, Calendar } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenAppointment?: () => void;
}

export default function MobileBottomNav({ onOpenAppointment }: MobileBottomNavProps) {
  const pathname = usePathname();

  const items = [
    {
      label: 'Anasayfa',
      href: '/',
      icon: Home,
      isActive: pathname === '/',
    },
    {
      label: 'Hakkında',
      href: '/istanbul-psikolog-esra-sayin/',
      icon: Info,
      isActive: pathname.includes('istanbul-psikolog-esra-sayin'),
    },
    {
      label: 'Yorumlar',
      href: '/istanbul-psikolog-tavsiye/',
      icon: MessageSquare,
      isActive: pathname.includes('istanbul-psikolog-tavsiye'),
    },
    {
      label: 'Randevu Al',
      href: '/istanbul-psikolog-randevu/',
      icon: Calendar,
      isActive: pathname.includes('istanbul-psikolog-randevu'),
      isAction: !!onOpenAppointment,
    },
  ];

  return (
    <nav
      aria-label="Mobil alt navigasyon"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#2c3e50] border-t border-white/10 shadow-2xl text-white"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid grid-cols-4 h-16 items-center px-1">
        {items.map((item) => {
          const Icon = item.icon;

          if (item.isAction && onOpenAppointment) {
            return (
              <button
                key={item.label}
                onClick={onOpenAppointment}
                className={`flex flex-col items-center justify-center w-full h-full py-1 text-[11px] font-medium transition-colors ${
                  item.isActive
                    ? 'text-white font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <div className="relative p-1">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <span className="leading-tight tracking-tight mt-0.5">{item.label}</span>
              </button>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full py-1 text-[11px] font-medium transition-colors ${
                item.isActive
                  ? 'text-white font-bold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <div className="relative p-1">
                <Icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="leading-tight tracking-tight mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
