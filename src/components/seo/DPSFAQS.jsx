"use client";

export default function FAQS() {
  return (
    <section className="mt-12 bg-transparent px-0 py-8 text-white">
      <div className="mx-auto max-w-3xl space-y-4">
        <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
          FAQ
        </h2>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/55 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-white sm:text-xl">What is a good DPS in games?</h3>
            <p className="mt-3 leading-7 text-slate-300">
              A "good" number really depends on the specific game and your current level.
              In most RPGs or shooters, you’re doing well if your damage stays high enough
              to beat enrage timers without dying. Generally, if you are consistently
              clearing mobs faster than your teammates or meeting the community's "meta"
              requirements for raids, your output is solid.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/55 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-white sm:text-xl">How do I calculate DPS manually?</h3>
            <p className="mt-3 leading-7 text-slate-300">
              It’s actually pretty simple math once you have the numbers. Just take your
              average damage per hit and multiply it by your attacks per second. For
              example, if you hit for 100 damage and swing twice a second, your base score
              is 200. Don't forget to factor in your critical multiplier to see your true
              burst potential.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/55 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-white sm:text-xl">Does attack speed increase DPS?</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Yes, it’s one of the fastest ways to scale your power. Even if your
              individual hits feel weak, attacking more often raises your sustained output
              significantly. However, keep an eye on your resource management, as attacking
              faster usually drains your mana or stamina much quicker.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/55 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-white sm:text-xl">Why is my in-game DPS different?</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Theoretical math usually assumes you are hitting a stationary target that
              doesn't fight back. In a real match, factors like enemy damage mitigation,
              dodging, and downtime during boss phases will lower your numbers. Think of
              your calculator result as your damage ceiling and your in-game performance
              as your actual effective uptime.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/55 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-white sm:text-xl">Is DPS important in all games?</h3>
            <p className="mt-3 leading-7 text-slate-300">
              While it’s huge in MMOs and shooters, it isn't everything everywhere. In many
              titles, survivability, crowd control, and supporting your team are just as
              vital as raw numbers. You can have the highest alpha strike in the world, but
              it won't matter if you die two seconds into the fight!
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-white">Ready to Maximize Your Power?</h2>
          <p className="mt-2 text-slate-300 leading-7">
            Stop guessing your combat stats and start dominating every encounter with
            precision data. Use our professional Damage Output Analyzer to compare different
            weapons and find your perfect build instantly. This tool calculates your
            sustained output and burst potential so you can beat every enrage timer with ease.
          </p>
        </div>
      </div>
    </section>
  );
}
