import CasinoCard from '@/components/casino/CasinoCard'
import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'No Deposit Casino Bonus 2026 â Free Bonus Without Depositing | BonusScout',
  description: 'Best no deposit casino bonuses 2026. Get free bonus funds or free spins just for registering â no deposit required. All offers verified and tested. Updated May 2026.',
}

const faqs = [
  { q: 'Can I really withdraw winnings from a no deposit bonus?', a: 'Yes, but only after meeting the wagering requirements. There is also almost always a maximum withdrawal cap (often â¬50ââ¬100) regardless of how much you actually won.' },
  { q: 'Do I have to verify my identity?', a: 'Before any first withdrawal, every reputable casino runs a KYC check (ID and proof of address). This protects against duplicate registrations.' },
  { q: 'How high is the wagering on no deposit bonuses?', a: 'Usually between 35x and 50x â higher than on welcome bonuses because the casino is taking more risk. Anything under 35x is considered fair.' },
  { q: 'Do I need a bonus code?', a: 'Some casinos require a code at registration. When that is the case, you will find the code in our individual casino reviews.' },
]

export default function NoDepositPage() {
  const noDeposit = casinos.filter(c => c.bonusType === 'no-deposit')
  const others = casinos.filter(c => c.bonusType !== 'no-deposit')

  return (
    <>
    <FAQSchema faqs={faqs} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="mb-10">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          No Deposit
        </div>
        <h1 className="text-4xl font-black text-white mb-3">No Deposit Bonuses</h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-6">
          Play with real money without risking your own. These bonuses are credited to your account just for registering â no deposit required.
        </p>
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-4 flex items-start gap-3">
          <span className="text-[#F5A623] font-bold mt-0.5">!</span>
          <p className="text-sm text-gray-400">
            <span className="text-white font-bold">Important:</span> No deposit bonuses almost always have wagering requirements. Read the terms before playing. We break down the full conditions in each review below.
          </p>
        </div>
      </div>

      {noDeposit.length > 0 ? (
        <>
          <h2 className="text-xl font-black text-white mb-5">
            Casinos With No Deposit Bonuses ({noDeposit.length})
          </h2>
          <div className="space-y-4 mb-10">
            {noDeposit.map((casino, index) => (
              <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
            ))}
          </div>
        </>
      ) : (
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-8 text-center mb-10">
          <p className="text-gray-400">No dedicated no deposit bonuses right now. Check back soon â we update monthly.</p>
        </div>
      )}

      {/* Also consider */}
      <div className="mb-14">
        <h2 className="text-xl font-black text-white mb-5">
          Also Consider â Welcome Bonuses With Free Spins
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          These casinos don&apos;t offer a standalone no deposit bonus, but their welcome packages include free spins that work similarly.
        </p>
        <div className="space-y-4">
          {others.slice(0, 3).map((casino, index) => (
            <CasinoCard key={casino.id} casino={casino} rank={noDeposit.length + index + 1} />
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-8">
        <h2 className="text-white font-black text-xl mb-6">How no deposit bonuses work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Register', desc: 'Create a free account. No payment method needed at this stage.' },
            { step: '2', title: 'Receive bonus', desc: 'Bonus funds or free spins are credited automatically. Some require a promo code.' },
            { step: '3', title: 'Play & withdraw', desc: 'Complete the wagering requirement, then withdraw to your preferred method.' },
          ].map(s => (
            <div key={s.step} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-[#F5A623] font-black text-sm">{s.step}</span>
              </div>
              <div>
                <div className="text-white font-bold mb-1">{s.title}</div>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mt-10 mb-10">
        <h2 className="text-white font-black text-xl mb-4">No deposit bonuses â what you actually need to know</h2>
        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>A no deposit bonus is a small giveaway â typically â¬5 to â¬25 in cash or 10 to 50 free spins â that a casino hands new players just for opening an account. Unlike a classic welcome bonus, you do not put any of your own money down. The purpose of this marketing tool is straightforward: casinos want to walk you through KYC and turn you into a long-term customer. That is exactly why they offset the risk with strict conditions that most players underestimate.</p>

          <p>The full step-by-step process involves more stops than most people think. First, pick a licensed casino from our list â CuraÃ§ao or MGA should be the minimum standard. At registration you must use real details: a fake name or made-up date of birth leads to a KYC block later and to confiscation of any winnings. After email or SMS verification the bonus is either credited automatically or you have to enter a bonus code in the cashier â both usually within 24 hours, otherwise the offer expires.</p>

          <p>Wagering on no deposit bonuses typically ranges from 35x to 60x â higher than on welcome bonuses because the risk for the casino is bigger. On a â¬10 bonus at 40x wagering you turn over â¬400. Watch the maximum withdrawal too: almost always your payout is capped at â¬50 to â¬100, regardless of whether you won â¬500 or â¬5,000. Players who do not know this in advance get an ugly surprise. On top of that there is almost always a max bet of â¬1 to â¬5 per spin and a game-exclusion list â live casino and progressive jackpots usually do not count.</p>

          <p>The biggest mistakes when claiming no deposit offers: first, breaking the max bet â a single â¬6 spin can void the entire bonus. Second, playing on excluded titles without checking the terms. Third, multiple registrations from the same household â casinos detect IP addresses and device fingerprints and shut down duplicate accounts without warning. Fourth, ignoring the time window: you usually have 7 to 30 days to clear wagering, otherwise the bonus and winnings expire. Fifth, only submitting KYC documents after requesting a withdrawal â uploading ID and proof of address at registration saves days of waiting later.</p>

          <p>Tips to maximize real value: pick bonuses with low wagering (under 40x) and a high max-withdrawal cap (â¬100+ where possible). Play only slots with 96% RTP or higher â every percentage point feeds directly into your expected return. Stick to the low end of the allowed bet range to reduce variance. Read the &quot;bonus abuse clause&quot; in the terms â it lets casinos label &quot;suspicious&quot; play (such as consistent low-variance roulette) as bonus abuse. Players who get all of this right realistically extract â¬30 to â¬80 of real money out of a â¬10 bonus â not guaranteed, but statistically reasonable.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-5">Frequently asked questions</h2>
        <div className="space-y-5 text-sm">
          {faqs.map(f => (
            <div key={f.q}>
              <div className="text-white font-bold mb-1">{f.q}</div>
              <p className="text-gray-400 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
        <h2 className="font-black text-white mb-4">Related pages</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Welcome Bonuses', href: '/bonuses/welcome' },
            { label: 'Free Spins', href: '/bonuses/free-spins' },
            { label: 'Lowest Wagering Casinos', href: '/lowest-wagering-casinos' },
            { label: 'All Bonuses', href: '/bonuses' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 text-sm font-bold text-white hover:text-[#F5A623] transition-all">
              {item.label} →
            </Link>
          ))}
        </div>
      </div>

        {/* Related categories & trust */}
        <div className="bg-[#0D0F14] border border-[#252830] rounded-xl p-6 mt-12">
          <h2 className="font-black text-white text-sm mb-3 uppercase tracking-wide">Related categories &amp; resources</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <Link href="/best-casino-bonus" className="text-[#F5A623] hover:underline">Best Casino Bonus Ã¢â â</Link>
            <Link href="/no-deposit-bonus" className="text-[#F5A623] hover:underline">No Deposit Bonuses Ã¢â â</Link>
            <Link href="/crypto-casino-bonus" className="text-[#F5A623] hover:underline">Crypto Casinos Ã¢â â</Link>
            <Link href="/bonuses/cashback" className="text-[#F5A623] hover:underline">Cashback Casinos Ã¢â â</Link>
            <Link href="/lowest-wagering-casinos" className="text-[#F5A623] hover:underline">Low Wagering Ã¢â â</Link>
            <Link href="/fast-withdrawal-casinos" className="text-[#F5A623] hover:underline">Fast Withdrawals Ã¢â â</Link>
            <Link href="/guides/wagering-requirements-explained" className="text-[#F5A623] hover:underline">Wagering Explained Ã¢â â</Link>
            <Link href="/how-we-rate" className="text-[#F5A623] hover:underline">How We Rate Ã¢â â</Link>
            <Link href="/responsible-gambling" className="text-red-400 hover:underline">Responsible Gambling Ã¢â â</Link>
          </div>
        </div>
    </div>
    </>
  )
}
