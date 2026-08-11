import { motion } from "framer-motion";

import {
  FaExclamationTriangle,
  FaLightbulb,
} from "react-icons/fa";

export default function ProjectChallenges({ project }) {
  if (!project) return null;

  const challenges = project.challenges || [];
  const learnings = project.learnings || [];

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
      className="project-section"
    >
      {/* HEADER */}

      <div className="mb-14">
        <p className="section-label">
          EXPERIENCE
        </p>

        <h2 className="section-title">
          Challenges & Learnings
        </h2>

        <p className="section-description max-w-2xl">
          The problems encountered during development and the lessons
          gained from solving them.
        </p>
      </div>

      {/* GRID */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* CHALLENGES */}

        <motion.div
          whileHover={{ y: -6 }}
          className="glass-card p-8"
        >
          {/* HEADER */}

          <div className="flex items-center gap-4 mb-8">
            <div
              className="
                w-12
                h-12
                rounded-2xl
                flex
                items-center
                justify-center
                bg-red-500/10
                text-red-500
              "
            >
              <FaExclamationTriangle />
            </div>

            <div>
              <h3
                className="
                  text-2xl
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                Challenges
              </h3>

              <p className="text-sm muted mt-1">
                Problems encountered during development
              </p>
            </div>
          </div>

          {/* CHALLENGE LIST */}

          {challenges.length > 0 ? (
            <div className="space-y-5">
              {challenges.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="flex gap-4 items-start"
                >
                  <span
                    className="
                      mt-2
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-red-400
                      shrink-0
                    "
                  />

                  <p className="muted leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="muted">
              No challenges have been documented for this project.
            </p>
          )}
        </motion.div>

        {/* LEARNINGS */}

        <motion.div
          whileHover={{ y: -6 }}
          className="highlight-card p-8"
        >
          {/* HEADER */}

          <div className="flex items-center gap-4 mb-8">
            <div
              className="
                w-12
                h-12
                rounded-2xl
                flex
                items-center
                justify-center
                bg-emerald-500/10
                text-emerald-500
              "
            >
              <FaLightbulb />
            </div>

            <div>
              <h3
                className="
                  text-2xl
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                Key Learnings
              </h3>

              <p className="text-sm muted mt-1">
                What I learned from the development process
              </p>
            </div>
          </div>

          {/* LEARNING LIST */}

          {learnings.length > 0 ? (
            <div className="space-y-5">
              {learnings.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="flex gap-4 items-start"
                >
                  <span
                    className="
                      mt-2
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-emerald-400
                      shrink-0
                    "
                  />

                  <p className="muted leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="muted">
              No learnings have been documented for this project.
            </p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
