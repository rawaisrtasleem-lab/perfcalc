"use client";

import { Monitor } from "lucide-react";
import Select from "@/components/ui/Select";
import gpuData from "@/data/gpu2";

export default function GPUSelect() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 m-8 sm:p-6">
      {/* Heading */}
      <h3 className="flex items-center gap-2 text-green-400 m-8  mb-4 text-base sm:text-lg font-semibold">
        <Monitor size={18} /> Select GPU
      </h3>

      {/* Styled Select */}
      <Select
        options={gpuData}
        className="w-full rounded-md bg-slate-800 text-blue-900 border m-8 border-slate-700 
                   focus:ring-2 focus:ring-green-500 focus:border-green-500 
                   placeholder-slate-400 text-sm sm:text-base"
      />
    </div>
  );
}