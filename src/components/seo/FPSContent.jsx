"use client";

import Link from "next/link";

export default function FpsCalculatorContent() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:py-12">
      <div className="space-y-8 text-left">
        <h2 className="text-3xl font-bold text-white">How It Works</h2>
        <p className="text-gray-300 text-base leading-7">
          Select your components and game settings, then click calculate for instant FPS estimates.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <h3 className="mb-2 text-lg font-semibold text-white">Accurate Data</h3>
            <p className="text-sm leading-6 text-gray-400">
              Estimates are based on published hardware benchmarks and typical performance patterns across similar CPU/GPU combinations.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <h3 className="mb-2 text-lg font-semibold text-white">Bottleneck Analysis</h3>
            <p className="text-sm leading-6 text-gray-400">
              Get insights on CPU/GPU compatibility and performance limitations.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <h3 className="mb-2 text-lg font-semibold text-white">Optimization Tips</h3>
            <p className="text-sm leading-6 text-gray-400">
              Receive personalized recommendations to boost your gaming performance.
            </p>
          </div>
        </div>

        <div className="pt-4">
          <h2 className="mb-3 text-3xl font-bold text-white">FPS Calculator Check Your Game Performance</h2>
          <p className="text-gray-300 leading-7">
            Wondering whether your PC can run your favorite games with smooth performance? The FPS Calculator helps you estimate your system's gaming performance before you launch your favorite game. By evaluating your CPU and GPU capabilities, the FPS Calculator predicts your expected FPS and flags potential performance bottlenecks.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Enter Your PC Configuration</h3>
            <p className="text-gray-300 leading-7">
              Use the FPS Calculator by entering your PC's CPU, GPU, and RAM details. Then select your game and screen resolution for accurate results. It shows your estimated frames per second, highlights any bottlenecks, and helps you optimize settings for smoother gameplay.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Select Game &amp; Graphics Settings</h3>
            <p className="text-gray-300 leading-7">
              Use the FPS Calculator to pick your game and adjust graphics settings easily. Choose resolution, texture quality, and effects for accurate FPS estimates. Experimenting with different presets also helps you see how your CPU and GPU handle different loads.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Get Instant FPS Results</h3>
            <p className="text-gray-300 leading-7">
              Get instant results with the FPS Calculator after entering your PC and game settings. It shows estimated frames per second for different graphics presets in seconds, so you can spot CPU or GPU bottlenecks and adjust settings for smoother gameplay right away.
            </p>
          </div>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-3xl font-bold text-white">How Does the FPS Calculator Work?</h2>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Which Data Does It Use?</h3>
            <p className="text-gray-300 leading-7">
              The FPS Calculator uses real-world benchmark data from CPUs, GPUs, and games. It compares your hardware against tested system configurations to estimate frame rates. The underlying data is reviewed periodically as new games and drivers are released, to keep predictions as reliable as possible.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Is the FPS Calculator Accurate?</h3>
            <p className="text-gray-300 leading-7">
              The FPS Calculator gives reliable estimates, not exact numbers. Actual frame rates can vary based on drivers, background apps, and in-game settings.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Why Do Results Change Over Time?</h3>
            <p className="text-gray-300 leading-7">
              Estimates can shift over time because the underlying benchmark data and prediction models get updated periodically. New games, drivers, and hardware releases all affect estimated FPS. Software updates, in-game optimization, and PC upgrades can also change your real-world performance, even if your hardware hasn't changed.
            </p>
          </div>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-3xl font-bold text-white">FPS Results Explained (Understand Your Performance)</h2>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Estimated FPS vs. Real Gameplay</h3>
            <p className="text-gray-300 leading-7">
              The FPS Calculator gives you an estimated frame rate based on your CPU, GPU, and game settings. Real gameplay can differ from this estimate due to background apps, drivers, and software updates.
            </p>
            <p className="mt-3 text-gray-300 leading-7">
              Graphics settings, resolution, and in-game optimization can also raise or lower your actual FPS compared to the estimate. Use the calculator as a starting guideline, then fine-tune your settings for the smoothest gameplay on your specific setup.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">What 30, 60, 120+ FPS Actually Feels Like</h3>
            <p className="text-gray-300 leading-7">
              The FPS Calculator can help you understand what different frame rates feel like in practice. 30 FPS often feels noticeably choppy, 60 FPS feels smooth for most games, and 120+ FPS feels especially responsive and fluid, particularly in fast-paced titles.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Why Your FPS May Be Lower Than Expected</h3>
            <p className="text-gray-300 leading-7">
              The FPS Calculator's estimate can come in higher than your real gameplay. Background apps, outdated drivers, or overheating can lower your actual frame rate. High graphics settings or aging hardware can also reduce FPS compared to the estimate.
            </p>
          </div>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-3xl font-bold text-white">How Much FPS Do You Actually Need?</h2>

          <div>
            <p className="text-gray-300 leading-7">
              Competitive Games (FPS Shooters) The FPS Calculator helps you find out whether your computer can comfortably run fast-paced competitive shooters. Games like Valorant, CS2, or Call of Duty benefit from a high, stable frame rate for quick reactions. The calculator also shows how your CPU and GPU together shape that experience.
            </p>
            <p className="mt-3 text-gray-300 leading-7">
              In competitive games, tracking your progress matters too. You can use our XP Calculator to estimate your leveling speed.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Story &amp; Single Player Games</h3>
            <p className="text-gray-300 leading-7">
              The FPS Calculator helps you check performance for story-driven and single-player games. Titles like Elden Ring or Cyberpunk 2077 run smoothly at moderate frame rates, letting you enjoy the visuals and gameplay without chasing the highest possible FPS.
            </p>
            <p className="mt-3 text-gray-300 leading-7">
              It also shows how your CPU and GPU handle graphics settings, resolution, and effects, so you can adjust presets to balance performance and visual quality.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Strategy &amp; Simulation Games</h3>
            <p className="text-gray-300 leading-7">
              The FPS Calculator helps you predict performance for strategy and simulation games. Titles like Civilization or Cities: Skylines run well even at lower frame rates. It also shows how your CPU and GPU handle large maps and complex calculations, helping you fine-tune settings for smooth gameplay.
            </p>
          </div>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-3xl font-bold text-white">CPU vs GPU Which Matters More for FPS?</h2>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">CPU Impact on FPS</h3>
            <p className="text-gray-300 leading-7">
              The FPS Calculator shows how CPU performance affects your results. A weak or outdated CPU can cause a bottleneck even when paired with a strong GPU, especially in competitive or CPU-heavy games.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">GPU Impact on FPS</h3>
            <p className="text-gray-300 leading-7">
              The FPS Calculator shows how GPU performance affects your results. A weak graphics card can cause a bottleneck, especially at higher resolutions. A high-end GPU like the RTX 4090 handles heavy pixel loads and advanced effects with ease, while a mid-range card may struggle with more demanding games.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}