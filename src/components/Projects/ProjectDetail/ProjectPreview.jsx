import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaDesktop } from "react-icons/fa";

export default function ProjectPreview({ project }) {
  if (!project) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="project-section relative"
    >
      {/* HEADER */}
      <div className="text-center mb-14">
        <p className="section-label">
          LIVE PREVIEW
        </p>

        <h2 className="section-title">
          Project Showcase
        </h2>

        <p className="section-description max-w-xl mx-auto">
          Interactive preview of the project interface and user experience.
        </p>
      </div>

      {/* MOCKUP */}
      <div className="relative max-w-6xl mx-auto">

        {/* BACK GLOW */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-emerald-500/30
            to-cyan-500/20
            blur-[130px]
            rounded-full
            pointer-events-none
          "
        />

        {/* BROWSER CARD */}
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ duration: 0.4 }}
          className="
            relative
            overflow-hidden
            glass-card
            shadow-2xl
          "
        >
          {/* BROWSER HEADER */}
          <div
            className="
              flex
              items-center
              justify-between
              px-5
              py-4
              bg-black/5
              dark:bg-white/5
              border-b
              border-black/10
              dark:border-white/10
            "
          >
            {/* WINDOW DOTS */}
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* TITLE BAR */}
            <div
              className="
                hidden
                sm:flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                bg-white/50
                dark:bg-white/10
                text-xs
                text-slate-600
                dark:text-slate-300
              "
            >
              <FaDesktop />
              {project.title}
            </div>

            {/* DEMO BUTTON */}
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  accent
                  hover:text-emerald-400
                  transition
                "
              >
                Open
                <FaExternalLinkAlt />
              </a>
            )}
          </div>

          {/* IMAGE */}
          <div
            className="
              p-4
              sm:p-8
              flex
              justify-center
              bg-gradient-to-br
              from-white/20
              to-transparent
            "
          >
            <motion.img
              src={project.image}
              alt={project.title}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="
                w-full
                h-auto
                max-h-[700px]
                object-contain
                rounded-[30px]
                shadow-2xl
              "
            />
          </div>

          {/* REFLECTION */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-tr
              from-white/20
              via-transparent
              to-transparent
              pointer-events-none
            "
          />
        </motion.div>

        {/* BADGES */}
        <div className="mt-8 flex justify-center flex-wrap gap-3">

          {/* STATUS */}
          <span
            className="
              px-5
              py-2
              rounded-full
              bg-emerald-500
              text-white
              text-sm
              font-bold
              shadow-lg
              shadow-emerald-500/30
            "
          >
            {project.status}
          </span>

          {/* PLATFORM */}
          <span
            className="
              px-5
              py-2
              rounded-full
              bg-white/70
              dark:bg-white/10
              backdrop-blur-xl
              border
              border-black/10
              dark:border-white/10
              text-sm
              font-semibold
            "
          >
            {project.platform || "Web Application"}
          </span>
        </div>
      </div>
    </motion.section>
  );
}
