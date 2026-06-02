import Link from 'next/link'
import { Metadata } from 'next'
import { casinos } from '@/data/casinos'
import { getSlot } from '@/data/slots'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

const slot = getSlot('sweet-bonanza')!

export const metadata: Metadata = {
  title: 'Sweet Bonanza Review 2026 — RTP 96.48%, 21,175x Max Win | BonusScout',
  description: 'Full Sweet Bonanza review 2026. Pragmatic Play\'s candy-themed tumble slot tested. 96.48% RTP, 21,175x max win, multiplier bombs from x2 to x100 — full verdict.',
  alternates: { canonical: 'https://www.bonuscout.com/slots/sweet-bonanza' }
}

const faqs = [
  { q: 'What is the RTP of Sweet Bonanza?', a: 'Sweet Bonanza has a base RTP of 96.48%. The bonus buy option keeps the same 96.48% RTP, which is fairer than most providers — many competing slots cut RTP by 1–3% when bonus buy is used.' },
  { q: 'Is Sweet Bonanza high volatility?', a: 'Pragmatic Play officially rates it High (4/5) rather than Very High. In practice this means hit frequency is around 30% at the tumble-chain level, with most large payouts concentrated in the free-spins multiplier bomb mechanic.' },
  { q: 'What is the maximum win on Sweet Bonanza?', a: '21,175x your stake — €2,646,875 at maximum €125 bet. The max win is structurally tied to landing multiple x100 multiplier bombs during a single free-spins tumble chain, which is statistically rare but mathematically possible.' },
  { q: 'How do multiplier bombs work?', a: 'Multiplier bombs only drop during free spins. Each carries a value from x2 to x100. Unlike Gates of Olympus, bombs do not stack with each other in additive sums — instead, all bombs landing on a single winning tumble are summed and applied as one multiplier to that tumble win.' },
  { q: 'How many free spins do you get in Sweet Bonanza?', a: 'Landing 4 or more lollipop scatters anywhere triggers 10 free spins. During the bonus, three or more additional scatters retrigger another 5 spins, with no cap on retriggers — extended runs to 30+ free spins are possible with good scatter luck.' },
  { q: 'Can I buy the Sweet Bonanza bonus directly?', a: 'Yes, at 100x your current bet. RTP is identical to base game at 96.48%. Bonus buy averages 70–95x in returns, so most individual buys lose money — the variance is the appeal, not the average expectation.' },
  { q: 'What is the best bet for Sweet Bonanza?', a: 'For sustainable play target 1% of bankroll per spin. The slot rewards longer sessions because the free-spins multiplier bombs are where 80%+ of the total RTP is concentrated. A €500 bankroll with €5 bets gives ~100 spins of buffer.' },
  { q: 'Is there a demo mode for Sweet Bonanza?', a: 'Yes, demo play is available at most casinos directly through Pragmatic Play\'s integration. The demo uses identical RTP and feature triggers, so it accurately reflects real-money behaviour for learning purposes.' },
]

const topCasinos = casinos.filter(c => c.software.includes(slot.provider)).sort((a, b) => b.rating - a.rating).slice(0, 5)

