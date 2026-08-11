import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectGallery({ project }) {
  const images = project?.gallery || [];

  const [activeImage, setActiveImage] = useState(
    images[0] || project?.image || ""
  );

  if (!project || images.length === 0) {
    return null;
  }

  const activeIndex = images.indexOf(activeImage);

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
          GALLERY
        </p>

        <h2 className="section-title">
          Project Screenshots
        </h2>

        <p className="section-description">
          Explore different screens and important parts of the project.
        </p>
      </div>

      {/* MAIN IMAGE */}

      <div className="glass-card p-5 lg:p-7">
        <motion.img
          key={activeImage}
          src={activeImage}
          alt={project.title}
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            w-full
            max-h-[650px]
            object-contain
            rounded-[30px]
            shadow-2xl
          "
        />
      </div>

      {/* COUNTER */}

      <div
        className="
          mt-5
          text-center
          text-sm
          font-semibold
          text-slate-500
          dark:text-slate-400
        "
      >
        {activeIndex + 1} / {images.length}
      </div>

      {/* THUMBNAILS */}

      <div
        className="
          mt-8
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-4
          gap-5
        "
      >
        {images.map((img, index) => {
          const isActive = activeImage === img;

          return (
            <motion.button
              key={`${img}-${index}`}
              type="button"
              onClick={() => setActiveImage(img)}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                transition-all
                duration-300

                ${
                  isActive
                    ? "border-emerald-400 shadow-lg shadow-emerald-500/20"
                    : "border-black/10 dark:border-white/10 hover:border-emerald-400/40"
                }
              `}
            >
              {/* IMAGE */}

              <img
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                className="
                  w-full
                  h-40
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* ACTIVE OVERLAY */}

              {isActive && (
                <div
                  className="
                    absolute
                    inset-0
                    bg-emerald-500/10
                    pointer-events-none
                  "
                />
              )}

              {/* IMAGE NUMBER */}

              <span
                className="
                  absolute
                  bottom-2
                  right-2
                  px-2.5
                  py-1
                  rounded-full
                  bg-black/50
                  backdrop-blur-md
                  text-white
                  text-[10px]
                  font-bold
                "
              >
                {index + 1}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.section>
  );
}
