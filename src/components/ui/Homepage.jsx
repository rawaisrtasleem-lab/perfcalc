import Link from "next/link"
import Homeseo from "./Homeseo"
import Image from "next/image"

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


const featuredGuides = [
  {
    title: "Best Gaming PC for Budget: Top Picks for 2026",
    description:
      "A practical guide to choosing a capable budget gaming PC, with the parts and priorities that matter most for smooth 1080p gaming.",
    href: "/blog/best-budget-gaming-pc",
    meta: "Budget PC Guide",
    featured: true,
  },
  {
    title: "OSRS XP Table: The Complete Level 1 to 99 Experience Chart",
    description:
      "See the XP required for every OSRS level from 1 to 99, plus useful milestones for planning your next grind.",
    href: "/blog/osrs-xp-table",
    meta: "OSRS Guide",
  },
  {
    title: "Why Is My PC So Laggy?",
    description:
      "Learn the common signs of a CPU bottleneck and the practical fixes that can make a slow or stuttering PC feel smoother.",
    href: "/blog/why-is-my-pc-so-laggy",
    meta: "PC Performance",
  },
  {
    title: "Ryzen vs Intel for Gaming: Which CPU Should You Buy in 2026?",
    description:
      "Compare Ryzen and Intel for gaming, power use, productivity, and value so you can choose the right CPU for your build.",
    href: "/blog/which-is-better-ryzen-or-intel-for-gaming",
    meta: "Hardware Guide",
  },
]

const homepageFaqs = [
  {
    question: "Are the PerfCalcPro tools free?",
    answer:
      "Yes. PerfCalcPro is built around free browser-based gaming calculators, so you can open a tool and use it without paying for access.",
  },
  {
    question: "Do I need to create an account to use the calculators?",
    answer:
      "No. The main PerfCalcPro tools are designed for quick use without sign-up, so you can enter your values and get a result right away.",
  },
  {
    question: "How accurate are PerfCalcPro calculator results?",
    answer:
      "The tools use researched data, formulas, and real-world scenarios. Actual results can still vary by game, hardware configuration, settings, and usage.",
  },
  {
    question: "What can I calculate on PerfCalcPro?",
    answer:
      "You can work with FPS, hardware bottlenecks, DPS, XP, eDPI and sensitivity, download time, VRAM, aspect ratios, and other gaming-focused calculations.",
  },
]



function FeaturedToolsSection() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 sm:p-8 lg:p-10">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
          />

          <div className="relative">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
              Recommended Tools
            </span>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              Popular tools for smarter gaming performance
            </h2>

            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base">
              Start with two of PerfCalcPro&apos;s most useful calculators:
              estimate expected frame rates for your setup, then check whether
              your CPU or GPU could be holding performance back.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* FPS CALCULATOR */}
              <Link
                href="/tools/fps-calculator"
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 !no-underline transition duration-200 hover:-translate-y-1 hover:border-blue-400/35 hover:bg-white/[0.055]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/15 bg-gradient-to-br from-violet-500/15 via-blue-500/20 to-cyan-400/10 text-xl">
                  <span aria-hidden="true">🎮</span>
                </div>

                <h3 className="text-xl font-extrabold text-white transition-colors group-hover:text-blue-300">
                  FPS Calculator
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-[15px]">
                  Estimate gaming frame rates and get a clearer picture of the
                  performance you can expect from your hardware setup.
                </p>

                <div className="mt-6 inline-flex items-center text-sm font-bold text-blue-300">
                  Try the FPS Calculator

                  <span
                    aria-hidden="true"
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>

              {/* BOTTLENECK CALCULATOR */}
              <Link
                href="/tools/bottleneck-calculator"
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 !no-underline transition duration-200 hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.055]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-gradient-to-br from-violet-500/10 via-blue-500/15 to-cyan-400/20 text-xl">
                  <span aria-hidden="true">💻</span>
                </div>

                <h3 className="text-xl font-extrabold text-white transition-colors group-hover:text-cyan-300">
                  Bottleneck Calculator
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-[15px]">
                  Compare your CPU and GPU to spot possible hardware limitations
                  before you upgrade parts or change your gaming setup.
                </p>

                <div className="mt-6 inline-flex items-center text-sm font-bold text-cyan-300">
                  Try the Bottleneck Calculator

                  <span
                    aria-hidden="true"
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom helper link - like reference screenshot */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-slate-400">
          Looking for DPS, XP, eDPI, download time, VRAM, or another
          calculator?{" "}
          <Link
            href="#tools"
            className="font-bold !text-blue-300 !no-underline transition hover:!text-cyan-300"
          >
            Explore all PerfCalcPro gaming tools →
          </Link>
        </p>
      </div>
    </section>
  )
}

