import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'LuckyMax vs Jackpoty Casino 2026 — Which is Better? | BonusScout',
  description: 'LuckyMax Casino vs Jackpoty compared. Bonus, wagering, games and withdrawals tested side by side. Which casino is better in 2026?',
  alternates: { canonical: 'https://www.bonuscout.com/luckymax-vs-jackpoty' }
}

const faqs = [
  { q: 'Is LuckyMax or Jackpoty better?', a: 'LuckyMax wins on bonus value with €4,000 + 300 Free Spins vs Jackpoty&apos;s €2,000 + 100 Free Spins, both at the same 35x wagering. LuckyMax also includes Hacksaw Gaming which Jackpoty does not.' },
  { q: 'Which has better mobile experience?', a: 'LuckyMax is specifically noted for its excellent mobile experience with a strong multi-deposit bonus structure. Both work well on mobile browsers without requiring a dedicated app.' },
  { q: 'Are LuckyMax and Jackpoty safe?', a: 'Both hold Curaçao licenses and have been tested by our team with real deposits and withdrawals. Both are legitimate and reliable operators.' },
]

export default function LuckyMaxVsJackpotyPage() {
  const luckymax = casinos.find(c => c.slug === 'luckymax-casino')!
  const jackpoty = casinos.find(c => c.slug === 'jackpoty')!

  const criteria = [
    { label: 'Welcome Bonus', lm: luckymax.bonus, j: jackpoty.bonus, winner: 'lm' },
    { label: 'Wagering', lm: `${luckymax.wagering}x`, j: `${jackpoty.wagering}x`, winner: 'tie' },
    { label: 'Min Deposit', lm: `€${luckymax.minDeposit}`, j: `€${jackpoty.minDeposit}`, winner: 'tie' },
    { label: 'Games', lm: `${luckymax.games.toLocaleString()}+`, j: `${jackpoty.games.toLocaleString()}+`, winner: 'lm' },
    { label: 'Hacksaw Gaming', lm: '✓ Yes', j: '✗ No', winner: 'lm' },
    { label: 'Our Rating', lm: `${luckymax.rating}/5`, j: `${jackpoty.rating}/5`, winner: 'lm' },
    { label: 'Withdrawal Time', lm: luckymax.withdrawalTime, j: jackpoty.withdrawalTime, winner: 'tie' },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/reviews" className="hover:text-[#F5A623]">Reviews</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">LuckyMax vs Jackpoty</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">LuckyMax vs Jackpoty Casino 2026</h1>
        <p className="text-gray-400 mb-8">Two mid-tier casinos with identical wagering compared head to head. We tested both.</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {[luckymax, jackpoty].map(casino => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] rounded-xl p-5 text-center">
              <div className="text-4xl mb-2">{casino.logo}</div>
              <div className="font-black text-white mb-1">{casino.name}</div>
              <div className="flex justify-center gap-0.5 mb-2">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className={`text-sm ${s <= Math.round(casino.rating) ? 'text-[#F5A623]' : 'text-gray-700'}`}>★</span>
                ))}
              </div>
              <div className="text-[#F5A623] font-bold text-sm mb-3">{casino.bonus}</div>
              <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                className="block w-full bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm py-2.5 rounded-lg transition-colors">
                Claim Bonus
              </a>
            </div>
          ))}
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl overflow-hidden mb-8">
          <div className="grid grid-cols-3 bg-[#252830] p-4">
            <div className="text-gray-400 text-sm font-bold">Category</div>
            <div className="text-white text-sm font-black text-center">LuckyMax</div>
            <div className="text-white text-sm font-black text-center">Jackpoty</div>
          </div>
          {criteria.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-3 p-4 ${i % 2 === 0 ? 'bg-[#161820]' : 'bg-[#0D0F14]'}`}>
              <div className="text-gray-400 text-sm">{row.label}</div>
              <div className={`text-sm text-center font-bold ${row.winner === 'lm' ? 'text-green-400' : row.winner === 'tie' ? 'text-white' : 'text-gray-400'}`}>
                {row.lm} {row.winner === 'lm' && '✓'}
              </div>
              <div className={`text-sm text-center font-bold ${row.winner === 'j' ? 'text-green-400' : row.winner === 'tie' ? 'text-white' : 'text-gray-400'}`}>
                {row.j} {row.winner === 'j' && '✓'}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-6 mb-8">
          <h2 className="font-black text-white text-xl mb-4">Our Verdict</h2>
          <div className="text-gray-400 text-sm leading-relaxed space-y-3">
            <p><span className="text-white font-bold">For bonus value:</span> LuckyMax wins convincingly. The €4,000 + 300 Free Spins package is double Jackpoty&apos;s offer at the same 35x wagering.</p>
            <p><span className="text-white font-bold">For game variety:</span> LuckyMax again — Hacksaw Gaming inclusion gives access to Wanted Dead or a Wild and Chaos Crew, which Jackpoty does not offer.</p>
            <p><span className="text-white font-bold">Overall:</span> LuckyMax is the stronger choice in this comparison. The only reason to choose Jackpoty would be if you&apos;ve already claimed the LuckyMax bonus and want a fresh welcome offer.</p>
          </div>
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
          <h2 className="font-black text-white mb-4">Read Full Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/reviews/luckymax-casino" className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 group transition-all">
              <div className="font-bold text-white group-hover:text-[#F5A623]">LuckyMax Casino Full Review →</div>
              <div className="text-gray-500 text-sm mt-1">{luckymax.bonus}</div>
            </Link>
            <Link href="/reviews/jackpoty" className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 group transition-all">
              <div className="font-bold text-white group-hover:text-[#F5A623]">Jackpoty Full Review →</div>
              <div className="text-gray-500 text-sm mt-1">{jackpoty.bonus}</div>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
