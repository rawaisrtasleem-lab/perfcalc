export const blog13 = `

<h1>OSRS DPS Calculator: How Is DPS Calculated in OSRS?</h1>
<figure><img src="/blog-images/osrs-dps-calculator.webp" alt="dps calculator image" class="w-full rounded-xl"></figure>

<p>You upgrade your weapon and the max hit goes up, but kills feel slower. This is the "max hit trap." Max hit shows your biggest possible hit, not your real damage output. This guide explains how OSRS DPS is calculated, with the formulas and a full worked example, so you can compare setups before you spend GP.</p>

<p><strong>Short answer:</strong> DPS = (max hit ÷ 2) × hit chance ÷ attack time in seconds. Max hit comes from your Strength, prayers, and gear. Hit chance comes from your attack roll against the target's defence roll. Attack time is the weapon's tick speed × 0.6.</p>

<h2>What DPS Means in OSRS</h2>
<p>DPS stands for damage per second. It is the average damage your character deals each second. Three things decide it: your max hit, your accuracy, and your weapon's attack speed. Change any one and your DPS changes.</p>

<h2>The Max Hit Trap</h2>
<p>A bigger max hit does not always mean faster kills. Consider two imaginary weapons, both with 70% hit chance:</p>

<table class="w-full border-collapse">
  <thead>
    <tr><th class="border border-white/20 p-3 text-left"></th><th class="border border-white/20 p-3 text-left">Weapon A</th><th class="border border-white/20 p-3 text-left">Weapon B</th></tr>
  </thead>
  <tbody>
    <tr><td class="border border-white/20 p-3">Max hit</td><td class="border border-white/20 p-3">28</td><td class="border border-white/20 p-3">40</td></tr>
    <tr><td class="border border-white/20 p-3">Attack speed</td><td class="border border-white/20 p-3">4 ticks (2.4 s)</td><td class="border border-white/20 p-3">6 ticks (3.6 s)</td></tr>
    <tr><td class="border border-white/20 p-3">DPS</td><td class="border border-white/20 p-3">14 × 0.70 ÷ 2.4 ≈ 4.08</td><td class="border border-white/20 p-3">20 × 0.70 ÷ 3.6 ≈ 3.89</td></tr>
  </tbody>
</table>

<p>Weapon B has a max hit about 43% higher, but it attacks 50% slower, so Weapon A wins. This is an example with made-up numbers. Real weapons differ, so always check the actual stats.</p>

<h2>How DPS Is Calculated, Step by Step</h2>
<p>These are the standard formulas used by the OSRS Wiki's DPS calculator, known as the Bitterkoekje formulas.</p>

<h3>Step 1: Effective level.</h3>
<p>Effective level = floor((level + potion boost) × prayer multiplier) + stance bonus + 8.</p>

<h3>Step 2: Max hit.</h3>
<p>Max hit = floor(0.5 + effective Strength × (gear Strength bonus + 64) ÷ 640). Then multiply by any set or item bonuses.</p>

<h3>Step 3: Attack roll and defence roll.</h3>
<p>Attack roll = effective Attack × (gear Attack bonus + 64).</p>
<p>Defence roll = (target Defence level + 9) × (target defence bonus + 64).</p>

<h3>Step 4: Hit chance.</h3>
<p>If your attack roll is higher: hit chance = 1 − (defence roll + 2) ÷ (2 × (attack roll + 1)).</p>
<p>If the defence roll is higher or equal: hit chance = attack roll ÷ (2 × (defence roll + 1)).</p>

<h3>Step 5: DPS.</h3>
<p>DPS = (max hit ÷ 2) × hit chance ÷ (weapon ticks × 0.6).</p>

<p>The "÷ 2" is there because damage on a successful hit is random from 0 to your max hit, so the average is half the max.</p>

<h2>Worked Example</h2>
<p>This example uses made up gear values to show the method.</p>
<ul>
  <li>Strength and Attack level 99, with a Super combat potion (+5 + 15%) and Piety (+23% Strength, +20% Attack), on the Aggressive stance (+3 Strength).</li>
  <li>Gear Strength bonus 120, gear Attack bonus 150, a 4-tick weapon.</li>
  <li>Target: Defence level 100, defence bonus 60.</li>
</ul>
<ol>
  <li>Potion boost = 5 + floor(99 × 0.15) = 19, so the boosted level is 118.</li>
  <li>Effective Strength = floor(118 × 1.23) + 3 + 8 = 156.</li>
  <li>Max hit = floor(0.5 + 156 × (120 + 64) ÷ 640) = 45.</li>
  <li>Effective Attack = floor(118 × 1.20) + 0 + 8 = 149.</li>
  <li>Attack roll = 149 × (150 + 64) = 31,886.</li>
  <li>Defence roll = (100 + 9) × (60 + 64) = 13,516.</li>
  <li>Hit chance = 1 − (13,516 + 2) ÷ (2 × 31,887) ≈ 78.8%.</li>
  <li>DPS = (45 ÷ 2) × 0.788 ÷ 2.4 ≈ 7.39.</li>
</ol>
<p>Time to kill (TTK) is the target HP ÷ DPS. Against a target with 750 HP, that is 750 ÷ 7.39 ≈ 101 seconds, or about 1 minute 41 seconds, if your DPS stays constant.</p>

<h2>Tick Speed</h2>
<figure><img src="/blog-images/the-max-hit-trap.webp" alt="dps calculator image" class="w-full rounded-xl"></figure>
<p>One game tick is 0.6 seconds. Attack speed is measured in ticks, and fewer ticks means more attacks.</p>

<table class="w-full border-collapse">
  <thead>
    <tr><th class="border border-white/20 p-3 text-left">Attack Speed</th><th class="border border-white/20 p-3 text-left">Time per Attack</th><th class="border border-white/20 p-3 text-left">Attacks per Minute</th><th class="border border-white/20 p-3 text-left">Attacks per Hour</th></tr>
  </thead>
  <tbody>
    <tr><td class="border border-white/20 p-3">2 ticks</td><td class="border border-white/20 p-3">1.2 s</td><td class="border border-white/20 p-3">50</td><td class="border border-white/20 p-3">3,000</td></tr>
    <tr><td class="border border-white/20 p-3">3 ticks</td><td class="border border-white/20 p-3">1.8 s</td><td class="border border-white/20 p-3">33.3</td><td class="border border-white/20 p-3">2,000</td></tr>
    <tr><td class="border border-white/20 p-3">4 ticks</td><td class="border border-white/20 p-3">2.4 s</td><td class="border border-white/20 p-3">25</td><td class="border border-white/20 p-3">1,500</td></tr>
    <tr><td class="border border-white/20 p-3">5 ticks</td><td class="border border-white/20 p-3">3.0 s</td><td class="border border-white/20 p-3">20</td><td class="border border-white/20 p-3">1,200</td></tr>
    <tr><td class="border border-white/20 p-3">6 ticks</td><td class="border border-white/20 p-3">3.6 s</td><td class="border border-white/20 p-3">16.7</td><td class="border border-white/20 p-3">1,000</td></tr>
  </tbody>
</table>

<p>Compare max hit per tick to see weapon speed quickly. A 28 max hit on 4 ticks is 7 per tick. A 51 max hit on 6 ticks is 8.5 per tick, so the slower weapon can still win. Always include accuracy in the comparison.</p>

<h2>Accuracy or Strength: Which Upgrade Is Better?</h2>
<p>Instead of fixed thresholds, compare the relative gain of each upgrade. DPS rises in proportion to both hit chance and max hit.</p>
<ul>
  <li>Raising hit chance from 60% to 66% is +10% DPS.</li>
  <li>Raising max hit from 40 to 44 is also about +10% DPS.</li>
  <li>If one costs much less than the other, the cheaper one gives better value.</li>
</ul>
<p>Accuracy has a ceiling of 100%, so its gains shrink as you approach it. Going from 50% to 60% is +20% DPS, but going from 90% to 92% is only about +2.2%. When you already hit almost every time, extra Strength and speed usually matter more. Test your own numbers, because the answer depends on your setup and target.</p>

<h2>Attack Styles (Stances)</h2>
<p>Your stance gives an invisible level bonus, and switching is free.</p>
<ul>
  <li>Accurate: +3 Attack, which raises hit chance.</li>
  <li>Aggressive: +3 Strength, which raises max hit.</li>
  <li>Controlled: +1 to Attack, Strength, and Defence, which mainly spreads XP.</li>
  <li>Defensive: +3 Defence, which does not help DPS.</li>
</ul>
<p>Run both Accurate and Aggressive through the formulas and pick the higher DPS for your target.</p>

<h2>Slayer Helmet and Salve Amulet</h2>
<ul>
  <li>Slayer helmet (i) on task gives melee a ×7/6 boost to accuracy and damage. The bonus for Ranged and Magic is smaller, so check the Wiki for the exact value.</li>
  <li>Salve amulet (ei) against undead gives ×6/5 to accuracy and damage across styles.</li>
</ul>
<p>These two effects do not stack. According to the OSRS Wiki, the Salve amulet takes priority on undead targets. Rules can change, so check the current Wiki page before you plan a setup.</p>

<h2>Melee, Ranged, and Magic</h2>
<p>Each style suits different targets, and the best choice depends on the target's defence, size, and weaknesses.</p>
<ul>
  <li>Twisted bow scales with the target's Magic level, up to a cap, so it shines against high-Magic targets.</li>
  <li>Scythe of Vitur can hit up to three times on large targets, which makes it strong in raids.</li>
  <li>Tumeken's shadow multiplies the magic attack and magic damage bonuses from your gear.</li>
</ul>
<p>For exact current numbers, use the OSRS Wiki calculator, because item stats and mechanics are updated by Jagex.</p>

<h2>What DPS Does Not Include</h2>
<p>The formula gives an average against one steady target. Real fights also have:</p>
<ul>
  <li>Special attacks and item effects.</li>
  <li>Target defence reductions (for example from certain specials).</li>
  <li>Boss phases, prayers, and mechanics.</li>
  <li>Your downtime for eating, drinking, and moving.</li>
</ul>
<p>Treat DPS as a way to compare setups, not as an exact kill timer.</p>

<h2>Using Our DPS Calculator for OSRS</h2>
<p>Our <a href="https://perfcalcpro.com/tools/dps-calculator">DPS Calculator</a> is a general-purpose tool. It does not know OSRS items, prayers, or accuracy rolls, so it cannot pick gear for you. You can use it for the final step:</p>
<ol>
  <li>Work out your max hit and hit chance with the steps above.</li>
  <li>Enter the average damage per attack (max hit ÷ 2 × hit chance) as the base damage. In our example that is about 17.73.</li>
  <li>Enter attacks per second as 1 ÷ (ticks × 0.6). For 4 ticks that is about 0.4167.</li>
  <li>Leave critical hit chance at 0, since OSRS has no critical hits in this formula.</li>
</ol>
<p>The result is your DPS, which is about 7.39 in the example. For a full gear and boss simulator, use the OSRS Wiki's DPS calculator, listed on the <a href="https://oldschool.runescape.wiki/">OSRS Wiki</a>.</p>

<h2>Frequently Asked Questions</h2>

<h3>How is DPS calculated in OSRS?</h3>
<p>DPS = (max hit ÷ 2) × hit chance ÷ (attack ticks × 0.6). The steps above show how to get each part.</p>

<h3>Is max hit or DPS more important?</h3>
<p>DPS. Max hit is only the top of the damage range, while DPS includes accuracy and speed.</p>

<h3>What is the best DPS weapon in OSRS?</h3>
<p>It depends on the target. Compare weapons against the actual target's defence, and check the OSRS Wiki calculator for current stats.</p>

<h3>Does my attack style change DPS?</h3>
<p>Yes. Accurate raises hit chance and Aggressive raises max hit. Run both to see which one wins.</p>

<h3>How accurate are DPS calculators?</h3>
<p>They are good for comparing setups. They usually assume a steady target, so real kill times are longer.</p>

<h3>How do I calculate time to kill?</h3>
<p>Divide the target's hit points by your DPS. It is an estimate, because real fights have downtime and mechanics.</p>

`;