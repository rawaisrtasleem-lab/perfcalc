import { getMetadata, getToolSchema } from "@/lib/seo"
import Script from "next/script"

export const metadata = getMetadata({
  title: "DPS Calculator",
  description: "Calculate DPS (Damage Per Second) for RPG and MMO games. Use our advanced DPS calculator to optimize your character's damage output based on stats, equipment, and abilities.",
  path: "/tools/dps-calculator",
})

export default function DPSCalculatorLayout({ children }) {
  const toolSchema = getToolSchema({
    name: "DPS Calculator",
    description: "Calculate gaming damage per second",
    path: "/tools/dps-calculator",
  })

  return (
    <>
      <Script
        id="dps-tool-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolSchema),
        }}
      />
      {children}
    </>
  )
}
