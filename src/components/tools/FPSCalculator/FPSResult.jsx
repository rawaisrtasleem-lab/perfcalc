"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Gauge, Zap } from "lucide-react";

function getPerformanceTier(fps) {
  if (fps >= 144) return { label: "Ultra (144+ FPS)", color: "text-green-400", bg: "bg-green-500/10" };
  if (fps >= 100) return { label: "Very high (100+ FPS)", color: "text-cyan-400", bg: "bg-cyan-500/10" };
  if (fps >= 60) return { label: "High (60+ FPS)", color: "text-blue-400", bg: "bg-blue-500/10" };
  if (fps >= 30) return { label: "Playable (30+ FPS)", color: "text-yellow-400", bg: "bg-yellow-500/10" };
  return { label: "Low (under 30 FPS)", color: "text-red-400", bg: "bg-red-500/10" };
}

export default function FPSResult({ result }) {
  const tier = result ? getPerformanceTier(result.fps) : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-5 text-center transition-all hover:border-indigo-500/30 sm:p-8"
    >
      <div className="mb-4 sm:mb-6">
        <Zap className="mx-auto h-8 w-8 text-indigo-400 sm:h-12 sm:w-12" aria-hidden="true" />
      </div>

      <h2 className="mb-6 text-base font-bold text-white sm:mb-8 sm:text-lg md:text-xl">
        {result ? "Your estimated performance" : "Ready to calculate"}
      </h2>

      {result ? (
        <motion.div
          key={`${result.fps}-${result.game}-${result.cpu}-${result.gpu}`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="space-y-4 sm:space-y-6"
          aria-live="polite"
        >
          <div>
            <p className="text-4xl font-black text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text sm:text-5xl md:text-6xl">
              {result.fps.toLocaleString()}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-indigo-300 sm:text-sm">
              Estimated frames per second
            </p>
          </div>

          <div className={`inline-block rounded-lg border border-current/30 px-4 py-2 sm:px-6 ${tier.bg}`}>
            <p className={`text-xs font-bold sm:text-sm ${tier.color}`}>{tier.label}</p>
          </div>

          <div className="rounded-lg border border-slate-700/50 bg-slate-900/50 px-4 py-3 text-left">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
              <Gauge size={16} className="text-cyan-400" />
              {result.meetsRefreshRate
                ? `Meets your ${result.refreshRate} Hz target`
                : `Below your ${result.refreshRate} Hz target`}
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Likely limiter: <span className="font-semibold text-slate-200">{result.bottleneck}</span>
              {" · "}{result.game} at {result.resolution}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-lg border border-slate-700/50 bg-slate-900/50 px-4 py-3 text-xs text-gray-300 sm:text-sm">
            {result.meetsRefreshRate ? (
              <>
                <CheckCircle className="h-4 w-4 shrink-0 text-green-400 sm:h-5 sm:w-5" />
                <span>Estimate reaches your selected refresh-rate target.</span>
              </>
            ) : (
              <>
                <AlertCircle className="h-4 w-4 shrink-0 text-yellow-400 sm:h-5 sm:w-5" />
                <span>Try a lower resolution or graphics settings for more FPS.</span>
              </>
            )}
          </div>

          <p className="text-left text-xs leading-relaxed text-slate-500">
            Selected: {result.cpu} · {result.gpu}
          </p>
        </motion.div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          <p className="text-xs leading-relaxed text-slate-400 sm:text-sm md:text-base">
            Select your CPU, GPU, and game settings above to see an FPS estimate and refresh-rate check.
          </p>
          <div className="flex justify-center gap-2 text-xs text-slate-500">
            <span className="rounded bg-slate-800/50 px-2 py-1">CPU</span>
            <span>+</span>
            <span className="rounded bg-slate-800/50 px-2 py-1">GPU</span>
            <span>+</span>
            <span className="rounded bg-slate-800/50 px-2 py-1">Settings</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
