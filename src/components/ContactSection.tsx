import React from 'react';
import { Phone, Clock, MessageSquare } from 'lucide-react';
import { Translation } from '../data/translations';

interface ContactSectionProps {
  t: Translation;
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  t,
  onOpenQuote,
}) => {
  return (
    <section id="kontakt" className="py-24 bg-[#111114] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Contact Info & Actions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Phone Item */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#18181D] border border-zinc-800/80">
              <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-[#F59E0B]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <a
                  href={`tel:${t.contact.phone.replace(/\s+/g, '')}`}
                  className="text-xl sm:text-2xl font-bold text-white hover:text-[#F59E0B] transition-colors"
                >
                  {t.contact.phone}
                </a>
              </div>
            </div>

            {/* Working Hours Item */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#18181D] border border-zinc-800/80">
              <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-[#F59E0B] mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  {t.contact.workingHoursTitle}
                </div>
                <div className="text-sm sm:text-base font-medium text-white">
                  {t.contact.workingHoursText}
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="flex items-center justify-center bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-sm tracking-wide px-7 py-4 rounded-md shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200"
              >
                {t.contact.requestInspection}
              </button>

              <a
                href={`https://wa.me/${t.contact.phone.replace(/[^0-9]/g, '')}?text=Pozdravljeni,%20zanima%20me%20ponudba%20za%20slikopleskarstvo.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-md border border-emerald-600/80 bg-emerald-950/20 hover:bg-emerald-900/30 text-emerald-400 font-semibold text-sm transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t.contact.whatsapp}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Banner Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 group h-[380px] sm:h-[420px]">
              <img
                src="/images/showcase-luxury-interior.jpg"
                alt="DAST Izvedeni projekti"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              {/* Dark subtle overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

              {/* Text & Logo Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start">
                <img
                  src="/images/dast-logo-transparent.png"
                  alt="DAST Logo"
                  className="h-11 sm:h-13 w-auto object-contain mb-3 filter drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)]"
                />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
                  {t.contact.bannerTitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
