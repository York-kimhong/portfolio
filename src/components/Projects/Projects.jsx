import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
relative
py-32
overflow-hidden
"
    >
      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -40, 30, 0],
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
blur-[140px]
rounded-full
"
      />

      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 50, -30, 0],
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
bg-purple-500/10
blur-[150px]
rounded-full
"
      />

      <div
        className="
section-container
relative
z-10
"
      >
        {/* HEADER */}

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
          }}
          transition={{
            duration: 0.7,
          }}
          className="
text-center
mb-20
"
        >
          <p
            className="
text-cyan-400
text-sm
tracking-[0.35em]
uppercase
font-semibold
"
          >
            MY WORK
          </p>

          <motion.h2
            animate={{
              backgroundPosition: ["0% center", "200% center"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
mt-4
text-4xl
md:text-5xl
font-black
bg-gradient-to-r
from-white
via-cyan-200
to-purple-300
bg-[length:300%_auto]
bg-clip-text
text-transparent
"
          >
            Featured Projects
          </motion.h2>

          <p
            className="
max-w-xl
mx-auto
mt-5
text-slate-400
leading-relaxed
"
          >
            A collection of projects demonstrating my experience with frontend
            development, software engineering, and modern application design.
          </p>
        </motion.div>

        {/* PROJECT GRID */}

        <div
          className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
