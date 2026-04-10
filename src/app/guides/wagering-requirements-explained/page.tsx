import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Wagering Requirements Explained — Complete Guide 2026 | BonusScout',
  description: 'Everything you need to know about casino wagering requirements. How they work, how to calculate them, which games count, and how to find the lowest wagering casinos.',
  alternates: { canonical: 'https://www.bonuscout.com/guides/wagering-requirements-explained' }
}

const lowestWagering = [...casinos].sort((a, b) => a.wagering - b.wagering).slice(0, 5)

const faqs = [
  { q: 'What does 35x wagering mean?', a: 'It means you must bet your bonus amount 35 times before you can withdraw any winnings from it. Example: €100 bonus × 35 = €3,500 in total wagers required.' },
  { q: 'Does wagering apply to my deposit too?', a: 'It depends on the casino. Some apply wagering to the bonus only (better for you), others to bonus + deposit combined (worse). Always check the exact wording in the terms.' },
  { q: 'What is a reasonable wagering requirement?', a: '30x or under is considered good. 35x is the industry standard and fair. 40x is high. 50x+ is very high and we generally advise against claiming bonuses with this level of wagering.' },
  { q: 'Do all games count equally toward wagering?', a: 'No. Slots typically contribute 100%. Table games like blackjack and roulette often contribute 10-20% or may be excluded entirely. Live casino games vary. Always check the game contribution table in the terms.' },
  { q: 'Can I forfeit a bonus to avoid wagering?', a: 'Yes, most casinos allow you to forfeit an active bonus in your account settings. This removes the wagering requirement but also removes any bonus funds and associated winnings.' },
]

