import { motion } from "framer-motion";

import Navbar from "../../navbar/Navbar";
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
  if (!project) {
    return (
      <div
        className="
        min-h-screen

        flex

        items-center

        justify-center

        text-red-500

        font-bold

        "
      >
        Project Not Found
      </div>
    );
  }

  return (
    <div
      className="
      relative

      min-h-screen

      overflow-hidden


      text-slate-900

      dark:text-white

      "
    >
      {/* AMBIENT BACKGROUND */}

      <div
        className="
        absolute

        top-[-150px]

        left-1/2

        -translate-x-1/2


        w-[1000px]

        h-[600px]


        rounded-full


        bg-emerald-500/15


        blur-[180px]


        pointer-events-none
        "
      />

      <div
        className="
        absolute

        bottom-[-200px]

        right-[-150px]


        w-[500px]

        h-[500px]


        rounded-full


        bg-cyan-500/10


        blur-[150px]


        pointer-events-none
        "
      />

      <Navbar />

      <StickyActions />

      <main
        className="
        relative

        z-10


        pt-28

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
          }}
          className="
          max-w-6xl

          mx-auto


          px-5

          sm:px-8

          "
        >
          {/* HERO */}

          <section id="hero">
            <ProjectHero project={project} />
          </section>

          {/* PROJECT INFORMATION */}

          <section
            className="
            mt-20
            "
          >
            <div
              className="
              grid

              grid-cols-2

              md:grid-cols-4

              gap-5
              "
            >
              {[
                ["Role", project.role],

                ["Platform", project.platform],

                ["Duration", project.duration],

                ["Status", project.status],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="
                    p-6


                    rounded-3xl


                    bg-white/40


                    dark:bg-white/[0.05]


                    backdrop-blur-xl


                    border


                    border-black/10


                    dark:border-white/10


                    text-center

                    "
                >
                  <p
                    className="
                      text-xs

                      uppercase

                      tracking-widest

                      text-slate-500
                      "
                  >
                    {title}
                  </p>

                  <h3
                    className="
                      mt-3

                      font-bold

                      "
                  >
                    {value}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          {/* PREVIEW */}

          <section className="mt-28">
            <ProjectPreview project={project} />
          </section>

          {/* CASE STUDY CONTENT */}

          <div
            className="
            mt-32

            space-y-32

            "
          >
            <ProjectOverview project={project} />

            <ProjectFeatures project={project} />

            <ProjectTech project={project} />

            <ProjectGallery project={project} />

            <ProjectChallenges project={project} />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
