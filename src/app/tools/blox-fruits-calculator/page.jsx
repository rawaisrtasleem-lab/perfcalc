import BloxFruitsCalculator from "@/components/ui/blox-fruits-calculator/BloxFruitsCalculator"
import RelatedTools from "@/components/ui/RelatedTools"
import BloxFruitsCalculatorSeo from "@/components/seo/blox-fruits-calculator"


export const metadata = {
    title:
        "Blox Fruits Trade Calculator — W/F/L Value Checker | PerfCalcPro",

    description:
        "Free Blox Fruits trade calculator. Compare physical and permanent fruit values, demand, and instantly check whether a trade is a Win, Fair, or Loss.",

    alternates: {
        canonical:
            "https://perfcalcpro.com/blox-fruits-calculator",
    },

    openGraph: {
        title:
            "Blox Fruits Trade Calculator | PerfCalcPro",

        description:
            "Compare Blox Fruits trade values, physical and permanent fruits, demand, and instantly calculate Win, Fair, or Loss.",

        url:
            "https://perfcalcpro.com/blox-fruits-calculator",

        type: "website",

        siteName: "PerfCalcPro",
    },

    twitter: {
        card: "summary",

        title:
            "Blox Fruits Trade Calculator | PerfCalcPro",

        description:
            "Compare Blox Fruits values and instantly check if a trade is a Win, Fair, or Loss.",
    },
}


export default function Page() {
    return (
        <main className="relative min-h-screen bg-slate-1000 text-slate-200 overflow-hidden">

            {/* Background glow */}
            <div className="absolute top-20 left-10 md:left-20 w-72 md:w-96 h-72 md:h-96 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none" />

            <div className="absolute bottom-20 right-10 md:right-20 w-72 md:w-96 h-72 md:h-96 bg-cyan-600/20 blur-3xl rounded-full pointer-events-none" />


            {/* Calculator */}
            <section className="relative z-10 max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">

                <div className="max-w-3xl mx-auto text-center mb-6 md:mb-10 mt-8 md:mt-8">

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 leading-tight">
                    Blox Fruits Calculator – Smart Trade Value & W/F/L Checker
                </h2>

                    <p className="mt-5 text-sm md:text-base leading-7 text-slate-400">
                    Trading in Blox Fruits moves fast, and one wrong move can cost you a rare permanent fruit you&apos;ll never see again. Scammers count on that panic, and pure guesswork gets a lot of players burned. This{" "}
                    <strong className="font-semibold text-slate-300">
                        Blox Fruits Calculator
                    </strong>{" "}
                    cuts through the confusion: enter what&apos;s on both sides of the deal, and you&apos;ll get a clear Win, Fair, or Lose verdict in seconds, no spreadsheets, no Discord arguments needed.
                </p>

                </div>


                <BloxFruitsCalculator />

            </section>


            {/* Related tools */}
            <div className="relative z-10">
                <RelatedTools />
            </div>


            {/* SEO content */}
            <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <BloxFruitsCalculatorSeo />
            </section>

        </main>
    )
}