"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"

export default function XPFAQ() {

const faqs = [
{
question: "How XP is calculated?",
answer:"XP is calculated by adding the points you earn from different tasks, challenges, or matches. Each activity gives a specific amount of XP, and your total grows as you complete more. The XP Calculator does this automatically, so you don’t have to guess your progress."

},
{
question: "How XP boosts affect totals?",
answer:"XP boosts temporarily increase the amount of XP you earn. When you activate a boost, the calculator multiplies your normal XP by the boost percentage. This way, you can see exactly how much faster you’ll level up during the boost period."
},
{
question: "Why do games increase XP requirements each level?",
answer:
"Most games use progressive leveling systems where XP requirements grow as levels increase. This keeps the game challenging and encourages long-term player engagement."
},
{
question: " Best way to earn XP fast?",
answer: "To maximize XP per hour, focus on activities that give the highest XP for the least time. Completing challenges, winning matches, or finishing missions efficiently works best. Using XP boosts during these high-reward activities can also speed up leveling."

},
{
question: "How to calculate XP for a team?",
answer:"When playing in a group or team, XP is usually shared based on participation. The calculator can help you divide XP among team members by taking total XP earned and splitting it according to individual contributions or shared rules."
},


]

return (

<section className="mt-24 b-slate max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}
className="flex items-center gap-3 mb-8"
>

<HelpCircle className="text-indigo-400" size={28} />

<h2 className="text-3xl font-bold">
XP Calculator FAQs
</h2>

</motion.div>

<div className="space-y-6">

{faqs.map((faq,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:15}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.4,delay:index*0.05}}
className="bg-slate-900 border border-slate-800 rounded-xl p-6"
>

<h3 className="text-lg font-semibold mb-2">
{faq.question}
</h3>

<p className="text-slate-400 leading-relaxed">
{faq.answer}
</p>

</motion.div>
))}

</div>

</section>

)
}