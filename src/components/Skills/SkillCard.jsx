import { motion } from "framer-motion";

export default function SkillCard({ category, index }) {
  // Alternate direction:
  // 0 -> left
  // 1 -> right
  // 2 -> left
  // 3 -> right
  const direction = index % 2 === 0 ? -35 : 35;

  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: false,
        amount: 0.15,
      }}
      transition={{
        duration: 0.4,
        ease: smoothEase,
      }}
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        p-7

        bg-white/30
        dark:bg-white/[0.06]

        border
        border-black/10
        dark:border-white/10

        backdrop-blur-2xl

        shadow-[0_20px_60px_rgba(16,185,129,0.12)]
        hover:shadow-[0_25px_65px_rgba(16,185,129,0.18)]

        transition-[border-color,box-shadow]
        duration-200
      "
    >
      {/* GLASS REFLECTION */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/50
          via-transparent
          to-transparent
          dark:from-white/10
        "
      />

      {/* GREEN HOVER GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[60%]
          w-full
          bg-gradient-to-t
          from-emerald-500/25
          via-emerald-400/10
          to-transparent
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <h3
          className="
            mb-3
            text-xl
            font-black
            text-slate-900
            dark:text-white
          "
        >
          {category.title}
        </h3>

        <p
          className="
            mb-7
            text-sm
            leading-relaxed
            text-slate-600
            dark:text-slate-400
          "
        >
          {category.description}
        </p>

        <div className="space-y-5">
          {category.skills.map((skill) => (
            <div key={skill.name}>
              {/* NAME */}
              <div className="mb-2 flex items-center gap-3">
                <span
                  className="
                    text-lg
                    text-emerald-700
                    drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]
                    dark:text-emerald-400
                  "
                >
                  {skill.icon}
                </span>

                <span
                  className="
                    text-sm
                    font-semibold
                    text-slate-800
                    dark:text-slate-200
                  "
                >
                  {skill.name}
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div
                className="
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-black/10
                  dark:bg-white/10
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
                    once: false,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: smoothEase,
                  }}
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-emerald-600
                    to-green-400
                    shadow-[0_0_15px_rgba(16,185,129,0.5)]
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
