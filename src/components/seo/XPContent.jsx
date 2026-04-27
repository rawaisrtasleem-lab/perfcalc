// app/xp-calculator/page.jsx (Next.js 13+ with App Router)
"use client";

import { motion } from "framer-motion";
import { Calculator, Zap, Gauge } from "lucide-react";

export default function XPContentPage() {
  return (
    <div className="min-h-screen bg-slate-1000 text-white px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Free XP Calculator – Calculate Experience Points, Levels & Progress
        </h1>

        {/* Intro */}
        <h2 className="text-2xl font-bold">Calculate Your XP Instantly</h2>
        <p className="text-gray-300">
          Use this XP Calculator to quickly track your progress and level up faster.
          It helps you estimate how much experience points (XP) you need to reach your
          next level without doing manual calculations. If you also want to improve
          your system performance while gaming, try our{" "}
          <a href="/bottleneck-calculator" className="text-blue-400 underline">
            Bottleneck Calculator
          </a>{" "}
          to identify hardware limits.
        </p>

        {/* Tool Placeholder */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md mx-auto flex flex-col items-center"
        >
          <Calculator className="w-10 h-10 text-blue-400 mb-4" />
          <p className="text-gray-300 mb-4">👉 (PLACE YOUR TOOL HERE)</p>
        </motion.div>

        {/* How it Works */}
        <h2 className="text-2xl font-bold">How the XP Calculator Works</h2>
        <p className="text-gray-300">
          The XP Calculator is designed to give fast and accurate results based on
          simple inputs. You can enter your current XP, target XP, or XP per action.
          The tool instantly calculates how much progress you need.
        </p>
        <p className="text-gray-300">
          This removes guesswork and helps you plan your next move with clarity.
        </p>

        {/* Understanding XP */}
        <h2 className="text-2xl font-bold">Understanding XP Calculation</h2>
        <h3 className="text-xl font-semibold">How is XP calculated?</h3>
        <p className="text-gray-300">
          XP is calculated by adding the points you earn from different actions such
          as completing tasks, winning matches, or finishing missions. Each activity
          gives a specific amount of XP and your total grows over time.
        </p>
        <p className="text-gray-300">
          In many systems, better performance leads to higher XP rewards. For example,
          in combat-based games, damage output can affect your XP gain. You can
          estimate this using our{" "}
          <a href="/dps-calculator" className="text-blue-400 underline">
            DPS Calculator
          </a>.
        </p>

        <h3 className="text-xl font-semibold">How is the required XP determined?</h3>
        <p className="text-gray-300">
          The required XP depends on the level system being used. Most systems increase
          the XP requirement as your level goes up. This makes higher levels more
          challenging and keeps progression balanced.
        </p>
        <p className="text-gray-300">
          The calculator uses this pattern to estimate how much XP you need for your
          next goal.
        </p>

        {/* XP System */}
        <h2 className="text-2xl font-bold">XP System and Leveling Explained</h2>
        <h3 className="text-xl font-semibold">What does the leveling multiplier do?</h3>
        <p className="text-gray-300">
          A leveling multiplier increases the XP required for each new level. Instead
          of linear growth, the system becomes gradually harder. This ensures that
          reaching higher levels takes more effort and time.
        </p>

        <h3 className="text-xl font-semibold">Why is there a cooldown?</h3>
        <p className="text-gray-300">
          Cooldown is used to control how fast players can earn XP. It prevents users
          from gaining unlimited XP in a short time. This keeps the system fair and
          balanced.
        </p>
        <p className="text-gray-300">
          In gaming, performance during these limited windows matters a lot. If you
          want smoother gameplay during XP farming, you can check your performance
          using our{" "}
          <a href="/fps-calculator" className="text-blue-400 underline">
            FPS Calculator
          </a>.
        </p>
      </motion.div>
    </div>
  );
}
