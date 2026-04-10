import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Best Crypto Casino Bonus 2026 — Bitcoin Casino Offers | BonusScout',
  description: 'Best crypto casino bonuses in 2026. Bitcoin, Ethereum and crypto-friendly casinos with the best welcome offers. All tested by our team.',
  alternates: { canonical: 'https://www.bonuscout.com/crypto-casino-bonus' }
}

const cryptoCasinos = casinos.filter(c =>
  c.pros.some(p => p.toLowerCase().includes('crypto') || p.toLowerCase().includes('bitcoin')) ||
  c.software.includes('BGaming') ||
  c.slug === 'stake-casino' ||
  c.slug === 'blockspins-casino'
)

const faqs = [
  { q: 'What is a crypto casino bonus?', a: 'A crypto casino bonus works like a standard welcome bonus but at a casino that accepts Bitcoin, Ethereum or other cryptocurrencies as payment. Some crypto casinos offer 0x wagering on promotional offers — a major advantage over traditional casinos.' },
  { q: 'Which is the best Bitcoin casino?', a: 'Stake Casino is the standout option — it offers 0x wagering on promotional offers, provably fair games, and one of the fastest withdrawal pipelines we have tested. Blockspins is the best option specifically for smaller crypto deposits.' },
  { q: 'Are crypto casino bonuses safe?', a: 'Safety depends on licensing, not payment method. Crypto casinos operating under Curaçao or MGA licenses are generally safe. Always verify the license before depositing, regardless of whether you pay in crypto or fiat.' },
]

export default function CryptoCasinoBonusPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Crypto Casino Bonus</span>
        </div>

        <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/10 border border-orange-500/20 rounded-2xl p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Best Crypto Casino Bonus 2026</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Bitcoin and crypto-friendly casinos with the best bonus offers. We verify crypto deposit/withdrawal times and bonus terms independently.
          </p>
        </div>

        <h2 className="text-2xl font-black text-white mb-6">Top Crypto Casinos</h2>
        <div className="space-y-4 mb-10">
          {cryptoCasinos.map((casino, index) => (
            <div key={casino.id} className="bg-[#161820] border border-orange-500/20 hover:border-orange-400/40 rounded-xl p-5 transition-all">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 items-center justify-center text-xs font-black text-orange-400">{index + 1}</div>
                <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl">{casino.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-black text-white">{casino.name}</span>
                    <span className="text-xs bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded-full font-bold">Crypto</span>
                    {casino.wagering === 0 && <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-bold">0x Wagering</span>}
                  </div>
                  <div className="text-[#F5A623] font-bold">{casino.bonus}</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Wagering: <span className={casino.wagering === 0 ? 'text-green-400 font-bold' : casino.wagering <= 30 ? 'text-green-400 font-bold' : 'text-yellow-400 font-bold'}>{casino.wagering}x</span>
                    {' · '}Withdrawal: {casino.withdrawalTime}
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
