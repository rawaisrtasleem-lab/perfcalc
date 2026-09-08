import CopyResultButton from "./CopyResultButton";

export default function AspectRatioResults({
    result,
    previewUrl,
    fileName,
}) {
    if (!result) {
        return (
            <div className="flex min-h-[420px] items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <div className="max-w-sm text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            className="h-7 w-7"
                            aria-hidden="true"
                        >
                            <rect
                                x="4"
                                y="6"
                                width="16"
                                height="12"
                                rx="2"
                            />
                            <path
                                strokeLinecap="round"
                                d="M8 10h8M8 14h5"
                            />
                        </svg>
                    </div>

                    <h3 className="font-semibold text-slate-200">
                        Your result will appear here
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        Enter both dimensions or upload an image to calculate its
                        exact aspect ratio.
                    </p>
                </div>
            </div>
        );
    }

    const exactRatio = `${result.simplified.width}:${result.simplified.height}`;
    const dimensions = `${result.width} × ${result.height}`;
    const decimal = result.decimal.toFixed(4);

    const copyText = `${dimensions} px | Aspect Ratio: ${exactRatio} | Decimal: ${decimal} | Orientation: ${result.orientation} | Closest Standard Ratio: ${result.closest?.label || "N/A"}`;

    return (
        <div className="space-y-4">
            {/* Primary result */}
            <div className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-indigo-500/10 p-5 sm:p-6">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-400">
                        Aspect Ratio
                    </p>

                    <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                {exactRatio}
                            </p>

                            <p className="mt-2 text-sm text-slate-400">
                                {dimensions} pixels
                            </p>
                        </div>

                        <CopyResultButton text={copyText} />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
                <ResultCard
                    label="Decimal Ratio"
                    value={decimal}
                />

                <ResultCard
                    label="Orientation"
                    value={result.orientation}
                />

                <ResultCard
                    label="Closest Standard"
                    value={result.closest?.label || "—"}
                />

                <ResultCard
                    label="Format"
                    value={result.closest?.name || "Custom"}
                />
            </div>

            {/* Visualizer */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                        <h3 className="text-sm font-semibold text-slate-200">
                            Aspect Ratio Visualizer
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                            A proportional preview of your frame shape.
                        </p>
                    </div>
                </div>

                <div className="flex min-h-[170px] items-center justify-center rounded-lg border border-slate-800 bg-slate-950/80 p-4">
                    <div
                        className="relative flex max-h-[220px] max-w-full items-center justify-center overflow-hidden rounded-lg border border-cyan-500/30 bg-cyan-500/5"
                        style={{
                            aspectRatio: `${result.width} / ${result.height}`,
                            width:
                                result.width >= result.height
                                    ? "100%"
                                    : "min(55%, 190px)",
                            maxWidth: "100%",
                        }}
                    >
                        {previewUrl ? (
                            <img
                                src={previewUrl}
                                alt={
                                    fileName
                                        ? `Aspect ratio preview for ${fileName}`
                                        : "Aspect ratio preview"
                                }
                                className="h-full w-full object-contain"
                            />
                        ) : (
                            <span className="px-4 text-center text-sm font-semibold text-cyan-300">
                                {exactRatio}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Smart Tip */}
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4">
                <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 18h6M10 22h4M8.5 14.5A6 6 0 1115.5 14.5c-.8.7-1.5 1.5-1.5 2.5h-4c0-1-.7-1.8-1.5-2.5z"
                            />
                        </svg>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-indigo-200">
                            Smart Tip
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-slate-400">
                            {result.smartTip}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ResultCard({ label, value }) {
    return (
        <div className="min-w-0 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 sm:p-4">
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                {label}
            </p>

            <p className="mt-1.5 truncate text-sm font-semibold text-slate-200 sm:text-base">
                {value}
            </p>
        </div>
    );
}