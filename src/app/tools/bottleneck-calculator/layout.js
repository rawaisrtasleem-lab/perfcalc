import { getMetadata, getToolSchema } from "@/lib/seo"
import Script from "next/script"

export const metadata = getMetadata({
  title: "Bottleneck Calculator",
  description: "Identify CPU-GPU bottlenecks in your gaming PC. Analyze hardware compatibility and get recommendations to maximize gaming performance and eliminate system bottlenecks.",
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
