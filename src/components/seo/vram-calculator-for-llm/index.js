import TableOfContents from "./TableOfContents";
import Faq from "./Faq";

const faqData = [
    {
        question: "Is 6 GB of VRAM enough for a local LLM in 2026?",
        answer:
            "For 3B to 4B models at Q4, yes; a 3B model at 4K context needs about 3.2 GB. A 7B to 8B model at Q4_K_M needs about 5.8 to 6.3 GB, which is more than the roughly 5.4 GB usable on a 6 GB card. Q3 or a shorter context can squeeze it in, but 8 GB is the practical minimum for regular 7B use.",
    },
    {
        question: "How much VRAM do 7B, 14B and 70B models need?",
        answer:
            "At Q4_K_M and 4K context: about 5.8 GB for 7B, 10.8 GB for 14B and 47 GB for 70B. Longer context adds more.",
    },
    {
        question: "Does context length change VRAM use?",
        answer:
            "Yes. The KV cache grows with every token kept in context. For an 8B model it goes from 0.5 GB at 4K to about 4.3 GB at 32K.",
    },
    {
        question: "Do MoE models need VRAM for all parameters?",
        answer:
            "Yes, for standard GPU inference. Active parameters affect speed, not the memory needed to hold the model.",
    },
    {
        question: "Can I run an LLM on system RAM only?",
        answer:
            "Yes, with CPU inference or offloading. It is usually much slower than running from VRAM.",
    },
    {
        question: "Which quantization should I choose?",
        answer:
            "Q4_K_M is the usual default. Move to Q5 or Q6 when you have spare VRAM, and Q8 when quality matters most. Below Q4, quality loss becomes more noticeable.",
    },
    {
        question: "How accurate is this calculator?",
        answer:
            "It is an estimate built from published model architectures and llama.cpp file sizes. Real usage varies with the inference engine, so leave about 10% headroom.",
    },
    {
        question: "Does VRAM bandwidth matter?",
        answer:
            "Yes. Two cards with the same VRAM can generate at very different speeds because token generation depends heavily on memory bandwidth.",
    },
];

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            name: "LLM VRAM Calculator",
            url: "https://perfcalcpro.com/tools/vram-calculator-for-llm",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
            },
            dateModified: "2026-09-30",
            author: {
                "@type": "Person",
                name: "Rao Awais",
            },
        },
        {
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                },
            })),
        },
    ],
};

const tableClass = "w-full border-collapse text-left text-sm";
const cellClass = "border border-slate-700 px-3 py-2.5 align-top";
const headerCellClass = `${cellClass} bg-slate-900 font-semibold text-slate-100`;

