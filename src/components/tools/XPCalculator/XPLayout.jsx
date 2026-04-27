"use client"

import { useState } from "react"
import XPForm from "./XPForm"
import XPResult from "./XPResult"
import { motion } from "framer-motion"

export default function XPLayout(){

const [result,setResult] = useState(null)

return(

<div className="grid lg:grid-cols-2 gap-8">

<motion.div
initial={{opacity:0,x:-40}}
animate={{opacity:1,x:0}}
>
<XPForm setResult={setResult}/>
</motion.div>

<motion.div
initial={{opacity:0,x:40}}
animate={{opacity:1,x:0}}
>
<XPResult result={result}/>
</motion.div>

</div>

)

}