import Link from "next/link"


export default function Homeseo() {
  return (
    <section
      aria-labelledby="performance-guide-heading"
      className="mx-auto max-w-6xl px-4 py-14 text-gray-100 sm:px-6 sm:py-16 lg:px-8"
    >

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <div className="mb-12 max-w-3xl">

        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
          Gaming Performance Guide
        </span>

        <h2
          id="performance-guide-heading"
          className="mb-5 text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Optimize Your PC & Gaming Performance
        </h2>

        <p className="text-base leading-7 text-gray-400 md:text-lg md:leading-8">
          PerfCalcPro brings together professional calculators designed for
          competitive gamers and PC enthusiasts. Whether you want to estimate
          FPS performance, calculate DPS efficiency, track XP progress, or
          identify CPU and GPU bottlenecks, our tools help you make smarter
          decisions about your gaming setup.
        </p>

      </div>


      {/* =====================================================
          INFORMATION GRID
      ====================================================== */}

      <div className="grid gap-6 md:grid-cols-2">

        {/* FPS */}
        <article className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">

          <div
            aria-hidden="true"
            className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-lg"
          >
            🎮
          </div>

          <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
            FPS Calculator
          </h3>

          <p className="leading-7 text-gray-400">
            The FPS Calculator helps you estimate frame rates across different
            resolutions and game settings. Use it to understand possible
            performance limitations, adjust graphics settings, and plan a more
            balanced gaming setup.
          </p>

          <Link
            href="/tools/fps-calculator"
            className="mt-5 inline-flex items-center text-sm font-semibold !text-cyan-400 !no-underline transition-colors hover:!text-cyan-300"
          >
            Open FPS Calculator
            <span
              aria-hidden="true"
              className="ml-2"
            >
              →
            </span>
          </Link>

        </article>


        {/* DPS */}
        <article className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">

          <div
            aria-hidden="true"
            className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-lg"
          >
            ⚔️
          </div>

          <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
            DPS Calculator
          </h3>

          <p className="leading-7 text-gray-400">
            The DPS Calculator measures damage per second and helps you compare
            builds, weapons, attacks, and combat setups. Use the results to make
            more informed decisions about damage output and efficiency.
          </p>

          <Link
            href="/tools/dps-calculator"
            className="mt-5 inline-flex items-center text-sm font-semibold !text-cyan-400 !no-underline transition-colors hover:!text-cyan-300"
          >
            Open DPS Calculator
            <span
              aria-hidden="true"
              className="ml-2"
            >
              →
            </span>
          </Link>

        </article>


        {/* XP */}
        <article className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">

          <div
            aria-hidden="true"
            className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-lg"
          >
            ⭐
          </div>

          <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
            XP Calculator
          </h3>

          <p className="leading-7 text-gray-400">
            The XP Calculator helps you track experience points and estimate
            progress toward your next level. It makes it easier to understand
            how much XP remains and plan your gaming sessions efficiently.
          </p>

          <Link
            href="/tools/xp-calculator"
            className="mt-5 inline-flex items-center text-sm font-semibold !text-cyan-400 !no-underline transition-colors hover:!text-cyan-300"
          >
            Open XP Calculator
            <span
              aria-hidden="true"
              className="ml-2"
            >
              →
            </span>
          </Link>

        </article>


        {/* Bottleneck */}
        <article className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">

          <div
            aria-hidden="true"
            className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-lg"
          >
            💻
          </div>

          <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
            Bottleneck Calculator
          </h3>

          <p className="leading-7 text-gray-400">
            The Bottleneck Calculator helps identify potential mismatches
            between your CPU and GPU. Use it to better understand system balance
            before changing hardware or planning a gaming PC upgrade.
          </p>

          <Link
            href="/tools/bottleneck-calculator"
            className="mt-5 inline-flex items-center text-sm font-semibold !text-cyan-400 !no-underline transition-colors hover:!text-cyan-300"
          >
            Open Bottleneck Calculator
            <span
              aria-hidden="true"
              className="ml-2"
            >
              →
            </span>
          </Link>

        </article>

      </div>


      {/* =====================================================
          CTA
      ====================================================== */}

      <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-500/[0.06] to-blue-500/[0.06] px-6 py-8 text-center sm:px-8">

        <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
          Get More From Your Gaming Setup
        </h3>

        <p className="mx-auto mb-6 max-w-2xl leading-7 text-gray-400">
          Explore PerfCalcPro&apos;s gaming calculators for faster performance
          estimates, smarter hardware decisions, and useful insights into your
          setup.
        </p>

        <Link
          href="#tools"
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold !text-white !no-underline shadow-lg shadow-cyan-500/10 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          Explore All Tools
          <span
            aria-hidden="true"
            className="ml-2"
          >
            →
          </span>
        </Link>

      </div>

    </section>
  )
}