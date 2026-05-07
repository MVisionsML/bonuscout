import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Best Pragmatic Play Casinos 2026 — Gates of Olympus, Sweet Bonanza | BonusScout',
  description: 'Best casinos with Pragmatic Play slots in 2026. Play Gates of Olympus, Sweet Bonanza, Big Bass and more at top-rated Pragmatic Play casinos.',
  alternates: { canonical: 'https://www.bonuscout.com/best-pragmatic-play-casinos' }
}

const ppCasinos = casinos.filter(c => c.software.includes('Pragmatic Play'))

const faqs = [
  { q: 'What are the most popular Pragmatic Play slots?', a: 'Gates of Olympus (96.5% RTP, 5,000x max win), Sweet Bonanza (96.48% RTP, 21,175x max win), Big Bass Bonanza (96.71% RTP), and Book of Tut are consistently the most played Pragmatic Play titles.' },
  { q: 'Which casino has the best Pragmatic Play bonus?', a: 'LuckyWins Casino offers the largest overall bonus at €8,000 + 500 Free Spins and includes Pragmatic Play in its library. Winningz Casino at €5,000 + 500 Free Spins with 35x wagering offers better value per spin.' },
  { q: 'Does Pragmatic Play offer live casino games?', a: 'Yes. Pragmatic Play Live includes Lightning Roulette, Mega Sic Bo, and live game show titles alongside their slot portfolio. Many casinos in our list offer both Pragmatic Play slots and live dealer games.' },
]

export default function PragmaticPlayPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Best Pragmatic Play Casinos</span>
        </div>

        <div className="bg-gradient-to-r from-red-900/20 to-red-800/10 border border-red-500/20 rounded-2xl p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Best Pragmatic Play Casinos 2026</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Play Gates of Olympus, Sweet Bonanza and Big Bass Bonanza at the best-rated Pragmatic Play casinos. All tested and verified by our team.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            {['Gates of Olympus', 'Sweet Bonanza', 'Big Bass Bonanza', 'Book of Tut', 'Starlight Princess'].map(s => (
              <span key={s} className="text-xs bg-[#252830] text-gray-300 border border-[#2E3040] px-3 py-1 rounded-full">{s}</span>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-black text-white mb-6">Top Pragmatic Play Casinos — {ppCasinos.length} Options</h2>
        <div className="space-y-4 mb-10">
          {ppCasinos.map((casino, index) => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-red-500/20 rounded-xl p-5 transition-all">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#252830] items-center justify-center text-xs font-black text-gray-400">{index + 1}</div>
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
