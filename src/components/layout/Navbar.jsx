"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Bottleneck", href: "/tools/bottleneck-calculator" },
    { label: "FPS", href: "/tools/fps-calculator" },
    { label: "DPS", href: "/tools/dps-calculator" },
    { label: "XP", href: "/tools/xp-calculator" },
  ];

  // Close menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#0B0F19]/95 backdrop-blur-md border-b border-cyan-400/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            
            {/* LOGO */}
            <Link href="/" className="group flex items-center gap-1 sm:gap-2 flex-shrink-0 min-w-fit">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-2 sm:px-3 py-1 sm:py-2 bg-[#0B0F19] rounded-lg border border-cyan-400/50">
                  <span className="text-base sm:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                    GT
                  </span>
                </div>
              </motion.div>
              <span className="hidden sm:inline text-base sm:text-lg font-bold text-gray-100 group-hover:text-cyan-300 transition">
                GameTools
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="px-2 py-2 text-gray-300 hover:text-cyan-300 font-medium text-xs xl:text-sm transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA BUTTON - Hidden on all mobile/tablet screens */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <motion.a
                href="#tools"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-4 md:px-5 py-2 font-semibold text-xs md:text-sm overflow-hidden rounded-lg whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-110"></div>
                <span className="relative text-white">Get Started</span>
              </motion.a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0 ml-2"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-cyan-300" />
              ) : (
                <Menu size={24} className="text-gray-300" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
            />
            
            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-[#0B0F19]/98 backdrop-blur-md border-l border-cyan-400/20 z-50 overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-cyan-400/10 sticky top-0 bg-[#0B0F19]/98 backdrop-blur-md">
                <h2 className="text-lg font-semibold text-gray-100">Menu</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors -mr-2"
                >
                  <X size={22} className="text-cyan-300" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-4 sm:p-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/10 active:bg-cyan-400/20 rounded-lg transition-all duration-200 font-medium group"
                    >
                      <span className="inline-block mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-4 mx-4 sm:mx-6 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>

              {/* CTA Button in Mobile Menu */}
              <div className="p-4 sm:p-6">
                <motion.a
                  href="#tools"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 py-3 font-semibold text-base overflow-hidden rounded-lg block text-center w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-105"></div>
                  <span className="relative text-white">Get Started</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Import AnimatePresence from framer-motion at the top if not already imported
import { AnimatePresence } from "framer-motion";
