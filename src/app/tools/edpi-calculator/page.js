import EdpiCalculator from "@/components/ui/EdpiCalculator"
import RelatedTools from "@/components/ui/RelatedTools"
import EdpiCalculatorSeo from "@/components/seo/edpi-calculator"

export const metadata = {
    title: "eDPI Calculator — Calculate Effective Mouse Sensitivity | PerfCalcPro",
    description:
        "Free eDPI calculator for gaming. Enter your mouse DPI and in-game sensitivity to instantly calculate your effective DPI and compare equivalent sensitivities.",
    alternates: {
        canonical: "https://perfcalcpro.com/edpi-calculator",
    },
    openGraph: {
        title: "eDPI Calculator | PerfCalcPro",
        description:
            "Calculate your effective mouse DPI from DPI and in-game sensitivity instantly.",
        url: "https://perfcalcpro.com/edpi-calculator",
        type: "website",
    },
}

export default function Page() {
    return (
        <main className="relative min-h-screen bg-slate-1000 text-slate-200 overflow-hidden">

            {/* Background glow */}
            <div className="absolute top-20 left-10 md:left-20 w-72 md:w-96 h-72 md:h-96 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none" />

            <div className="absolute bottom-20 right-10 md:right-20 w-72 md:w-96 h-72 md:h-96 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

            {/* Main calculator section */}
            <section className="relative z-10 max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">

                <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10 mt-4">

                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-cyan-400 mb-4 md:mt-4">
                        eDPI Calculator
                    </h1>

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        Calculate your effective DPI by entering your mouse DPI
                        and in-game sensitivity. You can also compare equivalent
                        sensitivity values across different DPI settings.
                    </p>

                </div>

                <EdpiCalculator />



            </section>

            {/* Existing related tools component */}
            <div className="relative z-10">
                <RelatedTools />
            </div>


            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <EdpiCalculatorSeo />
            </section>

        </main>
    )
}