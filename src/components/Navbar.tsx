import React, { useState, useEffect } from 'react';
import { Globe, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { Translation } from '../data/translations';
import { SeoTranslation } from '../data/seoTranslations';

interface NavbarProps {
  t: Translation;
  seo: SeoTranslation;
  currentLang: string;
  onSelectLang: (lang: string) => void;
  onOpenQuote: () => void;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  t,
  seo,
  currentLang,
  onSelectLang,
  onOpenQuote,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setLangMenuOpen(false);
    onNavigate(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'sl', label: 'Slovenščina (SL)' },
    { code: 'sr', label: 'Srpski (SR)' },
    { code: 'en', label: 'English (EN)' },
    { code: 'de', label: 'Deutsch (DE)' },
    { code: 'it', label: 'Italiano (IT)' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-zinc-800/70 py-3 shadow-xl'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNav(e, '/')}
            aria-label="DAST — Domov"
            className="min-h-[44px] inline-flex items-center tracking-[0.25em] font-['Rajdhani'] text-2xl sm:text-3xl font-extrabold text-white group"
          >
            <span className="text-white group-hover:text-[#D4AF37] transition-colors">
              DAST
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Glavna navigacija" className="hidden md:flex items-center space-x-7">
            <a
              href="/#storitve"
              onClick={(e) => handleNav(e, '/#storitve')}
              className="text-sm font-medium text-zinc-200 hover:text-white transition-colors py-2"
            >
              {t.nav.services}
            </a>
            <a
              href="/#kalkulator"
              onClick={(e) => handleNav(e, '/#kalkulator')}
              className="text-sm font-medium text-zinc-200 hover:text-white transition-colors py-2"
            >
              {t.nav.calculator}
            </a>
            <a
              href="/#zakaj-mi"
              onClick={(e) => handleNav(e, '/#zakaj-mi')}
              className="text-sm font-medium text-zinc-200 hover:text-white transition-colors py-2"
            >
              {t.nav.whyUs}
            </a>
            <a
              href="/#faq"
              onClick={(e) => handleNav(e, '/#faq')}
              className="text-sm font-medium text-zinc-200 hover:text-white transition-colors py-2"
            >
              {t.nav.faq}
            </a>
            <a
              href="/#kontakt"
              onClick={(e) => handleNav(e, '/#kontakt')}
              className="text-sm font-medium text-zinc-200 hover:text-white transition-colors py-2"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Right Actions: Language + CTA */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                aria-label={seo.a11y.selectLanguage}
                aria-expanded={langMenuOpen}
                aria-haspopup="listbox"
                className="min-h-[44px] flex items-center gap-1.5 text-xs uppercase tracking-wider text-zinc-200 hover:text-white font-medium px-3 py-2 rounded-md hover:bg-zinc-800/70 transition-colors"
              >
                <Globe className="w-4 h-4 text-zinc-300" aria-hidden="true" />
                <span>{currentLang.toUpperCase()}</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-300" aria-hidden="true" />
              </button>

              {langMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setLangMenuOpen(false)}
                    aria-hidden="true"
                  />
                  <div
                    role="listbox"
                    aria-label={seo.a11y.selectLanguage}
                    className="absolute right-0 mt-2 w-48 bg-[#18181B] border border-zinc-700/80 rounded-lg shadow-2xl py-1 z-20"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        role="option"
                        aria-selected={currentLang === l.code}
                        onClick={() => {
                          onSelectLang(l.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full min-h-[40px] text-left px-4 py-2 text-xs transition-colors ${
                          currentLang === l.code
                            ? 'text-[#D4AF37] bg-[#D4AF37]/10 font-semibold'
                            : 'text-zinc-200 hover:bg-zinc-800 hover:text-white'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="min-h-[44px] flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200"
            >
              <span>{t.nav.requestQuote}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setLangMenuOpen(!langMenuOpen);
                  setMobileMenuOpen(false);
                }}
                aria-label={seo.a11y.selectLanguage}
                aria-expanded={langMenuOpen}
                aria-haspopup="listbox"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center gap-1.5 text-xs text-zinc-100 font-semibold px-3 py-2 rounded-lg bg-zinc-800/80 border border-zinc-700/60"
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span>{currentLang.toUpperCase()}</span>
              </button>

              {langMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setLangMenuOpen(false)}
                    aria-hidden="true"
                  />
                  <div
                    role="listbox"
                    aria-label={seo.a11y.selectLanguage}
                    className="absolute right-0 mt-2 w-44 bg-[#18181B] border border-zinc-700/80 rounded-lg shadow-2xl py-1 z-20"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        role="option"
                        aria-selected={currentLang === l.code}
                        onClick={() => {
                          onSelectLang(l.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full min-h-[44px] text-left px-4 py-2 text-xs transition-colors ${
                          currentLang === l.code
                            ? 'text-[#D4AF37] bg-[#D4AF37]/10 font-semibold'
                            : 'text-zinc-200 hover:bg-zinc-800 hover:text-white'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setLangMenuOpen(false);
              }}
              aria-label={seo.a11y.toggleMenu}
              aria-expanded={mobileMenuOpen}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-100 hover:text-white p-2 rounded-lg hover:bg-zinc-800"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobilna navigacija"
          className="md:hidden bg-[#18181B] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-4 shadow-xl"
        >
          <div className="flex flex-col space-y-1">
            <a
              href="/#storitve"
              onClick={(e) => handleNav(e, '/#storitve')}
              className="min-h-[44px] flex items-center text-base font-medium text-zinc-200 hover:text-[#D4AF37]"
            >
              {t.nav.services}
            </a>
            <a
              href="/#kalkulator"
              onClick={(e) => handleNav(e, '/#kalkulator')}
              className="min-h-[44px] flex items-center text-base font-medium text-zinc-200 hover:text-[#D4AF37]"
            >
              {t.nav.calculator}
            </a>
            <a
              href="/#zakaj-mi"
              onClick={(e) => handleNav(e, '/#zakaj-mi')}
              className="min-h-[44px] flex items-center text-base font-medium text-zinc-200 hover:text-[#D4AF37]"
            >
              {t.nav.whyUs}
            </a>
            <a
              href="/#faq"
              onClick={(e) => handleNav(e, '/#faq')}
              className="min-h-[44px] flex items-center text-base font-medium text-zinc-200 hover:text-[#D4AF37]"
            >
              {t.nav.faq}
            </a>
            <a
              href="/#kontakt"
              onClick={(e) => handleNav(e, '/#kontakt')}
              className="min-h-[44px] flex items-center text-base font-medium text-zinc-200 hover:text-[#D4AF37]"
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-wrap gap-2">
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                aria-pressed={currentLang === l.code}
                onClick={() => {
                  onSelectLang(l.code);
                  setLangMenuOpen(false);
                }}
                className={`min-w-[44px] min-h-[44px] px-3.5 py-2 text-xs rounded-md ${
                  currentLang === l.code
                    ? 'bg-[#F59E0B] text-black font-semibold'
                    : 'bg-zinc-800 text-zinc-200'
                }`}
              >
                {l.code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-[#F59E0B] text-black font-semibold py-3 rounded text-sm uppercase tracking-wider"
          >
            <span>{t.nav.requestQuote}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </nav>
      )}
    </header>
  );
};
