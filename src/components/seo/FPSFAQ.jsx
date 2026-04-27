"use client";

import { motion } from "framer-motion";


export default function FPSFAQ() {

const faqs = [
{
question: "What Is the Best FPS for Gaming?",
answer:
"The best FPS depends on the game type and your monitor. For competitive shooters, 120–144 FPS feels smooth and responsive. For casual or story games, 60 FPS is usually enough for a stable experience."
},
{
question: "What Refresh Rate Is Best for My Monitor?",
answer:
"Match your refresh rate to your FPS for smooth gameplay. A 60Hz monitor works well with 60 FPS, while 144Hz or 240Hz monitors benefit high-FPS games. Higher refresh rates reduce motion blur and improve responsiveness."
},
{
question: "How Many FPS Can My PC Run?",
answer:
"Your PC’s FPS depends on the CPU, GPU, RAM, and game settings. Using an FPS Calculator helps predict your estimated FPS. Upgrading hardware or lowering graphics settings can increase your frame rate."

},

{
question:"Can I Check FPS for New Games?",
answer:"Yes, you can check FPS even for new releases using tools like FPS Benchmark Tool or in-game counters. These tools use updated databases to provide accurate FPS estimates before buying or installing games."
},
{
question:"What If My Hardware Is Not Listed?",
answer:"If your CPU, GPU, or RAM isn’t listed, you can use the closest match in the FPS Calculator. It still gives a good estimate of performance and helps decide which upgrades or settings adjustments to make."
},
]

return (
<section className="mt-16 m-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
  <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
    FPS Calculator FAQs
  </h2>

  <div className="space-y-8">
    {faqs.map((faq, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="border border-slate-800 rounded-xl p-5 sm:p-6 bg-slate-900 shadow-md"
      >
        <h3 className="font-semibold mb-3 text-lg sm:text-xl text-white">
          {faq.question}
        </h3>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    ))}
  </div>
</section>

);
}
