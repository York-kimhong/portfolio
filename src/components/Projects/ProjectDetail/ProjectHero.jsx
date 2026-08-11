import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

export default function ProjectHero({ project }) {
  if (!project) return null;

  return (
    <section className="relative grid items-center gap-14 lg:grid-cols-2">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[140px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-5xl font-black leading-tight text-transparent bg-gradient-to-r from-emerald-600 via-green-500 to-cyan-500 bg-clip-text md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed muted">
          {project.description}
        </p>

        {project.featured && (
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-500">
            <FaStar />
            Featured Project
          </div>
        )}

        {project.tech?.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="glass rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="glass-card flex items-center gap-2 px-7 py-3 font-semibold hover:border-emerald-400/40"
            >
              <FaGithub />
              GitHub
            </motion.a>
          )}

          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 px-7 py-3 font-bold text-white shadow-lg shadow-emerald-500/20"
            >
              <FaExternalLinkAlt />
              Live Demo
            </motion.a>
          )}
        </div>
      </motion.div>

      {/* Project image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-[40px] bg-emerald-500/20 blur-3xl" />

        <div className="relative glass-card p-5">
          <motion.img
            src={project.image}
            alt={project.title}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="max-h-[650px] w-full rounded-[24px] object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
