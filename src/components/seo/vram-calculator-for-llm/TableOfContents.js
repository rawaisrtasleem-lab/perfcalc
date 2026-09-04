const links = [
    {
        href: "#the-tool",
        label: "The VRAM Calculator",
    },
    {
        href: "#how-to-use",
        label: "How to Use This Tool",
    },
    {
        href: "#common-problems",
        label: "Common Problems",
    },
    {
        href: "#vram-vs-system-ram",
        label: "VRAM vs System RAM",
    },
    {
        href: "#features",
        label: "Features",
    },
    {
        href: "#is-6gb-enough",
        label: "Is 6GB VRAM Enough?",
    },
    {
        href: "#llm-inference-vram",
        label: "VRAM for LLM Inference",
    },
    {
        href: "#llm-training-vram",
        label: "VRAM for LLM Training",
    },
    {
        href: "#model-size-by-gpu",
        label: "What Size LLM Can I Run?",
    },
    {
        href: "#chatgpt-vram",
        label: "How Much VRAM Does ChatGPT Use?",
    },
    {
        href: "#calculate-vram-step-by-step",
        label: "Calculate VRAM Step by Step",
    },
    {
        href: "#popular-llm-vram",
        label: "Popular LLM VRAM Requirements",
    },
    {
        href: "#gaming-vram",
        label: "Gaming VRAM Guide",
    },
    {
        href: "#conclusion",
        label: "Conclusion",
    },
    {
        href: "#faq",
        label: "FAQ",
    },
];

export default function TableOfContents() {
    return (
        <nav
            aria-label="Table of contents"
            className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6"
        >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                On This Page
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-100">
                Table of Contents
            </h2>

            <div className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {links.map((link, index) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="group flex items-start gap-3 rounded-lg px-2 py-2 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-cyan-300"
                    >
                        <span className="mt-0.5 min-w-6 text-xs font-semibold text-slate-600 group-hover:text-cyan-500">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{link.label}</span>
                    </a>
                ))}
            </div>
        </nav>
    );
}