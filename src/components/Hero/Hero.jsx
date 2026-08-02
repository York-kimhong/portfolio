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
      "
    >
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

              bg-emerald-500/10

              border
              border-emerald-500/20

              backdrop-blur-xl

              mb-7
              "
            >
              <span
                className="
                w-2.5
                h-2.5

                rounded-full

                bg-emerald-500

                shadow-[0_0_20px_#34d399]
                "
              />

              <span
                className="
                text-sm

                text-emerald-700

                dark:text-emerald-300
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

                from-slate-900

                via-emerald-600

                to-green-700


                dark:from-white

                dark:via-emerald-200

                dark:to-green-300


                bg-[length:300%_auto]

                bg-clip-text

                text-transparent
                "
              >
                {text}
              </motion.span>

              <span
                className="
                text-emerald-600

                dark:text-emerald-400

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


              text-slate-600

              dark:text-slate-300
              "
            >
              Information Technology Engineering student passionate about
              frontend development and UI design. I enjoy creating modern, clean
              and user-friendly digital experiences while continuously improving
              my skills.
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
              {/* PRIMARY */}

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

                from-emerald-500

                to-green-600


                hover:from-emerald-400

                hover:to-green-500


                text-white


                font-semibold


                transition


                shadow-[0_0_35px_rgba(52,211,153,0.35)]
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

              {/* SECONDARY */}

              <a
                href="/resume.pdf"
                className="
                px-8

                py-4


                rounded-xl


                bg-slate-900/5


                dark:bg-white/5



                border

                border-slate-900/10


                dark:border-white/10



                backdrop-blur-xl



                text-slate-900


                dark:text-white



                hover:border-emerald-500/40


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
