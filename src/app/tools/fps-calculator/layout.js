import { getMetadata, getToolSchema } from "@/lib/seo"
import Script from "next/script"

export const metadata = getMetadata({
  title: "FPS Calculator",
  description: "Calculate expected FPS (frames per second) for any PC gaming setup. Get accurate performance predictions for your CPU and GPU combination to optimize gaming performance.",
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
