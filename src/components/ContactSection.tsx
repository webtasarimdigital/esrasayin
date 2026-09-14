'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { SITE_INFO } from '@/lib/data';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    callMe: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp direct message composition as fallback/instant notification
    const text = encodeURIComponent(
      `Merhaba Esra Hanım,\nAd Soyad: ${formState.name}\nTelefon: ${formState.phone}\nE-posta: ${formState.email}\n${formState.callMe ? 'Telefonla aranmak istiyorum: Evet\n' : ''}Mesaj: ${formState.message}`
    );
    window.open(`https://wa.me/905386503217?text=${text}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="iletisim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            / İLETİŞİM &amp; RANDEVU MERKEZİ /
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mt-2">
            Destek ve Rehberlik İçin{' '}
            <span className="font-serif italic font-normal text-slate-800">
              Bize Ulaşın
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-4">
            İstanbul Cihangir ofisimizde yüz yüze veya dilediğiniz yerden online olarak görüşmelerimize başlayabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details & Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Ofis &amp; İletişim Bilgileri
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                    CİHANGİR OFİS
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {SITE_INFO.address.street}, {SITE_INFO.address.district}, {SITE_INFO.address.city}
                  </p>
                  <a
                    href={SITE_INFO.socials.googleMap}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-xs font-bold text-indigo-600 hover:underline"
                  >
                    Google Haritada Yol Tarifi Al →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                    TELEFON &amp; WHATSAPP
                  </h4>
                  <a
                    href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-base font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    {SITE_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Hızlı bilgi ve randevu planlaması için arayabilir veya mesaj gönderebilirsiniz.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                    E-POSTA
                  </h4>
                  <a
                    href={`mailto:${SITE_INFO.email}`}
                    className="text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors"
                  >
                    {SITE_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                    ÇALIŞMA SAATLERİ
                  </h4>
                  <p className="text-xs text-slate-700">{SITE_INFO.workingHours}</p>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href="https://wa.me/905386503217?text=Merhaba,%20randevu%20ve%20dan%C4%B1%C5%9Fmanl%C4%B1k%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp ile Hızlı Mesaj Gönder</span>
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative bg-slate-100">
              <iframe
                src={SITE_INFO.socials.googleMapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Psikolog Esra Sayın Cihangir Ofis Konumu"
              />
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Randevu &amp; Danışma Formu
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                Formu doldurarak merak ettiklerinizi iletebilirsiniz. En kısa sürede size geri dönüş yapılacaktır.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">
                    Mesajınız Başarıyla İletildi
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Talebiniz alınmıştır. En kısa sürede sizinle iletişime geçilecektir.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-emerald-800 underline mt-2"
                  >
                    Yeni bir mesaj gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Adınız ve Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Adınız ve soyadınızı giriniz"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-slate-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="05XX XXX XX XX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        E-posta Adresiniz *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="ornek@mail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Sorunuz veya Danışmak İstediğiniz Konu *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Terapiler, seanslar veya randevu hakkında merak ettiklerinizi paylaşabilirsiniz..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-slate-800"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="callMe"
                      checked={formState.callMe}
                      onChange={(e) => setFormState({ ...formState, callMe: e.target.checked })}
                      className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="callMe" className="text-xs text-slate-600 select-none cursor-pointer">
                      Sorumun yanıtı için telefonla aranmak istiyorum.
                    </label>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-normal pt-1">
                    Gönderdiğiniz tüm bilgiler Kişisel Verilerin Korunması Kanunu (KVKK) ve psikolojik danışmanlık etik ilkeleri doğrultusunda gizli tutulmaktadır.
                  </p>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#192a3d] hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Mesajı Gönder</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
