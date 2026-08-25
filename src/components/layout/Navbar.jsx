"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";


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

    /*
        If your Blox Fruits page is:

        app/blox-fruits-calculator/page.jsx

        keep this:
    */
    {
        label: "Blox Fruits Calculator",
        href: "/tools/blox-fruits-calculator",
    },

    /*
        If instead your page is inside:

        app/tools/blox-fruits-calculator/page.jsx

        then change the href above to:

        href: "/tools/blox-fruits-calculator"
    */
];


export default function Navbar() {
    const pathname = usePathname() || "";

    const [toolsOpen, setToolsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

    const toolsRef = useRef(null);


    const toolsActive = tools.some((tool) => {
        return (
            pathname === tool.href ||
            pathname.startsWith(`${tool.href}/`)
        );
    });


    /* Close desktop dropdown when clicking outside */
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                toolsRef.current &&
                !toolsRef.current.contains(event.target)
            ) {
                setToolsOpen(false);
            }
        };

        document.addEventListener(
            "pointerdown",
            handleOutsideClick
        );

        return () => {
            document.removeEventListener(
                "pointerdown",
                handleOutsideClick
            );
        };
    }, []);


    /* Close menus with Escape */
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key !== "Escape") {
                return;
            }

            setToolsOpen(false);
            setMobileMenuOpen(false);
            setMobileToolsOpen(false);
        };

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, []);


    /* Close navigation after route change */
    useEffect(() => {
        setToolsOpen(false);
        setMobileMenuOpen(false);
        setMobileToolsOpen(false);
    }, [pathname]);


    /* Disable page scroll while drawer is open */
    useEffect(() => {
        if (!mobileMenuOpen) {
            return;
        }

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow =
                previousOverflow;
        };
    }, [mobileMenuOpen]);


    function closeMobileMenu() {
        setMobileMenuOpen(false);
        setMobileToolsOpen(false);
    }


    return (
        <>
            <nav className="sticky top-0 z-50 w-full border-b border-cyan-400/10 bg-[#0B0F19]/95 backdrop-blur-md">

                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">

                    <div className="flex h-[72px] items-center justify-between">

                        {/* Logo */}
                        <Link
                            href="/"
                            aria-label="PerfCalcPro home"
                            className="group flex shrink-0 items-center gap-2 !no-underline"
                        >

                            <motion.div
                                whileHover={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 0.6,
                                }}
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

                            <DesktopLink
                                href="/"
                                active={pathname === "/"}
                            >
                                Home
                            </DesktopLink>


                            {/* Desktop Tools */}
                            <div
                                ref={toolsRef}
                                className="relative"
                            >

                                <motion.button
                                    type="button"
                                    whileHover={{
                                        y: -2,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                    }}
                                    onClick={() =>
                                        setToolsOpen(
                                            (current) =>
                                                !current
                                        )
                                    }
                                    aria-expanded={toolsOpen}
                                    aria-haspopup="menu"
                                    aria-controls="desktop-tools-menu"
                                    className={`group relative flex cursor-pointer appearance-none items-center gap-1.5 border-0 bg-transparent bg-none px-1 py-2 text-sm font-medium shadow-none outline-none transition-colors duration-200 ${
                                        toolsOpen ||
                                        toolsActive
                                            ? "text-cyan-300"
                                            : "text-gray-300 hover:text-cyan-300"
                                    }`}
                                >

                                    <span>
                                        Tools
                                    </span>


                                    <ChevronDown
                                        size={15}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                        className={`transition-transform duration-200 ${
                                            toolsOpen
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />


                                    <span
                                        aria-hidden="true"
                                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${
                                            toolsOpen ||
                                            toolsActive
                                                ? "w-full"
                                                : "w-0 group-hover:w-full"
                                        }`}
                                    />

                                </motion.button>


                                <AnimatePresence>

                                    {toolsOpen && (
                                        <motion.div
                                            id="desktop-tools-menu"
                                            role="menu"
                                            initial={{
                                                opacity: 0,
                                                y: 8,
                                                scale: 0.98,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 6,
                                                scale: 0.98,
                                            }}
                                            transition={{
                                                duration: 0.16,
                                            }}
                                            className="absolute left-1/2 top-full mt-3 w-[280px] -translate-x-1/2 overflow-hidden rounded-xl border border-cyan-400/15 bg-[#0B0F19] p-2 shadow-2xl shadow-black/50"
                                        >

                                            <div className="px-3 pb-2 pt-1">

                                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                                                    Calculators
                                                </p>

                                            </div>


                                            <div className="space-y-0.5">

                                                {tools.map(
                                                    (tool) => {
                                                        const active =
                                                            pathname ===
                                                            tool.href;

                                                        return (
                                                            <Link
                                                                key={
                                                                    tool.href
                                                                }
                                                                href={
                                                                    tool.href
                                                                }
                                                                role="menuitem"
                                                                onClick={() =>
                                                                    setToolsOpen(
                                                                        false
                                                                    )
                                                                }
                                                                className={`block rounded-lg px-3 py-2.5 text-sm font-medium !no-underline transition-colors duration-150 ${
                                                                    active
                                                                        ? "bg-cyan-400/10 !text-cyan-300"
                                                                        : "!text-gray-300 hover:bg-white/[0.05] hover:!text-cyan-300"
                                                                }`}
                                                            >
                                                                {
                                                                    tool.label
                                                                }
                                                            </Link>
                                                        );
                                                    }
                                                )}

                                            </div>

                                        </motion.div>
                                    )}

                                </AnimatePresence>

                            </div>


                            <DesktopLink
                                href="/about"
                                active={
                                    pathname ===
                                    "/about"
                                }
                            >
                                About
                            </DesktopLink>


                            <DesktopLink
                                href="/contact"
                                active={
                                    pathname ===
                                    "/contact"
                                }
                            >
                                Contact Us
                            </DesktopLink>


                            <DesktopLink
                                href="/blog"
                                active={pathname.startsWith(
                                    "/blog"
                                )}
                            >
                                Blog
                            </DesktopLink>

                        </div>


                        {/* Desktop CTA */}
                        <div className="hidden items-center lg:flex">

                            <Link
                                href="/#tools"
                                className="inline-flex min-h-10 min-w-[118px] items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-sm font-semibold !text-white !no-underline shadow-md shadow-cyan-500/10 transition-all duration-200 hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98]"
                            >
                                Get Started
                            </Link>

                        </div>


                        {/* Mobile trigger */}
                        <button
                            type="button"
                            onClick={() =>
                                setMobileMenuOpen(
                                    (current) =>
                                        !current
                                )
                            }
                            aria-label={
                                mobileMenuOpen
                                    ? "Close menu"
                                    : "Open menu"
                            }
                            aria-expanded={
                                mobileMenuOpen
                            }
                            aria-controls="mobile-navigation"
                            className="rounded-lg p-2 text-gray-300 transition-colors duration-200 hover:text-cyan-300 focus:outline-none lg:hidden !border-0 !bg-transparent !bg-none !shadow-none"
                        >

                            {mobileMenuOpen ? (
                                <X
                                    size={24}
                                    aria-hidden="true"
                                />
                            ) : (
                                <Menu
                                    size={24}
                                    aria-hidden="true"
                                />
                            )}

                        </button>

                    </div>

                </div>

            </nav>


            {/* Mobile Navigation */}
            <AnimatePresence>

                {mobileMenuOpen && (
                    <>

                        {/* Backdrop */}
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            onClick={
                                closeMobileMenu
                            }
                            className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm lg:hidden"
                        />


                        {/* Mobile Drawer */}
                        <motion.aside
                            id="mobile-navigation"
                            initial={{
                                x: "100%",
                            }}
                            animate={{
                                x: 0,
                            }}
                            exit={{
                                x: "100%",
                            }}
                            transition={{
                                duration: 0.28,
                                ease: "easeInOut",
                            }}
                            aria-label="Mobile navigation"
                            className="fixed bottom-0 right-0 top-0 z-[60] w-[88vw] max-w-[360px] overflow-x-hidden overflow-y-auto border-l border-cyan-400/15 bg-[#0B0F19] shadow-2xl shadow-black/60 lg:hidden"
                        >

                            {/* Mobile Header */}
                            <div className="sticky top-0 z-10 flex min-h-[72px] items-center justify-between border-b border-cyan-400/10 bg-[#0B0F19]/95 px-5 py-4 backdrop-blur">

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
                                    onClick={
                                        closeMobileMenu
                                    }
                                    aria-label="Close menu"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg p-0 !text-cyan-300 focus:outline-none !border-0 !bg-transparent !bg-none !shadow-none"
                                >
                                    <X
                                        size={22}
                                        aria-hidden="true"
                                    />
                                </button>

                            </div>


                            <div className="p-4">

                                <MobileLink
                                    href="/"
                                    active={
                                        pathname ===
                                        "/"
                                    }
                                    onClick={
                                        closeMobileMenu
                                    }
                                >
                                    Home
                                </MobileLink>


                                {/* Mobile Tools */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setMobileToolsOpen(
                                            (current) =>
                                                !current
                                        )
                                    }
                                    aria-expanded={
                                        mobileToolsOpen
                                    }
                                    aria-controls="mobile-tools-list"
                                    className={`mt-1 flex min-h-12 w-full appearance-none items-center justify-between rounded-xl border-0 px-4 py-3 text-left text-base font-medium shadow-none outline-none transition-colors duration-200 ${
                                        mobileToolsOpen ||
                                        toolsActive
                                            ? "!bg-cyan-400/10 !text-cyan-300"
                                            : "!bg-transparent !text-gray-300 hover:!bg-white/[0.04] hover:!text-cyan-300"
                                    }`}
                                >

                                    <span>
                                        Tools
                                    </span>


                                    <ChevronDown
                                        size={18}
                                        aria-hidden="true"
                                        className={`shrink-0 transition-transform duration-200 ${
                                            mobileToolsOpen
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />

                                </button>


                                <AnimatePresence
                                    initial={false}
                                >

                                    {mobileToolsOpen && (
                                        <motion.div
                                            id="mobile-tools-list"
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                            className="overflow-hidden"
                                        >

                                            <div className="ml-3 mt-2 space-y-1 border-l border-cyan-400/20 pl-3">

                                                {tools.map(
                                                    (tool) => {
                                                        const active =
                                                            pathname ===
                                                            tool.href;

                                                        return (
                                                            <Link
                                                                key={
                                                                    tool.href
                                                                }
                                                                href={
                                                                    tool.href
                                                                }
                                                                onClick={
                                                                    closeMobileMenu
                                                                }
                                                                className={`flex min-h-11 w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium !no-underline transition-colors duration-150 ${
                                                                    active
                                                                        ? "bg-cyan-400/10 !text-cyan-300"
                                                                        : "!text-gray-400 hover:bg-white/[0.04] hover:!text-cyan-300"
                                                                }`}
                                                            >
                                                                {
                                                                    tool.label
                                                                }
                                                            </Link>
                                                        );
                                                    }
                                                )}

                                            </div>

                                        </motion.div>
                                    )}

                                </AnimatePresence>


                                <div className="mt-2 space-y-1">

                                    <MobileLink
                                        href="/about"
                                        active={
                                            pathname ===
                                            "/about"
                                        }
                                        onClick={
                                            closeMobileMenu
                                        }
                                    >
                                        About
                                    </MobileLink>


                                    <MobileLink
                                        href="/contact"
                                        active={
                                            pathname ===
                                            "/contact"
                                        }
                                        onClick={
                                            closeMobileMenu
                                        }
                                    >
                                        Contact Us
                                    </MobileLink>


                                    <MobileLink
                                        href="/blog"
                                        active={pathname.startsWith(
                                            "/blog"
                                        )}
                                        onClick={
                                            closeMobileMenu
                                        }
                                    >
                                        Blog
                                    </MobileLink>

                                </div>


                                <div className="my-5 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />


                                <Link
                                    href="/#tools"
                                    onClick={
                                        closeMobileMenu
                                    }
                                    className="flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-center text-sm font-semibold !text-white !no-underline shadow-lg shadow-cyan-500/10"
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



function DesktopLink({
    href,
    active,
    children,
}) {
    return (
        <motion.div
            whileHover={{
                y: -2,
            }}
            transition={{
                duration: 0.2,
            }}
        >

            <Link
                href={href}
                className={`group relative whitespace-nowrap px-1 py-2 text-sm font-medium !no-underline transition-colors duration-200 ${
                    active
                        ? "!text-cyan-300"
                        : "!text-gray-300 hover:!text-cyan-300"
                }`}
            >
                {children}


                <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${
                        active
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                    }`}
                />

            </Link>

        </motion.div>
    );
}



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
    );
}