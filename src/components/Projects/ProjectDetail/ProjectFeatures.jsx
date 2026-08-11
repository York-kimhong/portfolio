import { motion } from "framer-motion";

import {
  FaCheckCircle,
  FaMobileAlt,
  FaMoon,
  FaMagic,
  FaLanguage,
  FaLayerGroup,
  FaPaintBrush,
  FaCode,
} from "react-icons/fa";

const featureIcons = [
  FaMobileAlt,
  FaMoon,
  FaMagic,
  FaLanguage,
  FaLayerGroup,
  FaPaintBrush,
  FaCode,
];

export default function ProjectFeatures({ project }) {
  if (!project) return null;

  const features = project.features || [];

  if (features.length === 0) return null;

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
          FEATURES
        </p>

        <h2 className="section-title">
          Key Features
        </h2>

        <p className="section-description max-w-2xl">
          Main functionalities and improvements implemented in this project.
        </p>
      </div>

      {/* FEATURE CARDS */}

      <div
        className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {features.map((feature, index) => {
          const Icon =
            featureIcons[index % featureIcons.length];

          return (
            <motion.div
              key={`${feature}-${index}`}
              initial={{
                opacity: 0,
                y: 30,
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
              }}
              className="
                glass-card
                group
                relative
                overflow-hidden
                p-7
                hover:border-emerald-400/40
                transition-all
                duration-500
              "
            >
              {/* HOVER LIGHT */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-emerald-400/20
                  via-transparent
                  to-cyan-400/10
                  transition-opacity
                  duration-500
                  pointer-events-none
                "
              />

              <div className="relative z-10">
                {/* ICON */}

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-emerald-500/10
                    text-emerald-500
                    mb-6
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  "
                >
                  <Icon size={24} />
                </div>

                {/* TITLE */}

                <h3
                  className="
                    text-xl
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  {feature}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-4 text-sm leading-relaxed muted">
                  Built with modern development practices focusing on
                  usability, performance, scalability, and maintainability.
                </p>

                {/* STATUS */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    text-emerald-600
                    dark:text-emerald-400
                  "
                >
                  <FaCheckCircle />
                  Completed
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
