export default function VramOverview() {
    return (
        <section
            id="vram-vs-system-ram"
            className="scroll-mt-24"
        >
            <h2 className="text-2xl font-bold text-slate-100">
                Overview: VRAM vs System RAM
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                <p>
                    VRAM is memory located directly on the
                    graphics card and is designed to feed
                    the GPU at very high bandwidth. That
                    makes it especially important for both
                    local AI inference and high-resolution
                    gaming workloads.
                </p>

                <p>
                    System RAM can also hold model data
                    when software supports CPU inference
                    or offloading, but moving data between
                    system memory and the GPU can reduce
                    performance compared with keeping the
                    workload in VRAM.
                </p>

                <p>
                    Quantization changes the equation
                    significantly. Lower precision formats
                    reduce the number of bytes needed for
                    each model parameter, allowing larger
                    models to fit into the same amount of
                    GPU memory.
                </p>
            </div>
        </section>
    );
}