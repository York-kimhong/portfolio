import { motion } from "framer-motion";

export default function ProjectOverview({ project }) {
  if (!project) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="project-section"
    >
      {/* HEADER */}

      <div className="mb-14">
        <p className="section-label">
          PROJECT OVERVIEW
        </p>

        <h2 className="section-title">
          About This Project
        </h2>

        <p className="section-description max-w-3xl">
          A detailed overview of the project's purpose, development process,
          challenges, and technical implementation.
        </p>
      </div>

      {/* PROJECT DESCRIPTION */}

      <div className="glass-card p-8 lg:p-12">
        <h3 className="content-title">
          Project Description
        </h3>

        <p className="text-lg leading-8 muted">
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
        <InfoCard
          title="Role"
          value={project.role}
        />

        <InfoCard
          title="Platform"
          value={project.platform}
        />

        <InfoCard
          title="Duration"
          value={project.duration}
        />

        <InfoCard
          title="Team"
          value={project.team}
        />

        <InfoCard
          title="Status"
          value={project.status}
        />
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
        <ContentCard
          title="Challenge"
          text={
            project.challenge ||
            "Creating a modern and scalable application with a clean user experience."
          }
        />

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


/* ========================================
   INFORMATION CARD
======================================== */

function InfoCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="
        glass-card
        p-6
        text-center
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


/* ========================================
   CONTENT CARD
======================================== */

function ContentCard({
  title,
  text,
  highlight = false,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`
        ${highlight ? "highlight-card" : "glass-card"}
        p-8
      `}
    >
      <h3 className="content-title">
        {title}
      </h3>

      <p className="leading-8 muted">
        {text}
      </p>
    </motion.div>
  );
}