export default function WageringGuide() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/guides" className="hover:text-[#F5A623]">Guides</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Wagering Requirements Explained</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Wagering Requirements Explained</h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          The wagering requirement is the single most important number in any casino bonus. This guide explains exactly what it means, how to calculate it, and how to find offers where the maths actually works in your favour.
        </p>

        <div className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-5 mb-10">
          <p className="text-sm text-gray-400">
            <span className="text-white font-bold">Quick answer:</span> A wagering requirement (also called playthrough) is the number of times you must bet your bonus before withdrawing winnings. 30x = good. 35x = fair. 40x+ = high. 0x = exceptional.
          </p>
        </div>

        <div className="space-y-10">

          <section>
            <h2 className="text-2xl font-black text-white mb-4">What is a wagering requirement?</h2>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-4">
              <p>When a casino gives you a bonus, they attach a wagering requirement — a multiplier that determines how many times you must bet your bonus funds before any resulting winnings can be withdrawn.</p>
              <p>This exists because without it, players could simply deposit, claim a 100% match bonus, and immediately withdraw twice their deposit. Wagering requirements prevent this while still allowing casinos to offer genuine promotional value.</p>
              <p>The challenge for players is that wagering requirements vary enormously — from 0x (no requirement at all) to 70x or higher at some casinos. The difference in real value between a 30x and 40x offer on the same bonus size is significant.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4">How to calculate wagering requirements</h2>
            <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-4">
              <div className="font-black text-white mb-3">The formula</div>
              <div className="bg-[#0D0F14] rounded-lg p-4 font-mono text-[#F5A623] text-sm mb-3">
                Total wagering = Bonus amount × Wagering multiplier
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between border-b border-[#252830] pb-2">
                  <span>€100 bonus × 30x</span>
                  <span className="text-green-400 font-bold">€3,000 required</span>
                </div>
                <div className="flex justify-between border-b border-[#252830] pb-2">
                  <span>€100 bonus × 35x</span>
                  <span className="text-yellow-400 font-bold">€3,500 required</span>
                </div>
                <div className="flex justify-between border-b border-[#252830] pb-2">
                  <span>€100 bonus × 40x</span>
                  <span className="text-red-400 font-bold">€4,000 required</span>
                </div>
                <div className="flex justify-between">
                  <span>€100 bonus × 0x</span>
                  <span className="text-green-400 font-bold">€0 required — withdraw immediately</span>
                </div>
              </div>
            </div>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>Some casinos apply wagering to both the deposit and bonus combined. In that case, a €100 deposit + €100 bonus at 35x = €7,000 in required wagers — double what a bonus-only wagering structure would require. Always check which applies.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4">Which games count toward wagering?</h2>
            <div className="bg-[#161820] border border-[#252830] rounded-xl overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#252830]">
                    <th className="text-left p-3 text-gray-400 font-bold">Game type</th>
                    <th className="text-right p-3 text-gray-400 font-bold">Typical contribution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#252830]">
                  {[
                    { game: 'Slots', pct: '100%', color: 'text-green-400' },
                    { game: 'Live casino slots', pct: '100%', color: 'text-green-400' },
                    { game: 'Blackjack', pct: '10–20%', color: 'text-yellow-400' },
                    { game: 'Roulette', pct: '10–20%', color: 'text-yellow-400' },
                    { game: 'Baccarat', pct: '10%', color: 'text-orange-400' },
                    { game: 'Video poker', pct: '10–50%', color: 'text-yellow-400' },
                    { game: 'Live dealer tables', pct: '0–20%', color: 'text-red-400' },
                  ].map(r => (
                    <tr key={r.game} className="hover:bg-[#1a1d28]">
                      <td className="p-3 text-gray-300">{r.game}</td>
                      <td className={`p-3 text-right font-bold ${r.color}`}>{r.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">These are typical values — the actual contribution rate varies by casino and is specified in the bonus terms. Always check before playing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4">Other terms to check alongside wagering</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Maximum bet limit', desc: 'Most casinos cap your bet size while a bonus is active — typically €5 per spin. Exceeding this can void your bonus and winnings.' },
                { title: 'Withdrawal cap', desc: 'Some casinos limit how much you can withdraw from bonus winnings — e.g. max €100 regardless of how much you win. Check this before claiming large free spin offers.' },
                { title: 'Bonus expiry', desc: 'Bonuses typically expire within 7-30 days. Unused free spins usually expire within 24-72 hours of being credited.' },
                { title: 'Eligible games', desc: 'Even at 100% contribution, some games may be excluded from bonus play entirely. Jackpot slots are commonly restricted.' },
              ].map(item => (
                <div key={item.title} className="bg-[#161820] border border-[#252830] rounded-xl p-5">
                  <div className="font-black text-white mb-2">{item.title}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4">Lowest wagering casinos right now</h2>
            <div className="space-y-3 mb-4">
              {lowestWagering.map((casino, index) => (
                <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 transition-all flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#252830] rounded-xl flex items-center justify-center text-xl flex-shrink-0">{casino.logo}</div>
                  <div className="flex-1">
                    <div className="font-bold text-white text-sm">{casino.name}</div>
                    <div className="text-[#F5A623] text-xs">{casino.bonus}</div>
                  </div>
                  <div className={`text-xl font-black flex-shrink-0 ${casino.wagering === 0 ? 'text-green-400' : casino.wagering <= 30 ? 'text-green-400' : 'text-yellow-400'}`}>
                    {casino.wagering}x
                  </div>
                  <Link href={`/reviews/${casino.slug}`} className="text-xs text-[#F5A623] hover:underline flex-shrink-0">Review →</Link>
                </div>
              ))}
            </div>
            <Link href="/lowest-wagering-casinos" className="inline-block text-sm text-[#F5A623] font-bold hover:underline">
              See all casinos ranked by wagering →
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className={i > 0 ? 'border-t border-[#252830] pt-6' : ''}>
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        <div className="mt-10 bg-[#161820] border border-[#252830] rounded-xl p-6">
          <h2 className="font-black text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'How to Claim a No Deposit Bonus', href: '/guides/how-to-claim-no-deposit-bonus' },
              { label: 'Free Spins Guide', href: '/guides/free-spins-guide' },
              { label: 'Casino Bonus Terms Glossary', href: '/guides/casino-bonus-terms' },
              { label: 'Lowest Wagering Casinos', href: '/lowest-wagering-casinos' },
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
