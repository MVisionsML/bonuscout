import Link from 'next/link'
import CasinoCard from '@/components/casino/CasinoCard'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Online Casinos 2026 — Reviewed from Published Terms & Licensing',
  description: 'Every casino on this list is reviewed from its published Terms & Conditions, cashier page and licensing records. Bonus terms, wagering, and payment methods broken down side by side.',
}

export default function CasinosPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Online Casinos</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
          Best Online Casinos 2026
        </h1>
        <p className="text-gray-400 max-w-2xl leading-relaxed">
          Every casino below is evaluated against BonusCout&apos;s published criteria — licence verification, bonus terms, payment methods, game library and third-party reputation. We list operators we cannot monetise alongside those we can.
        </p>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-4 mb-8 flex items-start gap-3">
        <span className="text-[#F5A623] font-bold mt-0.5">✓</span>
        <p className="text-sm text-gray-400">
          <span className="text-white font-bold">Our rankings are not bought.</span>{' '}
          No casino pays for position. Every rating reflects our published evaluation criteria — including scoring points casinos would rather we didn&apos;t highlight.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {['All', 'Highest Bonus', 'Lowest Wagering', 'Crypto', 'MGA Licensed', 'Cashback'].map((f, i) => (
          <button key={f} className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            i === 0
              ? 'bg-[#F5A623] text-black border-[#F5A623] font-bold'
              : 'bg-[#161820] text-gray-400 border-[#252830] hover:border-[#F5A623]/40 hover:text-[#F5A623]'
          }`}>{f}</button>
        ))}
      </div>

      <div className="space-y-4">
        {casinos.map((casino, index) => (
          <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
        ))}
      </div>
    </div>
  )
}
