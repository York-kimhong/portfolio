import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";

import ProfileCard from "./ProfileCard";
import { fadeUp, fadeScale } from "./heroAnimations";

const ROLE = "Web Developer";

export default function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setText(ROLE.slice(0, index));
      index++;

      if (index > ROLE.length) {
        clearInterval(timer);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center ">
      <div className="section-container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
          {/* LEFT CONTENT */}
          <motion.div {...fadeUp}>
            {/* STATUS */}
            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/10
                px-5
                py-2
                backdrop-blur-xl
              "
            >
              <span
                className="
                  h-2.5
                  w-2.5
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
                Open to Web Developer Internship Opportunities
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
                text-5xl
                font-black
                leading-[1.05]
                text-slate-900
                md:text-6xl
                xl:text-7xl
                dark:text-white
              "
            >
              {text}

              <span
                className="
                  animate-pulse
                  text-emerald-600
                  dark:text-emerald-400
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
              Information Technology Engineering student passionate about Web
              development and UI design. I enjoy creating modern, clean and
              user-friendly digital experiences while continuously improving my
              skills.
            </p>

            {/* ACTIONS */}
            <div className="mt-9 flex flex-wrap gap-4">
              {/* VIEW PROJECTS */}
              <a
                href="#projects"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-emerald-500
                  to-green-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-[0_0_35px_rgba(52,211,153,0.35)]
                  transition
                  hover:from-emerald-400
                  hover:to-green-500
                "
              >
                View Projects
                <HiArrowRight
                  className="
                    transition
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* RESUME */}
              <a
                href="/York_Kimhong_cv_last.pdf"
                download
                className="
                  rounded-xl
                  border
                  border-slate-900/10
                  bg-slate-900/5
                  px-8
                  py-4
                  text-slate-900
                  backdrop-blur-xl
                  transition
                  hover:border-emerald-500/40
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-white
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
              flex
              h-[600px]
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
