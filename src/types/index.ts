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
  // Substantiable Organization schema fields (2026-07-25 Phase 0.1).
  // Every value researched from casino's own site / Wikipedia / licensing
  // registry. Populated only when publicly verifiable — never guessed.
  // Consumed by CasinoOrganizationSchema in seo/SchemaMarkup.tsx.
  homepage?: string
  legalName?: string
  licenseAuthority?: string
  licenseNumber?: string
  // Per-slug SEO overrides. When set, generateMetadata uses them verbatim
  // instead of the generic "Bonus 2026 — Welcome Offer" template. Populated
  // for high-impression pages ranking 11-20 where a targeted title lifts CTR.
  // EN fields consumed by (en)/reviews/[slug]/page.tsx; DE by de/bewertungen/[slug]/page.tsx.
  seoTitle?: string
  seoDescription?: string
  seoTitleDe?: string
  seoDescriptionDe?: string
}
