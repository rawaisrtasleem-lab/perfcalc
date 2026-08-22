// components/ui/pokemon-type-calculator/EffectivenessResults.jsx

import {
    ShieldCheck,
    ShieldAlert,
    ShieldOff,
} from "lucide-react"

import {
    TYPE_META,
} from "@/lib/pokemon/type-data"


const RESULT_GROUPS = [
    {
        key: "fourX",
        title: "4× Weakness",
        multiplier: "4×",
        description: "Takes four times normal damage",
        containerClassName:
            "border-red-500/30 bg-red-500/5",
        titleClassName: "text-red-300",
    },

    {
        key: "twoX",
        title: "2× Weakness",
        multiplier: "2×",
        description: "Takes double damage",
        containerClassName:
            "border-orange-500/30 bg-orange-500/5",
        titleClassName: "text-orange-300",
    },

    {
        key: "halfX",
        title: "½× Resistance",
        multiplier: "½×",
        description: "Takes half damage",
        containerClassName:
            "border-green-500/30 bg-green-500/5",
        titleClassName: "text-green-300",
    },

    {
        key: "quarterX",
        title: "¼× Resistance",
        multiplier: "¼×",
        description: "Takes one-quarter damage",
        containerClassName:
            "border-emerald-500/30 bg-emerald-500/5",
        titleClassName: "text-emerald-300",
    },

    {
        key: "zeroX",
        title: "Immune",
        multiplier: "0×",
        description: "Takes no damage",
        containerClassName:
            "border-violet-500/30 bg-violet-500/5",
        titleClassName: "text-violet-300",
    },

    {
        key: "oneX",
        title: "Neutral",
        multiplier: "1×",
        description: "Takes normal damage",
        containerClassName:
            "border-slate-700/60 bg-slate-800/20",
        titleClassName: "text-gray-300",
    },
]


function TypeBadge({ type }) {
    const meta = TYPE_META[type]

    return (
        <span
            className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full border text-xs font-semibold ${meta.badgeClassName}`}
        >
            {meta.label}
        </span>
    )
}


function ResultGroup({
    group,
    types,
}) {
    if (!types.length) {
        return null
    }

    return (
        <div
            className={`border rounded-lg p-4 md:p-5 ${group.containerClassName}`}
        >
            <div className="flex items-start justify-between gap-3 mb-3.5">
                <div>
                    <h4
                        className={`text-sm md:text-base font-bold ${group.titleClassName}`}
                    >
                        {group.title}
                    </h4>

                    <p className="text-[11px] md:text-xs text-gray-500 mt-1">
                        {group.description}
                    </p>
                </div>

                <span
                    className={`text-sm font-bold flex-shrink-0 ${group.titleClassName}`}
                >
                    {group.multiplier}
                </span>
            </div>

            <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                    <TypeBadge
                        key={type}
                        type={type}
                    />
                ))}
            </div>
        </div>
    )
}


export default function EffectivenessResults({
    profile,
}) {
    const {
        defendingTypes,
        groups,
        summary,
    } = profile

    return (
        <div className="mt-8 md:mt-10 space-y-5">
            <div className="p-5 md:p-7 bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-cyan-500/30 rounded-xl">

                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 text-cyan-400 mb-3">
                        <ShieldCheck size={18} />

                        <p className="text-xs md:text-sm uppercase tracking-widest font-semibold">
                            Defensive Profile
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2.5">
                        {defendingTypes.map((type) => (
                            <TypeBadge
                                key={type}
                                type={type}
                            />
                        ))}
                    </div>

                    <p className="text-xs md:text-sm text-gray-400 mt-4">
                        Incoming attack effectiveness
                        against this type combination
                    </p>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-700/60">

                    <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3.5 text-center">
                        <ShieldAlert
                            size={17}
                            className="text-orange-400 mx-auto mb-1.5"
                        />

                        <p className="text-xl md:text-2xl font-bold text-white">
                            {summary.weaknessCount}
                        </p>

                        <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                            Weaknesses
                        </p>
                    </div>


                    <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3.5 text-center">
                        <ShieldCheck
                            size={17}
                            className="text-green-400 mx-auto mb-1.5"
                        />

                        <p className="text-xl md:text-2xl font-bold text-white">
                            {summary.resistanceCount}
                        </p>

                        <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                            Resistances
                        </p>
                    </div>


                    <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3.5 text-center">
                        <ShieldOff
                            size={17}
                            className="text-violet-400 mx-auto mb-1.5"
                        />

                        <p className="text-xl md:text-2xl font-bold text-white">
                            {summary.immunityCount}
                        </p>

                        <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                            Immunities
                        </p>
                    </div>


                    <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3.5 text-center">
                        <span className="block text-gray-400 text-sm font-bold mb-1.5">
                            1×
                        </span>

                        <p className="text-xl md:text-2xl font-bold text-white">
                            {summary.neutralCount}
                        </p>

                        <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                            Neutral
                        </p>
                    </div>

                </div>
            </div>


            <div>
                <div className="mb-4">
                    <h3 className="text-base md:text-lg font-bold text-white">
                        Type Effectiveness
                    </h3>

                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                        How every attacking type performs
                        against your selected Pokémon type
                        combination.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {RESULT_GROUPS.map((group) => (
                        <ResultGroup
                            key={group.key}
                            group={group}
                            types={groups[group.key]}
                        />
                    ))}
                </div>
            </div>


            <div className="p-4 border border-blue-500/20 bg-blue-500/5 rounded-lg">
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    This calculator uses base type
                    effectiveness. Pokémon abilities,
                    held items, special moves, battle
                    effects, and other mechanics can
                    change the final damage interaction.
                </p>
            </div>
        </div>
    )
}