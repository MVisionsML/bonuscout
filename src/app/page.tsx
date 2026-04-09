import Link from 'next/link'
import CasinoCard from '@/components/casino/CasinoCard'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Casino Bonuses & Reviews 2026 | BonusScout',
  description: 'We test casinos for bonuses, withdrawals, support, and terms before we rank them. Independent casino bonus reviews updated monthly.',
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#161820] border-b border-[#252830] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            Updated April 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
            Best Online Casino Reviews<br />
            <span className="text-[#F5A623]">&amp; Bonus Offers</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            We test casinos for bonuses, withdrawals, support, and terms before we rank them.
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-10">
            {[
              { icon: '💳', label: 'Real deposit testing' },
              { icon: '⚡', label: 'Withdrawal checks' },
              { icon: '📋', label: 'Terms reviewed manually' },
              { icon: '🔄', label: 'Updated monthly' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Bonus type pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'No Deposit Bonuses', href: '/bonuses/no-deposit' },
              { label: 'Free Spins', href: '/bonuses/free-spins' },
              { label: 'Welcome Bonuses', href: '/bonuses/welcome' },
              { label: 'Cashback Offers', href: '/bonuses/cashback' },
            ].map(b => (
              <Link
                key={b.label}
                href={b.href}
                className="bg-[#252830] hover:bg-[#2E3040] border border-[#2E3040] hover:border-[#F5A623]/30 text-gray-300 hover:text-[#F5A623] text-sm font-medium px-4 py-2 rounded-full transition-all"
              >
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Methodology note */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-4 mb-8 flex items-start gap-3">
          <span className="text-[#F5A623] font-bold text-sm mt-0.5">✓</span>
          <p className="text-sm text-gray-400 leading-relaxed">
            <span className="text-white font-bold">Our rankings are not bought.</span>{' '}
            No casino can pay for a higher position. Every rating reflects what we found during testing —
            including the things casinos would rather we didn&apos;t mention.
          </p>
        </div>

        {/* How we rank */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-10">
          <h2 className="text-white font-black text-lg mb-4">How we rank casinos</h2>
          <p className="text-gray-400 text-sm mb-4">
            We score each casino across six categories. Every score is based on our own testing — not what the casino tells us about itself.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Bonus value', 'Wagering fairness', 'Withdrawal speed', 'Payment options', 'Support quality', 'Overall trust'].map(c => (
              <span key={c} className="bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs px-3 py-1 rounded-full font-medium">
                {c}
              </span>
            ))}
          </div>
          <Link href="/methodology" className="text-[#F5A623] text-sm font-bold hover:underline">
            See full methodology →
          </Link>
        </div>

        {/* Casino list */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-white">
            Best Casino Bonuses — April 2026
          </h2>
          <Link href="/casinos" className="text-[#F5A623] text-sm font-bold hover:underline">
            View all →
          </Link>
        </div>

        <div className="space-y-4 mb-14">
          {casinos.map((casino, index) => (
            <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-2">Looking for no deposit bonuses?</h2>
          <p className="text-gray-400 mb-6">Play for free without risking your own money at verified, licensed casinos.</p>
          <Link
            href="/bonuses/no-deposit"
            className="inline-block bg-[#F5A623] hover:bg-[#E09520] text-black font-black px-8 py-4 rounded-xl transition-colors text-lg"
          >
            See No Deposit Bonuses →
          </Link>
        </div>

      </div>
    </div>
  )
}
