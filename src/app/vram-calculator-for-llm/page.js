import VramCalculator from "@/components/ui/vram-calculator/VramCalculator";
import RelatedTools from "@/components/ui/RelatedTools";
import VramCalculatorSeo from "@/components/seo/vram-calculator-for-llm";

export default function Page() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-1000 text-slate-200">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-10 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl md:left-20 md:h-96 md:w-96" />

            <div className="pointer-events-none absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-600/15 blur-3xl md:right-20 md:h-96 md:w-96" />

            {/* Hero + Calculator */}
            <section className="relative z-10 mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-6 mt-8 max-w-4xl text-center md:mb-10">
                    <h1 className="mb-4 text-3xl font-bold leading-tight text-cyan-400 sm:text-4xl md:text-5xl">
                        VRAM Calculator for Local LLMs & Gaming
                    </h1>

                    <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-400 md:text-base">
                        Calculate how much VRAM you need for local AI models or
                        gaming before downloading a model or upgrading your GPU.
                        Estimate model weights, KV cache, runtime overhead, and
                        gaming memory requirements in seconds.
                    </p>
                </div>

                <VramCalculator />
            </section>

            {/* Related Tools */}
            <div className="relative z-10">
                <RelatedTools />
            </div>

            {/* SEO Content */}
            <section className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <VramCalculatorSeo />
            </section>
        </main>
    );
}