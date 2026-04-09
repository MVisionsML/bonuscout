import { MetadataRoute } from 'next'
import { casinos } from '@/data/casinos'

const base = 'https://www.bonuscout.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { url: `${base}`, priority: 1.0 },
    { url: `${base}/casinos`, priority: 0.9 },
    { url: `${base}/bonuses`, priority: 0.9 },
    { url: `${base}/bonuses/no-deposit`, priority: 0.85 },
    { url: `${base}/bonuses/free-spins`, priority: 0.85 },
    { url: `${base}/bonuses/welcome`, priority: 0.85 },
    { url: `${base}/bonuses/cashback`, priority: 0.85 },
    { url: `${base}/reviews`, priority: 0.8 },
    { url: `${base}/free-games`, priority: 0.7 },
    { url: `${base}/guides`, priority: 0.7 },
    { url: `${base}/methodology`, priority: 0.6 },
    { url: `${base}/responsible-gambling`, priority: 0.5 },
    { url: `${base}/about`, priority: 0.5 },
  ].map(p => ({
    ...p,
    lastModified: now,
    changeFrequency: 'monthly' as const
  }))

  const reviewPages = casinos.map(c => ({
    url: `${base}/reviews/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85
  }))

  return [...staticPages, ...reviewPages]
}
