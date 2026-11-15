import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Calculator } from './components/Calculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { translations } from './data/translations';
import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'sl' | 'sr' | 'en' | 'de' | 'it'>('sl');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialValues, setQuoteInitialValues] = useState<{
    service?: string;
    area?: number | string;
    notes?: string;
  } | undefined>(undefined);

  const t = translations[currentLang] || translations.sl;

  const handleOpenQuote = (details?: { service: string; area: number; estimate: string }) => {
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

  return (
    <div className="min-h-screen bg-[#111114] text-white selection:bg-[#F59E0B] selection:text-black">
      {/* Navigation Bar */}
      <Navbar
        t={t}
        currentLang={currentLang}
        onSelectLang={(lang) => setCurrentLang(lang as any)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Sections */}
      <main>
        <Hero t={t} onOpenQuote={() => handleOpenQuote()} />
        <Services t={t} onOpenQuote={() => handleOpenQuote()} />
        <Calculator t={t} onOpenQuoteWithDetails={handleOpenQuote} />
        <WhyChooseUs t={t} />
        <FAQ t={t} onOpenQuote={() => handleOpenQuote()} />
        <ContactSection t={t} onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Footer */}
      <Footer t={t} />

      {/* Interactive Quote / Inspection Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        t={t}
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
