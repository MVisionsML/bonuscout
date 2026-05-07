import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Best Cashback Casino 2026 — Get Your Losses Back | BonusScout',
  description: 'Best cashback casino bonuses in 2026. Get a percentage of your net losses returned as bonus funds. All cashback offers tested and compared.',
  alternates: { canonical: 'https://www.bonuscout.com/best-cashback-casino' }
}

const cashbackCasinos = casinos.filter(c => c.bonusType === 'cashback')
const others = casinos.filter(c => c.bonusType !== 'cashback').slice(0, 6)

const faqs = [
  { q: 'What is a cashback casino bonus?', a: 'A cashback bonus returns a percentage of your net losses as bonus funds. For example, 25% cashback on €100 in losses = €25 returned. Cashback wagering is typically 1x — much lower than standard bonuses.' },
  { q: 'Which casino has the best cashback offer?', a: 'Billionaire Spin offers 25% cashback as part of its welcome package — the only casino in our comparison that combines a deposit match with cashback simultaneously.' },
  { q: 'Is cashback better than a welcome bonus?', a: 'Cashback is technically more player-friendly because it only activates when you lose, and wagering is minimal. A standard welcome bonus gives you more funds upfront but requires significant playthrough.' },
]

export default function BestCashbackPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Best Cashback Casino</span>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/10 border border-blue-500/20 rounded-2xl p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Best Cashback Casino 2026</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Cashback bonuses return a percentage of your losses — the most player-friendly bonus type available. We rank every cashback offer by percentage, wagering and frequency.
          </p>
        </div>

        {cashbackCasinos.length > 0 && (
          <>
            <h2 className="text-xl font-black text-white mb-4">Dedicated Cashback Casinos</h2>
            <div className="space-y-4 mb-10">
              {cashbackCasinos.map((casino) => (
                <div key={casino.id} className="bg-[#161820] border border-blue-500/20 rounded-xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl">{casino.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-black text-white">{casino.name}</span>
                        <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full font-bold">Cashback</span>
                      </div>
                      <div className="text-[#F5A623] font-bold">{casino.bonus}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{casino.verdict}</div>
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

        <h2 className="text-xl font-black text-white mb-4">Other Top Casinos</h2>
        <div className="space-y-4 mb-10">
          {others.map(casino => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-blue-500/20 rounded-xl p-5 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl">{casino.logo}</div>
                <div className="flex-1">
                  <span className="font-black text-white">{casino.name}</span>
                  <div className="text-[#F5A623] font-bold text-sm">{casino.bonus}</div>
                  <div className="text-xs text-gray-500">Wagering: {casino.wagering}x</div>
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
