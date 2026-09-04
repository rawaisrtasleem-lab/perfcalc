const rows = [
    {
        vram: "6GB",
        gpu: "RTX 3060 6GB",
        fit: "3B–4B Q4; 7B is tight",
    },
    {
        vram: "8GB",
        gpu: "RTX 4060",
        fit: "7B–8B Q4",
    },
    {
        vram: "12GB",
        gpu: "RTX 4070 / RTX 5070",
        fit: "8B–13B Q4–Q5",
    },
    {
        vram: "16GB",
        gpu: "16GB-class GPUs",
        fit: "13B–14B at higher quantization; up to ~20B Q4",
    },
    {
        vram: "24GB",
        gpu: "RTX 4090",
        fit: "30B–34B Q4; smaller models at high precision",
    },
    {
        vram: "32GB",
        gpu: "32GB-class GPU",
        fit: "32B–34B Q5–Q8; larger Q4 models",
    },
    {
        vram: "48GB+",
        gpu: "Multi-GPU setup",
        fit: "70B-class Q4 workloads",
    },
];

export default function ModelCompatibility() {
    return (
        <section
            id="model-size-by-gpu"
            className="scroll-mt-24"
        >
            <h2 className="text-2xl font-bold text-slate-100">
                What Size LLM Can I Run on My GPU?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                The table below gives practical model-size
                ranges by VRAM tier. Actual requirements
                still vary with context length, batch size,
                model architecture, and inference engine.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-800">
                <table className="min-w-[700px] w-full text-left text-sm">
                    <thead className="bg-slate-900">
                        <tr>
                            <th className="px-5 py-4 font-semibold text-slate-300">
                                VRAM Tier
                            </th>

                            <th className="px-5 py-4 font-semibold text-slate-300">
                                Example GPU
                            </th>

                            <th className="px-5 py-4 font-semibold text-slate-300">
                                Realistic Model Fit
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-800">
                        {rows.map((row) => (
                            <tr
                                key={row.vram}
                                className="bg-slate-950/40"
                            >
                                <td className="px-5 py-4 font-semibold text-cyan-300">
                                    {row.vram}
                                </td>

                                <td className="px-5 py-4 text-slate-400">
                                    {row.gpu}
                                </td>

                                <td className="px-5 py-4 text-slate-400">
                                    {row.fit}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}