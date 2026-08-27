import CasinoCard from '@/components/casino/CasinoCard'
import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Best Casino Cashback Bonuses 2026 — Get Money Back on Losses',
  description: 'Find casinos offering 10-25% cashback on losses. Compare the best cashback casino bonuses with low wagering requirements. Updated weekly.',
}

const faqs = [
  { q: 'Is cashback calculated on gross or net losses?', a: 'Almost always on net losses — that is, deposits minus withdrawals over the period. Read the terms carefully; a small number of casinos calculate it differently.' },
  { q: 'How often is cashback paid out?', a: 'Most often weekly, sometimes monthly. Some casinos credit it automatically to your account; others require a manual request via the cashier.' },
  { q: 'Does cashback have wagering requirements?', a: 'Often just 1x — and sometimes none at all. This is why cashback is the fairest bonus type, since winnings are nearly always immediately withdrawable.' },
  { q: 'Can I combine cashback with other bonuses?', a: 'Usually not — cashback typically only applies to real-money losses, not bonus credit. Always check the terms before stacking.' },
]

export default function CashbackPage() {
  const cashback = casinos.filter(c => c.bonusType === 'cashback')
  const others = casinos.filter(c => c.bonusType !== 'cashback').slice(0, 3)

  return (
    <>
    <FAQSchema faqs={faqs} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="mb-10">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Cashback
        </div>
        <h1 className="text-4xl font-black text-white mb-3">Casino Cashback Bonuses 2026</h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-6">
          Cashback returns a percentage of your losses. Unlike welcome bonuses, cashback has minimal wagering — often just 1x. It&apos;s the fairest bonus type in online gambling.
        </p>

        <div className="flex flex-wrap gap-4">
          {[
            { icon: 'â', text: 'Usually 1x wagering or less' },
            { icon: 'â', text: 'Based on your actual losses' },
            { icon: 'â', text: 'No max bet restrictions' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-green-400 font-bold">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
        <h2 className="font-black text-white mb-3">What is a cashback bonus?</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">A cashback bonus refunds a percentage of your losses over a defined period — usually weekly or monthly. Lose â¬400 in a week at 25% cashback and you get â¬100 back.</p>
        <div className="bg-[#0D0F14] rounded-xl p-4 font-mono text-sm">
          <div className="text-green-400 mb-1">Example — Net loss: â¬400 Â· Cashback: 25%</div>
          <div className="text-gray-300">You receive: â¬400 Ã 25% = <span className="text-[#F5A623] font-black">â¬100</span></div>
        </div>
      </div>

      {cashback.length > 0 ? (
        <>
          <h2 className="text-xl font-black text-white mb-5">
            Casinos With Cashback Bonuses ({cashback.length})
          </h2>
          <div className="space-y-4 mb-10">
            {cashback.map((casino, index) => (
              <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
            ))}
          </div>
        </>
      ) : null}

      <h2 className="text-xl font-black text-white mb-3">
        Other Top Bonuses Worth Considering
      </h2>
      <p className="text-sm text-gray-500 mb-5">
        If cashback isn&apos;t available in your region, these alternatives have the fairest wagering terms in our comparison per each operator&apos;s published bonus T&amp;Cs.
      </p>
      <div className="space-y-4 mb-14">
        {others.map((casino, index) => (
          <CasinoCard key={casino.id} casino={casino} rank={(cashback.length) + index + 1} />
        ))}
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-8">
        <h2 className="text-white font-black text-xl mb-4">Cashback vs. welcome bonus: which is better?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
            <div className="text-green-400 font-bold mb-3">Cashback advantages</div>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2"><span className="text-green-400">+</span> 1x wagering (or none at all)</li>
              <li className="flex items-start gap-2"><span className="text-green-400">+</span> No max bet restrictions</li>
              <li className="flex items-start gap-2"><span className="text-green-400">+</span> Applies to all games equally</li>
              <li className="flex items-start gap-2"><span className="text-green-400">+</span> No time pressure to wager</li>
            </ul>
          </div>
          <div>
            <div className="text-red-400 font-bold mb-3">Cashback disadvantages</div>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2"><span className="text-red-400">â</span> Only applies if you lose</li>
              <li className="flex items-start gap-2"><span className="text-red-400">â</span> Usually capped at a lower amount</li>
              <li className="flex items-start gap-2"><span className="text-red-400">â</span> Less headline value than match bonuses</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mt-10 mb-10">
        <h2 className="text-white font-black text-xl mb-4">Why cashback is the most honest bonus</h2>
        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>Cashback bonuses differ fundamentally from every other bonus type in online casinos — and for one simple reason: they are paid after the fact. Where a classic welcome bonus gives you money up front and then forces you to clear high wagering requirements, cashback works the other way around. You play with your own balance, and if you lose, you get a percentage back. This inversion of the logic makes cashback the statistically most honest bonus in the market.</p>

          <p>The math is what matters. Suppose you deposit â¬500 and play slots with a 96% RTP. Statistically, over the long run you will lose about 4% of total turnover — not of your deposit, but of your full play volume. At 25% cashback on net losses, you get a quarter of that loss back, which cuts your effective house edge to roughly 3%. On a 100% match bonus with 40x wagering you would have to turn over twice as much — you play more, you statistically lose more, and the math tips against the player.</p>

          <p>A concrete real-world example: you deposit â¬200. Over a week you turn that â¬200 over several times and end Sunday at a net loss of â¬120. At 20% weekly cashback you get â¬24 back — with no wagering or just 1x. The money is immediately withdrawable. Compare that with a 100% bonus, where for â¬200 of bonus credit you would first have to turn over â¬8,000 before anything is withdrawable. By then you have statistically lost more than the bonus was ever worth.</p>

          <p>The biggest cashback advantages at a glance: no max-bet restriction while playing (welcome bonuses are often capped at â¬5 per spin), no game exclusions (live casino and table games usually count in full), and full bankroll control. You can stop at any time without forfeiting an unwagered bonus. Bonus-hunting strategies do not work with cashback either — but that is precisely the point: it is not a hook, it is a real loyalty mechanism.</p>

          <p>Tips for maximizing cashback value: First, pick casinos with weekly rather than monthly payouts — the shorter period reduces variance and produces more consistent returns. Second, check whether cashback applies to all games or only slots. Third, watch the minimum-loss threshold: some casinos only pay out at â¬50+ net loss. Fourth, combine cashback with high-RTP games — 96â97% slots are mathematically better than 92% titles. Fifth, always read the &quot;negative-balance clause&quot; in the terms: if you were up the previous week, that is often offset against losses the following week, which reduces the effective cashback value.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-5">Frequently asked questions</h2>
        <div className="space-y-5 text-sm">
          {faqs.map(f => (
            <div key={f.q}>
              <div className="text-white font-bold mb-1">{f.q}</div>
              <p className="text-gray-400 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
        <h2 className="font-black text-white mb-4">Related pages</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Lowest Wagering Casinos', href: '/lowest-wagering-casinos' },
            { label: 'No Wagering Casinos', href: '/no-wagering-casinos' },
            { label: 'All Bonuses', href: '/bonuses' },
            { label: 'All Reviews', href: '/reviews' },
            { label: 'Casino News & Bonus Updates', href: '/news' },
            { label: 'May 2026 No Deposit Audit', href: '/news/best-no-deposit-bonuses-may-2026' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 text-sm font-bold text-white hover:text-[#F5A623] transition-all">
              {item.label} →
            </Link>
          ))}
        </div>
      </div>

        {/* Related categories & trust */}
        <div className="bg-[#0D0F14] border border-[#252830] rounded-xl p-6 mt-12">
          <h2 className="font-black text-white text-sm mb-3 uppercase tracking-wide">Related categories &amp; resources</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <Link href="/best-casino-bonus" className="text-[#F5A623] hover:underline">Best Casino Bonus Ã¢â â</Link>
            <Link href="/no-deposit-bonus" className="text-[#F5A623] hover:underline">No Deposit Bonuses Ã¢â â</Link>
            <Link href="/crypto-casino-bonus" className="text-[#F5A623] hover:underline">Crypto Casinos Ã¢â â</Link>
            <Link href="/bonuses/cashback" className="text-[#F5A623] hover:underline">Cashback Casinos Ã¢â â</Link>
            <Link href="/lowest-wagering-casinos" className="text-[#F5A623] hover:underline">Low Wagering Ã¢â â</Link>
            <Link href="/fast-withdrawal-casinos" className="text-[#F5A623] hover:underline">Fast Withdrawals Ã¢â â</Link>
            <Link href="/guides/wagering-requirements-explained" className="text-[#F5A623] hover:underline">Wagering Explained Ã¢â â</Link>
            <Link href="/how-we-rate" className="text-[#F5A623] hover:underline">How We Rate Ã¢â â</Link>
            <Link href="/responsible-gambling" className="text-red-400 hover:underline">Responsible Gambling Ã¢â â</Link>
          </div>
        </div>
    </div>
    </>
  )
}
