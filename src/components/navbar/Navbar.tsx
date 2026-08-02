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

        overflow-visible


        h-16


        px-6

        md:px-8



        rounded-full



        flex

        items-center

        justify-between



        border



        backdrop-blur-2xl



        transition-all

        duration-700



        bg-white/70


        dark:bg-[#020604]/80




        border-emerald-700/30


        dark:border-emerald-400/20





        shadow-[0_8px_40px_rgba(0,0,0,0.12)]



        dark:shadow-[0_0_40px_rgba(16,185,129,0.18)]

        "
      >
        {/* GREEN GLOW BELOW NAVBAR */}

        {/* GREEN GLOW BELOW NAVBAR */}

        <div
          className="
  absolute

  left-1/2

  -translate-x-1/2


  -bottom-5



  w-[90%]



  h-1



  rounded-full



  bg-emerald-900/90


  dark:bg-emerald-400/30



  blur-2xl



  z-[-1]



  transition-all

  duration-1000
  "
        />
        {/* LOGO */}

        <Logo />

        {/* MENU */}

        <DesktopMenu links={navLinks} active={active} navigateTo={navigateTo} />

        {/* ACTIONS */}

        <div
          className="
          hidden

          md:flex

          items-center

          gap-4
          "
        >
          <SocialLinks />

          <ThemeToggle />

          <LanguageToggle />
        </div>

        {/* MOBILE */}

        <MobileMenu open={open} setOpen={setOpen} links={navLinks} />
      </motion.div>
    </header>
  );
}
