import Link from "next/link"


import FPSLayout from "@/components/tools/FPSCalculator/FPSLayout/page"
import FPSContent from "@/components/seo/FPSContent"
import FPSFAQ from "@/components/seo/FPSFAQ"

export default function FPSCalculatorPage() {

    return (
        <main id ="fps-calculator-page">

        <div className=" min-h-screen bg-slate-1000  text-white"  >

            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <FPSLayout />

                {/* SEO CONTENT */}
                <FPSContent />

                <FPSFAQ />

                
             <div className="max-w-5xl mx-auto px-4 md:px-8 mb-12 flex justify-center">
        <Link
          href="#fps-calculator-page"
          className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-5 py-3 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-700 transition-colors duration-200"
        >
          Back to top
          
        </Link>
      </div>
      </div>



        </div>
        </main>

    )

}