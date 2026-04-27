export default function StatInput({label,value,setValue}){

return(

<div className="flex flex-col gap-2">

<label className="text-sm text-slate-400">
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