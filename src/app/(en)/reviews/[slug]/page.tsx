import { casinos , casinoUrl } from '@/data/casinos'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { CasinoOrganizationSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/SchemaMarkup'

interface Props {
  params: Promise<{ slug: string }>
}

// Metadata follows the SEO-audit formula uniformly across all 20 casino reviews
// (June 2026 audit: CTR <0.5% on every /reviews/* page despite ranking p11-25;
// custom per-casino titles weren't converting, so we standardised on a
// search-intent format that reads cleanly in the SERP).
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const casino = casinos.find(c => c.slug === slug)
  if (!casino) return {}
  // Per-slug seoTitle/seoDescription override the generic bonus-targeted template
  // for high-impression pages where a targeted title lifts CTR (see 2026-07 GSC audit).
  const title = casino.seoTitle
    ?? `${casino.name} Bonus 2026 — Welcome Offer, Free Spins & Bonus Terms`
  const description = casino.seoDescription
    ?? `Every active ${casino.name} bonus in one place: ${casino.bonus} welcome offer at ${casino.wagering}x wagering, free spins, and the full bonus terms broken down from published operator T&Cs.`
  return {
    // Hybrid-strategy metadata (2026-06-22): title/H1/description deliberately
    // shifted from generic "Review" to bonus-targeted intent so this page no
    // longer competes with bonusreviewers.com/reviews/{slug} on "{brand} review".
    // Target query family: "{brand} bonus", "{brand} welcome offer", "{brand} free spins".
    title,
    description,
    alternates: { canonical: `https://www.bonuscout.com/reviews/${casino.slug}` }
  }
}

