import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Rate Casinos — Our Testing Methodology | BonusScout',
  description: 'How BonusScout tests and rates online casinos. Real deposit testing, withdrawal checks, bonus term analysis and support quality scoring.',
}

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Methodology</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-white mb-4">How We Rate Casinos</h1>
      <p className="text-gray-400 text-lg mb-10 leading-relaxed">
        Every casino on BonusScout has gone through the same process. No exceptions. Here&apos;s exactly what we test and how we score it.
      </p>

      <div className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-5 mb-10">
        <p className="text-sm text-gray-400">
          <span className="text-white font-bold">Our rankings are not bought.</span>{' '}
          No casino can pay for a higher position. Every rating reflects our own testing — including the things casinos would rather we didn&apos;t mention. We earn commission only when players sign up through our links — not for favorable reviews.
        </p>
      </div>

      <div className="space-y-8">
        {[
          {
            icon: '💳', title: 'Deposit Process', weight: '15%',
            desc: 'We deposit using multiple methods — Skrill, Visa, and crypto where available. We record whether funds appear instantly or with delays, and whether the process is straightforward or requires unnecessary steps.'
          },
          {
            icon: '⚡', title: 'Withdrawal Speed', weight: '25%',
            desc: 'We request a real withdrawal and time it from submission to funds received. No estimates — actual stopwatch results. This is the single most important metric because it determines whether winnings are real.'
          },
          {
            icon: '📋', title: 'Bonus Terms', weight: '25%',
            desc: "We read every line of the T&Cs: wagering requirement, game restrictions, bet limits during bonus play, expiry dates, withdrawal caps, and whether terms have changed since the bonus was advertised."
          },
          {
            icon: '💬', title: 'Support Quality', weight: '15%',
            desc: 'We contact live chat and email with specific questions at different times of day — including outside European business hours. We grade response time, accuracy, and whether the agent actually solved the problem.'
          },
          {
            icon: '🔒', title: 'License & Safety', weight: '10%',
            desc: 'We verify the license is current and issued by a recognized regulator. MGA and UKGC licenses score highest. Curaçao is accepted but scored lower. We also check SSL, responsible gambling tools, and data protection.'
          },
          {
            icon: '🎮', title: 'Game Quality', weight: '10%',
            desc: 'We evaluate software providers, game count, live dealer quality, and mobile compatibility. We also check whether advertised games are actually available in the tested region.'
          }
        ].map(item => (
          <div key={item.title} className="bg-[#161820] border border-[#252830] rounded-xl p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <h2 className="font-black text-white text-lg">{item.title}</h2>
              </div>
              <span className="text-[#F5A623] font-black text-sm bg-[#F5A623]/10 border border-[#F5A623]/20 px-3 py-1 rounded-full">
                {item.weight}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-[#161820] border border-[#252830] rounded-xl p-6">
        <h2 className="font-black text-white mb-4">Our scoring scale</h2>
        <div className="space-y-3">
          {[
            { range: '4.5 — 5.0', label: 'Exceptional', color: 'text-green-400', desc: 'Top-tier across all categories. Rare.' },
            { range: '4.0 — 4.4', label: 'Very Good', color: 'text-green-400', desc: 'Strong performance with minor weaknesses.' },
            { range: '3.5 — 3.9', label: 'Good', color: 'text-yellow-400', desc: 'Solid option but notable trade-offs.' },
            { range: '3.0 — 3.4', label: 'Average', color: 'text-orange-400', desc: 'Acceptable but not recommended as a first choice.' },
            { range: 'Below 3.0', label: 'Poor', color: 'text-red-400', desc: 'Significant issues. We typically do not list these.' },
          ].map(s => (
            <div key={s.range} className="flex items-start gap-4 text-sm">
              <span className={`font-black w-24 flex-shrink-0 ${s.color}`}>{s.range}</span>
              <span className="font-bold text-white w-24 flex-shrink-0">{s.label}</span>
              <span className="text-gray-500">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/casinos" className="inline-block bg-[#F5A623] hover:bg-[#E09520] text-black font-black px-8 py-4 rounded-xl transition-colors">
          See Our Casino Rankings →
        </Link>
      </div>
    </div>
  )
}
