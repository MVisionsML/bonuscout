import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Free Spins Guide 2026 — How Free Spins Work | BonusScout',
  description: 'Complete guide to casino free spins. How they work, what the winnings are worth, wagering on free spin wins, and which casinos offer the best free spins deals.',
  alternates: { canonical: 'https://www.bonuscout.com/guides/free-spins-guide' }
}

const freeSpinCasinos = casinos.filter(c => c.bonus.toLowerCase().includes('spin')).slice(0, 5)

const faqs = [
  { q: 'How much is a free spin worth?', a: 'Typically €0.10 per spin at most casinos. Some offer €0.20 spins which are more valuable. 100 spins at €0.10 = €10 in potential winnings before wagering requirements apply.' },
  { q: 'Do free spin winnings have wagering requirements?', a: 'Yes, in almost all cases. Free spin winnings typically carry 30-40x wagering before they can be withdrawn. No-wagering free spins exist but are rare.' },
  { q: 'When are free spins credited?', a: 'It varies. Some casinos credit all spins at once on registration or deposit. Others release them in batches over several days — for example, 50 spins per day for 10 days. Check the specific offer terms.' },
  { q: 'What games can I use free spins on?', a: 'Free spins are almost always assigned to specific games — usually one or two named slots. You cannot use them on any game you choose. The assigned games are specified in the bonus terms.' },
  { q: 'What happens to unused free spins?', a: 'They expire. Free spins typically have a 24-72 hour expiry from when they are credited. Once expired, unused spins are forfeited with no compensation.' },
]

export default function FreeSpinsGuide() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/guides" className="hover:text-[#F5A623]">Guides</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Free Spins Guide</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Free Spins Guide 2026</h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Everything you need to know about casino free spins — how they work, what the winnings are actually worth, and how to find offers worth claiming.
        </p>

        <div className="space-y-10">

          <section>
            <h2 className="text-2xl font-black text-white mb-4">What are free spins?</h2>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-4">
              <p>Free spins are bonus rounds on slot games, credited to your casino account as part of a welcome offer or ongoing promotion. They let you spin the reels without using your own balance — any winnings go to your bonus balance, subject to wagering requirements.</p>
              <p>They are the most commonly advertised casino bonus feature because they are easy to understand and visually compelling. However, the headline spin count is often misleading without knowing the per-spin value and wagering attached to winnings.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4">The real value of free spins</h2>
            <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-4">
              <div className="font-black text-white mb-3">Value calculation</div>
              <div className="space-y-3 text-sm">
                {[
                  { label: '100 spins × €0.10', raw: '€10 gross', wagered: '30x = €300 to clear', color: 'text-green-400' },
                  { label: '200 spins × €0.10', raw: '€20 gross', wagered: '35x = €700 to clear', color: 'text-yellow-400' },
                  { label: '500 spins × €0.10', raw: '€50 gross', wagered: '40x = €2,000 to clear', color: 'text-red-400' },
                ].map(r => (
                  <div key={r.label} className="flex items-start gap-4 border-b border-[#252830] pb-3 last:border-0 last:pb-0">
                    <span className="text-gray-300 w-40 flex-shrink-0">{r.label}</span>
                    <span className="text-white font-bold w-24 flex-shrink-0">{r.raw}</span>
                    <span className={r.color}>{r.wagered}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">The 500-spin offer requires €2,000 in wagering to clear — on winnings from €50 of spins. This is why we rank free spins offers by value-to-wagering ratio, not headline spin count.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4">Types of free spins offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'No deposit free spins', desc: 'Credited on registration with no deposit required. Usually 10-50 spins at €0.10. Wagering on winnings is typically 30-50x. Best for testing a casino risk-free.', tag: 'Risk-free' },
                { title: 'Deposit free spins', desc: 'Part of a welcome package alongside a deposit match. Usually 100-500 spins. Higher spin count but requires a qualifying deposit to activate.', tag: 'Most common' },
                { title: 'Daily/weekly free spins', desc: 'Ongoing promotions for existing players. Often tied to loyalty schemes or specific slot releases. Wagering terms vary widely.', tag: 'Ongoing' },
                { title: 'No-wagering free spins', desc: 'Winnings go directly to your real money balance with no wagering required. Extremely rare — Stake Casino is the primary example in our comparison.', tag: 'Best value' },
              ].map(item => (
                <div key={item.title} className="bg-[#161820] border border-[#252830] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="font-black text-white">{item.title}</div>
                    <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">{item.tag}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4">Best free spins casinos right now</h2>
            <div className="space-y-3 mb-4">
              {freeSpinCasinos.map(casino => (
                <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 flex items-center gap-4 transition-all">
                  <div className="w-10 h-10 bg-[#252830] rounded-xl flex items-center justify-center text-xl flex-shrink-0">{casino.logo}</div>
                  <div className="flex-1">
                    <div className="font-bold text-white text-sm">{casino.name}</div>
                    <div className="text-[#F5A623] text-xs font-bold">{casino.bonus}</div>
                    <div className="text-xs text-gray-500">Wagering: {casino.wagering}x</div>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-shrink-0">
                    <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                      className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-xs px-4 py-2 rounded-lg transition-colors text-center">
                      Claim
                    </a>
                    <Link href={`/reviews/${casino.slug}`} className="text-center text-xs text-gray-500 hover:text-[#F5A623]">Review</Link>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/best-free-spins-casino" className="inline-block text-sm text-[#F5A623] font-bold hover:underline">
              See all free spins casinos →
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className={i > 0 ? 'border-t border-[#252830] pt-6' : ''}>
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        <div className="mt-10 bg-[#161820] border border-[#252830] rounded-xl p-6">
          <h2 className="font-black text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Wagering Requirements Explained', href: '/guides/wagering-requirements-explained' },
              { label: 'How to Claim a No Deposit Bonus', href: '/guides/how-to-claim-no-deposit-bonus' },
              { label: 'Casino Bonus Terms Glossary', href: '/guides/casino-bonus-terms' },
              { label: 'Best Free Spins Casino', href: '/best-free-spins-casino' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 text-sm font-bold text-white hover:text-[#F5A623] transition-all">
                {item.label} →
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
