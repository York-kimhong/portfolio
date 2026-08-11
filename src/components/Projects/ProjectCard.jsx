import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

export default function ProjectCard({ project, index = 0 }) {
  if (!project) return null;

  const tech = project.tech || [];

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        relative
        overflow-hidden
        glass-card-hover
      "
    >
      {/* =========================================
          HOVER AMBIENT GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-1
          rounded-[32px]

          bg-gradient-to-br
          from-emerald-400/20
          via-transparent
          to-cyan-400/15

          opacity-0
          blur-2xl

          transition-opacity
          duration-700

          group-hover:opacity-100
        "
      />

      {/* =========================================
          CARD CONTENT
      ========================================== */}

      <div className="relative z-10">
        {/* =========================================
            IMAGE
        ========================================== */}

        <div
          className="
            relative
            h-64
            sm:h-72
            overflow-hidden
            bg-slate-100
            dark:bg-slate-900
          "
        >
          <motion.img
            src={project.image}
            alt={`${project.title} project preview`}
            whileHover={{
              scale: 1.07,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              w-full
              h-full
              object-cover
            "
          />

          {/* IMAGE GRADIENT */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/85
              via-black/25
              to-transparent

              pointer-events-none
            "
          />

          {/* =====================================
              CATEGORY
          ====================================== */}

          {project.category && (
            <div
              className="
                absolute
                bottom-5
                left-5

                px-4
                py-1.5

                rounded-full

                bg-black/35
                backdrop-blur-xl

                border
                border-white/20

                text-white
                text-xs
                font-semibold

                shadow-lg
              "
            >
              {project.category}
            </div>
          )}

          {/* =====================================
              FEATURED
          ====================================== */}

          {project.featured && (
            <div
              className="
                absolute
                top-5
                right-5

                flex
                items-center
                gap-2

                px-3.5
                py-1.5

                rounded-full

                bg-emerald-500/90
                backdrop-blur-xl

                border
                border-emerald-300/30

                text-white
                text-xs
                font-bold

                shadow-lg
                shadow-emerald-500/20
              "
            >
              <FaStar size={10} />

              Featured
            </div>
          )}

          {/* IMAGE HOVER SHINE */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent

              -translate-x-full

              group-hover:translate-x-full

              transition-transform
              duration-1000

              pointer-events-none
            "
          />
        </div>

        {/* =========================================
            CONTENT
        ========================================== */}

        <div className="p-7 sm:p-8">
          {/* TITLE */}

          <h3
            className="
              text-2xl
              font-black

              text-slate-900
              dark:text-white

              tracking-tight

              transition-colors
              duration-300

              group-hover:text-emerald-600
              dark:group-hover:text-emerald-400
            "
          >
            {project.title}
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              mt-4

              text-sm
              leading-7

              text-slate-600
              dark:text-slate-400

              line-clamp-3
            "
          >
            {project.description}
          </p>

          {/* =========================================
              STATUS
          ========================================== */}

          <div
            className="
              mt-6

              flex
              items-center
              justify-between

              gap-4
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <span
                className={`
                  w-2.5
                  h-2.5

                  rounded-full

                  ${
                    project.status === "Completed"
                      ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]"
                      : "bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]"
                  }
                `}
              />

              <span
                className="
                  text-xs
                  font-semibold

                  text-slate-600
                  dark:text-slate-300
                "
              >
                {project.status || "In Progress"}
              </span>
            </div>

            {project.platform && (
              <span
                className="
                  text-xs
                  font-medium

                  text-slate-500
                  dark:text-slate-400
                "
              >
                {project.platform}
              </span>
            )}
          </div>

          {/* =========================================
              TECH STACK
          ========================================== */}

          {tech.length > 0 && (
            <div
              className="
                flex
                flex-wrap
                gap-2

                mt-6
              "
            >
              {tech.slice(0, 5).map((item) => (
                <span
                  key={item}
                  className="
                    px-3
                    py-1.5

                    rounded-full

                    bg-slate-900/[0.04]
                    dark:bg-white/[0.06]

                    border
                    border-black/10
                    dark:border-white/10

                    text-[11px]
                    font-semibold

                    text-slate-600
                    dark:text-slate-300

                    transition-all
                    duration-300

                    group-hover:border-emerald-500/20
                  "
                >
                  {item}
                </span>
              ))}

              {tech.length > 5 && (
                <span
                  className="
                    px-3
                    py-1.5

                    rounded-full

                    bg-emerald-500/10

                    text-[11px]
                    font-semibold

                    text-emerald-600
                    dark:text-emerald-400
                  "
                >
                  +{tech.length - 5}
                </span>
              )}
            </div>
          )}

          {/* =========================================
              ACTIONS
          ========================================== */}

          <div
            className="
              mt-8

              flex
              items-center

              gap-3
            "
          >
            {/* VIEW PROJECT */}

            <Link
              to={`/projects/${project.id}`}
              className="flex-1"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  w-full
                  py-3.5

                  rounded-xl

                  bg-gradient-to-r
                  from-emerald-600
                  to-green-500

                  text-white

                  text-sm
                  font-bold

                  shadow-lg
                  shadow-emerald-500/20

                  transition-all
                  duration-300

                  hover:shadow-xl
                  hover:shadow-emerald-500/30
                "
              >
                View Project

                <motion.span
                  whileHover={{
                    x: 4,
                  }}
                >
                  <FaArrowRight size={13} />
                </motion.span>
              </motion.div>
            </Link>

            {/* GITHUB */}

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                aria-label={`${project.title} GitHub repository`}
                className="
                  w-12
                  h-12

                  rounded-xl

                  flex
                  items-center
                  justify-center

                  bg-black/[0.04]
                  dark:bg-white/[0.06]

                  border
                  border-black/10
                  dark:border-white/10

                  text-slate-700
                  dark:text-slate-200

                  hover:text-emerald-500
                  hover:border-emerald-500/30

                  transition-all
                  duration-300
                "
              >
                <FaGithub size={16} />
              </motion.a>
            )}

            {/* LIVE DEMO */}

            {project.demo && project.demo !== "#" && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                aria-label={`${project.title} live demo`}
                className="
                  w-12
                  h-12

                  rounded-xl

                  flex
                  items-center
                  justify-center

                  bg-emerald-500/10

                  border
                  border-emerald-500/20

                  text-emerald-600
                  dark:text-emerald-400

                  hover:bg-emerald-500/20
                  hover:border-emerald-500/40

                  transition-all
                  duration-300
                "
              >
                <FaExternalLinkAlt size={14} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
