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
      {/* BACKGROUND LIGHT */}

      <motion.div
        animate={{
          x: [0, 80, -40, 0],

          y: [0, -50, 30, 0],
        }}
        transition={{
          duration: 20,

          repeat: Infinity,

          ease: "easeInOut",
        }}
        className="
        absolute

        top-20

        left-10

        w-96

        h-96

        bg-cyan-500/10

        rounded-full

        blur-[140px]
        "
      />

      <motion.div
        animate={{
          x: [0, -60, 40, 0],

          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 22,

          repeat: Infinity,

          ease: "easeInOut",
        }}
        className="
        absolute

        bottom-10

        right-10

        w-[420px]

        h-[420px]

        bg-purple-500/10

        rounded-full

        blur-[150px]
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
          <p
            className="
            text-cyan-400

            text-sm

            tracking-[0.35em]

            uppercase

            font-semibold
            "
          >
            ABOUT ME
          </p>

          <h2
            className="
            mt-4

            text-4xl

            md:text-5xl

            font-black

            bg-gradient-to-r

            from-white

            via-cyan-200

            to-purple-200

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

            text-slate-400

            leading-relaxed
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
