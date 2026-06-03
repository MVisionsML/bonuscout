import Link from 'next/link'

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/news" className="hover:text-[#F5A623]">Articles</Link>
      </div>
      <article>{children}</article>
    </div>
  )
}
