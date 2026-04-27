"use client";

import Link from "next/link";
import Homeseo from  "./Homeseo";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function Homepage({ tools }) {
  // Fallback tools if none are passed
  const defaultTools = [
    {
      id: 1,
      title: "FPS Calculator",
      description: "Estimate frame rates and bottlenecks.",
      link: "/tools/fps-calculator",
      icon: () => <span>🎮</span>,
    },
    {
      id: 2,
      title: "DPS Calculator",
      description: "Calculate damage per second for your build.",
      link: "/tools/dps-calculator",
      icon: () => <span>⚔️</span>,
    },
    {
      id: 3,
      title: "XP Calculator",
      description: "Track experience points and leveling progress.",
      link: "/tools/xp-calculator",
      icon: () => <span>⭐</span>,
    },
    {
      id: 4,
      title: "Bottleneck Calculator",
      description: "Identify hardware limits in your system.",
      link: "/tools/bottleneck-calculator",
      icon: () => <span>💻</span>,
    },
  ];

  const toolList = tools && Array.isArray(tools) ? tools : defaultTools;

  return (
    <div className="w-full bg-[#0B0F19] text-gray-100 p-4 sm:p-6 lg:p-8">
      
      {/* ===== HERO SECTION ===== */}
      <section className="w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className=" px-4 py-2 text-xs md:text-sm font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              Pro<span className="text-cyan-300">f</span>essional Gaming Tools
            </span>
          </motion.div>
              <div className="absolute -top-0 -right-10 w-77 h-72 bg-indigo-600/30 blur-2xl rounded-full"/>
             <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full"/>



          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-3xl font-bold mb-4  leading-tight text-white"
          >
            <span className="text-cyan-400 font-bold">M</span>as<span className="text-cyan-300 font-bold">t</span>er Your <span className="text-cyan-300 font-bold">G</span>aming <span className="text-cyan-300 font-bold">S</span>etup
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            Professional-grade calculators designed for competitive gamers. Get precise insights on FPS, bottlenecks, damage, and resource optimization in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#tools">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-16 py-3 md:py-4 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
              >
                Explore Tools
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-600 text-gray-200 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      {/* ===== TOOLS SECTION ===== */}
      <section id="tools" className="w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 text-center sm:text-left"
          >
            <h2 className="text-5xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
              O<span className="text-cyan-300 font-bold">U</span>r  <span className="text-cyan-300 font-bold">T</span>ools
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl">
              Four powerful calculators to help you optimize every aspect of your gaming performance.
            </p>
          </motion.div>
          

          {/* Tools Grid */}
          <div className="grid p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {toolList.map((tool, idx) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  
                  <Link href={tool.link}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="h-full p-6 md:p-8 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-colors cursor-pointer group"
                    >
                      <div className="mb-5 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                        {IconComponent && <IconComponent size={28} className="text-cyan-400" />}
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold mb-3 text-white">
                        {tool.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm md:text-base mb-5 leading-relaxed">
                        {tool.description}
                      </p>
                      
                      <div className="flex items-center text-cyan-400 text-sm font-semibold group-hover:gap-2 gap-1 transition-all">
                        <span>Learn More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>

              
                
              );
            })}
          </div>
        </div>
      </section>


         <section className="w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="absolute  right-20 w-72 h-72 bg-indigo-500/30 blur-3xl rounded-full"/>
             <div className=" bottom-34 w-7 h-7 bg-blue-500/30 blur-3xl rounded-full"/>


          <Homeseo/>
         </section>
    </div>
  );
}
