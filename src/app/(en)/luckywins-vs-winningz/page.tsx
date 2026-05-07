import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'LuckyWins vs Winningz Casino 2026 — Which is Better? | BonusScout',
  description: 'LuckyWins Casino vs Winningz Casino compared. Bonus, wagering, games and withdrawals tested side by side. Which casino is better in 2026?',
  alternates: { canonical: 'https://www.bonuscout.com/luckywins-vs-winningz' }
}

const faqs = [
  { q: 'Is LuckyWins or Winningz better for bonuses?', a: 'LuckyWins offers a larger bonus at €8,000 + 500 Free Spins but with 40x wagering. Winningz offers €5,000 + 500 Free Spins at 35x wagering. For overall value, Winningz wins due to the lower wagering requirement.' },
  { q: 'Which has faster withdrawals — LuckyWins or Winningz?', a: 'Both process withdrawals within 24-48 hours. Our team has tested both and found withdrawal speeds comparable. E-wallets are fastest at both casinos.' },
  { q: 'Are both LuckyWins and Winningz safe?', a: 'Both hold Curaçao licenses and our team has verified their operations. Neither holds an MGA or UKGC license, which is the highest safety tier. Both are legitimate and pay out winnings.' },
]

export default function LuckyWinsVsWinningzPage() {
  const luckywins = casinos.find(c => c.slug === 'luckywins-casino')!
  const winningz = casinos.find(c => c.slug === 'winningz-casino')!

  const criteria = [
    { label: 'Welcome Bonus', lw: luckywins.bonus, wz: winningz.bonus, winner: 'lw' },
    { label: 'Wagering', lw: `${luckywins.wagering}x`, wz: `${winningz.wagering}x`, winner: 'wz' },
    { label: 'Min Deposit', lw: `€${luckywins.minDeposit}`, wz: `€${winningz.minDeposit}`, winner: 'tie' },
    { label: 'Withdrawal Time', lw: luckywins.withdrawalTime, wz: winningz.withdrawalTime, winner: 'tie' },
    { label: 'Games', lw: `${luckywins.games.toLocaleString()}+`, wz: `${winningz.games.toLocaleString()}+`, winner: 'lw' },
    { label: 'Our Rating', lw: `${luckywins.rating}/5`, wz: `${winningz.rating}/5`, winner: 'lw' },
    { label: 'License', lw: luckywins.licenses.join(', '), wz: winningz.licenses.join(', '), winner: 'tie' },
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
          <span className="text-gray-300">LuckyWins vs Winningz</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
          LuckyWins vs Winningz Casino 2026
        </h1>
        <p className="text-gray-400 mb-8">We tested both casinos. Here&apos;s how they compare on bonus, wagering, games and withdrawals.</p>

        {/* Side by side header */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[luckywins, winningz].map(casino => (
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

        {/* Comparison table */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl overflow-hidden mb-8">
          <div className="grid grid-cols-3 bg-[#252830] p-4">
            <div className="text-gray-400 text-sm font-bold">Category</div>
            <div className="text-white text-sm font-black text-center">LuckyWins</div>
            <div className="text-white text-sm font-black text-center">Winningz</div>
          </div>
          {criteria.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-3 p-4 ${i % 2 === 0 ? 'bg-[#161820]' : 'bg-[#0D0F14]'}`}>
              <div className="text-gray-400 text-sm">{row.label}</div>
              <div className={`text-sm text-center font-bold ${row.winner === 'lw' ? 'text-green-400' : row.winner === 'tie' ? 'text-white' : 'text-gray-400'}`}>
                {row.lw} {row.winner === 'lw' && '✓'}
              </div>
              <div className={`text-sm text-center font-bold ${row.winner === 'wz' ? 'text-green-400' : row.winner === 'tie' ? 'text-white' : 'text-gray-400'}`}>
                {row.wz} {row.winner === 'wz' && '✓'}
              </div>
            </div>
          ))}
        </div>

        {/* Verdict */}
        <div className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-6 mb-8">
          <h2 className="font-black text-white text-xl mb-4">Our Verdict — Which is Better?</h2>
          <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
            <p><span className="text-white font-bold">For bonus value vs wagering:</span> Winningz wins. The €5,000 + 500 Free Spins package at 35x is more attainable than LuckyWins&apos; €8,000 at 40x. The difference of 5x wagering is significant — on a €100 bonus, that&apos;s €500 more you need to wager.</p>
            <p><span className="text-white font-bold">For game variety:</span> LuckyWins edges ahead with 4,000+ games vs Winningz&apos;s 3,000+. Both have strong Pragmatic Play and Evolution libraries.</p>
            <p><span className="text-white font-bold">Overall:</span> If you want the best bonus value, go with Winningz. If you want the absolute largest bonus and don&apos;t mind the higher wagering, LuckyWins is the pick.</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
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
          <h2 className="font-black text-white mb-4">Read Full Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/reviews/luckywins-casino" className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 group transition-all">
              <div className="font-bold text-white group-hover:text-[#F5A623] transition-colors">LuckyWins Casino Full Review →</div>
              <div className="text-gray-500 text-sm mt-1">{luckywins.bonus}</div>
            </Link>
            <Link href="/reviews/winningz-casino" className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 group transition-all">
              <div className="font-bold text-white group-hover:text-[#F5A623] transition-colors">Winningz Casino Full Review →</div>
              <div className="text-gray-500 text-sm mt-1">{winningz.bonus}</div>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
