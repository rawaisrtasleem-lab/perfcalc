"use client";

import { useMemo, useState } from "react";
import LlmInputs from "./LlmInputs";
import VramResults from "./VramResults";

import { calculateLlmVram } from "@/lib/vram-calculator/llmCalculations";
import { getGpuCompatibility } from "@/lib/vram-calculator/gpuCompatibility";

const DEFAULT_VALUES = {
    parameters: 8,
    quantization: "q4",
    contextLength: 4096,
    batchSize: 1,
};

export default function LlmCalculator() {
    const [values, setValues] = useState(DEFAULT_VALUES);

    const result = useMemo(() => {
        return calculateLlmVram(values);
    }, [values]);

    const gpuCompatibility = useMemo(() => {
        return getGpuCompatibility(result.totalVram);
    }, [result.totalVram]);

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
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        LLM Inference
                    </p>

                    <h2 className="text-xl font-bold text-slate-100 sm:text-2xl">
                        Model Configuration
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        Enter your model size, quantization, context length,
                        and batch size.
                    </p>
                </div>

                <LlmInputs
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
                mode="llm"
                result={result}
                gpuCompatibility={gpuCompatibility}
            />
        </div>
    );
}