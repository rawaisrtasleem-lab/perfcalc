import Link from "next/link";
import DPSForm from "@/components/ui/DPSCalculator/DPSForm";

const sectionHeadingClass = "text-2xl font-bold text-white sm:text-3xl";
const subheadingClass = "text-xl font-semibold text-white sm:text-2xl";
const paragraphClass = "text-base leading-7 text-gray-300";

export default function DPSContent() {
  return (
    <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-10 text-white shadow-xl shadow-black/20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl space-y-10">
        <DPSForm />

        <section className="space-y-4">
          <h2 className={sectionHeadingClass}>What Is a DPS Calculator?</h2>
          <p className={paragraphClass}>
            A DPS calculator helps you quickly measure your damage per second in any game by using base damage, attack speed, and critical hit chance . while also factoring in elemental damage, reload time, and magazine size to show both burst DPS and sustained DPS for smarter weapon or spell choices.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className={sectionHeadingClass}>How to Use the DPS Calculator</h2>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className={subheadingClass}>Enter Base Damage</h3>
            <p className={`${paragraphClass} mt-3`}>
              Input your minimum and maximum weapon power into the DPS Calculator to set your baseline. These figures represent the raw, unmitigated strength of your strikes before any buff tracking or stat weighting begins.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className={subheadingClass}>Add Attack Speed</h3>
            <p className={`${paragraphClass} mt-3`}>
              Enter your attacks per second into the DPS Calculator to determine your sustained output. This metric shows how fast you hit, which helps you reach your scaling ceiling quickly.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className={subheadingClass}>Apply Bonus Multipliers</h3>
            <p className={`${paragraphClass} mt-3`}>
              Boost your DPS Calculator results by including every active buff tracking effect. These multipliers turn a simple hit into a massive burst window for your build.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className={sectionHeadingClass}>DPS Formula Explained (With Example)</h2>
          <p className={paragraphClass}>
            Master your DPS by multiplying your average hit by your attack speed. This simple math reveals your sustained output during any intense boss encounter.
          </p>
          <p className={paragraphClass}>
            For instance, if you deal 50 damage twice per second, your final score is 100. However, adding a critical multiplier into the mix will quickly elevate your burst potential.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className={sectionHeadingClass}>How to Calculate DPS (Step-by-Step Guide)</h2>

          <div>
            <h3 className={subheadingClass}>Identify Your Average Damage</h3>
            <p className={`${paragraphClass} mt-3`}>
              Start by finding your base hit range using the DPS Calculator manually. Add your minimum and maximum weapon values together and divide them by two.
            </p>
            <p className={`${paragraphClass} mt-3`}>
              This simple number serves as your consistency floor for all future math. Hardware lag can also lower your results. Use our{" "}
              <Link className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300" href="https://perfcalcpro.com/tools/bottleneck-calculator">
                Bottleneck Calculator
              </Link>{" "}
              to see if your CPU is holding back your GPU's full potential.
            </p>
          </div>

          <div>
            <h3 className={subheadingClass}>Multiply by Attack Speed</h3>
            <p className={`${paragraphClass} mt-3`}>
              Take your average damage and multiply it by your attacks per second. This step reveals your raw sustained output before any other buffs apply. However, you must use your actual combat speed for the most accurate results.
            </p>
          </div>

          <div>
            <h3 className={subheadingClass}>Account for Critical Hits</h3>
            <p className={`${paragraphClass} mt-3`}>
              Factor in your critical multiplier to find your true burst potential during a fight. Also, subtract any enemy damage mitigation to see your final, real-world performance. This final check ensures your offensive efficiency remains high against tough bosses.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={sectionHeadingClass}>Key Factors That Affect Your DPS</h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className={subheadingClass}>Base Damage</h3>
              <p className={`${paragraphClass} mt-3`}>
                Enter your minimum and maximum weapon power into the DPS Calculator to find your consistency floor. This starting value serves as the essential foundation for calculating your total sustained output.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className={subheadingClass}>Attack Speed</h3>
              <p className={`${paragraphClass} mt-3`}>
                Enter your attacks per second into the DPS Calculator to track your combat speed. This vital metric determines how quickly you hit your scaling ceiling during battle.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className={subheadingClass}>Critical Chance &amp; Damage</h3>
              <p className={`${paragraphClass} mt-3`}>
                Boost your DPS Calculator results by landing frequent critical hits during every combat encounter. Increasing your critical multiplier ensures your burst potential stays high enough to defeat bosses quickly.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className={subheadingClass}>Buffs &amp; Multipliers</h3>
              <p className={`${paragraphClass} mt-3`}>
                Boost your DPS Calculator results by adding every active power-up to your calculation. These extra layers quickly amplify your sustained output during a difficult encounter. Also, remember that stacking too many identical effects often leads to diminishing returns. Instead, try mixing different buff tracking categories for the best possible damage.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className={sectionHeadingClass}>Burst DPS vs Sustained DPS</h2>
          <p className={paragraphClass}>
            Understand your DPS by distinguishing between a quick alpha strike and long-term pressure. A high burst window helps you clear high mob density but often suffers from a low damage floor, while sustained pressure is what beats difficult enrage timers.
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950/60 shadow-lg shadow-black/20">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-white/[0.06]">
                  <th className="border border-white/10 p-4 font-semibold text-white">Aspect</th>
                  <th className="border border-white/10 p-4 font-semibold text-white">Burst DPS</th>
                  <th className="border border-white/10 p-4 font-semibold text-white">Sustained DPS</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-white/10 p-4 text-gray-300">Definition</td><td className="border border-white/10 p-4 text-gray-300">Max damage dealt in a short window</td><td className="border border-white/10 p-4 text-gray-300">Average damage maintained over a full fight</td></tr>
                <tr><td className="border border-white/10 p-4 text-gray-300">Best For</td><td className="border border-white/10 p-4 text-gray-300">Clearing trash mobs, execute phases</td><td className="border border-white/10 p-4 text-gray-300">Long boss fights, enrage timers</td></tr>
                <tr><td className="border border-white/10 p-4 text-gray-300">Weakness</td><td className="border border-white/10 p-4 text-gray-300">Drops off between cooldowns</td><td className="border border-white/10 p-4 text-gray-300">Needs consistent rotation and uptime</td></tr>
                <tr><td className="border border-white/10 p-4 text-gray-300">Depends On</td><td className="border border-white/10 p-4 text-gray-300">Crit chance, burst cooldowns</td><td className="border border-white/10 p-4 text-gray-300">Buff uptime, downtime minimization</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={sectionHeadingClass}>Why Your Actual Damage Feels Lower Than DPS</h2>
          <p className={paragraphClass}>
            Your DPS Calculator results might seem high because they ignore enemy damage mitigation and armor. In real combat, downtime minimization and movement often lower your effective uptime compared to a static target.
          </p>
          <p className={paragraphClass}>
            However, checking your combat log analysis can help you bridge the gap between theoretical math and actual gameplay. Your combat speed depends on smooth gameplay.
          </p>
          <p className={paragraphClass}>
            If your game feels choppy, use our <Link className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300" href="https://perfcalcpro.com/tools/bottleneck-calculator">Bottleneck Calculator</Link> to ensure your hardware can handle high-speed rotations.
          </p>

          <div>
            <h3 className={subheadingClass}>DPS vs Time to Kill (TTK)</h3>
            <p className={`${paragraphClass} mt-3`}>
              A high DPS Calculator score often hides your true practical lethality in fast-paced combat. While raw damage averages your output, reaching specific TTK thresholds determines how quickly an enemy actually dies.
            </p>
            <p className={`${paragraphClass} mt-3`}>
              For example, a one-shot potential build might have lower average stats but better results. Focus on downtime minimization to keep your effective uptime high and your kills fast.
            </p>
          </div>

          <div>
            <h3 className={subheadingClass}>Compare Weapons &amp; Builds Using DPS</h3>
            <p className={`${paragraphClass} mt-3`}>
              Use the DPS Calculator to compare different gear sets and optimize your sustained output. This process helps you identify which weapon offers the highest damage floor for your specific playstyle.
            </p>
            <p className={`${paragraphClass} mt-3`}>
              However, always check for diminishing returns when stacking similar stats to ensure your offensive efficiency remains high.
            </p>
          </div>

          <div>
            <h3 className={subheadingClass}>Real Game Examples of DPS</h3>
            <p className={`${paragraphClass} mt-3`}>
              Watch how your DPS Calculator numbers spike when you trigger a massive burst window during a raid.
            </p>
            <p className={`${paragraphClass} mt-3`}>
              For example, a fast-hitting rogue relies on high attacks per second to maintain sustained pressure on bosses. However, a heavy mage focuses on a high damage floor to ensure every single spell hits hard.
            </p>
            <p className={`${paragraphClass} mt-3`}>
              Faster kills mean you level up much quicker. Once you've optimized your damage, check our <Link className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300" href="https://perfcalcpro.com/tools/xp-calculator">XP Calculator</Link> to see how fast you'll hit your next milestone.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className={sectionHeadingClass}>Common Mistakes to Avoid When Calculating DPS</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-300 marker:text-gray-300">
            <li>Ignoring cooldown downtime between abilities</li>
            <li>Using average damage without accounting for crit variance</li>
            <li>Forgetting to factor in enemy armor or damage mitigation</li>
            <li>Stacking identical buffs instead of diversifying your multipliers</li>
            <li>Comparing burst DPS numbers against a fight that needs sustained pressure</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
