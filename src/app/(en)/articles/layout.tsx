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

      <aside className="mt-12 pt-8 border-t border-[#252830]">
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed">
            <span className="text-white font-bold">Looking for detailed casino reviews?</span>{' '}
            Visit <a
              href="https://www.bonusreviewers.com"
              rel="dofollow"
              className="text-[#F5A623] hover:underline font-bold"
            >BonusReviewers.com</a> for independently tested casino ratings.
          </p>
        </div>
      </aside>
    </div>
  )
}
