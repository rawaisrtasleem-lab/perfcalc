import { getMetadata } from "@/lib/seo"

export const metadata = getMetadata({
  title: "Gaming Tools",
  description: "Explore all PerfCalc gaming tools - FPS calculator, DPS calculator, bottleneck analyzer, and XP calculator. Free tools for gamers.",
  path: "/tools",
})

export default function ToolsLayout({ children }) {
  return children
}
