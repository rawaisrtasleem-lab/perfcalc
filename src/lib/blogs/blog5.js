export const blog5 = `


<figure>
  <img src="/blog-images/fps.webp" alt="fps vs Hz" class="w-full h-auto rounded-lg shadow-md">
</figure>
<p>FPS and Hz are two of the most common numbers in PC gaming, and they are often mixed up. They are not the same thing. FPS is how many frames your graphics card creates each second. Hz is how many times your monitor refreshes the picture each second. This guide explains the 7 key differences, how to check both numbers on your PC, and how to match them for a smooth setup.</p>

<h2>Quick Summary: FPS vs Hz</h2>
<p><strong>FPS (frames per second):</strong> the number of frames your GPU renders each second.</p>
<p><strong>Hz (hertz):</strong> the number of times your monitor refreshes the screen each second.</p>
<p><em>Simple rule: FPS is how many frames are made. Hz is how many times the screen can update.</em></p>

<h2>What Is FPS?</h2>
<p>A game is a series of still images shown one after another. Each image is called a frame. Your graphics card (GPU) draws each frame, and FPS counts how many it finishes in one second. At 30 FPS the GPU draws 30 frames every second. At 144 FPS it draws 144.</p>
<p>More FPS usually makes motion look smoother and controls feel quicker. FPS does not change how good the graphics look. Image quality comes from settings such as textures, lighting, and resolution.</p>
<p>FPS is not fixed. It changes with your GPU and CPU, the game, the resolution, and the graphics settings. To estimate what your own hardware can reach, use our free <a href="/tools/fps-calculator" target="_blank" rel="noopener noreferrer">FPS Calculator</a>.</p>

<h2>What Is Hz?</h2>
<p>Hz is the unit for a monitor's refresh rate. A 60 Hz monitor refreshes 60 times per second. A 144 Hz monitor refreshes 144 times per second. Some gaming monitors go to 240 Hz, 360 Hz, or higher.</p>
<p>The refresh rate is a hardware limit. A 60 Hz monitor can show at most 60 new images per second, even if your GPU makes 200 frames per second. The extra frames are never fully displayed.</p>

<h2>The 7 Key Differences</h2>

<h3>1. What they measure</h3>
<p>FPS measures how many frames your GPU produces each second. Hz measures how many times your monitor refreshes each second.</p>

<h3>2. Which hardware controls them</h3>
<p>FPS depends mainly on your GPU, with help from your CPU. Hz is set by your monitor. A faster GPU raises FPS, but it cannot raise Hz.</p>

<h3>3. Fixed or variable</h3>
<p>FPS changes all the time. It drops in busy scenes and rises in simple ones. Hz stays at the value you set in your display settings, unless your monitor uses variable refresh rate.</p>

<h3>4. How you improve each</h3>
<p>To raise FPS, lower graphics settings, lower the resolution, close background apps, or upgrade your hardware. To raise Hz, you need a monitor with a higher refresh rate, and you must set it in your display settings.</p>

<h3>5. What a mismatch causes</h3>
<p>When the two numbers do not line up, you can see screen tearing or uneven motion (stutter). The next section explains both.</p>

<h3>6. What each one limits</h3>
<p>FPS limits how many new frames exist. Hz limits how many of those frames your screen can show. You only see the lower of the two in practice. A 60 Hz monitor with a GPU making 200 FPS shows about 60 updates per second. A 240 Hz monitor with a GPU making 60 FPS still shows only 60 new frames per second.</p>

<h3>7. Where you check them</h3>
<p>You check FPS with an in-game or overlay counter. You check Hz in your operating system's display settings. Both are covered below.</p>

<h3>FPS vs Hz: Side-by-Side Table</h3>
<table class="w-full border-collapse rounded-xl overflow-hidden">
  <thead>
    <tr class="bg-white/5">
      <th class="border border-white/20 p-4 text-white font-semibold">Feature</th>
      <th class="border border-white/20 p-4 text-white font-semibold">FPS (Frame Rate)</th>
      <th class="border border-white/20 p-4 text-white font-semibold">Hz (Refresh Rate)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">What it measures</td>
      <td class="border border-white/20 p-4 text-zinc-300">Frames your GPU makes per second</td>
      <td class="border border-white/20 p-4 text-zinc-300">Screen refreshes per second</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">Controlled by</td>
      <td class="border border-white/20 p-4 text-zinc-300">GPU and CPU</td>
      <td class="border border-white/20 p-4 text-zinc-300">Monitor</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">Fixed or variable</td>
      <td class="border border-white/20 p-4 text-zinc-300">Changes with the game and scene</td>
      <td class="border border-white/20 p-4 text-zinc-300">Set by the monitor and your settings</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">How to raise it</td>
      <td class="border border-white/20 p-4 text-zinc-300">Lower settings or upgrade hardware</td>
      <td class="border border-white/20 p-4 text-zinc-300">Use a higher-refresh monitor</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">Where to check</td>
      <td class="border border-white/20 p-4 text-zinc-300">In-game or overlay counter</td>
      <td class="border border-white/20 p-4 text-zinc-300">Display settings</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">Problem when too low</td>
      <td class="border border-white/20 p-4 text-zinc-300">Choppy, laggy gameplay</td>
      <td class="border border-white/20 p-4 text-zinc-300">Fewer screen updates and older images on screen</td>
    </tr>
  </tbody>
</table>

<h2>How FPS and Hz Work Together</h2>

<figure>
  <img src="/blog-images/how-fps-and-hz-work-together.webp" alt="how-fps-and-hz-work-together" class="w-full h-auto rounded-lg shadow-md">
</figure>
<p>Think of the GPU as a machine that prints pictures and the monitor as a window that updates on a fixed schedule.</p>
<p>Every refresh, the monitor shows the newest picture that is ready. If the GPU makes more pictures than the monitor can show, some are skipped. If the GPU makes fewer, the same picture is shown more than once.</p>
<p>Higher refresh rates also mean each refresh arrives sooner. This table shows how long one refresh takes at common refresh rates. The values are simple math: 1000 divided by Hz.</p>

<table class="w-full border-collapse rounded-xl overflow-hidden">
  <thead>
    <tr class="bg-white/5">
      <th class="border border-white/20 p-4 text-white font-semibold">Refresh Rate</th>
      <th class="border border-white/20 p-4 text-white font-semibold">Time Between Refreshes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">60 Hz</td>
      <td class="border border-white/20 p-4 text-zinc-300">16.7 ms</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">120 Hz</td>
      <td class="border border-white/20 p-4 text-zinc-300">8.3 ms</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">144 Hz</td>
      <td class="border border-white/20 p-4 text-zinc-300">6.9 ms</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">165 Hz</td>
      <td class="border border-white/20 p-4 text-zinc-300">6.1 ms</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">240 Hz</td>
      <td class="border border-white/20 p-4 text-zinc-300">4.2 ms</td>
    </tr>
    <tr>
      <td class="border border-white/20 p-4 text-zinc-300">360 Hz</td>
      <td class="border border-white/20 p-4 text-zinc-300">2.8 ms</td>
    </tr>
  </tbody>
</table>

<p>The same math works for frames. At 60 FPS each frame takes 16.7 ms to make, and at 144 FPS each frame takes 6.9 ms. Shorter times mean newer information on screen, which is why competitive players like high refresh rates.</p>

<h2>Screen Tearing, Stutter, and VSync</h2>
<p>Screen tearing happens when the monitor shows parts of two different frames at once. You see a horizontal split line in fast movement. It can happen whenever FPS and Hz are not in sync, and it is easiest to notice when FPS is higher than Hz.</p>
<p>Stutter is uneven motion. It can happen when the GPU cannot deliver a new frame for every refresh, so some frames stay on screen longer than others.</p>
<p>VSync makes the GPU wait for the monitor's refresh, which stops tearing. The downside is that it can add input lag, and it can make frame rate drop sharply when the GPU cannot keep up.</p>

<h2>G-Sync and FreeSync</h2>
<p>G-Sync (from NVIDIA) and FreeSync (from AMD) are variable refresh rate (VRR) technologies. Instead of a fixed schedule, the monitor changes its refresh rate to follow the GPU's FPS, within the range the monitor supports. This removes most tearing and stutter without the delay of classic VSync.</p>
<p>Names differ by tier, such as G-Sync Compatible and FreeSync Premium. Many FreeSync monitors also work with NVIDIA graphics cards as G-Sync Compatible, but support depends on the exact monitor and GPU, so check the monitor's specifications before buying.</p>
<p>A common tip is to cap your FPS a few frames below your monitor's maximum refresh rate so the game stays inside the VRR range. This works best when tested in your own games.</p>

<h2>How to Check Your Refresh Rate on Windows</h2>
<ol>
  <li>Right-click the desktop and choose Display settings.</li>
  <li>Scroll down and open the Advanced display.</li>
  <li>Under Choose a refresh rate, select the highest value available.</li>
</ol>
<p>If the highest option is lower than your monitor's rating, check that your cable and port support that refresh rate at your resolution. Older HDMI versions and cheap cables can limit it. DisplayPort or a newer HDMI cable usually fixes this.</p>

<h2>How to Check Your FPS</h2>
<ul>
  <li>Steam overlay: turn on the FPS counter in Steam's in-game settings.</li>
  <li>Xbox Game Bar: press Windows key + G and open the performance widget.</li>
  <li>GPU overlay: NVIDIA and AMD software both include FPS overlays.</li>
  <li>Estimate first: use the <a href="/tools/fps-calculator" target="_blank" rel="noopener noreferrer">FPS Calculator</a> to get an estimate before you buy or upgrade.</li>
</ul>
<p>Test in the games you actually play. FPS can be very different from one game to the next.</p>

<h2>How to Raise Your FPS</h2>
<ul>
  <li>Lower graphics settings such as shadows and effects.</li>
  <li>Lower the game resolution.</li>
  <li>Close background apps that use CPU or GPU power.</li>
  <li>Try upscaling such as DLSS or FSR if your game and GPU support it. These render at a lower resolution and scale up, which can raise FPS.</li>
  <li>Upgrade your GPU or CPU if the settings above are not enough.</li>
</ul>

<h2>How to Match FPS and Hz</h2>

<h3>Rule one: match the monitor to your GPU.</h3>
<p>Choose a refresh rate close to the FPS your GPU can reach in your favorite games. A very high refresh rate does not help if your GPU can only reach a much lower FPS. A GPU that makes far more FPS than a 60 Hz monitor can show is also wasted.</p>

<h3>Rule two: use variable refresh rate.</h3>
<p>If your monitor and GPU support G-Sync or FreeSync, turn it on.</p>

<h3>Rule three: think about resolution.</h3>
<p>Higher resolutions need more GPU power. Reaching high FPS at 4K is much harder than at 1080p or 1440p, so high-refresh gaming is easier at lower resolutions.</p>

<h3>Rule four: think about the games you play.</h3>
<p>Fast competitive shooters benefit most from high refresh rates and high FPS. Slower story or strategy games often look great at 60 to 144 Hz.</p>

<h2>Conclusion</h2>
<p>FPS and Hz measure different things. FPS is how many frames your GPU makes, and Hz is how often your monitor can refresh. You get the best result when the two are balanced, and variable refresh rate helps when they are not.</p>
<p>Start by checking your refresh rate in Windows. Then check your FPS in the games you play, and match your upgrades to whichever number is holding you back.</p>

<h2>FAQs</h2>

<h3>Is FPS the same as Hz?</h3>
<p>No. FPS is how many frames your GPU makes each second. Hz is how many times your monitor refreshes each second.</p>

<h3>Can FPS be higher than Hz?</h3>
<p>Yes. Extra frames are not fully shown, and you may see screen tearing unless VSync or variable refresh rate is on.</p>

<h3>Does a higher Hz monitor increase my FPS?</h3>
<p>No. Hz does not change how many frames your GPU makes. It only changes how many your screen can show.</p>

<h3>Will a 240 Hz monitor help if my game runs at 60 FPS?</h3>
<p>Not much. The screen still receives only about 60 new frames per second. Some features, such as variable refresh rate, can still improve smoothness.</p>

<h3>Is 60 Hz enough for gaming?</h3>
<p>It is fine for many single-player and casual games. Competitive players often prefer 144 Hz or higher because they get newer frames more often.</p>

<h3>What refresh rate should I choose?</h3>
<p>Choose one close to the FPS your GPU can reach in your favorite games. Use the <a href="/tools/fps-calculator" target="_blank" rel="noopener noreferrer">FPS Calculator</a> to estimate it.</p>

<h3>Does VSync add input lag?</h3>
<p>It can, because the GPU waits for the monitor's refresh. G-Sync and FreeSync are designed to reduce tearing without that wait, although results depend on the monitor and settings.</p>

<h3>Why is my monitor stuck at 60 Hz?</h3>
<p>The setting may not be turned on in Windows, or the cable or port may not support a higher refresh rate at your resolution. Check both.</p>

<h3>Do I need a new GPU for a high-refresh monitor?</h3>
<p>Not always. Lowering settings and resolution can raise FPS. An upgrade helps if your GPU still cannot reach the FPS you want.</p>

`

