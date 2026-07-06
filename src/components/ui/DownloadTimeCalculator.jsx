"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, HardDrive, Wifi, Zap, ChevronDown, Info, TrendingUp, Clock } from "lucide-react"
import calculateDownloadTime, {
    getDownloadAnalysis,
    fileSizeUnits,
    speedUnits,
    filePresets,
} from "@/components/calculator/calculateDownloadTime"

export default function DownloadTimeCalculator() {
    const [fileSize, setFileSize] = useState("")
    const [fileSizeUnit, setFileSizeUnit] = useState("GB")
    const [speed, setSpeed] = useState("")
    const [speedUnit, setSpeedUnit] = useState("Mbps")
    const [analysis, setAnalysis] = useState(null)
    const [isCalculating, setIsCalculating] = useState(false)

    const isValid = Number(fileSize) > 0 && Number(speed) > 0

    const handleCalculate = () => {
        if (!isValid) return
        setIsCalculating(true)
        setTimeout(() => {
            setAnalysis(getDownloadAnalysis(Number(fileSize), fileSizeUnit, Number(speed), speedUnit))
            setIsCalculating(false)
        }, 600)
    }

    const applyPreset = (p) => {
        setFileSize(String(p.size))
        setFileSizeUnit(p.unit)
    }

    const selectClass =
        "w-full appearance-none bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-cyan-500/30 text-white text-sm md:text-base py-3 md:py-3.5 px-4 rounded-lg focus:outline-none focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 cursor-pointer"
    const inputClass =
        "w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-cyan-500/30 text-white text-sm md:text-base py-3 md:py-3.5 px-4 rounded-lg focus:outline-none focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"

    return (
        <motion.div
            initial= {{opacity: 0, y: 40}}
            animate= {{opacity: 1, y: 0}}
            transition= {{duration: 0.6}}
            className="w-full"
        >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-6 md:p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                        <Download size={24} className="text-cyan-400" />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">Download Time Calculator</h2>
                        <p className="text-xs md:text-sm text-gray-400">Estimate how long any file takes to download</p>
                    </div>
                </div>

                {/* Quick presets */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {filePresets.map((p) => (
                        <button
                            key={p.label}
                            onClick={() => applyPreset(p)}
                            className="text-xs px-3 py-1.5 rounded-full border border-cyan-500/30 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                        >
                            {p.label}
                        </button>
                    ))}
                </div>

                {/* Form inputs */}
                <div className="space-y-5 md:space-y-6">
                    {/* File size */}
                    <motion.div initial= {{opacity: 0, y: 10}} animate= {{opacity: 1, y: 0}} transition= {{delay: 0.1}}>
                        <label className="text-xs md:text-sm text-gray-300 font-semibold flex items-center gap-2 mb-2.5">
                            <HardDrive size={16} className="text-cyan-400" />
                            File Size
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="number"
                                min="0"
                                placeholder="e.g. 4"
                                value={fileSize}
                                onChange={(e) => setFileSize(e.target.value)}
                                className={inputClass}
                            />
                            <div className="relative">
                                <select value={fileSizeUnit} onChange={(e) => setFileSizeUnit(e.target.value)} className={selectClass}>
                                    {fileSizeUnits.map((u) => (
                                        <option key={u.value} value={u.value} className="bg-slate-900">{u.label}</option>
                                    ))}
                                </select>
                                <ChevronDown size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Internet speed */}
                    <motion.div initial= {{opacity: 0, y: 10}} animate= {{opacity: 1, y: 0}} transition= {{delay: 0.2}}>
                        <label className="text-xs md:text-sm text-gray-300 font-semibold flex items-center gap-2 mb-2.5">
                            <Wifi size={16} className="text-blue-400" />
                            Internet Speed
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="number"
                                min="0"
                                placeholder="e.g. 100"
                                value={speed}
                                onChange={(e) => setSpeed(e.target.value)}
                                className={inputClass}
                            />
                            <div className="relative">
                                <select value={speedUnit} onChange={(e) => setSpeedUnit(e.target.value)} className={selectClass}>
                                    {speedUnits.map((u) => (
                                        <option key={u.value} value={u.value} className="bg-slate-900">{u.label}</option>
                                    ))}
                                </select>
                                <ChevronDown size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Calculate button */}
                <motion.button
                    onClick={handleCalculate}
                    disabled={!isValid || isCalculating}
                    whileHover={{ scale: !isValid || isCalculating ? 1 : 1.02 }}
                    whileTap={{ scale: !isValid || isCalculating ? 1 : 0.98 }}
                    className={`w-full mt-7 md:mt-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                        isValid && !isCalculating
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/40"
                            : "bg-gray-700/50 text-gray-500 cursor-not-allowed"
                    }`}
                >
                    {isCalculating ? (
                        <>
                            <motion.div
                                animate= {{rotate: 360}}
                                transition= {{duration: 1, repeat: Infinity}}
                                className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                            />
                            Calculating...
                        </>
                    ) : (
                        <>
                            <Zap size={18} />
                            Calculate Download Time
                        </>
                    )}
                </motion.button>

                {/* Result */}
                {analysis && (
                    <motion.div
                        initial= {{opacity: 0, scale: 0.9, y: 20}}
                        animate= {{opacity: 1, scale: 1, y: 0}}
                        transition= {{duration: 0.5}}
                        className="mt-8 md:mt-10 space-y-4"
                    >
                        {/* Main result card */}
                        <div className="p-5 md:p-7 bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-cyan-500/30 rounded-xl">
                            <div className="text-center mb-5 md:mb-6">
                                <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mb-2">Estimated Download Time</p>
                                <motion.div
                                    initial= {{scale: 0}}
                                    animate= {{scale: 1}}
                                    transition= {{delay: 0.2, type: "spring", stiffness: 100}}
                                >
                                    <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                                        {analysis.formatted}
                                    </p>
                                </motion.div>
                                <p className="text-sm md:text-base text-gray-300 mt-2 flex items-center justify-center gap-2">
                                    <Clock size={14} className="text-cyan-400" />
                                    {analysis.fileLabel} at {analysis.speedMbps} Mbps (~{analysis.effectiveMBps} MB/s real-world)
                                </p>
                            </div>

                            {/* Recommendation */}
                            <div className="flex items-start gap-3">
                                <Info size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm md:text-base font-semibold text-white mb-1">{analysis.recommendation.title}</p>
                                    <p className="text-xs md:text-sm text-gray-300">{analysis.recommendation.description}</p>
                                    <p className="text-xs md:text-sm text-cyan-400 font-semibold mt-2">💡 {analysis.recommendation.suggestion}</p>
                                </div>
                            </div>
                        </div>

                        {/* Comparison card */}
                        <div className="p-5 md:p-6 bg-gradient-to-br from-slate-700/20 to-slate-800/20 border border-blue-500/20 rounded-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <TrendingUp size={16} className="text-blue-400" />
                                <h3 className="text-sm md:text-base font-semibold text-white">Same File on Other Connections</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                                {analysis.comparisons.map((c) => (
                                    <div key={c.label} className="bg-slate-800/40 p-3 rounded border border-slate-700/50 flex items-center justify-between">
                                        <div>
                                            <p className="text-white font-semibold">{c.label}</p>
                                            <p className="text-gray-400 text-xs mt-0.5">{c.mbps} Mbps</p>
                                        </div>
                                        <p className={`font-semibold ${c.isFaster ? "text-green-400" : "text-gray-300"}`}>{c.time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}