import {
    FAIR_TRADE_THRESHOLD,
    formatTradeValue,
} from "@/lib/blox-fruits/trade-calculator"


export default function TradeResult({
    analysis,
}) {
    const resultStyles = {
        incomplete: {
            label: "Incomplete Trade",
            text: "text-slate-300",
            border: "border-slate-800",
            background: "bg-slate-900/60",
        },

        win: {
            label: "Win",
            text: "text-emerald-400",
            border: "border-emerald-500/20",
            background: "bg-emerald-500/5",
        },

        fair: {
            label: "Fair Trade",
            text: "text-cyan-400",
            border: "border-cyan-500/20",
            background: "bg-cyan-500/5",
        },

        loss: {
            label: "Loss",
            text: "text-red-400",
            border: "border-red-500/20",
            background: "bg-red-500/5",
        },
    }


    const style =
        resultStyles[analysis.status]


    const percentage =
        analysis.percentage > 0
            ? `+${analysis.percentage.toFixed(1)}%`
            : `${analysis.percentage.toFixed(1)}%`


    const difference =
        analysis.difference > 0
            ? `+${formatTradeValue(
                analysis.difference
            )}`
            : formatTradeValue(
                analysis.difference
            )


    return (
        <div className="border-t border-slate-800 p-4 sm:p-6">

            <div
                className={`rounded-xl border ${style.border} ${style.background} p-4 sm:p-5`}
            >

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    {/* Result */}
                    <div>

                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                            Trade Result
                        </p>


                        <p
                            className={`mt-1 text-2xl font-bold ${style.text}`}
                        >
                            {style.label}
                        </p>


                        {analysis.status === "incomplete" ? (
                            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                                Add at least one fruit to both
                                sides to calculate the trade.
                            </p>
                        ) : (
                            <p className="mt-2 text-sm leading-6 text-slate-400">

                                Receiving{" "}

                                <span
                                    className={`font-semibold ${style.text}`}
                                >
                                    {percentage}
                                </span>

                                {" "}value compared with your offer.

                            </p>
                        )}

                    </div>


                    {/* Stats */}
                    {analysis.status !== "incomplete" && (
                        <div className="grid grid-cols-2 gap-2 sm:min-w-64">

                            <ResultStat
                                label="Difference"
                                value={difference}
                            />


                            <ResultStat
                                label="Fair Range"
                                value={`±${FAIR_TRADE_THRESHOLD}%`}
                            />

                        </div>
                    )}

                </div>

            </div>

        </div>
    )
}



function ResultStat({
    label,
    value,
}) {
    return (
        <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-3">

            <p className="text-[10px] uppercase tracking-wide text-slate-500">
                {label}
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-200">
                {value}
            </p>

        </div>
    )
}