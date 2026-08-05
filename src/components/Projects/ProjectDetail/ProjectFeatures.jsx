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
          FEATURES
        </p>

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
          Key Features
        </h2>

        <p
          className="
          mt-5

          max-w-2xl

          text-slate-600

          dark:text-slate-400

          leading-relaxed
          "
        >
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
          const Icon = featureIcons[index % featureIcons.length];

          return (
            <motion.div
              key={feature}
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
                group

                relative

                overflow-hidden


                rounded-[32px]

                p-7


                bg-white/40

                dark:bg-white/[0.05]


                backdrop-blur-xl


                border

                border-black/10

                dark:border-white/10


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


                  transition

                  duration-500
                  "
              />

              <div
                className="
                  relative
                  z-10
                  "
              >
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

                <p
                  className="
                    mt-4

                    text-sm

                    leading-relaxed


                    text-slate-600


                    dark:text-slate-400
                    "
                >
                  Built with modern development practices focusing on usability,
                  performance, scalability, and maintainability.
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
