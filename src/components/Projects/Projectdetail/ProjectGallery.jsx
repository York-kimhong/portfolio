import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectGallery({ project }) {
  if (!project) return null;

  const images = project.gallery || [];

  const [activeImage, setActiveImage] = useState(images[0] || project.image);

  if (images.length === 0) {
    return null;
  }

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

      <div
        className="
        mb-14
        "
      >
        <p
          className="
          uppercase

          tracking-[0.35em]

          text-xs

          font-bold

          text-emerald-500
          "
        >
          GALLERY
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
          Project Screenshots
        </h2>

        <p
          className="
          mt-5

          text-slate-600

          dark:text-slate-400
          "
        >
          Explore different screens and important parts of the project.
        </p>
      </div>

      {/* MAIN IMAGE */}

      <div
        className="
        rounded-[40px]

        p-5


        bg-white/40

        dark:bg-white/[0.06]


        backdrop-blur-xl


        border

        border-black/10

        dark:border-white/10
        "
      >
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
        "
      >
        {images.indexOf(activeImage) + 1}/{images.length}
      </div>

      {/* THUMBNAILS */}

      <div
        className="
        mt-8

        grid

        grid-cols-2

        sm:grid-cols-3

        gap-5
        "
      >
        {images.map((img, index) => (
          <motion.button
            key={img}
            onClick={() => {
              setActiveImage(img);
            }}
            whileHover={{
              y: -6,
            }}
            className={`
              
              rounded-3xl

              overflow-hidden

              border

              transition-all


              ${
                activeImage === img
                  ? "border-emerald-400 shadow-lg shadow-emerald-500/20"
                  : "border-black/10 dark:border-white/10"
              }

              `}
          >
            <img
              src={img}
              alt={`${project.title}-${index}`}
              className="
                w-full

                h-40

                object-cover
                "
            />
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}
