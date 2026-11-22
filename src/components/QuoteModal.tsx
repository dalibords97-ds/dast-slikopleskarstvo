import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Translation } from '../data/translations';
import { LegalTranslation } from '../data/legalTranslations';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation;
  legal: LegalTranslation;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#18181D] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">
              {t.contact.modalTitle}
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              {t.contact.modalSubtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Zapri"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {t.contact.successMessage}
              </h4>
              <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                Naša ekipa vas bo kontaktirala za potrditev termina brezplačnega ogleda.
              </p>
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-6 rounded-lg text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Pošlji še sporočilo na WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="text-xs text-zinc-400 hover:text-white py-2"
                >
                  Zapri okno
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  {t.contact.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="npr. Marko Novak"
                  className="w-full bg-[#111114] border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F59E0B] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  {t.contact.phoneLabel} *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+386 ..."
                  className="w-full bg-[#111114] border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F59E0B] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  {t.contact.serviceLabel}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#111114] border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F59E0B] transition-colors"
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
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    {t.contact.areaLabel}
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="npr. 120"
                    className="w-full bg-[#111114] border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F59E0B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    {t.contact.locationLabel}
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="npr. Goriška Brda"
                    className="w-full bg-[#111114] border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F59E0B] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Kratek opis stanja sten, želeni roki..."
                  className="w-full bg-[#111114] border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#F59E0B] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <p className="text-[11px] leading-relaxed text-zinc-400 text-center px-1">
                  {legal.ui.formConsent.prefix}
                  <a
                    href="/splosni-pogoji"
                    onClick={(e) => handleLegalLink(e, '/splosni-pogoji')}
                    className="text-[#D4AF37] hover:text-[#F59E0B] underline decoration-[#C19346]/50 underline-offset-2 transition-colors"
                  >
                    {legal.ui.formConsent.termsLink}
                  </a>
                  {legal.ui.formConsent.and}
                  <a
                    href="/politika-zasebnosti"
                    onClick={(e) => handleLegalLink(e, '/politika-zasebnosti')}
                    className="text-[#D4AF37] hover:text-[#F59E0B] underline decoration-[#C19346]/50 underline-offset-2 transition-colors"
                  >
                    {legal.ui.formConsent.privacyLink}
                  </a>
                  {legal.ui.formConsent.suffix}
                </p>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold py-3.5 px-6 rounded-lg text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submitButton}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full flex items-center justify-center gap-2 border border-emerald-600/70 bg-emerald-950/20 hover:bg-emerald-900/30 text-emerald-400 font-semibold py-3 px-6 rounded-lg text-sm transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
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
