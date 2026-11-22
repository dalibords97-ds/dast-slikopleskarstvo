import React, { useState } from 'react';
import { Phone, Clock, MessageSquare, Mail, Send, CheckCircle2 } from 'lucide-react';
import { Translation } from '../data/translations';
import { SeoTranslation } from '../data/seoTranslations';
import { LegalTranslation } from '../data/legalTranslations';

interface ContactSectionProps {
  t: Translation;
  seo: SeoTranslation;
  legal: LegalTranslation;
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  t,
  seo,
  legal,
  onNavigate,
  onOpenQuote,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          tel,
          phone: tel,
          service: 'Splošno povpraševanje',
          notes,
        }),
      });
    } catch (err) {
      console.error('Error sending contact form', err);
    }
  };

  const handleLegalNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <section
      id="kontakt"
      aria-labelledby="contact-heading"
      className="py-24 bg-[#111114] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Machine-Readable Inquiry Form */}
          <div className="lg:col-span-6 space-y-6">
            <address className="not-italic">
              <ul className="space-y-4">
                {/* Phone Item */}
                <li className="flex items-center gap-4 p-4 rounded-xl bg-[#18181B] border border-zinc-800/80">
                  <div
                    className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-[#F59E0B]"
                    aria-hidden="true"
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href={`tel:${t.contact.phone.replace(/\s+/g, '')}`}
                      aria-label={`${seo.a11y.callPhone}: ${t.contact.phone}`}
                      className="inline-flex items-center min-h-[44px] text-xl sm:text-2xl font-bold text-white hover:text-[#F59E0B] transition-colors"
                    >
                      {t.contact.phone}
                    </a>
                  </div>
                </li>

                {/* Email & Working Hours Row */}
                <li className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#18181B] border border-zinc-800/80">
                    <div
                      className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-[#D4AF37] mt-0.5"
                      aria-hidden="true"
                    >
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                        E-pošta
                      </div>
                      <a
                        href="mailto:info@dast-finish.com"
                        aria-label={seo.a11y.sendEmail}
                        className="text-sm font-medium text-white hover:text-[#D4AF37] transition-colors break-all"
                      >
                        info@dast-finish.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#18181B] border border-zinc-800/80">
                    <div
                      className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-[#F59E0B] mt-0.5"
                      aria-hidden="true"
                    >
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                        {t.contact.workingHoursTitle}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {t.contact.workingHoursText}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </address>

            {/* Always-Visible Machine-Readable Contact Form */}
            <div className="p-6 rounded-2xl bg-[#18181B] border border-zinc-800/90 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-6 space-y-3" role="status" aria-live="polite">
                  <div
                    className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto"
                    aria-hidden="true"
                  >
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <p className="text-base font-bold text-white">
                    {t.contact.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setTel('');
                      setNotes('');
                    }}
                    className="min-h-[44px] px-4 text-xs text-[#D4AF37] hover:text-[#F59E0B] underline underline-offset-4"
                  >
                    {t.contact.requestInspection}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  aria-label={t.contact.modalTitle}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1.5"
                      >
                        {t.contact.nameLabel} *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="npr. Marko Novak"
                        className="w-full min-h-[44px] bg-[#0A0A0A] border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-tel"
                        className="block text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1.5"
                      >
                        {t.contact.phoneLabel} *
                      </label>
                      <input
                        id="contact-tel"
                        name="tel"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        placeholder="+386 ..."
                        className="w-full min-h-[44px] bg-[#0A0A0A] border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1.5"
                    >
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ime.priimek@email.si"
                      className="w-full min-h-[44px] bg-[#0A0A0A] border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-notes"
                      className="block text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1.5"
                    >
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="contact-notes"
                      name="notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Kratek opis del, kvadratura, lokacija..."
                      className="w-full bg-[#0A0A0A] border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    />
                  </div>

                  <p className="text-xs leading-relaxed text-zinc-300">
                    {legal.ui.formConsent.prefix}
                    <a
                      href="/splosni-pogoji"
                      onClick={(e) => handleLegalNav(e, '/splosni-pogoji')}
                      className="text-[#D4AF37] hover:text-[#F59E0B] underline decoration-[#C19346]/60 underline-offset-2 transition-colors"
                    >
                      {legal.ui.formConsent.termsLink}
                    </a>
                    {legal.ui.formConsent.and}
                    <a
                      href="/politika-zasebnosti"
                      onClick={(e) => handleLegalNav(e, '/politika-zasebnosti')}
                      className="text-[#D4AF37] hover:text-[#F59E0B] underline decoration-[#C19346]/60 underline-offset-2 transition-colors"
                    >
                      {legal.ui.formConsent.privacyLink}
                    </a>
                    {legal.ui.formConsent.suffix}
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                    <button
                      type="submit"
                      className="flex-1 min-h-[48px] flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-sm tracking-wide px-6 py-3.5 rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>{t.contact.submitButton}</span>
                    </button>

                    <a
                      href={`https://wa.me/${t.contact.phone.replace(/[^0-9]/g, '')}?text=Pozdravljeni,%20zanima%20me%20ponudba%20za%20slikopleskarstvo.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={seo.a11y.sendWhatsApp}
                      className="min-h-[48px] flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-emerald-500/80 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 font-semibold text-sm transition-all duration-200"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" aria-hidden="true" />
                      <span>{t.contact.whatsapp}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Visual Showcase Banner Card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 group h-[420px] sm:h-[480px]">
              <img
                src="/images/showcase-luxury-interior.webp"
                alt={seo.imageAlts.showcase}
                width={1000}
                height={750}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              {/* Dark subtle overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

              {/* Text & Logo Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start">
                <img
                  src="/images/dast-logo-transparent.webp"
                  alt={seo.imageAlts.logo}
                  width={420}
                  height={295}
                  loading="lazy"
                  decoding="async"
                  className="h-11 sm:h-13 w-auto object-contain mb-3 filter drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)]"
                />
                <h2
                  id="contact-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md"
                >
                  {t.contact.bannerTitle}
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenQuote}
              className="w-full min-h-[48px] flex items-center justify-center bg-[#18181B] hover:bg-zinc-800 text-[#D4AF37] font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl border border-[#C19346]/40 hover:border-[#D4AF37] transition-colors"
            >
              {t.contact.requestInspection}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
