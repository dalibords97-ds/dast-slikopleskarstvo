import React from 'react';
import { ArrowRight, Sparkles, Eye, Clock, ChevronDown } from 'lucide-react';
import { Translation } from '../data/translations';
import { SeoTranslation } from '../data/seoTranslations';

interface HeroProps {
  t: Translation;
  seo: SeoTranslation;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, seo, onOpenQuote }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#0A0A0A]">
      {/* High-Res Responsive WebP Background Image with Cinematic Gradient Fade */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero-amber-painter-mobile.webp"
            type="image/webp"
          />
          <source
            srcSet="/images/hero-amber-painter.webp"
            type="image/webp"
          />
          <img
            src="/images/hero-amber-painter.webp"
            alt={seo.imageAlts.hero}
            width={1600}
            height={1117}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-right md:object-center opacity-60 scale-105 filter brightness-100"
          />
        </picture>
        {/* Seamless multi-directional gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider text-zinc-200 uppercase">
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
          <p className="text-lg sm:text-xl text-zinc-200 mb-10 max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <button
              type="button"
              onClick={onOpenQuote}
              className="min-h-[48px] flex items-center justify-center gap-3 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-sm tracking-wide px-7 py-4 rounded-md shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href="#storitve"
              className="min-h-[48px] flex items-center justify-center bg-zinc-900/80 hover:bg-zinc-800 text-white font-medium text-sm px-6 py-4 rounded-md border border-zinc-700/70 hover:border-zinc-500 transition-all duration-200"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Trust Indicators Bar */}
          <div className="pt-8 border-t border-zinc-800/80 flex flex-wrap gap-y-4 gap-x-8 text-sm text-zinc-200">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
              <span className="font-medium">{t.hero.cleanliness}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Eye className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
              <span className="font-medium">{t.hero.precision}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
              <span className="font-medium">{t.hero.deadlines}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block">
        <a
          href="#storitve"
          aria-label={seo.a11y.scrollDown}
          className="min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
