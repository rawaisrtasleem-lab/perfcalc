"use client"

import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

export default function ResultPage() {

    const params = useSearchParams()
    const dps = params.get("dps")

    return (

        <div className="min-h-screen bg-slate-950 flex items-center justify-center">

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900 border border-slate-800 p-10 rounded-2xl text-center"
            >

                <TrendingUp className="mx-auto mb-4 text-indigo-400" />

                <h2 className="text-lg text-slate-400">
                    Your Damage Per Second
                </h2>

                <div className="text-5xl font-bold mt-4 text-indigo-400">
                    {Number(dps).toFixed(2)}
                </div>

            </motion.div>

        </div>

    )

}