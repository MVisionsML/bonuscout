import Link from 'next/link'
import CasinoCard from '@/components/casino/CasinoCard'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { WebsiteSchema } from '@/components/seo/SchemaMarkup'
import HeroSection from '@/components/home/HeroSection'

export const metadata: Metadata = {
  title: 'Best Online Casino Bonuses 2026 | Trusted Casino Reviews',
  description: 'Compare trusted online casinos, welcome bonuses, free spins and no deposit offers. Expert reviews, safety checks and updated casino promotions 2026.',
}

const SCORING = [
  { label: 'Licensing & Safety',  pct: 25, desc: 'License authority, encryption, fairness audits, ownership transparency.' },
  { label: 'Bonus Value',          pct: 20, desc: 'Wagering, max bet, game restrictions, expiry, withdrawal cap.' },
  { label: 'Withdrawal Speed',     pct: 20, desc: 'Real timed withdrawal test from submission to funds received.' },
  { label: 'Payment Options',      pct: 15, desc: 'Card, e-wallet, crypto, bank transfer — fees, limits, processing.' },
  { label: 'Game Selection',       pct: 10, desc: 'Provider quality, live dealer, mobile compatibility, regional availability.' },
  { label: 'Customer Support',     pct: 10, desc: 'Live chat and email tested at multiple times of day for response and accuracy.' },
]

const CATEGORY_HUBS = [
  { href: '/best-casino-bonus',         label: 'Best Casino Bonus',        desc: 'Top welcome offers by deposit match and fairness.' },
  { href: '/crypto-casino-bonus',       label: 'Crypto Casinos',           desc: 'Bitcoin, Ethereum and stablecoin-friendly operators.' },
  { href: '/no-deposit-bonus',          label: 'No Deposit Bonuses',       desc: 'Free bonus credit and free spins without a deposit.' },
  { href: '/bonuses/cashback',          label: 'Cashback Casinos',         desc: 'Casinos that refund a percentage of net losses.' },
  { href: '/lowest-wagering-casinos',   label: 'Low Wagering Casinos',     desc: 'Bonuses you can actually clear — 30x and under.' },
  { href: '/fast-withdrawal-casinos',   label: 'Fast Withdrawal Casinos',  desc: 'Casinos that pay out within 24 hours.' },
]

const KEY_GUIDES = [
  { href: '/guides/wagering-requirements-explained', label: 'Wagering Requirements Explained' },
  { href: '/guides/casino-bonus-terms',              label: 'Casino Bonus Terms Decoded' },
  { href: '/guides/crypto-casino-guide',             label: 'Crypto Casino Guide' },
  { href: '/guides/free-spins-guide',                label: 'Free Spins Guide' },
  { href: '/guides/how-to-claim-no-deposit-bonus',   label: 'How to Claim a No Deposit Bonus' },
]

