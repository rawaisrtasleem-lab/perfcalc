// app/faqs/page.jsx (Next.js 13+ with App Router)
"use client";

import { motion } from "framer-motion";

export default function FAQS() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Frequently Asked Questions (FAQs)
        </h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">What is a good DPS in games?</h2>
            <p className="text-gray-300">
              A "good" number really depends on the specific game and your current level.
              In most RPGs or shooters, you’re doing well if your damage stays high enough
              to beat enrage timers without dying. Generally, if you are consistently
              clearing mobs faster than your teammates or meeting the community's "meta"
              requirements for raids, your output is solid.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">How do I calculate DPS manually?</h2>
            <p className="text-gray-300">
              It’s actually pretty simple math once you have the numbers. Just take your
              average damage per hit and multiply it by your attacks per second. For
              example, if you hit for 100 damage and swing twice a second, your base score
              is 200. Don't forget to factor in your critical multiplier to see your true
              burst potential.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Does attack speed increase DPS?</h2>
            <p className="text-gray-300">
              Yes, it’s one of the fastest ways to scale your power. Even if your
              individual hits feel weak, attacking more often raises your sustained output
              significantly. However, keep an eye on your resource management, as attacking
              faster usually drains your mana or stamina much quicker.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Why is my in-game DPS different?</h2>
            <p className="text-gray-300">
              Theoretical math usually assumes you are hitting a stationary target that
              doesn't fight back. In a real match, factors like enemy damage mitigation,
              dodging, and downtime during boss phases will lower your numbers. Think of
              your calculator result as your damage ceiling and your in-game performance
              as your actual effective uptime.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Is DPS important in all games?</h2>
            <p className="text-gray-300">
              While it’s huge in MMOs and shooters, it isn't everything everywhere. In many
              titles, survivability, crowd control, and supporting your team are just as
              vital as raw numbers. You can have the highest alpha strike in the world, but
              it won't matter if you die two seconds into the fight!
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Ready to Maximize Your Power?</h2>
          <p className="text-gray-300 mt-2">
            Stop guessing your combat stats and start dominating every encounter with
            precision data. Use our professional Damage Output Analyzer to compare different
            weapons and find your perfect build instantly. This tool calculates your
            sustained output and burst potential so you can beat every enrage timer with ease.
          </p>

      
        </div>
      </motion.div>
    </div>
  );
}
