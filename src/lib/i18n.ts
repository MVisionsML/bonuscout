import { casinoUrl } from '@/data/casinos'

export const BASE = 'https://www.bonuscout.com'

export type LocaleUrl = { en: string; de: string }

export const URL_PAIRS: LocaleUrl[] = [
  { en: '/',                                       de: '/de' },
  { en: '/bonuses',                                de: '/de/boni' },
  { en: '/bonuses/cashback',                       de: '/de/boni/cashback' },
  { en: '/bonuses/welcome',                        de: '/de/boni/willkommensbonus' },
  { en: '/bonuses/no-deposit',                     de: '/de/boni/kein-einzahlungsbonus' },
  { en: '/bonuses/free-spins',                     de: '/de/boni/freispiele' },
  { en: '/crypto-casino-bonus',                    de: '/de/krypto-casino-bonus' },
  { en: '/lowest-wagering-casinos',                de: '/de/niedrigste-umsatzbedingungen' },
  { en: '/no-wagering-casinos',                    de: '/de/kein-wager-casino' },
  { en: '/casinos',                                de: '/de/casinos' },
  { en: '/reviews',                                de: '/de/bewertungen' },
  { en: '/guides',                                 de: '/de/ratgeber' },
  { en: '/guides/wagering-requirements-explained', de: '/de/ratgeber/umsatzbedingungen-erklaert' },
  { en: '/guides/crypto-casino-guide',             de: '/de/ratgeber/krypto-casino-guide' },
  { en: '/guides/free-spins-guide',                de: '/de/ratgeber/freispiele-guide' },
  { en: '/guides/how-to-claim-no-deposit-bonus',   de: '/de/ratgeber/kein-einzahlungsbonus-guide' },
]

const byEn = new Map(URL_PAIRS.map(p => [p.en, p]))
const byDe = new Map(URL_PAIRS.map(p => [p.de, p]))

// Returns Next.js alternates for a translated pair. If the path isn't in URL_PAIRS,
// falls back to a self-canonical (so untranslated pages don't silently lose their canonical).
// Reviews use alternatesForReview() below — do not pass /reviews/{slug} paths here.
export function alternatesFor(path: string) {
  const pair = byEn.get(path) ?? byDe.get(path)
  if (!pair) {
    return { canonical: `${BASE}${path}` }
  }
  const enAbs = `${BASE}${pair.en}`
  const deAbs = `${BASE}${pair.de}`
  const canonical = path === pair.en ? enAbs : deAbs
  return {
    canonical,
    languages: {
      en: enAbs,
      de: deAbs,
      'x-default': enAbs,
    },
  }
}

// Casino review pages — dynamic slugs. The EN counterpart URL is resolved via
// casinoUrl(slug) which respects CANONICAL_OVERRIDES (Wonaco/Talismania pattern),
// so a slug whose EN counterpart is /articles/{slug}-bonus does NOT get hreflang
// pointing at a non-existent /reviews/{slug}. SPECIALIZED_EN_ONLY handles the
// case where EN content is a bonus-only page and the DE side is still a general
// review — declaring them as language variants would be a false signal.
const SPECIALIZED_EN_ONLY = new Set(['talismania', 'wonaco-casino'])

export function alternatesForReview(opts: { slug: string; side: 'en' | 'de' }) {
  const slug = opts.slug
  const enPath = casinoUrl(slug)
  const enAbs = `${BASE}${enPath}`
  const deAbs = `${BASE}/de/bewertungen/${slug}`
  const canonical = opts.side === 'en' ? enAbs : deAbs

  const languages: Record<string, string> = { de: deAbs }
  if (!SPECIALIZED_EN_ONLY.has(slug)) {
    languages.en = enAbs
    languages['x-default'] = enAbs
  }
  return { canonical, languages }
}
