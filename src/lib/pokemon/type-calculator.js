// lib/pokemon/type-calculator.js

import {
    POKEMON_TYPES,
    TYPE_CHART,
} from "@/lib/pokemon/type-data"


const VALID_TYPES = new Set(POKEMON_TYPES)


function isValidType(type) {
    return VALID_TYPES.has(type)
}


/**
 * Gets the effectiveness of one attacking type
 * against one defending type.
 *
 * Examples:
 *
 * fire -> grass = 2
 * fire -> water = 0.5
 * normal -> ghost = 0
 * water -> electric = 1
 */
export function getTypeMultiplier(
    attackingType,
    defendingType
) {
    if (
        !isValidType(attackingType) ||
        !isValidType(defendingType)
    ) {
        return 1
    }

    return (
        TYPE_CHART[attackingType]?.[defendingType] ??
        1
    )
}


/**
 * Creates a valid defensive type combination.
 *
 * Duplicate secondary types are ignored because
 * a Pokémon cannot have the same type twice.
 */
export function getDefendingTypes(
    primaryType,
    secondaryType = ""
) {
    if (!isValidType(primaryType)) {
        return []
    }

    if (
        !secondaryType ||
        !isValidType(secondaryType) ||
        secondaryType === primaryType
    ) {
        return [primaryType]
    }

    return [primaryType, secondaryType]
}


/**
 * Calculates one attacking type against a
 * single-type or dual-type Pokémon.
 *
 * Dual-type modifiers multiply together.
 *
 * Example:
 *
 * Fire vs Bug/Grass
 * 2 × 2 = 4
 */
export function getDefensiveMultiplier(
    attackingType,
    defendingTypes
) {
    if (
        !isValidType(attackingType) ||
        !Array.isArray(defendingTypes) ||
        defendingTypes.length === 0
    ) {
        return 1
    }

    return defendingTypes.reduce(
        (multiplier, defendingType) =>
            multiplier *
            getTypeMultiplier(
                attackingType,
                defendingType
            ),
        1
    )
}


/**
 * Produces the complete defensive profile
 * for one or two Pokémon types.
 *
 * Every attacking type is placed into its
 * final effectiveness category.
 */
export function calculateDefensiveProfile(
    primaryType,
    secondaryType = ""
) {
    const defendingTypes = getDefendingTypes(
        primaryType,
        secondaryType
    )

    if (defendingTypes.length === 0) {
        return null
    }

    const groups = {
        fourX: [],
        twoX: [],
        oneX: [],
        halfX: [],
        quarterX: [],
        zeroX: [],
    }

    const matchups = POKEMON_TYPES.map(
        (attackingType) => {
            const multiplier =
                getDefensiveMultiplier(
                    attackingType,
                    defendingTypes
                )

            const matchup = {
                type: attackingType,
                multiplier,
            }

            switch (multiplier) {
                case 4:
                    groups.fourX.push(attackingType)
                    break

                case 2:
                    groups.twoX.push(attackingType)
                    break

                case 0.5:
                    groups.halfX.push(attackingType)
                    break

                case 0.25:
                    groups.quarterX.push(attackingType)
                    break

                case 0:
                    groups.zeroX.push(attackingType)
                    break

                default:
                    groups.oneX.push(attackingType)
            }

            return matchup
        }
    )

    return {
        defendingTypes,
        matchups,
        groups,

        summary: {
            weaknessCount:
                groups.fourX.length +
                groups.twoX.length,

            resistanceCount:
                groups.halfX.length +
                groups.quarterX.length,

            immunityCount:
                groups.zeroX.length,

            neutralCount:
                groups.oneX.length,
        },
    }
}