"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    MousePointer2,
    Crosshair,
    Zap,
    Gauge,
    RotateCcw,
    Info,
} from "lucide-react"

export default function EdpiCalculator() {

    const [dpi, setDpi] = useState("")
    const [sensitivity, setSensitivity] = useState("")
    const [result, setResult] = useState(null)

    const dpiPresets = [400, 800, 1200, 1600, 3200]

    const inputClass =
        "w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-cyan-500/30 text-white text-sm md:text-base py-3 md:py-3.5 px-4 rounded-lg placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"

    const numericDpi = Number(dpi)
    const numericSensitivity = Number(sensitivity)

    const isValid =
        Number.isFinite(numericDpi) &&
        Number.isFinite(numericSensitivity) &&
        numericDpi > 0 &&
        numericSensitivity > 0

    const handleCalculate = (e) => {

        e?.preventDefault()

        if (!isValid) return

        const edpi = numericDpi * numericSensitivity

        setResult({
            dpi: numericDpi,
            sensitivity: numericSensitivity,
            edpi,
        })
    }

    const handleReset = () => {
        setDpi("")
        setSensitivity("")
        setResult(null)
    }

    const applyDpiPreset = (value) => {
        setDpi(String(value))
        setResult(null)
    }

    /*
        Equivalent sensitivity at common DPI values.

        Formula:
        Sensitivity = eDPI / DPI
    */

    const equivalentSensitivities = useMemo(() => {

        if (!result) return []

        const comparisonDpis = [400, 800, 1600, 3200]

        return comparisonDpis.map((comparisonDpi) => ({
            dpi: comparisonDpi,
            sensitivity: result.edpi / comparisonDpi,
        }))

    }, [result])

    const formatNumber = (value, maxDecimals = 4) => {

        return new Intl.NumberFormat("en-US", {
            maximumFractionDigits: maxDecimals,
        }).format(value)

    }

    return (

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl mx-auto"
        >

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl">

                {/* Header */}

                <div className="flex items-center gap-3 mb-6 md:mb-8">

                    <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex-shrink-0">

                        <MousePointer2
                            size={24}
                            className="text-cyan-400"
                        />

                    </div>

                    <div>

                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            Gaming eDPI Calculator
                        </h2>

                        <p className="text-xs md:text-sm text-gray-400 mt-1">
                            DPI × In-game Sensitivity = eDPI
                        </p>

                    </div>

                </div>


                {/* DPI presets */}

                <div className="mb-6">

                    <p className="text-xs text-gray-400 mb-2.5">
                        Common DPI
                    </p>

                    <div className="flex flex-wrap gap-2">

                        {dpiPresets.map((preset) => (

                            <button
                                key={preset}
                                type="button"
                                onClick={() => applyDpiPreset(preset)}
                                className={`text-xs sm:text-sm px-3 py-1.5 rounded-full border transition-all duration-200 ${
                                    Number(dpi) === preset
                                        ? "border-cyan-400 bg-cyan-500/10 text-cyan-300"
                                        : "border-cyan-500/30 text-gray-300 hover:border-cyan-400 hover:text-cyan-300"
                                }`}
                            >
                                {preset} DPI
                            </button>

                        ))}

                    </div>

                </div>


                <form onSubmit={handleCalculate}>

                    {/* Inputs */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">

                        {/* Mouse DPI */}

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >

                            <label
                                htmlFor="mouse-dpi"
                                className="text-xs md:text-sm text-gray-300 font-semibold flex items-center gap-2 mb-2.5"
                            >

                                <MousePointer2
                                    size={16}
                                    className="text-cyan-400"
                                />

                                Mouse DPI

                            </label>

                            <input
                                id="mouse-dpi"
                                type="number"
                                inputMode="decimal"
                                min="1"
                                step="any"
                                placeholder="e.g. 800"
                                value={dpi}
                                onChange={(e) => {
                                    setDpi(e.target.value)
                                    setResult(null)
                                }}
                                className={inputClass}
                            />

                            <p className="text-[11px] md:text-xs text-gray-500 mt-2">
                                Your mouse DPI setting
                            </p>

                        </motion.div>


                        {/* Game sensitivity */}

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >

                            <label
                                htmlFor="game-sensitivity"
                                className="text-xs md:text-sm text-gray-300 font-semibold flex items-center gap-2 mb-2.5"
                            >

                                <Crosshair
                                    size={16}
                                    className="text-blue-400"
                                />

                                In-Game Sensitivity

                            </label>

                            <input
                                id="game-sensitivity"
                                type="number"
                                inputMode="decimal"
                                min="0"
                                step="any"
                                placeholder="e.g. 0.50"
                                value={sensitivity}
                                onChange={(e) => {
                                    setSensitivity(e.target.value)
                                    setResult(null)
                                }}
                                className={inputClass}
                            />

                            <p className="text-[11px] md:text-xs text-gray-500 mt-2">
                                Sensitivity configured inside your game
                            </p>

                        </motion.div>

                    </div>


                    {/* Calculate button */}

                    <motion.button
                        type="submit"
                        disabled={!isValid}
                        whileHover={{
                            scale: isValid ? 1.02 : 1,
                        }}
                        whileTap={{
                            scale: isValid ? 0.98 : 1,
                        }}
                        className={`w-full mt-7 md:mt-8 py-3.5 md:py-4 rounded-lg font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                            isValid
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/40"
                                : "bg-gray-700/50 text-gray-500 cursor-not-allowed"
                        }`}
                    >

                        <Zap size={18} />

                        Calculate eDPI

                    </motion.button>

                </form>


                {/* Result */}

                <AnimatePresence mode="wait">

                    {result && (

                        <motion.div
                            key={`${result.dpi}-${result.sensitivity}`}
                            initial={{
                                opacity: 0,
                                scale: 0.96,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -10,
                            }}
                            transition={{
                                duration: 0.4,
                            }}
                            className="mt-8 md:mt-10 space-y-4"
                        >

                            {/* Main result */}

                            <div className="p-5 md:p-7 bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-cyan-500/30 rounded-xl">

                                <div className="text-center">

                                    <div className="flex items-center justify-center gap-2 mb-2">

                                        <Gauge
                                            size={16}
                                            className="text-cyan-400"
                                        />

                                        <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">
                                            Your Effective DPI
                                        </p>

                                    </div>

                                    <motion.p
                                        initial={{ scale: 0.7 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 120,
                                        }}
                                        className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400"
                                    >
                                        {formatNumber(result.edpi, 3)}
                                    </motion.p>

                                    <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-3">
                                        {formatNumber(result.dpi)} DPI ×{" "}
                                        {formatNumber(result.sensitivity)} sensitivity
                                    </p>

                                </div>


                                {/* Formula */}

                                <div className="mt-6 pt-5 border-t border-slate-700/60 flex items-start gap-3">

                                    <Info
                                        size={18}
                                        className="text-cyan-400 flex-shrink-0 mt-0.5"
                                    />

                                    <div>

                                        <p className="text-sm font-semibold text-white mb-1">
                                            Calculation
                                        </p>

                                        <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                                            eDPI = Mouse DPI × In-game Sensitivity
                                        </p>

                                        <p className="text-xs md:text-sm text-cyan-400 font-semibold mt-1">
                                            {formatNumber(result.dpi)} ×{" "}
                                            {formatNumber(result.sensitivity)} ={" "}
                                            {formatNumber(result.edpi, 3)}
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* Equivalent sensitivity */}

                            <div className="p-5 md:p-6 bg-gradient-to-br from-slate-700/20 to-slate-800/20 border border-blue-500/20 rounded-lg">

                                <div className="flex items-center gap-2 mb-4">

                                    <Crosshair
                                        size={17}
                                        className="text-blue-400"
                                    />

                                    <div>

                                        <h3 className="text-sm md:text-base font-semibold text-white">
                                            Equivalent Sensitivity
                                        </h3>

                                        <p className="text-[11px] md:text-xs text-gray-500 mt-0.5">
                                            Keep the same eDPI when changing mouse DPI
                                        </p>

                                    </div>

                                </div>


                                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">

                                    {equivalentSensitivities.map((item) => (

                                        <div
                                            key={item.dpi}
                                            className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50"
                                        >

                                            <p className="text-xs text-gray-400">
                                                {item.dpi} DPI
                                            </p>

                                            <p className="text-base md:text-lg text-white font-bold mt-1 break-all">
                                                {formatNumber(
                                                    item.sensitivity,
                                                    4
                                                )}
                                            </p>

                                            <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">
                                                sensitivity
                                            </p>

                                        </div>

                                    ))}

                                </div>

                            </div>


                            {/* Reset */}

                            <button
                                type="button"
                                onClick={handleReset}
                                className="w-full py-3 rounded-lg border border-slate-700/70 text-gray-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                            >

                                <RotateCcw size={15} />

                                Reset Calculator

                            </button>

                        </motion.div>

                    )}

                </AnimatePresence>

            </div>

        </motion.div>
    )
}