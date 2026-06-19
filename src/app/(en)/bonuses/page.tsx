import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casino Bonuses 2026 â No Deposit, Free Spins & Welcome Offers',
  description: 'Find the best casino bonuses in 2026. No deposit bonuses, free spins, welcome offers, and cashback â all tested and reviewed.',
}

const bonusCategories = [
  {
    type: 'no-deposit' as const,
    title: 'No Deposit Bonuses',
    href: '/bonuses/no-deposit',
    description: 'Get bonus funds or free spins without making a deposit. Play for free and keep what you win.',
    icon: 'ð',
    badge: 'Most Popular',
  },
  {
    type: 'free-spins' as const,
    title: 'Free Spins',
    href: '/bonuses/free-spins',
    description: 'Spin the reels for free on real slots. Most free spin bonuses require a deposit.',
    icon: 'ð°',
    badge: null,
  },
  {
    type: 'welcome' as const,
    title: 'Welcome Bonuses',
    href: '/bonuses/welcome',
    description: 'Match bonuses on your first deposit. The most common and highest-value casino bonuses.',
    icon: 'ð°',
    badge: 'Highest Value',
  },
  {
    type: 'cashback' as const,
    title: 'Cashback Offers',
    href: '/bonuses/cashback',
    description: 'Get a percentage of your losses back. The fairest bonus type with the lowest wagering.',
    icon: 'â©ï¸',
    badge: 'Lowest Wagering',
  },
]

export default function BonusesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="mb-10">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Updated April 2026
        </div>
        <h1 className="text-4xl font-black text-white mb-3">Casino Bonuses</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Every bonus on this site has been claimed and tested. We only list bonuses we&apos;d claim ourselves.
        </p>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {bonusCategories.map(cat => {
          const count = casinos.filter(c => c.bonusType === cat.type).length
          return (
            <Link
              key={cat.type}
              href={cat.href}
              className="group bg-[#161820] border border-[#252830] hover:border-[#F5A623]/40 hover:bg-[#1A1C24] rounded-2xl p-6 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{cat.icon}</div>
                {cat.badge && (
                  <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">
                    {cat.badge}
                  </span>
                )}
              </div>
              <h2 className="text-white font-black text-xl mb-2 group-hover:text-[#F5A623] transition-colors">
                {cat.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{cat.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{count} casino{count !== 1 ? 's' : ''} with this offer</span>
                <span className="text-[#F5A623] text-sm font-bold group-hover:translate-x-1 transition-transform">
                  View offers →
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* What to look for */}
      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-8">
        <h2 className="text-white font-black text-xl mb-4">What to look for in a casino bonus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
          <div>
            <div className="text-[#F5A623] font-bold mb-2">Wagering requirements</div>
            <p>The number of times you must play through the bonus before withdrawing. Under 30x is fair. Over 40x and it&apos;s rarely worth claiming.</p>
          </div>
          <div>
            <div className="text-[#F5A623] font-bold mb-2">Time limits</div>
            <p>Most bonuses expire in 7-30 days. Make sure you can complete the wagering in time. Bonuses with 30+ day limits are much more achievable.</p>
          </div>
          <div>
            <div className="text-[#F5A623] font-bold mb-2">Max bet restrictions</div>
            <p>Most bonuses limit your bet to â¬5 while wagering. Exceeding this can void your bonus. Always read the terms before spinning.</p>
          </div>
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
  )
}
