function formatDuration(totalMinutes) {
  const days = Math.floor(totalMinutes / 1440)
  const hours = Math.floor((totalMinutes % 1440) / 60)
  const minutes = totalMinutes % 60

  return [
    days > 0 && `${days}d`,
    hours > 0 && `${hours}h`,
    minutes > 0 && `${minutes}m`,
  ].filter(Boolean).join(" ") || "0m"
}

export default function XPResult({ result }) {
  if (!result) {
    return (
      <div className="flex min-h-64 items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/50 p-8 text-center text-slate-400">
        Enter your leveling details to see the XP, action, and time estimate.
      </div>
    )
  }

  return (
    <div className="space-y-6 rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
      <div>
        <p className="text-slate-400">XP required</p>
        <h2 className="text-4xl font-bold text-indigo-400">
          {result.xpNeeded.toLocaleString()}
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-slate-800/70 p-4">
          <p className="text-sm text-slate-400">Actions required</p>
          <p className="mt-1 text-2xl font-bold">{result.actionsRequired.toLocaleString()}</p>
        </div>
        <div className="rounded-lg bg-slate-800/70 p-4">
          <p className="text-sm text-slate-400">Estimated time</p>
          <p className="mt-1 text-2xl font-bold text-green-400">
            {formatDuration(result.estimatedMinutes)}
          </p>
        </div>
      </div>
    </div>
  )
}