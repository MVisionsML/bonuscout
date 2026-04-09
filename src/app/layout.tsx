import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bonuscout.com'),
  title: {
    default: 'BonusScout — Best Casino Bonuses & Reviews 2026',
    template: '%s | BonusScout'
  },
  description: 'Independent casino bonus reviews. We test every bonus before we recommend it. No deposit bonuses, free spins, and welcome offers.',
  keywords: ['casino bonus', 'no deposit bonus', 'free spins', 'casino reviews', 'best casino bonuses'],
  openGraph: {
    type: 'website',
    siteName: 'BonusScout',
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#0D0F14] text-gray-200`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
