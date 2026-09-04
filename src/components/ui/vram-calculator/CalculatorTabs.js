"use client";

import { useState } from "react";
import LlmCalculator from "./LlmCalculator";
import GamingCalculator from "./GamingCalculator";

const tabs = [
    {
        id: "llm",
        label: "LLM / AI",
        description: "Local models & inference",
    },
    {
        id: "gaming",
        label: "Gaming",
        description: "Resolution & graphics",
    },
];

export default function CalculatorTabs() {
    const [activeTab, setActiveTab] = useState("llm");

    return (
        <div>
            {/* Tab switcher */}
            <div className="mx-auto mb-8 grid max-w-xl grid-cols-2 gap-2 rounded-xl border border-slate-800 bg-slate-900/80 p-1.5">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={`rounded-lg px-3 py-3 text-left transition-all duration-200 sm:px-5 ${
                                isActive
                                    ? "bg-cyan-500/10 text-cyan-300 shadow-sm ring-1 ring-cyan-500/30"
                                    : "text-slate-400 hover:bg-slate-800/70 hover:text-slate-200"
                            }`}
                        >
                            <span className="block text-sm font-semibold sm:text-base">
                                {tab.label}
                            </span>

                            <span
                                className={`mt-0.5 hidden text-xs sm:block ${
                                    isActive
                                        ? "text-cyan-400/70"
                                        : "text-slate-500"
                                }`}
                            >
                                {tab.description}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Calculator content */}
            {activeTab === "llm" ? (
                <LlmCalculator />
            ) : (
                <GamingCalculator />
            )}
        </div>
    );
}