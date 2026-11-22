import React from 'react';
import { Wrench, Wind, FileText, Calendar } from 'lucide-react';
import { Translation } from '../data/translations';

interface WhyChooseUsProps {
  t: Translation;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ t }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'tool':
        return <Wrench className="w-5 h-5 text-[#F59E0B]" />;
      case 'wind':
        return <Wind className="w-5 h-5 text-[#F59E0B]" />;
      case 'document':
        return <FileText className="w-5 h-5 text-[#F59E0B]" />;
      case 'calendar':
        return <Calendar className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#F59E0B]" />;
    }
  };

  return (
    <section id="zakaj-mi" className="py-24 bg-[#141418] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#F59E0B]" />
            <span>{t.difference.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            <span>{t.difference.titlePart1}</span>
            <span className="text-[#F59E0B]">{t.difference.titleHighlight}</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            {t.difference.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.difference.cards.map((card, index) => {
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl transition-all duration-300 flex flex-col justify-between bg-[#18181B] border border-zinc-800/80 hover:border-[#F59E0B] hover:shadow-xl hover:shadow-amber-500/10"
              >
                {/* Header: Icon & Number */}
                <div className="flex items-center justify-between mb-8" aria-hidden="true">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-zinc-800/90 border border-zinc-700/60 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-300">
                    {getIcon(card.icon)}
                  </div>

                  <span className="text-4xl font-extrabold font-['Rajdhani'] text-zinc-500/70 group-hover:text-amber-500/90 transition-colors select-none">
                    {card.number}
                  </span>
                </div>

                {/* Body */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
