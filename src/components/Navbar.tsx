import React, { useState, useEffect } from 'react';
import { Globe, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { Translation } from '../data/translations';

interface NavbarProps {
  t: Translation;
  currentLang: string;
  onSelectLang: (lang: string) => void;
  onOpenQuote: () => void;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  t,
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
    onNavigate(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
          ? 'bg-[#111114]/90 backdrop-blur-md border-b border-zinc-800/60 py-3.5 shadow-xl'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNav(e, '/')}
            className="tracking-[0.25em] font-['Rajdhani'] text-2xl sm:text-3xl font-extrabold text-white group"
          >
            <span className="text-white group-hover:text-amber-500 transition-colors">
              DAST
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            <a
              href="/#storitve"
              onClick={(e) => handleNav(e, '/#storitve')}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="/#kalkulator"
              onClick={(e) => handleNav(e, '/#kalkulator')}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {t.nav.calculator}
            </a>
            <a
              href="/#zakaj-mi"
              onClick={(e) => handleNav(e, '/#zakaj-mi')}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {t.nav.whyUs}
            </a>
            <a
              href="/#faq"
              onClick={(e) => handleNav(e, '/#faq')}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {t.nav.faq}
            </a>
            <a
              href="/#kontakt"
              onClick={(e) => handleNav(e, '/#kontakt')}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Right Actions: Language + CTA */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-zinc-300 hover:text-white font-medium px-2.5 py-1.5 rounded-md hover:bg-zinc-800/60 transition-colors"
                aria-label="Izberi jezik"
              >
                <Globe className="w-4 h-4 text-zinc-400" />
                <span>{currentLang.toUpperCase()}</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              {langMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-44 bg-[#18181B] border border-zinc-700/80 rounded-lg shadow-2xl py-1 z-20">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          onSelectLang(l.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs transition-colors ${
                          currentLang === l.code
                            ? 'text-amber-400 bg-amber-500/10 font-semibold'
                            : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
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
              onClick={onOpenQuote}
              className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200"
            >
              <span>{t.nav.requestQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 text-xs text-zinc-300 font-medium px-2 py-1 rounded bg-zinc-800/60"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currentLang.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white p-2 rounded-lg hover:bg-zinc-800"
              aria-label="Meni"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#18181B] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            <a
              href="/#storitve"
              onClick={(e) => handleNav(e, '/#storitve')}
              className="text-base font-medium text-zinc-300 hover:text-amber-400"
            >
              {t.nav.services}
            </a>
            <a
              href="/#kalkulator"
              onClick={(e) => handleNav(e, '/#kalkulator')}
              className="text-base font-medium text-zinc-300 hover:text-amber-400"
            >
              {t.nav.calculator}
            </a>
            <a
              href="/#zakaj-mi"
              onClick={(e) => handleNav(e, '/#zakaj-mi')}
              className="text-base font-medium text-zinc-300 hover:text-amber-400"
            >
              {t.nav.whyUs}
            </a>
            <a
              href="/#faq"
              onClick={(e) => handleNav(e, '/#faq')}
              className="text-base font-medium text-zinc-300 hover:text-amber-400"
            >
              {t.nav.faq}
            </a>
            <a
              href="/#kontakt"
              onClick={(e) => handleNav(e, '/#kontakt')}
              className="text-base font-medium text-zinc-300 hover:text-amber-400"
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="pt-2 border-t border-zinc-800 flex flex-wrap gap-2">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  onSelectLang(l.code);
                  setLangMenuOpen(false);
                }}
                className={`px-3 py-1.5 text-xs rounded-md ${
                  currentLang === l.code
                    ? 'bg-amber-500 text-black font-semibold'
                    : 'bg-zinc-800 text-zinc-300'
                }`}
              >
                {l.code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] text-black font-semibold py-3 rounded text-sm uppercase tracking-wider"
          >
            <span>{t.nav.requestQuote}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
