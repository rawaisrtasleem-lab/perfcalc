"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Cpu, Gpu, Zap, ChevronDown, Info, TrendingUp } from "lucide-react"

import cpuData from "@/data/cpu2"
import gpuData from "@/data/gpu2"
import { getBottleneckAnalysis } from "@/components/calculator/calculateBottleneck"

export default function BottleneckCalculator() {
    const [cpu, setCpu] = useState("")
    const [gpu, setGpu] = useState("")
    const [resolution, setResolution] = useState("1080p")
    const [result, setResult] = useState(null)
    const [analysis, setAnalysis] = useState(null)

    const clearResult = () => {
        setResult(null)
        setAnalysis(null)
    }

    // Group CPUs by category
    const cpusByCategory = cpuData.reduce((acc, cpu) => {
        if (!acc[cpu.category]) acc[cpu.category] = []
        acc[cpu.category].push(cpu)
        return acc
    }, {})

    // Group GPUs by category
    const gpusByCategory = gpuData.reduce((acc, gpu) => {
        if (!acc[gpu.category]) acc[gpu.category] = []
        acc[gpu.category].push(gpu)
        return acc
    }, {})

    const handleCalculate = () => {
        if (!cpu || !gpu) return

        const detailedAnalysis = getBottleneckAnalysis(cpu, gpu, resolution)
        if (!detailedAnalysis) {
            setResult(null)
            setAnalysis(null)
            return
        }
        setResult(detailedAnalysis.bottleneck)
        setAnalysis(detailedAnalysis)
    }

    const getBottleneckColor = (gap) => {
        if (gap < 15) return "from-green-500 to-emerald-500"
        if (gap < 35) return "from-yellow-500 to-amber-500"
        return "from-red-500 to-orange-500"
    }

    const getBottleneckLabel = (gap) => {
        if (gap < 15) return "Close tiers"
        if (gap < 35) return "Some mismatch"
        return "Large tier gap"
    }

    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
        >
            {/* Card container */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-6 md:p-8 shadow-2xl">
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                        <Zap size={24} className="text-cyan-400" />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">Bottleneck Calculator</h2>
                        <p className="text-xs md:text-sm text-gray-400">Analyze your CPU & GPU compatibility</p>
                    </div>
                </div>

                {/* Form inputs */}
                <div className="space-y-5 md:space-y-6">
                    {/* CPU Select */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <label htmlFor="bottleneck-cpu" className="text-xs md:text-sm text-gray-300 font-semibold flex items-center gap-2 mb-2.5">
                            <Cpu size={16} className="text-cyan-400" />
                            CPU Processor
                        </label>
                        <div className="relative">
                            <select
                                id="bottleneck-cpu"
                                value={cpu}
                                onChange={(e) => {
                                    setCpu(e.target.value)
                                    clearResult()
                                }}
                                className="w-full appearance-none bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-cyan-500/30 text-white text-sm md:text-base py-3 md:py-3.5 px-4 rounded-lg focus:outline-none focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 cursor-pointer"
                            >
                                <option value="">Select CPU</option>
                                {Object.entries(cpusByCategory).map(([category, cpus]) => (
                                    <optgroup key={category} label={category} className="bg-slate-900">
                                        {cpus.map((c) => (
                                            <option key={c.value} value={c.value} className="bg-slate-900">
                                                {c.label}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                            <ChevronDown size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* GPU Select */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <label htmlFor="bottleneck-gpu" className="text-xs md:text-sm text-gray-300 font-semibold flex items-center gap-2 mb-2.5">
                            <Gpu size={16} className="text-blue-400" />
                            GPU Graphics Card
                        </label>
                        <div className="relative">
                            <select
                                id="bottleneck-gpu"
                                value={gpu}
                                onChange={(e) => {
                                    setGpu(e.target.value)
                                    clearResult()
                                }}
                                className="w-full appearance-none bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-cyan-500/30 text-white text-sm md:text-base py-3 md:py-3.5 px-4 rounded-lg focus:outline-none focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 cursor-pointer"
                            >
                                <option value="">Select GPU</option>
                                {Object.entries(gpusByCategory).map(([category, gpus]) => (
                                    <optgroup key={category} label={category} className="bg-slate-900">
                                        {gpus.map((g) => (
                                            <option key={g.value} value={g.value} className="bg-slate-900">
                                                {g.label}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                            <ChevronDown size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                    </motion.div>
                    <div>
                        <label htmlFor="bottleneck-resolution" className="mb-2.5 block text-xs font-semibold text-gray-300 md:text-sm">
                            Gaming resolution
                        </label>
                        <div className="relative">
                            <select
                                id="bottleneck-resolution"
                                value={resolution}
                                onChange={(event) => {
                                    setResolution(event.target.value)
                                    clearResult()
                                }}
                                className="w-full appearance-none rounded-lg border border-cyan-500/30 bg-gradient-to-r from-slate-700/50 to-slate-800/50 px-4 py-3 text-sm text-white transition-all duration-300 focus:border-cyan-500/70 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 md:py-3.5 md:text-base"
                            >
                                <option value="1080p" className="bg-slate-900">1080p — CPU-sensitive</option>
                                <option value="1440p" className="bg-slate-900">1440p — balanced</option>
                                <option value="4k" className="bg-slate-900">4K — GPU-sensitive</option>
                            </select>
                            <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Calculate button */}
                <motion.button
                    onClick={handleCalculate}
                    disabled={!cpu || !gpu}
                    whileHover={{ scale: (!cpu || !gpu) ? 1 : 1.02 }}
                    whileTap={{ scale: (!cpu || !gpu) ? 1 : 0.98 }}
                    className={`w-full mt-7 md:mt-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                        cpu && gpu
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/40"
                            : "bg-gray-700/50 text-gray-500 cursor-not-allowed"
                    }`}
                >
                    <Zap size={18} />
                    Compare hardware tiers
                </motion.button>

                {/* Result */}
                {result !== null && analysis && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-8 md:mt-10 space-y-4"
                    >
                        {/* Main Result Card */}
                        <div className="p-5 md:p-7 bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-cyan-500/30 rounded-xl">
                            {/* Percentage and label */}
                            <div className="text-center mb-5 md:mb-6">
                                <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mb-2">Relative hardware tier gap</p>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                                >
                                    <p className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${getBottleneckColor(result)}`}>
                                        {result}%
                                    </p>
                                </motion.div>
                                <p className="text-sm md:text-base text-gray-300 font-semibold mt-2">
                                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${getBottleneckColor(result)}`}>
                                        {getBottleneckLabel(result)}
                                    </span>
                                </p>
                            </div>

                            {/* Progress bar */}
                            <div className="space-y-2 mb-5">
                                <div className="flex justify-between text-xs text-gray-400">
                                    <span>0%</span>
                                    <span>100% relative gap</span>
                                </div>

                                <p className="mt-5 text-xs leading-relaxed text-slate-400">
                                    This compares each component&apos;s position within its own benchmark list. It is not a measured FPS loss or a live system test.
                                </p>
                                <div className="w-full h-3 bg-slate-700/50 rounded-full overflow-hidden border border-slate-600/50">
                                    <motion.div
                                        className={`h-full bg-gradient-to-r ${getBottleneckColor(result)} shadow-lg`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${result}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    />
                                </div>
                            </div>

                            {/* Recommendation Title */}
                            <div className="flex items-start gap-3">
                                <Info size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm md:text-base font-semibold text-white mb-1">
                                        {analysis.recommendation.title}
                                    </p>
                                    <p className="text-xs md:text-sm text-gray-300">
                                        {analysis.recommendation.description}
                                    </p>
                                    <p className="text-xs md:text-sm text-cyan-400 font-semibold mt-2">
                                        💡 {analysis.recommendation.suggestion}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hardware Details Card */}
                        <div className="p-5 md:p-6 bg-gradient-to-br from-slate-700/20 to-slate-800/20 border border-blue-500/20 rounded-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <TrendingUp size={16} className="text-blue-400" />
                                <h3 className="text-sm md:text-base font-semibold text-white">Hardware Details</h3>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                                <div className="bg-slate-800/40 p-3 rounded border border-slate-700/50">
                                    <p className="text-gray-400 mb-1">CPU</p>
                                    <p className="text-white font-semibold">{analysis.cpu.label}</p>
                                    <p className="text-gray-400 text-xs mt-1">{analysis.cpu.cores} cores • {analysis.cpu.benchmarkScore} pts</p>
                                </div>
                                <div className="bg-slate-800/40 p-3 rounded border border-slate-700/50">
                                    <p className="text-gray-400 mb-1">GPU</p>
                                    <p className="text-white font-semibold">{analysis.gpu.label}</p>
                                    <p className="text-gray-400 text-xs mt-1">{analysis.gpu.vram} • {analysis.gpu.benchmarkScore} pts</p>
                                </div>
                                <div className="bg-slate-800/40 p-3 rounded border border-slate-700/50">
                                    <p className="text-gray-400 mb-1">Resolution context</p>
                                    <p className="text-white font-semibold">{analysis.resolution}</p>
                                </div>
                                <div className="bg-slate-800/40 p-3 rounded border border-slate-700/50">
                                    <p className="text-gray-400 mb-1">Likely limiting part</p>
                                    <p className="text-white font-semibold">{analysis.likelyLimiter}</p>
                                </div>
                                <div className="bg-slate-800/40 p-3 rounded border border-slate-700/50">
                                    <p className="text-gray-400 mb-1">CPU Architecture</p>
                                    <p className="text-white font-semibold text-xs">{analysis.details.cpuArchitecture}</p>
                                </div>
                                <div className="bg-slate-800/40 p-3 rounded border border-slate-700/50">
                                    <p className="text-gray-400 mb-1">GPU Architecture</p>
                                    <p className="text-white font-semibold text-xs">{analysis.details.gpuArchitecture}</p>
                                </div>
                                <div className="bg-slate-800/40 p-3 rounded border border-slate-700/50">
                                    <p className="text-gray-400 mb-1">CPU TDP</p>
                                    <p className="text-white font-semibold">{analysis.details.cpuTdp}</p>
                                </div>
                                <div className="bg-slate-800/40 p-3 rounded border border-slate-700/50">
                                    <p className="text-gray-400 mb-1">GPU TDP</p>
                                    <p className="text-white font-semibold">{analysis.details.gpuTdp}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
        </>
    )
}