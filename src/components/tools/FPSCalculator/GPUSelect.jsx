"use client";

import { Monitor } from "lucide-react";
import Select from "@/components/ui/Select";
import gpuData from "@/data/gpu2";

export default function GPUSelect({ value, onChange }) {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-4 sm:p-5">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-400 sm:text-base">
        <Monitor size={18} /> Select your GPU
      </h3>
      <Select
        id="gpu-select"
        label="Graphics card"
        options={gpuData}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}