import Link from "next/link"


import FPSLayout from "@/components/tools/FPSCalculator/FPSLayout/page"
import FPSContent from "@/components/seo/FPSContent"
import RelatedTools from "@/components/ui/RelatedTools"
import FPSFAQ from "@/components/seo/FPSFAQ"

export default function FPSCalculatorPage() {

    return (
        <main id ="fps-calculator-page">

        <div className=" min-h-screen bg-slate-1000  text-white"  >

            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <FPSLayout />

                {/* SEO CONTENT */}
                <FPSContent />

                <RelatedTools />

                <FPSFAQ />

                
             <div className="max-w-5xl mx-auto px-4 md:px-8 mb-12 flex justify-center">
        <Link
          href="#fps-calculator-page"
          className="inline-flex items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-200 backdrop-blur-sm transition-colors duration-200 hover:bg-cyan-500/15 hover:text-cyan-100"
        >
          Back to top
        </Link>
      </div>
      </div>



        </div>
        </main>

    )

}