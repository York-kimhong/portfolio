import { motion } from "framer-motion";

import SkillCard from "./SkillCard";
import { skillCategories } from "./SkillData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
      relative

      py-32

      overflow-hidden
      "
    >
      {/* PREMIUM GREEN AMBIENT LIGHT */}

      <div
        className="
        absolute


        top-20


        left-1/2


        -translate-x-1/2



        w-[650px]


        h-[320px]



        rounded-full



        bg-emerald-500/15



        dark:bg-emerald-400/10



        blur-[150px]



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
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
        text-center

        mb-20
        "
        >
          <p
            className="
          text-xs


          tracking-[0.4em]


          uppercase


          font-bold



          text-emerald-700



          dark:text-emerald-400
          "
          >
            MY SKILLS
          </p>

          <h2
            className="
          mt-5


          text-4xl


          md:text-6xl


          font-black






          bg-gradient-to-r



          from-emerald-800



          via-emerald-600



          to-green-700





          dark:from-white



          dark:via-emerald-200



          dark:to-green-300




          bg-clip-text


          text-transparent
          "
          >
            Technologies & Tools I Work With
          </h2>

          <p
            className="
          max-w-2xl


          mx-auto


          mt-6



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

        {/* SKILL GRID */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
        grid


        md:grid-cols-2


        lg:grid-cols-3


        gap-8
        "
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
