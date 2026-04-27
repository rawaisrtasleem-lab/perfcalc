"use client"

import { motion } from "framer-motion"
import ToolHeader from "@/components/ui/DPSCalculator/ToolHeader"
import DPSForm from "@/components/ui/DPSCalculator/DPSForm"
import DPSContent from "@/components/seo/DPSContent"
import DPSFAQS from "@/components/seo/DPSFAQS"
export default function DPSCalculatorPage() {
    return (
        <div className="min-h-screen bg-slate-1000 text-white px-4 sm:px-6 lg:px-8 py-16">

            <ToolHeader
                title="DPS Calculator"
                description="
    The Damage Per Second (DPS) Calculator helps gamers and developers 
    measure how much damage a character, weapon, or ability can deal 
    over time. By analyzing attack speed, damage values, and cooldowns, 
    this tool provides accurate insights into your performance so you 
    can optimize builds, strategies, and gameplay efficiency.
  </p>"
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-10 max-w-3xl mx-auto"
            >
                <DPSForm />

                <DPSContent />

                <DPSFAQS />

                <motion.a
                    href="/tools/dps-calculator"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block mb-14 bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded font-semibold text-white"
                >
                    Try DPS Calculator Now 🚀
                </motion.a>


            </motion.div>

        </div>
    )
}