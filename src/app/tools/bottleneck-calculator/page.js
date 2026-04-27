"use client"

import { useState } from "react"

import BottleneckCalculator from "@/components/ui/BottleneckCalculator"
import BottleneckVisual from "@/components/ui/BottleneckVisual"
import BottleneckCalculatorSeo from "@/components/seo/bottleneck-calculator"


export default function Page() {

  return (

    <main className="relative bg-slate-1000 text-slate-200 overflow-hidden">

      {/* glowing background */}

      <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />


      <section className="max-w-6xl mt-8 px-4 sm:px-6 lg:px-8  items-center">

        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-4xl font-boldtext-cyan-400  mb-4">
            Bottleneck Calculator
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            The Bottleneck Calculator helps you analyze how well your CPU and GPU
            work together. A bottleneck occurs when one component limits the
            performance of another, reducing overall efficiency. 
            you can plan upgrades and achieve smoother performance.
          </p>
        </div>

        {/* LEFT SIDE */}
        <BottleneckCalculator />


        {/* RIGHT SIDE CREATIVE */}


        




      </section>

      <section className="max-w-4xl m-16 pt-4 px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-100">


        <BottleneckCalculatorSeo />

      </section>

    </main>
  )
}