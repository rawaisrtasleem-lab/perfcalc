"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Zap } from "lucide-react"
import StatInput from "./StatInput"
import { calculateDPS } from "@/lib/calculations/dpsformula"

export default function DPSForm() {

    const router = useRouter()

    const [damage, setDamage] = useState("")
    const [attackSpeed, setAttackSpeed] = useState("")
    const [critChance, setCritChance] = useState("")
    const [critDamage, setCritDamage] = useState("")

    function handleSubmit(e) {

        e.preventDefault()

        const dps = calculateDPS(
            damage,
            attackSpeed,
            critChance,
            critDamage
        )

        router.push(`/tools/dps-calculator/result?dps=${dps}`)

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-xl"
        >

            <h2 className="text-xl font-semibold flex items-center gap-2">
                <Zap className="text-indigo-400" />
                DPS Stats
            </h2>

            <StatInput label="Base Damage" value={damage} setValue={setDamage} />
            <StatInput label="Attack Speed" value={attackSpeed} setValue={setAttackSpeed} />
            <StatInput label="Crit Chance %" value={critChance} setValue={setCritChance} />
            <StatInput label="Crit Damage %" value={critDamage} setValue={setCritDamage} />

            <button
                className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded-lg py-3 font-semibold"
            >
                Calculate DPS
            </button>

        </form>

    )

}