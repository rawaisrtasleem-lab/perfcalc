const models = [
    {
        model: "Mistral 7B",
        parameters: "7B",
        fp16: "~17GB",
        q8: "~9GB",
        q4: "~5–6GB",
    },
    {
        model: "Llama 3.1 8B",
        parameters: "8B",
        fp16: "~19GB",
        q8: "~10GB",
        q4: "~6GB",
    },
    {
        model: "Qwen3 14B",
        parameters: "14B",
        fp16: "~34GB",
        q8: "~17GB",
        q4: "~9–10GB",
    },
    {
        model: "Llama 2 13B",
        parameters: "13B",
        fp16: "~31GB",
        q8: "~16GB",
        q4: "~8–10GB",
    },
    {
        model: "Qwen3 32B",
        parameters: "32B",
        fp16: "~77GB",
        q8: "~38GB",
        q4: "~20–22GB",
    },
    {
        model: "Llama 70B class",
        parameters: "70B",
        fp16: "~168GB",
        q8: "~84GB",
        q4: "~40–45GB",
    },
    {
        model: "Llama 3.1 405B",
        parameters: "405B",
        fp16: "~970GB",
        q8: "~485GB",
        q4: "~240–250GB",
    },
];

export default function PopularModels() {
    return (
        <section
            id="popular-llm-vram"
            className="scroll-mt-24"
        >
            <h2 className="text-2xl font-bold text-slate-100">
                VRAM Requirements for Popular LLMs
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                These values are approximate examples for
                comparing model weight and standard
                overhead requirements. Longer contexts can
                require additional KV cache memory.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-800">
                <table className="min-w-[720px] w-full text-left text-sm">
                    <thead className="bg-slate-900">
                        <tr>
                            <th className="px-5 py-4 font-semibold text-slate-300">
                                Model
                            </th>

                            <th className="px-5 py-4 font-semibold text-slate-300">
                                Parameters
                            </th>

                            <th className="px-5 py-4 font-semibold text-slate-300">
                                FP16
                            </th>

                            <th className="px-5 py-4 font-semibold text-slate-300">
                                Q8
                            </th>

                            <th className="px-5 py-4 font-semibold text-slate-300">
                                Q4
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-800">
                        {models.map((row) => (
                            <tr
                                key={row.model}
                                className="bg-slate-950/40"
                            >
                                <td className="px-5 py-4 font-medium text-slate-200">
                                    {row.model}
                                </td>

                                <td className="px-5 py-4 text-slate-400">
                                    {row.parameters}
                                </td>

                                <td className="px-5 py-4 text-slate-400">
                                    {row.fp16}
                                </td>

                                <td className="px-5 py-4 text-slate-400">
                                    {row.q8}
                                </td>

                                <td className="px-5 py-4 font-medium text-cyan-300">
                                    {row.q4}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-500">
                These figures should be treated as
                estimates rather than guaranteed minimums.
                Model architecture, quantization format,
                inference software, KV cache, and runtime
                buffers can change real memory usage.
            </p>
        </section>
    );
}