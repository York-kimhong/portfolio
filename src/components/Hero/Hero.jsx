import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";

import ProfileCard from "./ProfileCard";

import { fadeUp, fadeScale } from "./heroAnimations";

export default function Hero() {
  const role = "Frontend Developer";

  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setText(role.slice(0, index));

      index++;

      if (index > role.length) {
        clearInterval(typing);
      }
    }, 120);

    return () => clearInterval(typing);
  }, []);

  return (
    <section
      id="home"
      className="
      min-h-screen

      flex

      items-center

      relative

      overflow-hidden

      bg-gradient-to-br

      from-[#020617]

      via-[#030712]

      to-[#020617]
      "
    >
      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute

        top-20

        left-20

        w-[420px]

        h-[420px]

        bg-cyan-500/10

        rounded-full

        blur-[150px]
        "
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute

        bottom-20

        right-20

        w-[420px]

        h-[420px]

        bg-purple-500/10

        rounded-full

        blur-[160px]
        "
      />

      <div className="section-container">
        <div
          className="
          grid

          lg:grid-cols-[1.3fr_1fr]

          gap-14

          items-center
          "
        >
          {/* LEFT CONTENT */}

          <motion.div {...fadeUp}>
            {/* STATUS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
              inline-flex

              items-center

              gap-3

              px-5

              py-2

              rounded-full

              bg-cyan-400/10

              border

              border-cyan-400/20

              backdrop-blur-xl

              mb-7
              "
            >
              <span
                className="
                w-2.5

                h-2.5

                rounded-full

                bg-cyan-400

                shadow-[0_0_15px_#22d3ee]
                "
              />

              <span
                className="
                text-sm

                text-cyan-300
                "
              >
                Open to Frontend Internship Opportunities
              </span>
            </motion.div>

            {/* TITLE */}

            <h1
              className="
              text-5xl

              md:text-6xl

              xl:text-7xl

              font-black

              leading-[1.05]
              "
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% center", "200% center"],
                }}
                transition={{
                  duration: 8,

                  repeat: Infinity,

                  ease: "linear",
                }}
                className="
                bg-gradient-to-r

                from-white

                via-cyan-200

                to-purple-200

                bg-[length:300%_auto]

                bg-clip-text

                text-transparent
                "
              >
                {text}
              </motion.span>

              <span
                className="
                text-cyan-400

                animate-pulse
                "
              >
                |
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
              mt-7

              max-w-xl

              text-lg

              leading-relaxed

              text-slate-300
              "
            >
              Information Technology Engineering student passionate about
              frontend development and UI design. I enjoy learning and building
              projects to improve my skills in creating clean and user-friendly
              interfaces.
            </p>

            {/* BUTTONS */}

            <div
              className="
              mt-9

              flex

              flex-wrap

              gap-4
              "
            >
              <a
                href="#projects"
                className="
                group

                flex

                items-center

                gap-2

                px-8

                py-4


                rounded-xl


                bg-gradient-to-r

                from-cyan-400

                to-cyan-500


                hover:from-cyan-300

                hover:to-cyan-400


                text-slate-950

                font-semibold


                transition


                shadow-[0_0_35px_rgba(34,211,238,0.35)]
                "
              >
                View Projects
                <HiArrowRight
                  className="
                  group-hover:translate-x-1

                  transition
                  "
                />
              </a>

              <a
                href="/resume.pdf"
                className="
                px-8

                py-4

                rounded-xl


                bg-white/5


                border

                border-white/10


                backdrop-blur-xl


                text-white


                hover:border-cyan-400/40


                transition
                "
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT PROFILE */}

          <motion.div
            {...fadeScale}
            className="
            relative

            h-[600px]

            flex

            items-center

            justify-center


            perspective-[1200px]
            "
          >
            <ProfileCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
