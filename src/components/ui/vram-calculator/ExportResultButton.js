import { useState } from "react";

function buildLlmText(result) {
    return [
        "PerfCalcPro - VRAM Calculator",
        "",
        "Mode: LLM / AI Inference",
        `Model Size: ${result.parameters}B`,
        `Quantization: ${result.quantization.toUpperCase()}`,
        `Context Length: ${Number(
            result.contextLength
        ).toLocaleString()} tokens`,
        `Batch Size: ${result.batchSize}`,
        "",
        `Model Weights: ${result.modelWeights.toFixed(
            2
        )} GB`,
        `KV Cache: ${result.kvCache.toFixed(
            2
        )} GB`,
        `Runtime Overhead: ${result.overhead.toFixed(
            2
        )} GB`,
        `Estimated Total VRAM: ${result.totalVram.toFixed(
            2
        )} GB`,
        "",
        "Generated with PerfCalcPro VRAM Calculator.",
    ].join("\n");
}

function buildGamingText(result) {
    return [
        "PerfCalcPro - VRAM Calculator",
        "",
        "Mode: Gaming",
        `Resolution: ${result.resolution}`,
        `Texture Quality: ${result.textureQuality}`,
        `Ray Tracing: ${result.rayTracing}`,
        `Mods: ${result.mods}`,
        "",
        `Estimated Game Usage: ${result.estimatedUsage.toFixed(
            1
        )} GB`,
        `Recommended VRAM: ${result.recommendedVram.toFixed(
            1
        )} GB`,
        "",
        "Generated with PerfCalcPro VRAM Calculator.",
    ].join("\n");
}

export default function ExportResultButton({
    mode,
    result,
}) {
    const [copied, setCopied] =
        useState(false);

    const text =
        mode === "llm"
            ? buildLlmText(result)
            : buildGamingText(result);

    async function copyResult() {
        try {
            await navigator.clipboard.writeText(
                text
            );

            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 1800);
        } catch {
            setCopied(false);
        }
    }

    function downloadResult() {
        const blob = new Blob([text], {
            type: "text/plain;charset=utf-8",
        });

        const url =
            URL.createObjectURL(blob);

        const link =
            document.createElement("a");

        link.href = url;
        link.download =
            "perfcalcpro-vram-result.txt";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }

    return (
        <div className="grid grid-cols-2 gap-3">
            <button
                type="button"
                onClick={copyResult}
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:text-cyan-300"
            >
                {copied
                    ? "Copied!"
                    : "Copy Result"}
            </button>

            <button
                type="button"
                onClick={downloadResult}
                className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-500/15"
            >
                Download Result
            </button>
        </div>
    );
}