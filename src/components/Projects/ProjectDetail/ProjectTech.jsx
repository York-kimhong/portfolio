import { motion } from "framer-motion";

import { FaReact, FaCode, FaCss3Alt, FaLayerGroup } from "react-icons/fa";

import {
  SiVite,
  SiTailwindcss,
  SiFramer,
  SiReactrouter,
  SiI18Next,
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiDocker,
} from "react-icons/si";

const techIcons = {
  React: FaReact,

  Vite: SiVite,

  "Tailwind CSS": SiTailwindcss,

  "Framer Motion": SiFramer,

  "React Router": SiReactrouter,

  i18next: SiI18Next,

  JavaScript: SiJavascript,

  CSS: FaCss3Alt,

  "Spring Boot": SiSpringboot,

  MySQL: SiMysql,

  Docker: SiDocker,

  Java: FaCode,

  "UI Design": FaLayerGroup,

  default: FaCode,
};

const techCategory = {
  React: "Frontend",

  Vite: "Frontend",

  "Tailwind CSS": "Frontend",

  "Framer Motion": "Frontend",

  "React Router": "Frontend",

  i18next: "Frontend",

  JavaScript: "Language",

  CSS: "Frontend",

  "Spring Boot": "Backend",

  Java: "Backend",

  MySQL: "Database",

  Docker: "DevOps",

  "UI Design": "Design",
};

export default function ProjectTech({ project }) {
  if (!project) return null;

  const tech = project.tech || [];

  return (
    <motion.section
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
      }}
      transition={{
        duration: 0.7,
      }}
      className="
      mt-28
      "
    >
      {/* HEADER */}

      <div
        className="
        mb-14
        "
      >
        <p
          className="
          uppercase

          tracking-[0.35em]

          text-xs

          font-bold

          text-emerald-500
          "
        >
          TECHNOLOGIES
        </p>

        <div
          className="
          flex

          flex-col

          sm:flex-row

          sm:items-end

          sm:justify-between

          gap-5
          "
        >
          <h2
            className="
            mt-4

            text-4xl

            md:text-5xl

            font-black

            text-slate-900

            dark:text-white
            "
          >
            Tech Stack
          </h2>

          <span
            className="
            text-sm

            font-semibold

            text-emerald-500
            "
          >
            {tech.length} Technologies
          </span>
        </div>

        <p
          className="
          mt-5

          max-w-xl

          text-slate-600

          dark:text-slate-400

          leading-relaxed
          "
        >
          Technologies and tools used to build this project with modern
          development practices.
        </p>
      </div>

      {/* TECH GRID */}

      <div
        className="
        grid

        grid-cols-2

        sm:grid-cols-3

        lg:grid-cols-4

        gap-6
        "
      >
        {tech.map((item, index) => {
          const Icon = techIcons[item] || techIcons.default;

          return (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,

                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,

                scale: 1.03,
              }}
              className="
                group

                relative

                overflow-hidden


                rounded-[30px]


                p-6


                bg-white/50


                dark:bg-white/[0.06]


                backdrop-blur-xl


                border

                border-black/10

                dark:border-white/10


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

                  bg-gradient-to-br

                  from-emerald-400/20

                  via-transparent

                  to-cyan-400/10


                  opacity-0

                  group-hover:opacity-100


                  transition
                  "
              />

              {/* ICON */}

              <div
                className="
                  relative

                  z-10


                  w-16

                  h-16


                  rounded-2xl


                  flex

                  items-center

                  justify-center


                  bg-emerald-500/10


                  text-emerald-500


                  group-hover:scale-110


                  transition-transform
                  "
              >
                <Icon size={32} />
              </div>

              {/* NAME */}

              <h3
                className="
                  relative

                  z-10


                  mt-5


                  font-black


                  text-slate-900


                  dark:text-white
                  "
              >
                {item}
              </h3>

              {/* CATEGORY */}

              <p
                className="
                  relative

                  z-10


                  mt-2


                  text-xs


                  uppercase


                  tracking-wider


                  text-slate-500


                  dark:text-slate-400
                  "
              >
                {techCategory[item] || "Technology"}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
