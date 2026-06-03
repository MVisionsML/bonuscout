import type { MDXComponents } from 'mdx/types'

// Styles MDX content (from /articles/* page.mdx files and /news/* via MDXRemote) to match
// BonusScout's dark theme. The override map is exported two ways:
//   - `mdxComponents` const: for async server components that pass components explicitly to
//     <MDXRemote> (calling useMDXComponents in an async function trips react-hooks lint).
//   - `useMDXComponents` function: required by Next.js MDX integration to apply overrides
//     automatically to static .mdx pages under app/.

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-black text-white mb-4 mt-2">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-black text-white mt-10 mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold text-white mt-6 mb-2">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-bold text-white mt-5 mb-2">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="text-gray-400 leading-relaxed mb-4">{children}</p>
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-[#F5A623] hover:underline">{children}</a>
  ),
  ul: ({ children }) => (
    <ul className="text-gray-400 list-disc pl-6 mb-4 space-y-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="text-gray-400 list-decimal pl-6 mb-4 space-y-1">{children}</ol>
  ),
  li: ({ children }) => <li className="text-gray-400 leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#F5A623] pl-4 my-4 text-gray-400 italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-[#252830] px-1.5 py-0.5 rounded text-[#F5A623] text-sm">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="bg-[#161820] border border-[#252830] rounded-xl p-4 my-4 overflow-x-auto text-sm">{children}</pre>
  ),
  hr: () => <hr className="border-[#252830] my-8" />,
  table: ({ children }) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-[#0D0F14]">{children}</thead>,
  th: ({ children }) => (
    <th className="text-left py-2 px-3 border-b border-[#252830] text-gray-400 font-bold text-xs uppercase tracking-wide">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-2 px-3 border-b border-[#1c1f29] text-gray-400">{children}</td>
  ),
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...mdxComponents, ...components }
}
