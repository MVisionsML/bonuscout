import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Billionaire Spin vs Chancer Casino 2026 — Which is Better?',
  description: 'Billionaire Spin vs Chancer Casino compared side by side. Bonus, wagering, cashback and withdrawals tested. Which casino is better in 2026?',
  alternates: { canonical: 'https://www.bonuscout.com/billionaire-spin-vs-chancer' }
}

const faqs = [
  { q: 'Is Billionaire Spin or Chancer better for bonuses?', a: 'Chancer wins on wagering with 30x vs Billionaire Spin&apos;s 35x. However, Billionaire Spin includes 25% cashback alongside its welcome bonus — a unique advantage that makes it more valuable for players who expect to lose during the bonus period.' },
  { q: 'Which has the lowest wagering — Billionaire Spin or Chancer?', a: 'Chancer has the lowest wagering at 30x, making it one of the best in our entire comparison. Billionaire Spin is 35x which is still fair and offset by the cashback inclusion.' },
  { q: 'Are both casinos safe to play at?', a: 'Both hold Curaçao licenses and our team has made real deposits and withdrawals at both. Neither holds an MGA or UKGC license, but both are legitimate and pay out winnings reliably.' },
]

export default function BillionaireVsChancerPage() {
  const billionaire = casinos.find(c => c.slug === 'billionaire-spin')!
  const chancer = casinos.find(c => c.slug === 'chancer-casino')!

  const criteria = [
    { label: 'Welcome Bonus', b: billionaire.bonus, c: chancer.bonus, winner: 'b' },
    { label: 'Wagering', b: `${billionaire.wagering}x`, c: `${chancer.wagering}x`, winner: 'c' },
    { label: 'Cashback', b: '25% included ✓', c: 'None', winner: 'b' },
    { label: 'Min Deposit', b: `€${billionaire.minDeposit}`, c: `€${chancer.minDeposit}`, winner: 'tie' },
    { label: 'Withdrawal Time', b: billionaire.withdrawalTime, c: chancer.withdrawalTime, winner: 'tie' },
    { label: 'Our Rating', b: `${billionaire.rating}/5`, c: `${chancer.rating}/5`, winner: 'b' },
    { label: 'License', b: billionaire.licenses.join(', '), c: chancer.licenses.join(', '), winner: 'tie' },
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
          <span className="text-gray-300">Billionaire Spin vs Chancer</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Billionaire Spin vs Chancer Casino 2026</h1>
        <p className="text-gray-400 mb-8">Two casinos with the best wagering in our comparison. We tested both — here&apos;s how they stack up.</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {[billionaire, chancer].map(casino => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] rounded-xl p-5 text-center">
              <div className="text-4xl mb-2">{casino.logo}</div>
              <div className="font-black text-white mb-1">{casino.name}</div>
              <div className="flex justify-center gap-0.5 mb-2">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className={`text-sm ${s <= Math.round(casino.rating) ? 'text-[#F5A623]' : 'text-gray-700'}`}>★</span>
                ))}
              </div>
              <div className="text-[#F5A623] font-bold text-sm mb-1">{casino.bonus}</div>
              <div className="text-green-400 text-xs mb-3">{casino.wagering}x wagering</div>
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
            <div className="text-white text-sm font-black text-center">Billionaire Spin</div>
            <div className="text-white text-sm font-black text-center">Chancer</div>
          </div>
          {criteria.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-3 p-4 ${i % 2 === 0 ? 'bg-[#161820]' : 'bg-[#0D0F14]'}`}>
              <div className="text-gray-400 text-sm">{row.label}</div>
              <div className={`text-sm text-center font-bold ${row.winner === 'b' ? 'text-green-400' : row.winner === 'tie' ? 'text-white' : 'text-gray-400'}`}>
                {row.b} {row.winner === 'b' && '✓'}
              </div>
              <div className={`text-sm text-center font-bold ${row.winner === 'c' ? 'text-green-400' : row.winner === 'tie' ? 'text-white' : 'text-gray-400'}`}>
                {row.c} {row.winner === 'c' && '✓'}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-6 mb-8">
          <h2 className="font-black text-white text-xl mb-4">Our Verdict</h2>
          <div className="text-gray-400 text-sm leading-relaxed space-y-3">
            <p><span className="text-white font-bold">For lowest wagering:</span> Chancer wins with 30x — one of the lowest in our entire comparison. If minimising playthrough is your priority, Chancer is the better choice.</p>
            <p><span className="text-white font-bold">For overall value:</span> Billionaire Spin edges ahead. The 25% cashback inclusion alongside the welcome bonus is unique — most casinos make you choose one or the other. At 35x wagering, it&apos;s fair and the cashback adds genuine insurance against losses during the bonus period.</p>
            <p><span className="text-white font-bold">Overall:</span> Both are solid choices. Chancer for lowest wagering, Billionaire Spin for best all-round package.</p>
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
            <Link href="/reviews/billionaire-spin" className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 group transition-all">
              <div className="font-bold text-white group-hover:text-[#F5A623]">Billionaire Spin Full Review →</div>
              <div className="text-gray-500 text-sm mt-1">{billionaire.bonus}</div>
            </Link>
            <Link href="/reviews/chancer-casino" className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 group transition-all">
              <div className="font-bold text-white group-hover:text-[#F5A623]">Chancer Casino Full Review →</div>
              <div className="text-gray-500 text-sm mt-1">{chancer.bonus}</div>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
