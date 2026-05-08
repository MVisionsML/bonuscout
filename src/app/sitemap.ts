import { MetadataRoute } from 'next'
import { casinos } from '@/data/casinos'

const base = 'https://www.bonuscout.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const enPages = [
    { url: `${base}`, priority: 1.0 },
    { url: `${base}/casinos`, priority: 0.9 },
    { url: `${base}/bonuses`, priority: 0.9 },
    { url: `${base}/bonuses/no-deposit`, priority: 0.85 },
    { url: `${base}/bonuses/free-spins`, priority: 0.85 },
    { url: `${base}/bonuses/welcome`, priority: 0.85 },
    { url: `${base}/bonuses/cashback`, priority: 0.85 },
    { url: `${base}/reviews`, priority: 0.8 },
    { url: `${base}/free-games`, priority: 0.7 },
    { url: `${base}/guides`, priority: 0.8 },
    { url: `${base}/guides/wagering-requirements-explained`, priority: 0.85 },
    { url: `${base}/guides/how-to-claim-no-deposit-bonus`, priority: 0.85 },
    { url: `${base}/guides/free-spins-guide`, priority: 0.85 },
    { url: `${base}/guides/casino-bonus-terms`, priority: 0.8 },
    { url: `${base}/guides/crypto-casino-guide`, priority: 0.85 },
    { url: `${base}/methodology`, priority: 0.6 },
    { url: `${base}/about`, priority: 0.5 },
    { url: `${base}/responsible-gambling`, priority: 0.5 },
    { url: `${base}/lowest-wagering-casinos`, priority: 0.9 },
    { url: `${base}/no-wagering-casinos`, priority: 0.9 },
    { url: `${base}/best-casino-bonus`, priority: 0.9 },
    { url: `${base}/best-free-spins-casino`, priority: 0.85 },
    { url: `${base}/best-cashback-casino`, priority: 0.85 },
    { url: `${base}/crypto-casino-bonus`, priority: 0.85 },
    { url: `${base}/best-pragmatic-play-casinos`, priority: 0.8 },
    { url: `${base}/best-hacksaw-gaming-casinos`, priority: 0.8 },
    { url: `${base}/luckywins-vs-winningz`, priority: 0.8 },
    { url: `${base}/stake-vs-blockspins`, priority: 0.8 },
  ].map(p => ({ ...p, lastModified: now, changeFrequency: 'monthly' as const }))

  const dePages = [
    { url: `${base}/de`, priority: 1.0 },
    { url: `${base}/de/casinos`, priority: 0.9 },
    { url: `${base}/de/boni`, priority: 0.9 },
    { url: `${base}/de/boni/kein-einzahlungsbonus`, priority: 0.85 },
    { url: `${base}/de/boni/freispiele`, priority: 0.85 },
    { url: `${base}/de/boni/willkommensbonus`, priority: 0.85 },
    { url: `${base}/de/boni/cashback`, priority: 0.85 },
    { url: `${base}/de/bewertungen`, priority: 0.8 },
    { url: `${base}/de/niedrigste-umsatzbedingungen`, priority: 0.9 },
    { url: `${base}/de/kein-wager-casino`, priority: 0.9 },
    { url: `${base}/de/krypto-casino-bonus`, priority: 0.85 },
  ].map(p => ({ ...p, lastModified: now, changeFrequency: 'monthly' as const }))

  const enReviews = casinos.map(c => ({
    url: `${base}/reviews/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85
  }))

  const deReviews = casinos.map(c => ({
    url: `${base}/de/bewertungen/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }))

  return [...enPages, ...dePages, ...enReviews, ...deReviews]
}
