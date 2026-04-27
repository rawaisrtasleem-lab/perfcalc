"use client"

import { useState } from "react"
import { calculateXP } from "@/lib/xpcalculation"
import { Zap } from "lucide-react"

export default function XPForm({setResult}){

const [currentLevel,setCurrentLevel] = useState(1)
const [targetLevel,setTargetLevel] = useState(10)
const [xpPerAction,setXpPerAction] = useState(100)

function handleCalculate(){

const result = calculateXP(currentLevel,targetLevel,xpPerAction)

setResult(result)

}

return(

<div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">

<h3 className="flex items-center gap-2 text-green-400">
<Zap size={18}/>
XP Calculator
</h3>

<input
type="number"
placeholder="Current Level"
value={currentLevel}
onChange={(e)=>setCurrentLevel(e.target.value)}
className="w-full bg-slate-800 p-3 rounded"
/>

<input
type="number"
placeholder="Target Level"
value={targetLevel}
onChange={(e)=>setTargetLevel(e.target.value)}
className="w-full bg-slate-800 p-3 rounded"
/>

<input
type="number"
placeholder="XP per Action"
value={xpPerAction}
onChange={(e)=>setXpPerAction(e.target.value)}
className="w-full bg-slate-800 p-3 rounded"
/>

<button
onClick={handleCalculate}
className="w-full bg-indigo-600 hover:bg-indigo-500 rounded-lg py-3"
>
Calculate XP
</button>

</div>

)

}