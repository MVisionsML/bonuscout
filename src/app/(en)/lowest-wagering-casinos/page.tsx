import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Lowest Wagering Casinos 2026 — 30x and Under | BonusScout',
  description: 'Find casinos with the lowest wagering requirements in 2026. We rank every casino by wagering — from 0x to 30x. All tested by our team.',
  alternates: { canonical: 'https://www.bonuscout.com/lowest-wagering-casinos' }
}

const sorted = [...casinos].sort((a, b) => a.wagering - b.wagering)
const faqs = [
  { q: 'What is a good wagering requirement?', a: '30x or under is considered good. 35x is the industry standard and acceptable. Anything above 40x is high and means you need to bet through significantly more before withdrawing.' },
  { q: 'Which casino has the lowest wagering requirement?', a: 'Stake Casino currently offers 0x wagering on promotional offers, making it the lowest on our list. Chancer and Blockspins both offer 30x, which is the next best tier.' },
  { q: 'How do I calculate wagering requirements?', a: 'Multiply your bonus amount by the wagering number. Example: €100 bonus × 30x = €3,000 you must wager before withdrawing. Always check if the wagering applies to bonus only or bonus + deposit.' },
  { q: 'Do all games count toward wagering?', a: 'No. Slots typically count 100%, table games like blackjack often count only 10-20%, and some games may be excluded entirely. Always check the specific terms at each casino.' },
]

export default function LowestWageringPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Lowest Wagering Casinos</span>
        </div>

        <div className="bg-gradient-to-r from-green-900/30 to-green-800/10 border border-green-500/20 rounded-2xl p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Lowest Wagering Casinos 2026
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            We rank every casino by wagering requirement — from 0x to 45x. Lower wagering means more of your winnings are actually withdrawable. Updated April 2026.
          </p>
          <div className="flex flex-wrap gap-4 mt-5 text-sm">
            <span className="text-green-400">✓ 0x — 30x = Best tier</span>
            <span className="text-yellow-400">✓ 35x = Fair</span>
            <span className="text-red-400">✓ 40x+ = High</span>
          </div>
        </div>

        {/* Wagering explainer */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
          <h2 className="font-black text-white mb-4">What is a wagering requirement?</h2>
          <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
            <p>A wagering requirement (also called playthrough) is the number of times you must bet your bonus amount before you can withdraw any winnings derived from it. It is the single most important number to check when comparing casino bonuses.</p>
            <p>Example: You claim a €100 bonus with 35x wagering. You must wager €3,500 before withdrawing. If the wagering were 30x instead, you&apos;d only need to wager €3,000 — a €500 difference in required play.</p>
            <p>Our team ranks casinos by wagering first, then by bonus value, to give you the clearest picture of actual bonus value rather than headline numbers.</p>
          </div>
        </div>

        {/* Casino list sorted by wagering */}
        <h2 className="text-2xl font-black text-white mb-2">All Casinos Ranked by Wagering</h2>
        <p className="text-gray-500 text-sm mb-6">Sorted from lowest to highest wagering requirement</p>

        <div className="space-y-4 mb-10">
          {sorted.map((casino, index) => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-5 transition-all">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#252830] items-center justify-center text-xs font-black text-gray-400 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {casino.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-black text-white">{casino.name}</span>
                    {casino.tag && (
                      <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">
                        {casino.tag}
                      </span>
                    )}
                  </div>
                  <div className="text-[#F5A623] font-bold text-sm mb-1">{casino.bonus}</div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>Min: €{casino.minDeposit}</span>
                    <span>{casino.licenses.join(', ')}</span>
                  </div>
                </div>
                {/* Wagering badge */}
                <div className="flex-shrink-0 text-center mr-2">
                  <div className={`text-2xl font-black ${casino.wagering === 0 ? 'text-green-400' : casino.wagering <= 30 ? 'text-green-400' : casino.wagering <= 35 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {casino.wagering}x
                  </div>
                  <div className="text-xs text-gray-500">wagering</div>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                    className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-4 py-2.5 rounded-lg transition-colors text-center">
                    Claim
                  </a>
                  <Link href={`/reviews/${casino.slug}`} className="text-center text-xs text-gray-500 hover:text-[#F5A623]">
                    Review
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8 mb-8">
          <h2 className="font-black text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className={i > 0 ? 'border-t border-[#252830] pt-6' : ''}>
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal links */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
          <h2 className="font-black text-white mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'No Wagering Casinos', href: '/no-wagering-casinos', desc: '0x wagering offers' },
              { label: 'Best Casino Bonus', href: '/best-casino-bonus', desc: 'Highest value offers' },
              { label: 'Best Free Spins', href: '/best-free-spins-casino', desc: 'Most free spins' },
              { label: 'Cashback Casinos', href: '/best-cashback-casino', desc: 'Get losses back' },
            ].map(item => (
              <Link key={item.href} href={item.href}
                className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 group transition-all">
                <div className="font-bold text-white group-hover:text-[#F5A623] transition-colors text-sm">{item.label}</div>
                <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
