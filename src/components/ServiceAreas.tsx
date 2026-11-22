import React from 'react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SeoTranslation } from '../data/seoTranslations';

interface ServiceAreasProps {
  seo: SeoTranslation;
  onOpenQuote: () => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ seo, onOpenQuote }) => {
  const { serviceAreas } = seo;

  return (
    <section
      id="podrocje-delovanja"
      aria-labelledby="service-areas-heading"
      className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#D4AF37]" aria-hidden="true" />
            <span>{serviceAreas.tag}</span>
          </div>
          <h2
            id="service-areas-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            {serviceAreas.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            {serviceAreas.subtitle}
          </p>
        </div>

        {/* 3 Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {serviceAreas.regions.map((region, index) => (
            <article
              key={index}
              className="bg-[#18181B] border border-zinc-800 hover:border-[#C19346]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                    {region.eyebrow}
                  </span>
                  <div
                    className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0"
                    aria-hidden="true"
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {region.name}
                </h3>

                {/* City Pills */}
                <ul className="flex flex-wrap gap-2 mb-5">
                  {region.cities.map((city) => (
                    <li
                      key={city}
                      className="text-xs font-medium text-zinc-200 bg-[#0A0A0A] border border-zinc-800 px-3 py-1.5 rounded-full"
                    >
                      {city}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {region.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Specialties & CTA Strip */}
        <div className="bg-[#18181B] border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              {serviceAreas.specialtiesLabel}
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
              {serviceAreas.specialties.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 text-sm text-zinc-200 font-medium"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#D4AF37] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={onOpenQuote}
            className="shrink-0 min-h-[48px] inline-flex items-center justify-center gap-2.5 bg-[#D4AF37] hover:bg-[#C19346] text-black font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg shadow-[#D4AF37]/15 transition-colors duration-200"
          >
            <span>{serviceAreas.cta}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
