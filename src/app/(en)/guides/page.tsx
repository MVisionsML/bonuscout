import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casino Bonus Guides 2026 — Expert Guides | BonusScout',
  description: 'Expert casino bonus guides. Learn how wagering works, how to claim no deposit bonuses, free spins explained and bonus terms decoded.',
}

const guides = [
  { title: 'Wagering Requirements Explained', slug: 'wagering-requirements-explained', desc: 'What wagering means, how to calculate it, and which casinos have the lowest requirements.', readTime: '5 min read' },
  { title: 'How to Claim a No Deposit Bonus', slug: 'how-to-claim-no-deposit-bonus', desc: 'Step-by-step guide to claiming free bonus funds without making a deposit.', readTime: '4 min read' },
  { title: 'Free Spins Guide', slug: 'free-spins-guide', desc: 'Everything about free spins — value per spin, wagering on winnings, expiry and how to find the best offers.', readTime: '5 min read' },
  { title: 'Casino Bonus Terms Decoded', slug: 'casino-bonus-terms', desc: 'Every bonus term explained in plain English. Wagering, max bet, game weighting, withdrawal caps and more.', readTime: '6 min read' },
]

export default function GuidesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Guides</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Casino Bonus Guides</h1>
      <p className="text-gray-400 mb-10">Everything you need to know about casino bonuses — written by our testing team.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guides.map(g => (
          <Link key={g.slug} href={`/guides/${g.slug}`}
            className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/40 rounded-xl p-6 group transition-all">
            <div className="text-xs text-[#F5A623] font-bold mb-2">{g.readTime}</div>
            <h2 className="font-black text-white group-hover:text-[#F5A623] transition-colors mb-2">{g.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">{g.desc}</p>
            <div className="mt-4 text-[#F5A623] text-sm font-bold">Read guide →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
