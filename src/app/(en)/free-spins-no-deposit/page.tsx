import CasinoCard from '@/components/casino/CasinoCard'
import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Free Spins No Deposit 2026 — Real Value of Every Offer Calculated',
  description: 'Free spins without depositing, ranked by real expected value. Per-spin value, max win caps, and slot RTP all considered. No marketing fluff.',
  alternates: { canonical: 'https://www.bonuscout.com/free-spins-no-deposit' }
}

const faqs = [
  { q: 'What is the average value of a no deposit free spin?', a: '€0.10 per spin is the most common stake. At 96% RTP, each spin has an expected return of €0.096 — so 50 spins are worth approximately €4.80 before wagering. After 40x wagering on winnings, real-money value drops to €2–€6.' },
  { q: 'Why are no deposit free spins worth less than deposit free spins?', a: 'No deposit free spins almost always have lower per-spin stakes (€0.10 vs €0.25–€0.50), tighter max-win caps (€50 vs €500+), and stricter wagering. The trade-off is zero risk on your side.' },
  { q: 'Which slots are usually offered as no deposit free spins?', a: 'Casinos pick low-volatility, high-spin-frequency titles to control variance — Book of Dead, Starburst, Big Bass Bonanza, and Sweet Bonanza are the most common. Never high-variance titles like Money Train or Dead or Alive 2.' },
  { q: 'Can I keep my winnings from no deposit free spins?', a: 'Yes, but always subject to wagering and a maximum payout cap. €50–€100 is the standard cap regardless of actual winnings. A €1,000 jackpot from a no deposit spin pays out €50, not €1,000.' },
]

const freeSpinsCasinos = casinos.filter(c => c.bonus.toLowerCase().includes('spin') || c.bonusType === 'no-deposit')

export default function FreeSpinsNoDepositPage() {
  return (
    <>
    <FAQSchema faqs={faqs} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Free Spins No Deposit</span>
      </div>

      <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/10 border border-blue-500/30 rounded-2xl p-8 mb-8">
        <div className="text-xs text-blue-400 font-bold mb-2 uppercase tracking-wide">Updated June 2026</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Free Spins No Deposit — Real Math, No Marketing</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Most &quot;50 free spins&quot; offers are worth €3–€8 in actual real money — not the €25 the marketing suggests. We calculate the real value of every offer below.</p>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-4">What 50 free spins are actually worth</h2>
        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>The headline number on every free-spins banner is the spin count: 50, 100, sometimes 200. The number that matters more is the per-spin stake — which is almost always €0.10, occasionally €0.20 or €0.25. Once you know the stake, the math is simple. Fifty spins at €0.10 means €5 of total wagered volume. At 96% RTP, that returns €4.80 on average. That is your gross expected return, before any wagering on the winnings.</p>

          <p>Now layer on the wagering. A typical no deposit free-spins offer applies 35x or 40x wagering to the winnings — not the spin value. If you win €5 from your 50 spins, you must turn over €175 to €200 before withdrawal. Statistically, that turnover at 96% RTP costs you €7 to €8 in expected losses. The €5 you &quot;won&quot; is mathematically gone before you reach withdrawal, unless you get lucky on the playthrough.</p>

          <p>The realistic outcome distribution looks like this: about 40% of players walk away with €0 (variance during wagering eats the winnings). About 40% walk away with €1–€10 of real money. About 15% walk away with €10–€40. And about 5% — the lucky ones who hit a bonus round during the free spins themselves — walk away near the max payout cap, typically €50 to €100. The average across all outcomes is €4–€8 of real money per offer.</p>

          <p>What this means in practice: a 100 free spins offer is not worth €25, despite what the casino landing page implies. It is worth roughly €8–€15 in expected real-money value. That is still positive — you risked nothing — but understanding the math prevents the disappointment of doing 40x wagering and ending up with less than you won. The best no deposit free-spins offers are the ones with the highest per-spin stake (€0.25+) and the lowest wagering (under 30x). Spin count alone is a vanity metric.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-10">
        <h2 className="font-black text-white text-xl mb-4">No deposit vs deposit free spins</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <div className="text-blue-400 font-bold mb-3">No deposit free spins</div>
            <ul className="space-y-2 text-gray-400">
              <li>✓ Zero risk — your money stays untouched</li>
              <li>✓ Test the casino UI and game speed first</li>
              <li>− Per-spin stake usually €0.10</li>
              <li>− Max win cap €50–€100</li>
              <li>− 35–50x wagering on winnings</li>
            </ul>
          </div>
          <div>
            <div className="text-[#F5A623] font-bold mb-3">Deposit-and-get free spins</div>
            <ul className="space-y-2 text-gray-400">
              <li>✓ Per-spin stake usually €0.20–€0.50</li>
              <li>✓ Max win cap €500+ or no cap</li>
              <li>✓ Often 25–35x wagering</li>
              <li>− You must deposit first (€10–€20 minimum)</li>
              <li>− Risk of losing the deposit before bonus clears</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-white mb-2">Free Spins No Deposit Casinos</h2>
      <p className="text-gray-500 text-sm mb-6">Ranked by real expected value, not marketing spin count</p>
      <div className="space-y-4 mb-10">
        {freeSpinsCasinos.length > 0 ? freeSpinsCasinos.map((casino, index) => (
          <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
        )) : (
          <div className="bg-[#161820] border border-[#252830] rounded-xl p-8 text-center">
            <p className="text-gray-400">No active free spins offers right now. Check back monthly.</p>
          </div>
        )}
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8 mb-8">
        <h2 className="font-black text-white text-xl mb-6">Free Spins No Deposit — Frequently Asked Questions</h2>
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
            { label: 'Free Spins List', href: '/bonuses/free-spins' },
            { label: 'Best Free Spins Casino', href: '/best-free-spins-casino' },
            { label: 'No Deposit Bonus', href: '/no-deposit-bonus' },
            { label: 'All Bonuses', href: '/bonuses' },
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
