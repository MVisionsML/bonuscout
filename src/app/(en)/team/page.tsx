import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About the BonusCout Editorial Team | Casino Reviews',
  description: 'About the BonusCout editorial team. How we organise testing, the experience behind our reviews, and how to reach us.',
}

export default function TeamPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Team</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-white mb-4">The BonusCout Editorial Team</h1>
      <p className="text-gray-400 text-lg mb-10 leading-relaxed">
        BonusCout is run by a small in-house editorial team. Below is how we&apos;re organised, what each person works on, and how to contact us.
      </p>

      {/* Collective signature */}
      <section className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center flex-shrink-0">
            <span className="text-[#F5A623] font-black">BC</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Reviewed by</div>
            <div className="font-black text-white text-base mb-2">The BonusCout editorial team</div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Every casino review on this site is bylined collectively to the BonusCout editorial team. We do this for two reasons.
              First, every review goes through more than one person — at minimum a tester (deposit, withdrawal, support) and an
              editor (terms reading, scoring sign-off). Second, we don&apos;t want to put fabricated personal credentials in front of
              readers. When a named author makes sense for a piece, we&apos;ll name them. Until then, the editorial team owns the byline.
            </p>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-6">
        <h2 className="font-black text-white text-lg mb-4">How the team is organised</h2>
        <div className="space-y-5 text-sm text-gray-400 leading-relaxed">
          <div>
            <div className="font-bold text-white mb-1">Casino testing</div>
            <p>
              Owns the operational checks on every review: account creation, KYC, deposit testing across payment rails,
              withdrawal timing, support testing, and re-checks when terms change. Every score on the site originates here.
            </p>
          </div>
          <div>
            <div className="font-bold text-white mb-1">Bonus &amp; terms analysis</div>
            <p>
              Reads the full bonus terms on every offer we list — wagering, max bet, game weighting, withdrawal caps, expiry,
              country restrictions. Calculates the realistic value of each bonus rather than the marketing-page value.
            </p>
          </div>
          <div>
            <div className="font-bold text-white mb-1">Editorial &amp; corrections</div>
            <p>
              Signs off each ranking change, owns the corrections inbox, and decides which operators stay listed when complaints arise.
              Also responsible for the site&apos;s{' '}
              <Link href="/editorial-policy" className="text-[#F5A623] hover:underline font-bold">editorial policy</Link>
              {' '}and{' '}
              <Link href="/how-we-rate" className="text-[#F5A623] hover:underline font-bold">scoring methodology</Link>.
            </p>
          </div>
          <div>
            <div className="font-bold text-white mb-1">Compliance &amp; responsible gambling</div>
            <p>
              Checks licence validity against regulator registers, monitors operator licence status, and owns the responsible-gambling
              footer that appears on every page.{' '}
              <Link href="/responsible-gambling" className="text-red-400 hover:underline font-bold">Responsible gambling guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-10">
        <h2 className="font-black text-white text-lg mb-3">Contact</h2>
        <div className="text-gray-400 text-sm leading-relaxed space-y-2">
          <p>Corrections, factual errors, missing operator data: <span className="text-[#F5A623]">hello@bonuscout.com</span></p>
          <p>Partnerships and media: <span className="text-[#F5A623]">hello@bonuscout.com</span> with &quot;Partnership&quot; in the subject line.</p>
          <p>We aim to reply to corrections within 5 business days.</p>
        </div>
      </section>

      {/* Cross-links */}
      <section className="bg-[#0D0F14] border border-[#252830] rounded-xl p-6 mb-10">
        <h2 className="font-black text-white text-sm mb-3 uppercase tracking-wide">Related</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <Link href="/editorial-policy" className="text-[#F5A623] hover:underline">Editorial Policy →</Link>
          <Link href="/how-we-rate" className="text-[#F5A623] hover:underline">How We Rate Casinos →</Link>
          <Link href="/how-we-rate" className="text-[#F5A623] hover:underline">Testing Methodology →</Link>
          <Link href="/responsible-gambling" className="text-[#F5A623] hover:underline">Responsible Gambling →</Link>
          <Link href="/about" className="text-[#F5A623] hover:underline">About BonusCout →</Link>
          <Link href="/casinos" className="text-[#F5A623] hover:underline">See the Casino Rankings →</Link>
        </div>
      </section>
    </div>
  )
}