export default function VramCalculatorSeo() {
    return (
        <article className="space-y-10 text-slate-300 md:space-y-12">
            <header className="space-y-4">
                <h2
                    id="quick-answer"
                    className="text-2xl font-bold leading-tight text-slate-100 sm:text-3xl"
                >
                    Quick Answer
                </h2>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                    At Q4_K_M, 4K context and batch size 1, expect about 6.3 GB
                    for an 8B model, 10.8 GB for 14B, 22.7 GB for 32B and 47 GB
                    for 70B. Longer context, bigger batches and higher-precision
                    quantization all add to that. For a 7B to 8B model, 8 GB is
                    the practical minimum.
                </p>
            </header>

            <TableOfContents />

            <section id="how-to-use" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">
                    How to Use the Calculator
                </h2>
                <ol className="list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-400 sm:text-base">
                    <li>
                        Pick a model. Choose a preset (it loads the real layer
                        and KV-head counts) or type a custom size in billions
                        of parameters.
                    </li>
                    <li>
                        Choose quantization. Q4_K_M is the usual balance of
                        size and quality. Use Q5 or Q6 if you have spare memory.
                    </li>
                    <li>
                        Set context length and batch size. Context is the
                        biggest hidden cost, see below.
                    </li>
                    <li>
                        Read the breakdown and GPU fit. The tool shows the
                        smallest card that fits and the first card with
                        comfortable headroom.
                    </li>
                </ol>
            </section>

            <section id="calculation" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">
                    How This Calculator Works
                </h2>
                <div className="space-y-3 rounded-xl border border-cyan-900 bg-slate-950/70 p-4 font-mono text-sm leading-6 text-cyan-200">
                    <p>total VRAM = weights + KV cache + runtime overhead</p>
                    <p>weights = parameters (billions) × bytes per parameter</p>
                    <p>
                        KV cache = 2 × layers × KV heads × head dim × bytes ×
                        context × batch
                    </p>
                    <p>overhead = 0.6 GB + 5% of (weights + KV cache)</p>
                </div>

                <h3 className="pt-2 text-lg font-semibold text-slate-100">
                    Worked example: Llama 3.1 8B, Q4_K_M, 4,096 context, batch 1
                </h3>
                <div className="overflow-x-auto">
                    <table className={tableClass}>
                        <thead>
                            <tr>
                                <th className={headerCellClass}>Part</th>
                                <th className={headerCellClass}>Calculation</th>
                                <th className={headerCellClass}>GB</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={cellClass}>Weights</td>
                                <td className={cellClass}>8.03B × 0.61</td>
                                <td className={cellClass}>4.90</td>
                            </tr>
                            <tr>
                                <td className={cellClass}>KV cache</td>
                                <td className={cellClass}>
                                    2 × 32 layers × 8 KV heads × 128 × 2 bytes
                                    × 4,096
                                </td>
                                <td className={cellClass}>0.54</td>
                            </tr>
                            <tr>
                                <td className={cellClass}>Overhead</td>
                                <td className={cellClass}>0.6 + 5% of 5.44</td>
                                <td className={cellClass}>0.87</td>
                            </tr>
                            <tr>
                                <td className={cellClass}>Total</td>
                                <td className={cellClass}></td>
                                <td className={cellClass}>6.31</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="bytes-per-parameter" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">
                    Bytes per Parameter by Quantization
                </h2>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                    Bytes per parameter used (approximate, based on llama.cpp
                    GGUF sizes; real files include some higher-precision layers,
                    so they are not simply bits divided by eight):
                </p>
                <div className="overflow-x-auto">
                    <table className={tableClass}>
                        <thead>
                            <tr>
                                <th className={headerCellClass}>Format</th>
                                <th className={headerCellClass}>Bytes per parameter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className={cellClass}>FP32</td><td className={cellClass}>4.00</td></tr>
                            <tr><td className={cellClass}>FP16 / BF16</td><td className={cellClass}>2.00</td></tr>
                            <tr><td className={cellClass}>Q8_0</td><td className={cellClass}>1.06</td></tr>
                            <tr><td className={cellClass}>Q6_K</td><td className={cellClass}>0.82</td></tr>
                            <tr><td className={cellClass}>Q5_K_M</td><td className={cellClass}>0.71</td></tr>
                            <tr><td className={cellClass}>Q4_K_M</td><td className={cellClass}>0.61</td></tr>
                            <tr><td className={cellClass}>Q3_K_M</td><td className={cellClass}>0.49</td></tr>
                            <tr><td className={cellClass}>Q2_K</td><td className={cellClass}>0.42</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                    Why the KV cache depends on the model. Modern models use
                    grouped-query attention (GQA), which shares key/value heads
                    and keeps the cache small. An older model without GQA, such
                    as Llama 2 13B (40 layers, 40 KV heads), needs about 3.4 GB
                    of KV cache at 4K context, roughly six times more than Llama
                    3.1 8B. That is why the calculator asks for the model instead
                    of using one flat number.
                </p>
            </section>

            <section id="context-length" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">
                    Context Length: The Cost People Miss
                </h2>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                    The KV cache grows linearly with context and batch size. For
                    Llama 3.1 8B at FP16 KV precision:
                </p>
                <div className="overflow-x-auto">
                    <table className={tableClass}>
                        <thead>
                            <tr><th className={headerCellClass}>Context</th><th className={headerCellClass}>KV cache</th></tr>
                        </thead>
                        <tbody>
                            <tr><td className={cellClass}>4,096</td><td className={cellClass}>0.54 GB</td></tr>
                            <tr><td className={cellClass}>32,768</td><td className={cellClass}>4.3 GB</td></tr>
                            <tr><td className={cellClass}>131,072</td><td className={cellClass}>17.2 GB</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                    A model that loads fine at 4K can run out of memory at 32K.
                    Quantizing the KV cache to 8-bit halves these numbers.
                </p>
            </section>

            <section id="popular-models" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">
                    VRAM Needed for Popular Models
                </h2>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                    Estimates at 4,096 context, batch size 1, FP16 KV cache,
                    using the formula above.
                </p>
                <div className="overflow-x-auto">
                    <table className={tableClass}>
                        <thead>
                            <tr>
                                <th className={headerCellClass}>Model</th>
                                <th className={headerCellClass}>FP16</th>
                                <th className={headerCellClass}>Q8_0</th>
                                <th className={headerCellClass}>Q4_K_M</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className={cellClass}>Mistral 7B v0.3</td><td className={cellClass}>16.4 GB</td><td className={cellClass}>9.2 GB</td><td className={cellClass}>5.8 GB</td></tr>
                            <tr><td className={cellClass}>Llama 3.1 8B</td><td className={cellClass}>18.0 GB</td><td className={cellClass}>10.1 GB</td><td className={cellClass}>6.3 GB</td></tr>
                            <tr><td className={cellClass}>Qwen3 14B</td><td className={cellClass}>32.4 GB</td><td className={cellClass}>17.8 GB</td><td className={cellClass}>10.8 GB</td></tr>
                            <tr><td className={cellClass}>Qwen3 32B</td><td className={cellClass}>70.6 GB</td><td className={cellClass}>38.2 GB</td><td className={cellClass}>22.7 GB</td></tr>
                            <tr><td className={cellClass}>Llama 3.1 70B</td><td className={cellClass}>150.3 GB</td><td className={cellClass}>80.6 GB</td><td className={cellClass}>47.2 GB</td></tr>
                            <tr><td className={cellClass}>Llama 3.1 405B</td><td className={cellClass}>853 GB</td><td className={cellClass}>454 GB</td><td className={cellClass}>262 GB</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                    These are estimates, not guaranteed minimums. Check the
                    download size of the exact file you plan to use.
                </p>
            </section>

            <section id="model-fit" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">
                    What Size Model Fits on Your GPU?
                </h2>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                    Usable memory is about 90% of the card's VRAM, because the
                    driver and display take a share. Figures assume 4K context
                    and batch size 1.
                </p>
                <div className="overflow-x-auto">
                    <table className={tableClass}>
                        <thead>
                            <tr>
                                <th className={headerCellClass}>VRAM</th>
                                <th className={headerCellClass}>Example cards</th>
                                <th className={headerCellClass}>Realistic fit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className={cellClass}>6 GB</td><td className={cellClass}>RTX 2060, laptop RTX 3060</td><td className={cellClass}>3B to 4B at Q4; 7B only at Q3 or short context</td></tr>
                            <tr><td className={cellClass}>8 GB</td><td className={cellClass}>RTX 4060, RTX 3070</td><td className={cellClass}>7B to 8B at Q4</td></tr>
                            <tr><td className={cellClass}>12 GB</td><td className={cellClass}>RTX 3060 12GB, RTX 4070, RTX 5070</td><td className={cellClass}>8B up to Q8; 14B at Q4 (tight)</td></tr>
                            <tr><td className={cellClass}>16 GB</td><td className={cellClass}>RTX 4060 Ti 16GB, RTX 4080, RTX 5070 Ti, RTX 5080</td><td className={cellClass}>14B up to Q6</td></tr>
                            <tr><td className={cellClass}>24 GB</td><td className={cellClass}>RTX 3090, RTX 4090, RX 7900 XTX</td><td className={cellClass}>14B at Q8; 32B at Q4 with short context</td></tr>
                            <tr><td className={cellClass}>32 GB</td><td className={cellClass}>RTX 5090</td><td className={cellClass}>32B up to Q6</td></tr>
                            <tr><td className={cellClass}>48 GB</td><td className={cellClass}>RTX A6000, L40S, 2x 24 GB</td><td className={cellClass}>32B at Q8; 70B at Q4 is borderline (47 GB)</td></tr>
                            <tr><td className={cellClass}>80 GB</td><td className={cellClass}>A100 80GB, H100 80GB</td><td className={cellClass}>70B at Q4 with room for context</td></tr>
                            <tr><td className={cellClass}>96 GB</td><td className={cellClass}>RTX PRO 6000</td><td className={cellClass}>70B at Q4 with long context</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="if-model-does-not-fit" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">
                    If the Model Does Not Fit
                </h2>
                <ol className="list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-400 sm:text-base">
                    <li>Use a lower quantization (Q4_K_M instead of Q6).</li>
                    <li>Shorten the context window.</li>
                    <li>Quantize the KV cache to 8-bit.</li>
                    <li>Lower the batch size.</li>
                    <li>Offload some layers to system RAM. It works, but token speed drops sharply.</li>
                </ol>
            </section>

            <section id="moe-models" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">
                    Mixture-of-Experts (MoE) Models
                </h2>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                    For a normal GPU setup, an MoE model needs enough VRAM for
                    all its weights, not just the active parameters. Active
                    parameters make generation faster, but they do not shrink
                    the memory footprint unless you offload experts to system
                    RAM. Enter the total parameter count.
                </p>
            </section>

            <section id="vram-vs-system-ram" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">
                    VRAM vs System RAM
                </h2>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                    VRAM sits on the graphics card and feeds the GPU at very
                    high bandwidth. System RAM can hold model data for CPU
                    inference or offloading, but moving data between the two is
                    slower. VRAM size decides whether a model fits; memory
                    bandwidth largely decides how fast it generates.
                </p>
            </section>

            <section id="limitations" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">
                    What This Calculator Does Not Cover
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-sm leading-7 text-slate-400 sm:text-base">
                    <li>
                        Training and fine-tuning. They need extra memory for
                        gradients, optimizer state and activations, so this tool
                        is for inference only.
                    </li>
                    <li>
                        Engine differences. llama.cpp, Ollama and vLLM allocate
                        memory differently. vLLM, for example, reserves a fixed
                        share of GPU memory up front, so your monitoring tool
                        may show more than the estimate.
                    </li>
                    <li>Multi-GPU and tensor-parallel overhead.</li>
                </ul>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                    Leave about 10% headroom on top of the estimate.
                </p>
            </section>

            <Faq items={faqData} />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
        </article>
    );
}