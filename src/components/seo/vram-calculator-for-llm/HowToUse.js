const steps = [
    {
        number: "01",
        title: "Choose your use case",
        text:
            "Select LLM / AI if you are estimating VRAM for a local model, or Gaming if you want to estimate memory needs for a game.",
    },
    {
        number: "02",
        title: "Enter your parameters",
        text:
            "For LLMs, enter model size, quantization, context length, and batch size. For gaming, choose resolution, texture quality, ray tracing, and mods.",
    },
    {
        number: "03",
        title: "Read the VRAM breakdown",
        text:
            "The calculator shows where your memory is going, including model weights, KV cache, runtime overhead, or gaming graphics memory.",
    },
    {
        number: "04",
        title: "Check GPU compatibility",
        text:
            "Compare your estimated VRAM requirement with common GPU tiers to see which cards fit and which provide extra headroom.",
    },
];

export default function HowToUse() {
    return (
        <section
            id="how-to-use"
            className="scroll-mt-24"
        >
            <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Getting Started
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-100">
                    How to Use This Tool
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                    Use the calculator in four simple steps
                    to estimate your VRAM requirement and
                    find a suitable GPU memory tier.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5"
                    >
                        <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                            STEP {step.number}
                        </span>

                        <h3 className="mt-3 text-base font-semibold text-slate-200">
                            {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            {step.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}