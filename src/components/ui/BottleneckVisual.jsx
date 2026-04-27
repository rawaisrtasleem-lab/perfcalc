"use client"

import { motion } from "framer-motion"
import { Cpu, Monitor, Zap } from "lucide-react"

export default function BottleneckVisual() {

  return (

    <div className="relative h-full flex items-center justify-center p-6">
      {/* Animated background grid */}


      {/* glow circles */}

      <div className="absolute -top-20 -right-10 w-72 h-72 bg-indigo-500/30 blur-3xl rounded-full"/>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full"/>


      {/* CONTENT */}

    <div className="relative z-10 max-w-md space-y-12">

        <div>

          <h1 className="text-4xl font-bold leading-tight ">

            Find Your Perfect
            <span className="text-cyan-400 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              {" "}Gaming Balance
            </span>

          </h1>

          <p className="text-slate-400 mt-6 text-lg">
            Analyze CPU and GPU performance to discover system bottlenecks
            and optimize your gaming PC build.
          </p>

        </div>


        {/* Floating cards */}

        <div className="grid grid-cols-2 gap-6">

          <motion.div
            initial={{y:30,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.2}}
            className="
            bg-slate-900
            border border-slate-700
            rounded-xl
            p-6
            shadow-xl
            "
          >

            <Cpu className="text-indigo-400"/>

            <h3 className="pt-4 font-semibold">
              CPU Performance
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Detect if your processor limits GPU power.
            </p>

          </motion.div>


          <motion.div
            initial={{y:30,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.3}}
            className="
            bg-slate-900
            border border-slate-700
            rounded-xl
            p-6
            shadow-xl
            "
          >

            <Monitor className="text-blue-400"/>

            <h3 className="mt-4 font-semibold">
              GPU Power
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Ensure your graphics card reaches full potential.
            </p>

          </motion.div>


          <motion.div
            initial={{y:30,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.4}}
            className="
            col-span-2
            bg-slate-900
            border border-slate-700
            rounded-xl
            p-6
            shadow-xl
            "
          >

            <Zap className="text-yellow-400"/>

            <h3 className="mt-4 font-semibold">
              Balanced Gaming System
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Build the perfect CPU + GPU combination for maximum FPS.
            </p>

          </motion.div>

        </div>

      </div>

    </div>

  )
}