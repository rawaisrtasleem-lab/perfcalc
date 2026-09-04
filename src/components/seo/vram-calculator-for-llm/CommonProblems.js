export default function CommonProblems() {
    return (
        <section
            id="common-problems"
            className="scroll-mt-24"
        >
            <h2 className="text-2xl font-bold text-slate-100">
                Common Problems
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                <p>
                    When a model does not fit in VRAM, the
                    most practical options are usually to
                    lower the quantization level, shorten
                    the context window, reduce batch size,
                    or offload part of the workload to
                    system RAM.
                </p>

                <p>
                    CPU offloading trades performance for
                    additional memory headroom. It can be
                    useful when the model is only slightly
                    larger than your available GPU memory.
                </p>

                <p>
                    Context length is another common cause
                    of out-of-memory errors. A model may
                    load successfully with a short context
                    but fail at a much larger context
                    because the KV cache grows as more
                    tokens are retained.
                </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                    "Use lower quantization",
                    "Reduce context length",
                    "Lower batch size",
                    "Use CPU offloading",
                ].map((item) => (
                    <div
                        key={item}
                        className="rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-slate-300"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
}