"use client";

import { motion } from "framer-motion";
import { Zap, CheckCircle, AlertCircle } from "lucide-react";

export default function FPSResult({ result }) {
  // Determine performance tier
  const getPerformanceTier = (fps) => {
    if (fps >= 144) return { label: "Ultra (144+)", color: "text-green-400", bg: "bg-green-500/10" };
    if (fps >= 100) return { label: "Very High (100+)", color: "text-cyan-400", bg: "bg-cyan-500/10" };
    if (fps >= 60) return { label: "High (60+)", color: "text-blue-400", bg: "bg-blue-500/10" };
    if (fps >= 30) return { label: "Playable (30+)", color: "text-yellow-400", bg: "bg-yellow-500/10" };
    return { label: "Low (<30)", color: "text-red-400", bg: "bg-red-500/10" };
  };

  const tier = result ? getPerformanceTier(result) : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-xl p-5 sm:p-8 text-center hover:border-indigo-500/30 transition-all"
    >
      {/* Icon Container */}
      <motion.div
        animate={result ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 2, repeat: result ? Infinity : 0 }}
        className="mb-4 sm:mb-6"
      >
        <Zap
          className="mx-auto text-indigo-400 w-8 h-8 sm:w-12 sm:h-12"
          aria-hidden="true"
        />
      </motion.div>

      {/* Heading */}
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-6 sm:mb-8 text-white">
        {result ? "Your Estimated Performance" : "Ready to Calculate"}
      </h2>

      {/* Result Display */}
      {result ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-4 sm:space-y-6"
        >
          {/* FPS Number */}
          <div className="relative">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full"
            />
            <div className="relative text-4xl sm:text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              {result}
            </div>
            <p className="text-xs sm:text-sm text-indigo-300 font-semibold tracking-wider uppercase mt-2">
              Frames Per Second
            </p>
          </div>

          {/* Performance Tier Badge */}
          {tier && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className={`inline-block mx-auto px-4 sm:px-6 py-2 rounded-lg ${tier.bg} border border-current/30`}
            >
              <p className={`text-xs sm:text-sm font-bold ${tier.color}`}>
                {tier.label}
              </p>
            </motion.div>
          )}

          {/* Recommendation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 bg-slate-900/50 px-4 py-3 rounded-lg border border-slate-700/50"
          >
            {result >= 60 ? (
              <>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span>Great for smooth gaming!</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                <span>Consider optimizing settings</span>
              </>
            )}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-3 sm:space-y-4"
        >
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Select your CPU, GPU, and game settings above to get your estimated FPS.
          </p>
          <div className="flex justify-center gap-2 text-slate-500 text-xs">
            <span className="px-2 py-1 rounded bg-slate-800/50">CPU</span>
            <span>+</span>
            <span className="px-2 py-1 rounded bg-slate-800/50">GPU</span>
            <span>+</span>
            <span className="px-2 py-1 rounded bg-slate-800/50">Settings</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}