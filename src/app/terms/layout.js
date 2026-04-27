import { getMetadata } from "@/lib/seo"

export const metadata = getMetadata({
  title: "Terms of Service",
  description: "PerfCalc Terms of Service - Read our full terms and conditions for using our gaming calculator platform.",
  path: "/terms",
})

export default function TermsLayout({ children }) {
  return children
}
