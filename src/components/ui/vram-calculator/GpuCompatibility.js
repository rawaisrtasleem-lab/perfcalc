const STATUS_STYLES = {
    recommended: {
        label: "Recommended",
        className:
            "border-emerald-500/20 bg-emerald-500/5 text-emerald-300",
        dot: "bg-emerald-400",
    },

    fits: {
        label: "Fits",
        className:
            "border-amber-500/20 bg-amber-500/5 text-amber-300",
        dot: "bg-amber-400",
    },

    "not-enough": {
        label: "Not Enough",
        className:
            "border-slate-800 bg-slate-950/50 text-slate-500",
        dot: "bg-slate-600",
    },
};

export default function GpuCompatibility({
    requiredVram,
    items,
}) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-6">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        GPU Compatibility
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-slate-100">
                        Which VRAM tiers fit?
                    </h3>
                </div>

                <p className="text-xs text-slate-500">
                    Requirement:{" "}
                    <span className="font-semibold text-slate-300">
                        {Number(
                            requiredVram
                        ).toFixed(1)}{" "}
                        GB
                    </span>
                </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
                {items.map((gpu) => {
                    const style =
                        STATUS_STYLES[
                            gpu.status
                        ];

                    return (
                        <div
                            key={gpu.label}
                            className={`rounded-xl border p-3.5 transition ${style.className}`}
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2.5">
                                    <span
                                        className={`h-2 w-2 shrink-0 rounded-full ${style.dot}`}
                                    />

                                    <span className="font-semibold">
                                        {gpu.label}
                                    </span>
                                </div>

                                <span className="text-[11px] font-semibold uppercase tracking-wide">
                                    {style.label}
                                </span>
                            </div>

                            <p className="mt-2 truncate pl-[18px] text-xs opacity-70">
                                {gpu.examples.join(
                                    " • "
                                )}
                            </p>

                            {gpu.fits && (
                                <p className="mt-2 pl-[18px] text-xs opacity-70">
                                    {gpu.headroom >=
                                    0
                                        ? `${gpu.headroom.toFixed(
                                              1
                                          )} GB headroom`
                                        : ""}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>

            {!items.some(
                (gpu) => gpu.fits
            ) && (
                <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-amber-200/80">
                    This configuration exceeds the
                    listed VRAM tiers. Consider
                    quantization, a shorter context,
                    CPU offloading, or a multi-GPU /
                    high-memory setup.
                </div>
            )}

            <p className="mt-4 text-xs leading-relaxed text-slate-500">
                “Fits” means the estimated workload is
                within the card&apos;s capacity.
                “Recommended” includes additional
                headroom for a more comfortable setup.
            </p>
        </div>
    );
}