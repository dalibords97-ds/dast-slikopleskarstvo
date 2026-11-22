// Vercel Serverless Function: Live Google Business Profile (GBP) Reviews for DAST
// Exchanges GBP_REFRESH_TOKEN for an access token and fetches reviews from Google Business Profile API.
// Cached at the Vercel edge for 12 hours (s-maxage=43200) with 6-hour stale-while-revalidate.

export interface NormalizedReview {
  reviewId: string;
  reviewerName: string;
  starRating: number;
  comment: string;
  createTime: string;
  replyComment?: string;
}

export interface ReviewsPayload {
  source: 'google' | 'fallback';
  averageRating: number;
  totalReviewCount: number;
  reviews: NormalizedReview[];
}

const STAR_RATING_MAP: Record<string, number> = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

const FALLBACK_DATA: ReviewsPayload = {
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

function parseStarRating(rating: unknown): number {
  if (typeof rating === 'number' && rating >= 1 && rating <= 5) {
    return rating;
  }
  if (typeof rating === 'string') {
    const upper = rating.toUpperCase();
    if (STAR_RATING_MAP[upper]) {
      return STAR_RATING_MAP[upper];
    }
    const parsed = Number(rating);
    if (!Number.isNaN(parsed) && parsed >= 1 && parsed <= 5) {
      return parsed;
    }
  }
  return 5;
}

export default async function handler(req: any, res: any) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=43200, stale-while-revalidate=21600'
  );

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const clientId = process.env.GBP_CLIENT_ID;
  const clientSecret = process.env.GBP_CLIENT_SECRET;
  const refreshToken = process.env.GBP_REFRESH_TOKEN;
  const accountId = process.env.GBP_ACCOUNT_ID;
  const locationId = process.env.GBP_LOCATION_ID;

  if (!clientId || !clientSecret || !refreshToken || !accountId || !locationId) {
    res.status(200).json(FALLBACK_DATA);
    return;
  }

  try {
    // 1. Exchange refresh token for a fresh OAuth2 access token
    const tokenParams = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    });

    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: tokenParams.toString(),
    });

    if (!tokenRes.ok) {
      console.error('GBP OAuth token exchange failed:', tokenRes.status);
      res.status(200).json(FALLBACK_DATA);
      return;
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      console.error('GBP OAuth response missing access_token');
      res.status(200).json(FALLBACK_DATA);
      return;
    }

    // 2. Fetch reviews directly from Google Business Profile API
    const gbpUrl = `https://mybusiness.googleapis.com/v4/accounts/${encodeURIComponent(
      accountId
    )}/locations/${encodeURIComponent(locationId)}/reviews?pageSize=20`;

    const reviewsRes = await fetch(gbpUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    });

    if (!reviewsRes.ok) {
      console.error('GBP reviews fetch failed:', reviewsRes.status);
      res.status(200).json(FALLBACK_DATA);
      return;
    }

    const rawData = await reviewsRes.json();
    const rawReviews: any[] = Array.isArray(rawData.reviews) ? rawData.reviews : [];

    if (rawReviews.length === 0) {
      res.status(200).json(FALLBACK_DATA);
      return;
    }

    const normalizedReviews: NormalizedReview[] = rawReviews.map((r: any, idx: number) => ({
      reviewId: String(r.reviewId || r.name || `gbp-review-${idx}`),
      reviewerName: String(r.reviewer?.displayName || 'Stranka Google'),
      starRating: parseStarRating(r.starRating),
      comment: String(r.comment || '').trim(),
      createTime: String(r.createTime || r.updateTime || new Date().toISOString()),
      ...(r.reviewReply?.comment
        ? { replyComment: String(r.reviewReply.comment).trim() }
        : {}),
    }));

    const averageRating =
      typeof rawData.averageRating === 'number'
        ? Number(rawData.averageRating.toFixed(1))
        : Number(
            (
              normalizedReviews.reduce((acc, item) => acc + item.starRating, 0) /
              normalizedReviews.length
            ).toFixed(1)
          );

    const totalReviewCount =
      typeof rawData.totalReviewCount === 'number'
        ? rawData.totalReviewCount
        : normalizedReviews.length;

    const payload: ReviewsPayload = {
      source: 'google',
      averageRating,
      totalReviewCount,
      reviews: normalizedReviews,
    };

    res.status(200).json(payload);
  } catch (error) {
    console.error('GBP reviews endpoint error:', error);
    res.status(200).json(FALLBACK_DATA);
  }
}
