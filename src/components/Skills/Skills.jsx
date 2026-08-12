import { motion } from "framer-motion";

import SkillCard from "./SkillCard";
import { skillCategories } from "./SkillData";
import { skillsHeaderAnimation, skillCardAnimation } from "./skillsAnimations";

export default function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADER */}

        <motion.div {...skillsHeaderAnimation} className="mb-20 text-center">
          <p className="section-label">MY SKILLS</p>

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
            Technologies & Tools I Work With
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
          >
            Technologies and tools I have learned and applied through academic
            and personal projects while continuously improving my frontend
            development skills.
          </p>
        </motion.div>

        {/* SKILLS */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} {...skillCardAnimation(index)}>
              <SkillCard category={category} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
