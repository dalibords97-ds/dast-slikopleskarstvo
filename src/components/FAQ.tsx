import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Translation } from '../data/translations';

interface FAQProps {
  t: Translation;
  onOpenQuote: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ t, onOpenQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqData = t.faq;

  return (
    <section id="faq" className="py-24 bg-[#111114] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#F59E0B]" />
            <span>{faqData.tag}</span>
            <span className="w-6 h-0.5 bg-[#F59E0B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {faqData.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {faqData.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#18181E] border-amber-500/40 shadow-xl shadow-black/40'
                    : 'bg-[#15151A] border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-amber-400' : 'text-white'
                  }`}>
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-amber-500 text-black rotate-180' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-[#18181E] to-zinc-900 border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base sm:text-lg font-bold text-white mb-1">
              {faqData.boxTitle}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              {faqData.boxSubtitle}
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="shrink-0 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-lg shadow-lg shadow-amber-500/20 transition-all duration-200"
          >
            {faqData.boxCta}
          </button>
        </div>
      </div>
    </section>
  );
};
