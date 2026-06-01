import CasinoCard from '@/components/casino/CasinoCard'
import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Casino Cashback Bonus 2026 — Calculate Your Real Value | BonusScout',
  description: 'Compare casino cashback bonuses by percentage tier (5%–25%), payout frequency, and hidden terms. Real expected-value math for every offer.',
  alternates: { canonical: 'https://www.bonuscout.com/casino-cashback-bonus' }
}

const faqs = [
  { q: 'What is a fair cashback percentage?', a: 'Anywhere from 10% to 25% is competitive. Under 10% rarely justifies the time spent tracking; above 25% is usually a one-time promotional offer rather than a permanent rebate.' },
  { q: 'Why do most casinos cap cashback at €1,000 or less?', a: 'Cashback is funded from house edge profits, which average 2–4% of total wagered volume. Caps prevent high-rollers from extracting more than the casino structurally earns from them.' },
  { q: 'Does cashback count against my VIP tier progression?', a: 'It varies. Some casinos award VIP points on net losses (after cashback), others on gross wagered volume. Always check the loyalty terms — the difference matters more than the cashback itself for active players.' },
  { q: 'Can I withdraw cashback immediately?', a: 'With 1x wagering, almost — you re-bet the cashback amount once and it converts to real cash. True 0x cashback (rare) is immediately withdrawable. Anything above 3x stops being meaningful cashback in the practical sense.' },
]

const cashbackCasinos = casinos.filter(c => c.bonusType === 'cashback')

export default function CashbackBonusPage() {
  return (
    <>
    <FAQSchema faqs={faqs} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Casino Cashback Bonus</span>
      </div>

      <div className="bg-gradient-to-r from-green-900/40 to-green-800/10 border border-green-500/30 rounded-2xl p-8 mb-8">
        <div className="text-xs text-green-400 font-bold mb-2 uppercase tracking-wide">Updated June 2026</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Casino Cashback Bonus — Calculate Your Real Value</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Cashback rates from 5% to 25%, weekly vs monthly payouts, and the hidden terms that cap your real return. Math, not marketing.</p>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
        <h2 className="font-black text-white text-xl mb-4">Cashback Percentage Tiers — Real Returns</h2>
        <p className="text-gray-500 text-sm mb-4">Net loss of €400 in one week. How much you get back at each tier:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#252830] text-gray-400">
                <th className="text-left py-3 font-bold">Cashback %</th>
                <th className="text-right py-3 font-bold">Refund</th>
                <th className="text-right py-3 font-bold">Effective house edge*</th>
                <th className="text-right py-3 font-bold">Tier rating</th>
              </tr>
            </thead>
            <tbody>
              {[
                { pct: '5%', refund: '€20', edge: '3.8%', rating: 'Poor', color: 'text-red-400' },
                { pct: '10%', refund: '€40', edge: '3.6%', rating: 'OK', color: 'text-yellow-400' },
                { pct: '15%', refund: '€60', edge: '3.4%', rating: 'Good', color: 'text-green-400' },
                { pct: '20%', refund: '€80', edge: '3.2%', rating: 'Great', color: 'text-green-400' },
                { pct: '25%', refund: '€100', edge: '3.0%', rating: 'Excellent', color: 'text-[#F5A623]' },
              ].map(row => (
                <tr key={row.pct} className="border-b border-[#252830]/40">
                  <td className="py-3 font-bold text-white">{row.pct}</td>
                  <td className="py-3 text-right font-mono text-green-400">{row.refund}</td>
                  <td className="py-3 text-right text-gray-400">{row.edge}</td>
                  <td className={`py-3 text-right font-bold ${row.color}`}>{row.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-3">*Assumes 96% base RTP, full bonus wagered before payout calculation.</p>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-4">Weekly vs Monthly Cashback — Which Wins?</h2>
        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>The frequency of cashback matters more than most players realize. A 20% monthly cashback and a 15% weekly cashback look comparable on paper, but the weekly version usually delivers higher real value. The reason is variance: a single bad week within a winning month can wipe out your monthly cashback eligibility entirely if the month nets positive.</p>

          <p>Concrete example. Suppose you play €100 per week and lose €30 in three of four weeks but win €60 in the fourth. Monthly net: −€30. With 20% monthly cashback you get €6. With 15% weekly cashback you get €4.50 in each of the three losing weeks (€13.50 total), plus zero for the winning week — €13.50 versus €6. Weekly more than doubles your real refund because winning weeks do not cancel out losing weeks.</p>

          <p>The exception: high-roller players with monthly volume above €10,000 sometimes negotiate monthly cashback at 25%+ which mathematically beats weekly 15%. But this is rare and only happens through VIP managers, not advertised programs.</p>

          <p>There is one more layer most reviews miss: cashback freshness. Weekly cashback compounds — you can reinvest week 1&apos;s refund into week 2&apos;s play, building a small staking buffer. Monthly cashback arrives once, by which point your losing streak may have already pushed you off the platform. For player retention this is exactly why casinos prefer monthly: it makes losing players churn before they collect.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-red-500/20 rounded-xl p-6 md:p-8 mb-10">
        <h2 className="font-black text-white text-xl mb-4">Hidden Cashback Rules That Cap Your Return</h2>
        <ul className="space-y-3 text-sm text-gray-400">
          <li className="flex gap-3"><span className="text-red-400 flex-shrink-0 mt-0.5">⚠️</span><div><span className="text-white font-bold">Maximum payout cap.</span> Most cashback offers cap at €100–€500 per period, regardless of actual loss. Above-cap losses earn nothing back.</div></li>
          <li className="flex gap-3"><span className="text-red-400 flex-shrink-0 mt-0.5">⚠️</span><div><span className="text-white font-bold">Negative-balance carry.</span> If you were up in the previous period, that profit offsets losses in the next, reducing effective cashback.</div></li>
          <li className="flex gap-3"><span className="text-red-400 flex-shrink-0 mt-0.5">⚠️</span><div><span className="text-white font-bold">Game restrictions.</span> Live casino and progressive jackpots often count partially or not at all toward cashback eligibility.</div></li>
          <li className="flex gap-3"><span className="text-red-400 flex-shrink-0 mt-0.5">⚠️</span><div><span className="text-white font-bold">VIP tier gating.</span> The advertised 25% may only apply at Diamond tier; entry tier might be 5–10%.</div></li>
          <li className="flex gap-3"><span className="text-red-400 flex-shrink-0 mt-0.5">⚠️</span><div><span className="text-white font-bold">Claim window.</span> You typically have 24–72 hours to claim before the cashback expires. Set a calendar reminder.</div></li>
        </ul>
      </div>

      <h2 className="text-2xl font-black text-white mb-2">Top Cashback Casinos — Ranked</h2>
      <p className="text-gray-500 text-sm mb-6">Ranked by cashback percentage, payout frequency, and cap</p>
      <div className="space-y-4 mb-10">
        {cashbackCasinos.map((casino, index) => (
          <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
        ))}
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8 mb-8">
        <h2 className="font-black text-white text-xl mb-6">Casino Cashback — Frequently Asked Questions</h2>
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
        <h2 className="font-black text-white mb-4">Related pages</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Cashback Bonus List', href: '/bonuses/cashback' },
            { label: 'No Wagering Casinos', href: '/no-wagering-casinos' },
            { label: 'Best Cashback Casino', href: '/best-cashback-casino' },
            { label: 'No Deposit Bonus', href: '/no-deposit-bonus' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 text-sm font-bold text-white hover:text-[#F5A623] transition-all">
              {item.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
