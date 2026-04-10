import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Casino Bonus Terms Glossary 2026 — Every Term Explained | BonusScout',
  description: 'Complete glossary of casino bonus terms. Wagering requirements, playthrough, sticky bonus, max bet rule, withdrawal cap and more — all explained clearly.',
  alternates: { canonical: 'https://www.bonuscout.com/guides/casino-bonus-terms' }
}

const terms = [
  { term: 'Wagering requirement', aka: 'Playthrough', def: 'The number of times you must bet your bonus before withdrawing winnings. A 35x wagering requirement on a €100 bonus means €3,500 in total bets are required.' },
  { term: 'Bonus + deposit wagering', aka: 'D+B wagering', def: 'When wagering applies to both the deposit and bonus amount combined. A €100 deposit + €100 bonus at 35x = €7,000 required. Significantly worse than bonus-only wagering.' },
  { term: 'Sticky bonus', aka: 'Non-cashable bonus', def: 'A bonus that cannot be withdrawn — only the winnings generated from it can be cashed out. The bonus itself is removed when you request a withdrawal.' },
  { term: 'Withdrawal cap', aka: 'Max cashout', def: 'The maximum amount you can withdraw from bonus winnings, regardless of how much you actually win. Common on free spin offers — e.g. max €50 from no deposit free spin winnings.' },
  { term: 'Maximum bet', aka: 'Max bet rule', def: 'The highest stake allowed per spin or hand while a bonus is active. Exceeding this (typically €5 per spin) can void your bonus and all associated winnings, even if wagering is complete.' },
  { term: 'Game contribution', aka: 'Game weighting', def: 'The percentage of each bet that counts toward wagering requirements. Slots are usually 100%. Table games often contribute 10-20%. Some games may contribute 0%.' },
  { term: 'Bonus expiry', aka: 'Bonus validity', def: 'The time limit within which you must complete wagering and use your bonus. Typically 7-30 days. Free spins often have a separate, shorter expiry — sometimes 24-72 hours after crediting.' },
  { term: 'KYC', aka: 'Know Your Customer', def: 'Identity verification required before withdrawals. Typically involves uploading a government-issued ID and proof of address. Complete this early to avoid delays when you want to withdraw.' },
  { term: 'Cashback', aka: 'Loss rebate', def: 'A percentage of net losses returned as bonus funds. Usually 10-25%. Cashback wagering is often 1x — much lower than standard bonus wagering. The most player-friendly bonus type.' },
  { term: 'No deposit bonus', aka: 'Free bonus', def: 'A bonus credited on registration without requiring a deposit. Can be free cash or free spins. Always carries wagering requirements and withdrawal caps on winnings.' },
  { term: 'Welcome bonus', aka: 'Sign-up bonus, first deposit bonus', def: 'A bonus package offered to new players on their first deposit. Typically a percentage match (100% = get the same amount you deposit) plus free spins.' },
  { term: 'Match bonus', aka: 'Deposit match', def: 'A bonus that matches your deposit by a set percentage. 100% match = double your deposit. 200% match = triple. Always subject to a maximum bonus cap.' },
  { term: 'Bonus code', aka: 'Promo code', def: 'A code entered during registration or in the cashier to activate a specific bonus offer. Not all bonuses require codes — some are credited automatically.' },
  { term: 'Provably fair', aka: 'Verifiable RNG', def: 'A cryptographic method used by crypto casinos to prove game outcomes were not manipulated. Players can independently verify the fairness of any game result.' },
  { term: 'RTP', aka: 'Return to Player', def: 'The theoretical percentage of bets a slot returns to players over time. 96% RTP means for every €100 wagered, €96 is returned on average over millions of spins. Not a short-term guarantee.' },
  { term: 'Volatility', aka: 'Variance', def: 'How frequently and how large a slot pays out. Low volatility = frequent small wins. High volatility = rare but larger wins. High volatility slots are riskier for bonus play as they can exhaust bonus funds before a win.' },
]

const faqs = [
  { q: 'What is the difference between wagering and playthrough?', a: 'They mean exactly the same thing. Wagering requirement and playthrough requirement are interchangeable terms — both describe how many times you must bet your bonus before withdrawing.' },
  { q: 'What does "bonus only" wagering mean?', a: 'It means the wagering multiplier applies only to your bonus amount, not your deposit. This is better for players than "bonus + deposit" wagering, which doubles the required playthrough.' },
  { q: 'What happens if I withdraw before completing wagering?', a: 'Your bonus and any bonus-derived winnings are forfeited. Your original deposit (minus any losses) is returned. Some casinos allow you to voluntarily forfeit a bonus in account settings without withdrawing.' },
]

export default function CasinoBonusTerms() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/guides" className="hover:text-[#F5A623]">Guides</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Casino Bonus Terms</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Casino Bonus Terms Glossary</h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Every term you will encounter in casino bonus terms and conditions — explained in plain language. Bookmark this page before claiming any bonus.
        </p>

        <div className="space-y-3 mb-12">
          {terms.map(item => (
            <div key={item.term} className="bg-[#161820] border border-[#252830] rounded-xl p-5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="font-black text-white">{item.term}</div>
                <div className="text-xs text-gray-500 bg-[#252830] px-2 py-1 rounded flex-shrink-0">Also: {item.aka}</div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{item.def}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8 mb-8">
          <h2 className="font-black text-white mb-6">Frequently Asked Questions</h2>
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
          <h2 className="font-black text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Wagering Requirements Explained', href: '/guides/wagering-requirements-explained' },
              { label: 'How to Claim a No Deposit Bonus', href: '/guides/how-to-claim-no-deposit-bonus' },
              { label: 'Free Spins Guide', href: '/guides/free-spins-guide' },
              { label: 'Lowest Wagering Casinos', href: '/lowest-wagering-casinos' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 text-sm font-bold text-white hover:text-[#F5A623] transition-all">
                {item.label} →
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
