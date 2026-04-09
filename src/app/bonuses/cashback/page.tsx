import CasinoCard from '@/components/casino/CasinoCard'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casino Cashback Bonuses 2026 — Best Cashback Offers',
  description: 'Casino cashback bonuses return a percentage of your losses. The fairest bonus type — often with the lowest wagering requirements.',
}

export default function CashbackPage() {
  const cashback = casinos.filter(c => c.bonusType === 'cashback')
  const others = casinos.filter(c => c.bonusType !== 'cashback').slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="mb-10">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Cashback
        </div>
        <h1 className="text-4xl font-black text-white mb-3">Casino Cashback Bonuses 2026</h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-6">
          Cashback returns a percentage of your losses. Unlike welcome bonuses, cashback has minimal wagering — often just 1x. It&apos;s the fairest bonus type in online gambling.
        </p>

        <div className="flex flex-wrap gap-4">
          {[
            { icon: '✓', text: 'Usually 1x wagering or less' },
            { icon: '✓', text: 'Based on your actual losses' },
            { icon: '✓', text: 'No max bet restrictions' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-green-400 font-bold">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {cashback.length > 0 ? (
        <>
          <h2 className="text-xl font-black text-white mb-5">
            Casinos With Cashback Bonuses ({cashback.length})
          </h2>
          <div className="space-y-4 mb-10">
            {cashback.map((casino, index) => (
              <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
            ))}
          </div>
        </>
      ) : null}

      <h2 className="text-xl font-black text-white mb-3">
        Other Top Bonuses Worth Considering
      </h2>
      <p className="text-sm text-gray-500 mb-5">
        If cashback isn&apos;t available in your region, these alternatives have the fairest wagering terms we&apos;ve tested.
      </p>
      <div className="space-y-4 mb-14">
        {others.map((casino, index) => (
          <CasinoCard key={casino.id} casino={casino} rank={(cashback.length) + index + 1} />
        ))}
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-8">
        <h2 className="text-white font-black text-xl mb-4">Cashback vs. welcome bonus: which is better?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
            <div className="text-green-400 font-bold mb-3">Cashback advantages</div>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2"><span className="text-green-400">+</span> 1x wagering (or none at all)</li>
              <li className="flex items-start gap-2"><span className="text-green-400">+</span> No max bet restrictions</li>
              <li className="flex items-start gap-2"><span className="text-green-400">+</span> Applies to all games equally</li>
              <li className="flex items-start gap-2"><span className="text-green-400">+</span> No time pressure to wager</li>
            </ul>
          </div>
          <div>
            <div className="text-red-400 font-bold mb-3">Cashback disadvantages</div>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2"><span className="text-red-400">−</span> Only applies if you lose</li>
              <li className="flex items-start gap-2"><span className="text-red-400">−</span> Usually capped at a lower amount</li>
              <li className="flex items-start gap-2"><span className="text-red-400">−</span> Less headline value than match bonuses</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
