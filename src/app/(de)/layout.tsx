import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import '../globals.css'
import GoogleAnalytics from '@/components/seo/GoogleAnalytics'

const geist = Geist({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bonuscout.com'),
  title: {
    default: 'BonusCout — Casino Boni & Bewertungen 2026',
    template: '%s | BonusCout',
  },
  description: 'Unabhängige Casino-Bonus-Bewertungen. Jeder Bonus wird aus den veröffentlichten AGB des Anbieters zusammengestellt, bevor wir ihn empfehlen.',
  robots: { index: true, follow: true },
}

export default function DeRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${geist.className} bg-[#0D0F14] text-gray-200`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
