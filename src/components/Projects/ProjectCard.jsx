import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
        rotateX: 3,
        rotateY: -3,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
      group

      relative

      overflow-hidden



      rounded-[28px]



      bg-white/40


      dark:bg-white/[0.05]



      border


      border-black/10


      dark:border-white/10



      backdrop-blur-2xl



      hover:border-cyan-400/40



      shadow-[0_20px_60px_rgba(16,185,129,0.12)]



      hover:shadow-[0_25px_70px_rgba(34,211,238,0.2)]



      transition-all

      duration-500
      "
    >
      {/* OLD PREMIUM HOVER GLOW */}

      <div
        className="
        absolute

        inset-0



        bg-gradient-to-br


        from-cyan-400/15


        via-transparent


        to-purple-500/15




        opacity-0



        group-hover:opacity-100



        transition-opacity



        duration-500
        "
      />

      {/* GLASS LIGHT */}

      <div
        className="
        absolute


        inset-0



        bg-gradient-to-br


        from-white/40


        via-transparent


        to-transparent



        dark:from-white/10
        "
      />

      <div
        className="
        relative

        z-10
        "
      >
        {/* IMAGE */}

        <div
          className="
        relative

        overflow-hidden

        h-44
        "
        >
          <motion.img
            src={project.image}
            alt={project.title}
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
          w-full

          h-full

          object-cover
          "
          />

          <div
            className="
          absolute


          inset-0



          bg-gradient-to-t


          from-black/70


          via-transparent


          to-transparent
          "
          />
        </div>

        {/* CONTENT */}

        <div
          className="
        p-6
        "
        >
          <p
            className="
        text-[11px]


        uppercase


        tracking-[0.3em]


        font-bold



        text-cyan-600



        dark:text-cyan-300
        "
          >
            {project.category}
          </p>

          <h3
            className="
        mt-3


        text-xl


        font-black



        bg-gradient-to-r


        from-slate-900


        via-emerald-600


        to-green-600



        dark:from-white


        dark:via-cyan-200


        dark:to-purple-300



        bg-clip-text


        text-transparent
        "
          >
            {project.title}
          </h3>

          <p
            className="
        mt-3


        text-sm


        leading-relaxed



        text-slate-600



        dark:text-slate-400



        group-hover:text-slate-900



        dark:group-hover:text-slate-200



        transition-colors
        "
          >
            {project.description}
          </p>

          {/* TECH */}

          <div
            className="
        flex

        flex-wrap

        gap-2

        mt-5
        "
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
            px-3

            py-1


            rounded-full



            text-[11px]



            bg-white/40



            dark:bg-white/5



            border



            border-black/10



            dark:border-white/10




            text-slate-700



            dark:text-slate-300
            "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BUTTONS */}

          <div
            className="
        flex

        gap-3

        mt-6
        "
          >
            <motion.a
              href={project.github}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
          flex

          items-center

          gap-2



          px-4

          py-2



          rounded-xl



          bg-white/40



          dark:bg-white/5



          border



          border-black/10



          dark:border-white/10




          text-xs



          text-slate-700



          dark:text-slate-300
          "
            >
              <FaGithub />
              Code
            </motion.a>

            {/* DEMO BUTTON */}

            <motion.a
              href={project.demo}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
  flex

  items-center

  gap-2


  px-4

  py-2


  rounded-xl


  bg-gradient-to-r


  from-emerald-600


  to-green-500



  text-white


  text-xs


  font-semibold



  shadow-[0_0_25px_rgba(16,185,129,0.35)]



  hover:from-emerald-500


  hover:to-green-400



  transition-all


  duration-300
  "
            >
              <FaExternalLinkAlt />
              Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
