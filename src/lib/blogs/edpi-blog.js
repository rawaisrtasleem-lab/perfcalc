 export const edpiblog =`


<figure>
    <img
      src="/blog-images/edpi-formula.webp"
      alt="eDPI Formula"
      class="w-full rounded-xl"
    />
  </figure>

<style>
  .edpi-table-wrap {
    width: 100%;
    overflow-x: auto;
    margin: 1.75rem 0;
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 16px;
    background: rgba(15, 23, 42, 0.45);
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.2);
  }

  .edpi-table {
    width: 100%;
    min-width: 420px;
    border-collapse: collapse;
    background: rgba(15, 23, 42, 0.42);
  }

  .edpi-table thead th {
    background: linear-gradient(135deg, #60a5fa 0%, #8b5cf6 100%);
    color: #ffffff;
    text-align: left;
    font-size: 0.95rem;
    font-weight: 700;
    padding: 0.9rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }

  .edpi-table tbody td {
    padding: 0.85rem 1rem;
    color: #e2e8f0;
    border-bottom: 1px solid rgba(148, 163, 184, 0.16);
    background: rgba(15, 23, 42, 0.2);
  }

  .edpi-table tbody tr:nth-child(even) td {
    background: rgba(30, 41, 59, 0.38);
  }

  .edpi-table tbody tr:hover td {
    background: rgba(96, 165, 250, 0.08);
  }

  @media (max-width: 640px) {
    .edpi-table {
      min-width: 320px;
    }
  }
</style>

<p>eDPI stands for effective DPI, and you get it by multiplying your mouse DPI by your in-game sensitivity. A player using 800 DPI with 0.4 in-game sensitivity has an eDPI of 320. It is one simple number that tells you how fast your cursor really moves, no matter which mouse or game you use.</p>

<p>That is why gamers and pro players share their eDPI when they talk about settings. In this guide you will learn what eDPI is, the formula, how to find yours step by step, and how it differs from DPI. You can also skip the math and use our eDPI Calculator to get your number in seconds.</p>

<h2>What Is eDPI?</h2>

<p>eDPI, or effective DPI, is a single number that combines your mouse hardware setting (DPI) and your in-game sensitivity. DPI means “dots per inch” and shows how far your cursor moves when you move the mouse one inch. In-game sensitivity then scales that movement again inside the game.</p>

<p>Neither number alone tells you how your aim really feels. Two players can both use 800 DPI, but if one plays at 0.2 sensitivity and the other at 0.6, their aim will feel very different. Effective DPI solves this by turning both settings into one comparable value.</p>

<p>For example, 800 DPI × 0.4 sensitivity = 320 eDPI. Another player with 1600 DPI × 0.2 sensitivity also gets 320 eDPI. Their settings look different, but the cursor speed is the same.</p>

<h2>eDPI Formula</h2>

<p>The eDPI formula is simple:</p>

<h3>eDPI = Mouse DPI × In-game Sensitivity</h3>

<p>Here are a few examples:</p>

<div class="edpi-table-wrap">
  <table class="edpi-table">
    <thead>
      <tr>
        <th><strong>Mouse DPI</strong></th>
        <th><strong>In-game Sensitivity</strong></th>
        <th><strong>eDPI</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>400</td>
        <td>2.0</td>
        <td>800</td>
      </tr>
      <tr>
        <td>800</td>
        <td>0.4</td>
        <td>320</td>
      </tr>
      <tr>
        <td>1600</td>
        <td>0.25</td>
        <td>400</td>
      </tr>
    </tbody>
  </table>
</div>

<p>The formula is the same in most shooters, but some games use a different sensitivity scale. Overwatch, for example, does not use the same scale as Valorant, so the same eDPI will not feel identical in both games. We cover this in the games section below.</p>

<h2>How to Calculate Your eDPI (Step by Step)</h2>

<p>You only need two numbers and a calculator.</p>

<h3>Step 1: Find your mouse DPI</h3>

<p>Open your mouse software or check the mouse specifications. We explain this in more detail in the next section.</p>

<h3>Step 2: Check your in-game sensitivity</h3>

<p>Open your game settings and look for the mouse or aim sensitivity value. In some games there are separate values for hip-fire and scoped aim. Use the main (hip-fire) value for your eDPI.</p>

<h3>Step 3: Multiply the two values</h3>

<p>Say your mouse is set to 800 DPI and your Valorant sensitivity is 0.35. Then 800 × 0.35 = 280. Your eDPI is 280.</p>

<h3>Step 4: Or use a calculator</h3>

<p>If you do not want to calculate manually, enter both numbers in our eDPI Calculator. It works for Valorant, CS2, Apex Legends, Overwatch, Fortnite and Rainbow Six Siege.</p>

<h2>How to Find Your Mouse DPI</h2>

<p>Many players do not know their exact DPI. Here are the easiest ways to find it:</p>

<ul>
<li><strong>Mouse software:</strong> Logitech G Hub, Razer Synapse, SteelSeries GG and similar apps show your current DPI setting.</li>
<li><strong>DPI button and indicator:</strong> Many mice have a DPI button on top with an LED that shows the active level. Check the manual to see what each level means.</li>
<li><strong>Manufacturer website:</strong> Look up your mouse model to see its default DPI levels.</li>
<li><strong>DPI analyzer:</strong> If you are not sure, an online DPI analyzer can measure it. Move the mouse a fixed distance, such as 5 cm or 2 inches, and the tool estimates your DPI.</li>
</ul>

<p>Remember that mouse software can store different DPI profiles. Make sure you check the profile you actually use while gaming.</p>

<h2>DPI vs eDPI: What Is the Difference?</h2>
<figure>
    <img
      src="/blog-images/dpi-vs-edpi.webp"
      alt="dpi vs edpi"
      class="w-full rounded-xl"
    />
  </figure>

<p>DPI and eDPI are related, but they are not the same thing.</p>

<div class="edpi-table-wrap">
  <table class="edpi-table">
    <thead>
      <tr>
        <th></th>
        <th><strong>DPI</strong></th>
        <th><strong>In-game Sensitivity</strong></th>
        <th><strong>eDPI</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>What it is</td>
        <td>Mouse hardware setting</td>
        <td>Game setting</td>
        <td>Combined result of both</td>
      </tr>
      <tr>
        <td>Where you change it</td>
        <td>Mouse or mouse software</td>
        <td>Game settings menu</td>
        <td>Cannot be changed directly</td>
      </tr>
      <tr>
        <td>Purpose</td>
        <td>Controls raw cursor speed</td>
        <td>Scales movement inside the game</td>
        <td>Compares your overall sensitivity</td>
      </tr>
    </tbody>
  </table>
</div>

<p>The key point is that you cannot set eDPI directly. You change it by adjusting DPI, in-game sensitivity, or both. That is also why two players with different DPI can have the same eDPI.</p>

<h2>Why eDPI Matters</h2>

<p>There are three main reasons to know your eDPI.</p>

<h3>1. You can compare settings easily.</h3>

<p>When a streamer or pro says they play at 280 eDPI, you immediately know how fast their sensitivity is, even if you use a different mouse.</p>

<h3>2. You can keep the same feeling when you change your mouse.</h3>

<p>If you move from a 400 DPI setup to 800 DPI, you can halve your in-game sensitivity to keep the same eDPI.</p>

<h3>3. You can share your settings clearly.</h3>

<p>One number is easier to share in a team or community than a full list of settings.</p>

<p>There is one limitation. eDPI works best when you compare settings inside the same game. For comparing different games, cm/360 (how many centimeters of mouse movement you need for a full 360° turn) is more accurate because every game has its own sensitivity scale. eDPI is still a great starting point, and cm/360 is the next step when you want precision.</p>

<h2>What Is a Good eDPI?</h2>

<p>There is no single perfect eDPI. The best value depends on your game, your mouse pad space, your grip and your playstyle. As a general rule, tactical shooters like Valorant and CS2 usually favor lower sensitivity, because precise aim and small crosshair adjustments matter more than fast turning.</p>

<p>A broad guide looks like this:</p>

<ul>
<li><strong>Low eDPI:</strong> more control and precision, but you need more arm movement and more mouse pad space.</li>
<li><strong>Medium eDPI:</strong> a balance between control and turning speed.</li>
<li><strong>High eDPI:</strong> fast turning and wrist movement, but harder to stay precise.</li>
</ul>

<p>Ranges differ by game, so check the dedicated guides: <a href="https://gamingsmart.com/valorant-edpi-calculator/">Best eDPI for Valorant</a> and <a href="https://www.corsair.com/us/en/explorer/tools/edpi/cs2-edpi-calculator/?srsltid=AU7gw4U8kHWMDH3rI0_JjOH7hn9pdK0Bm7-iEMEm0YlzARlfP3KtLaJ-">Best eDPI for CS2</a>. Start with a value close to the average, play for a few days, then adjust in small steps.</p>

<h2>How to Change Your eDPI</h2>

<p>You can change your eDPI in two ways:</p>

<ol>
<li><strong>Change your <a href="https://www.clickmousetest.com/mouse-dpi-analyzer">mouse DPI</a></strong> in your mouse software or with the DPI button.</li>
<li><strong>Change your in-game sensitivity</strong> in the game settings.</li>
</ol>

<p>Most players keep their DPI at a common value such as 400, 800 or 1600 and use the in-game sensitivity for fine adjustment. This gives you smaller, more precise steps. If you want to lower your eDPI, reduce either value. If you want to raise it, increase either value.</p>

<p>Whenever you change something, change only one value at a time and give your hand a few sessions to adapt. Constant switching makes it hard to build muscle memory.</p>

<h2>eDPI Across Popular Games</h2>

<p>The eDPI formula is the same in many games, but the way each game scales sensitivity is different. Here is a quick overview.</p>

<ul>
<li><strong>Valorant:</strong> Uses a low sensitivity scale, so values like 0.3 to 0.5 are common. Pro players often share their settings as DPI and sensitivity, and the community compares them by <a href="https://perfcalcpro.com/tools/edpi-calculator">eDPI</a>. See \</li>

<li><strong>CS2 / CS:GO:</strong> Uses a different scale. As a rule of thumb, multiplying a Valorant sensitivity by about 3.18 gives the CS2 sensitivity for the same cm/360. So the same eDPI does not mean the same feel between the two games.</li>

<li><strong>Apex Legends:</strong> Similar scaling to the Source engine, so eDPI is useful for comparing settings, but check the separate ADS multipliers.</li>

<li><strong>Overwatch:</strong> Uses its own sensitivity scale, so Overwatch eDPI numbers cannot be compared directly with Valorant or CS2.</li>

<li><strong>Fortnite:</strong> Uses a percentage-based sensitivity, and many players track X and Y values separately.</li>

<li><strong>Rainbow Six Siege:</strong> Has separate sensitivity settings for different scopes, so check your base value first.</li>
</ul>

<p>If you play more than one game, a sensitivity converter helps you match your aim across games.</p>

<h2>Frequently Asked Questions</h2>

<h3>What does eDPI stand for?</h3>

<p>eDPI stands for effective DPI. It is your mouse DPI multiplied by your in-game sensitivity, and it shows your overall mouse sensitivity as one number.</p>

<h3>Is a higher eDPI better?</h3>

<p>No. A higher eDPI is not better or worse by itself. Lower values usually give more precision, while higher values give faster turning. The best eDPI is the one that feels comfortable and consistent for your game and playstyle.</p>

<h3>Is eDPI the same as DPI?</h3>

<p>No. DPI is a mouse hardware setting, while eDPI combines DPI with your in-game sensitivity. Two players with different DPI can have the same eDPI.</p>

<h3>How do I convert eDPI between games?</h3>

<p>You cannot convert eDPI directly, because each game has its own sensitivity scale. Use a sensitivity converter or match your cm/360 instead.</p>

<h3>Does mouse polling rate affect eDPI?</h3>

<p>No. Polling rate controls how often the mouse reports its position to the computer. It does not change DPI, sensitivity or eDPI.</p>

<h3>Can I use the same eDPI in Valorant and CS2?</h3>

<p>Not for the same feel. The two games use different sensitivity scales, so the same eDPI will feel different. Convert your sensitivity, or match your cm/360, to keep the same aim.</p>

<h2>Final Thoughts</h2>

<p>eDPI is the easiest way to understand and compare your mouse sensitivity. Multiply your DPI by your in-game sensitivity, and you have a number you can share, compare and adjust with confidence. Remember that it works best inside one game, so use cm/360 or a converter when you move between games.</p>

<p>Ready to find yours? Enter your DPI and sensitivity in our <a href="https://perfcalcpro.com/tools/edpi-calculator">eDPI Calculator</a> and get your effective DPI instantly.</p>



`
