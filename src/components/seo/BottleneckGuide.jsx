"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Target, AlertCircle, TrendingUp, Cpu, Gpu } from "lucide-react"

export default function BottleneckGuide() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="w-full py-12 md:py-16 space-y-8">
      {/* Introduction Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
            <BookOpen size={24} className="text-cyan-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Understanding Bottlenecking
          </h2>
        </div>

        <div className="space-y-4 text-sm md:text-base text-gray-300">
          <p>
            Bottlenecking is a critical concept in PC gaming that directly impacts your frame rates and gaming
            experience. Whether you're building a new gaming PC or upgrading your current system, understanding
            bottleneck dynamics helps you make smarter hardware investment decisions.
          </p>
          <p>
            A bottleneck occurs when one component in your system can't keep up with another, causing a performance
            limitation. In gaming PCs, this typically manifests as either a CPU bottleneck (processor can't feed
            enough data to the GPU) or a GPU bottleneck (graphics card can't render frames fast enough for the CPU).
          </p>
          <p className="text-cyan-300 font-semibold">
            Our bottleneck calculator uses advanced algorithms based on real-world benchmark data and thermal
            characteristics to provide accurate assessments for 2024-2026 gaming hardware.
          </p>
        </div>
      </motion.div>

      {/* CPU Bottleneck Guide */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-xl border border-orange-500/30 rounded-lg p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
            <Cpu size={24} className="text-orange-400" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">CPU Bottleneck Explained</h3>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-base md:text-lg font-semibold text-orange-300 mb-2">What Causes It?</h4>
            <p className="text-sm md:text-base text-gray-300">
              A CPU bottleneck occurs when your processor lacks sufficient processing power to handle the data required
              by your GPU. This typically happens when you pair a high-end graphics card with an older or lower-tier
              processor. The GPU remains underutilized as it waits for the CPU to prepare frame data.
            </p>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold text-orange-300 mb-2">Signs of CPU Bottleneck</h4>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li className="flex gap-2">
                <span className="text-orange-400">✓</span>
                <span>GPU utilization consistently below 90% during gaming</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-400">✓</span>
                <span>CPU usage near or at 100% while GPU usage is lower</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-400">✓</span>
                <span>Frame rates lower than expected for your GPU</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-400">✓</span>
                <span>Stuttering or inconsistent frame delivery</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold text-orange-300 mb-2">Solutions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-orange-900/20 p-3 rounded border border-orange-500/20">
                <p className="text-sm font-semibold text-orange-300 mb-1">Hardware Fix</p>
                <p className="text-xs text-gray-300">Upgrade to a faster, newer processor with better single-thread
                  performance</p>
              </div>
              <div className="bg-orange-900/20 p-3 rounded border border-orange-500/20">
                <p className="text-sm font-semibold text-orange-300 mb-1">Software Optimization</p>
                <p className="text-xs text-gray-300">Lower GPU resolution, reduce graphical settings, enable frame rate caps</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* GPU Bottleneck Guide */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl border border-purple-500/30 rounded-lg p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg">
            <Gpu size={24} className="text-purple-400" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">GPU Bottleneck Explained</h3>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-base md:text-lg font-semibold text-purple-300 mb-2">What Causes It?</h4>
            <p className="text-sm md:text-base text-gray-300">
              A GPU bottleneck occurs when your graphics card can't render frames quickly enough to match your
              processor's capabilities. This typically happens when you pair a powerful CPU with an older or
              budget-friendly GPU. Your processor sits mostly idle while waiting for frame completion.
            </p>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold text-purple-300 mb-2">Signs of GPU Bottleneck</h4>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li className="flex gap-2">
                <span className="text-purple-400">✓</span>
                <span>CPU utilization significantly below 100% during gaming</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">✓</span>
                <span>GPU at or near 100% utilization with lower CPU usage</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">✓</span>
                <span>Frame rates limited despite sufficient CPU power</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">✓</span>
                <span>Better FPS when lowering resolution or graphical settings</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold text-purple-300 mb-2">Solutions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-purple-900/20 p-3 rounded border border-purple-500/20">
                <p className="text-sm font-semibold text-purple-300 mb-1">Hardware Fix</p>
                <p className="text-xs text-gray-300">Upgrade to a more powerful graphics card with better performance</p>
              </div>
              <div className="bg-purple-900/20 p-3 rounded border border-purple-500/20">
                <p className="text-sm font-semibold text-purple-300 mb-1">Quick Fixes</p>
                <p className="text-xs text-gray-300">Enable DLSS/FSR upscaling, lower resolution to 1440p or 1080p</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Best Practices */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg">
            <Target size={24} className="text-green-400" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">Building a Balanced System</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-base md:text-lg font-semibold text-green-300 mb-4">Benchmark Ratio Guidelines</h4>
            <div className="space-y-3">
              <div className="bg-green-900/20 p-3 rounded border-l-2 border-green-500">
                <p className="text-xs font-semibold text-green-300 mb-1">1080p High Settings</p>
                <p className="text-sm text-gray-300">CPU:GPU ratio should be 0.7-0.9 (CPU ~70-90% of GPU power)</p>
              </div>
              <div className="bg-yellow-900/20 p-3 rounded border-l-2 border-yellow-500">
                <p className="text-xs font-semibold text-yellow-300 mb-1">1440p Ultra Settings</p>
                <p className="text-sm text-gray-300">CPU:GPU ratio should be 0.8-1.0 (CPU ~80-100% of GPU power)</p>
              </div>
              <div className="bg-red-900/20 p-3 rounded border-l-2 border-red-500">
                <p className="text-xs font-semibold text-red-300 mb-1">4K Gaming</p>
                <p className="text-sm text-gray-300">CPU:GPU ratio should be 1.0+ (CPU performance less critical)</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold text-green-300 mb-4">Platform-Specific Recommendations</h4>
            <div className="space-y-3">
              <div className="bg-slate-700/40 p-3 rounded">
                <p className="text-sm font-semibold text-cyan-300 mb-1">Budget Build (&lt;$800)</p>
                <p className="text-xs text-gray-300">Look for CPU around $250-300 and GPU around $400-500</p>
              </div>
              <div className="bg-slate-700/40 p-3 rounded">
                <p className="text-sm font-semibold text-cyan-300 mb-1">Mid-Range Build ($800-1500)</p>
                <p className="text-xs text-gray-300">Allocate ~40% to GPU, ~25% to CPU, remaining for storage/PSU</p>
              </div>
              <div className="bg-slate-700/40 p-3 rounded">
                <p className="text-sm font-semibold text-cyan-300 mb-1">High-End Build (&gt;$2000)</p>
                <p className="text-xs text-gray-300">More balanced allocation; high-end CPUs and GPUs work together</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Common Scenarios */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg">
            <TrendingUp size={24} className="text-yellow-400" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">2024-2026 Popular Gaming Combos</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: "1080p Competitive Gaming",
              cpu: "Ryzen 5 7600 / i5-14400F",
              gpu: "RTX 4070 / RX 7800 XT",
              bottleneck: "15-20%",
              fpsRange: "144-165 FPS",
              budget: "$1200-1400",
            },
            {
              name: "1440p High Refresh",
              cpu: "Ryzen 7 7700X / i7-14700K",
              gpu: "RTX 4080 / RX 7800 XT",
              bottleneck: "10-15%",
              fpsRange: "100-144 FPS",
              budget: "$1800-2200",
            },
            {
              name: "4K Gaming Experience",
              cpu: "Ryzen 7 7700X / i7-14700K",
              gpu: "RTX 4090 / RX 7900 XT",
              bottleneck: "5-12%",
              fpsRange: "60-100 FPS",
              budget: "$2500-3500",
            },
            {
              name: "Budget Gaming",
              cpu: "Ryzen 5 5500 / i3-14100F",
              gpu: "RTX 4060 / RX 6600 XT",
              bottleneck: "12-18%",
              fpsRange: "60-90 FPS@1080p",
              budget: "$600-800",
            },
          ].map((combo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-700/30 p-4 rounded border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
            >
              <h4 className="text-base font-semibold text-cyan-300 mb-3">{combo.name}</h4>
              <div className="space-y-2 text-xs md:text-sm">
                <div>
                  <p className="text-gray-400">CPU</p>
                  <p className="text-white font-semibold">{combo.cpu}</p>
                </div>
                <div>
                  <p className="text-gray-400">GPU</p>
                  <p className="text-white font-semibold">{combo.gpu}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs mt-3 pt-3 border-t border-slate-600/50">
                  <div>
                    <p className="text-gray-400">Bottleneck</p>
                    <p className="text-green-300 font-semibold">{combo.bottleneck}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">FPS Est.</p>
                    <p className="text-blue-300 font-semibold">{combo.fpsRange}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Budget</p>
                    <p className="text-yellow-300 font-semibold">{combo.budget}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pro Tips */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
            <AlertCircle size={24} className="text-cyan-400" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">Pro Tips for Optimal Performance</h3>
        </div>

        <div className="space-y-3">
          {[
            "Update your drivers regularly—new driver releases often improve performance by 5-15% through optimization",
            "Monitor temperatures during gameplay; thermal throttling can artificially create bottlenecks",
            "Enable XMP/DOCP in BIOS for RAM—faster memory helps CPU performance, especially with Ryzen",
            "Consider resolution-native settings; 1080p high settings vs 4K low settings affect bottleneck impact",
            "Use DLSS 3 / FSR 3 technology to reduce GPU load and minimize GPU bottleneck effects",
            "Check game-specific optimization; some games are more CPU-heavy (strategy) vs GPU-heavy (shooters)",
            "Don't obsess over bottleneck percentage alone—real-world FPS matters more than the number",
          ].map((tip, index) => (
            <div
              key={index}
              className="flex gap-3 p-3 bg-slate-700/20 rounded border border-cyan-500/20 hover:bg-slate-700/40 transition-colors"
            >
              <span className="flex-shrink-0 text-cyan-400 font-semibold">{index + 1}.</span>
              <p className="text-sm md:text-base text-gray-300">{tip}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
