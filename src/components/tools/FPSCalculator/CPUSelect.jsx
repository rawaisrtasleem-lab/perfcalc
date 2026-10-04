"use client";

import { Cpu } from "lucide-react";
import Select from "@/components/ui/Select";
import cpuData from "@/data/cpu2";

export default function CPUSelect({ value, onChange }) {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-4 sm:p-5">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-400 sm:text-base">
        <Cpu size={18} /> Select your CPU
      </h3>
      <Select
        id="cpu-select"
        label="Processor"
        options={cpuData.map((cpu) => ({ label: cpu.label, value: cpu.value }))}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}