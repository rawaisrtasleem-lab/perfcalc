"use client";

import { useState } from "react";
import CPUSelect from "../CPUSelect";
import GPUSelect from "../GPUSelect";
import GameSettings from "../GameSettings";
import FPSResult from "../FPSResult";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Gauge } from "lucide-react";

export default function FPSLayout() {
  const [result, setResult] = useState(null);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#0F1628] via-[#0F1628] to-[#0B0F19] text-gray-100">
      
      

      {/* Main Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 max-w-6xl lg:max-w-7xl">
        
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
            <span className="text-xs sm:text-sm font-semibold text-indigo-400 uppercase tracking-wider">
              Performance Tool
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
            FPS Calculator 
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed">
               The Frames Per Second (FPS)  analyzing your CPU, GPU, RAM, and 
    resolution settings, this tool provides accurate predictions of performance 
    so you can optimize your hardware and enjoy a better gaming experience.</p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12 sm:mb-16"
        >
          {[
            { icon: TrendingUp, text: "Accurate FPS" },
            { icon: Zap, text: "Instant Results" },
            { icon: Gauge, text: "Deep Analysis" }
          ].map((feature, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 m-8  p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/40 transition-colors"
            >
              <feature.icon className="w-5 h-5 p-8 text-indigo-400 flex-shrink-0" />
              <span className="text-sm font-medium m-8 text-gray-300">{feature.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 m-8">
          
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2 m-8">CPU Selection</label>
              <CPUSelect className="w-full rounded-lg m-8 bg-slate-900/60 border border-slate-700 focus:ring-2 focus:ring-indigo-500 transition-all text-sm py-3 px-4" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2 m-8">GPU Selection</label>
              <GPUSelect className="w-full rounded-lg m-8 bg-slate-900/60 border border-slate-700 focus:ring-2 focus:ring-indigo-500 transition-all text-sm py-3 px-4" />
            </div>

            <GameSettings
              setResult={setResult}
              className="w-full rounded-lg m-8 bg-slate-900/60 border border-slate-700 focus:ring-2 focus:ring-indigo-500 transition-all text-sm md:text-base py-3 px-4"
            />

            {/* Mobile Result */}
            <div className="lg:hidden mt-6">
              <FPSResult result={result} />
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block space-y-6"
          >
            <FPSResult result={result} />
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-6 min-h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs text-slate-500 mb-2">Advertisement</div>
                <div className="w-full h-72 bg-slate-800/30 rounded border border-slate-700/30 flex items-center justify-center text-slate-600">
                  📢 Ad Space
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 m-8  mb-16"
        >
          {[
            { title: "How It Works", desc: "Select your components and game settings, then click calculate for instant FPS estimates." },
            { title: "Accurate Data", desc: "Built with real performance benchmarks from thousands of gaming rigs." },
            { title: "Bottleneck Analysis", desc: "Get insights on CPU/GPU compatibility and performance limitations." },
            { title: "Optimization Tips", desc: "Receive personalized recommendations to boost your gaming performance." }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="p-6 m-8  rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/40 transition-all cursor-pointer"
            >
              <h3 className="text-base font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
