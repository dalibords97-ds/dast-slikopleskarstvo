import React, { useEffect, useState } from 'react';
import { ExternalLink, MessageSquareQuote, ShieldCheck } from 'lucide-react';
import {
  INITIAL_FALLBACK_REVIEWS,
  ReviewsApiResponse,
  ReviewsUiTranslation,
} from '../data/reviewsTranslations';

interface ReviewsSectionProps {
  ui: ReviewsUiTranslation;
}

const DEFAULT_GBP_URL =
  'https://www.google.com/search?q=DAST+Zakljucna+gradbena+dela+Dalibor+Stefanovic+Smartno';

function formatReviewDate(isoDate: string, locale: string): string {
  try {
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return '';
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  } catch {
    return '';
  }
}

const GoldStars: React.FC<{ rating: number; ariaLabel: string }> = ({
  rating,
  ariaLabel,
}) => {
  const clamped = Math.max(1, Math.min(5, Math.round(rating)));
  return (
    <div
      className="inline-flex items-center gap-1"
      role="img"
      aria-label={ariaLabel}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 20 20"
          width="16"
          height="16"
          aria-hidden="true"
          className={
            star <= clamped ? 'text-[#D4AF37] fill-current' : 'text-zinc-700 fill-current'
          }
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
};

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ ui }) => {
  const [data, setData] = useState<ReviewsApiResponse>(INITIAL_FALLBACK_REVIEWS);

  const reviewUrl =
    (import.meta.env.VITE_GBP_REVIEW_URL as string | undefined)?.trim() ||
    DEFAULT_GBP_URL;

  useEffect(() => {
    let isMounted = true;

    async function fetchLiveReviews() {
      try {
        const res = await fetch('/api/gbp-reviews', {
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) return;
        const json: ReviewsApiResponse = await res.json();
        if (
          isMounted &&
          json &&
          Array.isArray(json.reviews) &&
          json.reviews.length > 0
        ) {
          setData(json);
        }
      } catch {
        // Keep graceful fallback dataset silently
      }
    }

    fetchLiveReviews();
    return () => {
      isMounted = false;
    };
  }, []);

  const averageFormatted = data.averageRating.toFixed(1);

  return (
    <section
      id="mnenja"
      aria-labelledby="reviews-heading"
      className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Luxury Summary Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-3">
              <span className="w-6 h-0.5 bg-[#D4AF37]" aria-hidden="true" />
              <span>{ui.eyebrow}</span>
            </div>
            <h2
              id="reviews-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
            >
              {ui.title}
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              {ui.subtitle}
            </p>
          </div>

          {/* Rating Summary Card + CTA */}
          <div className="bg-[#18181B] border border-[#C19346]/40 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xl shrink-0">
            <div className="flex items-center gap-4">
              <div className="font-['Rajdhani'] text-5xl font-bold text-[#D4AF37] leading-none">
                {averageFormatted}
              </div>
              <div className="space-y-1">
                <GoldStars
                  rating={data.averageRating}
                  ariaLabel={ui.starsAriaTemplate.replace(
                    '{n}',
                    averageFormatted
                  )}
                />
                <div className="flex items-center gap-1.5 text-xs text-zinc-200 font-medium">
                  <ShieldCheck
                    className="w-3.5 h-3.5 text-[#D4AF37] shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    {ui.verifiedLabel} ({data.totalReviewCount}{' '}
                    {ui.reviewsCountSuffix})
                  </span>
                </div>
              </div>
            </div>

            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#C19346] text-black font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow-lg shadow-[#D4AF37]/15 transition-colors whitespace-nowrap"
            >
              <span>{ui.ctaWriteReview}</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Review Cards Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.reviews.slice(0, 6).map((review) => {
            const formattedDate = formatReviewDate(
              review.createTime,
              ui.dateLocale
            );
            const starsLabel = ui.starsAriaTemplate.replace(
              '{n}',
              String(review.starRating)
            );
            const initial = review.reviewerName.trim().charAt(0).toUpperCase() || 'D';

            return (
              <li key={review.reviewId} className="flex">
                <article className="w-full bg-[#18181B] border border-zinc-800/90 hover:border-[#C19346]/60 rounded-2xl p-6 flex flex-col justify-between transition-colors duration-300 shadow-xl">
                  <div>
                    {/* Reviewer & Rating Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] font-['Rajdhani'] text-lg font-bold flex items-center justify-center shrink-0"
                          aria-hidden="true"
                        >
                          {initial}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base font-bold text-white truncate">
                            {review.reviewerName}
                          </h3>
                          {formattedDate && (
                            <time
                              dateTime={review.createTime}
                              className="block text-xs text-zinc-400"
                            >
                              {formattedDate}
                            </time>
                          )}
                        </div>
                      </div>

                      <div className="shrink-0 pt-0.5">
                        <GoldStars
                          rating={review.starRating}
                          ariaLabel={starsLabel}
                        />
                      </div>
                    </div>

                    {/* Review Body */}
                    <p className="text-sm text-zinc-200 leading-relaxed">
                      {review.comment}
                    </p>
                  </div>

                  {/* Optional Owner Reply */}
                  {review.replyComment && (
                    <div className="mt-5 pt-4 border-t border-zinc-800/80">
                      <div className="border-l-2 border-[#D4AF37] pl-3.5 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37]">
                          <MessageSquareQuote
                            className="w-3.5 h-3.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{ui.ownerReplyLabel}</span>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {review.replyComment}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ul>

        {/* Secondary View All Link */}
        <div className="mt-10 text-center">
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-[#D4AF37] hover:text-[#F59E0B] underline decoration-[#C19346]/60 underline-offset-4 transition-colors"
          >
            <span>{ui.ctaViewAll}</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
