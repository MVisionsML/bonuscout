import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Evaluate Casinos — Scoring Methodology | BonusCout',
  description: 'How BonusCout scores online casinos: licensing, bonus value, published withdrawal windows, payments, games and support. The exact weight of each category and how we evaluate.',
}

const WEIGHTS = [
  {
    pct: 25, title: 'Licensing & Safety', icon: '🔒',
    body: 'The single most important factor. A bonus is worthless if the operator can refuse to pay. We verify the licence number against the regulator\'s public register before any other scoring. UK Gambling Commission (UKGC) and Malta Gaming Authority (MGA) licences score highest because both regulators have strong dispute resolution. Gibraltar Regulatory Authority, Isle of Man GSC and Estonian EMTA also score well. Curaçao licences are accepted but score lower — they do not require operator segregation of player funds and complaints are rarely enforced. Operators registered under corporate frameworks that are not gaming licences (e.g. Costa Rica corporate registration) are flagged as such rather than presented as licensed operators. We also check for current SSL encryption, RNG certification (eCOGRA, iTech Labs or GLI), and visible responsible-gambling tooling.',
  },
  {
    pct: 20, title: 'Bonus Value', icon: '🎁',
    body: 'Headline numbers lie. A "€500 + 200 free spins" bonus with 60× wagering on bonus + deposit, a €5 max bet and a €100 withdrawal cap is worth less than a quiet €50 cashback. We score the realistic value: wagering requirement (bonus vs bonus + deposit), game weighting, max bet during bonus play, max win, expiry window, and the total wagering burden — total bets required at typical stakes to clear the bonus. Every claim on our bonus pages is extracted from the operator\'s published bonus T&Cs.',
  },
  {
    pct: 20, title: 'Withdrawal Speed', icon: '⚡',
    body: 'We score based on the operator\'s published withdrawal windows per payment method and third-party reports on payment reliability. Cards typically settle in 1–3 business days, e-wallets in 0–24 hours, crypto in minutes. Casinos that publish sub-12-hour e-wallet windows and have a clean third-party record (casino.guru, AskGamblers) score highest. This is a dimension we hope to add first-party timing data to in future; where available today, we cite the operator\'s published cashier terms.',
  },
  {
    pct: 15, title: 'Payment Options', icon: '💳',
    body: 'We score based on the payment methods the operator publishes on its cashier page — the breadth of card (Visa, Mastercard), e-wallet (Skrill, Neteller, MuchBetter), bank rail (Trustly, Open Banking) and crypto (BTC, ETH, USDT) support. We also record processing fees, minimum and maximum amounts, currency support (EUR, GBP at minimum), and whether deposit and withdrawal methods must match. Casinos that force a deposit method as the only withdrawal route are marked down because it strands funds.',
  },
  {
    pct: 10, title: 'Game Selection', icon: '🎮',
    body: 'We look at provider breadth, live dealer coverage, and mobile compatibility. A 5,000-game lobby that\'s 80% one-provider knockoffs scores below a 2,500-game lobby with Pragmatic, Hacksaw, Nolimit, Push Gaming, ELK, Play\'n GO and Evolution. We also check the advertised live-dealer studio (Evolution, Pragmatic Live, Playtech), the mobile lobby, and note geographic restrictions or lobby-vs-launch discrepancies where players report them on third-party directories.',
  },
  {
    pct: 10, title: 'Customer Support', icon: '💬',
    body: 'We score based on the operator\'s published support channels (live chat, email, phone where offered), languages supported, published response-time commitments, and third-party reports on response times and resolution quality. English support is non-negotiable; other languages are noted. Casinos that publish 24/7 live chat and support two or more European languages score highest.',
  },
]

const SCORE_BANDS = [
  { range: '4.5 – 5.0', label: 'Exceptional', color: 'text-green-400', desc: 'Top-tier across every category. Rare — typically one or two casinos per year.' },
  { range: '4.0 – 4.4', label: 'Very Good',   color: 'text-green-400', desc: 'Strong overall with minor weaknesses. Safe to recommend.' },
  { range: '3.5 – 3.9', label: 'Good',        color: 'text-yellow-400', desc: 'Solid operator but with notable trade-offs (slow support, narrow payment options).' },
  { range: '3.0 – 3.4', label: 'Average',     color: 'text-orange-400', desc: 'Acceptable but not a first-choice recommendation. Usually a niche fit.' },
  { range: 'Below 3.0', label: 'Poor',        color: 'text-red-400',    desc: 'Significant issues. We typically do not list these unless flagging them as warnings.' },
]

