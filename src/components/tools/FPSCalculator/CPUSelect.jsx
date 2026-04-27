"use client";

import { Cpu } from "lucide-react";
import Select from "@/components/ui/Select";
import cpuData from "@/data/cpu2";

export default function CPUSelect() {
  return (
    <div className="bg-slate-900 border border-slate-800 m-8  rounded-xl p-3 sm:p-6">
      {/* Heading */}
      <h3 className="flex items-center gap-2 text-green-400 mb-4 text-base m-5 sm:text-lg font-semibold">
        <Cpu size={18} /> Select Your CPU
      </h3>

      {/* Styled Select */}
      <Select
  options={cpuData.map(cpu => ({
    label: cpu.label,
    value: cpu.value,
  }))}
  className="w-full rounded-md bg-slate-800 text-blue-900 border m-8  border-slate-700 
             focus:ring-2 focus:ring-green-500 focus:border-green-500 
             placeholder-slate-400 text-sm sm:text-base"
/>
    </div>
  );
}