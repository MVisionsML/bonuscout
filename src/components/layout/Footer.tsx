import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0A0B0F] border-t border-[#252830] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#F5A623] text-black font-black text-sm px-3 py-1.5 rounded-lg">BONUS</div>
              <span className="font-black text-white text-lg">scout<span className="text-[#F5A623]">.com</span></span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Independent casino bonus reviews. We test every bonus before we recommend it.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Bonuses</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link href="/bonuses" className="hover:text-[#F5A623] transition-colors">All Bonuses</Link></li>
              <li><Link href="/bonuses/no-deposit" className="hover:text-[#F5A623] transition-colors">No Deposit</Link></li>
              <li><Link href="/bonuses/free-spins" className="hover:text-[#F5A623] transition-colors">Free Spins</Link></li>
              <li><Link href="/bonuses/welcome" className="hover:text-[#F5A623] transition-colors">Welcome Bonus</Link></li>
              <li><Link href="/bonuses/cashback" className="hover:text-[#F5A623] transition-colors">Cashback</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Casinos</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link href="/casinos" className="hover:text-[#F5A623] transition-colors">All Casinos</Link></li>
              <li><Link href="/reviews" className="hover:text-[#F5A623] transition-colors">Casino Reviews</Link></li>
              <li><Link href="/casinos/new" className="hover:text-[#F5A623] transition-colors">New Casinos</Link></li>
              <li><Link href="/free-games" className="hover:text-[#F5A623] transition-colors">Free Games</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Info</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link href="/about" className="hover:text-[#F5A623] transition-colors">About Us</Link></li>
              <li><Link href="/methodology" className="hover:text-[#F5A623] transition-colors">Methodology</Link></li>
              <li><Link href="/responsible-gambling" className="hover:text-[#F5A623] transition-colors">Responsible Gambling</Link></li>
              <li><Link href="/contact" className="hover:text-[#F5A623] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#252830] pt-6 flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs bg-[#252830] text-gray-400 px-2 py-1 rounded font-bold">18+</span>
          <span className="text-xs bg-[#252830] text-gray-400 px-2 py-1 rounded">GamCare</span>
          <span className="text-xs bg-[#252830] text-gray-400 px-2 py-1 rounded">BeGambleAware</span>
          <span className="text-xs bg-[#252830] text-gray-400 px-2 py-1 rounded">Gamban</span>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed">
          Gambling involves risk. Play responsibly. 18+ only. BonusScout.com is an independent affiliate website.
          We may receive commission when you sign up through our links. &copy; {new Date().getFullYear()} BonusScout.com
        </p>
      </div>
    </footer>
  )
}
