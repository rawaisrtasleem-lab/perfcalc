"use client";

import { Settings } from "lucide-react";
import Select from "@/components/ui/Select";
import games from "@/data/games";
import { calculateFPS } from "@/lib/fpsCalculation";
import { motion } from "framer-motion";

export default function GameSettings({ setResult }) {
  function handleCalculate() {
    const fps = calculateFPS();
    setResult(fps);
  }

  const selectClasses =
    "w-full rounded-lg bg-slate-800/60 text-slate-100 border border-slate-700 " +
    "focus:ring-2 focus:ring-green-500 focus:border-green-500 " +
    "placeholder-slate-400 text-xs sm:text-sm " +
    "py-2 sm:py-2 px-3 sm:px-3 " +
    "transition-all duration-200 " +
    "hover:border-slate-600 hover:bg-slate-800/80";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-xl p-4 sm:p-5 space-y-3 sm:space-y-4 hover:border-green-500/20 transition-all"
    >
      {/* Heading */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="p-1.5 sm:p-2 rounded-lg bg-green-500/10 border border-green-500/30">
          <Settings size={16} className="text-green-400" />
        </div>
        <h3 className="text-xs sm:text-sm md:text-base font-bold text-white">
          Game Settings
        </h3>
      </div>

      {/* Game Selection */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <label className="block text-xs font-semibold text-gray-300 mb-0.5">
          Select Game
        </label>
        <Select
          placeholder="Choose a game..."
          options={games.map(game => ({
            label: game.label,
            value: game.value,
          }))}
          className={selectClasses}
        />
      </motion.div>

      {/* Resolution */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <label className="block text-xs font-semibold text-gray-300 mb-0.5">
          Resolution
        </label>
        <Select
          placeholder="Pick resolution..."
          options={[
            { label: "1080p (FHD) - Balanced", value: "1080p" },
            { label: "1440p (QHD) - High Quality", value: "1440p" },
            { label: "4K (Ultra) - Maximum Quality", value: "4k" },
          ]}
          className={selectClasses}
        />
      </motion.div>

      {/* RAM */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <label className="block text-xs font-semibold text-gray-300 mb-0.5">
          RAM Amount
        </label>
        <Select
          placeholder="Select RAM..."
          options={[
            { label: "8GB", value: "8gb" },
            { label: "16GB (Recommended)", value: "16gb" },
            { label: "32GB", value: "32gb" },
          ]}
          className={selectClasses}
        />
      </motion.div>

      {/* Storage */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        <label className="block text-xs font-semibold text-gray-300 mb-0.5">
          Storage Type
        </label>
        <Select
          placeholder="Pick storage..."
          options={[
            { label: "NVMe SSD (Fastest)", value: "nvme" },
            { label: "SATA SSD (Fast)", value: "sata" },
            { label: "HDD (Standard)", value: "hdd" },
          ]}
          className={selectClasses}
        />
      </motion.div>

      {/* Calculate Button - Mobile Optimized */}
      <motion.button
        onClick={handleCalculate}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 
                   active:from-indigo-700 active:to-indigo-600
                   transition-all duration-200 rounded-lg py-2.5 sm:py-3 font-bold text-white 
                   text-xs sm:text-sm md:text-base
                   shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50
                   border border-indigo-400/30 hover:border-indigo-300/50
                   flex items-center justify-center gap-2
                   min-h-10 sm:min-h-12 mt-1"
      >
        <span>⚡ Calculate FPS Now</span>
      </motion.button>

      {/* Info Text */}
      <p className="text-xs text-center text-gray-500 px-2">
        Results are estimates based on average benchmark data
      </p>
    </motion.div>
  );
}