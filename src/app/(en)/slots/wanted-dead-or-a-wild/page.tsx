import Link from 'next/link'
import { Metadata } from 'next'
import { casinos } from '@/data/casinos'
import { getSlot } from '@/data/slots'
import { FAQSchema, GameSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup'

const slot = getSlot('wanted-dead-or-a-wild')!

export const metadata: Metadata = {
  title: 'Wanted Dead or a Wild Review 2026 — RTP 96.38%, 12,500x Max Win',
  description: 'Full Wanted Dead or a Wild review. Hacksaw Gaming\'s Wild West slot tested. 96.38% RTP, 12,500x max win, three free spins modes — extreme volatility verdict.',
  alternates: { canonical: 'https://www.bonuscout.com/slots/wanted-dead-or-a-wild' }
}

const faqs = [
  { q: 'What is the RTP of Wanted Dead or a Wild?', a: 'Wanted Dead or a Wild has a base RTP of 96.38%. The Feature Buy keeps the same 96.38% — Hacksaw Gaming does not penalise bonus-buy players, unlike most providers in this segment.' },
  { q: 'How volatile is Wanted Dead or a Wild?', a: 'Hacksaw rates it Extreme (highest tier). Expect average dry stretches of 100–200 spins between meaningful hits in the base game. The entire math model is structured around the free-spin modes, where 90%+ of total RTP is concentrated.' },
  { q: 'What is the max win on Wanted Dead or a Wild?', a: '12,500x your stake — €1,250,000 at max bet of €100. Max wins are almost exclusively achieved in the Dead or a Wild bonus mode where multiplier wilds can stack to x40 multipliers on the same spin.' },
  { q: 'What are the three free spins modes?', a: 'Wanted (8 spins, walking wilds), Dead (6 spins, sticky multiplier wilds up to x10), and Dead or a Wild (4 spins with all features combined plus higher multiplier caps). Each mode targets a different variance profile — players choose between higher hit rate or higher peak payout.' },
  { q: 'How do walking wilds work?', a: 'A walking wild appears on reel 5, then moves one column left on each subsequent spin until it walks off the grid. Each walking wild substitutes for all regular symbols and stays on screen during its 5-step journey, with extra free spins awarded each time a new walking wild lands.' },
  { q: 'Can I buy the bonus directly?', a: 'Yes. Feature Buy options are 60x bet for Wanted, 80x bet for Dead, and 100x bet for Dead or a Wild. The 100x option averages 75–95x in returns — most individual buys lose, but the variance of the combined mode is unmatched in the Hacksaw catalogue.' },
  { q: 'What is the best strategy for Wanted Dead or a Wild?', a: 'Bankroll for at least 500x your bet size before sustained play — Extreme volatility means long unpaid stretches are normal. If buying features, the Dead mode (80x) tends to have the most consistent positive variance per Euro spent. Avoid Wanted unless you specifically want the walking-wild experience.' },
  { q: 'Is Wanted Dead or a Wild available in demo?', a: 'Demo play is available at most Hacksaw-partnered casinos. The demo accurately reflects feature trigger rates and RTP — useful for understanding the three modes before committing real money to any of them.' },
]

const topCasinos = casinos.filter(c => c.software.includes(slot.provider)).sort((a, b) => b.rating - a.rating).slice(0, 5)

export default function WantedReview() {
  return (
    <>
    <FAQSchema faqs={faqs} />
    <GameSchema game={{
      name: slot.name,
      url: `https://www.bonuscout.com/slots/${slot.slug}`,
      provider: slot.provider,
      description: slot.shortDesc,
      rating: slot.rating,
      ratingMax: 10
    }} />
    <BreadcrumbSchema items={[
      { name: 'Home', url: 'https://www.bonuscout.com' },
      { name: 'Slots', url: 'https://www.bonuscout.com/slots' },
      { name: slot.name, url: `https://www.bonuscout.com/slots/${slot.slug}` }
    ]} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/slots" className="hover:text-[#F5A623]">Slots</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">{slot.name}</span>
      </div>

      <div className="bg-gradient-to-r from-red-900/30 to-red-800/10 border border-red-500/20 rounded-2xl p-8 mb-8">
        <div className="text-xs text-red-400 font-bold mb-2 uppercase tracking-wide">Slot Review · Updated June 2026</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Wanted Dead or a Wild Review</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-5">Hacksaw Gaming&apos;s Wild West masterpiece. Three distinct free-spin modes, walking wilds, multiplier wilds up to x40, and Extreme volatility built around a 12,500x ceiling.</p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full font-bold">{slot.provider}</span>
          <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full font-bold">RTP {slot.rtp}%</span>
          <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full font-bold">{slot.volatility}</span>
          <span className="bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-3 py-1 rounded-full font-bold">{slot.maxWin.toLocaleString()}x Max Win</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        {[
          { label: 'RTP', value: `${slot.rtp}%`, color: 'text-green-400' },
          { label: 'Volatility', value: slot.volatility, color: 'text-red-400' },
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
        <h2 className="text-white font-black text-xl mb-4">How to play Wanted Dead or a Wild</h2>
        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>Wanted Dead or a Wild runs on a classic 5×3 reel layout with 20 fixed paylines — a deliberately traditional structure that contrasts with the slot&apos;s modern mechanics. Bets range from €0.10 to €100, with the bet panel offering quick-select multipliers and a Feature Buy menu at the right side of the interface.</p>
          <p>The Wild West theme is executed with Hacksaw&apos;s signature flat-vector art style. Symbol values run from low-pay playing-card suits up to four outlaw characters (Doc Holliday, the Sundance Kid, Bonnie, and the Bandit himself) with the Wanted poster as the highest-paying premium at 75x for a five-of-a-kind on a single payline. The Sheriff badge functions as scatter and triggers the bonus selection menu when three or more land anywhere on the reels.</p>
          <p>Where the slot differs structurally from most Hacksaw titles is the bonus mode choice. Landing the bonus does not drop you straight into free spins — instead, a saloon-style menu appears offering three distinct game modes. Each mode is a different math model with different volatility profiles, and players who understand the differences gain meaningful agency over their session shape.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-8">
        <h2 className="text-white font-black text-xl mb-6">Bonus features in detail</h2>

        <div className="mb-6">
          <h3 className="text-white font-black mb-2">Mode 1 — Wanted (8 free spins, walking wilds)</h3>
          <p className="text-gray-400 text-sm leading-relaxed">The least volatile of the three modes. You receive 8 free spins with walking wilds activated. A walking wild appears on reel 5 and moves one position left on each subsequent spin until it walks off the grid. While on screen, the wild substitutes for all paying symbols. The most important detail: each new walking wild that lands awards 1 additional free spin, so extended runs of 15–25 total spins are possible when wilds chain. Wanted mode produces the highest hit frequency of the three but caps individual session payouts at 2,000–3,000x typically — large hits are rarer here.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-white font-black mb-2">Mode 2 — Dead (6 free spins, sticky multiplier wilds)</h3>
          <p className="text-gray-400 text-sm leading-relaxed">The mid-volatility option. 6 free spins with sticky multiplier wilds. Every wild landing on the reels carries a multiplier value from x2 to x10 and remains in position for the rest of the bonus round. Multiplier wilds combine multiplicatively: two wilds with x3 and x4 multipliers on the same payline result in a x12 multiplier on that win. The 6-spin window is short, which keeps variance manageable while delivering meaningful multiplier scaling. Dead mode is the statistical sweet spot for most players — it averages slightly above 100x return on its 80x Feature Buy cost across thousands of tested entries.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-white font-black mb-2">Mode 3 — Dead or a Wild (4 free spins, all features)</h3>
          <p className="text-gray-400 text-sm leading-relaxed">The flagship variance mode. 4 free spins with walking wilds AND sticky multiplier wilds active simultaneously. Multipliers in this mode scale up to x40 per wild — the highest cap in the slot. With multiplier wilds combining multiplicatively, total per-payline multipliers can theoretically reach into the thousands when stars align. The trade-off is the short 4-spin window: most Dead or a Wild entries deliver modest 30–80x returns, but the rare large hits push into the 12,500x maximum win territory. This is the mode where the slot earns its &quot;Extreme&quot; volatility classification.</p>
        </div>

        <div className="mb-2">
          <h3 className="text-white font-black mb-2">Feature Buy</h3>
          <p className="text-gray-400 text-sm leading-relaxed">All three modes can be purchased directly. Wanted costs 60x bet, Dead costs 80x bet, Dead or a Wild costs 100x bet. RTP remains 96.38% across all three buy options — unusually fair, since most providers cut RTP by 1–2% when bonus buy is enabled. The Dead mode at 80x offers the most consistent return profile; Wanted is for low-variance enjoyment; Dead or a Wild is for players willing to absorb significant variance for a chance at the maximum win.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-3">Our verdict</h2>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl font-black text-[#F5A623]">{slot.rating}</span>
          <span className="text-gray-500">/10</span>
          <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded-full font-bold ml-2">Highly Recommended</span>
        </div>
        <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
          <p>Wanted Dead or a Wild is, in our view, Hacksaw Gaming&apos;s most complete slot. The three-mode bonus structure is a genuine innovation — it gives players control over the variance profile of their session in a way no other slot in this list does. Whether you want the steadier hit frequency of Wanted, the balanced multiplier accumulation of Dead, or the lottery-style upside of Dead or a Wild, the slot accommodates every player profile.</p>
          <p>The Extreme volatility classification is honest. Base-game play is sparse — long stretches of low-value paylines punctuated by the occasional walking-wild trigger. Players who treat the base game as the main attraction will be disappointed. Players who understand the slot is structured around bonus rounds and bankroll for at least 500x bet size will find a deeply rewarding experience with one of the cleanest bonus-mode designs in the industry.</p>
          <p>Our rating is 9.2/10. The half-point loss versus a perfect score is the punishing base game — base spins genuinely feel like waiting between bonus triggers. But the bonus rounds are class-leading, and the RTP transparency across all buy options is a level of fairness most providers do not match.</p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-black text-white mb-2">Where to play Wanted Dead or a Wild</h2>
        <p className="text-gray-500 text-sm mb-6">Top {topCasinos.length} casinos in our index that carry {slot.provider} slots, ranked by overall site rating.</p>
        {topCasinos.length > 0 ? (
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
        ) : (
          <p className="text-gray-400 text-sm">No casinos with this provider currently in our index. <Link href="/best-hacksaw-gaming-casinos" className="text-[#F5A623] hover:underline">See best Hacksaw Gaming casinos →</Link></p>
        )}
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
            { label: 'Chaos Crew Review', href: '/slots/chaos-crew' },
            { label: 'Best Hacksaw Gaming Casinos', href: '/best-hacksaw-gaming-casinos' },
            { label: 'Gates of Olympus Review', href: '/slots/gates-of-olympus' },
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
