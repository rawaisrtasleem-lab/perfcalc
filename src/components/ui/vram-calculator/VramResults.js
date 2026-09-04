import VramBreakdown from "./VramBreakdown";
import GpuCompatibility from "./GpuCompatibility";
import ExportResultButton from "./ExportResultButton";

export default function VramResults({
    mode,
    result,
    gpuCompatibility,
}) {
    const isLlm = mode === "llm";

    const requiredVram = isLlm
        ? result.totalVram
        : result.recommendedVram;

    const minimumGpu =
        gpuCompatibility.find(
            (gpu) => gpu.fits
        ) || null;

    const recommendedGpu =
        gpuCompatibility.find(
            (gpu) => gpu.status === "recommended"
        ) ||
        minimumGpu ||
        null;

    return (
        <div className="space-y-5">
            {/* Main result */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-indigo-500/10 p-5 sm:p-6">
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        {isLlm
                            ? "Estimated VRAM Required"
                            : "Recommended VRAM"}
                    </p>

                    <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-1">
                        <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            {requiredVram.toFixed(1)}
                        </span>

                        <span className="pb-1 text-lg font-semibold text-slate-400">
                            GB
                        </span>
                    </div>

                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
                        {isLlm
                            ? "Includes model weights, estimated KV cache, and runtime overhead."
                            : "Includes estimated game usage plus additional headroom for workload variation."}
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl border border-slate-700/70 bg-slate-950/50 p-4">
                            <p className="text-xs text-slate-500">
                                Minimum GPU tier
                            </p>

                            <p className="mt-1 font-semibold text-slate-200">
                                {minimumGpu
                                    ? minimumGpu.label
                                    : "Above listed tiers"}
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-700/70 bg-slate-950/50 p-4">
                            <p className="text-xs text-slate-500">
                                Comfortable target
                            </p>

                            <p className="mt-1 font-semibold text-cyan-300">
                                {recommendedGpu
                                    ? recommendedGpu.label
                                    : "High-memory setup"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Breakdown */}
            <VramBreakdown
                mode={mode}
                result={result}
            />

            {/* GPU fit */}
            <GpuCompatibility
                requiredVram={requiredVram}
                items={gpuCompatibility}
            />

            {/* Export */}
            <ExportResultButton
                mode={mode}
                result={result}
            />
        </div>
    );
}