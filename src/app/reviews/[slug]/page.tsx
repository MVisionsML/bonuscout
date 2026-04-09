import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return casinos.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const casino = casinos.find(c => c.slug === slug)
  if (!casino) return {}
  return {
    title: `${casino.name} Review 2026 — Bonus, Withdrawal & Rating`,
    description: `Our honest ${casino.name} review. We tested the ${casino.bonus} bonus, withdrawal speed, and support. Rating: ${casino.rating}/${casino.ratingMax}.`,
  }
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params
  const casino = casinos.find(c => c.slug === slug)
  if (!casino) notFound()

  const stars = Math.round(casino.rating)
  const safetyColor = casino.safetyIndex === 'high' ? 'text-green-400' : casino.safetyIndex === 'medium' ? 'text-yellow-400' : 'text-red-400'
  const wageringColor = casino.wagering <= 25 ? 'text-green-400' : casino.wagering <= 35 ? 'text-yellow-400' : 'text-red-400'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span>/</span>
        <Link href="/reviews" className="hover:text-[#F5A623]">Reviews</Link>
        <span>/</span>
        <span className="text-gray-300">{casino.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex items-start gap-5 mb-6">
          <div className="w-16 h-16 bg-[#252830] rounded-xl flex items-center justify-center text-4xl border border-[#2E3040] flex-shrink-0">
            {casino.logo}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl font-black text-white">{casino.name} Review</h1>
              {casino.tag && (
                <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">
                  {casino.tag}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className={`text-lg ${s <= stars ? 'text-[#F5A623]' : 'text-gray-700'}`}>★</span>
                ))}
              </div>
              <span className="text-white font-black text-xl">{casino.rating}</span>
              <span className="text-gray-500 text-sm">/ {casino.ratingMax}</span>
              <span className={`text-sm font-bold ${safetyColor}`}>
                {casino.safetyIndex === 'high' ? '● High Safety' : casino.safetyIndex === 'medium' ? '● Medium Safety' : '● Low Safety'}
              </span>
            </div>
            <p className="text-gray-400 text-sm">Founded {casino.founded} · {casino.licenses.join(', ')} licensed · {casino.games.toLocaleString()}+ games</p>
          </div>
        </div>

        {/* Bonus highlight */}
        <div className="bg-[#F5A623]/5 border border-[#F5A623]/20 rounded-xl p-4 mb-5">
          <div className="text-xs text-gray-500 mb-1">Current Bonus Offer</div>
          <div className="text-[#F5A623] font-black text-2xl mb-1">{casino.bonus}</div>
          <div className="text-xs text-gray-500">Wagering: <span className={`font-bold ${wageringColor}`}>{casino.wagering}x</span> · Min deposit: <span className="text-white font-bold">${casino.minDeposit}</span></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={casino.affiliateLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex-1 bg-[#F5A623] hover:bg-[#E09520] text-black font-black py-4 px-6 rounded-xl transition-colors text-center"
          >
            Claim Bonus at {casino.name}
          </a>
          <p className="text-xs text-gray-600 text-center sm:text-left self-center">18+ | T&Cs apply | Play Responsibly</p>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Withdrawal time', value: casino.withdrawalTime, color: 'text-white' },
          { label: 'Min deposit', value: `$${casino.minDeposit}`, color: 'text-white' },
          { label: 'Support', value: casino.supportType, color: 'text-white' },
          { label: 'Wagering', value: `${casino.wagering}x`, color: wageringColor },
          { label: 'Deposit tested', value: casino.depositTested ? 'Yes ✓' : 'Pending', color: casino.depositTested ? 'text-green-400' : 'text-gray-500' },
          { label: 'Withdrawal tested', value: casino.withdrawalTested ? 'Yes ✓' : 'Pending', color: casino.withdrawalTested ? 'text-green-400' : 'text-yellow-400' },
          { label: 'Games', value: `${casino.games.toLocaleString()}+`, color: 'text-white' },
          { label: 'License', value: casino.licenses.join(', '), color: 'text-white' },
        ].map(stat => (
          <div key={stat.label} className="bg-[#161820] border border-[#252830] rounded-xl p-3">
            <div className="text-gray-500 text-xs mb-1">{stat.label}</div>
            <div className={`font-bold text-sm ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Verdict */}
      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 mb-8">
        <h2 className="text-white font-black text-xl mb-3">Our Verdict</h2>
        <p className="text-gray-300 leading-relaxed">{casino.verdict}</p>
      </div>

      {/* Pros / Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6">
          <h3 className="text-green-400 font-black text-lg mb-4">Pros</h3>
          <ul className="space-y-2">
            {casino.pros.map(pro => (
              <li key={pro} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-0.5 flex-shrink-0">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6">
          <h3 className="text-red-400 font-black text-lg mb-4">Cons</h3>
          <ul className="space-y-2">
            {casino.cons.map(con => (
              <li key={con} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-red-400 mt-0.5 flex-shrink-0">−</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Software */}
      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 mb-8">
        <h2 className="text-white font-black text-xl mb-4">Games &amp; Software</h2>
        <p className="text-gray-400 text-sm mb-4">
          {casino.name} offers over {casino.games.toLocaleString()} games powered by {casino.software.join(', ')}.
        </p>
        <div className="flex flex-wrap gap-2">
          {casino.software.map(s => (
            <span key={s} className="bg-[#252830] text-gray-300 text-xs px-3 py-1.5 rounded-lg font-medium">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-black text-white mb-2">Ready to claim the {casino.name} bonus?</h2>
        <p className="text-gray-400 mb-6 text-sm">{casino.bonus} · {casino.wagering}x wagering</p>
        <a
          href={casino.affiliateLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-block bg-[#F5A623] hover:bg-[#E09520] text-black font-black px-10 py-4 rounded-xl transition-colors text-lg"
        >
          Visit {casino.name} →
        </a>
        <p className="text-xs text-gray-600 mt-3">18+ · Gambling involves risk · Terms apply</p>
      </div>

    </div>
  )
}
