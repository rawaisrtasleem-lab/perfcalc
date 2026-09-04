const features = [
    "Real-time VRAM estimation for model weights, KV cache, and runtime overhead",
    "Gaming estimator for resolution, textures, ray tracing, and mods",
    "GPU compatibility across common VRAM capacity tiers",
    "Quantization options from full precision through Q4",
    "Context-length and batch-size impact on estimated memory",
    "Copyable and downloadable calculator results",
    "FAQ and SoftwareApplication structured data",
];

export default function Features() {
    return (
        <section
            id="features"
            className="scroll-mt-24"
        >
            <h2 className="text-2xl font-bold text-slate-100">
                Features
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                    <div
                        key={feature}
                        className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4"
                    >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                        <p className="text-sm leading-6 text-slate-400">
                            {feature}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}