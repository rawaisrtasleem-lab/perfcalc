import { getMetadata } from "@/lib/seo"

export const metadata = getMetadata({
  title: "Terms & Conditions",
  description: "PerfCalcPro Terms & Conditions - Read our complete terms of service, usage policies, and legal agreements for our gaming calculator platform.",
  path: "/terms",
})

export default function TermsLayout({ children }) {
  return children
}
