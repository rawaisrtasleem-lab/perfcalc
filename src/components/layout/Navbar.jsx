"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";


const tools = [
  { label: "Bottleneck Calculator", href: "/tools/bottleneck-calculator" },
  { label: "FPS Calculator", href: "/tools/fps-calculator" },
  { label: "DPS Calculator", href: "/tools/dps-calculator" },
  { label: "XP Calculator", href: "/tools/xp-calculator" },
  { label: "Download Time Calculator", href: "/tools/download-time-calculator" },
  { label: "eDPI Calculator", href: "/tools/edpi-calculator" },
  { label: "Pokémon Type Calculator", href: "/tools/pokemon-type-calculator" },
];


export default function Navbar() {
  const pathname = usePathname();

  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

  const toolsRef = useRef(null);

  const toolsActive = pathname?.startsWith("/tools");


  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (toolsRef.current && !toolsRef.current.contains(event.target)) {
        setToolsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);


  // Close navigation with Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setToolsOpen(false);
        setMobileMenuOpen(false);
        setMobileToolsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  // Close menus after navigation
  useEffect(() => {
    setToolsOpen(false);
    setMobileMenuOpen(false);
    setMobileToolsOpen(false);
  }, [pathname]);


  // Disable body scroll while mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);


  const toggleTools = () => {
    setToolsOpen((current) => !current);
  };


  const handleToolsKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleTools();
    }

    if (event.key === "Escape") {
      setToolsOpen(false);
    }
  };


  const toggleMobileTools = () => {
    setMobileToolsOpen((current) => !current);
  };


  const handleMobileToolsKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMobileTools();
    }
  };


  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileToolsOpen(false);
  };


  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-cyan-400/10 bg-[#0B0F19]/95 backdrop-blur-md">

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">

          <div className="flex h-[72px] items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              aria-label="PerfCalcPro home"
              className="group flex items-center gap-2"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-40 blur transition-opacity duration-300 group-hover:opacity-80" />

                <div className="relative rounded-lg border border-cyan-400/40 bg-[#0B0F19] px-3 py-2">
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-lg font-bold text-transparent">
                    PCP
                  </span>
                </div>
              </motion.div>

              <span className="hidden text-lg font-bold text-gray-100 transition-colors duration-200 group-hover:text-cyan-300 sm:inline">
                PerfCalcPro
              </span>
            </Link>


            {/* Desktop navigation */}
            <div className="hidden flex-1 items-center justify-center gap-7 lg:flex xl:gap-9">

              <DesktopLink href="/" active={pathname === "/"}>
                Home
              </DesktopLink>


              {/* Tools */}
              <div ref={toolsRef} className="relative">

                {/*
                  Intentionally NOT a <button>.

                  This prevents any global button background /
                  gradient styles from affecting the Tools link.
                */}
                <motion.div
                  role="button"
                  tabIndex={0}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  onClick={toggleTools}
                  onKeyDown={handleToolsKeyDown}
                  aria-expanded={toolsOpen}
                  aria-haspopup="menu"
                  aria-controls="desktop-tools-menu"
                  className={`group relative flex cursor-pointer select-none items-center gap-1.5 px-1 py-2 text-sm font-medium outline-none transition-colors duration-200 ${toolsOpen || toolsActive
                      ? "text-cyan-300"
                      : "text-gray-300 hover:text-cyan-300"
                    }`}
                >
                  <span className="text-cyan-500">
                    Tools
                  </span>

                  <ChevronDown
                    size={15}
                    strokeWidth={2}
                    className={`transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""
                      }`}
                  />

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${toolsOpen || toolsActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                      }`}
                  />
                </motion.div>


                {/* Compact desktop dropdown */}
                <AnimatePresence>
                  {toolsOpen && (
                    <motion.div
                      id="desktop-tools-menu"
                      role="menu"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-1/2 top-full mt-3 w-[270px] -translate-x-1/2 overflow-hidden rounded-xl border border-cyan-400/15 bg-[#0B0F19] p-2 shadow-2xl shadow-black/50"
                    >

                      <div className="px-3 pb-2 pt-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                          Calculators
                        </p>
                      </div>


                      <div className="space-y-0.5">

                        {tools.map((tool) => {
                          const active = pathname === tool.href;

                          return (
                            <Link
                              key={tool.href}
                              href={tool.href}
                              role="menuitem"
                              onClick={() => setToolsOpen(false)}
                              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150 ${active
                                  ? "bg-cyan-400/10 text-cyan-300"
                                  : "text-gray-300 hover:bg-white/[0.05] hover:text-cyan-300"
                                }`}
                            >
                              {tool.label}
                            </Link>
                          );
                        })}

                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>


              <DesktopLink href="/about" active={pathname === "/about"}>
                About
              </DesktopLink>

              <DesktopLink href="/contact" active={pathname === "/contact"}>
                Contact Us
              </DesktopLink>

              <DesktopLink href="/blog" active={pathname?.startsWith("/blog")}>
                Blog
              </DesktopLink>

            </div>


            {/* Desktop CTA */}
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/#tools"
                className="
      inline-flex min-h-10 min-w-[118px]
      items-center justify-center
      rounded-lg
      bg-gradient-to-r from-cyan-500 to-blue-500
      px-5 py-2.5
      text-sm font-semibold
      !text-white !no-underline
      shadow-md shadow-cyan-500/10
      transition-all duration-200
      hover:from-cyan-400 hover:to-blue-400
      hover:shadow-lg hover:shadow-cyan-500/20
      active:scale-[0.98]
    "
              >
                Get Started
              </Link>
            </div>


            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="appearance-none !border-0 !bg-transparent !bg-none !shadow-none rounded-lg p-2 text-gray-300 transition-colors duration-200 hover:text-cyan-300 focus:outline-none lg:hidden"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

        </div>

      </nav>


      {/* Mobile navigation */}
      <AnimatePresence>

        {mobileMenuOpen && (
          <>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />


            {/* Mobile drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              aria-label="Mobile navigation"
              className="fixed bottom-0 right-0 top-0 z-50 w-full max-w-xs overflow-y-auto border-l border-cyan-400/15 bg-[#0B0F19] sm:max-w-sm lg:hidden"
            >

              {/* Mobile header */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-cyan-400/10 bg-[#0B0F19] px-5 py-4">

                <div>
                  <p className="text-lg font-semibold text-white">
                    Menu
                  </p>

                  <p className="text-xs text-gray-500">
                    PerfCalcPro
                  </p>
                </div>


                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                  className="appearance-none !border-0 !bg-transparent !bg-none !shadow-none rounded-lg p-2 text-cyan-300 focus:outline-none"
                >
                  <X size={22} />
                </button>

              </div>


              <div className="p-4">

                <MobileLink
                  href="/"
                  active={pathname === "/"}
                  onClick={closeMobileMenu}
                >
                  Home
                </MobileLink>


                {/* Mobile tools */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={toggleMobileTools}
                  onKeyDown={handleMobileToolsKeyDown}
                  aria-expanded={mobileToolsOpen}
                  className={`mt-1 flex cursor-pointer select-none items-center justify-between rounded-lg px-4 py-3 text-base font-medium outline-none transition-colors duration-200 ${mobileToolsOpen || toolsActive
                      ? "text-cyan-300"
                      : "text-gray-300 hover:text-cyan-300"
                    }`}
                >
                  <span className="text-cyan-500">
                    Tools
                  </span>

                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-200 ${mobileToolsOpen ? "rotate-180" : ""
                      }`}
                  />
                </div>


                <AnimatePresence initial={false}>

                  {mobileToolsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >

                      <div className="ml-4 mt-1 space-y-0.5 border-l border-cyan-400/15 pl-3">

                        {tools.map((tool) => {
                          const active = pathname === tool.href;

                          return (
                            <Link
                              key={tool.href}
                              href={tool.href}
                              onClick={closeMobileMenu}
                              className={`block rounded-lg px-3 py-2.5 text-sm transition-colors duration-150 ${active
                                  ? "bg-cyan-400/10 text-cyan-300"
                                  : "text-gray-400 hover:text-cyan-300"
                                }`}
                            >
                              {tool.label}
                            </Link>
                          );
                        })}

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>


                <div className="mt-1">

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
                    active={pathname?.startsWith("/blog")}
                    onClick={closeMobileMenu}
                  >
                    Blog
                  </MobileLink>

                </div>


                <div className="my-5 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />


                <Link
                  href="/#tools"
                  onClick={closeMobileMenu}
                  className="block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Explore Tools
                </Link>

              </div>

            </motion.aside>

          </>
        )}

      </AnimatePresence>
    </>
  );
}


function DesktopLink({ href, active, children }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >

      <Link
        href={href}
        className={`group relative text-blue-500 whitespace-nowrap px-1 py-2 text-sm font-medium transition-colors duration-200 ${active
            ? "text-cyan-300"
            : "text-gray-300 hover:text-cyan-300"
          }`}
      >
        {children}

        <span
          className={`absolute  text-blue-500 bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${active
              ? "w-full"
              : "w-0 group-hover:w-full"
            }`}
        />
      </Link>

    </motion.div>
  );
}


function MobileLink({ href, active, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${active
          ? "text-cyan-300"
          : "text-gray-300 hover:text-cyan-300"
        }`}
    >
      {children}
    </Link>
  );
}