import { getMetadata } from "@/lib/seo"

export const metadata = getMetadata({
  title: "Gaming Guides",
  description: "Comprehensive guides to using PerfCalc tools. Learn how to interpret results and optimize your gaming performance with our step-by-step tutorials.",
  path: "/guide",
})

export default function GuideLayout({ children }) {
  return children
}
