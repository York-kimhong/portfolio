import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

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
        duration: 0.7,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]

      bg-white/40

      dark:bg-white/[0.06]

      border
      border-black/10

      dark:border-white/10

      backdrop-blur-xl

      shadow-xl

      hover:border-emerald-400/40

      transition-all

      duration-500
      "
    >
      {/* GLOW */}

      <div
        className="
        absolute
        inset-0

        opacity-0

        group-hover:opacity-100

        transition

        duration-500

        bg-gradient-to-br

        from-emerald-400/20

        via-transparent

        to-cyan-400/10

        blur-2xl
        "
      />

      <div className="relative z-10">
        {/* IMAGE */}

        <div
          className="
          relative

          h-64

          overflow-hidden
          "
        >
          <motion.img
            src={project.image}
            alt={project.title}
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.5,
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

            from-black/80

            via-black/20

            to-transparent
            "
          />

          <div
            className="
            absolute

            bottom-5

            left-5

            px-4

            py-1.5

            rounded-full

            bg-black/30

            backdrop-blur-xl

            border

            border-white/20

            text-white

            text-xs

            font-semibold
            "
          >
            {project.category}
          </div>
        </div>

        {/* CONTENT */}

        <div className="p-7">
          <h3
            className="
            text-2xl

            font-black

            text-slate-900

            dark:text-white
            "
          >
            {project.title}
          </h3>

          <p
            className="
            mt-4

            text-sm

            leading-relaxed

            text-slate-600

            dark:text-slate-400
            "
          >
            {project.description}
          </p>

          {/* STATUS */}

          <div
            className="
            mt-6

            flex

            justify-between

            items-center
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
                    ? "bg-emerald-400"
                    : "bg-yellow-400"
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
                {project.status}
              </span>
            </div>

            {project.featured && (
              <span
                className="
                px-3

                py-1

                rounded-full

                bg-emerald-500/10

                border

                border-emerald-500/20

                text-emerald-500

                text-xs

                font-semibold
                "
              >
                Featured
              </span>
            )}
          </div>

          {/* TECH STACK */}

          <div
            className="
            flex

            flex-wrap

            gap-2

            mt-6
            "
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  px-3

                  py-1.5

                  rounded-full

                  text-xs

                  bg-black/5

                  dark:bg-white/10

                  border

                  border-black/10

                  dark:border-white/10
                  "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ACTIONS */}

          <div
            className="
            mt-8

            flex

            gap-3
            "
          >
            {/* VIEW */}

            <Link to={`/projects/${project.id}`} className="flex-1">
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                className="
                flex

                justify-center

                items-center

                gap-2

                py-3

                rounded-xl

                bg-gradient-to-r

                from-emerald-600

                to-green-500

                text-white

                font-bold

                text-sm
                "
              >
                View Project
                <FaArrowRight />
              </motion.div>
            </Link>

            {/* GITHUB */}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              px-5

              py-3

              rounded-xl

              bg-black/5

              dark:bg-white/10

              flex

              items-center

              "
            >
              <FaGithub />
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="
                px-5

                py-3

                rounded-xl

                bg-emerald-500/10

                text-emerald-500

                flex

                items-center
                "
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
