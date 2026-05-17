"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { TrendingUp, Zap, Crosshair, FileText } from "lucide-react"

export default function RelatedTools() {
  const tools = [
    {
      name: "FPS Calculator",
      description: "Predict your gaming performance and FPS",
      href: "/tools/fps-calculator",
      icon: TrendingUp,
      color: "from-cyan-500 to-blue-500",
      delay: 0,
    },
    {
      name: "DPS Calculator",
      description: "Calculate damage per second for optimized builds",
      href: "/tools/dps-calculator",
      icon: Zap,
      color: "from-violet-500 to-cyan-500",
      delay: 0.1,
    },
    {
      name: "Bottleneck Calculator",
      description: "Analyze CPU and GPU compatibility",
      href: "/tools/bottleneck-calculator",
      icon: Crosshair,
      color: "from-pink-500 to-rose-500",
      delay: 0.2,
    },
    {
      name: "XP Calculator",
      description: "Track your leveling progress",
      href: "/tools/xp-calculator",
      icon: FileText,
      color: "from-amber-500 to-orange-500",
      delay: 0.3,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-400/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
            Explore More Tools
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Discover our complete suite of gaming performance calculators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: tool.delay }}
              >
                <Link href={tool.href}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
                    transition={{ duration: 0.3 }}
                    className="h-full group relative p-6 rounded-xl border border-cyan-400/20 bg-[#0B0F19]/50 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${tool.color} transition-opacity duration-300`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-r ${tool.color} text-white`}
                        >
                          <Icon size={24} />
                        </div>
                        <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                          →
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-cyan-300 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {tool.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${tool.color} group-hover:w-full transition-all duration-300`}
                    ></div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
