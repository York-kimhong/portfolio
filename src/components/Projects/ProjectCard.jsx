import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        rotateX: 1,
        rotateY: -1,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
      group
      relative
      rounded-[26px]
      overflow-hidden

      bg-white/[0.04]

      border
      border-white/10

      backdrop-blur-xl

      hover:border-cyan-400/40

      transition-all
      duration-300
      ease-out

      hover:shadow-[0_15px_45px_rgba(34,211,238,0.15)]
      "
    >
      {/* Hover Glow */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-br
        from-cyan-400/10
        via-transparent
        to-purple-500/10

        opacity-0
        group-hover:opacity-100

        transition-opacity
        duration-300
        "
      />

      <div
        className="
        relative
        z-10
        "
      >
        {/* IMAGE */}

        <div
          className="
          relative
          overflow-hidden
          h-44
          "
        >
          <motion.img
            src={project.image}
            alt={project.title}
            whileHover={{
              scale: 1.06,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="
            w-full
            h-full
            object-cover
            "
          />

          <div
            className="
            absolute
            inset-0

            bg-gradient-to-t
            from-slate-950/70
            via-transparent
            to-transparent
            "
          />
        </div>

        {/* CONTENT */}

        <div
          className="
          p-5
          "
        >
          <p
            className="
            text-cyan-300
            text-[11px]

            tracking-[0.3em]

            uppercase

            font-semibold
            "
          >
            {project.category}
          </p>

          <motion.h3
            className="
            mt-3

            text-xl

            font-black

            bg-gradient-to-r

            from-white

            via-cyan-200

            to-purple-300

            bg-[length:200%_auto]

            bg-clip-text

            text-transparent

            "
          >
            {project.title}
          </motion.h3>

          <p
            className="
            mt-3

            text-xs

            text-slate-400

            leading-relaxed

            group-hover:text-slate-200

            transition-colors

            duration-300
            "
          >
            {project.description}
          </p>

          {/* TECH STACK */}

          <div
            className="
            flex
            flex-wrap

            gap-2

            mt-5
            "
          >
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.15,
                }}
                className="
                  px-2.5
                  py-1

                  rounded-full

                  text-[11px]

                  bg-white/5

                  border

                  border-white/10

                  text-slate-300

                  hover:text-white

                  hover:border-cyan-400/40

                  transition

                  duration-200
                  "
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* BUTTONS */}

          <div
            className="
            flex
            gap-3

            mt-5
            "
          >
            <motion.a
              href={project.github}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              flex
              items-center

              gap-2

              px-4
              py-2

              rounded-xl

              bg-white/5

              border

              border-white/10

              text-xs

              text-slate-300

              hover:text-white

              hover:border-cyan-400/40

              transition
              duration-200
              "
            >
              <FaGithub />
              Code
            </motion.a>

            <motion.a
              href={project.demo}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              flex
              items-center

              gap-2

              px-4
              py-2

              rounded-xl

              bg-gradient-to-r

              from-cyan-500

              to-purple-500

              text-xs

              font-semibold

              shadow-[0_0_20px_rgba(34,211,238,0.25)]
              "
            >
              <FaExternalLinkAlt />
              Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
