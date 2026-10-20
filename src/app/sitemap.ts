import { MetadataRoute } from 'next'
import { casinos, casinoUrl } from '@/data/casinos'
import { URL_PAIRS, BASE } from '@/lib/i18n'
import fs from 'node:fs'
import path from 'node:path'

const base = BASE

// Scans src/app/(en)/articles/ at build time. Every subdirectory containing a page.mdx
// becomes /articles/<dirname>. The SEO-agent pipeline drops new articles here; this scan
// picks them up without anyone editing this file.
function scanArticles(): { slug: string; lastModified: Date }[] {
  const articlesDir = path.join(process.cwd(), 'src', 'app', '(en)', 'articles')
  if (!fs.existsSync(articlesDir)) return []
  const out: { slug: string; lastModified: Date }[] = []
  for (const entry of fs.readdirSync(articlesDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const mdxPath = path.join(articlesDir, entry.name, 'page.mdx')
    if (!fs.existsSync(mdxPath)) continue
    out.push({ slug: entry.name, lastModified: fs.statSync(mdxPath).mtime })
  }
  return out
}

// Scans content/news/*.mdx — produced by SEO agents 16+17. Each file becomes /news/<slug>.
function scanNews(): { slug: string; lastModified: Date }[] {
  const newsDir = path.join(process.cwd(), 'content', 'news')
  if (!fs.existsSync(newsDir)) return []
  return fs.readdirSync(newsDir)
    .filter(f => f.endsWith('.mdx'))
    .map(f => {
      const filePath = path.join(newsDir, f)
      return { slug: f.replace(/\.mdx$/, ''), lastModified: fs.statSync(filePath).mtime }
    })
}

// Reciprocal-language alternates for URLs whose translation pair is registered
// in URL_PAIRS. Returns undefined for untranslated URLs so untranslated entries
// stay clean (no empty languages block).
function langsFor(pathname: string): { languages: Record<string, string> } | undefined {
  const pair = URL_PAIRS.find(p => p.en === pathname || p.de === pathname)
  if (!pair) return undefined
  return { languages: { en: `${base}${pair.en}`, de: `${base}${pair.de}` } }
}

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
    { url: `${base}/guides`, priority: 0.8 },
    { url: `${base}/guides/wagering-requirements-explained`, priority: 0.85 },
    { url: `${base}/guides/how-to-claim-no-deposit-bonus`, priority: 0.85 },
    { url: `${base}/guides/free-spins-guide`, priority: 0.85 },
    { url: `${base}/guides/casino-bonus-terms`, priority: 0.8 },
    { url: `${base}/guides/crypto-casino-guide`, priority: 0.85 },
    { url: `${base}/how-we-rate`, priority: 0.7 },
    { url: `${base}/editorial-policy`, priority: 0.5 },
    { url: `${base}/team`, priority: 0.5 },
    { url: `${base}/about`, priority: 0.5 },
    { url: `${base}/responsible-gambling`, priority: 0.5 },
    { url: `${base}/fast-withdrawal-casinos`, priority: 0.85 },
    { url: `${base}/lowest-wagering-casinos`, priority: 0.9 },
    { url: `${base}/no-wagering-casinos`, priority: 0.9 },
    { url: `${base}/best-casino-bonus`, priority: 0.9 },
    { url: `${base}/crypto-casino-bonus`, priority: 0.85 },
    { url: `${base}/free-spins-no-deposit`, priority: 0.85 },
    { url: `${base}/best-pragmatic-play-casinos`, priority: 0.8 },
    { url: `${base}/best-hacksaw-gaming-casinos`, priority: 0.8 },
    { url: `${base}/luckywins-vs-winningz`, priority: 0.8 },
    { url: `${base}/stake-vs-blockspins`, priority: 0.8 },
    { url: `${base}/billionaire-spin-vs-chancer`, priority: 0.8 },
    // /luckymax-vs-jackpoty removed 2026-07-22 — page deleted (hard-referenced
    // the removed luckymax slug); URL 308s to /reviews/jackpoty.
  ].map(p => ({
    ...p,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    alternates: langsFor(p.url === base ? '/' : p.url.replace(base, '')),
  }))

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
    { url: `${base}/de/ratgeber`, priority: 0.8 },
    { url: `${base}/de/ratgeber/umsatzbedingungen-erklaert`, priority: 0.85 },
    { url: `${base}/de/ratgeber/krypto-casino-guide`, priority: 0.85 },
    { url: `${base}/de/ratgeber/freispiele-guide`, priority: 0.85 },
    { url: `${base}/de/ratgeber/einzahlungsanforderungen-erklaert`, priority: 0.85 },
    { url: `${base}/de/ratgeber/kein-einzahlungsbonus-guide`, priority: 0.85 },
  ].map(p => ({
    ...p,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    alternates: langsFor(p.url.replace(base, '')),
  }))

  // Casino reviews: EN + DE variants. SPECIALIZED_EN_ONLY slugs (talismania,
  // wonaco-casino) have their EN counterpart pointing at /articles/{slug}-bonus
  // and different-intent content on DE — the two sides are no longer language
  // variants of the same content, so we omit sitemap-level reciprocal alternates
  // for those slugs. Mirrors the alternatesForReview() suppression in @/lib/i18n.
  const SPECIALIZED_EN_ONLY = new Set(['talismania', 'wonaco-casino'])

  const enReviews = casinos.map(c => {
    const enHref = `${base}${casinoUrl(c.slug)}`
    const deHref = `${base}/de/bewertungen/${c.slug}`
    return {
      url: enHref,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: SPECIALIZED_EN_ONLY.has(c.slug)
        ? undefined
        : { languages: { en: enHref, de: deHref } },
    }
  })

  const deReviews = casinos.map(c => {
    const enHref = `${base}${casinoUrl(c.slug)}`
    const deHref = `${base}/de/bewertungen/${c.slug}`
    return {
      url: deHref,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: SPECIALIZED_EN_ONLY.has(c.slug)
        ? undefined
        : { languages: { en: enHref, de: deHref } },
    }
  })

  const articles = scanArticles().map(a => ({
    url: `${base}/articles/${a.slug}`,
    lastModified: a.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const news = scanNews().map(n => ({
    url: `${base}/news/${n.slug}`,
    lastModified: n.lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...enPages, ...dePages, ...enReviews, ...deReviews, ...articles, ...news]
}
