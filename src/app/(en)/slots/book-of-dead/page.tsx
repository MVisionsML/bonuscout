import Link from 'next/link'
import { Metadata } from 'next'
import { casinos } from '@/data/casinos'
import { getSlot } from '@/data/slots'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

const slot = getSlot('book-of-dead')!

export const metadata: Metadata = {
  title: 'Book of Dead Review 2026 — RTP 96.21%, 5,000x Max Win | BonusScout',
  description: 'Full Book of Dead review 2026. Play\'n GO\'s Egyptian classic tested. 96.21% RTP, 5,000x max win, expanding symbols in free spins — definitive verdict.',
  alternates: { canonical: 'https://www.bonuscout.com/slots/book-of-dead' }
}

const faqs = [
  { q: 'What is the RTP of Book of Dead?', a: 'Book of Dead has a base RTP of 96.21%. Some casinos host lower-RTP versions (94% or 92%) under licensing arrangements — always check the in-game info panel to confirm you are playing the 96.21% configuration.' },
  { q: 'How volatile is Book of Dead?', a: 'Play\'n GO classifies it as High (4/5). Hit frequency in the base game is approximately 28% but with mostly small wins; the slot\'s entire payout structure leans on the free-spins expanding symbol mechanic for meaningful returns.' },
  { q: 'What is the max win on Book of Dead?', a: '5,000x your stake — €500,000 at the maximum €100 bet. Max wins are achieved when the expanding high-value symbol (the Explorer or one of the gods) is selected and fills three reels during free spins on a maximum-bet payline.' },
  { q: 'How does the expanding symbol mechanic work?', a: 'At the start of free spins, one symbol is randomly selected as the expanding symbol for the bonus round. Whenever this symbol appears anywhere on the reels during free spins, it expands to cover all three positions on its reel and pays on any payline it crosses — even on positions it would not normally count toward.' },
  { q: 'How do you trigger free spins on Book of Dead?', a: 'Three or more Book scatter symbols anywhere on the reels award 10 free spins. The Book also functions as the wild and substitutes for all other symbols. Two Books pay a small scatter prize without triggering the bonus.' },
  { q: 'What is the gamble feature in Book of Dead?', a: 'After any winning base-game spin, you can risk the win on a card-colour or card-suit gamble. Correctly guessing the colour doubles your win; correctly guessing the suit quadruples it. The gamble feature has zero house edge but is capped at a maximum gamble of €5,000.' },
  { q: 'Why is Book of Dead so popular?', a: 'Released in 2016, it was one of the first slots to combine simple Egyptian-tomb aesthetic with the highly engaging expanding-symbol mechanic. It also remains one of the most commonly offered slots in free-spins bonus packages — it is structurally easy for casinos to bundle into welcome offers.' },
  { q: 'Is Book of Dead worth playing in 2026?', a: 'Yes, but with context. The 5,000x ceiling and High volatility are conservative by modern standards, but the slot has held up because the mechanics are elegant and the bonus rounds remain exciting. It is a strong daily-driver but not the slot to chase maximum wins on.' },
]

const topCasinos = casinos.filter(c => c.software.includes(slot.provider)).sort((a, b) => b.rating - a.rating).slice(0, 5)

