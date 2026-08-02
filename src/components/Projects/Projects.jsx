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
      {/* PREMIUM STATIC GREEN AMBIENT LIGHT */}

      <div
        className="
        absolute


        top-20


        left-1/2


        -translate-x-1/2



        w-[650px]


        h-[350px]



        rounded-full



        bg-emerald-500/15



        dark:bg-emerald-400/10



        blur-[150px]



        pointer-events-none
        "
      />

      {/* SMALL SECOND LIGHT */}

      <div
        className="
        absolute


        bottom-0


        right-[-150px]



        w-[400px]


        h-[400px]



        rounded-full



        bg-green-500/10



        dark:bg-green-400/10



        blur-[120px]



        pointer-events-none
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
            duration: 0.8,
          }}
          className="
        text-center

        mb-20
        "
        >
          <p
            className="
          text-sm


          tracking-[0.35em]


          uppercase


          font-bold



          text-emerald-700


          dark:text-emerald-400
          "
          >
            MY WORK
          </p>

          <h2
            className="
          mt-4


          text-4xl


          md:text-5xl


          font-black




          bg-gradient-to-r



          from-emerald-800



          via-emerald-600



          to-green-700





          dark:from-white



          dark:via-emerald-200



          dark:to-green-300





          bg-clip-text


          text-transparent
          "
          >
            Featured Projects
          </h2>

          <p
            className="
          max-w-xl


          mx-auto


          mt-5


          leading-relaxed




          text-slate-600



          dark:text-slate-400
          "
          >
            A collection of projects demonstrating my experience with frontend
            development, software engineering, and modern application design.
          </p>
        </motion.div>

        {/* PROJECT GRID */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
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
        </motion.div>
      </div>
    </section>
  );
}
