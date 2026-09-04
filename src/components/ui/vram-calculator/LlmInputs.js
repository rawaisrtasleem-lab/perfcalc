import {
    MODEL_SIZE_OPTIONS,
    QUANTIZATION_OPTIONS,
    CONTEXT_LENGTH_OPTIONS,
    BATCH_SIZE_OPTIONS,
} from "@/lib/vram-calculator/vramData";

const selectClass =
    "w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10";

const labelClass =
    "mb-2 block text-sm font-medium text-slate-300";

export default function LlmInputs({
    values,
    onChange,
}) {
    return (
        <div className="space-y-6">
            {/* Model size */}
            <div>
                <label
                    htmlFor="model-parameters"
                    className={labelClass}
                >
                    Model Parameters
                </label>

                <div className="relative">
                    <input
                        id="model-parameters"
                        type="number"
                        min="0.1"
                        step="0.1"
                        value={values.parameters}
                        onChange={(event) =>
                            onChange(
                                "parameters",
                                Number(event.target.value)
                            )
                        }
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 pr-14 text-sm text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                        placeholder="e.g. 8"
                    />

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                        B
                    </span>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    Enter the model size in billions of
                    parameters.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                    {MODEL_SIZE_OPTIONS
                        .slice(0, 10)
                        .map((size) => {
                            const isActive =
                                Number(values.parameters) ===
                                size;

                            return (
                                <button
                                    key={size}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() =>
                                        onChange(
                                            "parameters",
                                            size
                                        )
                                    }
                                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                                        isActive
                                            ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
                                            : "border-slate-800 bg-slate-950 text-slate-500 hover:border-slate-700 hover:text-slate-300"
                                    }`}
                                >
                                    {size}B
                                </button>
                            );
                        })}
                </div>
            </div>

            {/* Quantization */}
            <div>
                <label
                    htmlFor="quantization"
                    className={labelClass}
                >
                    Quantization
                </label>

                <select
                    id="quantization"
                    value={values.quantization}
                    onChange={(event) =>
                        onChange(
                            "quantization",
                            event.target.value
                        )
                    }
                    className={selectClass}
                >
                    {QUANTIZATION_OPTIONS.map(
                        (option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label} —{" "}
                                {option.description}
                            </option>
                        )
                    )}
                </select>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    Lower-bit quantization reduces model
                    weight memory but can slightly affect
                    output quality.
                </p>
            </div>

            {/* Context */}
            <div>
                <label
                    htmlFor="context-length"
                    className={labelClass}
                >
                    Context Length
                </label>

                <select
                    id="context-length"
                    value={values.contextLength}
                    onChange={(event) =>
                        onChange(
                            "contextLength",
                            Number(event.target.value)
                        )
                    }
                    className={selectClass}
                >
                    {CONTEXT_LENGTH_OPTIONS.map(
                        (context) => (
                            <option
                                key={context}
                                value={context}
                            >
                                {context.toLocaleString()}{" "}
                                tokens
                            </option>
                        )
                    )}
                </select>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    Longer context windows increase KV
                    cache memory usage.
                </p>
            </div>

            {/* Batch size */}
            <div>
                <label
                    htmlFor="batch-size"
                    className={labelClass}
                >
                    Batch Size
                </label>

                <select
                    id="batch-size"
                    value={values.batchSize}
                    onChange={(event) =>
                        onChange(
                            "batchSize",
                            Number(event.target.value)
                        )
                    }
                    className={selectClass}
                >
                    {BATCH_SIZE_OPTIONS.map(
                        (batch) => (
                            <option
                                key={batch}
                                value={batch}
                            >
                                {batch}
                            </option>
                        )
                    )}
                </select>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    Larger batches increase cache and
                    runtime memory requirements.
                </p>
            </div>
        </div>
    );
}