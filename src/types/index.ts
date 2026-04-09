export interface Casino {
  id: string
  name: string
  slug: string
  logo: string
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
}
