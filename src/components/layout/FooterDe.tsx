import Link from 'next/link'

export default function FooterDe() {
  return (
    <footer className="bg-[#0A0B0F] border-t border-[#252830] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <span className="font-black text-white text-xl">Bonu<span className="text-[#F5A623]">$</span>cout<span className="text-gray-500 font-normal text-base">.com</span></span>
            <p className="text-gray-500 text-xs leading-relaxed mt-3">Unabhängige Casino-Bonus-Tests. Wir testen jeden Bonus vor der Empfehlung.</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Boni</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link href="/de/boni" className="hover:text-[#F5A623]">Alle Boni</Link></li>
              <li><Link href="/de/boni/kein-einzahlungsbonus" className="hover:text-[#F5A623]">Ohne Einzahlung</Link></li>
              <li><Link href="/de/boni/freispiele" className="hover:text-[#F5A623]">Freispiele</Link></li>
              <li><Link href="/de/boni/willkommensbonus" className="hover:text-[#F5A623]">Willkommensbonus</Link></li>
              <li><Link href="/de/boni/cashback" className="hover:text-[#F5A623]">Cashback</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Casinos</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link href="/de/casinos" className="hover:text-[#F5A623]">Alle Casinos</Link></li>
              <li><Link href="/de/bewertungen" className="hover:text-[#F5A623]">Bewertungen</Link></li>
              <li><Link href="/de/niedrigste-umsatzbedingungen" className="hover:text-[#F5A623]">Niedrigste Umsatzbedingungen</Link></li>
              <li><Link href="/de/kein-wager-casino" className="hover:text-[#F5A623]">Kein Wager Casino</Link></li>
              <li><Link href="/de/krypto-casino-bonus" className="hover:text-[#F5A623]">Krypto Casino</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Info</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link href="/de/ratgeber" className="hover:text-[#F5A623]">Ratgeber</Link></li>
              <li><Link href="/de/uber-uns" className="hover:text-[#F5A623]">Über Uns</Link></li>
              <li><Link href="/de/verantwortungsvolles-spielen" className="hover:text-[#F5A623]">Verantwortungsvolles Spielen</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#252830] pt-6 flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs bg-[#252830] text-gray-400 px-2 py-1 rounded font-bold">18+</span>
          <span className="text-xs bg-[#252830] text-gray-400 px-2 py-1 rounded">GamCare</span>
          <span className="text-xs bg-[#252830] text-gray-400 px-2 py-1 rounded">BeGambleAware</span>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed">
          Glücksspiel birgt Risiken. Spiel verantwortungsbewusst. Nur für Personen ab 18 Jahren. BonusScout.com ist eine unabhängige Affiliate-Website. &copy; {new Date().getFullYear()} BonusScout.com
        </p>
      </div>
    </footer>
  )
}
