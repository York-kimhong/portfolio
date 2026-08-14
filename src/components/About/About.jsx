import { motion } from "framer-motion";

import AboutIntro from "./AboutIntro";
import AboutFocus from "./AboutFocus";

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
            Information Technology Engineering student exploring Web
            development and UI design through continuous learning and practical
            projects.
          </p>
        </motion.div>

        {/* CONTENT */}

        <div className="grid items-start gap-10 lg:grid-cols-5">
          <AboutIntro />
          <AboutFocus />
        </div>
      </div>
    </section>
  );
}
