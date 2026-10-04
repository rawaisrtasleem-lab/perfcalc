"use client";

import BottleneckFAQ from "./BottleneckFAQ";

const headingClass = "text-2xl font-bold text-white sm:text-3xl";
const subheadingClass = "text-lg font-semibold text-white sm:text-xl";
const paragraphClass = "leading-7 text-gray-300";
const cardClass = "rounded-xl border border-white/10 bg-white/[0.04] p-5";

export default function BottleneckCalculatorSeo() {
  return (
    <section className="mx-auto max-w-6xl space-y-12 px-4 py-16 text-gray-100 sm:px-6 lg:px-8">
      <section className="space-y-5">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Bottleneck Calculator (Check Your PC Performance Balance Instantly)
        </h1>
        <p className={paragraphClass}>
          Compare the relative CPU and GPU tiers in your PC build. Select a processor, graphics card, and gaming resolution to see a rough pairing estimate and which part may deserve closer attention.
        </p>
        <p className={paragraphClass}>
          By detecting hardware mismatch, it ensures proper CPU and GPU compatibility and helps resolve gaming performance issues like frame rate drops (FPS drops).
        </p>
        <p className={paragraphClass}>
          This tool makes PC performance optimization easy and guides you in PC build optimization through a thorough system configuration check. With it, you can upgrade or adjust parts wisely for smoother, faster performance.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className={headingClass}>What Is a Bottleneck Calculator &amp; How It Works</h2>
        <p className={paragraphClass}>
          This tool compares benchmark-score positions for selected CPUs and GPUs in the site's hardware lists. Resolution adds context because lower resolutions tend to be more CPU-sensitive while higher resolutions tend to be more GPU-sensitive.
        </p>
        <p className={paragraphClass}>
          This PC bottleneck calculator ensures your system maintains a healthy system performance balance.
        </p>
        <p className={paragraphClass}>
          This is a database-based comparison, not a benchmark run on your computer. It does not measure live usage, FPS, thermals, memory, storage, or game-specific performance.
        </p>
        <p className={paragraphClass}>
          Use the result as a starting point, then check benchmarks for the games and settings you actually use before choosing an upgrade.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={headingClass}>Key Components That Cause Bottlenecks in a PC</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <article className={cardClass}>
            <h3 className={subheadingClass}>CPU (Processor)</h3>
            <p className={`${paragraphClass} mt-3`}>
              The estimate compares the selected CPU's position within the CPU benchmark list. It cannot determine actual CPU limits without game-specific testing and utilization data.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className={subheadingClass}>GPU (Graphics Card)</h3>
            <p className={`${paragraphClass} mt-3`}>
              The estimate compares the selected GPU's position within the GPU benchmark list. Actual GPU limits depend on the game, graphics settings, resolution, and measured utilization.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className={subheadingClass}>RAM (Memory)</h3>
            <p className={`${paragraphClass} mt-3`}>
              This calculator does not collect RAM capacity, speed, or timings, so it cannot diagnose memory-related performance limits.
            </p>
          </article>
          <article className={cardClass}>
            <h3 className={subheadingClass}>Storage (SSD vs HDD)</h3>
            <p className={`${paragraphClass} mt-3`}>
              This calculator does not test storage devices. Storage can affect loading times and asset streaming, but that is outside this CPU/GPU tier comparison.
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className={headingClass}>Common Signs Your PC Has a Bottleneck</h2>
        <p className={paragraphClass}>
          A Bottleneck Calculator can help you spot if your PC has performance issues. Frequent FPS drops, frame time spikes, and 1% low FPS stuttering are clear signs of imbalance. High CPU bottleneck or uneven GPU usage often signal problems, while component mismatch creates performance imbalance. If your game feels slow even when using tools like an XP Calculator, your PC might have a bottleneck.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={headingClass}>CPU vs GPU Bottleneck , What's the Real Difference?</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className={cardClass}>
            <h3 className={subheadingClass}>CPU Bottleneck Explained</h3>
            <p className={`${paragraphClass} mt-3`}>
              The Bottleneck Calculator detects CPU bottlenecks. If processor performance is low, your GPU waits, creating imbalance and limiting system performance. Detecting it early helps improve gaming performance.
            </p>
          </div>
          <div className={cardClass}>
            <h3 className={subheadingClass}>GPU Bottleneck Explained</h3>
            <p className={`${paragraphClass} mt-3`}>
              The Bottleneck Calculator identifies GPU bottlenecks. When your graphics card hits limits, CPU performance stays unused, causing lower FPS and slower gaming performance.
            </p>
          </div>
        </div>

        <h3 className={subheadingClass}>Real Usage Scenarios (CPU &amp; GPU Behavior)</h3>
        <ul className="list-disc space-y-3 pl-6 leading-7 text-gray-300 marker:text-gray-300">
          <li><strong className="text-white">Low CPU + Low GPU Usage:</strong> May indicate a frame cap, light workload, or another system limit; this calculator does not measure utilization.</li>
          <li><strong className="text-white">Low CPU + High GPU Usage:</strong> Can indicate a GPU-limited workload in a live game. Check actual utilization before changing hardware.</li>
          <li><strong className="text-white">High CPU + High GPU Usage:</strong> Both parts may be working hard; observed FPS and frame times help identify practical limits.</li>
          <li><strong className="text-white">High CPU + Low GPU Usage:</strong> Can indicate a CPU-limited game or another constraint, but the pattern needs in-game measurement to confirm.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className={headingClass}>How to Use the Bottleneck Calculator</h2>
        <ol className="list-decimal space-y-5 pl-6 leading-7 text-gray-300 marker:text-gray-300">
          <li>
            <strong className="text-white">Enter CPU &amp; GPU:</strong> Select a processor and graphics card from the hardware lists to compare their relative score positions. This gives a rough pairing overview, not a compatibility test.
          </li>
          <li>
            <strong className="text-white">Select Resolution:</strong> Choose 1080p, 1440p, or 4K. The tool uses resolution as a broad CPU- or GPU-sensitivity hint; it does not simulate a specific game or graphics preset.
          </li>
          <li>
            <strong className="text-white">Choose a Resolution:</strong> Select the resolution you usually play at. This adjusts the likely-limiter hint toward CPU sensitivity at 1080p and GPU sensitivity at 4K; it does not change measured benchmark data.
          </li>
          <li>
            <strong className="text-white">Analyze Results:</strong> Review the relative hardware-tier gap and the part that may be more limiting for the selected resolution. The percentage is a difference between each part's position in its own benchmark list; it is not a predicted FPS loss or a measured bottleneck.
          </li>
        </ol>
      </section>

      <section className="space-y-6">
        <h2 className={headingClass}>Understanding Your Bottleneck Results</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950/60">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm text-gray-300">
            <thead className="bg-white/[0.06] text-white">
              <tr>
                <th className="border border-white/10 p-4">Bottleneck %</th>
                <th className="border border-white/10 p-4">Status</th>
                <th className="border border-white/10 p-4">Action</th>
                <th className="border border-white/10 p-4">Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-white/10 p-4">0–10%</td><td className="border border-white/10 p-4">Balanced</td><td className="border border-white/10 p-4">No upgrade</td><td className="border border-white/10 p-4">Smooth gaming and apps.</td></tr>
              <tr><td className="border border-white/10 p-4">11–25%</td><td className="border border-white/10 p-4">Minor bottleneck</td><td className="border border-white/10 p-4">Minor tweaks</td><td className="border border-white/10 p-4">Small settings adjustment may help.</td></tr>
              <tr><td className="border border-white/10 p-4">26–50%</td><td className="border border-white/10 p-4">Noticeable</td><td className="border border-white/10 p-4">Upgrade recommended</td><td className="border border-white/10 p-4">FPS may drop significantly.</td></tr>
              <tr><td className="border border-white/10 p-4">51–75%</td><td className="border border-white/10 p-4">Severe</td><td className="border border-white/10 p-4">Upgrade urgently</td><td className="border border-white/10 p-4">Performance heavily limited.</td></tr>
              <tr><td className="border border-white/10 p-4">76–100%</td><td className="border border-white/10 p-4">Extreme</td><td className="border border-white/10 p-4">Replace part</td><td className="border border-white/10 p-4">System unusable without upgrade.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className={headingClass}>How Resolution Affects Bottlenecks</h2>
        <p className={paragraphClass}>
          The Bottleneck Calculator shows that gaming resolution impact changes how your PC performs. During 1080p, your CPU bottleneck on 1080p may appear in CPU-big games with many draw calls per second.
        </p>
        <p className={paragraphClass}>
          At that time, GPU performance at 1080p stays lower keeping FPS high but stressing the processor in high-refresh-rate gaming. However, as you move to 1440p or 4K, the GPU workload shift becomes noticeable.
        </p>
        <p className={paragraphClass}>
          The system relies more on graphics power creating a balanced CPU and GPU setup and improving FPS performance in demanding titles.
        </p>
        <p className={paragraphClass}>
          Adjusting settings ensures a smooth gaming experience, while hardware optimization for resolution and PC performance tuning keeps your system efficient across different resolutions.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className={headingClass}>How Bottlenecks Affect Gaming, Streaming &amp; Editing</h2>
        <p className={paragraphClass}>
          A CPU or GPU bottleneck can cause unstable frame times and average FPS vs 1% low FPS drops. GPU underutilization and delayed draw calls processing affect smooth gameplay, especially in AI and physics calculations heavy games. Using the calculator helps optimize PCs for gaming and work. Gamers can use an FPS Calculator to understand how bottlenecks impact frame rates in different games.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className={headingClass}>Smart Ways to Fix Bottlenecks Without Upgrading</h2>
        <ul className="list-disc space-y-3 pl-6 leading-7 text-gray-300 marker:text-gray-300">
          <li><strong className="text-white">Close Background Apps:</strong> Free CPU threads for gaming.</li>
          <li><strong className="text-white">Enable XMP:</strong> Unlock RAM speed for better FPS stability.</li>
          <li><strong className="text-white">Optimize Settings:</strong> Adjust graphics and system settings to balance workloads.</li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className={headingClass}>When Should You Upgrade Your PC Components?</h2>
        <p className={paragraphClass}>
          Upgrade when consistent performance drops occur. Replace GPU if FPS is limited in modern games, or CPU if system lag and stuttering persist. Use the Bottleneck Calculator for smart upgrade planning.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className={headingClass}>Best CPU &amp; GPU Combinations (Avoid Bottleneck)</h2>
        <p className={paragraphClass}>
          The Bottleneck Calculator helps you choose balanced CPU and GPU combinations for high refresh rate gaming, smooth rendering, and editing. Proper component pairing ensures no hardware imbalance and maximum performance.
        </p>
      </section>

      <BottleneckFAQ />
    </section>
  );
}
