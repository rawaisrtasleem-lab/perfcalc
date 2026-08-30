import Link from "next/link"
import Homeseo from "./Homeseo"


const defaultTools = [
  {
    id: 1,
    title: "FPS Calculator",
    description: "Estimate frame rates and identify potential performance bottlenecks.",
    link: "/tools/fps-calculator",
    icon: () => <span aria-hidden="true">🎮</span>,
  },
  {
    id: 2,
    title: "DPS Calculator",
    description: "Calculate damage per second and compare different builds.",
    link: "/tools/dps-calculator",
    icon: () => <span aria-hidden="true">⚔️</span>,
  },
  {
    id: 3,
    title: "XP Calculator",
    description: "Track experience points and estimate your leveling progress.",
    link: "/tools/xp-calculator",
    icon: () => <span aria-hidden="true">⭐</span>,
  },
  {
    id: 4,
    title: "Bottleneck Calculator",
    description: "Identify hardware limitations in your gaming system.",
    link: "/tools/bottleneck-calculator",
    icon: () => <span aria-hidden="true">💻</span>,
  },
  {
    id: 5,
    title: "Download Time Calculator",
    description: "Estimate how long files and games will take to download.",
    link: "/tools/download-time-calculator",
    icon: () => <span aria-hidden="true">📥</span>,
  },
  {
    id: 6,
    title: "EDPI Calculator",
    description: "Calculate effective DPI for a more consistent gaming setup.",
    link: "/tools/edpi-calculator",
    icon: () => <span aria-hidden="true">🖱️</span>,
  },
  {
    id: 7,
    title: "Pokémon Type Calculator",
    description: "Calculate Pokémon weaknesses, resistances, and immunities.",
    link: "/tools/pokemon-type-calculator",
    icon: () => <span aria-hidden="true">🛡️</span>,
  },
]


export default function Homepage({ tools }) {
  const toolList =
    tools && Array.isArray(tools) && tools.length > 0
      ? tools
      : defaultTools

  return (
    <div className="w-full bg-[#0B0F19] text-gray-100">

      {/* =====================================================
          HERO
          Static HTML on purpose:
          no opacity: 0
          no hydration delay
          no Framer Motion
      ====================================================== */}

      <section className="relative isolate w-full overflow-hidden border-b border-white/5 bg-gradient-to-br from-cyan-500/10 via-[#0B0F19] to-blue-500/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* Lightweight decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

          <div className="absolute right-0 top-16 h-48 w-48 rounded-full bg-cyan-500/5" />

          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-500/5" />
        </div>


        <div className="mx-auto max-w-6xl">

          <div className="max-w-3xl text-center sm:text-left">

            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-300 sm:text-sm">

                <span
                  aria-hidden="true"
                  className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-400"
                />

                Professional Gaming Tools
              </span>
            </div>


            {/* IMPORTANT:
                Static H1 so browser can paint immediately */}
            <h1 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">

              Master Your{" "}

              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Gaming Setup
              </span>

            </h1>


            {/* IMPORTANT:
                This was your Lighthouse LCP element.
                It is now visible immediately. */}
            <p className="mb-8 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">

              Professional-grade calculators designed for competitive gamers.
              Get precise insights on FPS, bottlenecks, damage, and resource
              optimization in seconds.

            </p>


            {/* CTA */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

              <Link
                href="#tools"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold !text-white !no-underline shadow-lg shadow-cyan-500/10 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-cyan-500/20 active:translate-y-0"
              >
                Explore Tools
                <span
                  aria-hidden="true"
                  className="ml-2"
                >
                  →
                </span>
              </Link>


              <Link
                href="/about"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-700 bg-gray-900/60 px-6 py-3 text-sm font-semibold !text-gray-200 !no-underline transition-colors duration-200 hover:border-cyan-500/40 hover:bg-gray-800"
              >
                Learn More
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TOOLS
      ====================================================== */}

      <section
        id="tools"
        className="w-full scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >

        <div className="mx-auto max-w-6xl">

          {/* Section header */}
          <div className="mb-10 text-center sm:mb-12 sm:text-left">

            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Performance Calculators
            </span>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Gaming Tools
            </h2>

            <p className="max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Fast, practical calculators built to help you understand and
              optimize your gaming performance.
            </p>

          </div>


          {/* Tool grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {toolList.map((tool) => {
              const IconComponent = tool.icon

              return (
                <Link
                  key={tool.id}
                  href={tool.link}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 p-6 !no-underline transition-[transform,border-color,background-color] duration-200 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-gray-900"
                >

                  {/* Small top highlight */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />


                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-2xl">

                    {IconComponent && (
                      <IconComponent
                        size={26}
                        className="text-cyan-300"
                      />
                    )}

                  </div>


                  {/* Content */}
                  <h3 className="mb-3 text-lg font-bold text-white sm:text-xl">
                    {tool.title}
                  </h3>

                  <p className="mb-6 flex-1 text-sm leading-6 text-gray-400 sm:text-base">
                    {tool.description}
                  </p>


                  {/* CTA */}
                  <div className="flex items-center text-sm font-semibold text-cyan-400">

                    <span>Open Calculator</span>

                    <span
                      aria-hidden="true"
                      className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>

                  </div>

                </Link>
              )
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          SEO / INFORMATION CONTENT
      ====================================================== */}

      <section className="w-full border-t border-white/5 bg-gray-950/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        <div className="mx-auto max-w-6xl">
          <Homeseo />
        </div>

      </section>

    </div>
  )
}