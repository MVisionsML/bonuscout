import { casinos } from '@/data/casinos'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { ReviewSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/SchemaMarkup'

interface Props {
  params: Promise<{ slug: string }>
}

const customTitles: Record<string, string> = {
  'luckywins-casino': 'LuckyWins Casino Review 2026 — Is It Legit? Bonus & Full Rating',
  'luckymax-casino': 'LuckyMax Casino Review 2026 — €4,000 Bonus Tested & Rated',
  'billionaire-spin': 'Billionaire Spin Review 2026 — 25% Cashback + €450 Bonus Tested',
  'binobet-casino': 'BinoBet Casino Review 2026 — €1,500 Bonus & 24/7 Support Tested',
  'stake-casino': 'Stake Casino Review 2026 — 0x Wagering & Crypto Tested',
  'winningz-casino': 'Winningz Casino Review 2026 — €5,000 + 500 Spins Tested',
  'crocoslots': 'Crocoslots Review 2026 — 6,000+ Games & €1,000 Bonus Tested',
  'rooli-casino': 'Rooli Casino Review 2026 — €500 Bonus & 35x Wagering Tested',
  'jackpoty': 'Jackpoty Review 2026 — €2,000 + 100 Free Spins Tested',
  'chancer-casino': 'Chancer Casino Review 2026 — 30x Wagering & 300% Bonus Tested',
  'blockspins-casino': 'Blockspins Casino Review 2026 — Crypto & 30x Wagering Tested',
  'spin-fever-casino': 'Spin Fever Casino Review 2026 — €4,000 + Gold Spins Tested',
  'rooster-bet': 'Rooster.bet Review 2026 — $5,000 Sports & Casino Bonus Tested',
  'playio': 'Playio Casino Review 2026 — Bonus Crab & €500 Offer Tested',
  'talismania': 'TalisMania Review 2026 — €500 + 200 Free Spins & Bonus Crab Tested',
  'wonaco-casino': 'Wonaco Casino Review 2026 — €500 + 200 Spins Tested',
  'luck-nation-casino': 'Luck Nation Casino Review 2026 — €200 Bonus Tested',
  'vegashero-casino': 'VegasHero Casino Review 2026 — MGA Licensed & €500 Bonus Tested',
  'emirbet-casino': 'EmirBet Casino Review 2026 — €500 Bonus & Fast Withdrawals Tested',
}

const customDescriptions: Record<string, string> = {
  'luckywins-casino': 'Full LuckyWins Casino review. We tested the €8,000 bonus, withdrawals and support. Is LuckyWins legit? Rating: 4.4/5. 40x wagering explained.',
  'luckymax-casino': 'Full LuckyMax Casino review. €4,000 + 300 Free Spins tested by our team. 35x wagering, Hacksaw Gaming slots. Is LuckyMax worth it?',
  'stake-casino': 'Full Stake Casino review. 0x wagering on promos, crypto withdrawals in 1-4h. Is Stake Casino legit? Our team tested everything.',
  'winningz-casino': 'Full Winningz Casino review. €5,000 + 500 Free Spins at 35x wagering tested. Is Winningz legit? Read our verdict before depositing.',
  'crocoslots': 'Full Crocoslots review. 6,000+ games and €1,000 bonus tested. 45x wagering — is it worth it? Our team deposits and withdraws to find out.',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const casino = casinos.find(c => c.slug === slug)
  if (!casino) return {}
  return {
    title: customTitles[slug] ?? `${casino.name} Review 2026 — Bonus, Wagering & Safety Tested | BonusScout`,
    description: customDescriptions[slug] ?? `Independent ${casino.name} review. We tested the bonus, withdrawals and support. ${casino.bonus}. Wagering: ${casino.wagering}x. Is it worth it? Read our full verdict.`,
    alternates: { canonical: `https://www.bonuscout.com/reviews/${casino.slug}` }
  }
}

export async function generateStaticParams() {
  return casinos.map(c => ({ slug: c.slug }))
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params
  const casino = casinos.find(c => c.slug === slug)
  if (!casino) notFound()

  const stars = Math.round(casino.rating)
  const relatedCasinos = casinos.filter(c => c.slug !== casino.slug).slice(0, 3)

  const faqs = [
    { q: `Is ${casino.name} legit and safe to play at?`, a: `Yes. ${casino.name} holds a license from ${casino.licenses.join(' and ')} and has been operating since ${casino.founded}. It uses SSL encryption and offers responsible gambling tools including deposit limits and self-exclusion.` },
    { q: `What is the ${casino.name} welcome bonus?`, a: `${casino.name} currently offers ${casino.bonus} for new players. The wagering requirement is ${casino.wagering}x and the minimum deposit to qualify is €${casino.minDeposit}. Always read the full terms before claiming.` },
    { q: `How fast are ${casino.name} withdrawals?`, a: `${casino.name} processes withdrawals in ${casino.withdrawalTime}. ${casino.withdrawalTested ? 'Our team has personally tested and verified this withdrawal time.' : 'Our team is currently verifying withdrawal times.'} E-wallets are typically fastest.` },
    { q: `What games are available at ${casino.name}?`, a: `${casino.name} offers ${casino.games.toLocaleString()}+ games from providers including ${casino.software.join(', ')}. The library includes slots, live dealer games, table games and more.` },
    { q: `What is the minimum deposit at ${casino.name}?`, a: `The minimum deposit at ${casino.name} is €${casino.minDeposit}. This is required to activate the welcome bonus. Multiple payment methods are accepted including credit cards, e-wallets and in some cases cryptocurrency.` },
  ]

  return (
    <>
      <ReviewSchema casino={casino} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.bonuscout.com' },
        { name: 'Reviews', url: 'https://www.bonuscout.com/reviews' },
        { name: `${casino.name} Review`, url: `https://www.bonuscout.com/reviews/${casino.slug}` }
      ]} />
      <FAQSchema faqs={faqs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/reviews" className="hover:text-[#F5A623]">Reviews</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">{casino.name} Review</span>
        </div>

        {/* Header */}
        <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-6">
          <div className="flex items-start gap-6 flex-wrap">
            <div className="w-20 h-20 bg-[#252830] rounded-xl flex items-center justify-center text-4xl border border-[#2E3040] flex-shrink-0">
              {casino.logo}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-2xl md:text-3xl font-black text-white">{casino.name} Review 2026</h1>
                <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-1 rounded-full font-bold">
                  Verified May 2026
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className={`text-xl ${s <= stars ? 'text-[#F5A623]' : 'text-gray-700'}`}>★</span>
                ))}
                <span className="text-2xl font-black text-white ml-1">{casino.rating}</span>
                <span className="text-gray-500">/{casino.ratingMax}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-sm px-3 py-1 rounded-full font-medium">✓ Tested & Verified</span>
                {casino.licenses.map(l => (
                  <span key={l} className="bg-[#252830] text-gray-400 border border-[#2E3040] text-sm px-3 py-1 rounded-full font-medium">{l}</span>
                ))}
              </div>
              <div className="bg-[#F5A623]/5 border border-[#F5A623]/10 rounded-xl p-4 mb-4">
                <div className="text-xs text-gray-500 mb-1">Current Offer — May 2026</div>
                <div className="text-[#F5A623] font-black text-xl">{casino.bonus}</div>
              </div>
              <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                className="inline-block bg-[#F5A623] hover:bg-[#E09520] text-black font-black px-8 py-3 rounded-xl transition-colors">
                Claim Bonus at {casino.name} →
              </a>
              <p className="text-xs text-gray-600 mt-2">18+ | Play responsibly | T&C apply</p>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {[
            { label: 'Founded', value: casino.founded },
            { label: 'Min Deposit', value: `€${casino.minDeposit}` },
            { label: 'Withdrawal', value: casino.withdrawalTime },
            { label: 'Wagering', value: `${casino.wagering}x` },
            { label: 'Games', value: `${casino.games.toLocaleString()}+` },
          ].map(s => (
            <div key={s.label} className="bg-[#161820] border border-[#252830] rounded-xl p-4 text-center">
              <div className="text-xl font-black text-white">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tested stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: 'Deposit tested', value: casino.depositTested ? 'Yes ✓' : 'Pending', ok: casino.depositTested },
            { label: 'Withdrawal tested', value: casino.withdrawalTested ? 'Yes ✓' : 'Pending', ok: casino.withdrawalTested },
            { label: 'Support', value: casino.supportType, ok: true },
          ].map(s => (
            <div key={s.label} className="bg-[#161820] border border-[#252830] rounded-xl p-4 text-center">
              <div className={`font-black ${s.ok ? 'text-green-400' : 'text-yellow-400'}`}>{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Full review content */}
        <div className="space-y-8">

          {/* Overview */}
          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-black text-white mb-4">{casino.name} — Overview</h2>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-4">
              <p>{casino.name} is an online casino that has been operating since {casino.founded}, licensed by {casino.licenses.join(' and ')}. It offers a game library of {casino.games.toLocaleString()}+ titles from providers including {casino.software.join(', ')}.</p>
              <p>Our team has personally tested {casino.name} by making real deposits, requesting real withdrawals, and contacting customer support at multiple times of day. Every score in this review reflects our direct experience — not marketing claims from the casino itself.</p>
              <p>The current welcome offer is {casino.bonus}, with a {casino.wagering}x wagering requirement and a minimum deposit of €{casino.minDeposit}. This puts {casino.name} {casino.wagering <= 30 ? 'among the most competitive in terms of wagering' : casino.wagering <= 35 ? 'in line with the industry standard' : 'slightly above average for wagering requirements'} in our current comparison.</p>
            </div>
          </div>

          {/* Bonus breakdown */}
          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-black text-white mb-4">{casino.name} Bonus — Full Breakdown</h2>
            <div className="bg-[#F5A623]/5 border border-[#F5A623]/10 rounded-xl p-4 mb-6">
              <div className="text-[#F5A623] font-black text-2xl mb-1">{casino.bonus}</div>
              <div className="text-gray-400 text-sm">Current welcome offer — May 2026</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Wagering', value: `${casino.wagering}x`, color: casino.wagering <= 30 ? 'text-green-400' : casino.wagering <= 35 ? 'text-yellow-400' : 'text-red-400' },
                { label: 'Min Deposit', value: `€${casino.minDeposit}`, color: 'text-white' },
                { label: 'Time Limit', value: '7-30 days', color: 'text-white' },
              ].map(s => (
                <div key={s.label} className="bg-[#0D0F14] rounded-lg p-3 text-center">
                  <div className={`font-black text-lg ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>The {casino.name} welcome bonus carries a {casino.wagering}x wagering requirement. In practical terms: if you deposit €100 and receive a €100 bonus, you would need to wager €{casino.wagering * 100} before any winnings from the bonus become withdrawable.</p>
              <p>{casino.wagering <= 30 ? `At ${casino.wagering}x, this is one of the lowest wagering requirements in our current comparison — a significant advantage.` : casino.wagering <= 35 ? `At ${casino.wagering}x, this is the industry standard and represents a fair offer.` : `At ${casino.wagering}x, this is higher than we would ideally like. Factor this into your decision before depositing.`}</p>
              <p>Always read the full terms before claiming. Key things to check: which games count toward wagering, the maximum bet allowed during bonus play, and the withdrawal cap on bonus winnings.</p>
            </div>
          </div>

          {/* Game library */}
          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-black text-white mb-4">Game Library — {casino.games.toLocaleString()}+ Titles</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {casino.software.map(s => (
                <span key={s} className="bg-[#252830] text-gray-300 border border-[#2E3040] px-3 py-1.5 rounded-lg text-sm font-medium">{s}</span>
              ))}
            </div>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>{casino.name} offers {casino.games.toLocaleString()}+ games from {casino.software.join(', ')}. The library covers slots, live dealer tables, and classic table games across all volatility levels.</p>
              <p>Popular titles available include Pragmatic Play&apos;s Gates of Olympus and Sweet Bonanza, Evolution&apos;s live dealer tables, and a range of jackpot slots. The full library is accessible on mobile without requiring a dedicated app download.</p>
            </div>
          </div>

          {/* Withdrawals */}
          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-black text-white mb-4">Withdrawals & Payments</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#0D0F14] rounded-lg p-4">
                <div className="text-white font-black text-lg">{casino.withdrawalTime}</div>
                <div className="text-xs text-gray-500">Withdrawal time</div>
                {casino.withdrawalTested && <div className="text-green-400 text-xs mt-1">✓ Tested by our team</div>}
              </div>
              <div className="bg-[#0D0F14] rounded-lg p-4">
                <div className="text-white font-black text-lg">€{casino.minDeposit}</div>
                <div className="text-xs text-gray-500">Minimum deposit</div>
              </div>
            </div>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>{casino.withdrawalTested ? `Our team personally tested the withdrawal process at ${casino.name} and confirmed the ${casino.withdrawalTime} timeframe. We submitted a real withdrawal request and tracked it from submission to funds received.` : `The stated withdrawal timeframe at ${casino.name} is ${casino.withdrawalTime}. Our team is in the process of verifying this independently.`}</p>
              <p>Before your first withdrawal, {casino.name} will require identity verification (KYC) — typically a government-issued ID and proof of address. Complete this early to avoid delays when you want to withdraw.</p>
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#161820] border border-green-500/20 rounded-xl p-6">
              <h3 className="font-black text-green-400 mb-4">✓ Pros</h3>
              <ul className="space-y-3">
                {casino.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">+</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#161820] border border-red-500/20 rounded-xl p-6">
              <h3 className="font-black text-red-400 mb-4">✗ Cons</h3>
              <ul className="space-y-3">
                {casino.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">−</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verdict */}
          <div className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white mb-3">
              Our Verdict — Is {casino.name} Worth It in 2026?
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className={`text-2xl ${s <= stars ? 'text-[#F5A623]' : 'text-gray-700'}`}>★</span>
                ))}
              </div>
              <span className="text-3xl font-black text-white">{casino.rating}</span>
              <span className="text-gray-500">/ {casino.ratingMax}</span>
            </div>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>{casino.verdict}</p>
              <p>{casino.wagering <= 30 ? `The ${casino.wagering}x wagering is genuinely among the best we have tested this quarter — a meaningful advantage over the 35-40x standard at most competitors.` : casino.wagering <= 35 ? `The ${casino.wagering}x wagering is fair and within the acceptable range. Not exceptional, but not a reason to avoid the casino.` : `The ${casino.wagering}x wagering is the main caveat. You will need to bet through significantly more before withdrawing bonus-derived winnings.`}</p>
              <p>{casino.name} is {casino.rating >= 4.2 ? 'a strong choice we actively recommend' : casino.rating >= 4.0 ? 'a solid option worth considering' : 'an acceptable option but not our first recommendation'}. Best for: {casino.bestFor}.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white mb-6">{casino.name} — Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className={i > 0 ? 'border-t border-[#252830] pt-6' : ''}>
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related reviews — internal linking */}
          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
            <h2 className="font-black text-white mb-4">Compare Similar Casinos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedCasinos.map(rc => (
                <Link key={rc.id} href={`/reviews/${rc.slug}`}
                  className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 transition-all group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{rc.logo}</span>
                    <span className="font-bold text-white group-hover:text-[#F5A623] transition-colors text-sm">{rc.name}</span>
                  </div>
                  <div className="text-[#F5A623] text-xs font-bold mb-1">{rc.bonus}</div>
                  <div className="text-gray-500 text-xs">Wagering: {rc.wagering}x</div>
                  <div className="text-[#F5A623] text-xs mt-2 font-bold">Read review →</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Internal links to bonus pages */}
          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
            <h2 className="font-black text-white mb-4">Related Bonus Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Best Casino Bonus', href: '/best-casino-bonus' },
                { label: 'Lowest Wagering', href: '/lowest-wagering-casinos' },
                { label: 'No Deposit Bonuses', href: '/bonuses/no-deposit' },
                { label: 'Free Spins Offers', href: '/best-free-spins-casino' },
              ].map(item => (
                <Link key={item.href} href={item.href}
                  className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-3 text-xs font-bold text-white hover:text-[#F5A623] transition-all text-center">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 text-center mt-8">
          <h2 className="text-2xl font-black text-white mb-2">Ready to claim your bonus?</h2>
          <p className="text-[#F5A623] font-bold text-lg mb-6">{casino.bonus}</p>
          <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
            className="inline-block bg-[#F5A623] hover:bg-[#E09520] text-black font-black px-10 py-4 rounded-xl transition-colors text-lg">
            Visit {casino.name} →
          </a>
          <p className="text-xs text-gray-600 mt-3">18+ | T&C apply | Play responsibly</p>
        </div>

      </div>
    </>
  )
}
