import Link from 'next/link'
import { Casino } from '@/types'

interface CasinoCardProps {
  casino: Casino
  rank: number
}

const safetyConfig = {
  high: { label: 'High Safety', color: 'text-green-400', dot: 'bg-green-400' },
  medium: { label: 'Medium Safety', color: 'text-yellow-400', dot: 'bg-yellow-400' },
  low: { label: 'Low Safety', color: 'text-red-400', dot: 'bg-red-400' },
}

export default function CasinoCard({ casino, rank }: CasinoCardProps) {
  const safety = safetyConfig[casino.safetyIndex]
  const stars = Math.round(casino.rating)

  return (
    <div className="bg-[#161820] border border-[#252830] rounded-2xl p-5 md:p-6 hover:border-[#F5A623]/40 hover:bg-[#1A1C24] transition-all duration-200">

      {/* Top row */}
      <div className="flex items-start gap-4">

        {/* Rank badge */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center">
          <span className="text-[#F5A623] font-black text-sm">#{rank}</span>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 w-14 h-14 bg-[#252830] rounded-xl flex items-center justify-center text-3xl border border-[#2E3040]">
          {casino.logo}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-black text-white text-lg">{casino.name}</h3>
            {casino.tag && (
              <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">
                {casino.tag}
              </span>
            )}
          </div>

          {/* Stars + safety */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(s => (
                <span key={s} className={`text-sm ${s <= stars ? 'text-[#F5A623]' : 'text-gray-700'}`}>★</span>
              ))}
              <span className="text-white font-bold text-sm ml-1">{casino.rating}</span>
              <span className="text-gray-500 text-xs">/{casino.ratingMax}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${safety.dot}`}></span>
              <span className={`text-xs font-medium ${safety.color}`}>{safety.label}</span>
            </div>
          </div>

          <p className="text-gray-400 text-xs">
            <span className="text-gray-500">Best for:</span> {casino.bestFor}
          </p>
        </div>

        {/* Rating + CTA — desktop */}
        <div className="hidden md:flex flex-col items-center gap-3 flex-shrink-0 min-w-[140px]">
          <a
            href={casino.affiliateLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="w-full bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm py-3 px-5 rounded-xl transition-colors text-center"
          >
            Claim Bonus
          </a>
          <p className="text-xs text-gray-600">18+ | Play Responsibly</p>
          <Link
            href={`/reviews/${casino.slug}`}
            className="text-sm text-gray-500 hover:text-[#F5A623] transition-colors"
          >
            Read Review
          </Link>
        </div>
      </div>

      {/* Bonus highlight */}
      <div className="mt-4 bg-[#F5A623]/5 border border-[#F5A623]/10 rounded-xl p-4">
        <div className="text-xs text-gray-500 mb-1">
          {casino.bonusType === 'welcome' ? 'Welcome Bonus' :
           casino.bonusType === 'no-deposit' ? 'No Deposit Bonus' :
           casino.bonusType === 'free-spins' ? 'Free Spins' : 'Cashback'}
        </div>
        <div className="text-[#F5A623] font-black text-lg">{casino.bonus}</div>
      </div>

      {/* Stats row */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
        <div className="bg-[#0D0F14] rounded-lg p-2.5">
          <div className="text-gray-500 mb-0.5">Deposit tested</div>
          <div className={`font-bold ${casino.depositTested ? 'text-green-400' : 'text-gray-500'}`}>
            {casino.depositTested ? 'Yes ✓' : 'Pending'}
          </div>
        </div>
        <div className="bg-[#0D0F14] rounded-lg p-2.5">
          <div className="text-gray-500 mb-0.5">Withdrawal tested</div>
          <div className={`font-bold ${casino.withdrawalTested ? 'text-green-400' : 'text-yellow-400'}`}>
            {casino.withdrawalTested ? 'Yes ✓' : 'Pending'}
          </div>
        </div>
        <div className="bg-[#0D0F14] rounded-lg p-2.5">
          <div className="text-gray-500 mb-0.5">Support</div>
          <div className="font-bold text-white">{casino.supportType}</div>
        </div>
        <div className="bg-[#0D0F14] rounded-lg p-2.5">
          <div className="text-gray-500 mb-0.5">Wagering</div>
          <div className={`font-bold ${casino.wagering <= 25 ? 'text-green-400' : casino.wagering <= 35 ? 'text-yellow-400' : 'text-red-400'}`}>
            {casino.wagering}x
          </div>
        </div>
        <div className="bg-[#0D0F14] rounded-lg p-2.5">
          <div className="text-gray-500 mb-0.5">Min deposit</div>
          <div className="font-bold text-white">${casino.minDeposit}</div>
        </div>
      </div>

      {/* Verdict */}
      <div className="mt-4 text-xs text-gray-400 leading-relaxed">
        <span className="text-[#F5A623] font-bold">Verdict: </span>
        {casino.verdict}
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden mt-4 flex gap-3">
        <a
          href={casino.affiliateLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex-1 bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm py-3 rounded-xl transition-colors text-center"
        >
          Claim Bonus
        </a>
        <Link
          href={`/reviews/${casino.slug}`}
          className="border border-[#252830] text-gray-400 hover:text-white hover:border-gray-400 text-sm px-4 py-3 rounded-xl transition-colors"
        >
          Review
        </Link>
      </div>

    </div>
  )
}
