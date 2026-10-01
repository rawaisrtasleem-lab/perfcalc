export const blog22 = `

<h1>Bits vs Bytes: What's the Difference?</h1>

<figure><img src="/blog-images/bits-vs-bytes-whats-the-difference.webp" alt="Bits vs Bytes: What's the Difference?" class="w-full rounded-xl"></figure>
<p>Your internet plan says 500 Mbps. Your download bar shows about 60. You were not cheated. You ran into the most common mix-up in tech: bits versus bytes. This guide explains the difference, how to convert between them, and why it changes how fast a download looks.</p>

<p><strong>Short answer:</strong> 1 byte = 8 bits. A lowercase b means bits and an uppercase B means bytes. Internet speed is usually measured in megabits per second (Mbps), and file sizes are usually measured in megabytes (MB). To turn Mbps into MB/s, divide by 8.</p>

<h2>What Is a Bit?</h2>
<p>A bit (short for "binary digit") is the smallest unit of digital data. It holds one of two values: 0 or 1. Computers store it in different ways, such as a voltage level in memory, a magnetic direction on a hard disk, or a pit on an optical disc.</p>

<p>One bit alone tells you almost nothing, like a single light switch that is on or off. Many bits together, in the right order, make up text, photos, music, and programs.</p>

<h2>What Is a Byte?</h2>
<p>A byte is a group of 8 bits, such as 10001011. Each bit can be 0 or 1, so 8 bits can make 2⁸ = 256 different values.</p>

<p>One byte can hold:</p>
<ul>
  <li>A number from 0 to 255.</li>
  <li>One character from a basic set such as ASCII.</li>
  <li>The brightness of one colour (red, green, or blue) in a pixel.</li>
</ul>
<p>Most modern text uses UTF-8, where one character takes 1 to 4 bytes. An English letter takes 1 byte, while an emoji can take 4. The 8-bit byte became the standard size in computing, which is why file sizes and storage are counted in bytes.</p>

<h2>Bit vs Byte at a Glance</h2>
<table class="w-full border-collapse">
  <thead>
    <tr><th class="border border-white/20 p-3 text-left">Feature</th><th class="border border-white/20 p-3 text-left">Bit</th><th class="border border-white/20 p-3 text-left">Byte</th></tr>
  </thead>
  <tbody>
    <tr><td class="border border-white/20 p-3">Symbol</td><td class="border border-white/20 p-3">b</td><td class="border border-white/20 p-3">B</td></tr>
    <tr><td class="border border-white/20 p-3">Size</td><td class="border border-white/20 p-3">One value, 0 or 1</td><td class="border border-white/20 p-3">8 bits</td></tr>
    <tr><td class="border border-white/20 p-3">Usually used for</td><td class="border border-white/20 p-3">Data transfer speed</td><td class="border border-white/20 p-3">File size and storage</td></tr>
    <tr><td class="border border-white/20 p-3">Common units</td><td class="border border-white/20 p-3">kb, Mb, Gb</td><td class="border border-white/20 p-3">kB (or KB), MB, GB, TB</td></tr>
  </tbody>
</table>

<h2>Are Bits or Bytes Bigger?</h2>
<p>A byte is bigger. At every level, a byte unit is 8 times larger than the matching bit unit.</p>

<table class="w-full border-collapse">
  <thead>
    <tr><th class="border border-white/20 p-3 text-left">Unit</th><th class="border border-white/20 p-3 text-left">Size in Bytes</th><th class="border border-white/20 p-3 text-left">Size in Bits</th></tr>
  </thead>
  <tbody>
    <tr><td class="border border-white/20 p-3">1 byte</td><td class="border border-white/20 p-3">1</td><td class="border border-white/20 p-3">8</td></tr>
    <tr><td class="border border-white/20 p-3">1 kilobyte (kB)</td><td class="border border-white/20 p-3">1,000</td><td class="border border-white/20 p-3">8,000</td></tr>
    <tr><td class="border border-white/20 p-3">1 megabyte (MB)</td><td class="border border-white/20 p-3">1,000,000</td><td class="border border-white/20 p-3">8,000,000</td></tr>
    <tr><td class="border border-white/20 p-3">1 gigabyte (GB)</td><td class="border border-white/20 p-3">1,000,000,000</td><td class="border border-white/20 p-3">8,000,000,000</td></tr>
    <tr><td class="border border-white/20 p-3">1 terabyte (TB)</td><td class="border border-white/20 p-3">1,000,000,000,000</td><td class="border border-white/20 p-3">8,000,000,000,000</td></tr>
  </tbody>
</table>

<p>For bits, the same prefixes apply: 1 megabit (Mb) is 1,000,000 bits, and 1 gigabit (Gb) is 1,000,000,000 bits. So 1 MB equals 8 Mb.</p>

<h2>Why Internet Speed Uses Bits</h2>


<figure><img src="/blog-images/how-to-convert-bits-and-bytes.webp" alt="how-to-convert-bits-and-bytes?" class="w-full rounded-xl"></figure>
<p>Networks have long measured line speed in bits per second, because data travels as a stream of bits over cables, radio, or fiber. File sizes use bytes because they count the amount of data that is stored.</p>

<p>This means the two numbers describe different things: how fast data moves, and how much data there is. It also means the speed number is eight times larger than the same speed in bytes. For example, 500 Mbps is the same as 62.5 MB/s.</p>

<h2>How to Convert Bits and Bytes</h2>
<ul>
  <li>Bits to bytes: divide by 8.</li>
  <li>Bytes to bits: multiply by 8.</li>
</ul>
<p>Example: a 100 Mbps connection is 100 ÷ 8 = 12.5 MB/s.</p>

<table class="w-full border-collapse">
  <thead>
    <tr><th class="border border-white/20 p-3 text-left">Advertised Speed</th><th class="border border-white/20 p-3 text-left">Maximum Transfer Rate</th></tr>
  </thead>
  <tbody>
    <tr><td class="border border-white/20 p-3">25 Mbps</td><td class="border border-white/20 p-3">3.125 MB/s</td></tr>
    <tr><td class="border border-white/20 p-3">100 Mbps</td><td class="border border-white/20 p-3">12.5 MB/s</td></tr>
    <tr><td class="border border-white/20 p-3">500 Mbps</td><td class="border border-white/20 p-3">62.5 MB/s</td></tr>
    <tr><td class="border border-white/20 p-3">1,000 Mbps (1 Gbps)</td><td class="border border-white/20 p-3">125 MB/s</td></tr>
  </tbody>
</table>

<p>These are theoretical maximums. Real downloads are usually a little lower because of network overhead, Wi-Fi, and the speed of the server you download from.</p>

<h2>Download Time Examples</h2>
<p>Small file: a 10 MB file on a 10 Mbps connection is 10 × 8 = 80 megabits, so it takes 80 ÷ 10 = 8 seconds, not 1 second.</p>

<p>Download manager: on a 3 Mbps connection, your download manager may show about 375 kB/s. That is not slow. 3 Mbps = 3,000 kilobits per second ÷ 8 = 375 kB/s, which is the connection running at full speed.</p>

<h3>A 50 GB game download (ideal times):</h3>
<table class="w-full border-collapse">
  <thead>
    <tr><th class="border border-white/20 p-3 text-left">Connection</th><th class="border border-white/20 p-3 text-left">Download Time</th></tr>
  </thead>
  <tbody>
    <tr><td class="border border-white/20 p-3">25 Mbps</td><td class="border border-white/20 p-3">About 4 hr 27 min</td></tr>
    <tr><td class="border border-white/20 p-3">100 Mbps</td><td class="border border-white/20 p-3">About 1 hr 7 min</td></tr>
    <tr><td class="border border-white/20 p-3">500 Mbps</td><td class="border border-white/20 p-3">About 13 min 20 s</td></tr>
    <tr><td class="border border-white/20 p-3">1,000 Mbps</td><td class="border border-white/20 p-3">About 6 min 40 s</td></tr>
  </tbody>
</table>

<p>The formula is: time in seconds = file size in MB × 8 ÷ speed in Mbps. To try your own file size and speed, use our <a href="https://perfcalcpro.com/tools/download-time-calculator">Download Time Calculator</a>.</p>

<h2>Reading the Symbols: b, B, k, K, and "Per Second"</h2>
<ul>
  <li>Lowercase b is bits. Uppercase B is bytes.</li>
  <li>Mb is megabits and MB is megabytes. GB is gigabits and GB is gigabytes.</li>
  <li>Mbps and Mb/s mean megabits per second. MB/s means megabytes per second.</li>
  <li>Kilobit is kb. Kilobyte is officially kB, though many people write KB.</li>
</ul>
<p>People often say "megs" or "gigs" without saying whether they mean bits or bytes, which causes a lot of confusion. When the letter is uppercase B, it is bytes.</p>

<h2>Decimal vs Binary: Why Your Drive Shows Less Space</h2>
<p>There are two ways to count "kilo," "mega," and "giga":</p>
<ul>
  <li>Decimal (SI): 1 kB = 1,000 bytes, 1 MB = 1,000,000 bytes, 1 GB = 1,000,000,000 bytes. Drive makers and internet plans use this.</li>
  <li>Binary (IEC): 1 KiB = 1,024 bytes, 1 MiB = 1,048,576 bytes, 1 GiB = 1,073,741,824 bytes. Computers use this internally.</li>
</ul>
<p>A GiB is about 7.4% larger than a GB. Windows counts in binary but labels the result "GB," so a drive sold in decimal looks smaller. macOS shows decimal sizes, so the same drive shows its advertised size there.</p>

<table class="w-full border-collapse">
  <thead>
    <tr><th class="border border-white/20 p-3 text-left">Drive Sold As</th><th class="border border-white/20 p-3 text-left">Shown in Windows (approx.)</th></tr>
  </thead>
  <tbody>
    <tr><td class="border border-white/20 p-3">256 GB</td><td class="border border-white/20 p-3">238.4 GB</td></tr>
    <tr><td class="border border-white/20 p-3">512 GB</td><td class="border border-white/20 p-3">476.8 GB</td></tr>
    <tr><td class="border border-white/20 p-3">1 TB</td><td class="border border-white/20 p-3">931.3 GB</td></tr>
    <tr><td class="border border-white/20 p-3">2 TB</td><td class="border border-white/20 p-3">1,862.6 GB</td></tr>
  </tbody>
</table>

<p>Nothing is missing. Both numbers are correct, they just use different counting systems.</p>

<h2>Bits and Bytes in Everyday Tech</h2>
<ul>
  <li>Colour: a 24-bit colour pixel uses 3 bytes (one each for red, green, and blue), which gives 2²⁴ = 16,777,216 possible colours.</li>
  <li>Image size: an uncompressed 1920 × 1080 image at 3 bytes per pixel is 1920 × 1080 × 3 = 6,220,800 bytes, about 6.2 MB. Formats like JPEG compress this a lot.</li>
  <li>Text: the word "Hello" is 5 bytes in ASCII or UTF-8.</li>
  <li>64-bit processors: "64-bit" describes the size of the values a processor works with at once, and how much memory it can address. It is not a measure of bytes per second.</li>
  <li>Nibble: 4 bits, or half a byte.</li>
  <li>Octet: a term in networking standards for exactly 8 bits.</li>
</ul>

<h2>Frequently Asked Questions</h2>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Is Mb the same as MB?</h3>
<p>No. Mb is megabits and MB is megabytes. 1 MB equals 8 Mb.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Is a gigabit the same as a gigabyte?</h3>
<p>No. A gigabyte is 8 times larger than a gigabit.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>How do I convert Mbps to MB/s?</h3>
<p>Divide by 8. For example, 200 Mbps is 25 MB/s.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Why is a byte 8 bits?</h3>
<p>Early computers used different byte sizes, but 8 bits became the standard, and modern systems are built around it.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>How many bytes is a character?</h3>
<p>A basic English letter takes 1 byte in UTF-8. Other characters can take 2 to 4 bytes.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Do I need to convert when I read a speed test?</h3>
<p>Speed tests usually show Mbps. Your download manager usually shows MB/s. Divide the speed test number by 8 to compare them.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Is my real download speed lower than my plan?</h3>
<p>It is often a little lower. Wi-Fi, other devices, the server you download from, and network overhead all reduce it. If it is much lower, see <a href="https://perfcalcpro.com/blog/why-is-my-pc-so-laggy">Why Is My PC So Laggy?</a> and <a href="https://perfcalcpro.com/blog/what-internet-speed-do-i-need-to-work-from-home">What Internet Speed Do I Need to Work From Home?</a>.</p>
</div>

<div class="faq-item rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
<h3>Why does my "1 TB" drive show 931 GB?</h3>
<p>The drive is sold in decimal terabytes, and Windows shows sizes counted in binary units. Both numbers describe the same space.</p>
</div>

<h2>Conclusion</h2>
<p>A byte holds 8 bits, and that factor of 8 is the whole story behind most download confusion. Look at the letter: lowercase b for speed, uppercase B for file size. Divide by 8 to compare them, and remember that real transfers run a bit below the maximum.</p>

`;