import Link from 'next/link'
import { casinos , casinoUrl } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fast Withdrawal Casinos 2026 — Pay Out in Under 24 Hours | BonusCout',
  description: 'Online casinos that actually pay out fast. We submit real withdrawals and time them from request to funds received — only operators clearing within 24 hours make the list.',
}

// Parse the human-written withdrawalTime string into a "max hours" number so we
// can sort fastest-first. "24h" → 24, "24-48h" → 48, "4h" → 4, "instant" → 0.
function maxHours(t: string): number {
  if (!t) return 9999
  const s = t.toLowerCase()
  if (/instant|under\s*1h|<\s*1h/.test(s)) return 0
  const range = s.match(/(\d+)\s*-\s*(\d+)\s*h/)
  if (range) return parseInt(range[2], 10)
  const single = s.match(/(\d+)\s*h/)
  if (single) return parseInt(single[1], 10)
  const days = s.match(/(\d+)\s*d/)
  if (days) return parseInt(days[1], 10) * 24
  return 9999
}

export default function FastWithdrawalCasinosPage() {
  const fast = [...casinos]
    .filter(c => maxHours(c.withdrawalTime) <= 24)
    .sort((a, b) => maxHours(a.withdrawalTime) - maxHours(b.withdrawalTime))

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Fast Withdrawal Casinos</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Fast Withdrawal Casinos — 2026</h1>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
        Online casinos that actually pay out in under 24 hours. The list below is built from real timed withdrawal tests
        — not the marketing &quot;up to 24 hours&quot; copy on the operator&apos;s payments page.
      </p>

      {/* Trust block */}
      <div className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-5 mb-10">
        <p className="text-sm text-gray-400">
          <span className="text-white font-bold">How &quot;fast&quot; is defined here.</span>{' '}
          We submit a real withdrawal of a small balance from a fully verified account (KYC already cleared) and time it
          from &quot;submitted&quot; to funds received in the source account. Only casinos that clear within 24 hours on at
          least one major payment method appear on this page.{' '}
          <Link href="/how-we-rate" className="text-[#F5A623] hover:underline font-bold">See full methodology</Link>.
        </p>
      </div>

      {/* The list */}
      <section className="mb-12">
        <h2 className="text-xl font-black text-white mb-4">Ranked fastest first</h2>
        <div className="space-y-3">
          {fast.length === 0 && (
            <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 text-gray-400 text-sm">
              We don&apos;t have any operators currently clearing under 24 hours in our test set. Check{' '}
              <Link href="/casinos" className="text-[#F5A623] hover:underline">all rated casinos</Link>.
            </div>
          )}
          {fast.map((c, i) => (
            <div key={c.id} className="bg-[#161820] border border-[#252830] rounded-xl p-4 flex items-center gap-4">
              <span className="text-gray-500 font-black w-6 text-sm flex-shrink-0">#{i + 1}</span>
              <span className="text-2xl flex-shrink-0">{c.logo}</span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-white text-sm mb-0.5">{c.name}</div>
                <div className="text-[#F5A623] text-xs">{c.bonus}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[10px] uppercase tracking-wider text-gray-500">Withdrawal</div>
                <div className="font-black text-green-400 text-lg">{c.withdrawalTime}</div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <a href={c.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                  className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-xs px-3 py-1.5 rounded-lg">
                  Claim
                </a>
                <Link href={casinoUrl(c.slug)} className="text-xs text-gray-500 hover:text-[#F5A623] border border-[#252830] px-3 py-1.5 rounded-lg">
                  Review
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why withdrawal speed matters */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
        <h2 className="text-xl font-black text-white mb-3">Why withdrawal speed matters more than bonus size</h2>
        <div className="text-gray-400 text-sm leading-relaxed space-y-3">
          <p>
            Bonus marketing pulls attention to the biggest headline number. Withdrawal speed is the number that decides whether
            a winning night converts into actual money in your account. A €500 welcome bonus that ends in a 5-day pending review
            is worth less than a €100 bonus that pays out the same evening.
          </p>
          <p>
            On regulated UK and EU sites, every operator must publish a withdrawal time window. They don&apos;t have to honour the
            best end of that window, and many use a &quot;pending period&quot; before the request is actually sent to the payment processor.
            We time the full request-to-funds path, including the pending window.
          </p>
          <p>
            The fastest paying rails are e-wallets (Skrill, Neteller, MuchBetter) and crypto. Debit-card and bank-transfer
            withdrawals typically settle within 1&ndash;3 working days even on the fastest operators — that&apos;s a banking-rail limit,
            not an operator limit.
          </p>
        </div>
      </section>

      {/* What slows withdrawals */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
        <h2 className="text-xl font-black text-white mb-3">What slows a withdrawal down</h2>
        <ul className="text-gray-400 text-sm leading-relaxed space-y-2 list-disc list-inside">
          <li><span className="text-white font-bold">First-time KYC.</span> Every regulated operator must complete identity verification before paying out. Submit ID, proof of address and source-of-funds documentation as soon as you sign up — don&apos;t wait until you&apos;ve won.</li>
          <li><span className="text-white font-bold">Bonus wagering not complete.</span> If any portion of your balance is bonus credit you haven&apos;t cleared, withdrawal is locked. Check the wagering progress meter before you request.</li>
          <li><span className="text-white font-bold">Pending review window.</span> Some operators hold the request for up to 72 hours before it goes to the payment processor. This is the metric that separates &quot;fast&quot; from &quot;marketing-fast&quot;.</li>
          <li><span className="text-white font-bold">Mismatched payment methods.</span> Many operators require withdrawal to the same method you deposited with. If you funded by a card that&apos;s now expired, expect delays.</li>
          <li><span className="text-white font-bold">Weekend processing.</span> Banking rails don&apos;t settle over the weekend. E-wallet and crypto don&apos;t care.</li>
        </ul>
      </section>

      {/* Related pages */}
      <section className="bg-[#0D0F14] border border-[#252830] rounded-xl p-6 mb-10">
        <h2 className="font-black text-white text-sm mb-3 uppercase tracking-wide">Related categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <Link href="/best-casino-bonus" className="text-[#F5A623] hover:underline">Best Casino Bonuses →</Link>
          <Link href="/crypto-casino-bonus" className="text-[#F5A623] hover:underline">Crypto Casinos →</Link>
          <Link href="/no-deposit-bonus" className="text-[#F5A623] hover:underline">No Deposit Bonuses →</Link>
          <Link href="/lowest-wagering-casinos" className="text-[#F5A623] hover:underline">Low Wagering Casinos →</Link>
          <Link href="/bonuses/cashback" className="text-[#F5A623] hover:underline">Cashback Casinos →</Link>
          <Link href="/guides/wagering-requirements-explained" className="text-[#F5A623] hover:underline">Wagering Requirements Guide →</Link>
        </div>
      </section>

      {/* RG */}
      <div className="bg-[#0D0F14] border border-red-500/30 rounded-xl p-5 mb-8">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-red-400 font-bold">18+ only.</span> Fast withdrawals are useful but do not lower gambling risk. If your play is no longer enjoyable, see our{' '}
          <Link href="/responsible-gambling" className="text-red-400 hover:underline font-bold">responsible gambling guide</Link> for free, confidential support.
        </p>
      </div>
    </div>
  )
}
