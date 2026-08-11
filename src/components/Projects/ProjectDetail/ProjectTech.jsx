import { motion } from "framer-motion";

import {
  FaReact,
  FaCode,
  FaCss3Alt,
  FaLayerGroup,
} from "react-icons/fa";

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

  if (tech.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="project-section"
    >
      {/* HEADER */}

      <div className="mb-14">
        <p className="section-label">
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
          <h2 className="section-title">
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

        <p className="section-description max-w-xl">
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
          const category = techCategory[item] || "Technology";

          return (
            <motion.div
              key={`${item}-${index}`}
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
                glass-card
                group
                relative
                overflow-hidden
                p-6
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
                  transition-opacity
                  duration-500
                  pointer-events-none
                "
              />

              <div className="relative z-10">
                {/* ICON */}

                <div
                  className="
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
                    duration-300
                  "
                >
                  <Icon size={32} />
                </div>

                {/* NAME */}

                <h3
                  className="
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
                    mt-2
                    text-xs
                    uppercase
                    tracking-wider
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {category}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
