// components/ui/pokemon-type-calculator/TypeSelector.jsx

import {
    POKEMON_TYPES,
    TYPE_META,
} from "@/lib/pokemon/type-data"


export default function TypeSelector({
    id,
    label,
    value,
    onChange,
    excludeType = "",
    optional = false,
    description,
}) {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-xs md:text-sm text-gray-300 font-semibold mb-2.5"
            >
                {label}
            </label>

            <select
                id={id}
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                aria-describedby={
                    description
                        ? `${id}-description`
                        : undefined
                }
                className="w-full appearance-none bg-slate-800/70 border border-cyan-500/30 text-white text-sm md:text-base py-3 md:py-3.5 px-4 rounded-lg focus:outline-none focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 transition-colors duration-200 cursor-pointer"
            >
                <option
                    value=""
                    className="bg-slate-900 text-gray-300"
                >
                    {optional
                        ? "No second type"
                        : "Select a type"}
                </option>

                {POKEMON_TYPES.map((type) => (
                    <option
                        key={type}
                        value={type}
                        disabled={type === excludeType}
                        className="bg-slate-900 text-white"
                    >
                        {TYPE_META[type].label}
                    </option>
                ))}
            </select>

            {description && (
                <p
                    id={`${id}-description`}
                    className="text-[11px] md:text-xs text-gray-500 mt-2"
                >
                    {description}
                </p>
            )}
        </div>
    )
}