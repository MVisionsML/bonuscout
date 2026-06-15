import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Freispiele Guide 2026 — Wert, Umsatz und beste Angebote | BonusScout',
  description: 'Freispiele richtig nutzen: Spinwert berechnen, Umsatz auf Gewinne verstehen, die besten Freispiel-Angebote 2026 finden. Vollständiger Guide mit Beispielen.',
  alternates: { canonical: 'https://www.bonuscout.com/de/ratgeber/freispiele-guide' }
}

const freeSpinPicks = [...casinos]
  .filter(c => /free spin|freispiel/i.test(c.bonus))
  .sort((a, b) => a.wagering - b.wagering)
  .slice(0, 5)

const faqs = [
  { q: 'Was sind Freispiele?', a: 'Freispiele (Free Spins) sind kostenlose Drehs an einem bestimmten Slot, die ein Casino als Bonus vergibt. Gewinne aus Freispielen werden in der Regel als Bonusgeld gutgeschrieben und unterliegen Umsatzbedingungen, bevor sie ausgezahlt werden können.' },
  { q: 'Wie viel sind Freispiele wert?', a: 'Der reale Wert hängt vom Spinwert ab. Bei 100 Freispielen zu €0,10 entspricht das einem Einsatzvolumen von €10. Bei €0,50 pro Spin sind es €50. Der erwartete Auszahlungswert nach Umsatz liegt typischerweise bei 15-30% des Einsatzvolumens.' },
  { q: 'Gilt der Umsatz auf den Gewinn oder den Spielwert?', a: 'In den meisten europäischen Casinos gilt der Umsatz auf die aus den Freispielen erzielten Gewinne, nicht auf den Spielwert selbst. Wer mit 100 Freispielen €40 gewinnt und 35x Umsatz erfüllen muss, setzt €1.400. Manche Casinos rechnen jedoch auf das Spielwertvolumen — immer die AGB prüfen.' },
  { q: 'Welche Slots werden für Freispiele angeboten?', a: 'Die häufigsten Freispiel-Slots sind Pragmatic Play Titel wie Gates of Olympus, Sweet Bonanza und Big Bass Bonanza, Play’n GO Klassiker wie Book of Dead, sowie NetEnt Slots wie Starburst. Hacksaw und NoLimit City sind in Freispiel-Paketen seltener vertreten.' },
  { q: 'Kann ich Freispiele ohne Einzahlung bekommen?', a: 'Ja, einige Casinos vergeben Freispiele bereits bei der Registrierung ohne Einzahlung. Diese sind meist auf 10-50 Spins begrenzt und haben strenge Auszahlungslimits. Mehr Details im Kein Einzahlungsbonus Guide.' },
]

