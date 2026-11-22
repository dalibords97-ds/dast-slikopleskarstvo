import { SupportedLang } from './legalTranslations';

export interface ClientReview {
  reviewId: string;
  reviewerName: string;
  starRating: number;
  comment: string;
  createTime: string;
  replyComment?: string;
}

export interface ReviewsApiResponse {
  source: 'google' | 'fallback';
  averageRating: number;
  totalReviewCount: number;
  reviews: ClientReview[];
}

export interface ReviewsUiTranslation {
  eyebrow: string;
  title: string;
  subtitle: string;
  verifiedLabel: string;
  reviewsCountSuffix: string;
  ctaWriteReview: string;
  ctaViewAll: string;
  ownerReplyLabel: string;
  starsAriaTemplate: string; // e.g., "{n} od 5 zvezdic"
  dateLocale: string;
}

export const INITIAL_FALLBACK_REVIEWS: ReviewsApiResponse = {
  source: 'fallback',
  averageRating: 5.0,
  totalReviewCount: 5,
  reviews: [
    {
      reviewId: 'dast-gbp-1',
      reviewerName: 'Marko K.',
      starRating: 5,
      comment:
        'Izjemno natančno kitanje in glajenje sten (Q4) ter airless beljenje celotne hiše v Novi Gorici. Vse je bilo vrhunsko zaščiteno, brez prahu in zaključeno točno v dogovorjenem roku.',
      createTime: '2026-10-18T10:30:00Z',
      replyComment:
        'Hvala za zaupanje in odlično oceno, Marko! Veseli smo, da ste zadovoljni z gladkostjo sten in čistim zaključkom del.',
    },
    {
      reviewId: 'dast-gbp-2',
      reviewerName: 'Tanja V.',
      starRating: 5,
      comment:
        'Zelo profesionalen odnos ekipe DAST. Izvedli so sanacijo vlage in plesni ter celovito prenovo stanovanja v Kopru. Površine izgledajo kot nove, cena pa je bila točno po predračunu.',
      createTime: '2026-09-27T14:15:00Z',
    },
    {
      reviewId: 'dast-gbp-3',
      reviewerName: 'Luka M.',
      starRating: 5,
      comment:
        'Priporočam vsakemu, ki išče vrhunsko slikopleskarstvo in Knauf suhomontažna dela. Strojno airless barvanje je naredilo popolnoma enakomeren mat izgled brez ene same sledi valjčka.',
      createTime: '2026-08-19T09:00:00Z',
      replyComment:
        'Najlepša hvala, Luka! Kakovostna priprava in airless nanos vedno prineseta brezhiben rezultat.',
    },
    {
      reviewId: 'dast-gbp-4',
      reviewerName: 'Nina B.',
      starRating: 5,
      comment:
        'Hitri odziv, brezplačen ogled v Šmartnem in res korekten dogovor. Po zaključku del so vse pospravili za sabo. Redko najdeš tako zanesljivega izvajalca zaključnih gradbenih del.',
      createTime: '2026-07-11T16:45:00Z',
    },
    {
      reviewId: 'dast-gbp-5',
      reviewerName: 'Andrej P.',
      starRating: 5,
      comment:
        'Odlična izvedba kitanja in beljenja poslovnih prostorov v Ljubljani. Držali so se vsakega roka, uporabili vrhunske materiale in pustili prostor popolnoma čist.',
      createTime: '2026-06-04T11:20:00Z',
    },
  ],
};

export const reviewsTranslations: Record<SupportedLang, ReviewsUiTranslation> = {
  sl: {
    eyebrow: 'Mnenja strank · Google',
    title: 'Zaupanje strank, potrjeno na Googlu',
    subtitle:
      'Preverjene ocene naših naročnikov za slikopleskarstvo, glajenje sten Q1–Q4, Knauf in zaključna gradbena dela po Sloveniji.',
    verifiedLabel: 'Preverjene Google ocene',
    reviewsCountSuffix: 'ocen',
    ctaWriteReview: 'Oddaj oceno na Googlu',
    ctaViewAll: 'Oglejte si vse ocene',
    ownerReplyLabel: 'Odgovor izvajalca DAST',
    starsAriaTemplate: '{n} od 5 zvezdic',
    dateLocale: 'sl-SI',
  },
  sr: {
    eyebrow: 'Utisci klijenata · Google',
    title: 'Poverenje klijenata, potvrđeno na Google-u',
    subtitle:
      'Proverene ocene naših klijenata za molerske radove, gletovanje zidova Q1–Q4, Knauf i završne građevinske radove širom Slovenije.',
    verifiedLabel: 'Proverene Google ocene',
    reviewsCountSuffix: 'ocena',
    ctaWriteReview: 'Ostavi ocenu na Google-u',
    ctaViewAll: 'Pogledaj sve ocene',
    ownerReplyLabel: 'Odgovor izvođača DAST',
    starsAriaTemplate: '{n} od 5 zvezdica',
    dateLocale: 'sr-Latn-RS',
  },
  en: {
    eyebrow: 'Client Reviews · Google',
    title: 'Client Trust, Verified on Google',
    subtitle:
      'Verified Google reviews from homeowners and businesses across Slovenia for Q1–Q4 wall skimming, airless painting, Knauf drywall, and interior finishing.',
    verifiedLabel: 'Verified Google Reviews',
    reviewsCountSuffix: 'reviews',
    ctaWriteReview: 'Leave a Google Review',
    ctaViewAll: 'View all reviews',
    ownerReplyLabel: 'Response from DAST',
    starsAriaTemplate: '{n} out of 5 stars',
    dateLocale: 'en-GB',
  },
  de: {
    eyebrow: 'Kundenbewertungen · Google',
    title: 'Kundenvertrauen, auf Google bestätigt',
    subtitle:
      'Verifizierte Google-Bewertungen unserer Kunden für Malerarbeiten, Q1–Q4-Spachtelarbeiten, Knauf-Trockenbau und Innenausbau in Slowenien.',
    verifiedLabel: 'Verifizierte Google-Bewertungen',
    reviewsCountSuffix: 'Bewertungen',
    ctaWriteReview: 'Bewertung auf Google abgeben',
    ctaViewAll: 'Alle Bewertungen ansehen',
    ownerReplyLabel: 'Antwort von DAST',
    starsAriaTemplate: '{n} von 5 Sternen',
    dateLocale: 'de-DE',
  },
  it: {
    eyebrow: 'Recensioni dei clienti · Google',
    title: 'Fiducia dei clienti, verificata su Google',
    subtitle:
      'Recensioni verificate su Google per tinteggiatura airless, rasatura pareti Q1–Q4, cartongesso Knauf e lavori di finitura edile in Slovenia.',
    verifiedLabel: 'Recensioni Google verificate',
    reviewsCountSuffix: 'recensioni',
    ctaWriteReview: 'Lascia una recensione su Google',
    ctaViewAll: 'Vedi tutte le recensioni',
    ownerReplyLabel: 'Risposta di DAST',
    starsAriaTemplate: '{n} su 5 stelle',
    dateLocale: 'it-IT',
  },
};
