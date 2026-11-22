import React from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import { Translation } from '../data/translations';
import { LegalTranslation } from '../data/legalTranslations';
import { SeoTranslation } from '../data/seoTranslations';

interface FooterProps {
  t: Translation;
  legal: LegalTranslation;
  seo: SeoTranslation;
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ t, legal, seo, onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-zinc-900 pt-16 pb-12 text-zinc-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand info */}
          <div className="md:col-span-4 space-y-4">
            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="inline-flex items-center min-h-[44px] font-['Rajdhani'] text-3xl font-extrabold tracking-[0.25em] text-white hover:text-[#D4AF37] transition-colors"
            >
              DAST
            </a>
            <p className="text-zinc-300 max-w-sm text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-200">
              {t.footer.navTitle}
            </h2>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="/#storitve"
                  onClick={(e) => handleNav(e, '/#storitve')}
                  className="inline-flex items-center min-h-[44px] text-zinc-300 hover:text-white transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="/#zakaj-mi"
                  onClick={(e) => handleNav(e, '/#zakaj-mi')}
                  className="inline-flex items-center min-h-[44px] text-zinc-300 hover:text-white transition-colors"
                >
                  {t.nav.whyUs}
                </a>
              </li>
              <li>
                <a
                  href="/#podrocje-delovanja"
                  onClick={(e) => handleNav(e, '/#podrocje-delovanja')}
                  className="inline-flex items-center min-h-[44px] text-zinc-300 hover:text-white transition-colors"
                >
                  {seo.serviceAreas.tag}
                </a>
              </li>
              <li>
                <a
                  href="/#kontakt"
                  onClick={(e) => handleNav(e, '/#kontakt')}
                  className="inline-flex items-center min-h-[44px] text-zinc-300 hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              {legal.ui.legalTitle}
            </h2>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="/impressum"
                  onClick={(e) => handleNav(e, '/impressum')}
                  className="inline-flex items-center min-h-[44px] text-zinc-300 hover:text-[#D4AF37] transition-colors"
                >
                  {legal.ui.links.impressum}
                </a>
              </li>
              <li>
                <a
                  href="/splosni-pogoji"
                  onClick={(e) => handleNav(e, '/splosni-pogoji')}
                  className="inline-flex items-center min-h-[44px] text-zinc-300 hover:text-[#D4AF37] transition-colors"
                >
                  {legal.ui.links.terms}
                </a>
              </li>
              <li>
                <a
                  href="/politika-zasebnosti"
                  onClick={(e) => handleNav(e, '/politika-zasebnosti')}
                  className="inline-flex items-center min-h-[44px] text-zinc-300 hover:text-[#D4AF37] transition-colors"
                >
                  {legal.ui.links.privacy}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-200">
              {t.footer.contactTitle}
            </h2>
            <div className="space-y-1">
              <a
                href={`tel:${t.contact.phone.replace(/\s+/g, '')}`}
                aria-label={`${seo.a11y.callPhone}: ${t.contact.phone}`}
                className="flex items-center gap-2.5 min-h-[44px] text-white hover:text-[#F59E0B] transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                <span>{t.contact.phone}</span>
              </a>

              <a
                href={`https://wa.me/${t.contact.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={seo.a11y.sendWhatsApp}
                className="flex items-center gap-2.5 min-h-[44px] text-emerald-300 hover:text-emerald-200 transition-colors font-medium"
              >
                <MessageSquare className="w-4 h-4 fill-current shrink-0" aria-hidden="true" />
                <span>WhatsApp: {t.contact.phone}</span>
              </a>

              <a
                href="mailto:info@dast-finish.com"
                aria-label={seo.a11y.sendEmail}
                className="flex items-center gap-2.5 min-h-[44px] text-zinc-200 hover:text-[#D4AF37] transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                <span>info@dast-finish.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>{t.footer.rights}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-zinc-300">
            <a
              href="/impressum"
              onClick={(e) => handleNav(e, '/impressum')}
              className="inline-flex items-center min-h-[44px] hover:text-[#D4AF37] transition-colors"
            >
              {legal.ui.links.impressum}
            </a>
            <span className="text-zinc-600" aria-hidden="true">·</span>
            <a
              href="/splosni-pogoji"
              onClick={(e) => handleNav(e, '/splosni-pogoji')}
              className="inline-flex items-center min-h-[44px] hover:text-[#D4AF37] transition-colors"
            >
              {legal.ui.links.terms}
            </a>
            <span className="text-zinc-600" aria-hidden="true">·</span>
            <a
              href="/politika-zasebnosti"
              onClick={(e) => handleNav(e, '/politika-zasebnosti')}
              className="inline-flex items-center min-h-[44px] hover:text-[#D4AF37] transition-colors"
            >
              {legal.ui.links.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
