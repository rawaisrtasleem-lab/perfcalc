// lib/pokemon/type-data.js

export const POKEMON_TYPES = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
]


export const TYPE_META = {
    normal: {
        label: "Normal",
        badgeClassName:
            "border-gray-400/40 bg-gray-400/10 text-gray-200",
    },

    fire: {
        label: "Fire",
        badgeClassName:
            "border-orange-400/40 bg-orange-500/10 text-orange-300",
    },

    water: {
        label: "Water",
        badgeClassName:
            "border-blue-400/40 bg-blue-500/10 text-blue-300",
    },

    electric: {
        label: "Electric",
        badgeClassName:
            "border-yellow-400/40 bg-yellow-400/10 text-yellow-300",
    },

    grass: {
        label: "Grass",
        badgeClassName:
            "border-green-400/40 bg-green-500/10 text-green-300",
    },

    ice: {
        label: "Ice",
        badgeClassName:
            "border-cyan-300/40 bg-cyan-300/10 text-cyan-200",
    },

    fighting: {
        label: "Fighting",
        badgeClassName:
            "border-red-400/40 bg-red-500/10 text-red-300",
    },

    poison: {
        label: "Poison",
        badgeClassName:
            "border-purple-400/40 bg-purple-500/10 text-purple-300",
    },

    ground: {
        label: "Ground",
        badgeClassName:
            "border-amber-400/40 bg-amber-500/10 text-amber-300",
    },

    flying: {
        label: "Flying",
        badgeClassName:
            "border-sky-400/40 bg-sky-500/10 text-sky-300",
    },

    psychic: {
        label: "Psychic",
        badgeClassName:
            "border-pink-400/40 bg-pink-500/10 text-pink-300",
    },

    bug: {
        label: "Bug",
        badgeClassName:
            "border-lime-400/40 bg-lime-500/10 text-lime-300",
    },

    rock: {
        label: "Rock",
        badgeClassName:
            "border-stone-400/40 bg-stone-500/10 text-stone-300",
    },

    ghost: {
        label: "Ghost",
        badgeClassName:
            "border-violet-400/40 bg-violet-500/10 text-violet-300",
    },

    dragon: {
        label: "Dragon",
        badgeClassName:
            "border-indigo-400/40 bg-indigo-500/10 text-indigo-300",
    },

    dark: {
        label: "Dark",
        badgeClassName:
            "border-slate-400/40 bg-slate-500/10 text-slate-300",
    },

    steel: {
        label: "Steel",
        badgeClassName:
            "border-zinc-300/40 bg-zinc-400/10 text-zinc-200",
    },

    fairy: {
        label: "Fairy",
        badgeClassName:
            "border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-300",
    },
}


/**
 * Modern Pokémon type chart.
 *
 * Only non-neutral matchups are stored.
 * Anything missing automatically means 1× damage.
 *
 * Structure:
 *
 * attackingType: {
 *     defendingType: multiplier
 * }
 */
export const TYPE_CHART = {
    normal: {
        rock: 0.5,
        ghost: 0,
        steel: 0.5,
    },

    fire: {
        fire: 0.5,
        water: 0.5,
        grass: 2,
        ice: 2,
        bug: 2,
        rock: 0.5,
        dragon: 0.5,
        steel: 2,
    },

    water: {
        fire: 2,
        water: 0.5,
        grass: 0.5,
        ground: 2,
        rock: 2,
        dragon: 0.5,
    },

    electric: {
        water: 2,
        electric: 0.5,
        grass: 0.5,
        ground: 0,
        flying: 2,
        dragon: 0.5,
    },

    grass: {
        fire: 0.5,
        water: 2,
        grass: 0.5,
        poison: 0.5,
        ground: 2,
        flying: 0.5,
        bug: 0.5,
        rock: 2,
        dragon: 0.5,
        steel: 0.5,
    },

    ice: {
        fire: 0.5,
        water: 0.5,
        grass: 2,
        ice: 0.5,
        ground: 2,
        flying: 2,
        dragon: 2,
        steel: 0.5,
    },

    fighting: {
        normal: 2,
        ice: 2,
        poison: 0.5,
        flying: 0.5,
        psychic: 0.5,
        bug: 0.5,
        rock: 2,
        ghost: 0,
        dark: 2,
        steel: 2,
        fairy: 0.5,
    },

    poison: {
        grass: 2,
        poison: 0.5,
        ground: 0.5,
        rock: 0.5,
        ghost: 0.5,
        steel: 0,
        fairy: 2,
    },

    ground: {
        fire: 2,
        electric: 2,
        grass: 0.5,
        poison: 2,
        flying: 0,
        bug: 0.5,
        rock: 2,
        steel: 2,
    },

    flying: {
        electric: 0.5,
        grass: 2,
        fighting: 2,
        bug: 2,
        rock: 0.5,
        steel: 0.5,
    },

    psychic: {
        fighting: 2,
        poison: 2,
        psychic: 0.5,
        dark: 0,
        steel: 0.5,
    },

    bug: {
        fire: 0.5,
        grass: 2,
        fighting: 0.5,
        poison: 0.5,
        flying: 0.5,
        psychic: 2,
        ghost: 0.5,
        dark: 2,
        steel: 0.5,
        fairy: 0.5,
    },

    rock: {
        fire: 2,
        ice: 2,
        fighting: 0.5,
        ground: 0.5,
        flying: 2,
        bug: 2,
        steel: 0.5,
    },

    ghost: {
        normal: 0,
        psychic: 2,
        ghost: 2,
        dark: 0.5,
    },

    dragon: {
        dragon: 2,
        steel: 0.5,
        fairy: 0,
    },

    dark: {
        fighting: 0.5,
        psychic: 2,
        ghost: 2,
        dark: 0.5,
        fairy: 0.5,
    },

    steel: {
        fire: 0.5,
        water: 0.5,
        electric: 0.5,
        ice: 2,
        rock: 2,
        steel: 0.5,
        fairy: 2,
    },

    fairy: {
        fire: 0.5,
        fighting: 2,
        poison: 0.5,
        dragon: 2,
        dark: 2,
        steel: 0.5,
    },
}