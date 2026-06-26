import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Einzahlungsanforderungen Erklärt 2026 — Minimum, Methoden, Gebühren',
  description: 'Casino Einzahlungsanforderungen verständlich erklärt. Mindesteinzahlung, Limits, Gebühren und Zahlungsmethoden im Vergleich. Aktualisiert Juni 2026.',
  alternates: { canonical: 'https://www.bonuscout.com/de/ratgeber/einzahlungsanforderungen-erklaert' }
}

const lowMinDeposit = [...casinos]
  .sort((a, b) => a.minDeposit - b.minDeposit)
  .slice(0, 5)

const faqs = [
  { q: 'Was ist die Mindesteinzahlung im Casino?', a: 'Die Mindesteinzahlung ist der niedrigste Betrag, den ein Casino akzeptiert, um ein Konto aufzuladen. Bei den meisten europäischen Casinos liegt sie zwischen €10 und €20. Einige Anbieter erlauben Bitcoin-Einzahlungen ab umgerechnet €5.' },
  { q: 'Warum ist die Mindesteinzahlung wichtig für den Bonus?', a: 'Der Willkommensbonus wird oft erst ab einem bestimmten Mindestbetrag aktiviert — typischerweise €20. Eine Einzahlung von €10 mag akzeptiert werden, aber den Bonus nicht auslösen. Immer die Bonus-AGB prüfen, bevor Sie einzahlen.' },
  { q: 'Welche Zahlungsmethoden haben die niedrigsten Limits?', a: 'Kryptowährungen (Bitcoin, USDT) und manche E-Wallets (Trustly) erlauben oft Einzahlungen ab €5 oder weniger. Kreditkarten und Banküberweisungen haben in der Regel höhere Mindestbeträge von €10-€20.' },
  { q: 'Fallen Gebühren bei Casino-Einzahlungen an?', a: 'In den meisten seriösen Casinos sind Einzahlungen gebührenfrei. Gebühren werden gelegentlich bei Kreditkartenzahlungen erhoben (1-3%) oder durch Drittanbieter. Banktransfers und E-Wallets sind in der Regel kostenlos.' },
  { q: 'Wie schnell wird meine Einzahlung gutgeschrieben?', a: 'E-Wallets (Skrill, Neteller, Trustly) und Kryptowährungen sind in der Regel innerhalb von Minuten verfügbar. Kreditkartenzahlungen sind ebenfalls sofort. Bank- und SEPA-Überweisungen können 1-3 Werktage dauern.' },
  { q: 'Gibt es eine Maximaleinzahlung?', a: 'Ja — die meisten Casinos setzen tägliche und monatliche Maximalgrenzen, oft €5.000 pro Tag und €25.000 pro Monat für Standardspieler. VIP-Spieler können höhere Limits beantragen.' },
]

export default function DeEinzahlungsanforderungenPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
          <span className="mx-2">›</span>
          <Link href="/de/ratgeber" className="hover:text-[#F5A623]">Ratgeber</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Einzahlungsanforderungen Erklärt</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Einzahlungsanforderungen Erklärt</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          <span>5 Min. Lesezeit</span><span>·</span><span>Aktualisiert Juni 2026</span><span>·</span><span>BonusScout Team</span>
        </div>

        <div className="space-y-8">

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Worauf es bei der Einzahlung wirklich ankommt</h2>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>Einzahlungsanforderungen umfassen mehr als nur die Mindestsumme. Wer einen Willkommensbonus optimal nutzen will, muss vier Größen kennen: den Mindesteinzahlungsbetrag, die zum Bonus berechtigte Mindesteinzahlung, die akzeptierten Zahlungsmethoden für den Bonus und mögliche Gebühren.</p>
              <p>Eine €10 Einzahlung mag das Konto aktivieren, aber den €500 Willkommensbonus nicht freischalten. Eine Kreditkartenzahlung erfüllt die Mindestsumme, kann aber von der Bonusberechtigung ausgeschlossen sein. Diese Anleitung klärt jede dieser Hürden mit konkreten Zahlen.</p>
            </div>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Vier Zahlen, die zählen</h2>
            <div className="bg-[#0D0F14] rounded-xl p-5 mb-4 font-mono text-sm">
              <div className="text-green-400 mb-2">Typischer Fall:</div>
              <div className="text-gray-300 mb-1">Konto-Mindestbetrag: <span className="text-white font-bold">€10</span></div>
              <div className="text-gray-300 mb-1">Bonus-Mindestbetrag: <span className="text-white font-bold">€20</span></div>
              <div className="text-gray-300 mb-1">Tageslimit Einzahlung: <span className="text-white font-bold">€5.000</span></div>
              <div className="text-gray-300">Monatslimit Einzahlung: <span className="text-white font-bold">€25.000</span></div>
              <div className="text-[#F5A623] mt-3">→ Wer den €500 Willkommensbonus möchte, muss <span className="font-black">mindestens €20</span> einzahlen — nicht €10.</div>
            </div>
            <p className="text-gray-400 text-sm">Die Differenz zwischen Konto-Mindestbetrag und Bonus-Mindestbetrag ist die häufigste Falle. Im Zweifelsfall die Bonus-AGB prüfen, bevor Sie einzahlen.</p>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Zahlungsmethoden im Vergleich</h2>
            <div className="space-y-2 mb-4">
              {[
                { method: 'Bitcoin / Kryptowährungen', min: '€5-€10', speed: 'Minuten', fees: 'Keine', color: 'text-green-400' },
                { method: 'Trustly / Sofortüberweisung', min: '€10', speed: 'Sofort', fees: 'Keine', color: 'text-green-400' },
                { method: 'Skrill / Neteller', min: '€10-€20', speed: 'Sofort', fees: 'Keine', color: 'text-green-400' },
                { method: 'Visa / Mastercard', min: '€10-€20', speed: 'Sofort', fees: '0-3%', color: 'text-yellow-400' },
                { method: 'Apple Pay / Google Pay', min: '€10', speed: 'Sofort', fees: 'Keine', color: 'text-green-400' },
                { method: 'SEPA-Überweisung', min: '€10-€20', speed: '1-3 Werktage', fees: 'Keine', color: 'text-orange-400' },
                { method: 'Paysafecard', min: '€10', speed: 'Sofort', fees: 'Keine', color: 'text-green-400' },
              ].map(m => (
                <div key={m.method} className="grid grid-cols-12 items-center bg-[#0D0F14] rounded-lg px-4 py-2.5 gap-2 text-sm">
                  <span className="text-gray-300 col-span-5">{m.method}</span>
                  <span className="text-white font-bold col-span-2 text-center">{m.min}</span>
                  <span className={`font-bold col-span-3 text-center ${m.color}`}>{m.speed}</span>
                  <span className="text-gray-400 col-span-2 text-right">{m.fees}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs">Die exakten Beträge variieren je nach Casino. Krypto und Trustly sind durchgängig die schnellsten und günstigsten Methoden für deutsche Spieler.</p>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Bonus-Ausschlüsse je Zahlungsmethode</h2>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>Einige Casinos schließen bestimmte Zahlungsmethoden von der Bonusberechtigung aus. Skrill und Neteller sind die häufigsten Ausschlüsse — der Grund liegt darin, dass beide für Bonusmissbrauch in der Branche bekannt sind.</p>
              <p>Häufige Ausschlüsse: <strong className="text-white">Skrill, Neteller, ecoPayz</strong>. In der Regel akzeptiert: <strong className="text-white">Visa, Mastercard, Trustly, Bitcoin, USDT, Apple Pay, Google Pay, SEPA-Überweisung</strong>.</p>
              <p>Wer den vollen Willkommensbonus nutzen will, wählt eine Standard-Methode wie Visa, Trustly oder Krypto — nicht E-Wallets aus der Skrill-Familie.</p>
            </div>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Casinos mit niedriger Mindesteinzahlung</h2>
            <div className="space-y-3 mb-4">
              {lowMinDeposit.map((casino, i) => (
                <div key={casino.id} className="flex items-center gap-4 bg-[#0D0F14] rounded-xl p-4">
                  <span className="text-gray-500 font-black w-6 text-sm flex-shrink-0">#{i+1}</span>
                  <span className="text-2xl flex-shrink-0">{casino.logo}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-sm">{casino.name}</div>
                    <div className="text-[#F5A623] text-xs">{casino.bonus}</div>
                  </div>
                  <span className={`font-black text-sm flex-shrink-0 ${casino.minDeposit <= 10 ? 'text-green-400' : 'text-yellow-400'}`}>
                    ab €{casino.minDeposit}
                  </span>
                  <Link href={`/de/bewertungen/${casino.slug}`} className="text-xs text-[#F5A623] hover:underline flex-shrink-0">Bewertung</Link>
                </div>
              ))}
            </div>
            <Link href="/de/casinos" className="text-[#F5A623] text-sm font-bold hover:underline">
              Alle Casinos vergleichen →
            </Link>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Häufige Fehler bei der ersten Einzahlung</h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-3"><span className="text-red-400 font-black flex-shrink-0">✗</span><span><strong className="text-white">Einzahlung ohne Bonuscode:</strong> Manche Boni werden nur mit Code aktiviert. Code vor der Einzahlung in das dafür vorgesehene Feld eintragen.</span></li>
              <li className="flex gap-3"><span className="text-red-400 font-black flex-shrink-0">✗</span><span><strong className="text-white">Falsche Zahlungsmethode:</strong> Skrill oder Neteller sind häufig vom Willkommensbonus ausgeschlossen — Visa oder Trustly sind die sichere Wahl.</span></li>
              <li className="flex gap-3"><span className="text-red-400 font-black flex-shrink-0">✗</span><span><strong className="text-white">Zu niedrige Einzahlung:</strong> Mindestens €20 sind in den meisten Casinos nötig, um den Willkommensbonus auszulösen.</span></li>
              <li className="flex gap-3"><span className="text-red-400 font-black flex-shrink-0">✗</span><span><strong className="text-white">Mehrere Konten:</strong> Ein Spieler darf nur ein Konto pro Casino besitzen. Mehrfach-Anmeldungen führen zur Sperrung und Bonus-Verfall.</span></li>
            </ul>
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
                { label: 'Freispiele Guide', href: '/de/ratgeber/freispiele-guide' },
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
