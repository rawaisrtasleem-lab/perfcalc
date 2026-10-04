"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import StatInput from "./StatInput"
import { calculateDPS } from "@/lib/calculations/dpsformula"

export default function DPSForm() {
    const router = useRouter()
    const [damage, setDamage] = useState("50")
    const [attacksPerSecond, setAttacksPerSecond] = useState("2")
    const [critChance, setCritChance] = useState("10")
    const [critDamageBonus, setCritDamageBonus] = useState("100")
    const [magazineSize, setMagazineSize] = useState("30")
    const [reloadTime, setReloadTime] = useState("2")
    const [targetHealth, setTargetHealth] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        try {
            const result = calculateDPS({
                damage,
                attacksPerSecond,
                critChance,
                critDamageBonus,
                magazineSize,
                reloadTime,
                targetHealth,
            })

            const params = new URLSearchParams({
                burst: String(result.burstDPS),
                sustained: String(result.sustainedDPS),
                ttk: result.timeToKill === null ? "" : String(result.timeToKill),
            })
            setError("")
            router.push(`/tools/dps-calculator/result?${params.toString()}`)
        } catch (calculationError) {
            setError(calculationError.message)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-2xl space-y-5 rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
        >
            <div>
                <h2 className="text-xl font-semibold text-white">DPS Stats</h2>
                <p className="mt-1 text-sm text-slate-400">
                    Compare firing DPS with reload-adjusted damage output.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <StatInput id="weapon-damage" label="Damage per hit" value={damage} setValue={setDamage} min="0.01" />
                <StatInput id="attack-speed" label="Attacks per second" value={attacksPerSecond} setValue={setAttacksPerSecond} min="0.01" />
                <StatInput id="crit-chance" label="Critical chance (%)" value={critChance} setValue={setCritChance} min="0" max="100" />
                <StatInput id="crit-damage" label="Critical damage bonus (%)" value={critDamageBonus} setValue={setCritDamageBonus} min="0" />
                <StatInput id="magazine-size" label="Shots per magazine" value={magazineSize} setValue={setMagazineSize} min="1" step="1" />
                <StatInput id="reload-time" label="Reload time (seconds)" value={reloadTime} setValue={setReloadTime} min="0" />
                <StatInput
                    id="target-health"
                    label="Target health (optional)"
                    value={targetHealth}
                    setValue={setTargetHealth}
                    min="0.01"
                    required={false}
                />
            </div>

            {error && <p role="alert" className="text-sm text-red-400">{error}</p>}

            <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
                Calculate DPS
            </button>
        </form>
    )
}