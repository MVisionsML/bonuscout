import { Casino } from '@/types'

// ── Canonical URL routing (2026-06-30) ──────────────────────────────────────
// Most casinos in our catalog canonical to /reviews/{slug}. Two exceptions
// per the phase-2 hybrid-strategy redirect map: talismania and wonaco-casino
// reverse-pair to their /articles/{slug}-casino-review counterparts because
// those URLs hold materially better SERP position (talismania pos 14.1 vs
// 32.9; wonaco 16.8 vs 28.3 in the 90-day GSC window).
//
// Use casinoUrl() everywhere we link to a casino page. The next.config.ts
// 308 catches any /reviews/talismania or /reviews/wonaco-casino request that
// slips through (from external referrers / old SERP entries), but internal
// links MUST route via the helper so we never internally fire through a redirect.
const CANONICAL_OVERRIDES: Record<string, string> = {
  'talismania':    '/articles/talismania-casino-review',
  'wonaco-casino': '/articles/wonaco-casino-review',
}
export function casinoUrl(slug: string): string {
  return CANONICAL_OVERRIDES[slug] ?? `/reviews/${slug}`
}

// ── Organization schema fields (2026-07-25 Phase 0.1) ───────────────────────
// homepage / legalName / licenseAuthority / licenseNumber values are
// research-verified from the casino's own site, Wikipedia, or a public
// licensing registry. Any field left unset here means the fact could NOT
// be publicly verified — schema.org emit path omits absent fields rather
// than defaulting. See 2026-07-25 casino research table for source URLs.
export const casinos: Casino[] = [
  {
    id: '1', name: 'LuckyWins Casino', slug: 'luckywins-casino', logo: '🍀', logoUrl: '/logos/luckywins.webp',
    rating: 4.4, ratingMax: 5.0,
    bonus: '€8,000 + 500 Free Spins',
    bonusType: 'welcome',
    wagering: 40, minDeposit: 20,
    withdrawalTime: '24h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://playluckywins.com/j18a5d498',
    tag: 'Biggest Bonus',
    bestFor: 'Players who want the biggest welcome package on the market',
    verdict: 'Excellent bonus value and a 4,000+ game library; the 40x wagering is the only real sticking point.',
    pros: ['€8,000 welcome package', '500 free spins', '4,000+ games', 'Fast withdrawals'],
    cons: ['40x wagering requirement', 'Curaçao license only'],
    games: 4000, software: ['Pragmatic Play', 'Evolution', 'NetEnt'],
    safetyIndex: 'medium', markets: ['global'], founded: 2023,
    homepage: 'https://www.luckywins.com', legalName: 'Dama N.V.',
    licenseAuthority: 'Curaçao GCB', licenseNumber: 'OGL/2023/174/0082'
  },
  {
    id: '17', name: 'Winningz Casino', slug: 'winningz-casino', logo: '🏆', logoUrl: '/logos/winningz.webp',
    rating: 4.1, ratingMax: 5.0,
    bonus: '€5,000 + 500 Free Spins',
    bonusType: 'welcome',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://record.ultimate.partners/_TbLGQWrzK2nUOsjNOfgKeWNd7ZgqdRLk/1/',
    tag: 'Best Value',
    bestFor: 'Players who want maximum welcome bonus value with a huge free spins package',
    verdict: 'The €5,000 + 500 Free Spins package is one of the largest in this comparison — competitive with LuckyWins but at fairer 35x wagering.',
    pros: ['€5,000 welcome package', '500 free spins', 'Fair 35x wagering', 'Large bonus value'],
    cons: ['Curaçao license only', 'Newer brand'],
    games: 3000, software: ['Pragmatic Play', 'Evolution', 'NetEnt'],
    safetyIndex: 'medium', markets: ['global'], founded: 2025,
    homepage: 'https://www.winningz.com', legalName: 'Simba N.V.',
    licenseAuthority: 'Curaçao GCB', licenseNumber: 'OGL/2024/1788/1030'
  },
  {
    id: '5', name: 'Rooli Casino', slug: 'rooli-casino', logo: '🎰', logoUrl: '/logos/rooli.webp',
    rating: 4.0, ratingMax: 5.0,
    bonus: '€500 + 200 Free Spins',
    bonusType: 'welcome',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://rooli.live/n1ea538d9a',
    tag: 'Fair Wagering',
    bestFor: 'Players who want a single-deposit activation with fair 35x wagering',
    verdict: 'No-frills reliability: one deposit activates everything at fair 35x wagering, with live-chat support published as 24/7 by the operator.',
    pros: ['Single deposit activates all', '35x fair wagering', 'Reliable support', 'Fast 24h withdrawals'],
    cons: ['Standard bonus size', 'Curaçao license only'],
    games: 2000, software: ['Pragmatic Play', 'Evolution'],
    safetyIndex: 'medium', markets: ['global'], founded: 2023,
    homepage: 'https://rooli.com', legalName: 'Dama N.V.',
    licenseAuthority: 'Curaçao GCB', licenseNumber: 'OGL/2023/174/0082'
  },
  {
    id: '6', name: 'VegasHero Casino', slug: 'vegashero-casino', logo: '🦸', logoUrl: '/logos/vegashero.webp',
    seoTitle: 'VegasHero Casino Bonus 2026 — €500 + 200 Free Spins, Mega Moolah Access',
    seoDescription: 'VegasHero Casino: €500 + 200 Free Spins at 35x wagering. Mega Moolah jackpot access via Microgaming, tiered VIP loyalty programme, MGA licensed. Bonus claim guide.',
    seoTitleDe: 'VegasHero Casino Bonus 2026 — €500 + 200 Freispiele, Mega Moolah Zugang',
    seoDescriptionDe: 'VegasHero Casino: €500 + 200 Freispiele bei 35-facher Umsatzbedingung. Mega-Moolah-Jackpot über Microgaming, gestaffeltes VIP-Programm, MGA-lizenziert. Bonus-Guide.',
    rating: 4.0, ratingMax: 5.0,
    bonus: '€500 + 200 Free Spins',
    bonusType: 'welcome',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['MGA'], affiliateLink: 'https://vgr.naralvin.com/?mid=300235_1802598',
    tag: 'MGA Licensed',
    bestFor: 'Players who prioritise MGA licensing, progressive jackpots like Mega Moolah and a structured VIP loyalty programme with tiered rewards',
    verdict: 'VegasHero Casino holds an MGA license — the gold standard in online gambling regulation — which immediately sets it apart from most competitors in our comparison. The Microgaming partnership brings access to Mega Moolah and other progressive jackpot titles with life-changing prize pools. The €500 + 200 Free Spins welcome bonus at 35x wagering is fair and in line with the industry standard. Where VegasHero falls short is payment variety — the limited selection of deposit and withdrawal methods may frustrate players who rely on e-wallets or crypto. The 1,500-game library is also smaller than average, though the quality of Microgaming and Evolution titles partially compensates. The tiered loyalty programme rewards consistent play and, based on the published tier structure, is one of the better VIP setups in our comparison at this price point.',
    pros: ['MGA licensed — highest regulatory standard in online gambling', 'Mega Moolah and progressive jackpot access via Microgaming', 'Structured tiered loyalty programme with real rewards', '35x wagering — fair and industry standard', 'Evolution live dealer tables with professional hosts', '24-48h withdrawal window published in operator cashier terms'],
    cons: ['Narrow payment options — no crypto, limited e-wallets', 'Smaller game library at 1,500 titles vs 3,000-6,000 at competitors', 'No Pragmatic Play or Hacksaw Gaming slots available', 'Free spins value below average compared to top-tier offers'],
    games: 1500, software: ['Microgaming', 'Evolution'],
    safetyIndex: 'high', markets: ['global'], founded: 2025,
    homepage: 'https://vegashero.com', legalName: 'Lumina Holdings Limitada'
    // Note: current live brand is a 2025 relaunch by Lumina Holdings under Costa Rica registration
    // (COS-13633-FG is corporate reg, not a gaming licence). Original 2017 MGA-licensed Genesis
    // Global brand is defunct. License field intentionally omitted per Phase 0.1 rule:
    // Costa Rica corporate registration ≠ verifiable gaming regulator.
  },
  {
    id: '4', name: 'BinoBet Casino', slug: 'binobet-casino', logo: '🎲', logoUrl: '/logos/binobet.webp',
    seoTitle: 'BinoBet Casino Bonus 2026 — €1,500 + 150 Free Spins, 24/7 Support',
    seoDescription: 'BinoBet Casino bonus: €1,500 + 150 Free Spins at 40x wagering. 24/7 live chat published by the operator. Full bonus terms and claim guide.',
    seoTitleDe: 'BinoBet Casino Bonus 2026 — €1.500 + 150 Freispiele, 24/7 Support',
    seoDescriptionDe: 'BinoBet Casino Bonus: €1.500 + 150 Freispiele bei 40-fachem Umsatz. 24/7-Livechat vom Betreiber veröffentlicht. Komplette Bonusbedingungen und Anleitung.',
    rating: 4.1, ratingMax: 5.0,
    bonus: '€1,500 + 150 Free Spins',
    bonusType: 'welcome',
    wagering: 40, minDeposit: 20,
    withdrawalTime: '24h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://trackingbino.bet/d932b56d9',
    tag: 'Best Support',
    bestFor: 'Players who want round-the-clock support and a no-fuss experience',
    verdict: 'Reliable, fast platform with 24/7 support that actually answers — the 40x wagering is the only real downside.',
    pros: ['24/7 support that responds', 'Fast platform', 'Reliable withdrawals', '150 free spins'],
    cons: ['40x wagering is high', 'Curaçao license only'],
    games: 2000, software: ['Pragmatic Play', 'Evolution', 'NetEnt'],
    safetyIndex: 'medium', markets: ['global'], founded: 2025,
    homepage: 'https://bino.bet'
    // Operator + license intentionally omitted: sources conflict across
    // 4+ different operator names (Modo Spike / Sapphire Summit / BinoBet N.V. / …)
    // and 2+ licensing jurisdictions (Costa Rica / Anjouan). Not verifiable.
  },
  // LuckyMax restored 2026-07-25: prior cross-domain 301 to bonusreviewers
  // reversed to honour the "three separate sites, no cross-domain 301s" policy.
  // Phase 0.1 Organization fields populated per research (Costa Rica corporate
  // registration is NOT a gaming licence — licence fields intentionally omitted).
  {
    id: '2', name: 'LuckyMax Casino', slug: 'luckymax-casino', logo: '🎯', logoUrl: '/logos/luckymax.webp',
    rating: 4.3, ratingMax: 5.0,
    bonus: '€4,000 + 300 Free Spins',
    bonusType: 'welcome',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://luckymax.site/jed914eeb',
    tag: 'Best Mobile',
    bestFor: 'Mobile players who want a strong multi-deposit bonus with fair wagering',
    verdict: 'Strong game curation with Hacksaw Gaming included, excellent mobile experience, but support slows down noticeably outside European hours.',
    pros: ['€4,000 welcome package', 'Hacksaw Gaming included', 'Excellent mobile', '35x fair wagering'],
    cons: ['Support slow outside EU hours', 'Curaçao license only'],
    games: 3000, software: ['Hacksaw Gaming', 'Pragmatic Play', 'Evolution'],
    safetyIndex: 'medium', markets: ['global'], founded: 2024,
    homepage: 'https://luckymax.site', legalName: 'Fortaprime SRL'
    // License intentionally omitted: Costa Rica issues corporate registrations,
    // not gaming licences (see casino.guru safety index 0/5).
  },
  {
    id: '8', name: 'Chancer Casino', slug: 'chancer-casino', logo: '🍀', logoUrl: '/logos/chancer.webp',
    rating: 3.9, ratingMax: 5.0,
    bonus: '300% Welcome Package',
    bonusType: 'welcome',
    wagering: 30, minDeposit: 20,
    withdrawalTime: '24h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://go.chancer.bet/visit/?bta=35272&nci=5365&utm_campaign=KW',
    tag: 'Lowest Wagering',
    bestFor: 'Players who want the lowest wagering requirement (30x) in this comparison',
    verdict: 'The 300% match and 30x wagering make the maths work for specific deposit sizes — check the bonus cap before you deposit.',
    pros: ['30x lowest wagering', '300% match bonus', 'Fast withdrawals', 'Live chat support'],
    cons: ['Check bonus cap before depositing', 'Curaçao license only'],
    games: 2000, software: ['Pragmatic Play', 'Hacksaw Gaming', 'Evolution'],
    safetyIndex: 'medium', markets: ['global'], founded: 2024,
    homepage: 'https://chancer.bet', legalName: 'Chancer Group N.V.',
    licenseAuthority: 'Anjouan Gaming Board'
    // licenseNumber intentionally omitted: Anjouan license number not publicly disclosed.
  },
  {
    id: '3', name: 'Billionaire Spin', slug: 'billionaire-spin', logo: '💎', logoUrl: '/logos/billionaire-spin.webp',
    rating: 4.2, ratingMax: 5.0,
    bonus: '€450 + 250 Free Spins + 25% Cashback',
    bonusType: 'cashback',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://track.ftdgallery.com/visit/?bta=35947&nci=5344&utm_campaign=DE',
    tag: "Editor's Choice",
    bestFor: 'Players who want cashback alongside their welcome package',
    verdict: 'The cashback on losses during the welcome period is a genuine differentiator — most casinos make you choose one or the other, not both.',
    pros: ['25% cashback included', '250 free spins', 'Fair 35x wagering', 'Unique dual bonus'],
    cons: ['Smaller base bonus vs competitors', 'Curaçao license only'],
    games: 2500, software: ['Pragmatic Play', 'Evolution', "Play'n GO"],
    safetyIndex: 'medium', markets: ['global'], founded: 2025,
    legalName: 'Terdersoft B.V.',
    licenseAuthority: 'Curaçao GCB', licenseNumber: ''
    // licenseNumber left empty per line-27 convention: not independently verified against the primary regulator register in this pass.
    // homepage intentionally omitted: canonical brand homepage not recoverable in research
    // (casino.guru reports "ceased operations"). Do not fabricate a URL.
  },
  {
    id: '10', name: 'Crocoslots', slug: 'crocoslots', logo: '🐊', logoUrl: '/logos/crocoslots.webp',
    rating: 3.9, ratingMax: 5.0,
    bonus: '€1,000 + 100 Free Spins',
    bonusType: 'welcome',
    wagering: 45, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://crocoslotsmedia.com/aead6fe47',
    tag: 'Most Games',
    bestFor: 'Players who want the widest possible game library with crypto support',
    verdict: '6,000+ games is the headline, but the 45x wagering is the highest in our comparison — an important caveat before claiming.',
    pros: ['6,000+ games', 'Crypto support', 'Huge game variety', '100 free spins'],
    cons: ['45x wagering is highest here', 'Curaçao license only'],
    games: 6000, software: ['Pragmatic Play', 'Evolution', 'NetEnt', "Play'n GO", 'Hacksaw Gaming'],
    safetyIndex: 'medium', markets: ['global'], founded: 2022,
    homepage: 'https://www.crocoslots.com', legalName: 'Metlait SRL',
    licenseAuthority: 'Tobique Gaming Commission', licenseNumber: '0000064'
  },
  {
    id: '15', name: 'Stake Casino', slug: 'stake-casino', logo: '⚡', logoUrl: '/logos/stake.webp',
    rating: 4.3, ratingMax: 5.0,
    bonus: 'Choose your offer',
    bonusType: 'welcome',
    wagering: 0, minDeposit: 20,
    withdrawalTime: '1-4h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://stake.com/?c=Gz6a5jar',
    tag: 'Crypto Favorite',
    bestFor: 'Crypto players who want provably fair games and no wagering requirements',
    verdict: "Stake is the most crypto-native full-service casino in this comparison — provably fair games, 0x wagering on promotional offers, and one of the fastest published crypto withdrawal windows in our comparison per its cashier documentation.",
    pros: ['0x wagering on promos', 'Fastest withdrawals 1-4h', 'Provably fair games', 'Crypto native'],
    cons: ['Limited fiat options', 'Offer varies by user'],
    games: 3000, software: ['Stake Originals', 'Pragmatic Play', 'Evolution'],
    safetyIndex: 'medium', markets: ['global'], founded: 2017,
    homepage: 'https://stake.com', legalName: 'Medium Rare N.V.',
    licenseAuthority: 'Curaçao'
    // licenseNumber intentionally omitted: Stake's Curaçao license number is not
    // publicly disclosed in the footer or in any authoritative source.
  },
  {
    id: '9', name: 'Blockspins Casino', slug: 'blockspins-casino', logo: '₿', logoUrl: '/logos/blockspins.webp',
    seoTitle: 'Blockspins Casino Bonus 2026 — 100% Crypto Bonus, 30x Wagering',
    seoDescription: 'Blockspins crypto casino bonus: 100% first deposit match, provably fair games, 30x wagering — lowest in our comparison. Bitcoin withdrawal window per operator cashier terms.',
    seoTitleDe: 'Blockspins Casino Bonus 2026 — 100% Krypto-Bonus, 30x Umsatz',
    seoDescriptionDe: 'Blockspins Krypto-Casino-Bonus: 100% erste Einzahlung, provably-fair Spiele, 30-facher Umsatz — der niedrigste in unserem Vergleich. Bitcoin-Auszahlungsfenster laut Kassiererbedingungen des Betreibers.',
    rating: 3.8, ratingMax: 5.0,
    bonus: '100% First Deposit Bonus',
    bonusType: 'welcome',
    wagering: 30, minDeposit: 20,
    withdrawalTime: '1-4h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://blockspins.com?ref=6df507437077',
    tag: 'Crypto Favorite',
    bestFor: 'Crypto users who want provably fair games and fast Bitcoin withdrawals',
    verdict: 'Built specifically for crypto players — provably fair games, fast BTC withdrawals, and lighter KYC for crypto deposits. Mainstream players will find it limiting.',
    pros: ['Provably fair games', 'Fast BTC withdrawals 1-4h', 'Light KYC for crypto', '30x wagering'],
    cons: ['Limited for non-crypto players', 'Smaller game library'],
    games: 1000, software: ['BGaming', 'Pragmatic Play'],
    safetyIndex: 'medium', markets: ['global'], founded: 2024,
    homepage: 'https://blockspins.com', legalName: 'Block Interactive Services Ltda'
    // License intentionally omitted: Costa Rica corporate registration is NOT a gaming
    // licence. No verifiable gaming regulator issued this brand a licence.
  },
  {
    id: '7', name: 'EmirBet Casino', slug: 'emirbet-casino', logo: '👑', logoUrl: '/logos/emirbet.webp',
    seoTitle: 'EmirBet Casino Bonus 2026 — €500 + 200 Free Spins at 35x, 24h Support',
    seoDescription: 'EmirBet Casino bonus guide: €500 + 200 Free Spins welcome at 35x wagering. Single deposit activation, 24/7 live chat, Curaçao licensed. Bonus claim walkthrough.',
    seoTitleDe: 'EmirBet Casino Bonus 2026 — €500 + 200 Freispiele bei 35x, 24h Support',
    seoDescriptionDe: 'EmirBet Casino Bonus-Guide: €500 + 200 Freispiele Willkommensangebot bei 35-facher Umsatzbedingung. Aktivierung mit einer Einzahlung, 24/7-Livechat, Curaçao-Lizenz. Bonus-Anleitung.',
    rating: 3.9, ratingMax: 5.0,
    bonus: '€500 + 200 Free Spins',
    bonusType: 'welcome',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://on.emirbet100.com/promoRedirect?key=ej0xMzU0NjEzOCZsPTEzNTQ2MDQ2JnA9MTMyMzc%3D',
    tag: '24/7 Support',
    bestFor: 'Players who want 24/7 support and a straightforward €500 welcome offer',
    verdict: 'Dependable and uncomplicated — support answers fast, withdrawals process cleanly, but the four-provider library limits long-term variety.',
    pros: ['Fast 24/7 support', 'Clean withdrawals', '35x wagering', 'Simple bonus structure'],
    cons: ['Limited game providers', 'Curaçao license only'],
    games: 1000, software: ['Pragmatic Play', 'Evolution', 'NetEnt', "Play'n GO"],
    safetyIndex: 'medium', markets: ['global'], founded: 2023,
    homepage: 'https://emirbet.co', legalName: 'Bellona N.V.',
    licenseAuthority: 'Curaçao eGaming (Antillephone N.V.)', licenseNumber: '8048/JAZ2010-010'
  },
  {
    id: '11', name: 'Jackpoty', slug: 'jackpoty', logo: '🎳', logoUrl: '/logos/jackpoty.webp',
    seoTitle: 'Jackpoty Casino Bonus 2026 — €2,000 + 100 Free Spins at 35x Wagering',
    seoDescription: 'Jackpoty Casino bonus reviewed: €2,000 + 100 Free Spins welcome at fair 35x wagering. No deposit bonus codes, wagering guide and full bonus terms explained.',
    seoTitleDe: 'Jackpoty Casino Bonus 2026 — €2.000 + 100 Freispiele bei 35x Umsatz',
    seoDescriptionDe: 'Jackpoty Casino Bonus analysiert: €2.000 + 100 Freispiele Willkommensangebot bei fairem 35-fachen Umsatz. Bonus ohne Einzahlung, Umsatz-Guide und komplette Bonusbedingungen erklärt.',
    rating: 4.0, ratingMax: 5.0,
    bonus: '€2,000 + 100 Free Spins',
    bonusType: 'welcome',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://media.highaffiliates.com/redirect.aspx?pid=14883&bid=1685',
    tag: 'Well Rounded',
    bestFor: 'Players who want a substantial welcome package with market-standard wagering',
    verdict: 'A well-rounded mid-range casino with a generous bonus structure and clean platform — nothing exceptional stands out, but nothing disappoints either.',
    pros: ['€2,000 welcome bonus', '35x fair wagering', 'Clean platform', 'Reliable withdrawals'],
    cons: ['Nothing exceptional stands out', 'Curaçao license only'],
    games: 2500, software: ['Pragmatic Play', 'Evolution', 'NetEnt'],
    safetyIndex: 'medium', markets: ['global'], founded: 2022,
    homepage: 'https://jackpoty.com', legalName: 'Dama N.V.'
    // License intentionally omitted: verify current licence from jackpoty.com footer
    // before adding — Curaçao regime is in transition and multiple licence numbers
    // are cited across third-party directories.
  },
  {
    id: '12', name: 'Luck Nation Casino', slug: 'luck-nation-casino', logo: '🌟', logoUrl: '/logos/luck-nation.webp',
    rating: 3.8, ratingMax: 5.0,
    bonus: '100% up to €200 + Free Spins',
    bonusType: 'welcome',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://on.lucknation100.com/promoRedirect?key=ej0xMzUyNTc4OCZsPTEzNTI1ODY0JnA9NDc3Nw%3D%3D',
    tag: 'Casual Players',
    bestFor: 'Casual players who want a low-stakes entry point with a straightforward bonus',
    verdict: 'A modest welcome offer with fair 35x wagering — the right fit for casual players who want to try a new casino without a large commitment.',
    pros: ['Low commitment entry', '35x fair wagering', 'Straightforward bonus', 'Good for beginners'],
    cons: ['Smaller bonus vs competitors', 'Curaçao license only'],
    games: 1500, software: ['Pragmatic Play', 'Evolution'],
    safetyIndex: 'medium', markets: ['global'], founded: 2025,
    homepage: 'https://lucknation.com', legalName: 'Next Global Era Limited'
    // License intentionally omitted: Anjouan licence number not publicly registered
    // (new 2025 brand). Add once the footer of lucknation.com exposes the ALSI number.
  },
  // Playio restored 2026-07-25: prior cross-domain 301 to bonusreviewers
  // reversed to honour the "three separate sites, no cross-domain 301s" policy.
  // Phase 0.1 Organization fields populated per research (Anjouan licence
  // number not publicly registered — recoverable tier, licence field omitted).
  {
    id: '13', name: 'Playio', slug: 'playio', logo: '🎮', logoUrl: '/logos/playio.webp',
    rating: 3.9, ratingMax: 5.0,
    bonus: '100% up to €500 + 200 FS + 1 Bonus Crab',
    bonusType: 'welcome',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://plio.xarvilo.com/?mid=252832_1482213',
    tag: 'Unique Mechanics',
    bestFor: 'Slot players who enjoy unique bonus mechanics alongside a standard welcome package',
    verdict: 'The Bonus Crab mechanic is a genuinely novel addition — a random prize drop that lands on your account unprompted. Solid slot library and fair wagering round it out.',
    pros: ['Unique Bonus Crab mechanic', '200 free spins', 'Fair 35x wagering', 'Solid slot library'],
    cons: ['Curaçao license only', 'Newer brand'],
    games: 2000, software: ['Pragmatic Play', 'Hacksaw Gaming', 'Evolution'],
    safetyIndex: 'medium', markets: ['global'], founded: 2024,
    homepage: 'https://playio.com', legalName: 'NovaForge Ltd'
    // License intentionally omitted: Anjouan Gaming Board number not publicly
    // registered (recoverable tier per Phase 0.1 casino research).
  },
  {
    id: '14', name: 'Rooster.bet', slug: 'rooster-bet', logo: '🐓', logoUrl: '/logos/rooster.webp',
    rating: 4.0, ratingMax: 5.0,
    bonus: 'Welcome Package up to $5,000 + 300 FS',
    bonusType: 'welcome',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://roosterpartner.media/n1958594f0',
    tag: 'Sports + Casino',
    bestFor: 'High rollers and sports bettors who want a combined casino and sportsbook',
    verdict: 'A genuine sportsbook-casino hybrid with a large welcome package — the multi-product offering is the main differentiator for players who bet on both.',
    pros: ['$5,000 welcome package', '300 free spins', 'Sports + Casino hybrid', '35x wagering'],
    cons: ['Curaçao license only', 'Complex bonus structure'],
    games: 3000, software: ['Pragmatic Play', 'Evolution', 'Sportradar'],
    safetyIndex: 'medium', markets: ['global'], founded: 2023,
    homepage: 'https://rooster.bet', legalName: 'Dama N.V.',
    licenseAuthority: 'Curaçao GCB', licenseNumber: 'OGL/2023/174/0082'
  },
  {
    id: '16', name: 'TalisMania', slug: 'talismania', logo: '🔮', logoUrl: '/logos/talismania.webp',
    rating: 3.9, ratingMax: 5.0,
    bonus: '100% up to €500 + 200 FS + 1 Bonus Crab',
    bonusType: 'welcome',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://media.vegaslegends.com/visit/?bta=36153&nci=5390&utm_campaign=ROWta',
    tag: 'Slot Players',
    bestFor: 'Slot players who want a generous free spins count and enjoy bonus game mechanics',
    verdict: 'Same €500 + 200 Free Spins package as Rooli at fair 35x wagering, with a distinctive Bonus Crab feature layered on top and Hacksaw Gaming in the slot library — a strong offering for slot-focused players.',
    pros: ['Bonus Crab mechanic', '200 free spins', 'Fair 35x wagering', 'Strong slot library'],
    cons: ['Curaçao license only', 'Similar bonus profile to Rooli'],
    games: 2000, software: ['Pragmatic Play', 'Hacksaw Gaming', 'Evolution'],
    safetyIndex: 'medium', markets: ['global'], founded: 2024,
    homepage: 'https://talismania.com', legalName: 'Rabidi N.V.',
    // licenseNumber left empty per line-27 convention: not independently verified against the primary regulator register in this pass.
    licenseAuthority: 'Curaçao GCB', licenseNumber: ''
  },
  {
    id: '18', name: 'Wonaco Casino', slug: 'wonaco-casino', logo: '🎪', logoUrl: '/logos/wonaco.webp',
    rating: 3.8, ratingMax: 5.0,
    bonus: '100% up to €500 + 200 Free Spins',
    bonusType: 'welcome',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://wnc.fynkelto.com/?mid=270552_1586281',
    tag: 'No Surprises',
    bestFor: 'New players who want a balanced, mid-range welcome offer with no surprises',
    verdict: 'A solid, uncomplicated welcome package at the market standard — nothing exceptional, nothing problematic. A reasonable first casino for players new to online gambling.',
    pros: ['Straightforward bonus', '35x fair wagering', 'Good for beginners', '200 free spins'],
    cons: ['Nothing exceptional', 'Curaçao license only'],
    games: 1500, software: ['Pragmatic Play', 'Evolution'],
    safetyIndex: 'medium', markets: ['global'], founded: 2024,
    homepage: 'https://wonaco.com'
    // Operator + license intentionally omitted: 4+ conflicting operator names
    // (Adonio N.V. / NovaForge Ltd / Liernin Enterprises / Rabidi N.V.) and
    // 3+ licensing claims across sources. Not verifiable.
  },
  {
    id: '19', name: 'Spin Fever Casino', slug: 'spin-fever-casino', logo: '🌡️', logoUrl: '/logos/spin-fever.webp',
    rating: 4.0, ratingMax: 5.0,
    bonus: 'UP TO €4,000 + 4 Gold Spins',
    bonusType: 'welcome',
    wagering: 35, minDeposit: 20,
    withdrawalTime: '24-48h',
    supportType: 'Live chat',
    licenses: ['Curaçao'], affiliateLink: 'https://deeplogic.media/a2c0f6d3e',
    tag: 'Gold Spins',
    bestFor: 'Slot players who want a high-value multi-deposit welcome package with unique Gold Spin rewards',
    verdict: 'The Gold Spins mechanic adds genuine excitement to a strong €4,000 welcome — essentially mega-jackpot spins that sit outside the standard free spin tier.',
    pros: ['€4,000 welcome package', 'Unique Gold Spins mechanic', '35x fair wagering', 'Multi-deposit bonus'],
    cons: ['Curaçao license only', 'Complex bonus structure'],
    games: 2500, software: ['Pragmatic Play', 'Evolution', 'Hacksaw Gaming'],
    safetyIndex: 'medium', markets: ['global'], founded: 2023,
    homepage: 'https://spinfever.com', legalName: 'Dama N.V.',
    licenseAuthority: 'Curaçao eGaming (Antillephone N.V.)', licenseNumber: '8048/JAZ2020-13'
  }
]
