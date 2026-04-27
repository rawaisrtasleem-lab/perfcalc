"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Tools: [
      { label: "Bottleneck Calculator", href: "/tools/bottleneck-calculator" },
      { label: "FPS Calculator", href: "/tools/fps-calculator" },
      { label: "DPS Calculator", href: "/tools/dps-calculator" },
      { label: "XP Calculator", href: "/tools/xp-calculator" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="relative mt-7 mb-6 bg-gradient-to-b from-[#0B0F19] via-[#0F1628] to-[#0B0F19] border-t border-cyan-400/10">
      <div className="max-w-7xl mx-auto mt-8 sm:mt-14 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-16 md:py-20 lg:py-28">
        
        {/* MAIN FOOTER CONTENT */}
        <div className="grid mt-8 sm:mt-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-20 mb-8 sm:mb-12 lg:mb-20">
          
          {/* BRAND SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-50"></div>
                <div className="relative px-2 sm:px-3 py-1 sm:py-2 bg-[#0B0F19] rounded-lg border border-cyan-400/50">
                  <span className="text-base sm:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                    GT
                  </span>
                </div>
              </div>
              <span className="text-lg sm:text-2xl font-bold text-gray-100">GameTools</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
              Premium gaming calculators designed for competitive gamers. Get instant insights on FPS, DPS, bottlenecks, and more.
            </p>
            {/* SOCIAL LINKS */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    className="p-2 sm:p-3 rounded-lg bg-white/5 border border-cyan-400/20 text-gray-400 hover:text-cyan-300 hover:border-cyan-400/60 transition-all duration-300"
                    title={social.label}
                  >
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* FOOTER LINKS */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="sm:col-span-1"
            >
              <h3 className="font-bold text-gray-100 mb-3 sm:mb-5 text-xs sm:text-sm md:text-base uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2 sm:space-y-4">
                {links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-xs sm:text-sm md:text-base hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1 sm:gap-2 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mb-6 sm:mb-8 lg:mb-10"></div>

        {/* BOTTOM FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4"
        >
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
            © {currentYear} GameTools. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 sm:gap-4 text-xs text-gray-500 text-center order-1 sm:order-2">
            <span className="text-xs">Made with Next.js & Tailwind</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
