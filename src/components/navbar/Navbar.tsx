import { useState } from "react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import SocialLinks from "./SocialLinks";

import useScrollSpy from "../../hooks/useScrollSpy";

const navLinks = [
  {
    key: "about",
    href: "#about",
  },
  {
    key: "skills",
    href: "#skills",
  },
  {
    key: "projects",
    href: "#projects",
  },
  {
    key: "contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { active, scrolled, navigateTo } = useScrollSpy(navLinks);

  return (
    <header
      className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2

        z-50

        w-[92%]
        max-w-6xl

        isolate
      "
    >
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          relative
          z-20

          flex
          h-16
          items-center
          justify-between

          overflow-visible

          rounded-full

          border
          border-emerald-700/30
          dark:border-emerald-400/20

          bg-white/70
          dark:bg-[#020604]/80

          px-6
          md:px-8

          backdrop-blur-2xl

          shadow-[0_8px_40px_rgba(0,0,0,0.12)]
          dark:shadow-[0_0_40px_rgba(16,185,129,0.18)]

          transition-all
          duration-700
        "
      >
        {/* =========================================
            GREEN GLOW BELOW NAVBAR
        ========================================== */}

        <div
          className="
            pointer-events-none

            absolute
            left-1/2
            bottom-[-20px]

            z-[-1]

            h-1
            w-[90%]

            -translate-x-1/2

            rounded-full

            bg-emerald-900/90
            dark:bg-emerald-400/30

            blur-2xl

            transition-all
            duration-1000
          "
        />

        {/* =========================================
            LOGO
        ========================================== */}

        <Logo />

        {/* =========================================
            DESKTOP NAVIGATION
        ========================================== */}

        <DesktopMenu links={navLinks} active={active} navigateTo={navigateTo} />

        {/* =========================================
            DESKTOP ACTIONS
        ========================================== */}

        <div
          className="
            hidden
            items-center
            gap-4
            md:flex
          "
        >
          <SocialLinks />

          <ThemeToggle />

          <LanguageToggle />
        </div>

        {/* =========================================
            MOBILE MENU

            IMPORTANT:
            Pass navigateTo here.
        ========================================== */}

        <MobileMenu
          open={open}
          setOpen={setOpen}
          links={navLinks}
          active={active}
          navigateTo={navigateTo}
        />
      </motion.div>
    </header>
  );
}
