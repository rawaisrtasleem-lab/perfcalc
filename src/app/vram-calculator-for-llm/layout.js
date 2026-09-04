export const metadata = {
    title: "VRAM Calculator for LLMs & Gaming | PerfCalcPro",

    description:
        "Free VRAM calculator for AI & LLM models. Find exact GPU VRAM needs by model size, quantization, context length, and batch size. Try it now.",

    alternates: {
        canonical: "https://perfcalcpro.com/vram-calculator-for-llm",
    },

    openGraph: {
        title: "VRAM Calculator for LLMs & Gaming | PerfCalcPro",

        description:
            "Calculate GPU VRAM requirements for local LLMs and gaming based on model size, quantization, context length, resolution, and graphics settings.",

        url: "https://perfcalcpro.com/vram-calculator-for-llm",

        type: "website",

        siteName: "PerfCalcPro",
    },

    twitter: {
        card: "summary",

        title: "VRAM Calculator for LLMs & Gaming | PerfCalcPro",

        description:
            "Calculate VRAM requirements for local LLMs, AI models, and gaming GPUs.",
    },
};

export default function VramCalculatorLayout({ children }) {
    return children;
}