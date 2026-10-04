"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Clock3, Gauge, Target, TrendingUp } from "lucide-react"

function formatTime(seconds) {
    if (seconds < 60) return `${seconds.toFixed(1)} seconds`
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.round(seconds % 60)
    return `${minutes}m ${remainingSeconds}s`
}

function ResultContent() {
    const params = useSearchParams()
    const burst = Number(params.get("burst") ?? params.get("dps"))
    const sustained = Number(params.get("sustained"))
    const ttkValue = params.get("ttk")
    const timeToKill = ttkValue === null || ttkValue === "" ? null : Number(ttkValue)
    const hasValidResult = Number.isFinite(burst) && burst > 0
    const hasSustained = Number.isFinite(sustained) && sustained > 0
    const hasValidTime = timeToKill !== null && Number.isFinite(timeToKill) && timeToKill >= 0

    return (
        <div className="min-h-screen bg-slate-950 px-4 py-12 text-white">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="mx-auto w-full max-w-xl space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center sm:p-10"
            >
                {hasValidResult ? (
                    <>
                        <TrendingUp className="mx-auto text-indigo-400" size={28} />
                        <h1 className="text-xl font-semibold text-slate-200">Your DPS results</h1>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
                                <Gauge className="mx-auto mb-2 text-cyan-400" size={20} />
                                <p className="text-sm text-slate-400">Burst DPS</p>
                                <p className="mt-1 text-3xl font-bold text-indigo-400">{burst.toFixed(2)}</p>
                            </div>
                            {hasSustained && (
                                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
                                    <TrendingUp className="mx-auto mb-2 text-green-400" size={20} />
                                    <p className="text-sm text-slate-400">Sustained DPS (with reloads)</p>
                                    <p className="mt-1 text-3xl font-bold text-green-400">{sustained.toFixed(2)}</p>
                                </div>
                            )}
                        </div>

                        {hasValidTime && (
                            <div className="flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950/50 p-4">
                                <Clock3 className="text-amber-400" size={20} />
                                <span className="text-slate-300">Estimated time to target:</span>
                                <strong>{formatTime(timeToKill)}</strong>
                            </div>
                        )}

                        <p className="text-left text-sm leading-relaxed text-slate-500">
                            DPS values use expected critical-hit damage. Sustained DPS averages magazine reloads across a full firing cycle.
                            Time to target is an estimate and can vary with hit accuracy and game mechanics.
                        </p>
                        <Link
                            href="/tools/dps-calculator"
                            className="inline-flex rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-indigo-500"
                        >
                            Calculate again
                        </Link>
                    </>
                ) : (
                    <>
                        <Target className="mx-auto text-amber-400" size={28} />
                        <h1 className="text-xl font-semibold">No valid DPS result found</h1>
                        <p className="text-slate-400">Return to the calculator and enter valid weapon stats to calculate your results.</p>
                    </>
                )}
            </motion.div>
        </div>
    )
}

export default function ResultPage() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen items-center justify-center bg-slate-950">
                <div className="text-gray-400">Loading results...</div>
            </div>
        }>
            <ResultContent />
        </Suspense>
    )
}
