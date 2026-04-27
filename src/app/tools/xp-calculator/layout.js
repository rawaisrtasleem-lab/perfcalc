import { getMetadata, getToolSchema } from "@/lib/seo"
import Script from "next/script"

export const metadata = getMetadata({
  title: "XP Calculator",
  description: "Calculate experience points and leveling time for RPG and MMO games. Estimate grinding time and optimize your character progression with our advanced XP calculator.",
  path: "/tools/xp-calculator",
})

export default function XPCalculatorLayout({ children }) {
  const toolSchema = getToolSchema({
    name: "XP Calculator",
    description: "Calculate game experience and leveling time",
    path: "/tools/xp-calculator",
  })

  return (
    <>
      <Script
        id="xp-tool-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolSchema),
        }}
      />
      {children}
    </>
  )
}
