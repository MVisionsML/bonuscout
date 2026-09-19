import Header from '@/components/layout/HeaderDe'
import Footer from '@/components/layout/FooterDe'

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

