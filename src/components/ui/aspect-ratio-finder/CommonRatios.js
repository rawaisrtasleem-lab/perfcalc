export default function CommonRatios({
    ratios,
    selectedRatio,
    onSelect,
}) {
    return (
        <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-6">
            <div className="mb-4">
                <h2 className="text-base font-semibold text-white sm:text-lg">
                    Common Aspect Ratios
                </h2>

                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    Choose a preset to lock proportions. Changing either
                    dimension will automatically calculate the other.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
                {ratios.map((ratio) => {
                    const active =
                        selectedRatio?.label === ratio.label;

                    return (
                        <button
                            key={ratio.label}
                            type="button"
                            onClick={() => onSelect(ratio)}
                            className={`group rounded-xl border px-3 py-3 text-left transition ${
                                active
                                    ? "border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-950/20"
                                    : "border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900"
                            }`}
                        >
                            <div
                                className={`mb-2 flex h-9 items-center justify-center rounded-lg border ${
                                    active
                                        ? "border-cyan-500/30 bg-cyan-500/10"
                                        : "border-slate-700 bg-slate-950"
                                }`}
                            >
                                <div
                                    className={`max-h-6 max-w-10 rounded-sm border ${
                                        active
                                            ? "border-cyan-400"
                                            : "border-slate-500 group-hover:border-slate-400"
                                    }`}
                                    style={{
                                        aspectRatio: `${ratio.width} / ${ratio.height}`,
                                        width:
                                            ratio.width >= ratio.height
                                                ? "32px"
                                                : "18px",
                                        height:
                                            ratio.width >= ratio.height
                                                ? "auto"
                                                : "28px",
                                    }}
                                />
                            </div>

                            <p
                                className={`text-sm font-bold ${
                                    active
                                        ? "text-cyan-300"
                                        : "text-slate-200"
                                }`}
                            >
                                {ratio.label}
                            </p>

                            <p className="mt-0.5 truncate text-[11px] text-slate-500">
                                {ratio.name}
                            </p>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}