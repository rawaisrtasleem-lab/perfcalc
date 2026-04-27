"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function ToolCard({ title, description, icon: Icon, link, children }) {
  const content = children ? (
    children
  ) : (
    <div className="flex flex-col gap-4 h-full justify-between p-8">
      <div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 p-8 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-500/50 group-hover:to-blue-500/50 transition-all duration-300"
        >
          {Icon && <Icon size={28} className="text-cyan-300 p-8 group-hover:text-cyan-200 transition-colors" />}
        </motion.div>

        {title && (
          <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-2 leading-snug">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 text-cyan-300 group-hover:text-cyan-200 transition-colors text-xs md:text-sm font-semibold mt-4"
      >
        Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </motion.div>
    </div>
  );

  const cardContent = (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-400/30 p-5 md:p-6 cursor-pointer hover:border-cyan-400/60 transition-all duration-300"
    >
      {/* ANIMATED GRADIENT BORDER */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px] bg-gradient-to-r from-cyan-500/50 to-blue-500/50 pointer-events-none">
        <div className="absolute inset-[1px] bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent rounded-xl"></div>
      </div>

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl blur-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 transition-opacity duration-300 -z-10"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        {content}
      </div>
    </motion.div>
  );

  return link ? <Link href={link}>{cardContent}</Link> : cardContent;
}