import React from 'react';
import Link from 'next/link';
import { Home, Phone } from 'lucide-react';
import { SITE_INFO } from '@/lib/data';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto text-3xl font-bold">
          404
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Sayfa Bulunamadı</h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Dilerseniz anasayfaya dönebilir veya doğrudan bizimle iletişime geçebilirsiniz.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#192a3d] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Anasayfaya Dön</span>
          </Link>

          <a
            href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>İletişime Geç</span>
          </a>
        </div>
      </div>
    </div>
  );
}
