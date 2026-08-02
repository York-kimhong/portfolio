import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

import { useTheme } from "../../context/ThemeProvider";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      whileTap={{
        scale: 0.92,
      }}
      aria-label="Toggle theme"
      className="

      relative

      w-[72px]

      h-9


      rounded-full


      overflow-hidden


      border


      border-white/10


      backdrop-blur-xl


      bg-white/5


      shadow-[0_0_25px_rgba(16,185,129,0.15)]


      "
    >
      {/* Animated Background */}

      <motion.div
        animate={{
          x: dark ? 0 : -40,
        }}
        transition={{
          duration: 0.8,

          ease: "easeInOut",
        }}
        className="

        absolute

        inset-0


        bg-gradient-to-r

        from-yellow-400/30

        via-emerald-400/30

        to-cyan-400/30


        blur-md

        "
      />

      {/* Sliding Circle */}

      <motion.div
        animate={{
          x: dark ? 36 : 3,
        }}
        transition={{
          type: "spring",

          stiffness: 450,

          damping: 28,
        }}
        className="

        absolute

        top-1

        left-0


        w-7

        h-7


        rounded-full


        flex

        items-center

        justify-center


        bg-white


        dark:bg-slate-900


        shadow-xl


        "
      >
        <AnimatePresence mode="wait">
          {dark ? (
            <motion.div
              key="moon"
              initial={{
                opacity: 0,

                scale: 0,

                rotate: -90,
              }}
              animate={{
                opacity: 1,

                scale: 1,

                rotate: 0,
              }}
              exit={{
                opacity: 0,

                scale: 0,

                rotate: 90,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <FiMoon
                className="

                text-emerald-400

                text-sm

                "
              />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{
                opacity: 0,

                scale: 0,

                rotate: 90,
              }}
              animate={{
                opacity: 1,

                scale: 1,

                rotate: 0,
              }}
              exit={{
                opacity: 0,

                scale: 0,

                rotate: -90,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <FiSun
                className="

                text-yellow-500

                text-sm

                "
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}
