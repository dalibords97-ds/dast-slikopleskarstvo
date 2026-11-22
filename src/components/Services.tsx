import React from 'react';
import { PaintRoller, SprayCan, ShieldCheck, Check } from 'lucide-react';
import { Translation } from '../data/translations';
import { SeoTranslation } from '../data/seoTranslations';

interface ServicesProps {
  t: Translation;
  seo: SeoTranslation;
  onOpenQuote: () => void;
}

const SERVICE_MEDIA = [
  { src: '/images/service-kitanje.webp', width: 900, height: 490 },
  { src: '/images/service-airless.webp', width: 900, height: 490 },
  { src: '/images/service-prenova.webp', width: 900, height: 599 },
];

export const Services: React.FC<ServicesProps> = ({ t, seo, onOpenQuote }) => {
  const serviceAlts = [
    seo.imageAlts.serviceKitanje,
    seo.imageAlts.serviceAirless,
    seo.imageAlts.servicePrenova,
  ];

  return (
    <section
      id="storitve"
      aria-labelledby="services-heading"
      className="py-24 bg-[#0A0A0A] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#F59E0B]" aria-hidden="true" />
            <span>{t.services.tag}</span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl"
          >
            {t.services.title}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((item, index) => {
            const media = SERVICE_MEDIA[index] || SERVICE_MEDIA[0];
            const altText = serviceAlts[index] || item.title;

            return (
              <article
                key={index}
                className="group relative bg-[#18181B] rounded-xl overflow-hidden border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-black/50"
              >
                {/* Image Area with Badge & Number */}
                <div className="relative h-60 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={media.src}
                    alt={altText}
                    width={media.width}
                    height={media.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  {/* Gradient over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-[#18181B]/40 to-transparent" />

                  {/* Icon Badge Top Left */}
                  <div
                    className="absolute top-4 left-4 w-10 h-10 rounded-md bg-[#F59E0B] flex items-center justify-center text-black shadow-lg"
                    aria-hidden="true"
                  >
                    {index === 0 && <PaintRoller className="w-5 h-5 text-black" />}
                    {index === 1 && <SprayCan className="w-5 h-5 text-black" />}
                    {index === 2 && <ShieldCheck className="w-5 h-5 text-black" />}
                  </div>

                  {/* Number Badge Top Right */}
                  <div className="absolute top-4 right-4" aria-hidden="true">
                    <span
                      className={`text-2xl font-black font-['Rajdhani'] ${
                        item.highlightTitle ? 'text-[#F59E0B]' : 'text-zinc-400/80'
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
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2.5 mb-6">
                      {item.features.map((feat, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-2.5 text-xs text-zinc-200"
                        >
                          <span
                            className="w-4 h-4 rounded-full bg-amber-500/15 text-[#F59E0B] flex items-center justify-center mt-0.5 shrink-0"
                            aria-hidden="true"
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenQuote}
                    aria-label={`${seo.a11y.requestQuoteFor}: ${item.title}`}
                    className="w-full min-h-[44px] py-3 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-100 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-zinc-700/70"
                  >
                    {t.nav.requestQuote}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