export default function HomePage() {
  return (
    <>
      <WebsiteSchema />
      <div>
      <HeroSection />

      <div id="casinos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">

        {/* H1 + headline trust line */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">
            Best Online Casino Bonuses &amp; Trusted Casino Reviews 2026
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-3xl">
            BonusCout has tested <span className="text-white font-bold">{casinos.length} online casinos</span> using
            real-money deposits, real withdrawal requests and timed support checks. Every ranking on this page
            reflects what we found in testing — not what the casino paid for.
          </p>
        </header>

        {/* Methodology note */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-4 mb-8 flex items-start gap-3">
          <span className="text-[#F5A623] font-bold text-sm mt-0.5">✓</span>
          <p className="text-sm text-gray-400 leading-relaxed">
            <span className="text-white font-bold">Our rankings are not bought.</span>{' '}
            No casino can pay for a higher position. We earn commission only when players sign up through our links —
            never for favourable scoring.{' '}
            <Link href="/editorial-policy" className="text-[#F5A623] hover:underline font-bold">Editorial policy</Link>
            {' · '}
            <Link href="/how-we-rate" className="text-[#F5A623] hover:underline font-bold">How we rate</Link>
          </p>
        </div>

        {/* Casino list */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-white">
            Best Casino Bonuses — 2026
          </h2>
          <Link href="/casinos" className="text-[#F5A623] text-sm font-bold hover:underline">
            View all →
          </Link>
        </div>

        <div className="space-y-4 mb-14">
          {casinos.map((casino, index) => (
            <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
          ))}
        </div>

        {/* Browse by category — hub links */}
        <section className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-14">
          <h2 className="text-xl font-black text-white mb-2">Browse by Category</h2>
          <p className="text-gray-500 text-sm mb-6">Pick the bonus type or casino style you care about.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CATEGORY_HUBS.map(c => (
              <Link key={c.href} href={c.href}
                className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/40 rounded-xl p-4 transition-all group">
                <div className="font-bold text-white text-sm mb-1 group-hover:text-[#F5A623]">{c.label} →</div>
                <div className="text-xs text-gray-500 leading-relaxed">{c.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* How We Rate — scoring breakdown */}
        <section className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-14">
          <h2 className="text-xl font-black text-white mb-2">How We Rate Casinos</h2>
          <p className="text-gray-500 text-sm mb-6">
            Every casino on BonusCout is scored across six weighted categories. Total = 100%.
          </p>
          <div className="space-y-3 mb-6">
            {SCORING.map(s => (
              <div key={s.label} className="flex items-start gap-4 bg-[#0D0F14] border border-[#252830] rounded-xl p-4">
                <div className="text-[#F5A623] font-black text-lg w-14 flex-shrink-0">{s.pct}%</div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white text-sm mb-1">{s.label}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/how-we-rate" className="text-[#F5A623] text-sm font-bold hover:underline">
            Read the full testing methodology →
          </Link>
        </section>

        {/* Editor's Pick */}
        {(() => {
          const luckywins = casinos.find(c => c.slug === 'luckywins-casino')!
          return (
            <div className="bg-[#161820] border border-[#F5A623]/30 rounded-2xl p-6 md:p-8 mb-14">
              <div className="text-xs text-[#F5A623] font-bold mb-3 uppercase tracking-wide">Editor&apos;s Pick</div>
              <div className="flex items-start gap-5 flex-wrap">
                <div className="w-16 h-16 bg-[#252830] rounded-xl flex items-center justify-center text-3xl flex-shrink-0">{luckywins.logo}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-black text-white mb-1">{luckywins.name}</h3>
                  <div className="text-[#F5A623] font-bold text-lg mb-2">{luckywins.bonus}</div>
                  <p className="text-gray-400 text-sm mb-3">{luckywins.verdict}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                    <span>Wagering: <span className="text-yellow-400 font-bold">{luckywins.wagering}x</span></span>
                    <span>Min deposit: €{luckywins.minDeposit}</span>
                    <span>Withdrawal: {luckywins.withdrawalTime}</span>
                    <span>Rating: <span className="text-[#F5A623] font-bold">{luckywins.rating}/{luckywins.ratingMax}</span></span>
                  </div>
                  <div className="flex gap-3">
                    <a href={luckywins.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                      className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-6 py-2.5 rounded-lg transition-colors">
                      Claim Bonus
                    </a>
                    <Link href="/reviews/luckywins-casino" className="border border-[#252830] hover:border-[#F5A623]/30 text-gray-400 hover:text-[#F5A623] text-sm font-bold px-5 py-2.5 rounded-lg transition-all">
                      Read Full Review →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Lowest wagering */}
        {(() => {
          const lowestWagering = [...casinos].sort((a, b) => a.wagering - b.wagering).slice(0, 3)
          return (
            <div className="bg-[#161820] border border-green-500/20 rounded-2xl p-6 md:p-8 mb-14">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-black text-white">Lowest Wagering Casinos</h2>
                  <p className="text-gray-500 text-sm mt-1">Ranked by wagering requirement — lowest first</p>
                </div>
                <Link href="/lowest-wagering-casinos" className="text-green-400 text-sm font-bold hover:underline">See all →</Link>
              </div>
              <div className="space-y-3">
                {lowestWagering.map((casino, i) => (
                  <div key={casino.id} className="flex items-center gap-4 bg-[#0D0F14] rounded-xl p-4">
                    <span className="text-gray-500 font-black w-6 text-sm flex-shrink-0">#{i+1}</span>
                    <span className="text-2xl flex-shrink-0">{casino.logo}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-sm">{casino.name}</div>
                      <div className="text-[#F5A623] text-xs">{casino.bonus}</div>
                    </div>
                    <div className={`font-black text-xl flex-shrink-0 ${casino.wagering === 0 ? 'text-green-400' : casino.wagering <= 30 ? 'text-green-400' : 'text-yellow-400'}`}>
                      {casino.wagering}x
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                        className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-xs px-3 py-1.5 rounded-lg transition-colors">
                        Claim
                      </a>
                      <Link href={`/reviews/${casino.slug}`} className="text-xs text-gray-500 hover:text-[#F5A623] border border-[#252830] px-3 py-1.5 rounded-lg">
                        Review
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })()}

        {/* Popular Slots */}
        <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-black text-white">Popular Slots</h2>
              <p className="text-gray-500 text-sm mt-1">Top-rated slots reviewed by our team — full RTP, volatility and bonus mechanics breakdown</p>
            </div>
            <Link href="/slots" className="text-[#F5A623] text-sm font-bold hover:underline">See all slot reviews →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'Gates of Olympus', slug: 'gates-of-olympus', provider: 'Pragmatic Play', rtp: '96.5%' },
              { name: 'Sweet Bonanza', slug: 'sweet-bonanza', provider: 'Pragmatic Play', rtp: '96.48%' },
              { name: 'Big Bass Bonanza', slug: 'big-bass-bonanza', provider: 'Pragmatic Play', rtp: '96.71%' },
              { name: 'Wanted Dead or a Wild', slug: 'wanted-dead-or-a-wild', provider: 'Hacksaw Gaming', rtp: '96.38%' },
            ].map(s => (
              <Link key={s.slug} href={`/slots/${s.slug}`}
                className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 transition-all">
                <div className="font-bold text-white text-sm mb-1">{s.name} →</div>
                <div className="text-xs text-gray-500">{s.provider} · RTP {s.rtp}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Key Guides */}
        <section className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-14">
          <h2 className="text-xl font-black text-white mb-2">Bonus &amp; Casino Guides</h2>
          <p className="text-gray-500 text-sm mb-6">
            Read these first so you understand what you&apos;re actually claiming.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {KEY_GUIDES.map(g => (
              <Link key={g.href} href={g.href}
                className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 transition-all flex items-center justify-between">
                <span className="font-bold text-white text-sm">{g.label}</span>
                <span className="text-[#F5A623] text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Responsible Gambling */}
        <section className="bg-[#161820] border border-red-500/30 rounded-2xl p-6 md:p-8 mb-14">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/40 flex items-center justify-center flex-shrink-0">
              <span className="text-red-400 font-black">18+</span>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-black text-white mb-2">Responsible Gambling</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Gambling involves real financial risk. If your play is no longer fun or you find yourself chasing losses,
                pause and use one of the free, confidential services below. Self-exclusion is available at every UK and EU licensed casino.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer"
              className="bg-[#0D0F14] border border-[#252830] hover:border-red-500/40 rounded-xl p-4 transition-all">
              <div className="font-bold text-white text-sm mb-1">GamCare →</div>
              <div className="text-xs text-gray-500">Free UK helpline + live chat. Available 24/7.</div>
            </a>
            <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer"
              className="bg-[#0D0F14] border border-[#252830] hover:border-red-500/40 rounded-xl p-4 transition-all">
              <div className="font-bold text-white text-sm mb-1">GAMSTOP →</div>
              <div className="text-xs text-gray-500">Self-exclude from every UK-licensed gambling site.</div>
            </a>
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer"
              className="bg-[#0D0F14] border border-[#252830] hover:border-red-500/40 rounded-xl p-4 transition-all">
              <div className="font-bold text-white text-sm mb-1">BeGambleAware →</div>
              <div className="text-xs text-gray-500">Tools, advice and the National Gambling Helpline.</div>
            </a>
          </div>
          <Link href="/responsible-gambling" className="text-red-400 text-sm font-bold hover:underline">
            Read our full responsible gambling guide →
          </Link>
        </section>

        {/* Reviewed by */}
        <section className="bg-[#0D0F14] border border-[#252830] rounded-2xl p-6 mb-14">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center flex-shrink-0">
              <span className="text-[#F5A623] font-black text-sm">BC</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Reviewed by</div>
              <div className="font-black text-white text-sm mb-1">The BonusCout editorial team</div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Tested, scored and updated by our in-house casino testing team.{' '}
                <Link href="/team" className="text-[#F5A623] hover:underline">About the team</Link>
                {' · '}
                <Link href="/editorial-policy" className="text-[#F5A623] hover:underline">Editorial policy</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Get in touch */}
        <section id="contact" className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-14 scroll-mt-20">
          <h2 className="text-xl font-black text-white mb-3">Get in touch</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-2xl">
            Question about our methodology, a casino we should test, a correction to a review, or a partnership inquiry? See our about page for the best way to reach us.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-5 py-2.5 rounded-lg transition-colors">
              About &amp; Contact →
            </Link>
            <Link href="/how-we-rate" className="inline-flex items-center gap-2 border border-[#252830] hover:border-[#F5A623]/30 text-gray-400 hover:text-[#F5A623] text-sm font-bold px-5 py-2.5 rounded-lg transition-all">
              How We Rate →
            </Link>
            <Link href="/responsible-gambling" className="inline-flex items-center gap-2 border border-[#252830] hover:border-[#F5A623]/30 text-gray-400 hover:text-[#F5A623] text-sm font-bold px-5 py-2.5 rounded-lg transition-all">
              Responsible Gambling →
            </Link>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-2">Looking for no deposit bonuses?</h2>
          <p className="text-gray-400 mb-6">Play for free without risking your own money at verified, licensed casinos.</p>
          <Link
            href="/bonuses/no-deposit"
            className="inline-block bg-[#F5A623] hover:bg-[#E09520] text-black font-black px-8 py-4 rounded-xl transition-colors text-lg"
          >
            See No Deposit Bonuses →
          </Link>
        </div>

      </div>
    </div>
    </>
  )
}
