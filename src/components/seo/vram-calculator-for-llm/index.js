import TableOfContents from "./TableOfContents";
import HowToUse from "./HowToUse";
import CommonProblems from "./CommonProblems";
import VramOverview from "./VramOverview";
import Features from "./Features";
import LlmVramGuide from "./LlmVramGuide";
import ModelCompatibility from "./ModelCompatibility";
import PopularModels from "./PopularModels";
import GamingVramGuide from "./GamingVramGuide";
import Faq from "./Faq";

const faqData = [
    {
        question: "Is 6GB VRAM enough for a local LLM in 2026?",
        answer:
            "Yes, for 3B to 4B models at Q4 quantization. A 7B model can fit at aggressive quantization but leaves little room for context, so 8GB is safer for regular use.",
    },
    {
        question:
            "How much VRAM do you need for 7B, 13B, and 70B models?",
        answer:
            "Roughly 6GB for 7B at Q4, 8 to 10GB for 13B at Q4, and 40GB or more for 70B at Q4, plus additional memory for KV cache at longer context lengths.",
    },
    {
        question: "Can I run LLMs with only system RAM?",
        answer:
            "Yes. CPU-only inference and CPU offloading can run models using system RAM, but generation is generally slower than keeping the workload in GPU VRAM.",
    },
    {
        question: "Does VRAM speed matter for LLMs?",
        answer:
            "Yes. Memory bandwidth can affect token generation performance even when two GPUs have the same VRAM capacity.",
    },
    {
        question: "How do I reduce VRAM usage for a model?",
        answer:
            "Use a lower quantization level, shorten the context length, reduce batch size, or offload some model layers to system RAM.",
    },
    {
        question: "What quantization should I choose for my GPU?",
        answer:
            "Q4 is a practical balance of size and quality for many consumer GPUs. Q6 or Q8 can be useful when you have additional VRAM available.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
        },
    })),
};

const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VRAM Calculator for LLMs & Gaming",
    url: "https://perfcalcpro.com/vram-calculator-for-llm",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    description:
        "Free VRAM calculator for estimating GPU memory requirements for local LLMs, AI models, and gaming.",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
};

export default function VramCalculatorSeo() {
    return (
        <article className="space-y-12 text-slate-300 md:space-y-16">
            <header>
                <h2 className="text-2xl font-bold leading-tight text-slate-100 sm:text-3xl">
                    VRAM Calculator for Local LLMs & Gaming:
                    How Much VRAM Do You Need?
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                    <p>
                        You downloaded a 13B model, watched the
                        progress bar finish, and then got hit with
                        a CUDA out of memory error. Guessing your
                        VRAM requirements by trial and error wastes
                        time and can leave you with downloads your
                        GPU cannot comfortably run.
                    </p>

                    <p>
                        This LLM VRAM calculator helps estimate the
                        number before you download by accounting for
                        model weights, KV cache, quantization, and
                        runtime overhead.
                    </p>

                    <p>
                        The guide also covers gaming VRAM, including
                        common requirements for 1080p, 1440p, 4K,
                        ray tracing, textures, and mods.
                    </p>
                </div>
            </header>

            <TableOfContents />

            <section id="the-tool" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-100">
                    The Tool: VRAM Calculator
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                    <p>
                        Enter your model parameters,
                        quantization level, context length, and
                        batch size to estimate your total VRAM
                        requirement. The calculator separates the
                        result into model weights, KV cache, and
                        system overhead.
                    </p>

                    <p>
                        The gaming tab estimates VRAM from your
                        resolution, texture quality, ray tracing
                        level, and mod usage. Both modes use the
                        same basic idea: estimate the memory used
                        by the workload and leave additional
                        headroom.
                    </p>
                </div>

                <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
                    <p className="text-sm leading-7 text-cyan-100/80">
                        <strong className="text-cyan-300">
                            Quick answer:
                        </strong>{" "}
                        6GB of VRAM is best suited to smaller local
                        models. For regular 7B-class local LLM use,
                        8GB or more gives considerably more room
                        for context and runtime overhead.
                    </p>
                </div>
            </section>

            <HowToUse />

            <CommonProblems />

            <VramOverview />

            <Features />

            <LlmVramGuide />

            <ModelCompatibility />

            <PopularModels />

            <GamingVramGuide />

            <section id="conclusion" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-100">
                    Conclusion
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                    <p>
                        VRAM can determine whether a workload fits
                        comfortably on your GPU, whether you are
                        loading a local language model or playing a
                        high-resolution game with demanding
                        graphics settings.
                    </p>

                    <p>
                        Breaking the requirement into model
                        weights, cache, textures, and overhead is
                        more useful than guessing from GPU capacity
                        alone.
                    </p>

                    <p>
                        Use the calculator before downloading a
                        large model or choosing a GPU configuration
                        so you can compare the estimated requirement
                        with the memory you actually have available.
                    </p>
                </div>
            </section>

            <Faq items={faqData} />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(softwareSchema),
                }}
            />
        </article>
    );
}