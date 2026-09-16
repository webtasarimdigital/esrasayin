'use client';

import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';
import { SERVICES, SITE_INFO } from '@/lib/data';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Yüz Yüze (Cihangir / Beyoğlu)',
    service: 'Bireysel Danışmanlık',
    preferredDate: '',
    notes: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Merhaba Esra Hanım, Randevu Talebi:\nAd Soyad: ${formData.name}\nTelefon: ${formData.phone}\nGörüşme Türü: ${formData.type}\nSeçilen Danışmanlık: ${formData.service}\nTercih Edilen Tarih/Saat: ${formData.preferredDate || 'Belirtilmedi'}\nNot: ${formData.notes || 'Yok'}`
    );
    window.open(`https://wa.me/905386503217?text=${text}`, '_blank');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Randevu Talebiniz Alındı!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Talebiniz bize ulaştı. Müsait randevu saatleri ve detaylar için en kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="mt-4 bg-[#192a3d] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-800"
            >
              Tamam
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-indigo-600 mb-2">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                RANDEVU OLUŞTUR
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Psikolojik Danışmanlık Randevusu
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              İstanbul Cihangir ofisimizde yüz yüze veya dilediğiniz yerden online olarak randevunuzu planlayın.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Adınız ve Soyadınız *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Ayşe Yılmaz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Telefon Numaranız *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="05XX XXX XX XX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Görüşme Şekli
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs text-slate-700"
                  >
                    <option value="Yüz Yüze (Cihangir / Beyoğlu)">Yüz Yüze (Cihangir)</option>
                    <option value="Online Danışmanlık (Görüntülü)">Online Danışmanlık</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Danışmanlık Alanı
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs text-slate-700"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tercih Ettiğiniz Gün / Saat Aralığı
                </label>
                <input
                  type="text"
                  placeholder="Örn: Hafta içi 18:00 sonrası veya Cumartesi"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#192a3d] hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md active:scale-95 mt-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Randevu Talebini Gönder</span>
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Hemen aramak için:</span>
              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                className="font-bold text-indigo-600 hover:underline"
              >
                {SITE_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
