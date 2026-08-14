import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import { projects } from "./data";

const smoothEase = [0.22, 1, 0.36, 1];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        py-32
        md:py-40
      "
    >
      {/* ================================
          CONTENT
      ================================= */}

      <div className="section-container relative z-10">
        {/* ================================
            HEADER
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 0.4,
            ease: smoothEase,
          }}
          className="
            mx-auto
            mb-20
            max-w-3xl
            text-center
          "
        >
          {/* LABEL */}

          <motion.p
            initial={{
              opacity: 0,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.3,
              ease: smoothEase,
            }}
            className="section-label"
          >
            MY WORK
          </motion.p>

          {/* TITLE */}

          <h2
            className="
              section-title

              bg-gradient-to-r
              from-emerald-700
              via-emerald-500
              to-cyan-500

              dark:from-white
              dark:via-emerald-200
              dark:to-cyan-300

              bg-clip-text
              text-transparent
            "
          >
            Featured Projects
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              section-description
              mx-auto
              max-w-2xl
            "
          >
            A collection of projects showcasing my experience in Web
            development, software engineering, backend systems, UI/UX design,
            and modern web application development.
          </p>

          {/* DECORATIVE LINE */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 80,
              opacity: 1,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.35,
              delay: 0.05,
              ease: smoothEase,
            }}
            className="
              mx-auto
              mt-8
              h-1
              rounded-full
              bg-gradient-to-r
              from-emerald-500
              to-cyan-400
            "
          />
        </motion.div>

        {/* ================================
            PROJECT GRID

            IMPORTANT:
            No animation here.
            ProjectCard handles its own
            scroll animation.
        ================================= */}

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            grid-cols-1
            gap-7
            md:grid-cols-2
            lg:gap-9
          "
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ================================
            PROJECT COUNT
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 0.3,
            delay: 0.05,
            ease: smoothEase,
          }}
          className="
            mt-14
            flex
            justify-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-3

              rounded-full

              border
              border-black/10

              bg-white/50

              px-5
              py-2.5

              shadow-sm

              backdrop-blur-xl

              dark:border-white/10
              dark:bg-white/[0.05]
            "
          >
            {/* STATUS DOT */}

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_12px_rgba(52,211,153,0.7)]
              "
            />

            {/* PROJECT COUNT */}

            <span
              className="
                text-sm
                font-semibold
                text-slate-600
                dark:text-slate-400
              "
            >
              {projects.length} {projects.length === 1 ? "Project" : "Projects"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
