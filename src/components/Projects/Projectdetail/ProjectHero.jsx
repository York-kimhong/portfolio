import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

export default function ProjectHero({ project }) {
  if (!project) return null;

  return (
    <section
      className="
      relative

      grid

      lg:grid-cols-2

      gap-14

      items-center
      "
    >
      {/* LIGHT EFFECT */}

      <div
        className="
        absolute

        -top-20

        left-1/2

        -translate-x-1/2

        w-[600px]

        h-[350px]

        rounded-full

        bg-emerald-500/20

        blur-[140px]

        pointer-events-none
        "
      />

      {/* LEFT SIDE */}

      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
        relative
        z-10
        "
      >

        {/* TITLE */}

        <h1
          className="
          mt-8

          text-5xl

          md:text-6xl

          font-black

          leading-tight

          bg-gradient-to-r

          from-emerald-600

          via-green-500

          to-cyan-500

          bg-clip-text

          text-transparent
          "
        >
          {project.title}
        </h1>

        {/* DESCRIPTION */}

        <p
          className="
          mt-6

          text-lg

          leading-relaxed

          text-slate-600

          dark:text-slate-400
          "
        >
          {project.description}
        </p>

        {/* FEATURED */}

        {project.featured && (
          <div
            className="
            mt-5

            flex

            gap-2

            items-center

            text-emerald-500
            "
          >
            <FaStar />
            Featured Project
          </div>
        )}

        {/* TECH */}

        <div
          className="
          mt-8

          flex

          flex-wrap

          gap-2
          "
        >
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1.5

                rounded-full

                bg-white/40

                dark:bg-white/10

                border

                border-black/10

                dark:border-white/10

                text-xs
                "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}

        <div
          className="
          mt-10

          flex

          gap-4

          flex-wrap
          "
        >
          <a
            href={project.github}
            target="_blank"
            className="
            flex

            items-center

            gap-2

            px-7

            py-3

            rounded-xl

            bg-black/5

            dark:bg-white/10

            border

            border-black/10

            font-semibold
            "
          >
            <FaGithub />
            Github
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="
              flex

              items-center

              gap-2

              px-7

              py-3

              rounded-xl

              bg-gradient-to-r

              from-emerald-600

              to-green-500

              text-white

              font-bold
              "
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
        relative
        "
      >
        {/* GLOW */}

        <div
          className="
          absolute

          inset-0

          bg-emerald-500/20

          blur-3xl

          rounded-[40px]
          "
        />

        {/* IMAGE CARD */}

        <div
          className="
          relative

          rounded-[40px]

          border

          border-white/20

          bg-white/10

          dark:bg-white/5

          backdrop-blur-xl

          shadow-2xl

          p-5
          "
        >
          <motion.img
            src={project.image}
            alt={project.title}
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
            w-full

            h-auto

            max-h-[650px]

            object-contain

            rounded-[30px]

            "
          />
        </div>
      </motion.div>
    </section>
  );
}