function GuidesFromPerfCalcPro() {
  return (
    <section className="w-full border-t border-white/5 bg-slate-950/20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-300/15 bg-blue-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-blue-200 sm:text-xs">
            Editor&apos;s Picks
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Guides From the PerfCalcPro Blog
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Practical gaming, performance, and hardware guides for players who want
            clearer answers before they tweak, upgrade, or buy.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/55 p-6 !no-underline transition duration-200 hover:-translate-y-1 hover:border-blue-400/35 hover:bg-white/[0.045]"
            >
              <div
                aria-hidden="true"
                className={`absolute inset-x-6 top-0 h-[3px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 transition-opacity duration-200 ${
                  guide.featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />

              <span className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-cyan-300/80">
                {guide.meta}
              </span>

              <h3
                className={`text-lg font-extrabold leading-7 transition-colors sm:text-xl ${
                  guide.featured
                    ? "text-blue-300"
                    : "text-white group-hover:text-blue-300"
                }`}
              >
                {guide.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-slate-400 sm:text-[15px]">
                {guide.description}
              </p>

              <div className="mt-6 inline-flex items-center text-sm font-bold text-cyan-300">
                Read guide
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 px-6 py-3 text-sm font-bold !text-blue-200 !no-underline shadow-[0_10px_35px_rgba(15,23,42,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-blue-300/35 hover:bg-white/[0.06]"
          >
            All guides
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 sm:p-8 lg:p-10">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
          />

          <div className="relative grid items-center gap-8 md:grid-cols-[240px_1fr] lg:gap-12">
            {/* FOUNDER IMAGE */}
            <div className="mx-auto w-full max-w-[240px] md:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-violet-500/20 via-blue-500/20 to-cyan-400/15 p-[1px] shadow-[0_18px_60px_rgba(37,99,235,0.16)]">
                <div className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-slate-950">
                  <Image
                    src="/founder.png"
                    alt="Rao Awais, founder of PerfCalcPro"
                    fill
                    sizes="(max-width: 768px) 240px, 240px"
                    className="object-cover object-top"
                  />

                  {/* subtle image bottom gradient */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent"
                  />
                </div>
              </div>

              <div className="mt-4 text-center md:text-left">
                <p className="text-sm font-bold text-slate-200">
                  Rao Awais
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Founder &amp; Writer
                </p>
              </div>
            </div>

            {/* FOUNDER CONTENT */}
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-300/15 bg-blue-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-blue-200 sm:text-xs">
                About the Founder
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Who Builds PerfCalcPro
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                PerfCalcPro is founded by{" "}
                <strong className="font-extrabold text-white">
                  Rao Awais
                </strong>
                , a{" "}
                <strong className="font-extrabold text-white">
                  Founder &amp; Writer
                </strong>{" "}
                focused on gaming FPS, PC performance, and building fast,
                SEO-friendly websites.
              </p>

              <p className="mt-3 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                The goal behind PerfCalcPro is simple: turn useful gaming
                calculations into focused browser-based tools that are quick to
                understand, practical to use, and accessible without unnecessary
                complexity.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold">
                <Link
                  href="/about"
                  className="inline-flex items-center !text-blue-300 !no-underline transition hover:!text-cyan-300"
                >
                  Read more about the site
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center !text-slate-400 !no-underline transition hover:!text-slate-200"
                >
                  Contact PerfCalcPro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <section className="w-full border-t border-white/5 bg-white/[0.015] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Quick Answers
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A few quick answers about using PerfCalcPro and what to expect from the calculators.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {homepageFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-slate-950/55 px-5 transition duration-200 open:border-blue-400/25 open:bg-white/[0.04] sm:px-6"
            >
              <summary className="flex min-h-[68px] cursor-pointer list-none items-center justify-between gap-5 py-4 text-left text-base font-bold text-white marker:content-none sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180 group-open:text-cyan-300"
                >
                  <path
                    d="m5 7.5 5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>

              <p className="border-t border-white/5 pb-5 pt-4 text-sm leading-7 text-slate-400 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

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



      <FeaturedToolsSection />
      

      {/* GUIDES FROM PERFCALCPRO */}
      <GuidesFromPerfCalcPro />

      {/* ABOUT THE FOUNDER */}
      <FounderSection />

      {/* FAQ */}
      <FrequentlyAskedQuestions />

    </div>
  )
}