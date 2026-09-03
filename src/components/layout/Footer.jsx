"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Linkedin } from "lucide-react"
import {
  DiscordIcon,
  PinterestIcon,
  XIcon,
} from "@/components/icons/BrandIcons"
import { SITE_EMAIL } from "@/lib/seo"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const popularTools = [
    {
      label: "Bottleneck Calculator",
      href: "/tools/bottleneck-calculator",
    },
    {
      label: "FPS Calculator",
      href: "/tools/fps-calculator",
    },
    {
      label: "DPS Calculator",
      href: "/tools/dps-calculator",
    },
    {
      label: "XP Calculator",
      href: "/tools/xp-calculator",
    },
    {
      label: "Download Time Calculator",
      href: "/tools/download-time-calculator",
    },
    {
      label: "eDPI Calculator",
      href: "/tools/edpi-calculator",
    },
  ]

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ]

  const socialLinks = [
    {
      icon: XIcon,
      href: "https://x.com/GawaisG98795",
      label: "X",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/awais-tasleem-142457412/",
      label: "LinkedIn",
    },
    {
      icon: DiscordIcon,
      href: "https://discord.com/channels/1507297665636110338/1507299485372518510",
      label: "Discord",
    },
    {
      icon: PinterestIcon,
      href: "https://www.pinterest.com/perfcalcpro/",
      label: "Pinterest",
    },
  ]

  return (
    <footer className="border-t border-white/[0.04] bg-[#020817]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.35fr_0.9fr_0.9fr] lg:gap-24 lg:py-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="PerfCalcPro Home"
            >
              {/* Logo */}
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 shadow-[0_0_22px_rgba(34,211,238,0.18)]">
                <div className="absolute inset-[3px] rounded-full border border-white/30" />

                <span className="relative text-[13px] font-black tracking-[-1px] text-white">
                  PCP
                </span>
              </div>

              {/* Brand Name */}
              <span className="text-[24px] font-bold tracking-tight">
                <span className="text-cyan-400">PerfCalc</span>
                <span className="text-violet-400">Pro</span>
              </span>
            </Link>

            <p className="mt-5 max-w-[390px] text-[14px] leading-6 text-slate-400">
              Free browser-based gaming calculators for FPS, performance,
              bottlenecks, DPS, sensitivity, and more. Fast, practical tools
              built for gamers.
            </p>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/60 bg-white/[0.025] text-slate-400 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                  >
                    <Icon size={17} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="mb-6 text-[14px] font-bold uppercase tracking-[0.15em] text-slate-100">
              Popular Tools
            </h3>

            <ul className="space-y-[14px]">
              {popularTools.slice(0, 6).map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="text-[14px] text-sky-300/90 transition-colors duration-200 hover:text-cyan-300"
                  >
                    {tool.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/tools"
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
            >
              View all tools
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-[14px] font-bold uppercase tracking-[0.15em] text-slate-100">
              Company
            </h3>

            <ul className="space-y-[14px]">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-sky-300/90 transition-colors duration-200 hover:text-cyan-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Support */}
            <div className="mt-7 border-t border-white/[0.08] pt-5">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                Support
              </p>

              <a
                href={`mailto:${SITE_EMAIL}`}
                className="text-[14px] text-sky-300 transition-colors hover:text-cyan-300"
              >
                {SITE_EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.09]" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[12px] text-slate-400">
              © {currentYear}{" "}
              <span className="text-slate-500">PerfCalcPro.</span> All rights
              reserved.
            </p>

            <p className="mt-4 max-w-[870px] text-[12px] leading-5 text-slate-600">
              PerfCalcPro is an independent gaming tools platform. Some pages
              may contain advertisements or affiliate links, which help
              support the site without affecting how our tools work.
            </p>
          </div>

          {/* Bottom Links */}
          <div className="flex shrink-0 items-center gap-5 text-[12px] text-slate-500">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-cyan-300"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-cyan-300"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-cyan-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}