import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casino News & Updates 2026 | BonusScout',
  description: 'Casino industry news and updates. New bonus offers, wagering regulation changes, slot releases, and crypto casino developments — verified by our team.',
  alternates: { canonical: 'https://www.bonuscout.com/news' }
}

interface Article {
  slug: string | null
  date: string
  category: string
  categoryColor: string
  title: string
  excerpt: string
}

const articles: Article[] = [
  {
    slug: 'best-no-deposit-bonuses-may-2026',
    date: '2026-05-30',
    category: 'Bonuses',
    categoryColor: 'bg-[#F5A623]/10 text-[#F5A623] border-[#F5A623]/20',
    title: 'Best No Deposit Casino Bonuses — May 2026',
    excerpt: 'A monthly audit of every no deposit offer worth claiming this month. Three casinos added new offers, two reduced their wagering, and one notable brand pulled its no deposit promotion entirely.',
  },
  {
    slug: null,
    date: '2026-05-25',
    category: 'Regulation',
    categoryColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    title: 'EU Wagering Cap Proposal Enters Second Reading',
    excerpt: 'The European Commission&apos;s proposed 35x wagering cap for licensed EU operators has moved into its second parliamentary reading. We break down what this means for German, Swedish and Maltese-licensed casinos.',
  },
  {
    slug: null,
    date: '2026-05-20',
    category: 'New Slot',
    categoryColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    title: 'Pragmatic Play Launches Gates of Olympus Super Scatter',
    excerpt: 'A sequel to the genre-defining Gates of Olympus released this week. Higher max win, modified multiplier mechanic, and Pragmatic&apos;s first sub-96% RTP variant in two years.',
  },
  {
    slug: null,
    date: '2026-05-15',
    category: 'Crypto',
    categoryColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    title: 'Stake Adds Solana and Polygon Deposit Support',
    excerpt: 'Crypto-native casino Stake has added Solana (SOL) and Polygon (MATIC) to its accepted cryptocurrency list, bringing total supported tokens to 21. Withdrawal speeds reported at 30–90 seconds.',
  },
  {
    slug: null,
    date: '2026-05-10',
    category: 'Bonuses',
    categoryColor: 'bg-[#F5A623]/10 text-[#F5A623] border-[#F5A623]/20',
    title: 'Cashback Tier Inflation: Why 25% Is the New Default',
    excerpt: 'Three years ago 10% cashback was competitive. In Q2 2026 every major casino has moved to 15% baseline or higher, with 25% Diamond-tier offers becoming standard. Analysis of the market shift.',
  },
  {
    slug: null,
    date: '2026-05-05',
    category: 'New Slot',
    categoryColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    title: 'Hacksaw Gaming Confirms Stack &apos;Em Sequel for Q3',
    excerpt: 'Hacksaw Gaming has confirmed a sequel to Stack &apos;Em, targeted for Q3 2026 release. Expect another Extreme volatility design with the studio&apos;s signature feature buy options.',
  },
]

export default function NewsIndexPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">News</span>
      </div>

      <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 mb-10">
        <div className="text-xs text-[#F5A623] font-bold mb-2 uppercase tracking-wide">Updated June 2026</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Casino News &amp; Updates</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Independent reporting on the casino industry. New bonus offers, regulation changes, slot launches and crypto casino developments — verified before we publish.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.map(article => {
          const Card = (
            <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 group hover:border-[#F5A623]/30 transition-all h-full">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${article.categoryColor}`}>
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">{article.date}</span>
              </div>
              <h2 className="font-black text-white text-lg mb-2 group-hover:text-[#F5A623] transition-colors">{article.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{article.excerpt}</p>
              {article.slug ? (
                <span className="text-[#F5A623] font-bold text-sm">Read more →</span>
              ) : (
                <span className="text-gray-600 text-xs italic">Full article coming soon</span>
              )}
            </div>
          )
          return article.slug ? (
            <Link key={article.date} href={`/news/${article.slug}`} className="block">{Card}</Link>
          ) : (
            <div key={article.date}>{Card}</div>
          )
        })}
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mt-10">
        <h2 className="font-black text-white mb-4">Related pages</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'All Slot Reviews', href: '/slots' },
            { label: 'No Deposit Bonus', href: '/no-deposit-bonus' },
            { label: 'Casino Cashback Bonus', href: '/casino-cashback-bonus' },
            { label: 'Guides', href: '/guides' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 text-sm font-bold text-white hover:text-[#F5A623] transition-all">
              {item.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
