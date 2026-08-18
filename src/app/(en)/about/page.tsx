import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About BonusCout — Independent Casino Bonus Reviews',
  description: 'About BonusCout. Independent casino bonus reviews compiled from published operator T&Cs, cashier pages and licensing records. Learn about our methodology and team.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">About Us</span>
      </div>

      <h1 className="text-3xl font-black text-white mb-4">About BonusCout</h1>

      <div className="space-y-6">
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
          <h2 className="font-black text-white mb-4">Who we are</h2>
          <div className="text-gray-400 text-sm leading-relaxed space-y-3">
            <p>BonusCout is an independent casino review and comparison site. Every review is compiled from the operator&apos;s own published Terms &amp; Conditions, cashier page and licensing records. We do not make first-hand deposits, withdrawals or support-timing tests — documentary verification only.</p>
            <p>We are not owned by any casino operator. No casino can pay for a higher position in our rankings. Every score reflects our published 10-dimension methodology applied to the operator&apos;s current published data — including the things casinos would rather we didn&apos;t highlight.</p>
          </div>
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
          <h2 className="font-black text-white mb-4">How we make money</h2>
          <p className="text-gray-400 text-sm leading-relaxed">We earn a commission when you sign up at a casino through our links. This is how affiliate marketing works — the casino pays us, not you. Our commission does not affect our ratings or rankings. Casinos we rate poorly still appear on our site, and casinos that pay high commissions do not receive inflated scores.</p>
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
          <h2 className="font-black text-white mb-4">Our review process</h2>
          <div className="space-y-3 text-sm text-gray-400">
            {[
              { icon: '💳', title: 'Published cashier terms', desc: 'Payment methods, minimum deposits, and cashier limits documented from each operator&apos;s published cashier page.' },
              { icon: '⚡', title: 'Published withdrawal windows', desc: 'Withdrawal windows and per-payment-method processing schedules compiled from the operator&apos;s cashier terms.' },
              { icon: '📋', title: 'Bonus terms', desc: 'Every line of the published T&Cs read — wagering, game restrictions, max bet and withdrawal caps.' },
              { icon: '💬', title: 'Support channels', desc: 'Live chat, email and support-hour coverage documented from the operator&apos;s published support page.' },
            ].map(item => (
              <div key={item.title} className="flex gap-3">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-bold text-white mb-0.5">{item.title}</div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/how-we-rate" className="text-[#F5A623] text-sm font-bold hover:underline">
              Read our full methodology →
            </Link>
          </div>
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
          <h2 className="font-black text-white mb-4">Contact</h2>
          <p className="text-gray-400 text-sm">For partnerships, corrections or media enquiries: <span className="text-[#F5A623]">hello@bonuscout.com</span></p>
        </div>
      </div>
    </div>
  )
}
