import CasinoCard from '@/components/casino/CasinoCard'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'No Deposit Casino Bonuses 2026 — Free Bonus Without Depositing',
  description: 'Claim a casino bonus without making a deposit. Play with real money for free at verified, licensed casinos. Updated April 2026.',
}

export default function NoDepositPage() {
  const noDeposit = casinos.filter(c => c.bonusType === 'no-deposit')
  const others = casinos.filter(c => c.bonusType !== 'no-deposit')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="mb-10">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          No Deposit
        </div>
        <h1 className="text-4xl font-black text-white mb-3">No Deposit Bonuses</h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-6">
          Play with real money without risking your own. These bonuses are credited to your account just for registering — no deposit required.
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
          <p className="text-gray-400">No dedicated no deposit bonuses right now. Check back soon — we update monthly.</p>
        </div>
      )}

      {/* Also consider */}
      <div className="mb-14">
        <h2 className="text-xl font-black text-white mb-5">
          Also Consider — Welcome Bonuses With Free Spins
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

    </div>
  )
}
