import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

type LinkItem = {
  key: string;
  href: string;
};

type MobileMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: LinkItem[];
  active: string;
  navigateTo: (key: string, href: string) => void;
};

export default function MobileMenu({
  open,
  setOpen,
  links,
  active,
  navigateTo,
}: MobileMenuProps) {
  const { t } = useTranslation();

  // Prevent background scrolling while menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Navigation
  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: LinkItem,
  ) => {
    event.preventDefault();

    setOpen(false);

    setTimeout(() => {
      navigateTo(link.key, link.href);
    }, 250);
  };

  return (
    <>
      {/* =====================================================
          MENU BUTTON
      ====================================================== */}

      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        whileTap={{ scale: 0.9 }}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        className="
          relative
          z-[100]

          flex
          h-10
          w-10
          items-center
          justify-center

          text-[27px]
          text-slate-800

          transition-colors
          duration-200

          hover:text-emerald-600

          dark:text-white
          dark:hover:text-emerald-400

          md:hidden
        "
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{
                opacity: 0,
                rotate: -90,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 90,
                scale: 0.7,
              }}
              transition={{
                duration: 0.18,
              }}
            >
              <HiX />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{
                opacity: 0,
                rotate: 90,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: -90,
                scale: 0.7,
              }}
              transition={{
                duration: 0.18,
              }}
            >
              <HiMenuAlt3 />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {open && (
          <>
            {/* =================================================
                BACKGROUND
                No blur
            ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0

                z-[80]

                bg-black/20

                md:hidden
              "
            />

            {/* =================================================
                MOBILE DRAWER
            ================================================== */}

            <motion.aside
              initial={{
                x: "100%",
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: "100%",
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              onClick={(event) => {
                event.stopPropagation();
              }}
              className="
                fixed
                right-3
                top-3

                z-[90]

                flex
                h-[calc(100dvh-24px)]

                w-[40vw]
                max-w-[200px]

                flex-col
                overflow-hidden

                rounded-2xl

                border
                border-emerald-500/20

                bg-white/95

                shadow-[-15px_15px_50px_rgba(16,185,129,0.12)]

                backdrop-blur-2xl

                dark:border-emerald-400/15
                dark:bg-[#030705]/95

                md:hidden
              "
            >
              {/* =================================================
                  BACKGROUND GLOW
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute

                  -right-24
                  -top-24

                  h-56
                  w-56

                  rounded-full

                  bg-emerald-400/10

                  blur-[90px]

                  dark:bg-emerald-400/10
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute

                  -bottom-24
                  -left-24

                  h-60
                  w-60

                  rounded-full

                  bg-emerald-500/10

                  blur-[100px]
                "
              />

              {/* =================================================
                  HEADER
                  No "Navigation" text
              ================================================== */}

              <header
                className="
                  relative
                  z-10

                  border-b
                  border-black/10

                  px-5
                  py-5

                  dark:border-white/10
                "
              >
                <h2
                  className="
                    text-lg
                    font-black
                    tracking-tight

                    text-slate-900

                    dark:text-white
                  "
                >
                  York Kimhong
                </h2>
              </header>

              {/* =================================================
                  SCROLLABLE CONTENT
              ================================================== */}

              <div
                className="
                  relative
                  z-10

                  flex
                  min-h-0
                  flex-1
                  flex-col

                  overflow-y-auto

                  px-4
                  py-5
                "
              >
                {/* =================================================
                    NAVIGATION
                ================================================== */}

                <nav aria-label="Mobile navigation" className="space-y-1">
                  {links.map((link, index) => {
                    const isActive = active === link.key;

                    return (
                      <motion.a
                        key={link.key}
                        href={link.href}
                        onClick={(event) => handleNavigation(event, link)}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.25,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        className={`
                          group
                          relative

                          flex
                          min-h-[48px]

                          items-center

                          rounded-lg

                          px-3

                          transition-all
                          duration-200

                          ${
                            isActive
                              ? `
                                bg-emerald-500/10
                                dark:bg-emerald-400/10
                              `
                              : `
                                hover:bg-black/[0.04]
                                dark:hover:bg-white/[0.05]
                              `
                          }
                        `}
                      >
                        {/* ACTIVE LINE */}

                        <span
                          className={`
                            absolute

                            left-0
                            top-1/2

                            h-5
                            w-[3px]

                            -translate-y-1/2

                            rounded-full

                            bg-emerald-500

                            transition-opacity
                            duration-200

                            ${isActive ? "opacity-100" : "opacity-0"}
                          `}
                        />

                        {/* TEXT */}

                        <span
                          className={`
                            text-[15px]
                            font-semibold

                            transition-colors
                            duration-200

                            ${
                              isActive
                                ? `
                                  text-emerald-600
                                  dark:text-emerald-400
                                `
                                : `
                                  text-slate-700
                                  group-hover:text-emerald-600

                                  dark:text-slate-200
                                  dark:group-hover:text-emerald-400
                                `
                            }
                          `}
                        >
                          {t(`nav.${link.key}`)}
                        </span>
                      </motion.a>
                    );
                  })}
                </nav>

                {/* =================================================
                    DIVIDER
                ================================================== */}

                <div
                  className="
                    my-5
                    h-px

                    bg-gradient-to-r
                    from-transparent
                    via-black/10
                    to-transparent

                    dark:via-white/10
                  "
                />

                {/* =================================================
                    BUTTONS
                    No "Preferences"
                    No "Appearance"
                ================================================== */}

                <section>
                  <div
                    className="
                      flex
                      items-center
                      justify-center

                      px-2
                      py-2
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <ThemeToggle />
                      <LanguageToggle />
                    </div>
                  </div>
                </section>

                {/* =================================================
                    RESUME
                ================================================== */}

                <motion.a
                  href="/York_Kimhong.pdf"
                  download="York_Kimhong.pdf"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    mt-4

                    flex
                    min-h-[46px]

                    items-center
                    justify-center
                    gap-2

                    rounded-lg

                    bg-gradient-to-r
                    from-emerald-600
                    to-green-500

                    text-sm
                    font-bold
                    text-white

                    shadow-[0_8px_25px_rgba(16,185,129,0.2)]

                    transition-shadow

                    hover:shadow-[0_12px_30px_rgba(16,185,129,0.3)]
                  "
                >
                  <FaDownload size={12} />

                  {t("nav.resume")}
                </motion.a>

                {/* =================================================
                    SOCIAL
                ================================================== */}

                <div className="mt-auto pt-6">
                  <div
                    className="
                      flex
                      justify-center
                      gap-2
                    "
                  >
                    {/* GITHUB */}

                    <motion.a
                      href="https://github.com/York-kimhong"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      whileHover={{
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="
                        flex
                        h-9
                        w-9

                        items-center
                        justify-center

                        rounded-lg

                        text-slate-500

                        transition-colors

                        hover:text-emerald-500

                        dark:text-slate-400
                        dark:hover:text-emerald-400
                      "
                    >
                      <FaGithub />
                    </motion.a>

                    {/* LINKEDIN */}

                    <motion.a
                      href="https://linkedin.com/in/york-kimhong-90523338a"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      whileHover={{
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="
                        flex
                        h-9
                        w-9

                        items-center
                        justify-center

                        rounded-lg

                        text-slate-500

                        transition-colors

                        hover:text-emerald-500

                        dark:text-slate-400
                        dark:hover:text-emerald-400
                      "
                    >
                      <FaLinkedin />
                    </motion.a>
                  </div>

                  <p
                    className="
                      mt-4

                      text-center

                      text-[9px]

                      text-slate-400

                      dark:text-slate-500
                    "
                  >
                    York Kimhong · Frontend Developer
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
