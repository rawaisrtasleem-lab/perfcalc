"use client"

import { useState } from "react"
import { calculateXP } from "@/lib/xpcalculation"
import { Zap } from "lucide-react"

export default function XPForm({ setResult }) {
  const [currentLevel, setCurrentLevel] = useState("1")
  const [targetLevel, setTargetLevel] = useState("10")
  const [xpPerAction, setXpPerAction] = useState("100")
  const [minutesPerAction, setMinutesPerAction] = useState("1")
  const [error, setError] = useState("")

  function handleCalculate(event) {
    event.preventDefault()

    const current = Number(currentLevel)
    const target = Number(targetLevel)
    const xp = Number(xpPerAction)
    const minutes = Number(minutesPerAction)

    if (!Number.isInteger(current) || current < 1) {
      setError("Enter a current level of 1 or higher.")
      return
    }

    if (!Number.isInteger(target) || target <= current) {
      setError("Target level must be a whole number greater than your current level.")
      return
    }

    if (!Number.isFinite(xp) || xp <= 0 || !Number.isFinite(minutes) || minutes <= 0) {
      setError("XP per action and minutes per action must both be greater than zero.")
      return
    }

    setError("")
    setResult(calculateXP(current, target, xp, minutes))
  }

  const inputClassName = "w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"

  return (
    <form
      onSubmit={handleCalculate}
      className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6"
    >
      <h3 className="flex items-center gap-2 text-green-400">
        <Zap size={18} />
        XP Calculator
      </h3>

      <div className="space-y-2">
        <label htmlFor="current-level" className="block text-sm text-slate-300">Current level</label>
        <input
          id="current-level"
          type="number"
          min="1"
          step="1"
          required
          value={currentLevel}
          onChange={(event) => setCurrentLevel(event.target.value)}
          className={inputClassName}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="target-level" className="block text-sm text-slate-300">Target level</label>
        <input
          id="target-level"
          type="number"
          min={Number(currentLevel) + 1}
          step="1"
          required
          value={targetLevel}
          onChange={(event) => setTargetLevel(event.target.value)}
          className={inputClassName}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="xp-per-action" className="block text-sm text-slate-300">XP earned per action</label>
        <input
          id="xp-per-action"
          type="number"
          min="0.01"
          step="any"
          required
          value={xpPerAction}
          onChange={(event) => setXpPerAction(event.target.value)}
          className={inputClassName}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="minutes-per-action" className="block text-sm text-slate-300">Minutes per action</label>
        <input
          id="minutes-per-action"
          type="number"
          min="0.01"
          step="any"
          required
          value={minutesPerAction}
          onChange={(event) => setMinutesPerAction(event.target.value)}
          className={inputClassName}
        />
      </div>

      {error && <p role="alert" className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 py-3 font-medium text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Calculate XP
      </button>
    </form>
  )
}