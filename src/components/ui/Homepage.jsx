import Link from "next/link"
import Homeseo from "./Homeseo"

const defaultTools = [
  {
    id: 1,
    title: "FPS Calculator",
    description: "Estimate frame rates and identify potential performance bottlenecks.",
    link: "/tools/fps-calculator",
    category: "Performance & Hardware",
    icon: () => <span aria-hidden="true">🎮</span>,
  },
  {
    id: 2,
    title: "DPS Calculator",
    description: "Calculate damage per second and compare different builds.",
    link: "/tools/dps-calculator",
    category: "Combat & Builds",
    icon: () => <span aria-hidden="true">⚔️</span>,
  },
  {
    id: 3,
    title: "XP Calculator",
    description: "Track experience points and estimate your leveling progress.",
    link: "/tools/xp-calculator",
    category: "Progression",
    icon: () => <span aria-hidden="true">⭐</span>,
  },
  {
    id: 4,
    title: "Bottleneck Calculator",
    description: "Identify hardware limitations in your gaming system.",
    link: "/tools/bottleneck-calculator",
    category: "Performance & Hardware",
    icon: () => <span aria-hidden="true">💻</span>,
  },
  {
    id: 5,
    title: "Download Time Calculator",
    description: "Estimate how long files and games will take to download.",
    link: "/tools/download-time-calculator",
    category: "Performance & Hardware",
    icon: () => <span aria-hidden="true">📥</span>,
  },
  {
    id: 6,
    title: "EDPI Calculator",
    description: "Calculate effective DPI for a more consistent gaming setup.",
    link: "/tools/edpi-calculator",
    category: "Aim & Sensitivity",
    icon: () => <span aria-hidden="true">🖱️</span>,
  },
  {
    id: 7,
    title: "Pokémon Type Calculator",
    description: "Calculate Pokémon weaknesses, resistances, and immunities.",
    link: "/tools/pokemon-type-calculator",
    category: "Game-Specific Tools",
    icon: () => <span aria-hidden="true">🛡️</span>,
  },
  {
    id: 8,
    title: "VRAM Calculator",
    description: "Estimate VRAM requirements for LLMs and gaming workloads.",
    link: "/vram-calculator-for-llm",
    category: "Performance & Hardware",
    icon: () => <span aria-hidden="true">🧠</span>,
  },
  {
    id: 9,
    title: "Aspect Ratio Finder",
    description: "Find image and video aspect ratios from width and height dimensions.",
    link: "/tools/aspect-ratio-finder",
    category: "Utilities",
    icon: () => <span aria-hidden="true">📐</span>,
  },
]

const preferredCategoryOrder = [
  "Performance & Hardware",
  "Combat & Builds",
  "Progression",
  "Aim & Sensitivity",
  "Game-Specific Tools",
]

