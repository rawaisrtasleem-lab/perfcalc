"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
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
            className="mx-auto max-w-2xl rounded-lg border border-slate-800 bg-slate-900 p-5 sm:p-6"
        >

            <h2 className="mb-5 text-xl font-semibold text-white">
                DPS Stats
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
                <StatInput label="Base Damage" value={damage} setValue={setDamage} />
                <StatInput label="Attack Speed" value={attackSpeed} setValue={setAttackSpeed} />
                <StatInput label="Crit Chance %" value={critChance} setValue={setCritChance} />
                <StatInput label="Crit Damage %" value={critDamage} setValue={setCritDamage} />
            </div>

            <button
                className="mt-5 w-full rounded-lg bg-indigo-600 py-3 font-semibold transition-colors hover:bg-indigo-500"
            >
                Calculate DPS
            </button>

        </form>

    )

}