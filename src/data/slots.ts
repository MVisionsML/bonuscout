export type Volatility = 'Low' | 'Medium' | 'High' | 'Very High' | 'Extreme'

export interface Slot {
  slug: string
  name: string
  provider: string
  rtp: number
  volatility: Volatility
  maxWin: number
  minBet: number
  maxBet: number
  paylines: string
  releaseYear: number
  theme: string
  rating: number
  shortDesc: string
}

export const slots: Slot[] = [
  {
    slug: 'gates-of-olympus', name: 'Gates of Olympus', provider: 'Pragmatic Play',
    rtp: 96.5, volatility: 'Very High', maxWin: 15000, minBet: 0.20, maxBet: 125,
    paylines: 'Pays Anywhere (8+ symbols)', releaseYear: 2021,
    theme: 'Greek mythology — Zeus and Mount Olympus',
    rating: 9.0,
    shortDesc: 'Tumbling reels, multipliers up to 500x, free spins with persistent multipliers.',
  },
  {
    slug: 'sweet-bonanza', name: 'Sweet Bonanza', provider: 'Pragmatic Play',
    rtp: 96.48, volatility: 'High', maxWin: 21175, minBet: 0.20, maxBet: 125,
    paylines: 'Pays Anywhere (8+ symbols)', releaseYear: 2019,
    theme: 'Candy and fruit',
    rating: 8.5,
    shortDesc: 'Tumble mechanic, multiplier bombs from x2 to x100, scatter pays in free spins.',
  },
  {
    slug: 'wanted-dead-or-a-wild', name: 'Wanted Dead or a Wild', provider: 'Hacksaw Gaming',
    rtp: 96.38, volatility: 'Extreme', maxWin: 12500, minBet: 0.10, maxBet: 100,
    paylines: '20 paylines', releaseYear: 2022,
    theme: 'Wild West outlaws',
    rating: 9.2,
    shortDesc: 'Three distinct free spins modes, walking wilds, multiplier wilds up to x40.',
  },
  {
    slug: 'big-bass-bonanza', name: 'Big Bass Bonanza', provider: 'Pragmatic Play',
    rtp: 96.71, volatility: 'High', maxWin: 2100, minBet: 0.10, maxBet: 250,
    paylines: '10 paylines', releaseYear: 2020,
    theme: 'Bass fishing',
    rating: 8.0,
    shortDesc: 'Fisherman wilds collect money symbols, retriggerable free spins, persistent multipliers.',
  },
  {
    slug: 'chaos-crew', name: 'Chaos Crew', provider: 'Hacksaw Gaming',
    rtp: 96.31, volatility: 'Extreme', maxWin: 10000, minBet: 0.10, maxBet: 100,
    paylines: '10 paylines', releaseYear: 2021,
    theme: 'Cartoon urban chaos',
    rating: 8.5,
    shortDesc: 'Coin collect mechanic, free spins with sticky multipliers, bonus buy option.',
  },
  {
    slug: 'starlight-princess', name: 'Starlight Princess', provider: 'Pragmatic Play',
    rtp: 96.5, volatility: 'High', maxWin: 5000, minBet: 0.20, maxBet: 125,
    paylines: 'Pays Anywhere (8+ symbols)', releaseYear: 2021,
    theme: 'Anime celestial princess',
    rating: 8.5,
    shortDesc: 'Tumbling reels, position-based multipliers up to 500x, free spins retriggers.',
  },
  {
    slug: 'book-of-dead', name: 'Book of Dead', provider: 'Play\'n GO',
    rtp: 96.21, volatility: 'High', maxWin: 5000, minBet: 0.10, maxBet: 100,
    paylines: '10 paylines', releaseYear: 2016,
    theme: 'Egyptian tomb exploration',
    rating: 8.7,
    shortDesc: 'Expanding symbol in free spins, gamble feature, classic Book-of mechanic.',
  },
]

export function getSlot(slug: string): Slot | undefined {
  return slots.find(s => s.slug === slug)
}
