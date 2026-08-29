export const starBuilder =`



<figure>
  <img
    src="/blog-images/starbuilder.png"
    alt="Upload internet speed"
    class="w-full rounded-xl"
  />
</figure>




<nav aria-label="Table of Contents">
  <h2 id="table-of-contents">Table of Contents</h2>
  <ul>
    <li><a href="#build-your-star-citizen-ship-loadout">Build Your Star Citizen Ship Loadout</a></li>
    <li><a href="#analyze-ship-loadout-performance">Analyze Ship Loadout Performance</a></li>
    <li><a href="#compare-star-citizen-ships-and-builds">Compare Star Citizen Ships and Builds</a></li>
    <li><a href="#best-star-citizen-loadouts-by-role">Best Star Citizen Loadouts by Role</a></li>
    <li><a href="#find-star-citizen-ship-components">Find Star Citizen Ship Components</a></li>
    <li><a href="#save-and-share-your-ship-builds">Save and Share Your Ship Builds</a></li>
    <li><a href="#star-citizen-ship-builder-features">Star Citizen Ship Builder Features</a></li>
    <li><a href="#how-to-use-the-ship-builder">How to Use the Ship Builder</a></li>
    <li><a href="#star-citizen-ship-builder-faq">Star Citizen Ship Builder FAQ</a></li>
  </ul>
</nav>

<p>Picking the wrong power plant or an incompatible shield can turn a promising ship into a floating liability. Every patch reshuffles component stats, hardpoint sizes, and prices, so manual math rarely keeps up. A dedicated Star Citizen ship builder fixes that problem by validating every part you equip, calculating your DPS and survivability instantly, and letting you compare builds before you ever undock.</p>

<p><strong>Quick take:</strong> Pick a ship, add compatible parts, and watch DPS, survivability, and travel range update live. No spreadsheets, no guesswork.</p>

<h2 id="build-your-star-citizen-ship-loadout">Build Your Star Citizen Ship Loadout</h2>

<p>Every loadout starts with the right hull. This part of the ship loadout builder walks you through picking a vehicle, then layers on weapons, defenses, and utility gear step by step. You never touch a component that doesn't physically fit, because the tool checks size and mount type before you commit.</p>

<p>Think of it as a garage bay with guardrails. You can experiment freely, swap a size 3 laser for a ballistic repeater, or try three shield generators back to back, and the interface flags anything that clashes with your hull's hardpoints. Nothing saves until it actually works.</p>

<h3>Select Your Ship</h3>

<p>Start by searching or filtering the full ship components database by manufacturer, role, or size class. Whether you fly a nimble starter fighter or a multi crew hauler, the builder loads that ship's exact hardpoint layout automatically, so you see every mount size before adding a single part.</p>

<h3>Choose Compatible Weapons and Turrets</h3>

<p>Weapon selection is filtered to what your hardpoints can actually hold, so you won't accidentally queue up an oversized cannon on a small mount. Turrets show gimbal and manual options side by side, with fire rate, damage type, and heat output listed at a glance.</p>

<h3>Add Shields, Power Plants, Coolers and Quantum Drives</h3>

<p>Core systems drive survivability and travel range just as much as weapons do. Pick a shield generator, match it to a power plant that can actually feed it, and add coolers that keep your heat curve manageable during sustained fights or long jumps.</p>

<h3>Customize Missiles, Utility Mounts and Mining Components</h3>

<p>Beyond combat gear, the builder supports mission specific loadouts too. Attach missile racks sized to your hardpoints, fit mining heads and lasers for extraction ships, or slot in cargo grids and tractor beams depending on the role you're building for.</p>

<h3>Check Hardpoint and Component Compatibility</h3>

<p>Every addition runs through a live compatibility check against your ship's hardpoint map. Incompatible parts get flagged instantly, with a short note explaining why, so you fix the mismatch before it derails your build instead of after you've bought the part in game.</p>

<h2 id="analyze-ship-loadout-performance">Analyze Ship Loadout Performance</h2>

<p>A build only matters once you know how it performs. This is where the Star Citizen <a href="https://perfcalcpro.com/tools/dps-calculator">DPS calculator</a> and related stats come in, translating your component choices into numbers you can actually compare.</p>

<p>Rather than eyeballing spec sheets, you get a live readout that updates the moment you swap a part. Change a repeater for a ballistic cannon and watch your time to kill, power draw, and heat output shift in real time.</p>

<h3>Calculate Weapon DPS and Time to Kill</h3>

<p>The TTK calculator combines your equipped weapons' damage, fire rate, and accuracy into a single sustained DPS figure. You'll see how long it realistically takes to strip a target's shields and hull, which matters far more than raw damage numbers alone.</p>

<h3>Compare Weapon Range, Damage Falloff and Projectile Speed</h3>

<p>Range and falloff decide whether your loadout wins at close quarters or long distance engagements. The builder charts effective range against damage falloff and projectile speed, so you can match your weapon spread to how you actually fly.</p>

<h3>Review Power Usage, Cooling and Component Efficiency</h3>

<p>Power management failures are one of the most common build mistakes. The tool totals your power draw against your plant's output and flags overheating risk before you take the ship into a live server.</p>

<h3>Check Shield Strength, Hull Health and Survivability</h3>

<p>Offense only wins fights if you survive long enough to land it. Shield HP, regen delay, and hull health combine into a single survivability score, giving you a quick read on how much punishment your build can absorb.</p>

<h3>Estimate Quantum Travel Range and Fuel Requirements</h3>

<p>Long hauls and exploration builds live or die on fuel math. The builder estimates quantum travel range based on your tank size and drive efficiency, so you know how far you can jump before you need to refuel.</p>

<h2 id="compare-star-citizen-ships-and-builds">Compare Star Citizen Ships and Builds</h2>

<p>Sometimes the question isn't how good a build is, it's which build is better. This section puts two or more loadouts side by side so the difference is obvious at a glance.</p>

<p>You can compare stock ships, fully customized builds, or a mix of both. Every stat lines up in the same row, so spotting the stronger option takes seconds instead of tab switching between spec sheets.</p>

<h3>Compare Ship Specifications Side by Side</h3>

<p>Drop any two ships into the comparison view and every core stat lines up automatically, calculated from your actual loadout rather than a generic factory sheet.</p>

<table className="class="w-full min-w-[640px] border-collapse overflow-hidden rounded-xl text-left">
  <thead>
    <tr>
      <th "col" class="border border-cyan-600 px-4 py-3 font-semibold"  >Stat</th>

      <th "col" class="border border-cyan-600 px-4 py-3 font-semibold">Build A</th>
      <th "col" class="border border-cyan-600 px-4 py-3 font-semibold">Build B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  class="border border-slate-200 px-4 py-3">Hull HP</td>
      <td class="border border-slate-200 px-4 py-3">Calculated from your loadout</td>
      <td  class="border border-slate-200 px-4 py-3">Calculated from your loadout</td>
    </tr>
    <tr>
      <td class="border border-slate-200 px-4 py-3">Shield HP</td>
      <td class="border border-slate-200 px-4 py-3">Calculated from your loadout</td>
      <td class="border border-slate-200 px-4 py-3">Calculated from your loadout</td>
    </tr>
    <tr>
      <td class="border border-slate-200 px-4 py-3">Sustained DPS</td>
      <td class="border border-slate-200 px-4 py-3">Calculated from your loadout</td>
      <td class="border border-slate-200 px-4 py-3">Calculated from your loadout</td>
    </tr>
    <tr>
      <td class="border border-slate-200 px-4 py-3">Cargo Capacity (SCU)</td>
      <td class="border border-slate-200 px-4 py-3">Calculated from your loadout</td>
      <td class="border border-slate-200 px-4 py-3">Calculated from your loadout</td>
    </tr>
    <tr>
      <td class="border border-slate-200 px-4 py-3">Crew Requirement</td>
      <td class="border border-slate-200 px-4 py-3">Calculated from your loadout</td>
      <td class="border border-slate-200 px-4 py-3">Calculated from your loadout</td>
    </tr>
  </tbody>
</table>

<p>Every row updates live as you swap components, so you're always comparing your real build, not a stock spec sheet.</p>

<h3>Compare Loadouts for Combat, Mining, Cargo and Exploration</h3>

<p>You're not limited to comparing two combat fits. Line up a mining loadout against a salvage setup, or stack a cargo hauler next to an exploration build, to see exactly which trade offs each role demands.</p>

<h3>Find the Best Ship for Your Playstyle</h3>

<p>If you fly aggressively, close range DPS and shield regen probably matter more to you than cargo space. The comparison view highlights the stats tied to your preferred playstyle, so the right ship becomes obvious rather than a guess.</p>

<h3>Compare Ship Size, Crew Capacity, Cargo and Hangar Requirements</h3>

<p>Bigger isn't always better once crew requirements and hangar size enter the picture. This comparison lays out size class, minimum crew, and hangar footprint together, which matters as much for solo players as it does for full org fleets.</p>

<h2 id="best-star-citizen-loadouts-by-role">Best Star Citizen Loadouts by Role</h2>

<p>Not everyone wants to start from a blank hardpoint map. This section of the Star Citizen ship builder hands you curated starting points for the most common playstyles, built from the same compatibility rules the full builder uses.</p>

<p>Each role based loadout stays fully editable, so treat it as a launchpad rather than a fixed answer. Load one in, tweak two or three components, and you've got a build tailored to your exact ship and budget.</p>

<h3>Best Combat Ship Loadouts</h3>

<p>Combat focused builds lean on sustained DPS, shield regen, and heat management for extended engagements. These loadouts balance offense with survivability instead of maximizing one stat at the expense of the other.</p>

<h3>Best Bounty Hunting Loadouts</h3>

<p>Bounty work rewards fast target acquisition and a kill time low enough to end a fight before backup arrives. These builds prioritize burst damage and maneuverability over raw tank stats.</p>

<h3>Best Mining Ship Loadouts</h3>

<p>A solid mining loadout pairs the right laser heads with power and cooling that can sustain extraction without overheating mid cycle. These setups also account for cargo capacity, so you're not wasting a trip.</p>

<h3>Best Salvage Ship Loadouts</h3>

<p>Salvage loadout builds focus on tractor beam range, hull scanning tools, and cargo space for reclaimed materials. Survivability still matters here, since salvage sites aren't always safe.</p>

<h3>Best Cargo and Hauling Ship Loadouts</h3>

<p>Hauling builds are about maximizing SCU capacity without leaving your ship defenseless. These loadouts balance cargo grids against enough shielding and thrust to escape trouble instead of tanking it.</p>

<h3>Best Exploration and Long-Range Loadouts</h3>

<p>Exploration builds trade combat power for quantum fuel efficiency, scanning gear, and self sufficiency on long trips far from a station. Component choices here favor range and reliability over raw stats.</p>

<h3>Best Starter Ship Loadouts</h3>

<p>New pilots don't need the most expensive parts, they need a build they can afford and actually fly well. These starter loadouts keep costs low while still covering the basics of offense, defense, and utility.</p>

<h2 id="find-star-citizen-ship-components">Find Star Citizen Ship Components</h2>

<p>This searchable component database covers the full range of weapons, shields, and utility gear currently in the game. You can browse by category or jump straight to a specific part by name.</p>

<p>Filtering is built for speed. Narrow results by size, grade, class, or manufacturer, then check each part's stats and compatibility before you ever add it to a build.</p>

<h3>Browse Weapons, Shields and Ship Components</h3>

<p>The full catalog covers energy and ballistic weapons, shield generators, power plants, coolers, and quantum drives in one searchable list, with the same stat breakdowns used throughout the builder.</p>

<h3>Filter Components by Size, Class, Grade and Manufacturer</h3>

<p>Cut down a long list fast by filtering on the specs that actually matter to your build, whether that's a manufacturer known for heat efficiency or a minimum grade requirement.</p>

<h3>See Component Stats and Compatibility</h3>

<p>Every component page lists full stats alongside which ships and hardpoint sizes it fits, so you know before you shop whether a part actually works for your current build.</p>

<h3>Find Component Prices and In-Game Purchase Locations</h3>

<p>Alongside stats, you'll see estimated prices and which in game locations typically stock each part, which helps you plan a shopping route instead of flying station to station guessing.</p>

<h3>Track LIVE, PTU and Patch-Specific Component Changes</h3>

<p>Component stats shift with nearly every patch, so each entry notes whether it reflects LIVE or PTU data, cross checked against the <a href="https://robertsspaceindustries.com">official Star Citizen patch</a> notes from Cloud Imperium Games, along with a last updated date that keeps your build decisions grounded in the current patch rather than an outdated one.</p>

<h2 id="save-and-share-your-ship-builds">Save and Share Your Ship Builds</h2>

<p>A build you can't return to is just a wasted afternoon. Save any loadout in your ship builder account and it stays there through patches, ready to reload or adjust whenever component stats change.</p>

<p>Sharing works the same way. Generate a link for any build and send it to your org, a friend, or a forum thread, and anyone who opens it sees the exact same loadout you created.</p>

<h3>Save Your Favorite Ship Loadouts</h3>

<p>Save as many builds as you want across as many ships as you own, and organize them by role or ship name so you can find the right one fast.</p>

<h3>Generate a Shareable Build Link</h3>

<p>Every saved build gets a shareable build link you can post anywhere. Anyone opening it sees the full loadout instantly, with no account or manual re entry required.</p>

<h3>Import or Export Loadout Configurations</h3>

<p>Export a build as a file to back it up or share it outside the platform, then import it back in later, whether that's on your own account or someone else's.</p>

<h3>Browse Community Ship Builds</h3>

<p>Explore loadouts other players have shared publicly, filtered by ship or role, for inspiration or a proven starting point before you customize it to your own playstyle.</p>

<h3>Create and Manage Your Star Citizen Fleet</h3>

<p>Group multiple saved builds into a fleet builder view, useful for org leaders planning multi ship operations or solo players tracking every ship in their hangar at once.</p>

<h2 id="star-citizen-ship-builder-features">Star Citizen Ship Builder Features</h2>

<p>Every feature in this ship builder exists to remove guesswork from ship customization. Here's what's included.</p>

<p>None of it requires downloads, logins to third party tools, or manual spreadsheet math. It all runs directly in the builder.</p>

<ul>
  <li><strong>Complete Ship and Vehicle Database:</strong> Every flyable ship and ground vehicle currently in the game, updated as new ones release.</li>
  <li><strong>Detailed Ship Specifications:</strong> Full stat sheets for hull, shields, cargo, crew, and hardpoints on every ship.</li>
  <li><strong>Live Compatibility Validation:</strong> Real time checks that stop incompatible parts before you save a build.</li>
  <li><strong>Loadout Cost Calculator:</strong> An automatic running total of your build's in game cost as you shop.</li>
  <li><strong>Mobile-Friendly Ship Builder:</strong> A responsive layout that works as well on your phone as it does on desktop.</li>
  <li><strong>Free Star Citizen Planning Tool:</strong> No account required to build, and no cost to use any core feature.</li>
</ul>

<h2 id="how-to-use-the-ship-builder">How to Use the Ship Builder</h2>

<p>Getting your first build together in the Star Citizen ship builder takes five simple steps, whether you're new to the game or just new to the tool.</p>

<p>Follow them in order, or skip around if you already know what you're looking for. The compatibility checks keep you safe either way.</p>

<ol>
  <li>
    <strong>Choose a Ship or Vehicle</strong>
    <p>Search or browse the database and select the hull you want to build around. Suggested image alt text: "selecting a ship in the Star Citizen ship builder"</p>
  </li>
  <li>
    <strong>Select a Loadout Category</strong>
    <p>Pick whether you're building for combat, mining, cargo, salvage, or exploration, which filters the component list to what's relevant for that role.</p>
  </li>
  <li>
    <strong>Equip Compatible Components</strong>
    <p>Add weapons, shields, power plants, and utility gear one at a time, checking the live compatibility flag as you go.</p>
  </li>
  <li>
    <strong>Review Performance Statistics</strong>
    <p>Open the stats panel to see DPS, TTK, survivability, and travel range update instantly based on what you've equipped.</p>
  </li>
  <li>
    <strong>Save, Export or Share Your Build</strong>
    <p>Once you're happy with the loadout, save it to your account, export it as a file, or generate a link to share it.</p>
  </li>
</ol>

<h2 id="star-citizen-ship-builder-faq">Star Citizen Ship Builder FAQ</h2>

<h3>What is the best ship loadout in Star Citizen?</h3>

<p>There's no single best loadout, only the best one for your role and ship. Combat, mining, cargo, and exploration builds each optimize for different stats.</p>

<h3>How do I upgrade my ship components in Star Citizen?</h3>

<p>Buy or find a higher grade or larger size component that fits your existing hardpoint, then swap it in through the builder or the in game shop.</p>

<h3>How do I know whether a component fits my ship?</h3>

<p>The builder checks hardpoint size and type automatically and flags any mismatch before you save, so you don't need to memorize compatibility charts.</p>

<h3>Which weapons are best for my Star Citizen ship?</h3>

<p>It depends on your hardpoint sizes and playstyle. Compare DPS, range, and heat output for a few options before locking in your final loadout.</p>

<h3>Can I compare two Star Citizen ship loadouts?</h3>

<p>Yes. The comparison tool lines up two or more builds side by side across every core stat, including DPS, survivability, and cargo capacity.</p>

<h3>Can I save and share my ship build?</h3>

<p>Yes. Save any build to your account and generate a shareable link anyone can open to view the exact same loadout.</p>

<h3>Does this tool support LIVE and PTU ship data?</h3>

<p>Yes. Component entries note whether they reflect LIVE or PTU stats, along with a last updated date for that patch.</p>

<h3>Where can I buy ship components in Star Citizen?</h3>

<p>Component listings include estimated prices and common in game purchase locations, so you can plan a shopping trip before you fly out.</p>

<h2 id="conclusion">Conclusion</h2>

<p>A good loadout comes down to knowing what actually works together before you spend a single aUEC. That's the entire point of building your ship inside a tool that checks compatibility, calculates performance, and lets you compare options side by side instead of relying on guesswork or outdated forum posts.</p>

<p>Whether you're chasing bounties, hauling cargo across systems, or just trying to survive your first week in the verse, the right build changes how every encounter plays out. Start from a role based loadout if you want a head start, or build from scratch if you already know exactly what you want.</p>

<p>Save what works, share it with your org, and come back to adjust it the moment a patch changes the math. Your next fight, mining run, or long haul starts with the build you put together here.</p>


`