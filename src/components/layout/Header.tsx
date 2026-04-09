'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)

  const nav = [
    { label: 'Online Casinos', href: '/casinos' },
    { label: 'Bonuses', href: '/bonuses' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Free Games', href: '/free-games' },
    { label: 'Guides', href: '/guides' },
  ]

  const Logo = () => (
    <Link href="/" className="flex items-center">
      <span className="font-black text-white text-xl tracking-tight">
        Bonu<span className="text-[#F5A623]">$</span>cout
        <span className="text-gray-500 font-normal text-base">.com</span>
      </span>
    </Link>
  )

  return (
    <header className="bg-[#161820] border-b border-[#252830] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <nav className="hidden md:flex items-center gap-6">
            {nav.map(item => (
              <Link key={item.href} href={item.href} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/bonuses/no-deposit" className="hidden sm:block bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-4 py-2 rounded-lg transition-colors">
              No Deposit Bonuses
            </Link>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-400 hover:text-white">☰</button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-[#252830] py-3">
            {nav.map(item => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-gray-400 hover:text-white text-sm font-medium">
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
