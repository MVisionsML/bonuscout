import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Casino Games 2026 — Play Slots for Free | BonusScout',
  description: 'Play free casino games without risking real money. Find the best casinos offering free play mode for slots, roulette and more.',
}

export default function FreeGamesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Free Games</span>
      </div>

      <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Free Casino Games</h1>
        <p className="text-gray-400 text-lg max-w-2xl">Play slots and casino games for free — no deposit, no registration required. Test games before playing for real money.</p>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-10">
        <h2 className="font-black text-white mb-3">Why play free casino games?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
          <div><div className="font-bold text-white mb-1">Learn the game</div>Understand mechanics, bonus features and volatility before risking real money.</div>
          <div><div className="font-bold text-white mb-1">Test strategies</div>Try different betting approaches without financial risk.</div>
          <div><div className="font-bold text-white mb-1">Entertainment</div>Enjoy casino games purely for fun with no financial pressure.</div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-white mb-6">Casinos with Free Play Mode</h2>
      <div className="space-y-4 mb-10">
        {casinos.slice(0, 10).map((casino) => (
          <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-5 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl">{casino.logo}</div>
              <div className="flex-1">
                <div className="font-black text-white mb-1">{casino.name}</div>
                <div className="text-xs text-gray-500">{casino.games.toLocaleString()}+ games · {casino.software.slice(0,2).join(', ')}</div>
              </div>
              <div className="flex flex-col gap-2">
                <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                  className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-5 py-2.5 rounded-lg transition-colors text-center">
                  Play Free
                </a>
                <Link href={`/reviews/${casino.slug}`} className="text-center text-xs text-gray-500 hover:text-[#F5A623]">Review</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
        <h2 className="font-black text-white mb-4">Looking for real money bonuses?</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'No Deposit Bonuses', href: '/bonuses/no-deposit' },
            { label: 'Free Spins Offers', href: '/bonuses/free-spins' },
            { label: 'Best Casino Bonus', href: '/best-casino-bonus' },
            { label: 'All Casino Reviews', href: '/reviews' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 text-sm font-bold text-white hover:text-[#F5A623] transition-all">
              {item.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
