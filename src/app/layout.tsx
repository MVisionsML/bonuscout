import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/seo/GoogleAnalytics'

const geist = Geist({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bonuscout.com'),
  title: {
    default: 'BonusScout — Best Casino Bonuses & Reviews 2026',
    template: '%s | BonusScout'
  },
  description: 'Independent casino bonus reviews. We test every bonus before we recommend it.',
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#0D0F14] text-gray-200`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
