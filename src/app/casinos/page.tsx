import CasinoCard from '@/components/casino/CasinoCard'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Online Casinos 2026 — Tested & Ranked',
  description: 'We tested and ranked the best online casinos for 2026. Every casino is evaluated on bonuses, withdrawals, support, and terms.',
}

export default function CasinosPage() {
  const byRating = [...casinos].sort((a, b) => b.rating - a.rating)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Page header */}
      <div className="mb-10">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Updated April 2026
        </div>
        <h1 className="text-4xl font-black text-white mb-3">
          Best Online Casinos 2026
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Every casino on this list has been tested with real money deposits and withdrawals. Rankings are based on our own testing — not paid placements.
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { value: `${casinos.length}`, label: 'Casinos reviewed' },
          { value: `${casinos.filter(c => c.depositTested).length}`, label: 'Deposit tested' },
          { value: `${casinos.filter(c => c.withdrawalTested).length}`, label: 'Withdrawal tested' },
          { value: `${casinos.filter(c => c.safetyIndex === 'high').length}`, label: 'High safety rating' },
        ].map(s => (
          <div key={s.label} className="bg-[#161820] border border-[#252830] rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-[#F5A623]">{s.value}</div>
            <div className="text-xs text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { label: 'All Casinos', active: true },
          { label: 'No Deposit', active: false },
          { label: 'Free Spins', active: false },
          { label: 'Cashback', active: false },
          { label: 'Low Wagering', active: false },
        ].map(tab => (
          <button
            key={tab.label}
            className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${
              tab.active
                ? 'bg-[#F5A623] text-black border-[#F5A623]'
                : 'bg-[#161820] text-gray-400 border-[#252830] hover:border-[#F5A623]/30 hover:text-[#F5A623]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Casino list */}
      <div className="space-y-4 mb-14">
        {byRating.map((casino, index) => (
          <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
        ))}
      </div>

      {/* Methodology note */}
      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
        <h2 className="text-white font-black text-lg mb-3">How we rank these casinos</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Each casino undergoes a structured review process that includes making a real deposit, claiming and playing through the bonus, requesting a withdrawal, and contacting support. Our final score reflects all of these real-world tests.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Bonus fairness', 'Wagering terms', 'Withdrawal speed', 'Support quality', 'License strength', 'Game selection'].map(c => (
            <span key={c} className="bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs px-3 py-1 rounded-full">
              {c}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}
