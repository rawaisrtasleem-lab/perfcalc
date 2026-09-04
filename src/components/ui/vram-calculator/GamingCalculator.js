"use client";

import { useMemo, useState } from "react";
import GamingInputs from "./GamingInputs";
import VramResults from "./VramResults";

import { calculateGamingVram } from "@/lib/vram-calculator/gamingCalculations";
import { getGpuCompatibility } from "@/lib/vram-calculator/gpuCompatibility";

const DEFAULT_VALUES = {
    resolution: "1440p",
    textureQuality: "high",
    rayTracing: "off",
    mods: "none",
};

export default function GamingCalculator() {
    const [values, setValues] = useState(DEFAULT_VALUES);

    const result = useMemo(() => {
        return calculateGamingVram(values);
    }, [values]);

    const gpuCompatibility = useMemo(() => {
        return getGpuCompatibility(result.recommendedVram);
    }, [result.recommendedVram]);

    function updateValue(name, value) {
        setValues((current) => ({
            ...current,
            [name]: value,
        }));
    }

    function resetCalculator() {
        setValues(DEFAULT_VALUES);
    }

    return (
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            {/* Inputs */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-6">
                <div className="mb-6">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                        Gaming
                    </p>

                    <h2 className="text-xl font-bold text-slate-100 sm:text-2xl">
                        Graphics Configuration
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        Choose your resolution, texture quality, ray tracing,
                        and mod level.
                    </p>
                </div>

                <GamingInputs
                    values={values}
                    onChange={updateValue}
                />

                <button
                    type="button"
                    onClick={resetCalculator}
                    className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
                >
                    Reset to Default
                </button>
            </div>

            {/* Results */}
            <VramResults
                mode="gaming"
                result={result}
                gpuCompatibility={gpuCompatibility}
            />
        </div>
    );
}