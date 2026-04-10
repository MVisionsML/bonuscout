import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'How to Claim a No Deposit Bonus — Step by Step Guide 2026 | BonusScout',
  description: 'Step-by-step guide to claiming a no deposit casino bonus. Registration, verification, bonus codes and wagering — everything explained clearly.',
  alternates: { canonical: 'https://www.bonuscout.com/guides/how-to-claim-no-deposit-bonus' }
}

const topCasinos = casinos.slice(0, 4)

const faqs = [
  { q: 'Do I need a bonus code to claim a no deposit bonus?', a: 'Sometimes. Some casinos credit the bonus automatically on registration. Others require you to enter a code during sign-up or in the cashier section. Our listings note when a code is required.' },
  { q: 'Can I withdraw no deposit bonus winnings?', a: 'Yes, but only after completing the wagering requirement. Most no deposit bonuses carry 30-50x wagering on winnings. There is often also a withdrawal cap — for example, max €50 withdrawable from no deposit winnings.' },
  { q: 'Why was my no deposit bonus rejected?', a: 'Common reasons: you already have an account at that casino, your country is restricted, you used a VPN, or you did not complete verification in time. Contact support with evidence if you believe it was wrongly rejected.' },
  { q: 'How long do I have to use a no deposit bonus?', a: 'Typically 7-30 days from registration or from when the bonus is credited. Free spins specifically often expire within 24-72 hours. Always check the expiry terms before registering.' },
]

const steps = [
  { num: '01', title: 'Choose a verified casino', desc: 'Pick a casino from our list. Every casino here has been tested by our team — we verify the no deposit offer is still active before listing it.' },
  { num: '02', title: 'Click "Claim" and register', desc: 'Use our link to visit the casino and create an account. Use your real details — casinos verify identity before processing withdrawals. Fake information will get your account closed.' },
  { num: '03', title: 'Verify your email', desc: 'Most casinos send a confirmation email immediately after registration. Click the link to activate your account. Some casinos require phone verification too.' },
  { num: '04', title: 'Enter a bonus code if required', desc: 'Some casinos credit the bonus automatically. Others require you to enter a code in the cashier or promotions section. Check the specific offer terms — our listings note when a code is needed.' },
  { num: '05', title: 'Check your bonus is credited', desc: 'Navigate to your bonus or promotions section. The no deposit bonus should appear here. If it does not appear within a few minutes, contact live chat.' },
  { num: '06', title: 'Read the wagering terms before playing', desc: 'Before you spin a single reel, read: wagering multiplier, which games count, maximum bet per spin, withdrawal cap on winnings, and expiry date. These four numbers determine your actual chance of withdrawing.' },
  { num: '07', title: 'Play eligible games only', desc: 'Use only games that contribute 100% to wagering. Slots are almost always eligible. Table games often contribute 10% or less — using them during bonus play dramatically extends the time needed to clear wagering.' },
  { num: '08', title: 'Request withdrawal after clearing wagering', desc: 'Once your wagering is complete, the funds become real money. Go to the cashier, select your withdrawal method, and submit. First-time withdrawals require KYC — upload your ID and proof of address before requesting.' },
]

export default function NoDepositGuide() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/guides" className="hover:text-[#F5A623]">Guides</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">How to Claim a No Deposit Bonus</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">How to Claim a No Deposit Bonus</h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          A step-by-step walkthrough of the entire process — from choosing the right casino to completing wagering and making your first withdrawal.
        </p>

        <div className="space-y-4 mb-12">
          {steps.map(step => (
            <div key={step.num} className="bg-[#161820] border border-[#252830] rounded-xl p-5 flex gap-5">
              <div className="text-2xl font-black text-[#F5A623]/40 flex-shrink-0 w-10 text-right">{step.num}</div>
              <div>
                <div className="font-black text-white mb-1">{step.title}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#161820] border border-amber-500/20 rounded-xl p-6 mb-10">
          <h2 className="font-black text-white mb-3">⚠️ The most common mistakes</h2>
          <ul className="space-y-3 text-sm text-gray-400">
            {[
              'Not reading the withdrawal cap — some no deposit bonuses limit winnings to €20-€100 regardless of what you win.',
              'Playing table games toward wagering — they often contribute 10% or less, making the playthrough 10x harder.',
              'Exceeding the maximum bet per spin — this can void your bonus and all associated winnings.',
              'Missing the expiry window — free spins sometimes expire within 24 hours of being credited.',
            ].map((m, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-amber-400 flex-shrink-0">→</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-xl font-black text-white mb-4">Top Casinos to Try Right Now</h2>
        <div className="space-y-3 mb-10">
          {topCasinos.map(casino => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 flex items-center gap-4 transition-all">
              <div className="w-10 h-10 bg-[#252830] rounded-xl flex items-center justify-center text-xl flex-shrink-0">{casino.logo}</div>
              <div className="flex-1">
                <div className="font-bold text-white text-sm">{casino.name}</div>
                <div className="text-[#F5A623] text-xs font-bold">{casino.bonus}</div>
                <div className="text-xs text-gray-500">Wagering: {casino.wagering}x · Min: €{casino.minDeposit}</div>
              </div>
              <div className="flex flex-col gap-1.5 flex-shrink-0">
                <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                  className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-xs px-4 py-2 rounded-lg transition-colors text-center">
                  Claim
                </a>
                <Link href={`/reviews/${casino.slug}`} className="text-center text-xs text-gray-500 hover:text-[#F5A623]">Review</Link>
              </div>
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
              { label: 'Free Spins Guide', href: '/guides/free-spins-guide' },
              { label: 'Casino Bonus Terms Glossary', href: '/guides/casino-bonus-terms' },
              { label: 'No Wagering Casinos', href: '/no-wagering-casinos' },
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
