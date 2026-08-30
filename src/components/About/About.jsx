import { motion } from "framer-motion";

import AboutIntro from "./AboutIntro";
// import AboutFocus from "./AboutFocus";

import { fadeUp } from "./aboutAnimations";


export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADER */}

        <motion.div {...fadeUp} className="mb-16 text-center">
          <p className="section-label">ABOUT ME</p>

          <h2
            className="
              mt-4
              text-4xl
              font-black
              text-slate-900
              md:text-5xl
              dark:text-white
            "
          >
            My Journey Into Web Development
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
          >
            Information Technology Engineering student exploring Web development
            and UI design through continuous learning and practical projects.
          </p>
        </motion.div>

        {/* CONTENT */}

        <div className="grid items-center gap-14 lg:grid-cols-5">
          {/* IMAGE */}

          <motion.div
            {...fadeUp}
            className="relative flex justify-center lg:col-span-2"
          >
            <div
              className="
                relative
                h-[420px]
                w-full
                max-w-[340px]
                overflow-hidden
                rounded-3xl
                border
                border-slate-900/10
                shadow-2xl
                dark:border-white/10
              "
            >
              <img
                src="/profile.png"
                alt="York Kimhong"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT */}

          <div className="space-y-8 lg:col-span-3">
            <AboutIntro />
            {/* <AboutFocus /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
