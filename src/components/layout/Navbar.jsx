"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"


const tools = [
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
  {
    label: "Pokémon Type Calculator",
    href: "/tools/pokemon-type-calculator",
  },
  {
    label: "Blox Fruits Calculator",
    href: "/tools/blox-fruits-calculator",
  },
  {
    label: "VRAM Calculator",
    href: "/tools/vram-calculator-for-llm",
  },
  {
    label: "Aspect Ratio Finder",
    href: "/tools/aspect-ratio-finder",
  },
]


export default function Navbar() {
  const pathname = usePathname() || ""

  const [toolsOpen, setToolsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false)

  const toolsRef = useRef(null)


  const toolsActive = tools.some(
    (tool) =>
      pathname === tool.href ||
      pathname.startsWith(`${tool.href}/`)
  )


  /* =========================================================
     DESKTOP DROPDOWN:
     Close on outside click or Escape.

     One effect instead of separate global listener effects.
  ========================================================= */

  useEffect(() => {
    function handlePointerDown(event) {
      if (
        toolsRef.current &&
        !toolsRef.current.contains(event.target)
      ) {
        setToolsOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key !== "Escape") return

      setToolsOpen(false)
      setMobileMenuOpen(false)
      setMobileToolsOpen(false)
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      )

      document.removeEventListener(
        "keydown",
        handleKeyDown
      )
    }
  }, [])


  /* =========================================================
     Close navigation after route change
  ========================================================= */

  useEffect(() => {
    setToolsOpen(false)
    setMobileMenuOpen(false)
    setMobileToolsOpen(false)
  }, [pathname])


  /* =========================================================
     Lock body scrolling while mobile drawer is open
  ========================================================= */

  useEffect(() => {
    if (!mobileMenuOpen) return

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])


  function closeMobileMenu() {
    setMobileMenuOpen(false)
    setMobileToolsOpen(false)
  }


  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <nav className="sticky top-0 z-50 w-full border-b border-cyan-400/10 bg-[#0B0F19]/[0.98]">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">

          <div className="flex h-[72px] items-center justify-between">

            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              href="/"
              aria-label="PerfCalcPro home"
              className="group flex shrink-0 items-center gap-2 !no-underline"
            >

              <div className="relative transition-transform duration-300 group-hover:rotate-6">

                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 transition-opacity duration-200 group-hover:opacity-60"
                />

                <div className="relative rounded-lg border border-cyan-400/40 bg-[#0B0F19] px-3 py-2">

                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-lg font-bold text-transparent">
                    PCP
                  </span>

                </div>

              </div>


              <span className="hidden text-lg font-bold text-gray-100 transition-colors duration-200 group-hover:text-cyan-300 sm:inline">
                PerfCalcPro
              </span>

            </Link>


            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <div className="hidden flex-1 items-center justify-center gap-7 lg:flex xl:gap-9">

              <DesktopLink
                href="/"
                active={pathname === "/"}
              >
                Home
              </DesktopLink>


              {/* ===============================================
                  DESKTOP TOOLS DROPDOWN
              =============================================== */}

              <div
                ref={toolsRef}
                className="relative"
              >

                <button
                  type="button"
                  onClick={() =>
                    setToolsOpen((current) => !current)
                  }
                  aria-expanded={toolsOpen}
                  aria-haspopup="menu"
                  aria-controls="desktop-tools-menu"
                  className={`group relative flex cursor-pointer appearance-none items-center gap-1.5 border-0 bg-transparent px-1 py-2 text-sm font-medium shadow-none outline-none transition-[color,transform] duration-200 hover:-translate-y-0.5 ${
                    toolsOpen || toolsActive
                      ? "text-cyan-300"
                      : "text-gray-300 hover:text-cyan-300"
                  }`}
                >

                  <span>Tools</span>

                  <ChevronIcon
                    className={`transition-transform duration-200 ${
                      toolsOpen ? "rotate-180" : ""
                    }`}
                  />

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-[width] duration-200 ${
                      toolsOpen || toolsActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />

                </button>


                {/* Keep mounted; CSS handles visibility.
                    No Framer Motion / AnimatePresence. */}

                <div
                  id="desktop-tools-menu"
                  role="menu"
                  aria-hidden={!toolsOpen}
                  className={`absolute left-1/2 top-full mt-3 w-[280px] -translate-x-1/2 overflow-hidden rounded-xl border border-cyan-400/15 bg-[#0B0F19] p-2 shadow-2xl shadow-black/40 transition-[opacity,transform,visibility] duration-150 ${
                    toolsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0 pointer-events-none"
                  }`}
                >

                  <div className="px-3 pb-2 pt-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Calculators
                    </p>
                  </div>


                  <div className="space-y-0.5">

                    {tools.map((tool) => {
                      const active =
                        pathname === tool.href

                      return (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          role="menuitem"
                          tabIndex={toolsOpen ? 0 : -1}
                          onClick={() =>
                            setToolsOpen(false)
                          }
                          className={`block rounded-lg px-3 py-2.5 text-sm font-medium !no-underline transition-colors duration-150 ${
                            active
                              ? "bg-cyan-400/10 !text-cyan-300"
                              : "!text-gray-300 hover:bg-white/[0.05] hover:!text-cyan-300"
                          }`}
                        >
                          {tool.label}
                        </Link>
                      )
                    })}

                  </div>

                </div>

              </div>


              <DesktopLink
                href="/about"
                active={pathname === "/about"}
              >
                About
              </DesktopLink>


              <DesktopLink
                href="/contact"
                active={pathname === "/contact"}
              >
                Contact Us
              </DesktopLink>


              <DesktopLink
                href="/blog"
                active={pathname.startsWith("/blog")}
              >
                Blog
              </DesktopLink>

            </div>


            {/* =================================================
                DESKTOP CTA
            ================================================= */}

            <div className="hidden items-center lg:flex">

              <Link
                href="/#tools"
                className="inline-flex min-h-10 min-w-[118px] items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-sm font-semibold !text-white !no-underline shadow-md shadow-cyan-500/10 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 active:translate-y-0"
              >
                Get Started
              </Link>

            </div>


            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen((current) => !current)
              }
              aria-label={
                mobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-lg !border-0 !bg-transparent !bg-none p-0 !text-gray-300 !shadow-none transition-colors duration-200 hover:!text-cyan-300 focus:outline-none lg:hidden"
            >

              {mobileMenuOpen ? (
                <CloseIcon />
              ) : (
                <MenuIcon />
              )}

            </button>

          </div>

        </div>
      </nav>


      {/* =====================================================
          MOBILE BACKDROP

          Always mounted to allow a CSS transition.
          No AnimatePresence.
      ====================================================== */}

      <button
        type="button"
        aria-label="Close mobile navigation"
        tabIndex={mobileMenuOpen ? 0 : -1}
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-40 !border-0 !bg-black/70 !shadow-none transition-opacity duration-200 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />


      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        className={`fixed bottom-0 right-0 top-0 z-[60] w-[88vw] max-w-[360px] overflow-x-hidden overflow-y-auto border-l border-cyan-400/15 bg-[#0B0F19] shadow-2xl shadow-black/50 transition-transform duration-200 ease-out lg:hidden ${
          mobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full pointer-events-none"
        }`}
      >

        {/* =================================================
            MOBILE HEADER
        ================================================= */}

        <div className="sticky top-0 z-10 flex min-h-[72px] items-center justify-between border-b border-cyan-400/10 bg-[#0B0F19] px-5 py-4">

          <div>

            <p className="text-lg font-semibold !text-white">
              Menu
            </p>

            <p className="mt-0.5 text-xs !text-gray-500">
              PerfCalcPro
            </p>

          </div>


          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg p-0 !border-0 !bg-transparent !bg-none !text-cyan-300 !shadow-none transition-colors hover:!text-cyan-200 focus:outline-none"
          >
            <CloseIcon size={22} />
          </button>

        </div>


        {/* =================================================
            MOBILE LINKS
        ================================================= */}

        <div className="p-4">

          <MobileLink
            href="/"
            active={pathname === "/"}
            onClick={closeMobileMenu}
          >
            Home
          </MobileLink>


          {/* ===============================================
              MOBILE TOOLS
          =============================================== */}

          <button
            type="button"
            onClick={() =>
              setMobileToolsOpen((current) => !current)
            }
            aria-expanded={mobileToolsOpen}
            aria-controls="mobile-tools-list"
            className={`mt-1 flex min-h-12 w-full appearance-none items-center justify-between rounded-xl border-0 px-4 py-3 text-left text-base font-medium shadow-none outline-none transition-colors duration-200 ${
              mobileToolsOpen || toolsActive
                ? "!bg-cyan-400/10 !text-cyan-300"
                : "!bg-transparent !text-gray-300 hover:!bg-white/[0.04] hover:!text-cyan-300"
            }`}
          >

            <span>Tools</span>

            <ChevronIcon
              size={18}
              className={`transition-transform duration-200 ${
                mobileToolsOpen ? "rotate-180" : ""
              }`}
            />

          </button>


          <div
            id="mobile-tools-list"
            aria-hidden={!mobileToolsOpen}
            className={`grid transition-[grid-template-rows,opacity] duration-200 ${
              mobileToolsOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >

            <div className="overflow-hidden">

              <div className="ml-3 mt-2 space-y-1 border-l border-cyan-400/20 pl-3">

                {tools.map((tool) => {
                  const active =
                    pathname === tool.href

                  return (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      tabIndex={
                        mobileMenuOpen &&
                        mobileToolsOpen
                          ? 0
                          : -1
                      }
                      onClick={closeMobileMenu}
                      className={`flex min-h-11 w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium !no-underline transition-colors duration-150 ${
                        active
                          ? "bg-cyan-400/10 !text-cyan-300"
                          : "!text-gray-400 hover:bg-white/[0.04] hover:!text-cyan-300"
                      }`}
                    >
                      {tool.label}
                    </Link>
                  )
                })}

              </div>

            </div>

          </div>


          <div className="mt-2 space-y-1">

            <MobileLink
              href="/about"
              active={pathname === "/about"}
              onClick={closeMobileMenu}
            >
              About
            </MobileLink>


            <MobileLink
              href="/contact"
              active={pathname === "/contact"}
              onClick={closeMobileMenu}
            >
              Contact Us
            </MobileLink>


            <MobileLink
              href="/blog"
              active={pathname.startsWith("/blog")}
              onClick={closeMobileMenu}
            >
              Blog
            </MobileLink>

          </div>


          <div className="my-5 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />


          <Link
            href="/#tools"
            onClick={closeMobileMenu}
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-center text-sm font-semibold !text-white !no-underline shadow-lg shadow-cyan-500/10 transition-transform duration-200 active:scale-[0.98]"
          >
            Explore Tools
          </Link>

        </div>

      </aside>
    </>
  )
}


/* =========================================================
   DESKTOP LINK
========================================================= */

function DesktopLink({
  href,
  active,
  children,
}) {
  return (
    <Link
      href={href}
      className={`group relative whitespace-nowrap px-1 py-2 text-sm font-medium !no-underline transition-[color,transform] duration-200 hover:-translate-y-0.5 ${
        active
          ? "!text-cyan-300"
          : "!text-gray-300 hover:!text-cyan-300"
      }`}
    >

      {children}

      <span
        aria-hidden="true"
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-[width] duration-200 ${
          active
            ? "w-full"
            : "w-0 group-hover:w-full"
        }`}
      />

    </Link>
  )
}


/* =========================================================
   MOBILE LINK
========================================================= */

function MobileLink({
  href,
  active,
  onClick,
  children,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex min-h-12 w-full items-center rounded-xl px-4 py-3 text-base font-medium !no-underline transition-colors duration-200 ${
        active
          ? "bg-cyan-400/10 !text-cyan-300"
          : "!text-gray-300 hover:bg-white/[0.04] hover:!text-cyan-300"
      }`}
    >
      {children}
    </Link>
  )
}


/* =========================================================
   LIGHTWEIGHT SVG ICONS

   Replaces lucide-react in this global component.
========================================================= */

function ChevronIcon({
  size = 15,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function MenuIcon({
  size = 24,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  )
}


function CloseIcon({
  size = 24,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}