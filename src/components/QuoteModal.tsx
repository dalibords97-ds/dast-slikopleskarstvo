import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Translation } from '../data/translations';
import { LegalTranslation } from '../data/legalTranslations';
import { SeoTranslation } from '../data/seoTranslations';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation;
  legal: LegalTranslation;
  seo: SeoTranslation;
  onNavigate: (path: string) => void;
  initialValues?: {
    service?: string;
    area?: number | string;
    notes?: string;
  };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  t,
  legal,
  seo,
  onNavigate,
  initialValues,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialValues?.service || 'Airless barvanje');
  const [area, setArea] = useState(initialValues?.area ? String(initialValues.area) : '');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState(initialValues?.notes || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          service,
          area,
          location,
          notes,
        }),
      });
      if (!response.ok) {
        console.error('Email send failed', await response.text());
      }
    } catch (err) {
      console.error('Error sending email', err);
    }
  };

  const handleLegalLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onClose();
    onNavigate(path);
  };

  const handleWhatsAppSend = () => {
    const text = `Pozdravljeni DAST!\nŽelim ponudbo za slikopleskarstvo:\n- Ime: ${name || '/'}\n- Telefon: ${phone || '/'}\n- Storitev: ${service}\n- Kvadratura: ${area ? `${area} m²` : '/'}\n- Lokacija: ${location || '/'}\n- Opombe: ${notes || '/'}`;
    const url = `https://wa.me/38669950491?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#18181B] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between gap-4">
          <div>
            <h2 id="quote-modal-title" className="text-xl font-bold text-white">
              {t.contact.modalTitle}
            </h2>
            <p className="text-xs text-zinc-300 mt-1">
              {t.contact.modalSubtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors shrink-0"
            aria-label={seo.a11y.closeModal}
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div
                className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto"
                aria-hidden="true"
              >
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.contact.successMessage}
              </h3>
              <p className="text-sm text-zinc-300 max-w-sm mx-auto">
                Naša ekipa vas bo kontaktirala za potrditev termina brezplačnega ogleda.
              </p>
              <div className="pt-4 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="min-h-[44px] flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-6 rounded-lg text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" aria-hidden="true" />
                  <span>Pošlji še sporočilo na WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="min-h-[44px] text-xs text-zinc-300 hover:text-white py-2"
                >
                  Zapri okno
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="quote-name"
                  className="block text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1.5"
                >
                  {t.contact.nameLabel} *
                </label>
                <input
                  id="quote-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="npr. Marko Novak"
                  className="w-full min-h-[44px] bg-[#0A0A0A] border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-phone"
                  className="block text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1.5"
                >
                  {t.contact.phoneLabel} *
                </label>
                <input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+386 ..."
                  className="w-full min-h-[44px] bg-[#0A0A0A] border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-service"
                  className="block text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1.5"
                >
                  {t.contact.serviceLabel}
                </label>
                <select
                  id="quote-service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full min-h-[44px] bg-[#0A0A0A] border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                >
                  <option value="Airless barvanje">Airless barvanje</option>
                  <option value="Kitanje in glajenje">Kitanje in glajenje (Q1–Q4)</option>
                  <option value="Celovita prenova (kitanje + airless)">
                    Celovita prenova sten (kitanje + airless)
                  </option>
                  <option value="Dekorativne tehnike">Dekorativne stenske tehnike</option>
                  <option value="Drugo">Drugo</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="quote-area"
                    className="block text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1.5"
                  >
                    {t.contact.areaLabel}
                  </label>
                  <input
                    id="quote-area"
                    name="area"
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="npr. 120"
                    className="w-full min-h-[44px] bg-[#0A0A0A] border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-location"
                    className="block text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1.5"
                  >
                    {t.contact.locationLabel}
                  </label>
                  <input
                    id="quote-location"
                    name="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="npr. Nova Gorica"
                    className="w-full min-h-[44px] bg-[#0A0A0A] border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="quote-notes"
                  className="block text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1.5"
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="quote-notes"
                  name="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Kratek opis stanja sten, želeni roki..."
                  className="w-full bg-[#0A0A0A] border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <p className="text-xs leading-relaxed text-zinc-300 text-center px-1">
                  {legal.ui.formConsent.prefix}
                  <a
                    href="/splosni-pogoji"
                    onClick={(e) => handleLegalLink(e, '/splosni-pogoji')}
                    className="text-[#D4AF37] hover:text-[#F59E0B] underline decoration-[#C19346]/60 underline-offset-2 transition-colors"
                  >
                    {legal.ui.formConsent.termsLink}
                  </a>
                  {legal.ui.formConsent.and}
                  <a
                    href="/politika-zasebnosti"
                    onClick={(e) => handleLegalLink(e, '/politika-zasebnosti')}
                    className="text-[#D4AF37] hover:text-[#F59E0B] underline decoration-[#C19346]/60 underline-offset-2 transition-colors"
                  >
                    {legal.ui.formConsent.privacyLink}
                  </a>
                  {legal.ui.formConsent.suffix}
                </p>

                <button
                  type="submit"
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold py-3.5 px-6 rounded-lg text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all duration-200"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>{t.contact.submitButton}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 border border-emerald-500/80 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 font-semibold py-3 px-6 rounded-lg text-sm transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4 fill-current" aria-hidden="true" />
                  <span>Pošlji neposredno na WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
