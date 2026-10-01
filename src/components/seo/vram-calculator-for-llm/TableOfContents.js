const links = [
    {
        href: "#quick-answer",
        label: "Quick Answer",
    },
    {
        href: "#how-to-use",
        label: "How to Use the Calculator",
    },
    {
        href: "#calculation",
        label: "How the Calculator Works",
    },
    {
        href: "#bytes-per-parameter",
        label: "Bytes per Parameter",
    },
    {
        href: "#context-length",
        label: "Context Length",
    },
    {
        href: "#popular-models",
        label: "Popular Model VRAM",
    },
    {
        href: "#model-fit",
        label: "What Fits on Your GPU?",
    },
    {
        href: "#if-model-does-not-fit",
        label: "If the Model Does Not Fit",
    },
    {
        href: "#moe-models",
        label: "Mixture-of-Experts Models",
    },
    {
        href: "#vram-vs-system-ram",
        label: "VRAM vs System RAM",
    },
    {
        href: "#limitations",
        label: "What the Calculator Does Not Cover",
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