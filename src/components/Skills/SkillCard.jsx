import { motion } from "framer-motion";

export default function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
      }}
      className="
group
rounded-[28px]
p-7
bg-white/5
border
border-white/10
backdrop-blur-xl
hover:border-cyan-400/30
transition
duration-300
"
    >
      <h3
        className="
text-xl
font-bold
mb-3
"
      >
        {category.title}
      </h3>

      <p
        className="
text-sm
text-slate-400
leading-relaxed
mb-7
"
      >
        {category.description}
      </p>

      <div className="space-y-5">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div
              className="
flex
items-center
gap-3
mb-2
"
            >
              <span
                className="
text-cyan-400
text-lg
"
              >
                {skill.icon}
              </span>

              <span
                className="
text-sm
font-medium
"
              >
                {skill.name}
              </span>
            </div>

            <div
              className="
h-2
rounded-full
bg-white/10
overflow-hidden
"
            >
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${skill.level}%`,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                }}
                className="
h-full
rounded-full
bg-gradient-to-r
from-cyan-400
to-purple-400
"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
