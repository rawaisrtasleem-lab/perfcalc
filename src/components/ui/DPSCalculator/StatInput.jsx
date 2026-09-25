export default function StatInput({label,value,setValue}){

return(

<div className="rounded-lg border border-slate-800 bg-slate-950/40 p-3">

<label className="mb-2 block text-sm text-slate-400">
{label}
</label>

<input
type="number"
value={value}
onChange={(e)=>setValue(e.target.value)}
className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
/>

</div>

)

}