export default function HowWeRatePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">How We Evaluate Casinos</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-white mb-4">How We Evaluate Casinos</h1>
      <p className="text-gray-400 text-lg mb-10 leading-relaxed">
        Every casino in our rankings is scored across six weighted categories. The weights add to 100%.
        Below is exactly what each category contains, how we evaluate it, and the score bands we use.
      </p>

      <div className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-5 mb-10">
        <p className="text-sm text-gray-400">
          <span className="text-white font-bold">Our rankings are not bought.</span>{' '}
          No casino can pay for a higher position. We earn commission only when a player signs up through our links —
          never for favourable scoring. See our{' '}
          <Link href="/editorial-policy" className="text-[#F5A623] hover:underline font-bold">editorial policy</Link> for affiliate disclosure detail.
        </p>
      </div>

      {/* Weighted criteria */}
      <div className="space-y-6 mb-12">
        {WEIGHTS.map(w => (
          <div key={w.title} className="bg-[#161820] border border-[#252830] rounded-xl p-6">
            <div className="flex items-start justify-between mb-3 gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl flex-shrink-0">{w.icon}</span>
                <h2 className="font-black text-white text-lg">{w.title}</h2>
              </div>
              <span className="text-[#F5A623] font-black text-sm bg-[#F5A623]/10 border border-[#F5A623]/20 px-3 py-1 rounded-full flex-shrink-0">
                {w.pct}%
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{w.body}</p>
          </div>
        ))}
      </div>

      {/* Evaluation process */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-10">
        <h2 className="font-black text-white text-lg mb-4">How We Evaluate Casinos</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Every ranking on BonusCout follows the same six-step editorial process. It is a documentary evaluation of publicly available operator information.
        </p>
        <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
          <p>
            <span className="text-white font-bold">1. Licence verification.</span>{' '}
            We open the operator&apos;s licence page, extract the licence number and authority, and confirm the number against the regulator&apos;s public register (UK Gambling Commission, Malta Gaming Authority, Curaçao GCB, Antillephone, Anjouan, etc.). If the licence number cannot be verified, the operator does not appear in our rankings — regardless of the bonus on offer.
          </p>
          <p>
            <span className="text-white font-bold">2. Operator identity check.</span>{' '}
            We identify the licensed entity (Dama N.V., Simba N.V., Rabidi N.V., etc.), the jurisdiction of incorporation, and — where applicable — the group of brands operated under the same licence. Operators registered under corporate frameworks that are not gaming licences (e.g. Costa Rica corporate registration) are flagged as such rather than presented as licensed operators.
          </p>
          <p>
            <span className="text-white font-bold">3. Bonus terms analysis.</span>{' '}
            We extract the published welcome offer, wagering multiplier, bonus expiry, free-spins terms, game weighting, max bet during bonus play and withdrawal caps directly from the operator&apos;s bonus T&amp;Cs. We calculate the realistic wagering burden — total bets required to clear the bonus at typical stakes — and score against comparable operators.
          </p>
          <p>
            <span className="text-white font-bold">4. Payment methods and published withdrawal windows.</span>{' '}
            We list the payment methods the operator publishes on its cashier page and the published withdrawal windows for each method. We do not currently perform first-party withdrawal timing tests; readers who want verified timing data should cross-reference casino.guru or AskGamblers reports on the same operator.
          </p>
          <p>
            <span className="text-white font-bold">5. Game library and provider verification.</span>{' '}
            We record the software providers and approximate library size as published by the operator. We do not verify every advertised title individually.
          </p>
          <p>
            <span className="text-white font-bold">6. Third-party reputation and re-verification.</span>{' '}
            Before publishing or updating a ranking, we cross-check the operator against casino.guru&apos;s Safety Index and AskGamblers&apos;s player-reported complaint data. Rankings are re-verified at least annually or sooner if licence status, terms or reputation signals change.
          </p>
        </div>
      </section>

      {/* Score bands */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-10">
        <h2 className="font-black text-white mb-4">Score Bands</h2>
        <div className="space-y-3">
          {SCORE_BANDS.map(s => (
            <div key={s.range} className="flex items-start gap-4 text-sm">
              <span className={`font-black w-24 flex-shrink-0 ${s.color}`}>{s.range}</span>
              <span className="font-bold text-white w-24 flex-shrink-0">{s.label}</span>
              <span className="text-gray-500 flex-1">{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What we exclude */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-10">
        <h2 className="font-black text-white mb-4">What We Will Not List</h2>
        <ul className="space-y-2 text-gray-400 text-sm leading-relaxed list-disc list-inside">
          <li>Operators with no verifiable licence.</li>
          <li>Operators with active player-funds complaints on third-party directories that we have been unable to resolve.</li>
          <li>Operators using a bonus structure where the wagering and max-win combination makes withdrawal effectively impossible.</li>
          <li>Operators that refuse to clarify ambiguous terms on request.</li>
        </ul>
      </section>

      {/* Cross-links */}
      <section className="bg-[#0D0F14] border border-[#252830] rounded-xl p-6 mb-10">
        <h2 className="font-black text-white text-sm mb-3 uppercase tracking-wide">Related</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <Link href="/editorial-policy" className="text-[#F5A623] hover:underline">Editorial Policy &amp; AI Disclosure →</Link>
          <Link href="/team" className="text-[#F5A623] hover:underline">About the Editorial Team →</Link>
          <Link href="/responsible-gambling" className="text-[#F5A623] hover:underline">Responsible Gambling →</Link>
          <Link href="/guides/wagering-requirements-explained" className="text-[#F5A623] hover:underline">Wagering Requirements Explained →</Link>
          <Link href="/casinos" className="text-[#F5A623] hover:underline">See the Casino Rankings →</Link>
        </div>
      </section>

      <div className="text-center">
        <Link href="/casinos" className="inline-block bg-[#F5A623] hover:bg-[#E09520] text-black font-black px-8 py-4 rounded-xl transition-colors">
          See Our Casino Rankings →
        </Link>
      </div>
    </div>
  )
}
