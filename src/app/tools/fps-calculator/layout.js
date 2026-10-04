import { getMetadata, getToolSchema } from "@/lib/seo"
import Script from "next/script"

export const metadata = getMetadata({
  title: "FPS Calculator",
  description: "Estimate gaming FPS from your selected CPU, GPU, game, and resolution. Check monitor refresh-rate targets and likely hardware bottlenecks.",
  path: "/tools/fps-calculator",
})

export default function FPSCalculatorLayout({ children }) {
  const toolSchema = getToolSchema({
    name: "FPS Calculator",
    description: "Calculate gaming FPS performance",
    path: "/tools/fps-calculator",
  })

  return (
    <>
      <Script
        id="fps-tool-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolSchema),
        }}
      />
      {children}
    </>
  )
}
