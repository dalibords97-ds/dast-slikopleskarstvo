import React from 'react';
import { ArrowRight, Sparkles, Eye, Clock, ChevronDown } from 'lucide-react';
import { Translation } from '../data/translations';

interface HeroProps {
  t: Translation;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onOpenQuote }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#111114]">
      {/* High-Res Background Image with Cinematic Gradient Fade */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-amber-painter.jpg"
          alt="DAST Slikopleskarstvo"
          className="w-full h-full object-cover object-right md:object-center opacity-60 scale-105 filter brightness-100"
        />
        {/* Seamless multi-directional gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111114] via-[#111114]/90 to-[#111114]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-[#111114]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">
              {t.hero.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            <span>{t.hero.titlePart1} </span>
            <span className="text-[#F59E0B] block sm:inline">
              {t.hero.titlePart2}
            </span>{' '}
            <span className="block">{t.hero.titlePart3}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <button
              onClick={onOpenQuote}
              className="flex items-center justify-center gap-3 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-sm tracking-wide px-7 py-4 rounded-md shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#storitve"
              className="flex items-center justify-center bg-zinc-900/80 hover:bg-zinc-800 text-white font-medium text-sm px-6 py-4 rounded-md border border-zinc-700/70 hover:border-zinc-500 transition-all duration-200"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Trust Indicators Bar */}
          <div className="pt-8 border-t border-zinc-800/80 flex flex-wrap gap-y-4 gap-x-8 text-sm text-zinc-300">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              <span className="font-medium">{t.hero.cleanliness}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Eye className="w-4 h-4 text-[#F59E0B]" />
              <span className="font-medium">{t.hero.precision}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#F59E0B]" />
              <span className="font-medium">{t.hero.deadlines}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-zinc-300 transition-colors hidden md:block">
        <a href="#storitve" aria-label="Pomakni se navzdol">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
