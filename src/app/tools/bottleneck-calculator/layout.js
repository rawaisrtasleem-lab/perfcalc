import { getMetadata, getToolSchema } from "@/lib/seo"
import Script from "next/script"

export const metadata = getMetadata({
  title: "Bottleneck Calculator",
  description: "Check your CPU & GPU bottleneck for free. Get accurate FPS estimates, resolution testing & personalized upgrade recommendations instantly.",
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
