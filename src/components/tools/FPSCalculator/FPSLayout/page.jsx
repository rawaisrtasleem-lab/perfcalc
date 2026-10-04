"use client";

import { useState } from "react";
import CPUSelect from "../CPUSelect";
import GPUSelect from "../GPUSelect";
import GameSettings from "../GameSettings";
import FPSResult from "../FPSResult";
import cpuData from "@/data/cpu2";
import gpuData from "@/data/gpu2";

export default function FPSLayout() {
  const [result, setResult] = useState(null);
  const [cpu, setCpu] = useState(cpuData[0]);
  const [gpu, setGpu] = useState(gpuData[0]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#0F1628] via-[#0F1628] to-[#0B0F19] text-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
            <span className="text-xs sm:text-sm font-semibold text-indigo-400 uppercase tracking-wider">
              Performance estimator
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
            FPS Calculator
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed">
            Choose your processor, graphics card, game, and display settings to get a
            consistent FPS estimate, monitor refresh-rate check, and likely hardware bottleneck.
          </p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <CPUSelect
              value={cpu.value}
              onChange={(value) => setCpu(cpuData.find((item) => item.value === value))}
            />
            <GPUSelect
              value={gpu.value}
              onChange={(value) => setGpu(gpuData.find((item) => item.value === value))}
            />
            <GameSettings
              cpu={cpu}
              gpu={gpu}
              setResult={setResult}
            />

            <div className="lg:hidden mt-6">
              <FPSResult result={result} />
            </div>
          </div>

          <div className="hidden lg:block">
            <FPSResult result={result} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { title: "Repeatable estimates", desc: "The same hardware and settings produce the same result; changing a selection updates the estimate." },
            { title: "Refresh-rate check", desc: "See whether the estimate reaches your monitor's selected 60, 144, or 240 Hz target." },
            { title: "Bottleneck insight", desc: "Compare CPU and GPU benchmark scores to identify which component may limit performance." },
            { title: "Treat as a guide", desc: "Drivers, game patches, quality settings, and thermals can make real gameplay differ from this estimate." }
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-5 transition-colors hover:border-indigo-500/40"
            >
              <h3 className="text-base font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