export default function DeFreispielePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
          <span className="mx-2">›</span>
          <Link href="/de/ratgeber" className="hover:text-[#F5A623]">Ratgeber</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Freispiele Guide</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Freispiele Guide</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          <span>5 Min. Lesezeit</span><span>·</span><span>Aktualisiert Juni 2026</span><span>·</span><span>BonusScout Team</span>
        </div>

        <div className="space-y-8">

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Was sind Freispiele wirklich wert?</h2>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>Freispiele sehen auf der Bonusseite spektakulär aus — „500 Freispiele&quot; sind eine prominent kommunizierte Zahl. Der reale Geldwert hängt aber an drei Variablen: dem Spinwert pro Drehung, dem RTP des konkreten Slots und den Umsatzbedingungen auf die Gewinne.</p>
              <p>Diese Anleitung berechnet den realen Wert mit Zahlen, statt den Marketingclaim zu wiederholen. Wer 200 Freispiele zu €0,10 erhält, hat ein Einsatzvolumen von €20 — nicht €200, wie viele Spieler instinktiv annehmen.</p>
            </div>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Spinwert — die wichtigste Zahl</h2>
            <div className="bg-[#0D0F14] rounded-xl p-5 mb-4 font-mono text-sm">
              <div className="text-green-400 mb-2">Beispiel 1 — Standard €0,10:</div>
              <div className="text-gray-300">200 Freispiele × €0,10 = €20 Einsatzvolumen</div>
              <div className="text-[#F5A623] mt-1">→ Erwarteter Gewinn (96% RTP): ca. <span className="font-black">€19,20</span></div>
              <div className="text-green-400 mt-4 mb-2">Beispiel 2 — Premium €0,50:</div>
              <div className="text-gray-300">200 Freispiele × €0,50 = €100 Einsatzvolumen</div>
              <div className="text-[#F5A623] mt-1">→ Erwarteter Gewinn (96% RTP): ca. <span className="font-black">€96</span></div>
            </div>
            <p className="text-gray-400 text-sm">Ein Casino mit 100 Freispielen zu €0,50 ist objektiv wertvoller als eines mit 300 Freispielen zu €0,10. Die Schlagzeile lügt nicht — sie zeigt nur die schmeichelhaftere Zahl.</p>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Umsatzbedingungen auf Freispielgewinne</h2>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3 mb-4">
              <p>Die meisten Casinos wenden Umsatzbedingungen ausschließlich auf die Gewinne aus den Freispielen an, nicht auf den Spielwert selbst. Wer mit 200 Freispielen €40 gewinnt und 35x Umsatz erfüllen muss, dreht €1.400 Slot-Einsätze.</p>
              <p>Selten — aber existent — sind Umsatzbedingungen auf das Spielwertvolumen. In dem Fall müssten Sie bei €100 Spielwert und 35x Umsatz €3.500 umsetzen. Dieser Fall macht die Freispiele rechnerisch fast wertlos, weil das Volumen das Vielfache eines möglichen Gewinns übersteigt.</p>
            </div>
            <Link href="/de/ratgeber/umsatzbedingungen-erklaert" className="text-[#F5A623] text-sm font-bold hover:underline">
              Mehr zu Umsatzbedingungen →
            </Link>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Bewertungsmaßstab — Freispiel-Pakete</h2>
            <div className="space-y-3">
              {[
                { range: '€0,50+', label: 'Ausgezeichnet', color: 'text-green-400 bg-green-500/10 border-green-500/20', desc: 'Premium-Spinwert. Sehr selten, aber sehr wertvoll.' },
                { range: '€0,20 — €0,40', label: 'Gut', color: 'text-green-400 bg-green-500/10 border-green-500/20', desc: 'Über Standard. Empfehlenswert.' },
                { range: '€0,10', label: 'Standard', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20', desc: 'Branchenstandard. Akzeptabel bei großem Paket.' },
                { range: '< €0,10', label: 'Niedrig', color: 'text-red-400 bg-red-500/10 border-red-500/20', desc: 'Selten, aber existent. Realwert minimal.' },
              ].map(b => (
                <div key={b.range} className="flex items-center gap-4">
                  <span className={`text-sm font-black px-3 py-1 rounded-full border ${b.color} w-32 text-center flex-shrink-0`}>{b.range}</span>
                  <span className="font-bold text-white w-32 flex-shrink-0 text-sm">{b.label}</span>
                  <span className="text-gray-500 text-sm">{b.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Die besten Freispiel-Angebote</h2>
            <div className="space-y-3 mb-4">
              {freeSpinPicks.map((casino, i) => (
                <div key={casino.id} className="flex items-center gap-4 bg-[#0D0F14] rounded-xl p-4">
                  <span className="text-gray-500 font-black w-6 text-sm flex-shrink-0">#{i+1}</span>
                  <span className="text-2xl flex-shrink-0">{casino.logo}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-sm">{casino.name}</div>
                    <div className="text-[#F5A623] text-xs">{casino.bonus}</div>
                  </div>
                  <span className={`font-black text-sm flex-shrink-0 ${casino.wagering <= 30 ? 'text-green-400' : casino.wagering <= 35 ? 'text-yellow-400' : 'text-orange-400'}`}>
                    {casino.wagering}x Umsatz
                  </span>
                  <Link href={`/de/bewertungen/${casino.slug}`} className="text-xs text-[#F5A623] hover:underline flex-shrink-0">Bewertung</Link>
                </div>
              ))}
            </div>
            <Link href="/de/boni" className="text-[#F5A623] text-sm font-bold hover:underline">
              Alle Boni mit Freispielen →
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
                { label: 'Umsatzbedingungen Erklärt', href: '/de/ratgeber/umsatzbedingungen-erklaert' },
                { label: 'Kein Einzahlungsbonus Guide', href: '/de/ratgeber/kein-einzahlungsbonus-guide' },
                { label: 'Einzahlungsanforderungen', href: '/de/ratgeber/einzahlungsanforderungen-erklaert' },
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
