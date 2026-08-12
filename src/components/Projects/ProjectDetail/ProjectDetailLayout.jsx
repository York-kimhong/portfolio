import { motion } from "framer-motion";

import Footer from "../../Footer";
import CursorGlow from "../../CursorGlow";

import ProjectHero from "./ProjectHero";
import ProjectPreview from "./ProjectPreview";
import ProjectOverview from "./ProjectOverview";
import ProjectFeatures from "./ProjectFeatures";
import ProjectTech from "./ProjectTech";
import ProjectGallery from "./ProjectGallery";
import ProjectChallenges from "./ProjectChallenges";

import StickyActions from "./StickyActions";

export default function ProjectDetailLayout({ project }) {
  /* =====================================================
     PROJECT NOT FOUND
  ====================================================== */

  if (!project) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          px-6
          bg-white
          dark:bg-[#020604]
          text-slate-900
          dark:text-white
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center"
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              font-bold
              text-red-500
            "
          >
            ERROR
          </p>

          <h1
            className="
              mt-4
              text-3xl
              sm:text-4xl
              font-black
            "
          >
            Project Not Found
          </h1>

          <p
            className="
              mt-4
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            The project you're looking for doesn't exist.
          </p>
        </motion.div>
      </div>
    );
  }

  /* =====================================================
     PROJECT INFORMATION
  ====================================================== */

  const projectInfo = [
    {
      title: "Role",
      value: project.role,
    },
    {
      title: "Platform",
      value: project.platform,
    },
    {
      title: "Duration",
      value: project.duration,
    },
    {
      title: "Status",
      value: project.status,
    },
  ];

  /* =====================================================
     PAGE
  ====================================================== */

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-clip

        bg-white
        dark:bg-[#020604]

        text-slate-900
        dark:text-white

        transition-colors
        duration-700
      "
    >
      {/* =================================================
          AMBIENT BACKGROUND
      ================================================== */}

      {/* TOP GREEN GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -top-48
          left-1/2
          -translate-x-1/2

          w-[900px]
          h-[550px]

          rounded-full

          bg-emerald-500/15
          dark:bg-emerald-400/[0.08]

          blur-[180px]
        "
      />

      {/* LEFT GREEN GLOW */}

      <div
        className="
          pointer-events-none
          absolute

          top-[45%]
          -left-60

          w-[500px]
          h-[500px]

          rounded-full

          bg-emerald-400/10
          dark:bg-emerald-400/[0.04]

          blur-[170px]
        "
      />

      {/* RIGHT CYAN GLOW */}

      <div
        className="
          pointer-events-none
          absolute

          bottom-[-200px]
          -right-48

          w-[550px]
          h-[550px]

          rounded-full

          bg-cyan-500/10
          dark:bg-cyan-400/[0.04]

          blur-[170px]
        "
      />

      {/* =================================================
          STICKY ACTIONS
      ================================================== */}

      <StickyActions />

      {/* =================================================
          MAIN CONTENT
      ================================================== */}

      <main
        className="
          relative
          z-10

          pt-16
          pb-32
        "
      >
        <CursorGlow />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            max-w-6xl
            mx-auto

            px-5
            sm:px-8
            lg:px-10
          "
        >
          {/* =================================================
              HERO
          ================================================== */}

          <section id="hero">
            <ProjectHero project={project} />
          </section>

          {/* =================================================
              PROJECT INFORMATION
          ================================================== */}

          <motion.section
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-20"
          >
            <div
              className="
                grid
                grid-cols-2
                lg:grid-cols-4
                gap-3
                sm:gap-5
              "
            >
              {projectInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
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
                    y: -6,
                  }}
                  className="
                    group
                    glass-card

                    p-5
                    sm:p-6

                    text-center

                    hover:border-emerald-500/30
                  "
                >
                  {/* LABEL */}

                  <p
                    className="
                      text-[10px]
                      sm:text-xs

                      uppercase
                      tracking-[0.2em]

                      font-bold

                      text-slate-500
                      dark:text-slate-500
                    "
                  >
                    {item.title}
                  </p>

                  {/* VALUE */}

                  <h3
                    className="
                      mt-3

                      text-sm
                      sm:text-base

                      font-bold

                      text-slate-800
                      dark:text-white

                      transition-colors
                      duration-300

                      group-hover:text-emerald-600
                      dark:group-hover:text-emerald-400
                    "
                  >
                    {item.value || "N/A"}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* =================================================
              DIVIDER
          ================================================== */}

          <div
            className="
              mt-28
              h-px

              bg-gradient-to-r
              from-transparent
              via-emerald-500/20
              to-transparent
            "
          />

          {/* =================================================
              LIVE PREVIEW
          ================================================== */}

          <section id="preview" className="mt-28">
            <ProjectPreview project={project} />
          </section>

          {/* =================================================
              CASE STUDY
          ================================================== */}

          <div
            className="
              mt-32
              space-y-32
              lg:space-y-40
            "
          >
            {/* OVERVIEW */}

            <section id="overview">
              <ProjectOverview project={project} />
            </section>

            {/* FEATURES */}

            <section id="features">
              <ProjectFeatures project={project} />
            </section>

            {/* TECHNOLOGY */}

            <section id="technology">
              <ProjectTech project={project} />
            </section>

            {/* GALLERY */}

            <section id="gallery">
              <ProjectGallery project={project} />
            </section>

            {/* CHALLENGES */}

            <section id="challenges">
              <ProjectChallenges project={project} />
            </section>
          </div>

          {/* =================================================
              END DIVIDER
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mt-32
              h-px

              bg-gradient-to-r
              from-transparent
              via-emerald-500/30
              to-transparent
            "
          />

          {/* =================================================
              CASE STUDY COMPLETE
          ================================================== */}

          <motion.div
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
              duration: 0.7,
            }}
            className="
              mt-16
              text-center
            "
          >
            <p
              className="
                text-xs

                uppercase
                tracking-[0.3em]

                font-bold

                text-emerald-500
              "
            >
              CASE STUDY COMPLETE
            </p>

            <h2
              className="
                mt-4

                text-2xl
                sm:text-3xl

                font-black

                text-slate-900
                dark:text-white
              "
            >
              Thanks for exploring this project.
            </h2>

            <p
              className="
                mt-4

                max-w-xl
                mx-auto

                text-sm
                leading-relaxed

                text-slate-500
                dark:text-slate-400
              "
            >
              Explore more projects to see different approaches to frontend
              development, software engineering, and application design.
            </p>
          </motion.div>
        </motion.div>
      </main>

      {/* =================================================
          FOOTER
      ================================================== */}

      <Footer />
    </div>
  );
}
