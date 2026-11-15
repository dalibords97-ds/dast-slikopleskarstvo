import React from 'react';
import { PaintRoller, SprayCan, ShieldCheck, Check } from 'lucide-react';
import { Translation } from '../data/translations';

interface ServicesProps {
  t: Translation;
  onOpenQuote: () => void;
}

export const Services: React.FC<ServicesProps> = ({ t, onOpenQuote }) => {
  return (
    <section id="storitve" className="py-24 bg-[#111114] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#F59E0B]" />
            <span>{t.services.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl">
            {t.services.title}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((item, index) => {
            return (
              <div
                key={index}
                className="group relative bg-[#18181D] rounded-xl overflow-hidden border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-black/50"
              >
                {/* Image Area with Badge & Number */}
                <div className="relative h-60 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  {/* Gradient over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181D] via-[#18181D]/40 to-transparent" />

                  {/* Icon Badge Top Left */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-md bg-[#F59E0B] flex items-center justify-center text-black shadow-lg">
                    {index === 0 && <PaintRoller className="w-5 h-5 text-black" />}
                    {index === 1 && <SprayCan className="w-5 h-5 text-black" />}
                    {index === 2 && <ShieldCheck className="w-5 h-5 text-black" />}
                  </div>

                  {/* Number Badge Top Right */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`text-2xl font-black font-['Rajdhani'] ${
                        item.highlightTitle ? 'text-[#F59E0B]' : 'text-zinc-600/70'
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className={`text-xl font-bold mb-3 tracking-wide ${
                        item.highlightTitle ? 'text-[#F59E0B]' : 'text-white'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2.5 mb-6">
                      {item.features.map((feat, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-2.5 text-xs text-zinc-300"
                        >
                          <span className="w-4 h-4 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mt-0.5 shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={onOpenQuote}
                    className="w-full py-2.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-zinc-700/60"
                  >
                    Povpraševanje
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
