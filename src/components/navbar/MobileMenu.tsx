import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function MobileMenu({ open, setOpen, links }) {
  const { t } = useTranslation();

  return (
    <>
      {/* MENU BUTTON */}

      <motion.button
        whileTap={{
          scale: 0.85,
        }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="
        md:hidden

        relative

        z-[60]

        text-3xl

        text-slate-900

        dark:text-white
        "
      >
        {open ? <HiX /> : <HiMenuAlt3 />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}

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
              onClick={() => setOpen(false)}
              className="
          fixed

          inset-0

          z-40


          bg-black/30


          backdrop-blur-md


          md:hidden
          "
            />

            {/* DRAWER */}

            <motion.div
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
                type: "spring",

                stiffness: 220,

                damping: 24,
              }}
              className="
          fixed


          top-0


          right-0


          z-50



          h-screen


          w-[290px]



          overflow-hidden



          border-l


          border-emerald-500/20



          bg-white/80


          dark:bg-[#020604]/85



          backdrop-blur-2xl



          shadow-[-20px_0_80px_rgba(16,185,129,0.25)]



          md:hidden
          "
            >
              {/* GREEN AMBIENT LIGHT */}

              <motion.div
                animate={{
                  y: [80, -80, 80],

                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 10,

                  repeat: Infinity,

                  ease: "easeInOut",
                }}
                className="
          absolute


          bottom-[-120px]


          left-[-100px]



          w-[350px]


          h-[350px]



          rounded-full



          bg-emerald-500/25


          dark:bg-emerald-400/20



          blur-[120px]
          "
              />

              {/* CONTENT */}

              <div
                className="
          relative

          z-10


          pt-28


          px-8
          "
              >
                <div
                  className="
          flex

          flex-col

          gap-7
          "
                >
                  {/* LINKS */}

                  {links.map((link, index) => (
                    <motion.a
                      key={link.key}
                      href={link.href}
                      onClick={() => {
                        setOpen(false);
                      }}
                      initial={{
                        opacity: 0,

                        x: 40,
                      }}
                      animate={{
                        opacity: 1,

                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      whileHover={{
                        x: 8,
                      }}
                      className="
            group

            relative


            text-lg


            font-semibold



            text-slate-800


            dark:text-slate-200



            transition
            "
                    >
                      {t(`nav.${link.key}`)}

                      {/* UNDERLINE */}

                      <span
                        className="
              absolute


              left-0


              -bottom-2



              w-0


              h-[2px]


              rounded-full



              bg-emerald-500



              shadow-[0_0_15px_rgba(16,185,129,0.8)]



              group-hover:w-10



              transition-all


              duration-300
              "
                      />
                    </motion.a>
                  ))}

                  {/* DIVIDER */}

                  <div
                    className="
          h-px


          bg-black/10


          dark:bg-white/10
          "
                  />

                  {/* MODE + LANGUAGE */}

                  <div
                    className="
          flex


          justify-center


          items-center


          gap-4
          "
                  >
                    <div
                      className="
            p-2


            rounded-full


            bg-white/50


            dark:bg-white/10



            border


            border-black/10


            dark:border-white/20



            backdrop-blur-xl
            "
                    >
                      <ThemeToggle />
                    </div>

                    <div
                      className="
            p-2


            rounded-full


            bg-white/50


            dark:bg-white/10



            border


            border-black/10


            dark:border-white/20



            backdrop-blur-xl
            "
                    >
                      <LanguageToggle />
                    </div>
                  </div>

                  {/* RESUME */}

                  <motion.a
                    whileTap={{
                      scale: 0.95,
                    }}
                    href="/York_Kimhong.pdf"
                    download="York_Kimhong.pdf"
                    className="
          text-center


          py-3


          rounded-full



          bg-gradient-to-r


          from-emerald-600


          via-green-500


          to-emerald-600



          text-white


          font-bold



          shadow-[0_10px_30px_rgba(16,185,129,0.35)]
          "
                  >
                    {t("nav.resume")}
                  </motion.a>

                  {/* SOCIAL */}

                  <div
                    className="
          flex


          justify-center


          gap-8


          mt-5
          "
                  >
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="
            text-2xl


            text-slate-500


            dark:text-slate-400



            hover:text-emerald-500



            transition
            "
                    >
                      <FaGithub />
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="
            text-2xl


            text-slate-500


            dark:text-slate-400



            hover:text-emerald-500



            transition
            "
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
