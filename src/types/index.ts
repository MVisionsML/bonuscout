export interface Casino {
  id: string
  name: string
  slug: string
  logo: string
  logoUrl?: string
  rating: number
  ratingMax: number
  bonus: string
  bonusType: 'welcome' | 'no-deposit' | 'free-spins' | 'cashback'
  wagering: number
  minDeposit: number
  withdrawalTime: string
  depositTested: boolean
  withdrawalTested: boolean
  supportType: string
  licenses: string[]
  affiliateLink: string
  tag?: string
  bestFor: string
  verdict: string
  pros: string[]
  cons: string[]
  games: number
  software: string[]
  safetyIndex: 'high' | 'medium' | 'low'
  markets: string[]
  founded: number
  // Per-slug SEO overrides. When set, generateMetadata uses them verbatim
  // instead of the generic "Bonus 2026 — Welcome Offer" template. Populated
  // for high-impression pages ranking 11-20 where a targeted title lifts CTR.
  // EN fields consumed by (en)/reviews/[slug]/page.tsx; DE by de/bewertungen/[slug]/page.tsx.
  seoTitle?: string
  seoDescription?: string
  seoTitleDe?: string
  seoDescriptionDe?: string
}
