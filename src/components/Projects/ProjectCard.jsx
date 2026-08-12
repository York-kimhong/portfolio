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

  // Alternate cards entering from left and right
  const direction = index % 2 === 0 ? -35 : 35;

  const smoothEase = [0.22, 1, 0.36, 1];

  /*
   * Save the exact position of THIS project card
   * before navigating to the detail page.
   */
  const handleViewProject = (event) => {
    const card = event.currentTarget.closest("article");

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const cardTop = window.scrollY + rect.top;

    sessionStorage.setItem(
      "projectReturnPosition",
      JSON.stringify({
        scrollY: cardTop,
        projectId: project.id,
      }),
    );
  };

  return (
    <motion.article
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
        delay: index * 0.04,
        ease: smoothEase,
      }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.2,
          ease: smoothEase,
        },
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
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
          duration-300

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
            h-36
            overflow-hidden

            bg-slate-100

            sm:h-40
            md:h-44
            lg:h-48
            xl:h-52

            dark:bg-slate-900
          "
        >
          {/* IMAGE */}

          <motion.img
            src={project.image}
            alt={`${project.title} project preview`}
            whileHover={{
              scale: 1.035,
            }}
            transition={{
              duration: 0.4,
              ease: smoothEase,
            }}
            className="
              absolute
              inset-0

              h-full
              w-full

              object-cover
              object-center

              transition-transform
              duration-500
            "
          />

          {/* IMAGE GRADIENT */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-gradient-to-t
              from-black/75
              via-black/10
              to-transparent
            "
          />

          {/* =========================================
              CATEGORY
          ========================================== */}

          {project.category && (
            <div
              className="
                absolute
                bottom-3
                left-4

                rounded-full

                border
                border-white/20

                bg-black/35

                px-3
                py-1

                text-[10px]
                font-semibold
                text-white

                shadow-lg
                backdrop-blur-xl
              "
            >
              {project.category}
            </div>
          )}

          {/* =========================================
              FEATURED
          ========================================== */}

          {project.featured && (
            <div
              className="
                absolute
                right-4
                top-3

                flex
                items-center
                gap-1.5

                rounded-full

                border
                border-emerald-300/30

                bg-emerald-500/90

                px-3
                py-1

                text-[10px]
                font-bold
                text-white

                shadow-lg
                shadow-emerald-500/20

                backdrop-blur-xl
              "
            >
              <FaStar size={8} />
              Featured
            </div>
          )}

          {/* =========================================
              IMAGE SHINE
          ========================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              -translate-x-full

              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent

              transition-transform
              duration-700

              group-hover:translate-x-full
            "
          />
        </div>

        {/* =========================================
            CONTENT
        ========================================== */}

        <div className="p-5 sm:p-6">
          {/* =========================================
              TITLE
          ========================================== */}

          <h3
            className="
              text-xl
              font-black
              tracking-tight

              text-slate-900

              transition-colors
              duration-200

              group-hover:text-emerald-600

              dark:text-white
              dark:group-hover:text-emerald-400

              sm:text-[22px]
            "
          >
            {project.title}
          </h3>

          {/* =========================================
              DESCRIPTION
          ========================================== */}

          <p
            className="
              mt-2.5

              line-clamp-2

              text-sm
              leading-6

              text-slate-600
              dark:text-slate-400
            "
          >
            {project.description}
          </p>

          {/* =========================================
              STATUS
          ========================================== */}

          <div
            className="
              mt-4

              flex
              items-center
              justify-between

              gap-4
            "
          >
            <div className="flex items-center gap-2">
              <span
                className={`
                  h-2
                  w-2
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
                  truncate

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
                mt-4

                flex
                flex-wrap

                gap-1.5
              "
            >
              {tech.slice(0, 5).map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full

                    border
                    border-black/10

                    bg-slate-900/[0.04]

                    px-2.5
                    py-1

                    text-[10px]
                    font-semibold

                    text-slate-600

                    transition-all
                    duration-200

                    group-hover:border-emerald-500/20

                    dark:border-white/10
                    dark:bg-white/[0.06]
                    dark:text-slate-300
                  "
                >
                  {item}
                </span>
              ))}

              {tech.length > 5 && (
                <span
                  className="
                    rounded-full

                    bg-emerald-500/10

                    px-2.5
                    py-1

                    text-[10px]
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
              mt-5

              flex
              items-center

              gap-2.5
            "
          >
            {/* =========================================
                VIEW PROJECT
            ========================================== */}

            <Link
              to={`/projects/${project.id}`}
              onClick={handleViewProject}
              className="flex-1"
            >
              <motion.div
                whileHover={{
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.15,
                  ease: smoothEase,
                }}
                className="
                  flex
                  w-full

                  items-center
                  justify-center

                  gap-2

                  rounded-xl

                  bg-gradient-to-r
                  from-emerald-600
                  to-green-500

                  py-3

                  text-sm
                  font-bold
                  text-white

                  shadow-lg
                  shadow-emerald-500/20

                  transition-shadow
                  duration-200

                  hover:shadow-xl
                  hover:shadow-emerald-500/30
                "
              >
                View Project
                <motion.span
                  whileHover={{
                    x: 3,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                >
                  <FaArrowRight size={12} />
                </motion.span>
              </motion.div>
            </Link>

            {/* =========================================
                GITHUB
            ========================================== */}

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.15,
                  ease: smoothEase,
                }}
                aria-label={`${project.title} GitHub repository`}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0

                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-black/10

                  bg-black/[0.04]

                  text-slate-700

                  transition-all
                  duration-200

                  hover:border-emerald-500/30
                  hover:bg-emerald-500/5
                  hover:text-emerald-500

                  dark:border-white/10
                  dark:bg-white/[0.06]
                  dark:text-slate-200
                "
              >
                <FaGithub size={15} />
              </motion.a>
            )}

            {/* =========================================
                LIVE DEMO
            ========================================== */}

            {project.demo && project.demo !== "#" && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.15,
                  ease: smoothEase,
                }}
                aria-label={`${project.title} live demo`}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0

                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-emerald-500/20

                  bg-emerald-500/10

                  text-emerald-600

                  transition-all
                  duration-200

                  hover:border-emerald-500/40
                  hover:bg-emerald-500/20

                  dark:text-emerald-400
                "
              >
                <FaExternalLinkAlt size={13} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
