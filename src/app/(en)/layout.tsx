import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import '../globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoogleAnalytics from '@/components/seo/GoogleAnalytics'

const geist = Geist({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bonuscout.com'),
  title: {
    default: 'BonusCout — Best Casino Bonuses & Reviews 2026',
    template: '%s | BonusCout',
  },
  description: 'Independent casino bonus reviews. Every bonus is compiled from the operator’s published Terms & Conditions before we recommend it.',
  robots: { index: true, follow: true },
}

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#0D0F14] text-gray-200`}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
