import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Umsatzbedingungen Erklärt 2026 — Vollständiger Guide',
  description: 'Was sind Umsatzbedingungen? Wie berechnet man sie? Welche Casinos haben die niedrigsten? Vollständiger Guide mit Beispielen. Aktualisiert Mai 2026.',
  alternates: { canonical: 'https://www.bonuscout.com/de/ratgeber/umsatzbedingungen-erklaert' }
}

const lowestWagering = [...casinos].sort((a, b) => a.wagering - b.wagering).slice(0, 5)

const faqs = [
  { q: 'Was sind Umsatzbedingungen?', a: 'Umsatzbedingungen (auch Playthrough oder Rollover genannt) geben an, wie oft Sie Ihren Bonusbetrag setzen müssen, bevor Sie Gewinne daraus auszahlen können. Bei 35x auf einen €100 Bonus müssen Sie €3.500 setzen.' },
  { q: 'Was sind gute Umsatzbedingungen?', a: '30x oder weniger gilt als gut. 35x ist der Branchenstandard und fair. 40x ist hoch. Über 45x ist sehr hoch und es lohnt sich meist nicht, solche Boni zu beanspruchen.' },
  { q: 'Gelten Umsatzbedingungen für Bonus + Einzahlung oder nur den Bonus?', a: 'Das variiert je nach Casino. Manche wenden die Umsatzbedingungen nur auf den Bonusbetrag an, andere auf Bonus + Einzahlung zusammen. Prüfen Sie immer die spezifischen AGB.' },
  { q: 'Welche Spiele zählen zu den Umsatzbedingungen?', a: 'Slots zählen in der Regel zu 100%. Tischspiele wie Blackjack und Roulette oft nur zu 10-20%. Manche Spiele sind ganz ausgeschlossen. Prüfen Sie immer die Casino-spezifischen Regeln.' },
  { q: 'Kann ich auszahlen, bevor ich die Umsatzbedingungen erfüllt habe?', a: 'Ja, aber Sie verlieren dann alle verbleibenden Bonusgelder und damit verbundene Gewinne. Sie können Ihren ursprünglichen Einzahlungsbetrag (abzüglich Verluste aus dem Echtgeldspiel) immer auszahlen.' },
]

