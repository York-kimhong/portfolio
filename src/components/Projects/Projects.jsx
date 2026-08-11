import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import { projects } from "./data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        py-32
        md:py-40
        overflow-hidden
      "
    >
      {/* ================================
          AMBIENT BACKGROUND
      ================================= */}

      <div
        className="
          absolute
          top-[-120px]
          left-1/2
          -translate-x-1/2

          w-[700px]
          h-[400px]

          rounded-full

          bg-emerald-400/15
          dark:bg-emerald-400/10

          blur-[160px]

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[45%]
          left-[-200px]

          w-[450px]
          h-[450px]

          rounded-full

          bg-green-400/10
          dark:bg-green-400/[0.06]

          blur-[150px]

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-180px]
          right-[-150px]

          w-[500px]
          h-[500px]

          rounded-full

          bg-cyan-400/10
          dark:bg-cyan-400/[0.06]

          blur-[160px]

          pointer-events-none
        "
      />

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
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            max-w-3xl
            mx-auto
            text-center
            mb-20
          "
        >
          {/* LABEL */}

          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.15em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.35em",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              section-label
            "
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

              max-w-2xl
              mx-auto
            "
          >
            A collection of projects showcasing my experience in frontend
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
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              h-1
              mx-auto
              mt-8

              rounded-full

              bg-gradient-to-r
              from-emerald-500
              to-cyan-400
            "
          />
        </motion.div>

        {/* ================================
            PROJECT GRID
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            grid

            grid-cols-1
            md:grid-cols-2

            gap-7
            lg:gap-9

            max-w-6xl
            mx-auto
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* ================================
            PROJECT COUNT
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
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

              px-5
              py-2.5

              rounded-full

              bg-white/50
              dark:bg-white/[0.05]

              backdrop-blur-xl

              border
              border-black/10
              dark:border-white/10

              shadow-sm
            "
          >
            <span
              className="
                w-2
                h-2

                rounded-full

                bg-emerald-400

                shadow-[0_0_12px_rgba(52,211,153,0.7)]
              "
            />

            <span
              className="
                text-sm
                font-semibold

                text-slate-600
                dark:text-slate-400
              "
            >
              {projects.length}{" "}
              {projects.length === 1 ? "Project" : "Projects"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
