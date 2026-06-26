import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casino Ratgeber 2026 — Experten Guides',
  description: 'Experten Casino Ratgeber. Umsatzbedingungen erklärt, Kein Einzahlungsbonus holen, Freispiele Guide und Krypto Casino erklärt. Aktualisiert Mai 2026.',
  alternates: { canonical: 'https://www.bonuscout.com/de/ratgeber' }
}

const guides = [
  { title: 'Umsatzbedingungen Erklärt', slug: 'umsatzbedingungen-erklaert', desc: 'Was Umsatzbedingungen bedeuten, wie man sie berechnet und welche Casinos die niedrigsten haben.', readTime: '5 Min. Lesezeit' },
  { title: 'Kein Einzahlungsbonus Holen', slug: 'kein-einzahlungsbonus-guide', desc: 'Schritt-für-Schritt Anleitung zum Holen von Gratis-Bonus ohne Einzahlung.', readTime: '4 Min. Lesezeit' },
  { title: 'Freispiele Guide', slug: 'freispiele-guide', desc: 'Alles über Freispiele — Wert pro Spin, Umsatz auf Gewinne und wie man die besten Angebote findet.', readTime: '5 Min. Lesezeit' },
  { title: 'Krypto Casino Guide', slug: 'krypto-casino-guide', desc: 'Bitcoin, Ethereum und Krypto-Glücksspiel erklärt. Vorteile, Einzahlungen und die besten Krypto-Boni.', readTime: '10 Min. Lesezeit' },
  { title: 'Einzahlungsanforderungen Erklärt', slug: 'einzahlungsanforderungen-erklaert', desc: 'Mindesteinzahlung, Limits, Gebühren und Zahlungsmethoden im Vergleich für deutsche Spieler.', readTime: '5 Min. Lesezeit' },
]

export default function DeRatgeberPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Ratgeber</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Casino Ratgeber</h1>
      <p className="text-gray-400 mb-10">Alles, was Sie über Casino-Boni wissen müssen — von unserem Testteam verfasst.</p>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-4">Was Sie hier finden — und warum es wichtig ist</h2>
        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>Casino-Ratgeber sind tiefgehende Erklärtexte, die einzelne Themen des Online-Glücksspiels in praktisch verwertbarem Detailgrad behandeln. Während Bonuslisten und Casino-Bewertungen Ihnen schnell zeigen, wo Sie Wert finden, beantworten Ratgeber das „Warum&quot; und „Wie&quot;. Warum verlangen die meisten Casinos 35-fachen Umsatz? Wie hoch ist der reale Wert eines €100-Freispiel-Pakets? Wann lohnt sich Bitcoin-Glücksspiel gegenüber Euro-Einzahlungen? Genau diese Fragen klären wir in den vier Hauptratgebern unten.</p>

          <p>Warum diese Texte für deutsche Spieler besonders wichtig sind: Der Markt unterliegt seit 2021 dem Glücksspielstaatsvertrag, der vieles strenger reguliert als in Nachbarländern. Anbieter ohne deutsche Lizenz operieren häufig unter Curaçao oder MGA – das ist legal nutzbar, aber die Spielerrechte unterscheiden sich. Wer den Unterschied zwischen einem MGA-lizenzierten und einem rein offshore-betriebenen Casino nicht kennt, riskiert bei Streitfällen Probleme mit der Auszahlung. Unsere Ratgeber adressieren diese deutsche Marktlage explizit, statt allgemeine internationale Empfehlungen zu wiederholen.</p>

          <p>So nutzen Sie die Texte effektiv: Lesen Sie zuerst den Ratgeber zu Umsatzbedingungen – das ist das Konzept, an dem 90% aller Spieler scheitern. Wer einen 100%-Bonus annimmt, ohne die Mathematik hinter 40x Wagering zu verstehen, verliert statistisch mehr Geld als ohne Bonus. Anschließend wählen Sie den Ratgeber, der zu Ihrer Spielstrategie passt: Wer mit kleinen Beträgen risikolos starten möchte, beginnt mit „Kein Einzahlungsbonus Holen&quot;. Wer Bitcoin oder Ethereum besitzt, springt direkt zum Krypto-Guide. Wer auf Freispiel-Pakete fokussiert, findet im Freispiele-Guide die mathematische Wertberechnung.</p>

          <p>Eine Kurzzusammenfassung der vier Hauptratgeber:</p>

          <p><strong className="text-white">Umsatzbedingungen Erklärt</strong> — der wichtigste Text für jeden Einsteiger. Wir zeigen mit echten Zahlen, wie 40x-Wagering auf einen €200-Bonus tatsächlich €8.000 Umsatz bedeutet, welche Spielanteile (Slots 100%, Roulette oft 10%, Live-Tische 0%) gelten und welche Casinos die niedrigsten Bedingungen bieten. Lesezeit etwa 5 Minuten.</p>

          <p><strong className="text-white">Kein Einzahlungsbonus Holen</strong> — Schritt-für-Schritt-Anleitung zum Sichern von Bonus ohne Eigenkapital. Der Text geht über die Registrierung hinaus auf KYC, Maximalauszahlung, häufige Fehler und Tipps zur realistischen Erwartungshaltung ein. Wer das einmal verstanden hat, vermeidet die teuersten Anfängerfehler.</p>

          <p><strong className="text-white">Freispiele Guide</strong> — wir berechnen den realen Wert pro Spin (€0,10 vs. €0,50 macht enorme Unterschiede), erklären, ob Umsatz auf den Gewinn oder den Spielwert angewendet wird, und zeigen, welche Slot-Hersteller die fairsten Freispiele-Pakete liefern. Pragmatic Play, Hacksaw und NoLimit City stehen im direkten Vergleich.</p>

          <p><strong className="text-white">Krypto Casino Guide</strong> — der umfangreichste Text mit 10 Minuten Lesezeit. Bitcoin, Ethereum und Stablecoins werden erklärt, Provably Fair entmystifiziert und die deutschen Steueraspekte (siehe §23 EStG) eingeordnet. Pflichtlektüre für jeden, der ernsthaft mit Krypto im Casino spielen will.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guides.map(g => (
          <Link key={g.slug} href={`/de/ratgeber/${g.slug}`}
            className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/40 rounded-xl p-6 group transition-all">
            <div className="text-xs text-[#F5A623] font-bold mb-2">{g.readTime}</div>
            <h2 className="font-black text-white group-hover:text-[#F5A623] transition-colors mb-2">{g.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">{g.desc}</p>
            <div className="mt-4 text-[#F5A623] text-sm font-bold">Ratgeber lesen →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
