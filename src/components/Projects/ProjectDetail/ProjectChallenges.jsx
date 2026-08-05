import { motion } from "framer-motion";

import { FaExclamationTriangle, FaLightbulb } from "react-icons/fa";

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
          EXPERIENCE
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
          Challenges & Learnings
        </h2>
      </div>

      {/* GRID */}

      <div
        className="
        grid

        lg:grid-cols-2

        gap-8
        "
      >
        {/* CHALLENGES */}

        <div
          className="
          rounded-[35px]

          p-8


          bg-white/40


          dark:bg-white/[0.06]


          backdrop-blur-xl


          border

          border-black/10

          dark:border-white/10
          "
        >
          <div
            className="
            flex

            items-center

            gap-4

            mb-8
            "
          >
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
          </div>

          <div
            className="
            space-y-5
            "
          >
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
                className="
                flex

                gap-4

                items-start
                "
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

                <p
                  className="
                  text-slate-600

                  dark:text-slate-400

                  leading-relaxed
                  "
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LEARNINGS */}

        <div
          className="
          rounded-[35px]

          p-8


          bg-gradient-to-br

          from-emerald-500/10

          to-green-500/5


          border

          border-emerald-500/20
          "
        >
          <div
            className="
            flex

            items-center

            gap-4

            mb-8
            "
          >
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
          </div>

          <div
            className="
            space-y-5
            "
          >
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
                className="
                flex

                gap-4

                items-start
                "
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

                <p
                  className="
                  text-slate-600

                  dark:text-slate-400

                  leading-relaxed
                  "
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
