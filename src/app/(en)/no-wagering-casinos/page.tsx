import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'No Wagering Casinos 2026 — 0x Wagering Bonus Offers | BonusScout',
  description: 'Find casinos with no wagering requirements in 2026. Keep what you win with 0x wagering casino bonuses. All offers independently verified.',
  alternates: { canonical: 'https://www.bonuscout.com/no-wagering-casinos' }
}

const noWagering = casinos.filter(c => c.wagering === 0)
const lowWagering = casinos.filter(c => c.wagering > 0 && c.wagering <= 30)

const faqs = [
  { q: 'What is a no wagering casino bonus?', a: 'A no wagering bonus (0x) means any winnings from the bonus are yours to keep immediately with no playthrough requirements. These are rare and typically offered by crypto-native casinos.' },
  { q: 'Are no wagering casino bonuses worth it?', a: 'Yes — a no wagering bonus is always more valuable than a higher bonus with wagering attached, assuming the base amounts are comparable. The ability to withdraw immediately is a significant advantage.' },
  { q: 'Which casino has no wagering requirements?', a: 'Stake Casino currently offers promotional bonuses with 0x wagering, making it the standout option in this category. It is a crypto-focused casino with provably fair games.' },
]

export default function NoWageringPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/lowest-wagering-casinos" className="hover:text-[#F5A623]">Lowest Wagering</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">No Wagering Casinos</span>
        </div>

        <div className="bg-gradient-to-r from-green-900/40 to-green-800/10 border border-green-500/30 rounded-2xl p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            No Wagering Casinos 2026
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Keep everything you win. No wagering casinos let you withdraw bonus winnings immediately — no playthrough required.
          </p>
        </div>

        {noWagering.length > 0 && (
          <>
            <h2 className="text-xl font-black text-white mb-4">0x Wagering Casinos</h2>
            <div className="space-y-4 mb-10">
              {noWagering.map((casino) => (
                <div key={casino.id} className="bg-[#161820] border border-green-500/30 rounded-xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl">{casino.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-black text-white">{casino.name}</span>
                        <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-bold">0x Wagering</span>
                      </div>
                      <div className="text-[#F5A623] font-bold">{casino.bonus}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{casino.bestFor}</div>
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
          </>
        )}

        <h2 className="text-xl font-black text-white mb-4">Next Best — 30x Wagering</h2>
        <div className="space-y-4 mb-10">
          {lowWagering.map(casino => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-green-500/30 rounded-xl p-5 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl">{casino.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-black text-white">{casino.name}</span>
                    <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-bold">{casino.wagering}x</span>
                  </div>
                  <div className="text-[#F5A623] font-bold">{casino.bonus}</div>
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
