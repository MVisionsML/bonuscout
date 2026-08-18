import Link from 'next/link'
import { Metadata } from 'next'
import { listNewsArticles } from '@/lib/news'
import NewsCategoryFilter from './NewsCategoryFilter'
import { BreadcrumbSchema, ItemListSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Casino News & Updates 2026',
  description: 'Casino industry news and updates. New bonus offers, wagering regulation changes, slot releases, and crypto casino developments — sourced from operator announcements and regulator publications.',
  alternates: { canonical: 'https://www.bonuscout.com/news' },
}

const CATEGORIES = ['All', 'Crypto', 'Regulation', 'Bonuses', 'Industry'] as const

export default function NewsIndexPage() {
  const articles = listNewsArticles()
  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <>
    <BreadcrumbSchema items={[
      { name: 'Home', url: 'https://www.bonuscout.com' },
      { name: 'News', url: 'https://www.bonuscout.com/news' }
    ]} />
    {articles.length > 0 && (
      <ItemListSchema
        name="BonusCout Casino News"
        items={articles.map(a => ({ name: a.title, url: `https://www.bonuscout.com/news/${a.slug}` }))}
      />
    )}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">News</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-2">Latest News</h1>
        <p className="text-gray-400">Independent reporting on the casino industry — verified before we publish.</p>
      </div>

      {articles.length === 0 ? (
        <div className="bg-[#161820] border border-[#252830] rounded-2xl p-12 text-center">
          <p className="text-gray-400">No news articles published yet. Check back soon.</p>
        </div>
      ) : (
        <NewsCategoryFilter
          categories={[...CATEGORIES]}
          featured={featured}
          rest={rest}
        />
      )}
    </div>
    </>
  )
}
