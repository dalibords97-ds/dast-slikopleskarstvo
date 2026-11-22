import React from 'react';
import { ArrowLeft, Building2, FileText, ShieldCheck, ExternalLink, Mail } from 'lucide-react';
import {
  LegalPageSlug,
  LegalTranslation,
} from '../data/legalTranslations';

interface LegalPageProps {
  slug: LegalPageSlug;
  legal: LegalTranslation;
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  slug,
  legal,
  onNavigate,
}) => {
  const navItems: { slug: LegalPageSlug; label: string; icon: React.ReactNode }[] = [
    {
      slug: '/impressum',
      label: legal.ui.links.impressum,
      icon: <Building2 className="w-4 h-4" />,
    },
    {
      slug: '/splosni-pogoji',
      label: legal.ui.links.terms,
      icon: <FileText className="w-4 h-4" />,
    },
    {
      slug: '/politika-zasebnosti',
      label: legal.ui.links.privacy,
      icon: <ShieldCheck className="w-4 h-4" />,
    },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const activeData =
    slug === '/impressum'
      ? legal.impressum
      : slug === '/splosni-pogoji'
      ? legal.terms
      : legal.privacy;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home */}
        <div className="mb-8">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[#D4AF37] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{legal.ui.backToHome}</span>
          </a>
        </div>

        {/* Legal Route Switcher Tabs */}
        <nav
          aria-label={legal.ui.legalTitle}
          className="flex flex-wrap gap-2.5 mb-12 pb-8 border-b border-zinc-800/80"
        >
          {navItems.map((item) => {
            const isActive = item.slug === slug;
            return (
              <a
                key={item.slug}
                href={item.slug}
                onClick={(e) => handleLinkClick(e, item.slug)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#D4AF37]/10 border-[#D4AF37]/70 text-[#D4AF37] shadow-lg shadow-[#D4AF37]/5'
                    : 'bg-[#18181B]/70 border-zinc-800/80 text-zinc-400 hover:text-white hover:border-[#C19346]/40'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Page Header */}
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
            {activeData.eyebrow}
          </p>
          <h1 className="font-['Rajdhani'] text-3xl sm:text-5xl font-bold tracking-wide text-white leading-tight">
            {activeData.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            {activeData.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-300">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181B] border border-zinc-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
              {legal.ui.lastUpdatedLabel}: {legal.ui.lastUpdatedValue}
            </span>
            <span className="text-zinc-400">DAST · dast-finish.com</span>
          </div>
          {legal.ui.primaryLanguageNote && (
            <p className="mt-4 text-xs text-zinc-300 italic border-l-2 border-[#C19346]/70 pl-3">
              {legal.ui.primaryLanguageNote}
            </p>
          )}
        </header>

        {/* Content Body */}
        {slug === '/impressum' ? (
          <div className="space-y-8">
            <section className="bg-[#18181B] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#C19346] to-transparent" />
              <dl className="divide-y divide-zinc-800/70">
                {legal.impressum.fields.map((field) => (
                  <div
                    key={field.label}
                    className="px-6 py-5 sm:px-8 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-6 items-baseline"
                  >
                    <dt className="sm:col-span-4 text-xs uppercase tracking-[0.15em] text-[#C19346] font-semibold">
                      {field.label}
                    </dt>
                    <dd className="sm:col-span-8 text-sm sm:text-base text-zinc-100 font-medium break-words">
                      {field.href ? (
                        <a
                          href={field.href}
                          target={field.href.startsWith('http') ? '_blank' : undefined}
                          rel={field.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1.5 text-white hover:text-[#D4AF37] transition-colors underline decoration-[#C19346]/40 underline-offset-4 hover:decoration-[#D4AF37]"
                        >
                          {field.href.startsWith('mailto:') ? (
                            <Mail className="w-4 h-4 text-[#D4AF37]" />
                          ) : (
                            <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                          )}
                          <span>{field.value}</span>
                        </a>
                      ) : (
                        field.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Core Activities Card */}
            <section className="bg-[#18181B] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-3">
                {legal.impressum.activitiesTitle}
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {legal.impressum.activitiesText}
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-5">
            {(slug === '/splosni-pogoji'
              ? legal.terms.sections
              : legal.privacy.sections
            ).map((section) => (
              <article
                key={section.number}
                className="bg-[#18181B] border border-zinc-800/80 hover:border-[#C19346]/40 rounded-2xl p-6 sm:p-8 transition-colors duration-200 shadow-xl"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="font-['Rajdhani'] text-2xl sm:text-3xl font-bold text-[#D4AF37] leading-none select-none shrink-0 pt-0.5">
                    {section.number}
                  </span>
                  <div className="space-y-3 min-w-0">
                    <h2 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
