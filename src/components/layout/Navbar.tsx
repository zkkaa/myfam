"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    sidebarVariants,
    backgroundVariants,
    navVariants,
    itemVariants,
    MenuToggle,
} from "@/lib/animationSidebar";

const navLinks = [
    { name: "🏡 Home", href: "/" },
    { name: "👨‍👩‍👧‍👦 Anggota", href: "/member" },
    { name: "📸 Memory", href: "/memory" },
];

const namaAnimasi = [
    "𝔪𝔶𝔣𝔞𝔪",
    
];

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [navBg, setNavBg] = useState(false);
    const pathname = usePathname();

    // Handle scroll untuk background navbar
    useEffect(() => {
        const handleScroll = () => setNavBg(window.scrollY >= 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock scroll saat sidebar terbuka
    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isActive]);

    // Fungsi untuk menutup sidebar
    const closeSidebar = () => setIsActive(false);

    return (
        <>
            {/* NAVBAR UTAMA */}
            {/* NAVBAR UTAMA — tanpa hamburger */}
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: navBg ? "12px 40px" : "20px 40px",
                    background: navBg ? "rgba(255,253,249,0.85)" : "transparent",
                    backdropFilter: navBg ? "blur(12px)" : "none",
                    borderBottom: navBg ? "1px solid rgba(245,245,244,0.8)" : "none",
                    transition: "all 0.3s ease",
                }}
            >
                {/* Logo */}
                <Link href="/" onClick={closeSidebar} style={{ textDecoration: "none" }}>
                    <div style={{ height: "1.4em", overflow: "hidden" }}>
                        <div
                            className="words"
                            style={{
                                fontFamily: "var(--font-playfair)",
                                fontSize: "20px",
                                fontWeight: 600,
                                color: "#44403c",
                            }}
                        >
                            <div className="text-black">
                                {namaAnimasi.map((nama, i) => (
                                    <span key={i} className="word" style={{ display: "block" }}>{nama}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Desktop menu */}
                <ul
                    className="md-nav-desktop"
                    style={{
                        display: "flex",
                        gap: "32px",
                        listStyle: "none",
                        margin: 0,
                        padding: navBg ? "10px 24px" : "0",
                        background: navBg ? "rgba(255,255,255,0.6)" : "transparent",
                        borderRadius: navBg ? "999px" : "0",
                        border: navBg ? "1px solid #f5f5f4" : "none",
                        backdropFilter: navBg ? "blur(8px)" : "none",
                        transition: "all 0.3s ease",
                    }}
                >
                    {navLinks.map((link) => (
                        <li key={link.href} style={{ position: "relative" }}>
                            <Link
                                href={link.href}
                                style={{
                                    textDecoration: "none",
                                    color: pathname === link.href ? "#fb7185" : "#78716c",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    transition: "color 0.2s",
                                }}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        style={{
                                            position: "absolute",
                                            bottom: "-4px",
                                            left: 0,
                                            right: 0,
                                            height: "2px",
                                            background: "#fb7185",
                                            borderRadius: "999px",
                                        }}
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Hamburger TERPISAH dari nav — z-index lebih tinggi dari sidebar */}
            <div
                className="md-nav-hamburger"
                style={{
                    position: "fixed",
                    top: navBg ? "14px" : "18px",
                    right: "20px",
                    zIndex: 70,
                    transition: "top 0.3s ease",
                }}
            >
                <MenuToggle toggle={() => setIsActive(!isActive)} isOpen={isActive} />
            </div>

            {/* Overlay blur mobile */}
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeSidebar}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 40,
                            background: "rgba(0,0,0,0.2)",
                            backdropFilter: "blur(4px)",
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Mobile sidebar */}
            <motion.div
                initial={false}
                animate={isActive ? "open" : "closed"}
                variants={sidebarVariants}
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    height: "100dvh",
                    width: "100vw",
                    zIndex: 55,
                    pointerEvents: isActive ? "auto" : "none",
                }}
            >
                <motion.div
                    variants={backgroundVariants}
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        height: "100%",
                        width: "75vw",
                        maxWidth: "300px",
                        background: "#FFFDF9",
                        boxShadow: "-4px 0 30px rgba(0,0,0,0.08)",
                    }}
                >
                    {/* Header sidebar */}
                    <div style={{
                        padding: "28px 28px 20px",
                        borderBottom: "1px solid #f5f5f4",
                        marginBottom: "8px",
                    }}>
                        <p style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "22px",
                            color: "#44403c",
                            fontWeight: 600,
                        }}>🏡 MyFam</p>
                        <p style={{ color: "#a8a29e", fontSize: "12px", marginTop: "4px" }}>
                            Website Keluarga Kami
                        </p>
                    </div>

                    {/* Nav links mobile */}
                    <motion.ul
                        variants={navVariants}
                        style={{
                            listStyle: "none",
                            padding: "16px 28px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                        }}
                    >
                        {navLinks.map((link) => (
                            <motion.li key={link.href} variants={itemVariants}>
                                <Link
                                    href={link.href}
                                    onClick={closeSidebar}
                                    style={{
                                        display: "block",
                                        padding: "14px 16px",
                                        borderRadius: "12px",
                                        textDecoration: "none",
                                        fontFamily: "var(--font-playfair)",
                                        fontSize: "20px",
                                        color: pathname === link.href ? "#fb7185" : "#44403c",
                                        background: pathname === link.href ? "#fff1f2" : "transparent",
                                        fontWeight: pathname === link.href ? 600 : 400,
                                        transition: "all 0.2s",
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Footer sidebar */}
                    <div style={{
                        position: "absolute",
                        bottom: "32px",
                        left: "28px",
                        right: "28px",
                    }}>
                        <p style={{
                            color: "#d4d0cc",
                            fontSize: "11px",
                            textAlign: "center",
                        }}>
                            Dibuat dengan 💛 untuk keluarga
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Global CSS for responsiveness */}
            <style jsx global>{`
        .md-nav-desktop {
          display: none !important;
        }
        .md-nav-hamburger {
          display: flex !important;
        }
        @media (min-width: 768px) {
          .md-nav-desktop {
            display: flex !important;
          }
          .md-nav-hamburger {
            display: none !important;
          }
        }

        /* Animasi word logo */
        .words {
          display: inline-block;
        }
        .text-black {
          animation: spin_words 10s infinite;
        }
        @keyframes spin_words {
          0%, 15% { transform: translateY(0%); }
          20%, 35% { transform: translateY(-20%); }
          40%, 55% { transform: translateY(-40%); }
          60%, 75% { transform: translateY(-60%); }
          80%, 95% { transform: translateY(-80%); }
          100% { transform: translateY(0%); }
        }
      `}</style>
        </>
    );
}