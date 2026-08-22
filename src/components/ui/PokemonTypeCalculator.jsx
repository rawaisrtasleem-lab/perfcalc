"use client"

import { useState } from "react"

import {
    RotateCcw,
    Shield,
    Sparkles,
} from "lucide-react"

import TypeSelector from "@/components/ui/pokemon-type-calculator/TypeSelector"
import EffectivenessResults from "@/components/ui/pokemon-type-calculator/EffectivenessResults"

import {
    calculateDefensiveProfile,
} from "@/lib/pokemon/type-calculator"


export default function PokemonTypeCalculator() {
    const [primaryType, setPrimaryType] =
        useState("")

    const [secondaryType, setSecondaryType] =
        useState("")

    const [result, setResult] =
        useState(null)


    const isValid =
        Boolean(primaryType) &&
        primaryType !== secondaryType


    const handlePrimaryChange = (value) => {
        setPrimaryType(value)

        if (value === secondaryType) {
            setSecondaryType("")
        }

        setResult(null)
    }


    const handleSecondaryChange = (value) => {
        setSecondaryType(value)
        setResult(null)
    }


    const handleCalculate = (event) => {
        event.preventDefault()

        if (!isValid) {
            return
        }

        const profile =
            calculateDefensiveProfile(
                primaryType,
                secondaryType
            )

        setResult(profile)
    }


    const handleReset = () => {
        setPrimaryType("")
        setSecondaryType("")
        setResult(null)
    }


    return (
        <div className="w-full max-w-4xl mx-auto">

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl">

                {/* Calculator header */}
                <div className="flex items-center gap-3 mb-6 md:mb-8">

                    <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex-shrink-0">
                        <Shield
                            size={24}
                            className="text-cyan-400"
                        />
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            Pokémon Type Calculator
                        </h2>

                        <p className="text-xs md:text-sm text-gray-400 mt-1">
                            Calculate weaknesses,
                            resistances, and immunities
                        </p>
                    </div>

                </div>


                <form onSubmit={handleCalculate}>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">

                        <TypeSelector
                            id="pokemon-primary-type"
                            label="Primary Type"
                            value={primaryType}
                            onChange={
                                handlePrimaryChange
                            }
                            excludeType={
                                secondaryType
                            }
                            description="Select the Pokémon's first type"
                        />


                        <TypeSelector
                            id="pokemon-secondary-type"
                            label="Secondary Type"
                            value={secondaryType}
                            onChange={
                                handleSecondaryChange
                            }
                            excludeType={
                                primaryType
                            }
                            optional
                            description="Optional for dual-type Pokémon"
                        />

                    </div>


                    <button
                        type="submit"
                        disabled={!isValid}
                        className={`w-full mt-7 md:mt-8 py-3.5 md:py-4 rounded-lg font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                            isValid
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/30 active:scale-[0.99]"
                                : "bg-gray-700/50 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                        <Sparkles size={18} />

                        Calculate Type Effectiveness
                    </button>

                </form>


                <div
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {result && (
                        <EffectivenessResults
                            profile={result}
                        />
                    )}
                </div>


                {(primaryType ||
                    secondaryType ||
                    result) && (
                    <button
                        type="button"
                        onClick={handleReset}
                        className="w-full mt-5 py-3 rounded-lg border border-slate-700/70 text-gray-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                    >
                        <RotateCcw size={15} />

                        Reset Calculator
                    </button>
                )}

            </div>

        </div>
    )
}