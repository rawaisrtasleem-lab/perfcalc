import {
    formatTradeValue,
} from "@/lib/blox-fruits/trade-calculator"


export default function FruitSelector({
    side,
    search,
    setSearch,
    fruits,
    onAdd,
    onClose,
}) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
            onMouseDown={onClose}
        >

            <div
                role="dialog"
                aria-modal="true"
                aria-label="Select Blox Fruit"
                onMouseDown={(event) =>
                    event.stopPropagation()
                }
                className="flex max-h-[85vh] w-full flex-col overflow-hidden rounded-t-2xl border border-slate-800 bg-slate-950 shadow-2xl sm:max-w-2xl sm:rounded-2xl"
            >

                {/* Header */}
                <div className="flex items-center justify-between gap-4 border-b border-slate-800 px-4 py-4 sm:px-5">

                    <div>

                        <h3 className="font-semibold text-slate-100">
                            Select a Fruit
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                            Add to{" "}

                            {side === "your"
                                ? "Your Offer"
                                : "Their Offer"}
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close fruit selector"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-xl text-slate-400 transition hover:bg-slate-800 hover:text-white"
                    >
                        ×
                    </button>

                </div>


                {/* Search */}
                <div className="border-b border-slate-800 p-4">

                    <div className="relative">

                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                        >
                            <circle
                                cx="11"
                                cy="11"
                                r="8"
                            />

                            <path d="m21 21-4.35-4.35" />
                        </svg>


                        <input
                            type="search"
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                            placeholder="Search Dragon, Kitsune, Dough..."
                            autoFocus
                            className="min-h-11 w-full rounded-xl border border-slate-700 bg-slate-900 pl-10 pr-4 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/10"
                        />

                    </div>

                </div>


                {/* Fruits */}
                <div className="overflow-y-auto p-3 sm:p-4">

                    {fruits.length === 0 ? (
                        <div className="py-12 text-center">

                            <p className="text-sm text-slate-400">
                                No fruits found.
                            </p>

                            <p className="mt-1 text-xs text-slate-600">
                                Try another search.
                            </p>

                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

                            {fruits.map((fruit) => (
                                <button
                                    type="button"
                                    key={fruit.id}
                                    onClick={() =>
                                        onAdd(fruit.id)
                                    }
                                    className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-left transition hover:border-cyan-500/30 hover:bg-slate-900"
                                >

                                    {/* Icon */}
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-xl">
                                        {fruit.emoji}
                                    </div>


                                    {/* Info */}
                                    <div className="min-w-0 flex-1">

                                        <div className="flex items-center justify-between gap-2">

                                            <p className="truncate text-sm font-semibold text-slate-100">
                                                {fruit.name}
                                            </p>


                                            <span className="shrink-0 text-xs font-semibold text-cyan-400">
                                                {formatTradeValue(
                                                    fruit.physicalValue
                                                )}
                                            </span>

                                        </div>


                                        <p className="mt-1 truncate text-[11px] text-slate-500">
                                            {fruit.rarity}
                                            {" • "}
                                            {fruit.type}
                                            {" • "}
                                            Demand {fruit.demand}/10
                                        </p>

                                    </div>

                                </button>
                            ))}

                        </div>
                    )}

                </div>

            </div>

        </div>
    )
}