export default function XPResult({result}){

if(!result){

return(

<div className="bg-slate-900 border border-slate-800 rounded-xl p-10 text-center">

<h3 className="text-xl">
Enter your stats to calculate XP
</h3>

</div>

)

}

return(

<div className="bg-slate-900 border border-slate-800 rounded-xl p-10 text-center space-y-6">

<div>

<p className="text-slate-400">
XP Required
</p>

<h2 className="text-4xl font-bold text-indigo-400">
{result.xpNeeded}
</h2>

</div>

<div>

<p className="text-slate-400">
Actions Required
</p>

<h2 className="text-3xl font-bold">
{result.actionsRequired}
</h2>

</div>

</div>

)

}