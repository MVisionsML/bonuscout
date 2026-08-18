import Link from 'next/link'
import CasinoCard from '@/components/casino/CasinoCard'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Spins Casino Bonuses 2026 — Reviewed Free Spin Offers',
  description: 'The best free spins casino bonuses in 2026. Spin for free on real slots at licensed casinos — offers compiled from each operator&apos;s published bonus terms.',
}

export default function FreeSpinsPage() {
  const freeSpins = casinos.filter(c => c.bonusType === 'free-spins')
  const withSpins = casinos.filter(c => c.bonus.toLowerCase().includes('spin'))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="mb-10">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Free Spins
        </div>
        <h1 className="text-4xl font-black text-white mb-3">Free Spins Bonuses 2026</h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-6">
          Free spins let you play real slot rounds at no bonus cost. In our current index, none of the 19 operators run a <em>standalone</em> free-spin promotion — free spins ship as part of welcome packages instead. The list below shows every welcome package that includes free spins, with spin count and wagering compiled from each operator&apos;s published bonus terms.
        </p>
      </div>

      {freeSpins.length > 0 && (
        <>
          <h2 className="text-xl font-black text-white mb-5">
            Dedicated Free Spin Offers ({freeSpins.length})
          </h2>
          <div className="space-y-4 mb-10">
            {freeSpins.map((casino, index) => (
              <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
            ))}
          </div>
        </>
      )}

      {withSpins.length > 0 && (
        <>
          <h2 className="text-xl font-black text-white mb-3">
            Welcome Bonuses That Include Free Spins ({withSpins.length})
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            These bonuses include free spins as part of a deposit match package.
          </p>
          <div className="space-y-4 mb-14">
            {withSpins.map((casino, index) => (
              <CasinoCard key={casino.id} casino={casino} rank={(freeSpins.length || 0) + index + 1} />
            ))}
          </div>
        </>
      )}

      {freeSpins.length === 0 && withSpins.length === 0 && (
        <div className="space-y-4 mb-14">
          {casinos.map((casino, index) => (
            <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
          ))}
        </div>
      )}

      {/* What free spins really mean */}
      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-8">
        <h2 className="text-white font-black text-xl mb-4">What free spins actually give you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
          <div>
            <div className="text-[#F5A623] font-bold mb-2">The math</div>
            <p>Most free spins are valued at €0.10 each. 100 free spins = €10 in bonus value. After 30x wagering, you need to wager €300 to withdraw. Plan accordingly.</p>
          </div>
          <div>
            <div className="text-[#F5A623] font-bold mb-2">No wagering spins</div>
            <p>Some casinos offer &quot;no wagering&quot; free spins where winnings are instantly withdrawable. These are rare but far more valuable — we highlight them clearly.</p>
          </div>
        </div>
      </div>

        {/* Related categories & trust */}
        <div className="bg-[#0D0F14] border border-[#252830] rounded-xl p-6 mt-12">
          <h2 className="font-black text-white text-sm mb-3 uppercase tracking-wide">Related categories &amp; resources</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <Link href="/best-casino-bonus" className="text-[#F5A623] hover:underline">Best Casino Bonus →</Link>
            <Link href="/no-deposit-bonus" className="text-[#F5A623] hover:underline">No Deposit Bonuses →</Link>
            <Link href="/crypto-casino-bonus" className="text-[#F5A623] hover:underline">Crypto Casinos →</Link>
            <Link href="/bonuses/cashback" className="text-[#F5A623] hover:underline">Cashback Casinos →</Link>
            <Link href="/lowest-wagering-casinos" className="text-[#F5A623] hover:underline">Low Wagering →</Link>
            <Link href="/fast-withdrawal-casinos" className="text-[#F5A623] hover:underline">Fast Withdrawals →</Link>
            <Link href="/guides/wagering-requirements-explained" className="text-[#F5A623] hover:underline">Wagering Explained →</Link>
            <Link href="/how-we-rate" className="text-[#F5A623] hover:underline">How We Rate →</Link>
            <Link href="/responsible-gambling" className="text-red-400 hover:underline">Responsible Gambling →</Link>
          </div>
        </div>
    </div>
  )
}
