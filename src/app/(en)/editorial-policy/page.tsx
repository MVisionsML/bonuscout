import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editorial Policy & AI Disclosure | BonusCout',
  description: 'How BonusCout writes, edits, and updates casino reviews. Affiliate disclosure, AI usage disclosure, fact-checking process and how to file a correction or complaint.',
}

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Editorial Policy</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Editorial Policy</h1>
      <p className="text-gray-400 text-lg mb-10 leading-relaxed">
        How BonusCout writes, edits, fact-checks and updates the content on this site — and the commercial relationships behind it.
      </p>

      {/* Editorial standards */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-6">
        <h2 className="font-black text-white text-lg mb-3">Editorial standards</h2>
        <div className="text-gray-400 text-sm leading-relaxed space-y-3">
          <p>
            Every review and ranking on this site is based on documentary verification of publicly available operator information
            — licence-number checks against regulator registers, bonus T&amp;C extraction from operator sites, cashier-page payment
            methods, and cross-references against third-party reputation indices (casino.guru, AskGamblers). Our exact scoring
            criteria are published on the{' '}
            <Link href="/how-we-rate" className="text-[#F5A623] hover:underline">How We Evaluate Casinos</Link> page.
          </p>
          <p>
            We do not republish operator marketing copy. We do not run sponsored reviews. No casino can pay for a higher
            position in our rankings. Rankings are reviewed monthly and individual reviews are re-verified at least annually.
          </p>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-6">
        <h2 className="font-black text-white text-lg mb-3">Affiliate disclosure</h2>
        <div className="text-gray-400 text-sm leading-relaxed space-y-3">
          <p>
            BonusCout is an affiliate website. When a reader clicks a casino link on our site and signs up at the casino,
            the casino may pay us a commission. This is how the site is funded. The reader pays nothing extra.
          </p>
          <p>
            Affiliate commission has no influence on rankings or scoring. We rank operators we cannot monetise alongside
            operators we can, and we leave low-scoring operators visible (often with warnings) rather than quietly delisting them
            to protect commercial relationships.
          </p>
          <p>
            All outbound links to casinos are marked <code className="text-[#F5A623] bg-[#0D0F14] px-1 py-0.5 rounded text-xs">rel=&quot;nofollow noopener noreferrer&quot;</code> in line with search-engine
            and advertising guidelines.
          </p>
        </div>
      </section>

      {/* AI disclosure */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-6">
        <h2 className="font-black text-white text-lg mb-3">AI usage disclosure</h2>
        <div className="text-gray-400 text-sm leading-relaxed space-y-3">
          <p>
            AI drafting is used to structure and phrase editorial content on BonusCout. Where this happens:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>The draft is reviewed and edited by a human member of the editorial team before publication.</li>
            <li>All factual claims — licence numbers, bonus terms, payment methods, published withdrawal windows — are verified against the operator&apos;s live website or licence register, not generated.</li>
            <li>AI is not used to invent test results, reviewer identities, or first-person experience claims.</li>
          </ul>
          <p>
            All published claims must be traceable to publicly verifiable operator information or licence registers.
            Where a section of a page is descriptive rather than an evaluation claim (e.g. provider history, game mechanics),
            it is treated as background context, not a scored review claim.
          </p>
        </div>
      </section>

      {/* Update frequency */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-6">
        <h2 className="font-black text-white text-lg mb-3">Update frequency</h2>
        <div className="text-gray-400 text-sm leading-relaxed space-y-3">
          <p>
            Bonus offers change frequently. We aim to re-check headline bonus terms on every ranked casino once per month.
            Full reviews — covering deposit, withdrawal, support and games — are repeated at least once per year, or sooner if a
            material change is reported (licence change, terms change, ownership change, complaint cluster).
          </p>
          <p>
            The &quot;last reviewed&quot; date on every review reflects the most recent editorial verification pass, not a content edit.
          </p>
        </div>
      </section>

      {/* Corrections */}
      <section className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-6">
        <h2 className="font-black text-white text-lg mb-3">Corrections and complaints</h2>
        <div className="text-gray-400 text-sm leading-relaxed space-y-3">
          <p>
            If you spot a factual error — a stale bonus, a wrong wagering number, an outdated licence reference — write to
            <span className="text-[#F5A623]"> hello@bonuscout.com</span> and include the URL of the page and the specific claim
            you&apos;re flagging. We aim to respond within 5 business days and correct material errors on the page itself.
          </p>
          <p>
            If you have a complaint about an operator (delayed withdrawal, terms dispute, KYC issue), we cannot mediate directly,
            but we can pass the complaint to the operator and we update our review where appropriate. For UK players the
            Independent Betting Adjudication Service (IBAS) and your operator&apos;s licensed Alternative Dispute Resolution
            provider are the correct formal channels.
          </p>
        </div>
      </section>

      {/* Responsible gambling commitment */}
      <section className="bg-[#161820] border border-red-500/30 rounded-xl p-6 mb-10">
        <h2 className="font-black text-white text-lg mb-3">Responsible gambling commitment</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">
          We do not promote bonuses to readers who indicate they are at risk. We do not write content designed to encourage
          chasing losses. Every casino page and every ranking on this site links to free, confidential support services.
        </p>
        <Link href="/responsible-gambling" className="text-red-400 text-sm font-bold hover:underline">
          Read our responsible gambling guide →
        </Link>
      </section>

      {/* Cross-links */}
      <section className="bg-[#0D0F14] border border-[#252830] rounded-xl p-6 mb-10">
        <h2 className="font-black text-white text-sm mb-3 uppercase tracking-wide">Related</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <Link href="/how-we-rate" className="text-[#F5A623] hover:underline">How We Rate Casinos →</Link>
          <Link href="/team" className="text-[#F5A623] hover:underline">About the Editorial Team →</Link>
          <Link href="/responsible-gambling" className="text-[#F5A623] hover:underline">Responsible Gambling →</Link>
          <Link href="/about" className="text-[#F5A623] hover:underline">About BonusCout →</Link>
        </div>
      </section>
    </div>
  )
}
