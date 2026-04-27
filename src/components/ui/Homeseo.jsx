"use client";


import Link from "next/link";



export default function Homeseo() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12 text-gray-100">
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center sm:text-left">
        GameTools – Optimize Your PC & Gaming Performance
      </h1>

      <p className="text-gray-400 leading-relaxed">
        GameTools brings together a suite of professional calculators designed for competitive gamers and PC enthusiasts. 
        Whether you want to measure FPS stability, calculate DPS efficiency, track XP progress, or detect CPU/GPU bottlenecks, 
        our tools help you achieve smoother gameplay, smarter upgrades, and balanced system performance. 
        Built for accuracy and speed, GameTools ensures your PC runs at peak efficiency across gaming, streaming, and productivity tasks.
      </p>

      {/* FPS Calculator */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">FPS Calculator – Measure Frame Rates Instantly</h2>
        <p className="text-gray-400 leading-relaxed">
          The FPS Calculator helps you estimate frame rates across different resolutions and game settings. 
          By analyzing CPU and GPU workloads, it detects FPS drops, frame time instability, and performance bottlenecks. 
          Use it to fine‑tune graphics settings, balance system resources, and enjoy smoother gameplay without stuttering.
        </p>
      </div>

      {/* DPS Calculator */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">DPS Calculator – Maximize Combat Efficiency</h2>
        <p className="text-gray-400 leading-relaxed">
          The DPS Calculator measures your damage per second in RPGs and MMOs. 
          It helps you optimize builds, weapons, and skill rotations for maximum combat output. 
          By understanding your DPS performance, you can plan strategies better, dominate battles, and improve overall gaming efficiency.
        </p>
      </div>

      {/* XP Calculator */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">XP Calculator – Track Leveling Progress</h2>
        <p className="text-gray-400 leading-relaxed">
          The XP Calculator makes grinding smarter by tracking experience points and leveling progress. 
          It shows how much XP you need to reach the next level, helping you plan sessions efficiently. 
          Whether you’re playing RPGs or competitive games, this tool ensures you hit milestones faster with less wasted effort.
        </p>
      </div>

      {/* Bottleneck Calculator */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bottleneck Calculator – Balance CPU & GPU Performance</h2>
        <p className="text-gray-400 leading-relaxed">
          The Bottleneck Calculator detects mismatches between CPU and GPU performance. 
          It identifies whether your processor or graphics card is limiting system speed, 
          and provides upgrade recommendations to restore balance. 
          By spotting bottlenecks early, you can prevent FPS drops, optimize builds, and ensure smoother gaming and multitasking performance.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-lg md:text-xl font-semibold text-gray-200 mb-6">
          Unlock Your PC’s Full Potential
        </p>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Explore all GameTools calculators today. From FPS and DPS analysis to XP tracking and bottleneck detection, 
          our tools give you the insights you need for smarter upgrades and smoother gameplay.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-colors">
          🚀<Link href="/tools/bottleneck-calculator" className="text-black font-bold">
            Explore GameTools Now
          </Link>
        </button>
      </div>
    </section>
  )
}
