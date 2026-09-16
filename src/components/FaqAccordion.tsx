'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/data';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items?: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqAccordion({
  items = FAQS,
  title = 'Merak Edilen Sorular ve Yanıtları',
  subtitle = '/ SIKÇA SORULAN SORULAR /',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            {subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mt-2">
            Danışmanlık ve Randevu Süreci Hakkında{' '}
            <span className="font-serif italic font-normal text-slate-800">
              {title}
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 py-5 bg-white border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