export default function DeUmsatzGuidePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
          <span className="mx-2">›</span>
          <Link href="/de/ratgeber" className="hover:text-[#F5A623]">Ratgeber</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Umsatzbedingungen Erklärt</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Umsatzbedingungen Erklärt</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          <span>5 Min. Lesezeit</span><span>·</span><span>Aktualisiert Mai 2026</span><span>·</span><span>BonusScout Team</span>
        </div>

        <div className="space-y-8">

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Was sind Umsatzbedingungen?</h2>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>Umsatzbedingungen (auch Playthrough oder Rollover genannt) sind ein Multiplikator, der angibt, wie oft Sie Ihre Bonusgelder setzen müssen, bevor Sie damit erzielte Gewinne auszahlen können.</p>
              <p>Es ist die wichtigste Zahl beim Vergleich von Casino-Boni. Ein größerer Bonus mit hohen Umsatzbedingungen ist oft weniger wert als ein kleinerer Bonus mit niedrigen Umsatzbedingungen.</p>
            </div>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">So berechnen Sie Umsatzbedingungen</h2>
            <div className="bg-[#0D0F14] rounded-xl p-5 mb-4 font-mono text-sm">
              <div className="text-green-400 mb-2">Beispiel 1 — Nur Bonus:</div>
              <div className="text-gray-300">Einzahlung: €100 | Bonus: €100 | Umsatz: 35x</div>
              <div className="text-[#F5A623] mt-1">→ Sie müssen setzen: €100 × 35 = <span className="font-black">€3.500</span></div>
              <div className="text-green-400 mt-4 mb-2">Beispiel 2 — Bonus + Einzahlung:</div>
              <div className="text-gray-300">Einzahlung: €100 | Bonus: €100 | Umsatz: 35x (auf beides)</div>
              <div className="text-[#F5A623] mt-1">→ Sie müssen setzen: €200 × 35 = <span className="font-black">€7.000</span></div>
            </div>
            <p className="text-gray-400 text-sm">Prüfen Sie immer, ob die Umsatzbedingungen nur für den Bonus oder für Bonus + Einzahlung gelten. Der Unterschied ist enorm.</p>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Bewertungsmaßstab — Was ist fair?</h2>
            <div className="space-y-3">
              {[
                { range: '0x', label: 'Kein Umsatz', color: 'text-green-400 bg-green-500/10 border-green-500/20', desc: 'Gewinne sofort auszahlbar. Extrem selten.' },
                { range: '20x — 25x', label: 'Ausgezeichnet', color: 'text-green-400 bg-green-500/10 border-green-500/20', desc: 'Sehr spielerfreundlich. Ungewöhnlich.' },
                { range: '30x', label: 'Gut', color: 'text-green-400 bg-green-500/10 border-green-500/20', desc: 'Unter Branchendurchschnitt. Empfehlenswert.' },
                { range: '35x', label: 'Fair', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20', desc: 'Branchenstandard. Akzeptabel.' },
                { range: '40x', label: 'Hoch', color: 'text-orange-400 bg-orange-500/10 border-orange-500/20', desc: 'Über Standard. Bonusgröße genau prüfen.' },
                { range: '45x+', label: 'Sehr Hoch', color: 'text-red-400 bg-red-500/10 border-red-500/20', desc: 'Schwer zu erfüllen. Meist nicht empfehlenswert.' },
              ].map(b => (
                <div key={b.range} className="flex items-center gap-4">
                  <span className={`text-sm font-black px-3 py-1 rounded-full border ${b.color} w-24 text-center flex-shrink-0`}>{b.range}</span>
                  <span className="font-bold text-white w-28 flex-shrink-0 text-sm">{b.label}</span>
                  <span className="text-gray-500 text-sm">{b.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Spielbeitrag zu Umsatzbedingungen</h2>
            <div className="space-y-2 mb-4">
              {[
                { game: 'Slots (die meisten)', contribution: '100%', color: 'text-green-400' },
                { game: 'Blackjack', contribution: '10%', color: 'text-yellow-400' },
                { game: 'Roulette', contribution: '10-20%', color: 'text-yellow-400' },
                { game: 'Baccarat', contribution: '5-10%', color: 'text-orange-400' },
                { game: 'Live Dealer', contribution: '5-15%', color: 'text-orange-400' },
              ].map(g => (
                <div key={g.game} className="flex items-center justify-between bg-[#0D0F14] rounded-lg px-4 py-2.5">
                  <span className="text-gray-300 text-sm">{g.game}</span>
                  <span className={`font-black text-sm ${g.color}`}>{g.contribution}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Casinos mit den niedrigsten Umsatzbedingungen</h2>
            <div className="space-y-3 mb-4">
              {lowestWagering.map((casino, i) => (
                <div key={casino.id} className="flex items-center gap-4 bg-[#0D0F14] rounded-xl p-4">
                  <span className="text-gray-500 font-black w-6 text-sm flex-shrink-0">#{i+1}</span>
                  <span className="text-2xl flex-shrink-0">{casino.logo}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-sm">{casino.name}</div>
                    <div className="text-[#F5A623] text-xs">{casino.bonus}</div>
                  </div>
                  <span className={`font-black text-lg flex-shrink-0 ${casino.wagering === 0 ? 'text-green-400' : casino.wagering <= 30 ? 'text-green-400' : 'text-yellow-400'}`}>
                    {casino.wagering}x
                  </span>
                  <Link href={`/de/bewertungen/${casino.slug}`} className="text-xs text-[#F5A623] hover:underline flex-shrink-0">Bewertung</Link>
                </div>
              ))}
            </div>
            <Link href="/de/niedrigste-umsatzbedingungen" className="text-[#F5A623] text-sm font-bold hover:underline">
              Alle Casinos nach Umsatzbedingungen →
            </Link>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-6">Häufig gestellte Fragen</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className={i > 0 ? 'border-t border-[#252830] pt-6' : ''}>
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
            <h2 className="font-black text-white mb-4">Verwandte Seiten</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Niedrigste Umsatzbedingungen', href: '/de/niedrigste-umsatzbedingungen' },
                { label: 'Kein Wager Casino', href: '/de/kein-wager-casino' },
                { label: 'Kein Einzahlungsbonus Guide', href: '/de/ratgeber/kein-einzahlungsbonus-guide' },
                { label: 'Alle Ratgeber', href: '/de/ratgeber' },
              ].map(item => (
                <Link key={item.href} href={item.href}
                  className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 text-sm font-bold text-white hover:text-[#F5A623] transition-all">
                  {item.label} →
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
