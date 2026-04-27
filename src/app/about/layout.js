import { getMetadata } from "@/lib/seo"

export const metadata = getMetadata({
  title: "About Us",
  description: "Learn about PerfCalc - trusted gaming performance calculators. Our mission is to help gamers optimize their setups and improve their gaming experience.",
  path: "/about",
})

export default function AboutLayout({ children }) {
  return children
}
