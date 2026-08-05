import { motion } from "framer-motion";

export default function ProjectOverview({ project }) {
  if (!project) return null;

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

      <div className="mb-14">
        <p
          className="
          uppercase
          tracking-[0.35em]
          text-xs
          font-bold
          text-emerald-500
          "
        >
          PROJECT OVERVIEW
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
          About This Project
        </h2>

        <p
          className="
          mt-5

          max-w-3xl

          text-slate-600
          dark:text-slate-400

          leading-relaxed
          "
        >
          A detailed overview of the project's purpose, development process,
          challenges, and technical implementation.
        </p>
      </div>

      {/* MAIN OVERVIEW CARD */}

      <div
        className="
        rounded-[36px]

        p-8
        lg:p-12


        bg-white/40

        dark:bg-white/[0.05]


        backdrop-blur-xl


        border

        border-black/10

        dark:border-white/10


        shadow-xl
        "
      >
        <h3
          className="
          text-2xl

          font-black

          mb-6

          text-emerald-600

          dark:text-emerald-400
          "
        >
          Project Description
        </h3>

        <p
          className="
          text-lg

          leading-8

          text-slate-600

          dark:text-slate-400
          "
        >
          {project.overview || project.description}
        </p>
      </div>

      {/* PROJECT INFORMATION */}

      <div
        className="
        mt-8

        grid

        grid-cols-2

        md:grid-cols-3

        lg:grid-cols-5

        gap-5
        "
      >
        <InfoCard title="Role" value={project.role} />

        <InfoCard title="Platform" value={project.platform} />

        <InfoCard title="Duration" value={project.duration} />

        <InfoCard title="Team" value={project.team} />

        <InfoCard title="Status" value={project.status} />
      </div>

      {/* CHALLENGE & SOLUTION */}

      <div
        className="
        mt-10

        grid

        lg:grid-cols-2

        gap-8
        "
      >
        {/* CHALLENGE */}

        <ContentCard
          title="Challenge"
          text={
            project.challenge ||
            "Creating a modern and scalable application with a clean user experience."
          }
        />

        {/* SOLUTION */}

        <ContentCard
          title="Solution"
          highlight
          text={
            project.solution ||
            "Implemented reusable components, responsive layouts, and modern development practices."
          }
        />
      </div>
    </motion.section>
  );
}

function InfoCard({ title, value }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="
      rounded-3xl

      p-6


      bg-white/40

      dark:bg-white/[0.05]


      border

      border-black/10

      dark:border-white/10


      backdrop-blur-xl


      text-center

      transition
      "
    >
      <p
        className="
        text-xs

        uppercase

        tracking-[0.2em]

        text-slate-500

        mb-3
        "
      >
        {title}
      </p>

      <h4
        className="
        font-bold

        text-sm

        lg:text-base

        text-slate-900

        dark:text-white
        "
      >
        {value || "N/A"}
      </h4>
    </motion.div>
  );
}

function ContentCard({ title, text, highlight = false }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className={`
      
      rounded-[32px]

      p-8


      border

      backdrop-blur-xl


      transition


      ${
        highlight
          ? `
        bg-gradient-to-br

        from-emerald-500/15

        to-green-500/5

        border-emerald-500/20
        `
          : `
        bg-white/40

        dark:bg-white/[0.05]

        border-black/10

        dark:border-white/10
        `
      }

      `}
    >
      <h3
        className="
        text-2xl

        font-black

        mb-5

        text-emerald-600

        dark:text-emerald-400
        "
      >
        {title}
      </h3>

      <p
        className="
        leading-8

        text-slate-600

        dark:text-slate-400
        "
      >
        {text}
      </p>
    </motion.div>
  );
}
