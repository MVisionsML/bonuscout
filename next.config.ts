import type { NextConfig } from "next"
import createMDX from "@next/mdx"
import remarkFrontmatter from "remark-frontmatter"

const nextConfig: NextConfig = {
  // Treat .mdx files as page files alongside existing .tsx pages.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      // Specific known-broken WordPress endpoint before the catch-all (first match wins).
      { source: "/wp-json/elementskit/v1/", destination: "/", permanent: true },
      // Catch-all for any other lingering /wp-json/* requests from the old WordPress site.
      { source: "/wp-json/:path*", destination: "/", permanent: true },
    ]
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // YAML frontmatter at the top of MDX files would otherwise be rendered as page text.
    // remarkFrontmatter recognises it as metadata and skips it during rendering.
    // (Our SEO-agent pipeline writes title/slug/canonical/schema in YAML at the top of each .mdx.)
    remarkPlugins: [["remark-frontmatter", "yaml"]],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
