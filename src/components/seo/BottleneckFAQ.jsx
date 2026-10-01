"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

export default function BottleneckFAQ() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const faqs = [
    {
      question: "What is GPU and CPU bottleneck?",
      answer:
        "A bottleneck occurs when one component significantly limits the performance of another. In gaming, a CPU bottleneck happens when your processor can't feed data to your GPU fast enough, causing underutilization. Conversely, a GPU bottleneck occurs when your graphics card can't render frames quickly enough, leaving your CPU idle. A balanced system minimizes both.",
    },
    {
      question: "What is a good bottleneck percentage?",
      answer:
        "Generally, bottleneck percentages below 10% are considered excellent, 10-20% very good, and 20-40% acceptable for gaming. Most modern gaming PCs have some degree of bottleneck. However, percentages above 60% indicate significant performance loss. The ideal bottleneck is 0%, but in practice, 5-15% is considered optimal for most gaming scenarios.",
    },
    {
      question: "Does bottleneck affect FPS significantly?",
      answer:
        "Yes, bottlenecking can impact FPS, but the effect depends on severity. Minor bottlenecks (10-20%) may result in 5-10% FPS loss. Moderate bottlenecks (40-60%) can reduce FPS by 20-30%. Severe bottlenecks (60%+) may cut FPS in half or more. Your gaming resolution and settings also influence how much bottleneck affects performance.",
    },
    {
      question: "Can I fix bottleneck by upgrading?",
      answer:
        "Yes, bottlenecking can be reduced through upgrades. If you have a CPU bottleneck, upgrading your processor helps. For GPU bottleneck, upgrading your graphics card is the solution. Additionally, optimizing game settings and drivers, reducing resolution, or lowering graphical quality can temporarily mitigate bottleneck effects without hardware changes.",
    },
    {
      question: "Which is worse: CPU or GPU bottleneck?",
      answer:
        "Neither is inherently worse, but they manifest differently. CPU bottleneck results in high GPU utilization with lower FPS. GPU bottleneck shows high CPU usage with lower FPS. Both limit your gaming performance equally at the same percentage. However, CPU bottlenecks are generally more expensive to fix since high-end CPUs are often pricier than GPUs.",
    },
    {
      question: "How do I check for bottleneck in real-time?",
      answer:
        "Use monitoring tools like MSI Afterburner, HWiNFO64, or in-game overlays (NVIDIA Overlay, AMD Radeon Software) to monitor CPU and GPU utilization during gaming. If CPU usage is consistently above 95% while GPU is below 80%, you have a CPU bottleneck. If the reverse is true, it's a GPU bottleneck.",
    },
    {
      question: "Is 30% bottleneck acceptable for gaming?",
      answer:
        "A 30% bottleneck falls into the 'good' category and is generally acceptable for casual gaming at 1440p or high settings at 1080p. However, for competitive gaming or 4K resolution, you'd want a bottleneck below 20%. The acceptability also depends on your target FPS—60 FPS is more forgiving than 144+ FPS.",
    },
    {
      question: "Does bottleneck affect streaming performance?",
      answer:
        "Yes, bottleneck significantly impacts streaming. When streaming games, your CPU needs to handle both game rendering and encoding stream data. A CPU bottleneck worsens streaming quality due to insufficient CPU resources. A high GPU bottleneck isn't directly harmful to streaming, but the resulting lower FPS affects stream quality.",
    },
    {
      question: "How often does bottleneck calculation change?",
      answer:
        "Bottleneck between specific hardware remains constant. However, new driver updates, BIOS firmware updates, and game optimization patches can affect real-world performance. Additionally, new hardware releases change the bottleneck equation for older components. We update our calculator regularly with the latest 2024-2026 processors and GPUs.",
    },
    {
      question: "What if I have more than 50% bottleneck?",
      answer:
        "A 50%+ bottleneck indicates significant hardware mismatch. You should consider upgrading one component to balance your system. Determine which component is limiting (check benchmark scores), then prioritize upgrading that component. In the meantime, reduce game settings or resolution to improve performance.",
    },
    {
      question: "What is a bottleneck in a computer system?",
      answer:
        "A bottleneck happens when one component (CPU, GPU, RAM, or storage) is much slower than the others and limits the performance of the whole system. For example, a fast GPU paired with a slow CPU can't reach its full potential because it isn't getting data quickly enough.",
    },
    {
      question: "Can my graphics card be a bottleneck?",
      answer:
        "Yes. If your GPU is weak compared to your CPU, frame rates are limited by the GPU. This is most common at high resolutions (1440p, 4K) and high graphics settings.",
    },
    {
      question: "Can the CPU be a bottleneck?",
      answer:
        "Yes. An older or low-end CPU can hold back a powerful GPU, especially at 1080p, in high-FPS gaming, and in CPU-heavy games (strategy, simulation, open world).",
    },
    {
      question: "How can I tell if my PC has a bottleneck?",
      answer:
        "Monitor usage while gaming with MSI Afterburner or Task Manager: GPU at 95-100% while CPU usage is lower suggests a GPU bottleneck; one or more CPU cores at 90-100% while GPU is below about 70% suggests a CPU bottleneck; RAM full or disk at 100% means memory or storage may be the cause.",
    },
    {
      question: "How does the Bottleneck Calculator work?",
      answer:
        "It typically compares the benchmark scores of your CPU and GPU, factors in resolution and workload type (gaming, video editing, etc.), and outputs a percentage showing how much one component is limiting the other.",
    },
    {
      question: "Are bottleneck calculators completely accurate?",
      answer:
        "No. They give estimates only. Real performance depends on the specific game, settings, cooling, RAM speed, and drivers. Treat results as a guide, not a final verdict.",
    },
    {
      question: "Does the Bottleneck Calculator consider the latest games?",
      answer:
        "Usually not fully. Most calculators rely on general benchmark data and don't account for every new game's demands. It depends on how often that particular tool updates its database.",
    },
    {
      question: "Can RAM or storage cause a bottleneck?",
      answer:
        "Yes. Too little RAM (such as 8GB for modern games) or single-channel RAM can cause stutter. Running games from a hard drive leads to slow loading and texture pop-in. An SSD makes a big difference.",
    },
    {
      question: "Do different games cause different bottlenecks?",
      answer:
        "Yes. Esports titles (Valorant, CS2) tend to lean on the CPU, while graphically demanding games (Cyberpunk, 4K titles) push the GPU harder.",
    },
    {
      question: "Are the results different for laptops and desktops?",
      answer:
        "Yes. Laptop CPUs and GPUs are limited by power and heat, so they often perform below desktop parts with similar names. This makes laptop results vary more.",
    },
    {
      question: "Why did my bottleneck result change compared to last month?",
      answer:
        "Likely reasons: the calculator updated its database or algorithm, new benchmark data was added, new hardware was added to the list, or you changed inputs like resolution, game, or drivers.",
    },
    {
      question: "What can I do if my PC has a bottleneck?",
      answer:
        "Upgrade the limiting component (CPU or GPU). Adjust resolution and graphics settings (lower resolution eases a GPU bottleneck; raising it can mask a CPU bottleneck). Use dual-channel RAM, an SSD, and up-to-date drivers. Improve cooling to avoid thermal throttling.",
    },
    {
      question: "Does overclocking help with bottlenecks?",
      answer:
        "A little. Overclocking the CPU or GPU can boost performance, but it won't fix a large gap between parts. It also increases heat and power draw and can cause stability issues, so good cooling is essential.",
    },
    {
      question: "Can software cause a bottleneck?",
      answer:
        "Yes. Outdated drivers, background apps, malware, a Power Saver power plan, and unoptimized games or Windows settings can all drag down performance even when the hardware is fine.",
    },
  ]

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index)
  }

  return (
    <section className="w-full py-8 md:py-12">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
            <HelpCircle size={24} className="text-purple-400" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Bottleneck Calculator FAQ
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              Common questions about CPU & GPU bottlenecking
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/40 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 md:p-5 bg-slate-700/20 hover:bg-slate-700/40 transition-colors text-left"
              >
                <h3 className="text-sm md:text-base font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-cyan-500/20 bg-slate-800/30"
                  >
                    <p className="p-4 md:p-5 text-sm md:text-base text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
