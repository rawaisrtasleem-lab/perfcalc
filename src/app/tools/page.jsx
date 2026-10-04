import Link from "next/link"

const tools = [
  {
    name: "FPS Calculator",
    description: "Estimate gaming frame rates and check expected performance.",
    href: "/tools/fps-calculator",
  },
  {
    name: "DPS Calculator",
    description: "Calculate damage per second for games and character builds.",
    href: "/tools/dps-calculator",
  },
  {
    name: "Bottleneck Calculator",
    description: "Find potential CPU and GPU performance bottlenecks.",
    href: "/tools/bottleneck-calculator",
  },
  {
    name: "XP Calculator",
    description: "Track experience points and estimate leveling progress.",
    href: "/tools/xp-calculator",
  },
  {
    name: "Download Time Calculator",
    description: "Estimate how long a download will take.",
    href: "/tools/download-time-calculator",
  },
  {
    name: "eDPI Calculator",
    description: "Calculate effective DPI from your mouse settings.",
    href: "/tools/edpi-calculator",
  },
  {
    name: "Pokémon Type Calculator",
    description: "Check Pokémon type matchups, weaknesses, and resistances.",
    href: "/tools/pokemon-type-calculator",
  },
  {
    name: "Blox Fruits Calculator",
    description: "Compare Blox Fruits values and trading worth.",
    href: "/tools/blox-fruits-calculator",
  },
  {
    name: "VRAM Calculator",
    description: "Estimate GPU memory requirements for local LLMs and gaming.",
    href: "/tools/vram-calculator-for-llm",
  },
  {
    name: "Aspect Ratio Finder",
    description: "Find aspect ratios from image or video dimensions.",
    href: "/tools/aspect-ratio-finder",
  },
]

export default function ToolsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-16 text-white sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">All Gaming Tools</h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Explore free calculators and utilities for gaming performance,
          hardware, progression, and more.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <li key={tool.href}>
            <Link
              href={tool.href}
              className="block h-full rounded-xl border border-cyan-400/20 bg-slate-900/60 p-6 transition-colors hover:border-cyan-400/60"
            >
              <h2 className="text-lg font-semibold text-cyan-300">
                {tool.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {tool.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
