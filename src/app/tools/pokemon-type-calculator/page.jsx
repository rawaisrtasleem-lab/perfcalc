import PokemonTypeCalculator from "@/components/ui/PokemonTypeCalculator"
import RelatedTools from "@/components/ui/RelatedTools"
import PokemonTypeCalculatorSeo from "@/components/seo/pokemon-type-calculator"


export const metadata = {
    title:
        "Pokémon Type Calculator — Weaknesses & Resistances | PerfCalcPro",

    description:
        "Free Pokémon type calculator. Select one or two Pokémon types to instantly calculate weaknesses, resistances, immunities, and type effectiveness.",

    alternates: {
        canonical:
            "https://perfcalcpro.com/pokemon-type-calculator",
    },

    openGraph: {
        title:
            "Pokémon Type Calculator | PerfCalcPro",

        description:
            "Calculate Pokémon type weaknesses, resistances, immunities, and defensive effectiveness for single and dual types.",

        url:
            "https://perfcalcpro.com/pokemon-type-calculator",

        type: "website",

        siteName: "PerfCalcPro",
    },

    twitter: {
        card: "summary",

        title:
            "Pokémon Type Calculator | PerfCalcPro",

        description:
            "Calculate Pokémon weaknesses, resistances, immunities, and type effectiveness.",
    },
}


export default function Page() {
    return (
        <main className="relative min-h-screen bg-slate-1000 text-slate-200 overflow-hidden">

            {/* Background glow */}
            <div className="absolute top-20 left-10 md:left-20 w-72 md:w-96 h-72 md:h-96 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none" />

            <div className="absolute bottom-20 right-10 md:right-20 w-72 md:w-96 h-72 md:h-96 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />


            {/* Calculator */}
            <section className="relative z-10 max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">

                <div className="max-w-3xl mx-auto text-center mb-4 md:mb-10 mt-8 md:mt-8">

                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-cyan-400 mb-4 mt-8">
                        Pokémon Type Calculator
                    </h1>

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        Select one or two Pokémon types
                        to calculate weaknesses,
                        resistances, immunities, and
                        incoming type effectiveness.
                    </p>

                </div>


                <PokemonTypeCalculator />

            </section>


            {/* Related tools */}
            <div className="relative z-10">
                <RelatedTools />
            </div>


            {/* SEO content */}
            <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <PokemonTypeCalculatorSeo />
            </section>

        </main>
    )
}