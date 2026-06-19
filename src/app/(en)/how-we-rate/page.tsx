import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Rate Casinos — Scoring Methodology | BonusCout',
  description: 'How BonusCout scores online casinos: licensing, bonus value, withdrawal speed, payments, games and support. The exact weight of each category and how we test.',
}

const WEIGHTS = [
  {
    pct: 25, title: 'Licensing & Safety', icon: '🔒',
    body: 'The single most important factor. A bonus is worthless if the operator can refuse to pay. We verify the licence number against the regulator\'s public register before any other scoring. UK Gambling Commission (UKGC) and Malta Gaming Authority (MGA) licences score highest because both regulators have strong dispute resolution. Gibraltar Regulatory Authority, Isle of Man GSC and Estonian EMTA also score well. Curaçao licences are accepted but score lower — they do not require operator segregation of player funds and complaints are rarely enforced. We also check for current SSL encryption, RNG certification (eCOGRA, iTech Labs or GLI), and visible responsible-gambling tooling.',
  },
  {
    pct: 20, title: 'Bonus Value', icon: '🎁',
    body: 'Headline numbers lie. A "€500 + 200 free spins" bonus with 60× wagering on bonus + deposit, a €5 max bet and a €100 withdrawal cap is worth less than a quiet €50 cashback. We score the realistic value: wagering requirement (bonus vs bonus + deposit), game weighting, max bet during bonus play, max win, expiry window, and the actual probability of converting bonus credit to withdrawable cash. Our calculator runs at least one full wagering cycle simulation per bonus.',
  },
  {
    pct: 20, title: 'Withdrawal Speed', icon: '⚡',
    body: 'We submit a real withdrawal of a small balance and time it from "submitted" to funds arriving in the source account. No estimates from marketing pages. We test the verified-account path (KYC already cleared) because the unverified path is gameplay-irrelevant — every regulated casino will hold a first withdrawal for KYC and that is correct. Cards typically settle in 1–3 business days, e-wallets in 0–24 hours, crypto in minutes. Casinos that score 5/5 here clear e-wallet withdrawals in under 12 hours.',
  },
  {
    pct: 15, title: 'Payment Options', icon: '💳',
    body: 'We test what a real player uses, not the marketing list: at least one debit card (Visa or Mastercard), one e-wallet (Skrill, Neteller, MuchBetter), one bank rail (Trustly, Open Banking), and crypto where supported (BTC, ETH, USDT). We score processing fees, minimum and maximum amounts, currency support (EUR, GBP at minimum), and whether deposit and withdrawal methods must match. Casinos that force a deposit method as the only withdrawal route get marked down because it strands funds.',
  },
  {
    pct: 10, title: 'Game Selection', icon: '🎮',
    body: 'We look at provider breadth, live dealer coverage, and mobile compatibility. A 5,000-game lobby that\'s 80% one-provider knockoffs scores below a 2,500-game lobby with Pragmatic, Hacksaw, Nolimit, Push Gaming, ELK, Play\'n GO and Evolution. We also check the live-dealer studio (Evolution, Pragmatic Live, Playtech), the speed of mobile loading on 4G, and whether advertised games are actually available in the test region — geographically-blocked titles often appear in the lobby but fail at launch.',
  },
  {
    pct: 10, title: 'Customer Support', icon: '💬',
    body: 'We contact live chat and email with three test queries: a generic question (deposit limits), a bonus-terms question (specific wagering clarification), and a withdrawal status question. We test inside and outside business hours, including weekends. We score time-to-first-response, time-to-resolution, and whether the agent solved the problem or punted it. English is non-negotiable; we also note other languages supported.',
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
        <span className="text-gray-300">How We Rate Casinos</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-white mb-4">How We Rate Casinos</h1>
      <p className="text-gray-400 text-lg mb-10 leading-relaxed">
        Every casino in our rankings is scored across six weighted categories. The weights add to 100%.
        Below is exactly what each category contains, how we test it, and the score bands we use.
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

      {/* Testing process */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-10">
        <h2 className="font-black text-white text-lg mb-4">Our Testing Process</h2>
        <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
          <p>
            <span className="text-white font-bold">1. Licensing verification.</span>{' '}
            We open the operator&apos;s licence page, copy the licence number, and confirm it on the regulator&apos;s public register (UKGC, MGA, Curaçao GCB, etc.). If the licence number doesn&apos;t resolve, the casino is rejected immediately and does not appear in our rankings — regardless of the bonus on offer.
          </p>
          <p>
            <span className="text-white font-bold">2. Real-money deposit.</span>{' '}
            We deposit a small live balance via at least two payment methods. We record processing time, fees, currency conversion behaviour, and whether the deposit triggers the advertised bonus correctly or requires a code we weren&apos;t told about.
          </p>
          <p>
            <span className="text-white font-bold">3. Bonus terms read in full.</span>{' '}
            We read the full bonus T&amp;Cs, not the marketing page. We log wagering requirement, wagering basis (bonus vs bonus + deposit), game contribution percentages, max bet rule, max win cap, conversion cap, expiry, restricted games and any country exclusions buried at the bottom.
          </p>
          <p>
            <span className="text-white font-bold">4. Withdrawal test.</span>{' '}
            After KYC clears, we submit a small withdrawal and time it. We test e-wallet, card and crypto rails where available. We record any &quot;pending&quot; period before the casino actually releases the funds — this is the number that tells you how fast the casino really pays.
          </p>
          <p>
            <span className="text-white font-bold">5. Support testing.</span>{' '}
            Three live-chat queries at different times of day, weekend included. We grade response time, accuracy and whether the agent solved the issue or escalated.
          </p>
          <p>
            <span className="text-white font-bold">6. Re-test cadence.</span>{' '}
            Every casino is re-tested at least once per year, sooner if a player complaint, terms change or licence change is reported. Scores can move down as well as up.
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
          <li>Operators with active player-funds complaints we&apos;ve been unable to resolve in testing.</li>
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
