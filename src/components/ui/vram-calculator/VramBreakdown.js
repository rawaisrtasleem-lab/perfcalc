function formatGb(value) {
    return `${Number(value).toFixed(2)} GB`;
}

function formatAdjustment(value) {
    const number = Number(value);

    if (number > 0) {
        return `+${number.toFixed(1)} GB`;
    }

    if (number < 0) {
        return `${number.toFixed(1)} GB`;
    }

    return "0 GB";
}

export default function VramBreakdown({
    mode,
    result,
}) {
    const isLlm = mode === "llm";

    const llmItems = [
        {
            label: "Model Weights",
            value: formatGb(
                result.modelWeights
            ),
            description:
                "Memory used to store the model parameters.",
        },
        {
            label: "KV Cache",
            value: formatGb(result.kvCache),
            description:
                "Estimated memory used by the context window and batch.",
        },
        {
            label: "Runtime Overhead",
            value: formatGb(result.overhead),
            description: `${result.overheadPercent}% allowance for runtime buffers and framework memory.`,
        },
    ];

    const gamingItems = [
        {
            label: "Resolution Base",
            value: formatGb(
                result.baseVram
            ),
            description:
                "Base VRAM estimate for the selected resolution.",
        },
        {
            label: "Texture Quality",
            value: formatAdjustment(
                result.textureAdjustment
            ),
            description:
                "Adjustment based on texture quality.",
        },
        {
            label: "Ray Tracing",
            value: formatAdjustment(
                result.rayTracingAdjustment
            ),
            description:
                "Additional estimated memory for ray tracing.",
        },
        {
            label: "Mods",
            value: formatAdjustment(
                result.modAdjustment
            ),
            description:
                "Extra VRAM allowance for mods and texture packs.",
        },
    ];

    const items = isLlm
        ? llmItems
        : gamingItems;

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-6">
            <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Memory Breakdown
                </p>

                <h3 className="mt-1 text-lg font-semibold text-slate-100">
                    Where your VRAM goes
                </h3>
            </div>

            <div
                className={`grid gap-3 ${
                    items.length === 4
                        ? "sm:grid-cols-2"
                        : ""
                }`}
            >
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <p className="text-sm font-medium text-slate-300">
                                {item.label}
                            </p>

                            <span className="shrink-0 text-sm font-bold text-cyan-300">
                                {item.value}
                            </span>
                        </div>

                        <p className="mt-2 text-xs leading-relaxed text-slate-500">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {!isLlm && (
                <div className="mt-4 flex items-center justify-between rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-4 py-3">
                    <span className="text-sm text-slate-400">
                        Estimated game usage
                    </span>

                    <span className="font-semibold text-indigo-300">
                        {result.estimatedUsage.toFixed(
                            1
                        )}{" "}
                        GB
                    </span>
                </div>
            )}
        </div>
    );
}