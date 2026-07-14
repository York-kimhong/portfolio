import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
  SiMysql,
  SiLaravel,
} from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",

      description:
        "Creating responsive and modern web applications with scalable UI components.",

      skills: [
        {
          name: "React.js",
          level: 90,
          icon: <FaReact />,
        },

        {
          name: "Next.js",
          level: 75,
          icon: <SiNextdotjs />,
        },

        {
          name: "JavaScript",
          level: 85,
          icon: <FaJsSquare />,
        },

        {
          name: "TypeScript",
          level: 55,
          icon: <SiTypescript />,
        },

        {
          name: "Tailwind CSS",
          level: 85,
          icon: <SiTailwindcss />,
        },

        {
          name: "HTML / CSS",
          level: 95,
          icon: <FaHtml5 />,
        },
      ],
    },

    {
      title: "UI / UX Design",

      description:
        "Designing clean interfaces focused on usability and user experience.",

      skills: [
        {
          name: "Figma",
          level: 75,
          icon: <FaFigma />,
        },

        {
          name: "Responsive Design",
          level: 90,
          icon: <FaCss3Alt />,
        },

        {
          name: "Component Design",
          level: 75,
          icon: <FaFigma />,
        },
      ],
    },

    {
      title: "Development Workflow",

      description:
        "Using modern tools and practices for efficient development.",

      skills: [
        {
          name: "Git",
          level: 80,
          icon: <FaGitAlt />,
        },

        {
          name: "GitHub",
          level: 80,
          icon: <FaGithub />,
        },

        {
          name: "Postman",
          level: 60,
          icon: <SiPostman />,
        },

        {
          name: "REST API",
          level: 60,
          icon: <FaNodeJs />,
        },
      ],
    },

    {
      title: "Backend Fundamentals",

      description: "Supporting knowledge for building complete applications.",

      skills: [
        {
          name: "Node.js",
          level: 55,
          icon: <FaNodeJs />,
        },

        {
          name: "Laravel",
          level: 55,
          icon: <SiLaravel />,
        },

        {
          name: "MySQL",
          level: 75,
          icon: <SiMysql />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
relative
py-24
overflow-hidden
"
    >
      {/* BACKGROUND LIGHT */}

      <motion.div
        animate={{
          x: [0, 80, -40, 0],

          y: [0, -50, 30, 0],
        }}
        transition={{
          duration: 20,

          repeat: Infinity,

          ease: "easeInOut",
        }}
        className="
absolute
top-20
left-10
w-96
h-96
bg-cyan-500/10
rounded-full
blur-[140px]
"
      />

      <motion.div
        animate={{
          x: [0, -60, 40, 0],

          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 22,

          repeat: Infinity,

          ease: "easeInOut",
        }}
        className="
absolute
bottom-10
right-10
w-[420px]
h-[420px]
bg-violet-500/10
rounded-full
blur-[150px]
"
      />

      <div
        className="
max-w-7xl
mx-auto
px-6
lg:px-10
relative
z-10
"
      >
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,

            y: 30,
          }}
          whileInView={{
            opacity: 1,

            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
text-center
mb-14
"
        >
          <p
            className="
text-cyan-400
text-xs
tracking-[0.35em]
uppercase
font-semibold
"
          >
            TECHNICAL STACK
          </p>

          <motion.h2
            animate={{
              backgroundPosition: ["0% center", "100% center"],
            }}
            transition={{
              duration: 4,

              repeat: Infinity,

              ease: "linear",
            }}
            className="
mt-4
text-3xl
md:text-4xl
font-bold
bg-gradient-to-r
from-white
via-cyan-300
to-violet-400
bg-[length:200%_auto]
bg-clip-text
text-transparent
"
          >
            Frontend Engineering Toolkit
          </motion.h2>

          <p
            className="
text-slate-400
max-w-xl
mx-auto
mt-4
text-sm
leading-relaxed
"
          >
            Technologies and tools I use to build responsive, modern, and
            user-focused digital experiences.
          </p>
        </motion.div>

        {/* SKILL CARDS */}

        <div
          className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
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
                duration: 0.6,

                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="

group

rounded-[24px]

p-6

bg-white/5

border

border-white/10

backdrop-blur-xl

hover:border-cyan-400/30

transition-all

duration-300

"
            >
              <h3
                className="

text-lg

font-bold

mb-2

"
              >
                {category.title}
              </h3>

              <p
                className="

text-xs

text-slate-400

mb-6

leading-relaxed

"
              >
                {category.description}
              </p>

              <div
                className="
space-y-4
"
              >
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div
                      className="
flex
items-center
justify-between
mb-2
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
                          className="
text-lg
text-cyan-400
"
                        >
                          {skill.icon}
                        </span>

                        <span
                          className="
text-sm
font-medium
"
                        >
                          {skill.name}
                        </span>
                      </div>
                    </div>

                    <div
                      className="
h-1.5
rounded-full
bg-white/10
overflow-hidden
"
                    >
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,

                          delay: 0.2,
                        }}
                        className="

h-full

rounded-full

bg-gradient-to-r

from-cyan-400

to-violet-400

"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
