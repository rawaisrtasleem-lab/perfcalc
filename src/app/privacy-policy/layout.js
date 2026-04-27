import { getMetadata } from "@/lib/seo"

export const metadata = getMetadata({
  title: "Privacy Policy",
  description: "PerfCalc Privacy Policy - Learn how we protect your data and privacy. Read our comprehensive privacy statement for our gaming calculator platform.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyLayout({ children }) {
  return children
}
