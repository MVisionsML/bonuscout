import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Best Casino Bonus 2026 — Biggest Offers Tested & Ranked | BonusScout',
  description: 'The best casino bonuses in 2026 ranked by real value. We compare bonus size, wagering requirements and terms to find the offers actually worth claiming.',
  alternates: { canonical: 'https://www.bonuscout.com/best-casino-bonus' }
}

const sorted = [...casinos].sort((a, b) => b.rating - a.rating)

const faqs = [
  { q: 'What is the best casino bonus right now?', a: 'LuckyWins Casino offers the biggest bonus at €8,000 + 500 Free Spins, while Winningz Casino offers €5,000 + 500 Free Spins at a lower 35x wagering. For pure value vs wagering, Winningz is our top pick.' },
  { q: 'How do I find the best casino bonus?', a: 'Compare three numbers: bonus amount, wagering requirement, and minimum deposit. A smaller bonus with lower wagering is often more valuable than a larger bonus with high wagering. Use our wagering calculator to compare.' },
  { q: 'What bonus type is best for players?', a: 'Cashback bonuses are technically the most player-friendly since they return a percentage of losses with minimal wagering. Welcome bonuses offer the most free funds upfront. No deposit bonuses are best for testing a casino risk-free.' },
]

export default function BestCasinoBonusPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Best Casino Bonus</span>
        </div>

        <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Best Casino Bonus 2026
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            We rank casino bonuses by actual value — not headline numbers. Wagering requirements, game restrictions and withdrawal caps all factor into our scoring.
          </p>
          <div className="text-xs text-gray-500 mt-4">Updated April 2026 · {casinos.length} bonuses compared</div>
        </div>

        {/* Top 3 highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {sorted.slice(0, 3).map((casino, index) => (
            <div key={casino.id} className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-5">
              <div className="text-xs text-[#F5A623] font-bold mb-2">#{index + 1} {index === 0 ? 'Best Overall' : index === 1 ? 'Runner Up' : 'Third Pick'}</div>
              <div className="text-2xl mb-2">{casino.logo}</div>
              <div className="font-black text-white mb-1">{casino.name}</div>
              <div className="text-[#F5A623] font-bold text-sm mb-3">{casino.bonus}</div>
              <div className="text-xs text-gray-500 mb-3">Wagering: <span className={casino.wagering <= 30 ? 'text-green-400 font-bold' : 'text-yellow-400 font-bold'}>{casino.wagering}x</span></div>
              <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                className="block w-full bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm py-2.5 rounded-lg transition-colors text-center">
                Claim Bonus
              </a>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-black text-white mb-6">All Casino Bonuses Ranked</h2>
        <div className="space-y-4 mb-10">
          {sorted.map((casino, index) => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-5 transition-all">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 items-center justify-center text-xs font-black text-[#F5A623]">{index + 1}</div>
                <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl">{casino.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-black text-white">{casino.name}</span>
                    {casino.tag && <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">{casino.tag}</span>}
                  </div>
                  <div className="text-[#F5A623] font-bold">{casino.bonus}</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Wagering: <span className={casino.wagering <= 30 ? 'text-green-400 font-bold' : casino.wagering <= 35 ? 'text-yellow-400 font-bold' : 'text-red-400 font-bold'}>{casino.wagering}x</span>
                    {' · '}Min: €{casino.minDeposit}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                    className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-5 py-2.5 rounded-lg transition-colors text-center">
                    Claim
                  </a>
                  <Link href={`/reviews/${casino.slug}`} className="text-center text-xs text-gray-500 hover:text-[#F5A623]">Review</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
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

      </div>
    </>
  )
}
