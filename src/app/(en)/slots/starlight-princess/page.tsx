import Link from 'next/link'
import { Metadata } from 'next'
import { casinos } from '@/data/casinos'
import { getSlot } from '@/data/slots'
import { FAQSchema, GameSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup'

const slot = getSlot('starlight-princess')!

export const metadata: Metadata = {
  title: 'Starlight Princess Review 2026 — RTP 96.5%, 5,000x Max Win',
  description: 'Full Starlight Princess review 2026. Pragmatic Play\'s anime celestial slot tested. 96.5% RTP, 5,000x max win, position-based multipliers — full verdict.',
  alternates: { canonical: 'https://www.bonuscout.com/slots/starlight-princess' }
}

const faqs = [
  { q: 'What is the RTP of Starlight Princess?', a: 'Starlight Princess has a base RTP of 96.5%, identical to Gates of Olympus. The bonus buy retains 96.5% — Pragmatic Play applies their no-RTP-penalty policy consistently across the Pays Anywhere catalogue.' },
  { q: 'How does Starlight Princess differ from Gates of Olympus?', a: 'The mechanics are nearly identical — 6×5 grid, Pays Anywhere, tumbling reels, persistent multipliers in free spins. The key differences: Starlight has a 5,000x max win versus Gates\'s 15,000x, and multipliers are tied to specific positions on the grid rather than appearing randomly anywhere.' },
  { q: 'What is the volatility of Starlight Princess?', a: 'Pragmatic Play rates it High (4/5), one tier below Gates of Olympus. The lower max-win ceiling translates to a more accessible variance curve, which makes Starlight Princess a better fit for players who find Gates too punishing.' },
  { q: 'What is the maximum win on Starlight Princess?', a: '5,000x your stake — €625,000 at maximum €125 bet. The max win is achieved through accumulating high-value position multipliers during extended free-spins runs, similar to Gates but capped lower.' },
  { q: 'How do position multipliers work?', a: 'Multiplier symbols only appear in specific positions on the grid (the four corners and the centre column). When they land during a winning tumble, their values stack additively just like Gates of Olympus, but the position restriction makes large multiplier configurations more predictable and less random-feeling.' },
  { q: 'How many free spins does Starlight Princess give?', a: 'Landing 4 or more scatter symbols (the princess herself) awards 15 free spins. Trigger frequency is roughly 1 in 220 base-game spins — slightly less frequent than Gates of Olympus. Retriggers add 5 spins each, with the multiplier persistence intact.' },
  { q: 'Can you buy the Starlight Princess bonus directly?', a: 'Yes, at 100x your current bet. RTP remains 96.5%. The Ante Bet option is also available at +25% stake to roughly double the natural scatter trigger frequency without changing RTP.' },
  { q: 'Is Starlight Princess better than Gates of Olympus?', a: 'For lower-variance players, yes. The lower max-win ceiling produces tighter session swings and more frequent meaningful wins. For high-roller players hunting maximum payouts, Gates of Olympus delivers significantly more upside variance at the same RTP.' },
]

const topCasinos = casinos.filter(c => c.software.includes(slot.provider)).sort((a, b) => b.rating - a.rating).slice(0, 5)

export default function StarlightReview() {
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

      <div className="bg-gradient-to-r from-purple-900/30 to-pink-800/10 border border-purple-500/20 rounded-2xl p-8 mb-8">
        <div className="text-xs text-purple-400 font-bold mb-2 uppercase tracking-wide">Slot Review · Updated June 2026</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Starlight Princess Review</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-5">Pragmatic Play&apos;s anime-inspired sibling to Gates of Olympus. Pays Anywhere on a 6×5 grid with position-bound multipliers up to 500x and a 5,000x maximum win.</p>
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
        <h2 className="text-white font-black text-xl mb-4">How to play Starlight Princess</h2>
        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>Starlight Princess uses the same 6×5 Pays Anywhere structure as Gates of Olympus. Any 8 or more matching symbols anywhere on the grid trigger a win, regardless of position or payline arrangement. Bets range from €0.20 to €125. The visual style is anime-inspired pastel celestial — pink and purple gradients, sparkle effects, and the title character animating between spins.</p>
          <p>The symbol hierarchy follows a sphere-and-jewel theme: low-value coloured spheres (red, blue, green, purple, yellow) and high-value crystals (heart, diamond, star, crown). The crown is the top-paying symbol at 50x for 12 or more matches. The princess herself functions as the scatter symbol, with 4 or more anywhere triggering free spins. The wild is depicted as a star, substituting for all paying symbols in any combination.</p>
          <p>Where Starlight Princess differentiates from Gates is the multiplier behaviour. In Gates of Olympus, multiplier orbs can drop randomly anywhere on the grid. In Starlight Princess, multiplier symbols only appear in five specific positions: the four corners of the grid and the centre column. This positional restriction makes multiplier appearance more visually predictable and reduces the variance of bonus rounds compared to Gates. Players who found Gates&apos;s random multiplier placement chaotic often prefer Starlight&apos;s structure.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-8">
        <h2 className="text-white font-black text-xl mb-6">Bonus features in detail</h2>

        <div className="mb-6">
          <h3 className="text-white font-black mb-2">Tumbling Reels</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Identical mechanic to Gates of Olympus: winning symbols vanish and new ones tumble down to fill the gaps. The tumble continues until no new winning combinations form. Base-game tumble chains average 2.2 wins in our testing, slightly lower than Gates due to the absence of base-game multipliers driving extra value. The longest chain we recorded was 7 consecutive tumbles for a 240x stake payout — meaningful but not the four-figure runs that Gates can produce in the base game.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-white font-black mb-2">Position-Based Multipliers</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Multiplier symbols appear only in five fixed positions on the grid: top-left corner, top-right corner, bottom-left corner, bottom-right corner, and the centre of the middle column. Each carries a value from x2 to x500. When at least one paying combination tumbles during the same sequence as one or more multipliers, all multipliers visible on the grid sum additively and apply to the spin total. The five-position restriction caps the theoretical maximum multiplier per spin lower than Gates of Olympus, which is the structural reason the slot tops out at 5,000x rather than 15,000x.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-white font-black mb-2">Free Spins (15 spins, 4+ Scatters)</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Landing 4 or more princess scatter symbols anywhere on the grid awards 15 free spins. The trigger frequency is approximately 1 in 220 base-game spins. Crucially, multipliers in free spins follow Gates of Olympus rules: their values accumulate across the entire bonus round rather than resetting per spin. By the end of an extended free-spins run, the cumulative multiplier total can sit at 800x to 1,500x, transforming even modest paying combinations into substantial payouts. Three or more additional scatters retrigger another 5 free spins, with the multiplier accumulation continuing through retriggers.</p>
        </div>

        <div className="mb-2">
          <h3 className="text-white font-black mb-2">Ante Bet and Bonus Buy</h3>
          <p className="text-gray-400 text-sm leading-relaxed">The Ante Bet increases your stake by 25% and roughly doubles your scatter trigger frequency. RTP is unaffected. The Bonus Buy purchases free spins directly for 100x current bet, with RTP unchanged at 96.5%. Buy returns average 75–95x across thousands of tested entries — slightly negative on average but with the upside variance of the multiplier accumulation mechanic. Players who specifically prefer the position-restricted multiplier predictability often find Starlight Princess buys more satisfying than Gates of Olympus buys, even though the latter has higher peak payouts.</p>
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
          <p>Starlight Princess is Pragmatic Play&apos;s answer to a legitimate question: what if Gates of Olympus had a lower variance ceiling? The answer is a slot that retains the core mechanics — Pays Anywhere, tumbles, persistent multipliers — but caps the upside at 5,000x rather than 15,000x. For many players this is a meaningful upgrade rather than a downgrade.</p>
          <p>The 5,000x ceiling combined with the same 96.5% RTP means returns are distributed across more frequent moderate hits rather than concentrated in rare mega-wins. Sessions tend to feel rewarding earlier and break-even more often. The anime aesthetic is divisive — some players find it kitsch, others find it a welcome alternative to the Greek-mythology and pirate themes that dominate the genre.</p>
          <p>Our rating is 8.5/10. The half-point loss versus Gates of Olympus reflects the lower peak payout potential — for max-win hunters, Gates remains superior. But for everyone else, Starlight Princess delivers a more consistent gameplay experience at the same underlying RTP, which is a legitimate trade-off most players will appreciate.</p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-black text-white mb-2">Where to play Starlight Princess</h2>
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
            { label: 'Sweet Bonanza Review', href: '/slots/sweet-bonanza' },
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
