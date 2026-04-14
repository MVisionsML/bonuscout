import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About BonusScout — Independent Casino Bonus Reviews',
  description: 'About BonusScout. We are an independent casino review site that tests every bonus before recommending it. Learn about our methodology and team.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">About Us</span>
      </div>

      <h1 className="text-3xl font-black text-white mb-4">About BonusScout</h1>

      <div className="space-y-6">
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
          <h2 className="font-black text-white mb-4">Who we are</h2>
          <div className="text-gray-400 text-sm leading-relaxed space-y-3">
            <p>BonusScout is an independent casino review and comparison site. We test every casino on our list by making real deposits, requesting real withdrawals, and contacting customer support before publishing any review.</p>
            <p>We are not owned by any casino operator. No casino can pay for a higher position in our rankings. Every score reflects what our team found during testing — including the things casinos would rather we didn&apos;t mention.</p>
          </div>
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
          <h2 className="font-black text-white mb-4">How we make money</h2>
          <p className="text-gray-400 text-sm leading-relaxed">We earn a commission when you sign up at a casino through our links. This is how affiliate marketing works — the casino pays us, not you. Our commission does not affect our ratings or rankings. Casinos we rate poorly still appear on our site, and casinos that pay high commissions do not receive inflated scores.</p>
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
          <h2 className="font-black text-white mb-4">Our testing process</h2>
          <div className="space-y-3 text-sm text-gray-400">
            {[
              { icon: '💳', title: 'Real deposits', desc: 'We deposit using multiple payment methods and verify that funds arrive correctly and promptly.' },
              { icon: '⚡', title: 'Real withdrawals', desc: 'We request withdrawals and time them from submission to funds received — no estimates.' },
              { icon: '📋', title: 'Bonus terms', desc: 'We read every line of the T&Cs including wagering, game restrictions, max bet and withdrawal caps.' },
              { icon: '💬', title: 'Support testing', desc: 'We contact support at different times of day and grade response time and accuracy.' },
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
            <Link href="/methodology" className="text-[#F5A623] text-sm font-bold hover:underline">
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
