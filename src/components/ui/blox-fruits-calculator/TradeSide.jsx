import {
    BLOX_FRUITS_BY_ID,
} from "@/lib/blox-fruits/fruit-data"

import {
    formatTradeValue,
    getItemValue,
    MAX_TRADE_ITEMS,
} from "@/lib/blox-fruits/trade-calculator"


export default function TradeSide({
    title,
    subtitle,
    items,
    total,
    averageDemand,
    onAdd,
    onRemove,
    onVariantChange,
}) {
    const limitReached =
        items.length >= MAX_TRADE_ITEMS


    return (
        <div className="min-w-0 rounded-xl border border-slate-800 bg-slate-900/50 p-4">

            {/* Header */}
            <div className="flex items-start justify-between gap-3">

                <div className="min-w-0">

                    <h2 className="font-semibold text-slate-100">
                        {title}
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                        {subtitle}
                    </p>

                </div>


                <span className="shrink-0 rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-400">
                    {items.length}/{MAX_TRADE_ITEMS}
                </span>

            </div>


            {/* Selected fruits */}
            <div className="mt-4 space-y-3">

                {items.length === 0 ? (
                    <div className="flex min-h-32 items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-950/40 px-4 text-center">

                        <div>

                            <div className="text-2xl">
                                🍇
                            </div>

                            <p className="mt-2 text-sm text-slate-400">
                                No fruits added
                            </p>

                            <p className="mt-1 text-xs text-slate-600">
                                Add up to {MAX_TRADE_ITEMS} fruits
                            </p>

                        </div>

                    </div>
                ) : (
                    items.map((item) => (
                        <SelectedFruit
                            key={item.uid}
                            item={item}
                            onRemove={() =>
                                onRemove(item.uid)
                            }
                            onVariantChange={(variant) =>
                                onVariantChange(
                                    item.uid,
                                    variant
                                )
                            }
                        />
                    ))
                )}

            </div>


            {/* Add fruit */}
            <button
                type="button"
                onClick={onAdd}
                disabled={limitReached}
                className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/25 bg-cyan-500/10 px-4 text-sm font-semibold text-cyan-400 transition hover:border-cyan-400/40 hover:bg-cyan-500/15 disabled:cursor-not-allowed disabled:border-slate-800 disabled:bg-slate-900 disabled:text-slate-600"
            >
                <span className="text-lg leading-none">
                    +
                </span>

                {limitReached
                    ? "Maximum 4 Fruits"
                    : "Add Fruit"}
            </button>


            {/* Bottom stats */}
            <div className="mt-4 grid grid-cols-2 gap-3">

                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">

                    <p className="text-[11px] uppercase tracking-wide text-slate-500">
                        Total Value
                    </p>

                    <p className="mt-1 text-base font-bold text-cyan-400 sm:text-lg">
                        {formatTradeValue(total)}
                    </p>

                </div>


                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">

                    <p className="text-[11px] uppercase tracking-wide text-slate-500">
                        Avg Demand
                    </p>

                    <p className="mt-1 text-base font-bold text-slate-200 sm:text-lg">
                        {averageDemand.toFixed(1)}

                        <span className="ml-0.5 text-xs font-normal text-slate-500">
                            /10
                        </span>
                    </p>

                </div>

            </div>

        </div>
    )
}



function SelectedFruit({
    item,
    onRemove,
    onVariantChange,
}) {
    const fruit =
        BLOX_FRUITS_BY_ID[item.fruitId]


    if (!fruit) {
        return null
    }


    const value =
        getItemValue(item)


    return (
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">

            <div className="flex min-w-0 items-start gap-3">

                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-xl">
                    {fruit.emoji}
                </div>


                {/* Info */}
                <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-2">

                        <div className="min-w-0">

                            <p className="truncate text-sm font-semibold text-slate-100">
                                {fruit.name}
                            </p>

                            <p className="mt-0.5 truncate text-[11px] text-slate-500">
                                {fruit.rarity} • {fruit.type} • Demand {fruit.demand}/10
                            </p>

                        </div>


                        <button
                            type="button"
                            onClick={onRemove}
                            aria-label={`Remove ${fruit.name}`}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-lg text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
                        >
                            ×
                        </button>

                    </div>


                    <p className="mt-2 text-sm font-bold text-cyan-400">
                        {formatTradeValue(value)}
                    </p>

                </div>

            </div>


            {/* Physical / Permanent */}
            <div className="mt-3 grid grid-cols-2 gap-2">

                <button
                    type="button"
                    onClick={() =>
                        onVariantChange("physical")
                    }
                    className={`min-h-9 rounded-lg border px-2 text-xs font-medium transition ${
                        item.variant === "physical"
                            ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-400"
                            : "border-slate-800 bg-slate-900 text-slate-500 hover:text-slate-300"
                    }`}
                >
                    Physical
                </button>


                <button
                    type="button"
                    onClick={() =>
                        onVariantChange("permanent")
                    }
                    className={`min-h-9 rounded-lg border px-2 text-xs font-medium transition ${
                        item.variant === "permanent"
                            ? "border-indigo-500/40 bg-indigo-500/10 text-indigo-300"
                            : "border-slate-800 bg-slate-900 text-slate-500 hover:text-slate-300"
                    }`}
                >
                    Permanent
                </button>

            </div>

        </div>
    )
}