import { motion } from "framer-motion";

import SkillCard from "./SkillCard";
import { skillCategories } from "./SkillData";

export default function Skills() {
  return (
    <section
      id="skills"
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
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
text-center
mb-16
"
        >
          <p
            className="
text-cyan-400
text-xs
tracking-[0.35em]
uppercase
font-semibold
"
          >
            MY SKILLS
          </p>

          <motion.h2
            animate={{
              backgroundPosition: ["0% center", "200% center"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
mt-4
text-4xl
md:text-5xl
font-black
bg-gradient-to-r
from-white
via-cyan-200
to-purple-300
bg-[length:300%_auto]
bg-clip-text
text-transparent
"
          >
            Technologies & Tools I Work With
          </motion.h2>

          <p
            className="
max-w-xl
mx-auto
mt-5
text-slate-400
leading-relaxed
"
          >
            Technologies and tools I have learned and applied through academic
            and personal projects while continuously improving my development
            skills.
          </p>
        </motion.div>

        {/* SKILL GRID */}

        <div
          className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
"
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