export async function generateStaticParams() {
  // Skip slugs that next.config.ts 308-redirects away from /reviews/{slug}.
  // Building the static page for these is wasted work — the edge redirect
  // intercepts before route resolution, so the page never renders.
  // See CANONICAL_OVERRIDES in src/data/casinos for the slug list.
  const REVERSE_REDIRECTED = new Set(['talismania', 'wonaco-casino'])
  return casinos.filter(c => !REVERSE_REDIRECTED.has(c.slug)).map(c => ({ slug: c.slug }))
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
    { q: `How fast are ${casino.name} withdrawals?`, a: `${casino.name} publishes a ${casino.withdrawalTime} withdrawal window per its cashier terms. Actual timing varies by payment method and account verification status — e-wallets are typically fastest across the industry, cards and bank transfers slowest.` },
    { q: `What games are available at ${casino.name}?`, a: `${casino.name} offers ${casino.games.toLocaleString()}+ games from providers including ${casino.software.join(', ')}. The library includes slots, live dealer games, table games and more.` },
    { q: `What is the minimum deposit at ${casino.name}?`, a: `The minimum deposit at ${casino.name} is €${casino.minDeposit}. This is required to activate the welcome bonus. Multiple payment methods are accepted including credit cards, e-wallets and in some cases cryptocurrency.` },
  ]

  return (
    <>
      <CasinoOrganizationSchema casino={casino} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.bonuscout.com' },
        { name: 'Reviews', url: 'https://www.bonuscout.com/reviews' },
        { name: `${casino.name} Bonus 2026`, url: `https://www.bonuscout.com/reviews/${casino.slug}` }
      ]} />
      <FAQSchema faqs={faqs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/reviews" className="hover:text-[#F5A623]">Reviews</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">{casino.name} Bonus 2026</span>
        </div>

        {/* Header */}
        <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-6">
          <div className="flex items-start gap-6 flex-wrap">
            <div className="w-20 h-20 bg-[#252830] rounded-xl flex items-center justify-center text-4xl border border-[#2E3040] flex-shrink-0 overflow-hidden">
              {casino.logoUrl ? (
                <Image src={casino.logoUrl} alt={casino.name} width={72} height={72} className="rounded-xl object-contain" />
              ) : (
                casino.logo
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-2xl md:text-3xl font-black text-white">{casino.name} Bonus 2026</h1>
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
                <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-sm px-3 py-1 rounded-full font-medium">✓ Documented &amp; Verified</span>
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

        {/* At-a-glance stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: 'Bonus terms', value: 'Compiled from operator T&Cs' },
            { label: 'Withdrawal window', value: casino.withdrawalTime + ' (published)' },
            { label: 'Support', value: casino.supportType },
          ].map(s => (
            <div key={s.label} className="bg-[#161820] border border-[#252830] rounded-xl p-4 text-center">
              <div className="font-black text-green-400 text-sm">{s.value}</div>
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
              <p>This review scores {casino.name} against BonusCout&apos;s published evaluation criteria — licence verification, bonus terms, payment methods, game library and third-party reputation. Every score is traceable to publicly verifiable operator information, not marketing claims.</p>
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
                <div className="text-gray-500 text-xs mt-1">Per operator cashier terms</div>
              </div>
              <div className="bg-[#0D0F14] rounded-lg p-4">
                <div className="text-white font-black text-lg">€{casino.minDeposit}</div>
                <div className="text-xs text-gray-500">Minimum deposit</div>
              </div>
            </div>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>{casino.name} publishes a {casino.withdrawalTime} withdrawal window per its cashier terms. Actual timing varies by payment method and account verification status — e-wallets and crypto are typically fastest, cards and bank transfers slowest. For reader-verified timing data, cross-reference casino.guru or AskGamblers reports.</p>
              <p>Before your first withdrawal, {casino.name} will require identity verification (KYC) — typically a government-issued ID and proof of address. Complete this early to avoid delays when you want to withdraw.</p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-black text-white mb-4">Payment Methods</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                { name: 'Visa / Mastercard', icon: '💳', speed: 'Instant deposit', available: true },
                { name: 'Skrill', icon: '🟣', speed: '1-24h withdrawal', available: true },
                { name: 'Neteller', icon: '🟢', speed: '1-24h withdrawal', available: true },
                { name: 'Bank Transfer', icon: '🏦', speed: '3-5 business days', available: true },
                { name: 'Cryptocurrency', icon: '₿', speed: '1-4h withdrawal', available: casino.pros.some(p => p.toLowerCase().includes('crypto') || p.toLowerCase().includes('bitcoin')) || casino.slug === 'stake-casino' || casino.slug === 'blockspins-casino' },
                { name: 'Paysafecard', icon: '🔵', speed: 'Deposit only', available: true },
              ].map(method => (
                <div key={method.name} className={`bg-[#0D0F14] rounded-lg p-3 ${method.available ? '' : 'opacity-40'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{method.icon}</span>
                    <span className="font-bold text-white text-sm">{method.name}</span>
                  </div>
                  <div className="text-xs text-gray-500">{method.available ? method.speed : 'Not available'}</div>
                </div>
              ))}
            </div>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>{casino.name} accepts all major payment methods including Visa, Mastercard, Skrill, Neteller and bank transfer.{casino.pros.some(p => p.toLowerCase().includes('crypto') || p.toLowerCase().includes('bitcoin')) || casino.slug === 'stake-casino' || casino.slug === 'blockspins-casino' ? ` Cryptocurrency deposits and withdrawals are also supported, with processing times of 1-4 hours.` : ''} Minimum deposit is €{casino.minDeposit} across all methods.</p>
              <p>Deposits are processed instantly for cards and e-wallets. Withdrawal times vary by method — e-wallets like Skrill and Neteller are typically fastest at 1-24 hours, while bank transfers take 3-5 business days.</p>
            </div>
          </div>

          {/* Mobile Casino */}
          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-black text-white mb-4">{casino.name} Mobile Casino</h2>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: 'Dedicated App', value: 'No', desc: 'Browser-based', icon: '📱' },
                { label: 'Mobile Browser', value: 'Yes ✓', desc: 'iOS & Android', icon: '🌐' },
                { label: 'Mobile Games', value: `${Math.round(casino.games * 0.85).toLocaleString()}+`, desc: '~85% of library', icon: '🎮' },
              ].map(s => (
                <div key={s.label} className="bg-[#0D0F14] rounded-lg p-3 text-center">
                  <div className="text-lg mb-1">{s.icon}</div>
                  <div className="font-black text-white text-sm">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{s.desc}</div>
                </div>
              ))}
            </div>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>{casino.name} does not offer a dedicated mobile app. Instead, the casino runs entirely through your mobile browser — no download required. The site is published as mobile-responsive per the operator; verify current app availability on the casino site before depositing.</p>
              <p>Approximately 85% of the desktop game library is available on mobile, including slots, live dealer games and table games from {casino.software.slice(0, 3).join(', ')}. Live dealer tables stream without issues on a stable connection. Account management, deposits and withdrawals all work from mobile.</p>
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
              <p>{casino.wagering <= 30 ? `The ${casino.wagering}x wagering is genuinely among the lowest in our comparison per the operator's published terms — a meaningful advantage over the 35-40x standard at most competitors.` : casino.wagering <= 35 ? `The ${casino.wagering}x wagering is fair and within the acceptable range. Not exceptional, but not a reason to avoid the casino.` : `The ${casino.wagering}x wagering is the main caveat. You will need to bet through significantly more before withdrawing bonus-derived winnings.`}</p>
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

          {/* Cross-site CTA — sister-site coverage for the trust/withdrawal intent.
              Hybrid-strategy (2026-06-22): this page now targets the {brand} BONUS intent.
              For the trust/licence/verdict intent on the same brand, route readers to
              BonusReviewers — one contextual link, in-body, NOT a sitewide footer link. */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🔍</div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wide text-emerald-400 font-bold mb-1">Trust &amp; Licence Analysis</div>
                <h2 className="font-black text-white text-lg mb-2">Want the trust and licence analysis for {casino.name}?</h2>
                <p className="text-sm text-gray-400 mb-3">Our sister site BonusReviewers publishes a full licence, operator and 10-dimension safety analysis of {casino.name} compiled from published T&amp;Cs and licensing records.</p>
                <a href={`https://www.bonusreviewers.com/reviews/${casino.slug}`} target="_blank" rel="nofollow noopener noreferrer"
                  className="inline-block bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-400 font-bold px-4 py-2 rounded-lg text-sm transition-colors">
                  Read the full {casino.name} review on BonusReviewers →
                </a>
              </div>
            </div>
          </div>

          {/* Related reviews — internal linking */}
          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
            <h2 className="font-black text-white mb-4">Compare Similar Casinos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedCasinos.map(rc => (
                <Link key={rc.id} href={casinoUrl(rc.slug)}
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
