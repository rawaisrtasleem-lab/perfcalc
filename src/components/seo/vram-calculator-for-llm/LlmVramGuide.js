export default function LlmVramGuide() {
    return (
        <div className="space-y-12 md:space-y-16">
            <section
                id="is-6gb-enough"
                className="scroll-mt-24"
            >
                <h2 className="text-2xl font-bold text-slate-100">
                    Is 6GB VRAM Enough for a Local LLM?
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                    <p>
                        Six gigabytes can handle smaller
                        models reasonably well,
                        particularly 3B to 4B models using
                        lower-bit quantization.
                    </p>

                    <p>
                        A 7B-class model can become much
                        tighter once context memory and
                        runtime overhead are included. For
                        regular 7B model use, 8GB to 12GB
                        gives more practical room for
                        context and higher-quality
                        quantization.
                    </p>
                </div>
            </section>

            <section
                id="llm-inference-vram"
                className="scroll-mt-24"
            >
                <h2 className="text-2xl font-bold text-slate-100">
                    How Much VRAM for LLM Inference?
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                    <p>
                        The basic estimate can be expressed
                        as:
                    </p>

                    <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-4 text-center font-mono text-sm font-semibold text-cyan-300 sm:text-base">
                        VRAM ≈ Model Weights + KV Cache +
                        Runtime Overhead
                    </div>

                    <p>
                        Weight memory is primarily
                        determined by parameter count and
                        precision. FP32 uses roughly four
                        bytes per parameter, FP16 or BF16
                        roughly two, Q8 around one, and Q4
                        roughly half a byte before format
                        overhead.
                    </p>

                    <p>
                        Runtime overhead commonly adds an
                        additional safety allowance for
                        activations, framework buffers,
                        CUDA context, and other temporary
                        allocations.
                    </p>
                </div>
            </section>

            <section
                id="llm-training-vram"
                className="scroll-mt-24"
            >
                <h2 className="text-2xl font-bold text-slate-100">
                    How Much VRAM to Train an LLM?
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                    <p>
                        Training generally requires far
                        more memory than inference because
                        the system may need to retain
                        gradients, optimizer states,
                        activations, and model weights at
                        the same time.
                    </p>

                    <p>
                        Parameter-efficient techniques such
                        as LoRA and QLoRA reduce this
                        requirement by freezing most of the
                        base model and training a smaller
                        set of adapter parameters.
                    </p>
                </div>
            </section>

            <section
                id="chatgpt-vram"
                className="scroll-mt-24"
            >
                <h2 className="text-2xl font-bold text-slate-100">
                    How Much VRAM Does ChatGPT Use?
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                    <p>
                        Exact production VRAM figures for
                        major hosted AI systems are not
                        publicly specified in a way that
                        maps directly to a single consumer
                        GPU.
                    </p>

                    <p>
                        Large cloud models can be
                        distributed across multiple
                        accelerators and servers, whereas a
                        local model must fit within the
                        resources available on your own
                        hardware or rely on offloading.
                    </p>
                </div>
            </section>

            <section
                id="calculate-vram-step-by-step"
                className="scroll-mt-24"
            >
                <h2 className="text-2xl font-bold text-slate-100">
                    How to Calculate VRAM for LLMs,
                    Step by Step
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                    <p>
                        Consider an 8B model using Q4
                        quantization and a 4K context
                        window. At approximately half a
                        byte per parameter, the model
                        weights alone are around 4GB.
                    </p>

                    <p>
                        The KV cache then adds memory based
                        on context length, batch size, and
                        the model architecture. Adding
                        runtime overhead on top puts a
                        practical estimate for this example
                        in roughly the 6GB to 7GB range.
                    </p>
                </div>
            </section>
        </div>
    );
}