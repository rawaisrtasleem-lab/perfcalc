export const blog21 = `


<figure><img src="/blog-images/why-is-my-pc-so-laggy.webp" alt="Why Is My PC So Laggy?" class="w-full rounded-xl"></figure>

<p>When a PC lags, games stutter, programs open slowly, and the mouse can feel late. The cause is often one part of your system that is working too hard or waiting on another part. This guide shows you how to find that part in a few minutes, and then how to fix each of the 10 most common causes.</p>

<h2>What Kind of Lag Do You Have?</h2>
<p>"Lag" can mean three different things. Knowing which one you have saves time.</p>

<ul>
  <li><strong>Low FPS:</strong> the game runs at a low frame rate and looks choppy all the time. Read our guide on <a href="https://perfcalcpro.com/blog/fps-vs-hz">FPS vs Hz</a> for how frame rate works.</li>
  <li><strong>Stutter:</strong> the game is smooth most of the time but freezes for a moment now and then.</li>
  <li><strong>Network lag:</strong> the picture is smooth, but actions happen late in online games. This is usually a connection problem, not a PC problem (see cause 10).</li>
</ul>

<h2>Step 1: Find the Cause With Task Manager</h2>
<ol>
  <li>Press Ctrl + Shift + Esc to open the Task Manager.</li>
  <li>If you see a small window, click More details.</li>
  <li>Open the Performance tab.</li>
  <li>Click CPU, Memory, Disk, and GPU one at a time while the lag is happening.</li>
</ol>
<p>Look for one part that stays close to its maximum while the others stay low. That part is the likely cause.</p>

<table class="w-full border-collapse rounded-xl overflow-hidden">
  <thead>
    <tr class="bg-white/5">
      <th class="border border-white/20 p-4 text-white font-semibold">What You See</th>
      <th class="border border-white/20 p-4 text-white font-semibold">Likely Cause</th>
      <th class="border border-white/20 p-4 text-white font-semibold">Go To</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">CPU stays very high</td>
      <td class="border border-white/20 p-4 text-zinc-300">Background apps, malware, or a CPU bottleneck</td>
      <td class="border border-white/20 p-4 text-zinc-300">Causes 1, 7, 8</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">Memory stays almost full</td>
      <td class="border border-white/20 p-4 text-zinc-300">Not enough RAM or too many apps</td>
      <td class="border border-white/20 p-4 text-zinc-300">Causes 1, 6</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">Disk stays at the top</td>
      <td class="border border-white/20 p-4 text-zinc-300">Full or slow storage</td>
      <td class="border border-white/20 p-4 text-zinc-300">Cause 5</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">GPU low, CPU high in games</td>
      <td class="border border-white/20 p-4 text-zinc-300">CPU bottleneck</td>
      <td class="border border-white/20 p-4 text-zinc-300">Cause 7</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">Everything looks normal, but online games lag</td>
      <td class="border border-white/20 p-4 text-zinc-300">Network problem</td>
      <td class="border border-white/20 p-4 text-zinc-300">Cause 10</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">Lag gets worse after some time</td>
      <td class="border border-white/20 p-4 text-zinc-300">Heat</td>
      <td class="border border-white/20 p-4 text-zinc-300">Cause 4</td>
    </tr>
  </tbody>
</table>

<h2>10 Causes and Fixes</h2>
<figure><img src="/blog-images/find-the-cause-with-task-manager.webp" alt="find-the-cause-with-task-manager?" class="w-full rounded-xl"></figure>

<h3>1. Too Many Background Apps</h3>
<p>Browsers with many tabs, chat apps, launchers, and cloud sync tools all use CPU and memory. In Task Manager, open the Processes tab and sort by CPU or Memory. Close what you do not need before you play.</p>

<h3>2. Too Many Startup Programs</h3>
<p>Apps that start with Windows use resources right after you turn on the PC. Open Task Manager, go to the Startup apps tab, and disable programs you do not need at startup. Do not disable anything you do not recognize without checking what it is first.</p>

<h3>3. Outdated Drivers or Windows</h3>
<p>Old graphics drivers and missing Windows updates can cause stutter, crashes, and low performance in new games.</p>
<ul>
  <li>Update Windows through Settings &gt; Windows Update.</li>
  <li>Download your graphics driver from the NVIDIA, AMD, or Intel website.</li>
  <li>Update chipset drivers from your motherboard or laptop maker.</li>
</ul>
<p>Update a BIOS only if you have a specific reason and follow your maker's instructions carefully.</p>

<h3>4. Overheating</h3>
<p>When a CPU or GPU gets too hot, it slows itself down to protect itself. This is called thermal throttling. The typical sign is a PC that runs well at first and then lags after a while, often with loud fans.</p>
<ul>
  <li>Clean dust from fans and vents. Turn the PC off and unplug it first.</li>
  <li>Make sure the case has clear airflow and nothing blocks the vents.</li>
  <li>On a laptop, use it on a hard flat surface.</li>
  <li>Watch temperatures with a monitoring tool. Safe limits differ by chip, so check your CPU or GPU maker's specifications.</li>
</ul>

<h3>5. Full or Slow Storage</h3>
<p>If Task Manager shows the disk at the top during lag, storage is the problem. A hard disk drive (HDD) is much slower than a solid state drive (SSD), especially for loading Windows, apps, and game levels.</p>
<ul>
  <li>Free up space. As a rule of thumb, avoid running a drive almost full.</li>
  <li>Use Settings &gt; System &gt; Storage to clean temporary files.</li>
  <li>If Windows is installed on an HDD, moving it to an SSD is often the biggest improvement you can make for general speed.</li>
</ul>
<p>An SSD makes loading and opening things faster. It does not usually raise FPS in games.</p>

<h3>6. Not Enough RAM</h3>
<p>If memory stays close to full in Task Manager, Windows starts using your drive as extra memory, which is much slower. First close apps you do not need. If memory is still almost full during normal use, adding more RAM helps. Check your motherboard for free slots and match the type your PC uses.</p>

<h3>7. CPU Bottleneck</h3>
<p>A CPU bottleneck happens when your processor cannot prepare frames as fast as your graphics card can draw them. The GPU waits, and FPS stays lower than expected.</p>

<h4>Signs:</h4>
<ul>
  <li>GPU usage stays well below full while the CPU is very high.</li>
  <li>FPS drops in crowded scenes, large cities, or big multiplayer matches.</li>
  <li>Lowering the resolution does not raise FPS.</li>
</ul>
<p>GPU usage can also be low because of an FPS cap or VSync, so check those settings first.</p>

<h4>Fixes:</h4>
<ul>
  <li>Lower CPU-heavy settings such as draw distance, crowd density, and physics.</li>
  <li>Raise the resolution or turn on upscaling such as DLSS or FSR to move more work to the GPU.</li>
  <li>Close background apps.</li>
  <li>If you are still limited, consider a faster CPU.</li>
</ul>
<p>To check whether your CPU or GPU is holding your PC back, try our <a href="https://perfcalcpro.com/tools/bottleneck-calculator">Bottleneck Calculator</a>. For CPU choices, see <a href="https://perfcalcpro.com/blog/which-is-better-ryzen-or-intel-for-gaming">Ryzen vs Intel for Gaming</a>.</p>

<h3>8. Malware</h3>
<p>Malicious software can use your CPU or network in the background. Run a full scan with Windows Security (Virus &amp; threat protection &gt; Scan options &gt; Full scan). If the PC is still slow, run a scan with a second trusted scanner.</p>

<h3>9. Power Settings</h3>
<p>A power plan set to save energy can hold back performance. On Windows 11, open Settings &gt; System &gt; Power &amp; battery and set the power mode to Best performance. On a laptop, plug in the charger while gaming. Also make sure Game Mode is turned on in Windows settings.</p>

<h3>10. Network Lag</h3>
<p>If your PC feels smooth but online games react late, the connection is the issue. Check the ping shown in the game.</p>
<ul>
  <li>Use a wired Ethernet cable instead of Wi-Fi if you can.</li>
  <li>Pause downloads and streaming on other devices.</li>
  <li>Pick the game server closest to you.</li>
  <li>Restart your router.</li>
</ul>

<h2>When to Upgrade</h2>
<p>Try the free fixes first. Think about an upgrade when:</p>
<ul>
  <li>Task Manager shows the same part at its limit even after a clean restart and closing apps.</li>
  <li>Games lag even on low settings.</li>
  <li>Your PC still uses an HDD for Windows.</li>
  <li>Your CPU is much older than your graphics card.</li>
</ul>
<p>Upgrade the part that Task Manager and the steps above point to, rather than guessing. To see what your PC can handle, use <a href="https://perfcalcpro.com/blog/can-my-pc-run-it">Can My PC Run It?</a>, and for a new build see <a href="https://perfcalcpro.com/blog/best-budget-gaming-pc">Best Gaming PC for Budget</a>. To estimate FPS before you buy, use the <a href="https://perfcalcpro.com/tools/fps-calculator">FPS Calculator</a>.</p>

<h2>Tools to Monitor Your PC</h2>
<ul>
  <li>Task Manager: built into Windows. Shows CPU, memory, disk, and GPU.</li>
  <li>Resource Monitor: built into Windows. Gives a more detailed view.</li>
  <li>MSI Afterburner: shows GPU usage and FPS while you play.</li>
  <li>HWMonitor: shows temperatures and fan speeds.</li>
  <li>CrystalDiskInfo: shows the health of your drives.</li>
</ul>

<h2>Frequently Asked Questions</h2>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Why is my PC lagging all of a sudden?</h3>
<p>Think about what changed: a new update, a new app, a new game, or more dust and heat. Check Task Manager, then run a malware scan and check temperatures.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Why does my PC lag only in games?</h3>
<p>Games use the CPU, GPU, and drive much harder than normal apps. Check graphics drivers, game settings, temperatures, and whether your CPU is a bottleneck.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Why is my PC lagging but my internet is fine?</h3>
<p>Then the cause is probably local. Check CPU, memory, disk, and temperature in the Task Manager.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>How do I tell if the lag is a software or hardware problem?</h3>
<p>Software problems usually come from a specific app or a setting and improve after you close it or update. Hardware limits show one part at its maximum even with few apps open.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Why does restarting the PC fix lag for a while?</h3>
<p>A restart closes all apps and clears memory. If the lag comes back after a few hours, look for a background app that keeps using more memory, or for heat.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Will a new graphics card fix my lag?</h3>
<p>Only if the GPU is the weak part. If the CPU is the bottleneck, a new GPU will not help much.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Is lag the same as low FPS?</h3>
<p>No. Low FPS is one kind of lag. Stutter and network delay are others, and they have different fixes.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Should I upgrade my PC or buy a new one?</h3>
<p>If several parts are old, a new PC can make more sense than replacing them one by one. If only one part is the problem, such as an HDD or too little RAM, upgrading that part is usually cheaper. Compare real prices before you decide.</p>
</div>

`