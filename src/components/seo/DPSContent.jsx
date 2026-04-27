// app/dps-calculator/content.js
"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";

export default function DPSContent() {
  return (
    <div className="bg-slate-1100 text-white px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
            What Is a DPS Calculator?
        </h1> 

        <p className="text-gray-400">
          A DPS calculator helps you quickly measure your damage per second in any game by using base damage, attack speed, and critical hit chance, while also factoring in elemental damage, reload time, and magazine size to show both burst DPS and sustained DPS for smarter weapon or spell choices
        </p>

        <h2 className="text-2xl font-bold">Try the DPS Calculator Now 🚀</h2>
        <h3 className="text-xl font-semibold">Enter Base Damage</h3>
        <p className="text-gray-400">
     Input your minimum and maximum weapon power into the dps calculator to set your baseline. These figures represent the raw, unmitigated strength of your strikes before any buff tracking or stat weighting begins.

        </p>

        <h3 className="text-2xl font-bold">Add Attack Speed</h3>
        <p className="text-gray-400">
        Enter your attacks per second into the Combat Power Estimator to determine your sustained output. This metric shows how fast you hit, which helps you reach your scaling ceiling quickly.
        </p>

        <h3 className="text-2xl font-bold">Apply Bonus Multipliers</h3>
         <p className="text-gray-400">
          Boost your Damage Output Analyzer results by including every active buff tracking effect. These multipliers turn a simple hit into a massive burst window for your build.
        </p>

        <h2 className="text-2xl font-bold">DPS Formula Explained (With Example)</h2>

        <p className="text-gray-400">
          Master your Offensive Efficiency Tracker by multiplying your average hit by your attack speed. This simple math reveals your sustained output during any intense boss encounter.
For instance, if you deal 50 damage twice per second, your final score is 100. 
However, adding a critical multiplier into the mix will quickly elevate your burst potential.
        </p>

        <h2 className="text-2xl font-bold">How to Calculate DPS (Step-by-Step Guide)</h2>

        <h3 className="text-xl font-semibold">Identify Your Average Damage</h3>

        Start by finding your base hit range to master the dps calculator manually. Add your minimum and maximum weapon values together and divide them by two. This simple number serves as your consistency floor for all future math.
Hardware lag can also lower your results. Use our <Link href="/bottleneck-calculator">Bottleneck Calculator</Link> to see if your CPU is holding back your GPU's full potential.

        <h3 className="text-xl font-semibold">Multiply by Attack Speed</h3>

        <p className="text-gray-400">
          Take your average damage and multiply it by your attacks per second. This step reveals your raw sustained output before any other buffs apply. However, you must use your actual combat speed for the most accurate results.
        </p>

        <h3 className="text-xl font-semibold">Account for Critical Hits</h3>

        <p className="text-gray-400">
          Factor in your critical multiplier to find your true burst potential during a fight. Also, subtract any enemy damage mitigation to see your final, real-world performance. This final check ensures your offensive efficiency remains high against tough bosses.
          </p>

          <h2 className="text-2xl font-bold">Key Factors That Affect Your DPS</h2>

           <h3 className="text-xl font-semibold">Base Damage</h3>
            
            <p className="text-gray-400">
              Enter your minimum and maximum weapon power into the Strike Force Evaluator to find your consistency floor. This starting value serves as the essential foundation for calculating your total sustained output.
            </p>
           
           <h3 className="text-xl font-semibold">Attack Speed</h3>

            <p className="text-gray-400">Enter your attacks per second into the Damage Output Analyzer to track your combat speed. This vital metric determines how quickly you hit your scaling ceiling during battle.
              </p>

           
           <h3 className="text-xl font-semibold">Critical Chance & Damage</h3>

           <p className="text-gray-400">
            Boost your Kill-Speed Metric by landing frequent critical hits during every combat encounter. Increasing your critical multiplier ensures your burst potential stays high enough to defeat bosses quickly.
            </p>


            <h3 className="text-xl font-semibold">Buffs & Multipliers</h3>

            <p className="text-gray-400">
              Boost your Offensive Efficiency Tracker results by adding every active power-up to your calculation. These extra layers quickly amplify your sustained output during a difficult encounter.
Also, remember that stacking too many identical effects often leads to diminishing returns. Instead, try mixing different buff tracking categories for the best possible damage.

</p>
               <h2 className="text-2xl font-bold">Burst DPS vs Sustained DPS</h2>
               <p className="text-gray-400">
                Master the dps calculator by distinguishing between a quick alpha strike and long-term pressure. A high burst window helps you clear high mob density but often suffers from a low damage floor.
However, you must prioritize sustained pressure to beat difficult enrage timers. Improving your effective uptime ensures your single-target viability remains high throughout any long combat encounter.


  </p>

           <h3 className="text-xl font-semibold">Why Your Actual Damage Feels Lower Than DPS</h3>
            <p className="text-gray-400">
              Your dps calculator results might seem high because they ignore enemy damage mitigation and armor. In real combat, downtime minimization and movement often lower your effective uptime compared to a static target. However, checking your combat log analysis can help you bridge the gap between theoretical math and actual gameplay.
Your combat speed depends on smooth gameplay. If your game feels choppy, use our <Link href="/fps-calculator">FPS Calculator</Link> to ensure your hardware can handle high-speed rotations.

            </p>

            <h2 className="text-2xl font-bold">DPS vs Time to Kill (TTK)</h2>

            <p className="text-gray-400">A high dps calculator score often hides your true practical lethality in fast-paced combat. While raw damage averages your output, reaching specific TTK thresholds determines how quickly an enemy actually dies.
For example, a one-shot potential build might have lower average stats but better results. Focus on downtime minimization to keep your effective up-time high and your kills fast
    </p>

        <h2 className="text-2xl font-bold">Compare Weapons & Builds Using DPS</h2>

         <p className="text-gray-400">
          Use the Combat Power Estimator to compare different gear sets and optimize your sustained output. This process helps you identify which weapon offers the highest damage floor for your specific playstyle. However, always check for diminishing returns when stacking similar stats to ensure your offensive efficiency remains high.
          </p>

          <h3 className="text-xl font-semibold">Real Game Examples of DPS</h3>
            <p className="text-gray-400">
              Watch how your Mayhem Meter spikes when you trigger a massive burst window during a raid. For example, a fast-hitting rogue relies on high attacks per second to maintain sustained pressure on bosses. However, a heavy mage focuses on a high damage floor to ensure every single spell hits hard.
Faster kills mean you level up much quicker. Once you've optimized your damage, check our <Link href="/xp-calculator">XP Calculator</Link> to see how fast you'll hit your next milestone.
</p>


        
      </motion.div>
    </div>
  );
}
