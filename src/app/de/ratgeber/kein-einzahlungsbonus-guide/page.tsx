import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Kein Einzahlungsbonus Guide 2026 — Schritt für Schritt sichern | BonusScout',
  description: 'Kein Einzahlungsbonus richtig holen: Schritt-für-Schritt Anleitung, KYC, Maximalauszahlung und häufige Fehler. Aktualisiert Juni 2026.',
  alternates: { canonical: 'https://www.bonuscout.com/de/ratgeber/kein-einzahlungsbonus-guide' }
}

const noDepositPicks = [...casinos]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 5)

const faqs = [
  { q: 'Was ist ein Kein-Einzahlungs-Bonus?', a: 'Ein Kein-Einzahlungs-Bonus (No-Deposit-Bonus) ist Bonusguthaben oder Freispiele, die ein Casino bei der Registrierung vergibt — ohne dass eine eigene Einzahlung erforderlich ist. Typische Pakete sind 10-50 Freispiele oder €5-€25 Bonusgeld.' },
  { q: 'Kann ich Gewinne aus einem Kein-Einzahlungs-Bonus auszahlen?', a: 'Ja, aber meist erst nach Erfüllung der Umsatzbedingungen (oft 35x-50x) und nach einer KYC-Verifizierung. Zusätzlich gibt es in der Regel eine Maximalauszahlung von €50-€100, unabhängig vom tatsächlichen Gewinn.' },
  { q: 'Muss ich mich verifizieren?', a: 'Ja — die KYC-Verifizierung (Know Your Customer) ist spätestens vor der ersten Auszahlung verpflichtend. Sie benötigen Ausweis, Adressnachweis und manchmal einen Selfie-Check. Ohne KYC wird keine Auszahlung freigegeben.' },
  { q: 'Wie hoch ist die Maximalauszahlung?', a: 'Bei den meisten Kein-Einzahlungs-Boni liegt die Maximalauszahlung bei €50-€100. Wenn Sie €200 gewinnen, aber das Limit €50 ist, werden nur €50 ausgezahlt und der Rest verfällt.' },
  { q: 'Kann ich mehrere Kein-Einzahlungs-Boni nutzen?', a: 'Nein — pro Spieler und Casino ist nur ein Konto erlaubt. Versuche, mit mehreren Konten mehrere Boni zu sichern, führen zur Sperrung aller Konten und Gewinnverfall.' },
  { q: 'Brauche ich einen Bonuscode?', a: 'Manche Boni werden automatisch bei der Registrierung gutgeschrieben, andere benötigen einen Bonuscode. Aktuelle Codes finden Sie in unseren Casino-Bewertungen oder direkt auf der Bonus-Seite des Casinos.' },
]

export default function DeKeinEinzahlungsbonusPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
          <span className="mx-2">›</span>
          <Link href="/de/ratgeber" className="hover:text-[#F5A623]">Ratgeber</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Kein Einzahlungsbonus Guide</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Kein Einzahlungsbonus Holen</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          <span>4 Min. Lesezeit</span><span>·</span><span>Aktualisiert Juni 2026</span><span>·</span><span>BonusScout Team</span>
        </div>

        <div className="space-y-8">

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Was ist ein Kein-Einzahlungs-Bonus?</h2>
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed space-y-3">
              <p>Ein Kein-Einzahlungs-Bonus (international: <em>No-Deposit Bonus</em>) ist Bonusguthaben oder Freispiele, die ein Casino bereits bei der Registrierung vergibt — ohne eigene Einzahlung. Die typische Paketgröße liegt zwischen 10 und 50 Freispielen oder €5 bis €25 Bonusgeld.</p>
              <p>Der wirtschaftliche Sinn aus Casino-Sicht ist klar: Akquisekosten. Statt €30 pro Lead an Affiliates zu zahlen, gibt das Casino €10 direkt dem Spieler — mit der Hoffnung, dass dieser nach dem Bonus auch echte Einzahlungen tätigt. Für Spieler ist es eine risikofreie Möglichkeit, eine Plattform zu testen, bevor eigenes Geld in Bewegung kommt.</p>
            </div>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Schritt-für-Schritt Anleitung</h2>
            <div className="space-y-4">
              {[
                { n: 1, title: 'Casino mit Kein-Einzahlungs-Angebot auswählen', body: 'In unserer aktuellen Liste finden Sie Casinos mit verifizierten Angeboten. Achten Sie auf die Umsatzbedingungen und die Maximalauszahlung — beide Zahlen bestimmen den realen Wert.' },
                { n: 2, title: 'Registrieren und Bonuscode eingeben', body: 'Mit echten Daten anmelden. Manche Boni werden automatisch aktiviert, andere benötigen einen Code im Registrierungsformular. Falsche Daten führen später bei der KYC zur Sperrung.' },
                { n: 3, title: 'Bonus gutschreiben lassen', body: 'Nach der Bestätigung der E-Mail-Adresse erscheint der Bonus normalerweise innerhalb weniger Minuten. Bei Verzögerungen den Live-Chat kontaktieren.' },
                { n: 4, title: 'Mit Freispielen oder Bonusguthaben spielen', body: 'Beachten Sie den Maximaleinsatz pro Spin (oft €1-€2). Höhere Einsätze führen zur Annullierung von Gewinnen, auch wenn der Bonus selbst noch nicht umgesetzt ist.' },
                { n: 5, title: 'Umsatzbedingungen erfüllen', body: '35x bis 50x Wagering auf die Gewinne aus dem Bonus. Bei €20 Gewinn und 40x Umsatz müssen Sie €800 Slot-Einsätze tätigen, bevor Auszahlung möglich ist.' },
                { n: 6, title: 'KYC durchführen', body: 'Ausweis und Adressnachweis hochladen. Der Vorgang dauert in der Regel 6-12 Stunden. Ohne KYC keine Auszahlung — egal wie hoch der Gewinn.' },
                { n: 7, title: 'Auszahlung beantragen', body: 'Maximal bis zur Auszahlungsgrenze des Bonus (oft €50-€100). Höhere Gewinne verfallen — das ist die wichtigste Einschränkung dieser Bonusart.' },
              ].map(s => (
                <div key={s.n} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F5A623] text-[#0D0F14] font-black flex items-center justify-center flex-shrink-0 text-sm">{s.n}</div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-sm">{s.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Realistische Erwartungshaltung — die Mathematik</h2>
            <div className="bg-[#0D0F14] rounded-xl p-5 mb-4 font-mono text-sm">
              <div className="text-green-400 mb-2">Typisches Szenario:</div>
              <div className="text-gray-300 mb-1">Bonus: <span className="text-white font-bold">25 Freispiele zu €0,10</span></div>
              <div className="text-gray-300 mb-1">Spielwertvolumen: <span className="text-white font-bold">€2,50</span></div>
              <div className="text-gray-300 mb-1">Erwarteter Gewinn (96% RTP): <span className="text-white font-bold">€2,40</span></div>
              <div className="text-gray-300 mb-1">Umsatzbedingungen: <span className="text-white font-bold">40x auf Gewinne</span></div>
              <div className="text-gray-300 mb-1">Maximalauszahlung: <span className="text-white font-bold">€50</span></div>
              <div className="text-[#F5A623] mt-3">→ Realer erwarteter Auszahlungswert: <span className="font-black">€0,30 — €2,50</span></div>
            </div>
            <p className="text-gray-400 text-sm">Kein-Einzahlungs-Boni sind <em>nicht</em> der Weg zum schnellen Reichtum. Der reale erwartete Wert liegt deutlich unter dem Marketingwert. Sie sind ein <strong className="text-white">risikofreier Test der Plattform</strong>, nicht eine Einkommensquelle.</p>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Häufige Fehler vermeiden</h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-3"><span className="text-red-400 font-black flex-shrink-0">✗</span><span><strong className="text-white">Maximaleinsatz überschreiten:</strong> Spiele mit €2,50 statt €1 führen zur Annullierung aller Gewinne. Maximaleinsatz immer in den AGB nachprüfen.</span></li>
              <li className="flex gap-3"><span className="text-red-400 font-black flex-shrink-0">✗</span><span><strong className="text-white">Mehrere Konten:</strong> Ein Spieler darf nur ein Konto pro Casino besitzen. IP-Adresse, Zahlungsmethode und ID sind eindeutig.</span></li>
              <li className="flex gap-3"><span className="text-red-400 font-black flex-shrink-0">✗</span><span><strong className="text-white">Verbotene Spiele:</strong> Viele Slots (insbesondere progressive Jackpots und Tischspiele) sind von No-Deposit-Boni ausgeschlossen. Liste der zulässigen Spiele prüfen.</span></li>
              <li className="flex gap-3"><span className="text-red-400 font-black flex-shrink-0">✗</span><span><strong className="text-white">KYC zu spät einreichen:</strong> Viele Boni haben eine Frist (oft 7 Tage) zur Umsatzerfüllung. KYC frühzeitig starten, nicht erst bei Auszahlung.</span></li>
              <li className="flex gap-3"><span className="text-red-400 font-black flex-shrink-0">✗</span><span><strong className="text-white">Auszahlung vor Umsatzerfüllung:</strong> Eine vorzeitige Auszahlungsanfrage annulliert den gesamten Bonus und alle Gewinne.</span></li>
            </ul>
          </div>

          <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8">
            <h2 className="font-black text-white text-xl mb-4">Empfohlene Casinos für No-Deposit</h2>
            <div className="space-y-3 mb-4">
              {noDepositPicks.map((casino, i) => (
                <div key={casino.id} className="flex items-center gap-4 bg-[#0D0F14] rounded-xl p-4">
                  <span className="text-gray-500 font-black w-6 text-sm flex-shrink-0">#{i+1}</span>
                  <span className="text-2xl flex-shrink-0">{casino.logo}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-sm">{casino.name}</div>
                    <div className="text-[#F5A623] text-xs">{casino.bonus}</div>
                  </div>
                  <span className="font-black text-sm flex-shrink-0 text-yellow-400">
                    {casino.rating}/5
                  </span>
                  <Link href={`/de/bewertungen/${casino.slug}`} className="text-xs text-[#F5A623] hover:underline flex-shrink-0">Bewertung</Link>
                </div>
              ))}
            </div>
            <Link href="/de/boni" className="text-[#F5A623] text-sm font-bold hover:underline">
              Alle aktuellen Bonus-Angebote →
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
                { label: 'Freispiele Guide', href: '/de/ratgeber/freispiele-guide' },
                { label: 'Einzahlungsanforderungen', href: '/de/ratgeber/einzahlungsanforderungen-erklaert' },
                { label: 'Kein Wager Casino', href: '/de/kein-wager-casino' },
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
