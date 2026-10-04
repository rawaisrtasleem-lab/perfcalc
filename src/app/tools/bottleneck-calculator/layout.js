import { getMetadata, getToolSchema } from "@/lib/seo"
import Script from "next/script"

export const metadata = getMetadata({
  title: "Bottleneck Calculator",
  description: "Compare relative CPU and GPU hardware tiers for 1080p, 1440p, or 4K gaming with a rough resolution-aware pairing guide.",
  path: "/tools/bottleneck-calculator",
})

export default function BottleneckCalculatorLayout({ children }) {
  const toolSchema = getToolSchema({
    name: "Bottleneck Calculator",
    description: "Analyze CPU-GPU bottleneck issues",
    path: "/tools/bottleneck-calculator",
  })

  return (
    <>
      <Script
        id="bottleneck-tool-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolSchema),
        }}
      />
      {children}
    </>
  )
}
