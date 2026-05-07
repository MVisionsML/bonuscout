import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Best Free Spins Casino 2026 — Most Free Spins Offers | BonusScout',
  description: 'Find casinos with the most free spins in 2026. We compare free spin counts, wagering on winnings and expiry times. All offers independently tested.',
  alternates: { canonical: 'https://www.bonuscout.com/best-free-spins-casino' }
}

const freeSpinCasinos = [...casinos].filter(c => c.bonus.toLowerCase().includes('spin')).sort((a, b) => b.rating - a.rating)

const faqs = [
  { q: 'Which casino gives the most free spins?', a: 'LuckyWins Casino offers 500 free spins as part of its welcome package, followed by Winningz Casino at 500 free spins and LuckyMax at 300 free spins. Always check wagering on winnings before claiming.' },
  { q: 'What wagering applies to free spin winnings?', a: 'Free spin winnings almost always carry a wagering requirement — typically 30-40x the winnings amount. At 35x, if you win €10 from free spins, you must wager €350 before withdrawing those funds.' },
  { q: 'Do free spins expire?', a: 'Yes. Most casinos give 24-72 hours to use free spins after they are credited. Some split spins across multiple days. Always check the expiry terms before claiming.' },
  { q: 'What is the value of a free spin?', a: 'Typically €0.10-€0.20 per spin. 100 free spins at €0.10 = €10 in potential value before wagering. Higher-value spins (€0.20+) are rare and worth highlighting.' },
]

export default function BestFreeSpinsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Best Free Spins Casino</span>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/10 border border-purple-500/20 rounded-2xl p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Best Free Spins Casino 2026</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            We compare free spin counts, per-spin value, wagering on winnings and expiry times. Updated April 2026.
          </p>
          <div className="flex flex-wrap gap-4 mt-5 text-sm text-gray-400">
            <span>✓ {freeSpinCasinos.length} casinos with free spins</span>
            <span>✓ All offers verified</span>
            <span>✓ Wagering checked</span>
          </div>
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
          <h2 className="font-black text-white mb-3">How we compare free spins offers</h2>
          <p className="text-gray-400 text-sm leading-relaxed">We look beyond the headline spin count. A casino offering 500 spins at 40x wagering is less valuable than one offering 200 spins at 30x. We factor in spin value, wagering, expiry and which games the spins are assigned to.</p>
        </div>

        <h2 className="text-2xl font-black text-white mb-6">Casinos Ranked by Free Spins Value</h2>
        <div className="space-y-4 mb-10">
          {freeSpinCasinos.map((casino, index) => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-purple-500/30 rounded-xl p-5 transition-all">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 items-center justify-center text-xs font-black text-purple-400">{index + 1}</div>
                <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl">{casino.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-black text-white">{casino.name}</span>
                    {casino.tag && <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">{casino.tag}</span>}
                  </div>
                  <div className="text-[#F5A623] font-bold text-sm">{casino.bonus}</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Wagering: <span className={casino.wagering <= 30 ? 'text-green-400 font-bold' : casino.wagering <= 35 ? 'text-yellow-400 font-bold' : 'text-red-400 font-bold'}>{casino.wagering}x</span>
                    {' · '}Min: €{casino.minDeposit} · {casino.licenses.join(', ')}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                    className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-5 py-2.5 rounded-lg transition-colors text-center">
                    Get Spins
                  </a>
                  <Link href={`/reviews/${casino.slug}`} className="text-center text-xs text-gray-500 hover:text-[#F5A623]">Review</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

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

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
          <h2 className="font-black text-white mb-4">Related Pages</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'No Wagering Casinos', href: '/no-wagering-casinos' },
              { label: 'Lowest Wagering Casinos', href: '/lowest-wagering-casinos' },
              { label: 'Best Casino Bonus', href: '/best-casino-bonus' },
              { label: 'Best Cashback Casino', href: '/best-cashback-casino' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 text-sm font-bold text-white hover:text-[#F5A623] transition-all">
                {item.label} →
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
