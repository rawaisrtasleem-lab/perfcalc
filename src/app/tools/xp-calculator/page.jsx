import XPLayout from "@/components/tools/XPCalculator/XPLayout"
import XPContent from "@/components/seo/XPContent"
import XPFAQ from "@/components/seo/XPFAQ"

export default function XPCalculatorPage() {

return (
    <main id="xp-calculator-page">

<div className="min-h-screen bg-slate-1000 text-white">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

<h1 className="text-4xl font-bold mb-2">
XP Calculator
</h1>

<p className="text-slate-400 leading-relaxed mb-10">
 The Experience Points (XP) Calculator helps gamers track and plan their 
    progress across different levels. By entering your current XP and target 
    goals, this tool instantly shows how much more you need to level up, 
    making it easier to plan grinding sessions, quests, or challenges.
</p>

<XPLayout />

<XPContent />

<XPFAQ />

<div className="max-w-5xl mx-auto px-4 md:px-8 mb-12 flex justify-center">
        <a
          href="#xp-calculator-page"
          className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-5 py-3 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-700 transition-colors duration-200"
        >
          Back to top
        </a>
</div>

</div>

</div>
</main>

)

}