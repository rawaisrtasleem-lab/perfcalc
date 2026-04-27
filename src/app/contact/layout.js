import { getMetadata } from "@/lib/seo"

export const metadata = getMetadata({
  title: "Contact Us",
  description: "Get in touch with PerfCalc support team. Have questions or feedback about our gaming calculators? Contact us today.",
  path: "/contact",
})

export default function ContactLayout({ children }) {
  return children
}
