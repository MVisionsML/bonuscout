import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Responsible Gambling — BonusScout',
  description: 'Responsible gambling information and resources. Set limits, take breaks and know where to get help if gambling becomes a problem.',
}

export default function ResponsibleGamblingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Responsible Gambling</span>
      </div>

      <h1 className="text-3xl font-black text-white mb-4">Responsible Gambling</h1>
      <p className="text-gray-400 mb-10 leading-relaxed">Gambling should be entertaining — not a source of financial stress. BonusScout is committed to promoting safe gambling practices.</p>

      <div className="space-y-6">

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
          <h2 className="font-black text-white mb-4">Set limits before you play</h2>
          <div className="space-y-3 text-sm text-gray-400">
            <p>Every licensed casino offers tools to help you stay in control. Use them before you start playing, not after a losing session.</p>
            <ul className="space-y-2">
              {['Deposit limits — cap how much you can deposit daily, weekly or monthly', 'Loss limits — set a maximum you can lose in a given period', 'Session limits — limit how long you play in one sitting', 'Reality checks — timed reminders of how long you have been playing', 'Self-exclusion — block yourself from all gambling for a set period'].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
          <h2 className="font-black text-white mb-4">Warning signs of problem gambling</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              'Gambling with money you cannot afford to lose',
              'Chasing losses by placing bigger bets',
              'Lying to friends or family about gambling activity',
              'Gambling to escape stress, anxiety or depression',
              'Neglecting work, relationships or responsibilities due to gambling',
              'Feeling unable to stop or cut down despite wanting to',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
          <h2 className="font-black text-white mb-4">Get help</h2>
          <div className="space-y-4 text-sm text-gray-400">
            {[
              { org: 'GamCare', url: 'https://www.gamcare.org.uk', desc: 'Free support and counselling for problem gamblers and their families.' },
              { org: 'BeGambleAware', url: 'https://www.begambleaware.org', desc: 'Independent charity providing information, advice and support.' },
              { org: 'Gamban', url: 'https://gamban.com', desc: 'Software that blocks gambling websites and apps across all your devices.' },
              { org: 'Gamblers Anonymous', url: 'https://www.gamblersanonymous.org', desc: 'Fellowship of men and women who share their experience to recover from gambling problems.' },
            ].map(item => (
              <div key={item.org} className="flex items-start gap-3">
                <div>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[#F5A623] hover:underline">{item.org}</a>
                  <p className="text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-900/20 border border-amber-500/20 rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">18+</div>
          <p className="text-gray-400 text-sm">Gambling is only for adults aged 18 and over. If you think you have a gambling problem, please seek help immediately.</p>
        </div>

      </div>
    </div>
  )
}