export default function BookOfDeadReview() {
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

      <div className="bg-gradient-to-r from-amber-900/30 to-amber-800/10 border border-amber-500/20 rounded-2xl p-8 mb-8">
        <div className="text-xs text-amber-400 font-bold mb-2 uppercase tracking-wide">Slot Review · Updated June 2026</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Book of Dead Review</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-5">Play&apos;n GO&apos;s 2016 Egyptian classic that defined the &quot;Book-of&quot; subgenre. Expanding symbols in free spins drive the 5,000x maximum payout, with one of the most replicated bonus mechanics in slot history.</p>
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
        <h2 className="text-white font-black text-xl mb-4">How to play Book of Dead</h2>
        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>Book of Dead uses the classic 5×3 reel layout with 10 fixed paylines — a deliberately conservative structure that has aged well in an industry moving toward grid-based and cluster-pay designs. Bets range from €0.10 to €100, with the bet selector offering quick increments through the bottom-bar controls. The interface is among the cleanest in the slot category: a single spin button, an autoplay menu, and the paylines clearly numbered along both sides of the grid.</p>
          <p>The Egyptian-tomb visual theme follows a familiar template — sandstone walls, hieroglyphic symbols, and the protagonist Rich Wilde as the highest-paying premium symbol. The symbol hierarchy runs from low-value playing-card ranks (10, J, Q, K, A) up to Egyptian iconography: Anubis statues, Horus eye, the Pharaoh mask, and Rich Wilde himself at 1,000x for five-of-a-kind on the maximum payline. The Book of the Dead artefact serves dual purposes as both wild and scatter, which is the structural foundation of the slot&apos;s bonus mechanic.</p>
          <p>Where Book of Dead earns its legacy is the expanding-symbol mechanic in free spins. This was not a Play&apos;n GO invention — it traces back to Novomatic&apos;s Book of Ra series from the early 2000s — but Play&apos;n GO refined the implementation, added the gamble feature with zero house edge, and packaged it into one of the cleanest bonus rounds in the industry. The subsequent &quot;Book-of&quot; genre that emerged across providers all reference this slot as their template.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-8">
        <h2 className="text-white font-black text-xl mb-6">Bonus features in detail</h2>

        <div className="mb-6">
          <h3 className="text-white font-black mb-2">Expanding Symbol (Free Spins)</h3>
          <p className="text-gray-400 text-sm leading-relaxed">At the start of the free-spins bonus, the slot randomly selects one symbol from the paytable as the expanding symbol for the duration of the round. The selection animation reveals the choice — players hope for one of the four premium symbols (Anubis, Horus, Pharaoh, or Rich Wilde) rather than a low-value playing-card rank. During free spins, whenever the selected expanding symbol appears anywhere on the reels, it expands to cover all three positions on that reel. The expanded symbols then pay on every payline that crosses any of the expanded positions, even ignoring the usual left-to-right adjacency rule. When the expanding symbol fills three reels on a maximum-payline configuration, the slot delivers its largest payouts.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-white font-black mb-2">Wild and Scatter (Book Symbol)</h3>
          <p className="text-gray-400 text-sm leading-relaxed">The Book of the Dead artefact symbol serves as both wild and scatter. As a wild, it substitutes for any other symbol on the reels to help form winning paylines. As a scatter, three or more Books anywhere on the reels trigger 10 free spins. This dual function is unusual — most slots separate the wild and scatter into distinct symbols to manage paytable balance. Play&apos;n GO&apos;s choice to combine them simplifies the gameplay loop and adds tension to every Book landing, since players cannot tell at first glance whether they have triggered a bonus or just received a wild substitution.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-white font-black mb-2">Free Spins (10 spins, 3+ Books)</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Three or more Books trigger 10 free spins. Trigger frequency is approximately 1 in 240 base-game spins. During the bonus, the expanding-symbol mechanic activates and remains in effect for all 10 spins. Three or more additional Books during the bonus retrigger another 10 free spins with the same expanding symbol — retriggers do not reroll the expanding symbol selection. The retrigger mechanic creates rare extended runs where the expanding symbol can produce sustained large hits, particularly when the original selection landed on a high-value symbol.</p>
        </div>

        <div className="mb-2">
          <h3 className="text-white font-black mb-2">Gamble Feature</h3>
          <p className="text-gray-400 text-sm leading-relaxed">After any winning base-game spin, you can gamble the win on a card colour or suit guess. Correct colour doubles the win; correct suit quadruples it. Wrong guess loses the entire win. The gamble feature has mathematically zero house edge — the casino takes no rake — which makes it unusually fair compared to similar mechanics in competitor slots. The catch is the €5,000 maximum gamble cap, which limits its utility for high-rollers. For modest stakes the gamble feature is statistically neutral entertainment, neither a smart play nor a costly one.</p>
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
          <p>Book of Dead is a benchmark slot. A decade after its 2016 release, it remains in active rotation at every major casino, continues to appear in welcome-bonus free-spins packages, and serves as the structural template for an entire subgenre. That kind of longevity is rare in an industry that releases hundreds of new slots per month.</p>
          <p>The reasons are mechanical. The expanding symbol mechanic creates moment-of-revelation excitement at the start of every bonus round — players genuinely hope for a high-value symbol selection in a way that few modern bonus designs replicate. The zero-house-edge gamble feature is a transparency choice that builds trust. The Book functioning as both wild and scatter creates a clean play loop. And the 96.21% RTP, while not class-leading by 2026 standards, was excellent for 2016 and remains competitive.</p>
          <p>Our rating is 8.7/10. The slot loses points for its dated visual presentation and the 5,000x ceiling that conservative-by-modern-standards classifies it as. Yet for players who want a clean, well-designed slot with a meaningful bonus round and minimal mechanical complexity, Book of Dead remains a top-tier choice and a key part of casino gambling history.</p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-black text-white mb-2">Where to play Book of Dead</h2>
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
          <p className="text-gray-400 text-sm">No casinos with Play&apos;n GO currently in our verified index. Most major casinos carry Book of Dead — check the game library at any casino in our <Link href="/casinos" className="text-[#F5A623] hover:underline">main casinos directory</Link>.</p>
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
            { label: 'Gates of Olympus Review', href: '/slots/gates-of-olympus' },
            { label: 'Sweet Bonanza Review', href: '/slots/sweet-bonanza' },
            { label: 'Best Free Spins Casino', href: '/best-free-spins-casino' },
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