export default function Homepage({ tools }) {
  const toolList =
    tools && Array.isArray(tools) && tools.length > 0 ? tools : defaultTools

  const groupedTools = toolList.reduce((groups, tool) => {
    const category = tool.category || "Gaming Tools"

    if (!groups[category]) {
      groups[category] = []
    }

    groups[category].push(tool)
    return groups
  }, {})

  const categoryNames = [
    ...preferredCategoryOrder.filter((category) => groupedTools[category]),
    ...Object.keys(groupedTools).filter(
      (category) => !preferredCategoryOrder.includes(category)
    ),
  ]

  return (
    <div className="w-full  text-slate-100">
      {/* HERO */}
      <section className="relative  px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-6 -z-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl sm:h-96 sm:w-96"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-7rem] top-[-3rem] -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-8rem] left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center rounded-full border border-blue-300/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur-sm sm:text-sm">
                <span
                  aria-hidden="true"
                  className="mr-2 h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_18px_rgba(200,232,249,0.75)]"
                />
                <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Free browser-based gaming calculators
                </span>
              </span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Free Gaming Tools for{" "}
              <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Better Performance
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-4xl text-lg font-semibold text-slate-200 sm:text-xl">
              Fast. Practical. Built for gamers.
            </p>

            <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Calculate FPS, DPS, XP, sensitivity, hardware bottlenecks, download
              time, and more with focused tools designed to give you clear answers
              without unnecessary setup.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="#tools"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 px-6 py-3 text-sm font-bold !text-white !no-underline shadow-[0_14px_45px_rgba(37,99,235,0.22)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
              >
                Explore Gaming Tools
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <Link
                href="/tools/fps-calculator"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-bold !text-slate-100 !no-underline backdrop-blur-sm transition duration-200 hover:border-blue-300/30 hover:bg-white/[0.09]"
              >
                Try FPS Calculator
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="text-cyan-300">
                  ✓
                </span>
                Instant results
              </span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="text-cyan-300">
                  ✓
                </span>
                No sign-up
              </span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="text-cyan-300">
                  ✓
                </span>
                Simple, focused calculators
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIZED TOOLS */}
      <section
        id="tools"
        className="w-full scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Gaming Calculators
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Explore All Gaming Tools
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
              Choose a category, open a calculator, and get the numbers you need
              for your setup, build, or game.
            </p>
          </div>

          <div className="space-y-14">
            {categoryNames.map((category) => {
              const categoryTools = groupedTools[category]

              return (
                <section key={category} aria-labelledby={`category-${category}`}>
                  <div className="mb-5 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <h3
                        id={`category-${category}`}
                        className="text-xl font-bold text-white sm:text-2xl"
                      >
                        {category}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {categoryTools.length} {categoryTools.length === 1 ? "tool" : "tools"}
                      </p>
                    </div>

                    <div
                      aria-hidden="true"
                      className="h-px w-16 bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 sm:w-24"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {categoryTools.map((tool, index) => {
                      const IconComponent = tool.icon

                      return (
                        <Link
                          key={tool.id}
                          href={tool.link}
                          className="group relative flex min-h-[176px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 !no-underline transition duration-200 hover:-translate-y-0.5 hover:border-blue-400/35 hover:bg-white/[0.055] sm:p-6"
                        >
                          <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-violet-400/0 via-blue-400/60 to-cyan-300/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                          />

                          <div className="flex w-full gap-4 sm:gap-5">
                            <div className="flex flex-col items-center gap-3">
                              <span className="text-xs font-bold tracking-[0.18em] text-slate-600">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-300/15 bg-gradient-to-br from-violet-500/15 via-blue-500/15 to-cyan-400/10 text-xl">
                                {IconComponent && (
                                  <IconComponent
                                    size={24}
                                    className="text-cyan-200"
                                  />
                                )}
                              </div>
                            </div>

                            <div className="flex min-w-0 flex-1 flex-col">
                              <h4 className="text-lg font-bold text-white sm:text-xl">
                                {tool.title}
                              </h4>

                              <p className="mt-2 flex-1 text-sm leading-6 text-slate-400 sm:text-[15px]">
                                {tool.description}
                              </p>

                              <div className="mt-5 flex items-center text-sm font-bold text-cyan-300">
                                <span>Open tool</span>
                                <span
                                  aria-hidden="true"
                                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                                >
                                  →
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY GAMERS USE PERFCALCPRO
      ====================================================== */}
      <section className="w-full border-t border-white/5 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Why PerfCalcPro
            </span>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Why Gamers Use{" "}
              <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                PerfCalcPro
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Practical gaming calculators built to help you make faster, clearer
              decisions about performance, builds, hardware, and setup.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:-translate-y-1 hover:border-violet-400/35 hover:bg-white/[0.055]">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"
              />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-300/15 bg-gradient-to-br from-violet-500/20 via-blue-500/15 to-cyan-400/10 text-2xl">
                <span aria-hidden="true">⚡</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Fast, Clear Results
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                Get useful numbers quickly without complicated setup, long forms,
                or unnecessary steps getting in the way.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-400/35 hover:bg-white/[0.055]">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/15 bg-gradient-to-br from-violet-500/15 via-blue-500/20 to-cyan-400/10 text-2xl">
                <span aria-hidden="true">🎯</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Built for Gaming Decisions
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                Compare FPS, damage, sensitivity, hardware limits, and other key
                values so you can make smarter choices for your setup and games.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.055]">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
              />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-gradient-to-br from-violet-500/10 via-blue-500/15 to-cyan-400/20 text-2xl">
                <span aria-hidden="true">🛠️</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Free and Easy to Use
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                Open a tool in your browser, enter your values, and get the result.
                No account required and no extra software to install.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}