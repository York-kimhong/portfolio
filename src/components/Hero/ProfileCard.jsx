import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotateX: [3, -3, 3],
        rotateY: [-4, 4, -4],
      }}
      whileHover={{
        scale: 1.05,
        rotateX: 6,
        rotateY: -8,
        y: -15,
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="
        group
        relative
        z-20
        w-[320px]
        h-[430px]
        overflow-hidden
        rounded-[80px_30px_80px_30px]
        border
        border-emerald-500/20
        dark:border-white/10
        bg-white/40
        dark:bg-white/5
        backdrop-blur-xl
        shadow-[0_40px_100px_rgba(5,150,105,0.18)]
        hover:border-emerald-500/50
        hover:shadow-[0_50px_120px_rgba(16,185,129,0.3)]
        transition-all
        duration-700
      "
    >
      {/* AMBIENT GLOW */}

      <div
        className="
          absolute
          -inset-20
          z-0
          bg-gradient-to-t
          from-emerald-500/40
          via-transparent
          to-transparent
          blur-[80px]
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700
        "
      />

      {/* GLASS SURFACE */}

      <div
        className="
          absolute
          inset-0
          z-10
          bg-gradient-to-br
          from-white/25
          via-white/5
          to-transparent
          dark:from-white/10
          dark:via-white/5
          backdrop-blur-sm
        "
      />

      {/* IMAGE */}

      <img
        src="/profile.png"
        alt="York Kimhong"
        className="
          absolute
          inset-0
          z-20
          w-full
          h-full
          object-cover
          object-top
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* IMAGE FADE */}

      <div
        className="
          absolute
          inset-0
          z-30
          bg-gradient-to-t
          from-black/75
          via-black/10
          to-transparent
        "
      />

      {/* BORDER */}

      <div
        className="
          absolute
          inset-0
          z-40
          rounded-[80px_30px_80px_30px]
          border
          border-emerald-400/20
          group-hover:border-emerald-400/50
          transition-colors
          duration-500
        "
      />

      {/* NAME */}

      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          z-50
          whitespace-nowrap
          rounded-2xl
          border
          border-white/20
          bg-black/55
          px-8
          py-3
          backdrop-blur-2xl
          shadow-[0_15px_40px_rgba(16,185,129,0.2)]
          group-hover:border-emerald-400/60
          transition-colors
          duration-500
        "
      >
        <p
          className="
            text-xl
            font-black
            tracking-wide
            text-white
            drop-shadow-[0_0_12px_rgba(16,185,129,0.45)]
          "
        >
          York Kimhong
        </p>
      </motion.div>
    </motion.div>
  );
}