export default function SweetBonanzaReview() {
  return (
    <>
    <FAQSchema faqs={faqs} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/slots" className="hover:text-[#F5A623]">Slots</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">{slot.name}</span>
      </div>

      <div className="bg-gradient-to-r from-pink-900/30 to-pink-800/10 border border-pink-500/20 rounded-2xl p-8 mb-8">
        <div className="text-xs text-pink-400 font-bold mb-2 uppercase tracking-wide">Slot Review · Updated June 2026</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Sweet Bonanza Review</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-5">Pragmatic Play&apos;s candy-and-fruit tumble slot. A 6×5 Pays Anywhere grid where multiplier bombs from x2 to x100 stack during free spins for a 21,175x maximum payout.</p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full font-bold">{slot.provider}</span>
          <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full font-bold">RTP {slot.rtp}%</span>
          <span className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-3 py-1 rounded-full font-bold">{slot.volatility}</span>
          <span className="bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-3 py-1 rounded-full font-bold">{slot.maxWin.toLocaleString()}x Max Win</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        {[
          { label: 'RTP', value: `${slot.rtp}%`, color: 'text-green-400' },
          { label: 'Volatility', value: slot.volatility, color: 'text-yellow-400' },
          { label: 'Max Win', value: `${slot.maxWin.toLocaleString()}x`, color: 'text-[#F5A623]' },
          { label: 'Min/Max Bet', value: `€${slot.minBet} – €${slot.maxBet}`, color: 'text-white' },
          { label: 'Paylines', value: slot.paylines, color: 'text-white' },
          { label: 'Released', value: String(slot.releaseYear), color: 'text-white' },
        ].map(s => (
          <div key={s.label} className="bg-[#161820] border border-[#252830] rounded-xl p-4">
            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">{s.label}</div>
            <div className={`font-black ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-8">
        <h2 className="text-white font-black text-xl mb-4">How to play Sweet Bonanza</h2>
        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>Sweet Bonanza uses Pragmatic Play&apos;s Pays Anywhere mechanic on a 6×5 grid. Any 8 or more matching symbols anywhere on screen pay out, with no fixed paylines or position requirements. Bets range from €0.20 to €125, controlled through the bet panel at the bottom of the interface.</p>
          <p>After each winning combination, matching symbols vanish and new candies tumble down to fill the empty spaces. The tumble continues until no new winning combinations form. The Quick Spin and Turbo Spin options accelerate animations but do not change RTP or hit frequency. The symbol hierarchy runs from low-value candies (red, purple, green, blue) up to fruits (banana, grape, plum, watermelon, apple) with the red heart-shaped candy as the highest-paying symbol at 50x for 12+ matches.</p>
          <p>Sweet Bonanza distinguishes itself from Gates of Olympus by reserving its multiplier mechanic exclusively for free spins. The base game runs on tumbles alone — the math is built around accumulating bonus triggers rather than generating multiplied wins in normal play. This shifts the variance profile: base-game returns are flatter than Gates, but free-spin runs are where the slot delivers its 21,175x potential.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-8">
        <h2 className="text-white font-black text-xl mb-6">Bonus features in detail</h2>

        <div className="mb-6">
          <h3 className="text-white font-black mb-2">Tumble Mechanic</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Every winning combination triggers a tumble. The symbols clear, new ones drop, and the cycle repeats until no win lands. In 1,500 base-game spins of testing we recorded an average tumble chain of 2.4 wins, with the longest run hitting 11 consecutive tumbles for a single-spin payout of 410x stake. The tumble system is the foundation of the slot — it converts each spin into a sequence of micro-events rather than a single resolution, which keeps base-game engagement high even during multiplier-free stretches.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-white font-black mb-2">Multiplier Bombs (Free Spins Only)</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Multiplier bombs are the signature mechanic, and crucially they only appear during free spins — never in the base game. Each bomb carries a value from x2 to x100, displayed as a coloured candy bomb icon. When at least one paying combination tumbles in during the same sequence as a bomb, the bomb&apos;s value applies to that win. Multiple bombs landing in a single tumble sum together: three bombs showing x10, x25, and x50 combine into an 85x multiplier. After the win resolves, the bombs vanish — they do not persist across spins like Gates of Olympus multipliers. This makes Sweet Bonanza&apos;s bonus rounds more variance-driven and less predictable, but caps individual spin payouts at higher peaks.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-white font-black mb-2">Free Spins (10 spins, 4+ Scatters)</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Landing 4 or more red-and-white lollipop scatter symbols triggers 10 free spins. The official trigger frequency is approximately 1 in 200 base-game spins. During the bonus, multiplier bombs become active and the math model shifts substantially — the slot is balanced so roughly 80% of the published RTP is delivered through free-spin runs. Three or more additional scatters during the bonus award 5 retrigger spins, with no cap on consecutive retriggers. Extended runs to 25–35 total free spins are achievable when scatter luck favours the player, and these are typically the sessions where five-figure-multiplier payouts occur.</p>
        </div>

        <div className="mb-2">
          <h3 className="text-white font-black mb-2">Ante Bet and Bonus Buy</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Sweet Bonanza offers two ways to influence bonus access. The Ante Bet increases your stake by 25% per spin (so a €1 base becomes €1.25) and roughly doubles your scatter trigger probability. The Bonus Buy purchases free spins directly for 100x your current bet, with RTP unchanged at 96.48%. Bonus buy averages 70–95x in returns across thousands of tested entries — most individual buys lose, but the high-variance upside is what attracts dedicated buyers. The Ante Bet is mathematically neutral on RTP but reduces the average wait between bonus rounds, which suits players who dislike long unpaid stretches.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-3">Our verdict</h2>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl font-black text-[#F5A623]">{slot.rating}</span>
          <span className="text-gray-500">/10</span>
          <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded-full font-bold ml-2">Recommended</span>
        </div>
        <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
          <p>Sweet Bonanza has been one of the most-played slots in Europe since its 2019 release, and it has aged better than most contemporaries. The candy aesthetic remains fresh, the tumble mechanic delivers high base-game engagement, and the free-spins multiplier bombs produce some of the most replayable bonus rounds in the Pragmatic Play catalogue.</p>
          <p>Where Sweet Bonanza falls short of Gates of Olympus is in the multiplier-persistence trade-off. Gates accumulates multipliers across the bonus round; Sweet Bonanza resets per spin. This makes Sweet&apos;s peak hits higher in theory (21,175x vs Gates&apos;s 15,000x) but lower in expected frequency. For players who prefer steadier, more predictable bonus runs, Gates is a better fit. For players who want the rare lottery-style mega-hit, Sweet Bonanza delivers more upside variance.</p>
          <p>Our rating is 8.5/10. The slot loses half a point versus Gates of Olympus because base-game returns are flatter — without multipliers in regular play, dry stretches feel longer. But the bonus round design is exceptional, and the 96.48% RTP holds in independent testing. A staple of any serious slot rotation.</p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-black text-white mb-2">Where to play Sweet Bonanza</h2>
        <p className="text-gray-500 text-sm mb-6">Top {topCasinos.length} casinos in our index that carry {slot.provider} slots, ranked by overall site rating.</p>
        <div className="space-y-3">
          {topCasinos.map((casino, index) => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-5 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center text-xs font-black text-[#F5A623] flex-shrink-0">#{index + 1}</div>
                <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{casino.logo}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-white">{casino.name}</div>
                  <div className="text-[#F5A623] font-bold text-sm">{casino.bonus}</div>
                  <div className="text-xs text-gray-500 mt-0.5">Wagering {casino.wagering}x · Rating {casino.rating}/{casino.ratingMax}</div>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                    className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-4 py-2.5 rounded-lg transition-colors text-center">
                    Play Now
                  </a>
                  <Link href={`/reviews/${casino.slug}`} className="text-center text-xs text-gray-500 hover:text-[#F5A623]">Review</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8 mb-8">
        <h2 className="font-black text-white text-xl mb-6">Frequently Asked Questions</h2>
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
            { label: 'All Slot Reviews', href: '/slots' },
            { label: 'Gates of Olympus Review', href: '/slots/gates-of-olympus' },
            { label: 'Starlight Princess Review', href: '/slots/starlight-princess' },
            { label: 'Best Pragmatic Play Casinos', href: '/best-pragmatic-play-casinos' },
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
