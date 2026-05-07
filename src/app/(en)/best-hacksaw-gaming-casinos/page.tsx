import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Best Hacksaw Gaming Casinos 2026 — Wanted Dead or a Wild | BonusScout',
  description: 'Best casinos with Hacksaw Gaming slots in 2026. Play Wanted Dead or a Wild, Chaos Crew and more at top-rated Hacksaw Gaming casinos.',
  alternates: { canonical: 'https://www.bonuscout.com/best-hacksaw-gaming-casinos' }
}

const hacksawCasinos = casinos.filter(c => c.software.includes('Hacksaw Gaming'))

const faqs = [
  { q: 'What are the best Hacksaw Gaming slots?', a: 'Wanted Dead or a Wild (96.38% RTP, 12,500x max win), Chaos Crew (96.31% RTP), Stick Em (96.5% RTP), and Cash Chips are the most popular Hacksaw Gaming titles known for high volatility and massive max wins.' },
  { q: 'Which casino has the best Hacksaw Gaming bonus?', a: 'LuckyMax Casino is notable for specifically highlighting Hacksaw Gaming in its library alongside a €4,000 + 300 Free Spins welcome offer at 35x wagering.' },
  { q: 'What makes Hacksaw Gaming different from other providers?', a: 'Hacksaw Gaming is known for extremely high volatility slots with massive max win multipliers (often 10,000x+) and innovative bonus mechanics. They appeal to players who prefer high-risk, high-reward gameplay over steady small wins.' },
]

export default function HacksawGamingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Best Hacksaw Gaming Casinos</span>
        </div>

        <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-800/10 border border-yellow-500/20 rounded-2xl p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Best Hacksaw Gaming Casinos 2026</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Play Wanted Dead or a Wild, Chaos Crew and more at the best Hacksaw Gaming casinos. All tested and ranked by our team.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            {['Wanted Dead or a Wild', 'Chaos Crew', 'Stick Em', 'Cash Chips'].map(s => (
              <span key={s} className="text-xs bg-[#252830] text-gray-300 border border-[#2E3040] px-3 py-1 rounded-full">{s}</span>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-black text-white mb-6">Casinos with Hacksaw Gaming — {hacksawCasinos.length} Options</h2>
        <div className="space-y-4 mb-10">
          {hacksawCasinos.map((casino, index) => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-yellow-500/20 rounded-xl p-5 transition-all">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/20 items-center justify-center text-xs font-black text-yellow-400">{index + 1}</div>
                <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl">{casino.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-black text-white">{casino.name}</span>
                    {casino.tag && <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">{casino.tag}</span>}
                  </div>
                  <div className="text-[#F5A623] font-bold text-sm">{casino.bonus}</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Wagering: <span className={casino.wagering <= 30 ? 'text-green-400 font-bold' : casino.wagering <= 35 ? 'text-yellow-400 font-bold' : 'text-red-400 font-bold'}>{casino.wagering}x</span>
                    {' · '}{casino.games.toLocaleString()}+ games
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                    className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-5 py-2.5 rounded-lg transition-colors text-center">
                    Play Now
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
