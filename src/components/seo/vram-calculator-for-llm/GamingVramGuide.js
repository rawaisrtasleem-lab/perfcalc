const tiers = [
    {
        resolution: "1080p",
        recommended: "6–8GB",
        description:
            "Generally suitable for high-quality textures in many games.",
    },
    {
        resolution: "1440p",
        recommended: "8–12GB",
        description:
            "Provides additional room for high textures and heavier assets.",
    },
    {
        resolution: "4K",
        recommended: "12GB+",
        description:
            "Higher resolutions increase memory pressure significantly.",
    },
    {
        resolution: "4K + RT / Mods",
        recommended: "16–24GB",
        description:
            "Ray tracing and high-resolution texture packs can add several gigabytes.",
    },
];

export default function GamingVramGuide() {
    return (
        <section
            id="gaming-vram"
            className="scroll-mt-24"
        >
            <h2 className="text-2xl font-bold text-slate-100">
                Gaming VRAM Guide
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                <p>
                    Gaming VRAM usage is heavily affected by
                    resolution and texture quality. Moving
                    from 1080p to 1440p or 4K increases the
                    amount of graphics data that needs to
                    remain available to the GPU.
                </p>

                <p>
                    Ray tracing and high-resolution texture
                    mods can increase requirements further,
                    particularly at 4K where the base
                    workload is already substantially
                    larger.
                </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {tiers.map((tier) => (
                    <div
                        key={tier.resolution}
                        className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <h3 className="font-semibold text-slate-200">
                                {tier.resolution}
                            </h3>

                            <span className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-xs font-bold text-indigo-300">
                                {tier.recommended}
                            </span>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-slate-500">
                            {tier.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}