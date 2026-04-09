import CasinoCard from '@/components/casino/CasinoCard'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Welcome Bonuses 2026 — Top Casino Deposit Bonuses',
  description: 'The best casino welcome bonuses in 2026. Match bonuses, deposit bonuses, and first deposit offers — ranked by value and fairness.',
}

export default function WelcomeBonusPage() {
  const welcome = casinos.filter(c => c.bonusType === 'welcome')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="mb-10">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Welcome Bonuses
        </div>
        <h1 className="text-4xl font-black text-white mb-3">Best Welcome Bonuses 2026</h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-6">
          A welcome bonus matches your first deposit — usually 100%, up to a set limit. We rank these by actual value after wagering, not headline numbers.
        </p>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-5 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <div className="text-[#F5A623] font-bold mb-1">Average wagering</div>
          <div className="text-white font-black text-2xl">
            {Math.round(welcome.reduce((sum, c) => sum + c.wagering, 0) / welcome.length)}x
          </div>
          <div className="text-gray-500 text-xs">across {welcome.length} casinos</div>
        </div>
        <div>
          <div className="text-[#F5A623] font-bold mb-1">Lowest wagering</div>
          <div className="text-white font-black text-2xl">
            {Math.min(...welcome.map(c => c.wagering))}x
          </div>
          <div className="text-gray-500 text-xs">{welcome.find(c => c.wagering === Math.min(...welcome.map(x => x.wagering)))?.name}</div>
        </div>
        <div>
          <div className="text-[#F5A623] font-bold mb-1">Deposit tested</div>
          <div className="text-white font-black text-2xl">
            {welcome.filter(c => c.depositTested).length}/{welcome.length}
          </div>
          <div className="text-gray-500 text-xs">casinos verified</div>
        </div>
      </div>

      <h2 className="text-xl font-black text-white mb-5">
        Welcome Bonuses Ranked ({welcome.length})
      </h2>
      <div className="space-y-4 mb-14">
        {welcome.map((casino, index) => (
          <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
        ))}
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-8">
        <h2 className="text-white font-black text-xl mb-4">Welcome bonus checklist</h2>
        <ul className="space-y-3 text-sm text-gray-400">
          {[
            'Check the wagering requirement — under 30x is fair, over 40x is rarely worth it',
            'Look for the minimum deposit required to unlock the bonus',
            'Check the maximum bet while wagering (usually €5)',
            'Find out which games contribute 100% to wagering — slots almost always do, table games often don\'t',
            'Note the bonus expiry date — 7 days is tight, 30 days is comfortable',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#F5A623] mt-0.5 flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}
