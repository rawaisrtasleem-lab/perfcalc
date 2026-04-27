import { getMetadata } from "@/lib/seo"

export const metadata = getMetadata({
  title: "Blog",
  description: "Read the latest gaming tips, guides, and tutorials. Learn how to optimize your gaming performance with expert advice from PerfCalc.",
  path: "/blog",
})

export default function BlogLayout({ children }) {
  return children
}
