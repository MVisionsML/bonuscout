import { casinos } from '@/data/casinos'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { ReviewSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/SchemaMarkup'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const casino = casinos.find(c => c.slug === slug)
  if (!casino) return {}
  return {
    title: `${casino.name} Review 2026 — Bonus, Wagering & Safety | BonusScout`,
    description: `Independent ${casino.name} review. We tested the bonus, withdrawals and support. ${casino.bonus}. Wagering: ${casino.wagering}x. Is it worth it?`,
    alternates: { canonical: `https://www.bonuscout.com/reviews/${casino.slug}` }
  }
}

export async function generateStaticParams() {
  return casinos.map(c => ({ slug: c.slug }))
}

const faqs = (casino: typeof casinos[0]) => [
  {
    q: `Is ${casino.name} legit?`,
    a: `Yes. ${casino.name} holds licenses from ${casino.licenses.join(' and ')} and has been operating since ${casino.founded}. It is a legitimate and regulated online casino.`
  },
  {
    q: `What is the ${casino.name} welcome bonus?`,
    a: `${casino.name} currently offers ${casino.bonus} with a ${casino.wagering}x wagering requirement and a minimum deposit of $${casino.minDeposit}.`
  },
  {
    q: `How fast are ${casino.name} withdrawals?`,
    a: `${casino.name} processes withdrawals in ${casino.withdrawalTime}. ${casino.withdrawalTested ? 'Our team has tested and verified this.' : 'Withdrawal testing is pending.'}`
  }
]

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params
  const casino = casinos.find(c => c.slug === slug)
  if (!casino) notFound()

  const stars = Math.round(casino.rating)
  const reviewFaqs = faqs(casino)

  return (
    <>
      <ReviewSchema casino={casino} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.bonuscout.com' },
        { name: 'Reviews', url: 'https://www.bonuscout.com/reviews' },
        { name: `${casino.name} Review`, url: `https://www.bonuscout.com/reviews/${casino.slug}` }
      ]} />
      <FAQSchema faqs={reviewFaqs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/reviews" className="hover:text-[#F5A623]">Reviews</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">{casino.name}</span>
        </div>

        {/* Header */}
        <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-6">
          <div className="flex items-start gap-6 flex-wrap">
            <div className="w-20 h-20 bg-[#252830] rounded-xl flex items-center justify-center text-4xl border border-[#2E3040] flex-shrink-0">
              {casino.logo}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-2xl md:text-3xl font-black text-white">{casino.name} Review</h1>
                <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-1 rounded-full font-bold">
                  Verified {new Date().getFullYear()}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className={`text-xl ${s <= stars ? 'text-[#F5A623]' : 'text-gray-700'}`}>★</span>
                ))}
                <span className="text-2xl font-black text-white ml-1">{casino.rating}</span>
                <span className="text-gray-500">/{casino.ratingMax}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-sm px-3 py-1 rounded-full font-medium">
                  ✓ High Safety
                </span>
                {casino.licenses.map(l => (
                  <span key={l} className="bg-[#252830] text-gray-400 border border-[#2E3040] text-sm px-3 py-1 rounded-full font-medium">
                    {l}
                  </span>
                ))}
              </div>

              <div className="bg-[#F5A623]/5 border border-[#F5A623]/10 rounded-xl p-4 mb-4">
                <div className="text-xs text-gray-500 mb-1">Current Offer</div>
                <div className="text-[#F5A623] font-black text-xl">{casino.bonus}</div>
              </div>

              <a
                href={casino.affiliateLink}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-[#F5A623] hover:bg-[#E09520] text-black font-black px-8 py-3 rounded-xl transition-colors"
              >
                Claim Bonus at {casino.name} →
              </a>
              <p className="text-xs text-gray-600 mt-2">18+ | Play responsibly | T&C apply</p>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {[
            { label: 'Founded', value: casino.founded },
            { label: 'Min Deposit', value: `$${casino.minDeposit}` },
            { label: 'Withdrawal', value: casino.withdrawalTime },
            { label: 'Wagering', value: `${casino.wagering}x` },
            { label: 'Games', value: `${casino.games.toLocaleString()}+` },
          ].map(s => (
            <div key={s.label} className="bg-[#161820] border border-[#252830] rounded-xl p-4 text-center">
              <div className="text-xl font-black text-white">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tested stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: 'Deposit tested', value: casino.depositTested ? 'Yes ✓' : 'Pending', ok: casino.depositTested },
            { label: 'Withdrawal tested', value: casino.withdrawalTested ? 'Yes ✓' : 'Pending', ok: casino.withdrawalTested },
            { label: 'Support', value: casino.supportType, ok: true },
          ].map(s => (
            <div key={s.label} className="bg-[#161820] border border-[#252830] rounded-xl p-4 text-center">
              <div className={`font-black ${s.ok ? 'text-green-400' : 'text-yellow-400'}`}>{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Verdict */}
        <div className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-6 mb-6">
          <h2 className="font-black text-white mb-3 flex items-center gap-2">
            <span className="text-[#F5A623]">◆</span> Our Verdict
          </h2>
          <p className="text-gray-400 leading-relaxed">{casino.verdict}</p>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#161820] border border-green-500/20 rounded-xl p-6">
            <h3 className="font-black text-green-400 mb-4">✓ Pros</h3>
            <ul className="space-y-2">
              {casino.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-green-400 font-bold mt-0.5">+</span> {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#161820] border border-red-500/20 rounded-xl p-6">
            <h3 className="font-black text-red-400 mb-4">✗ Cons</h3>
            <ul className="space-y-2">
              {casino.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-red-400 font-bold mt-0.5">−</span> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Software */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-6">
          <h2 className="font-black text-white mb-4">Software Providers</h2>
          <div className="flex flex-wrap gap-2">
            {casino.software.map(s => (
              <span key={s} className="bg-[#252830] text-gray-300 border border-[#2E3040] px-3 py-1.5 rounded-lg text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-6">
          <h2 className="font-black text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {reviewFaqs.map((faq, i) => (
              <div key={i} className={i > 0 ? 'border-t border-[#252830] pt-5' : ''}>
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-2">Ready to claim your bonus?</h2>
          <p className="text-[#F5A623] font-bold text-lg mb-6">{casino.bonus}</p>
          <a
            href={casino.affiliateLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-[#F5A623] hover:bg-[#E09520] text-black font-black px-10 py-4 rounded-xl transition-colors text-lg"
          >
            Visit {casino.name} →
          </a>
          <p className="text-xs text-gray-600 mt-3">18+ | T&C apply | Play responsibly</p>
        </div>

      </div>
    </>
  )
}
