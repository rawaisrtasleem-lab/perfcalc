export default function StatInput({
  id,
  label,
  value,
  setValue,
  min = "0",
  max,
  step = "any",
  required = true,
}) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-3">
      <label htmlFor={id} className="mb-2 block text-sm text-slate-300">
        {label}
      </label>
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step={step}
        required={required}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  )
}