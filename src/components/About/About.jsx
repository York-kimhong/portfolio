import { motion } from "framer-motion";

import AboutIntro from "./AboutIntro";
import AboutFocus from "./AboutFocus";

import { fadeUp } from "./aboutAnimations";

export default function About() {
  return (
    <section
      id="about"
      className="
      relative

      py-28

      overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute

        top-20

        left-1/2

        -translate-x-1/2


        w-[500px]

        h-[300px]


        rounded-full


        bg-emerald-500/20


        dark:bg-emerald-400/15


        blur-[120px]


        pointer-events-none
        "
      />

      <div
        className="
        max-w-7xl

        mx-auto

        px-6

        lg:px-10

        relative

        z-10
        "
      >
        {/* HEADER */}

        <motion.div
          {...fadeUp}
          className="
        text-center

        mb-16
        "
        >
          <motion.p
            animate={{
              letterSpacing: ["0.35em", "0.45em", "0.35em"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
          text-emerald-700

          dark:text-emerald-400


          text-sm


          tracking-[0.35em]


          uppercase


          font-bold
          "
          >
            ABOUT ME
          </motion.p>

          <h2
            className="
          mt-4


          text-4xl


          md:text-5xl


          font-black




          bg-gradient-to-r


          from-emerald-800


          via-emerald-500


          to-green-600



          dark:from-white


          dark:via-emerald-200


          dark:to-green-300



          bg-clip-text


          text-transparent
          "
          >
            My Journey Into Frontend Development
          </h2>

          <p
            className="
          mt-5


          max-w-xl


          mx-auto


          leading-relaxed



          text-slate-600


          dark:text-slate-400
          "
          >
            Information Technology Engineering student exploring frontend
            development and UI design through continuous learning and practical
            projects.
          </p>
        </motion.div>

        {/* CONTENT */}

        <div
          className="
        grid


        lg:grid-cols-5


        gap-10


        items-start
        "
        >
          <AboutIntro />

          <AboutFocus />
        </div>
      </div>
    </section>
  );
}
