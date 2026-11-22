import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Calculator } from './components/Calculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { LegalPage } from './components/LegalPage';
import { translations } from './data/translations';
import {
  legalTranslations,
  LegalPageSlug,
  SupportedLang,
} from './data/legalTranslations';
import { Phone, MessageSquare } from 'lucide-react';

const LEGAL_ROUTES: LegalPageSlug[] = [
  '/impressum',
  '/splosni-pogoji',
  '/politika-zasebnosti',
];

const DEFAULT_SEO_TITLE =
  'DAST — Slikopleskarstvo | Airless barvanje, Kitanje, Glajenje';
const DEFAULT_SEO_DESCRIPTION =
  'Sodobno in precizno slikopleskarstvo za vaš dom. Specializirani za kitanje, glajenje in barvanje z airless črpalkami za brezhibne površine. Šmartno, Kojsko, Slovenija.';

function normalizePath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

function isLegalRoute(path: string): path is LegalPageSlug {
  return LEGAL_ROUTES.includes(path as LegalPageSlug);
}

function getInitialLang(): SupportedLang {
  try {
    const saved = window.localStorage.getItem('dast-lang');
    if (saved && ['sl', 'sr', 'en', 'de', 'it'].includes(saved)) {
      return saved as SupportedLang;
    }
  } catch {
    // ignore storage errors
  }
  return 'sl';
}

export default function App() {
  const [currentLang, setCurrentLang] = useState<SupportedLang>(getInitialLang);
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePath(window.location.pathname)
  );
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialValues, setQuoteInitialValues] = useState<
    | {
        service?: string;
        area?: number | string;
        notes?: string;
      }
    | undefined
  >(undefined);

  const t = translations[currentLang] || translations.sl;
  const legal = legalTranslations[currentLang] || legalTranslations.sl;

  const handleSelectLang = (lang: string) => {
    const validLang = (['sl', 'sr', 'en', 'de', 'it'].includes(lang)
      ? lang
      : 'sl') as SupportedLang;
    setCurrentLang(validLang);
    try {
      window.localStorage.setItem('dast-lang', validLang);
    } catch {
      // ignore storage errors
    }
  };

  const navigate = useCallback((target: string) => {
    const [rawPath, hash] = target.split('#');
    const nextPath = normalizePath(rawPath || '/');
    const fullUrl = hash ? `${nextPath === '/' ? '' : nextPath}/#${hash}`.replace('//', '/') : nextPath;

    if (window.location.pathname !== nextPath || (hash && window.location.hash !== `#${hash}`)) {
      window.history.pushState({}, '', fullUrl || '/');
    }

    setCurrentPath(nextPath);

    if (hash) {
      window.setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    document.documentElement.lang = currentLang;

    let title = DEFAULT_SEO_TITLE;
    let description = DEFAULT_SEO_DESCRIPTION;

    if (currentPath === '/impressum') {
      title = legal.impressum.seoTitle;
      description = legal.impressum.seoDescription;
    } else if (currentPath === '/splosni-pogoji') {
      title = legal.terms.seoTitle;
      description = legal.terms.seoDescription;
    } else if (currentPath === '/politika-zasebnosti') {
      title = legal.privacy.seoTitle;
      description = legal.privacy.seoDescription;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [currentPath, currentLang, legal]);

  const handleOpenQuote = (details?: {
    service: string;
    area: number;
    estimate: string;
  }) => {
    if (details) {
      setQuoteInitialValues({
        service: details.service,
        area: details.area,
        notes: `Informativni izračun iz kalkulatorja: ${details.estimate}`,
      });
    } else {
      setQuoteInitialValues(undefined);
    }
    setIsQuoteModalOpen(true);
  };

  const activeLegalSlug = isLegalRoute(currentPath) ? currentPath : null;

  return (
    <div className="min-h-screen bg-[#111114] text-white selection:bg-[#F59E0B] selection:text-black">
      {/* Navigation Bar */}
      <Navbar
        t={t}
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
        onOpenQuote={() => handleOpenQuote()}
        onNavigate={navigate}
      />

      {/* Main Content or Dedicated Legal Page */}
      <main>
        {activeLegalSlug ? (
          <LegalPage
            slug={activeLegalSlug}
            legal={legal}
            onNavigate={navigate}
          />
        ) : (
          <>
            <Hero t={t} onOpenQuote={() => handleOpenQuote()} />
            <Services t={t} onOpenQuote={() => handleOpenQuote()} />
            <Calculator t={t} onOpenQuoteWithDetails={handleOpenQuote} />
            <WhyChooseUs t={t} />
            <FAQ t={t} onOpenQuote={() => handleOpenQuote()} />
            <ContactSection t={t} onOpenQuote={() => handleOpenQuote()} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer t={t} legal={legal} onNavigate={navigate} />

      {/* Interactive Quote / Inspection Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        t={t}
        legal={legal}
        onNavigate={navigate}
        initialValues={quoteInitialValues}
      />

      {/* Mobile Floating Quick Action Bar */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5 sm:hidden">
        <a
          href="https://wa.me/38669950491"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </a>
        <a
          href="tel:+38669950491"
          className="w-12 h-12 rounded-full bg-[#F59E0B] text-black flex items-center justify-center shadow-2xl hover:scale-105 transition-transform font-bold"
          aria-label="Kliči"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
