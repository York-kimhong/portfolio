import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      animate={{
        y: [-6, 6, -6],
        rotateX: [2, -2, 2],
        rotateY: [-3, 3, -3],
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

        h-[360px]
        w-[260px]

        overflow-hidden
        rounded-[60px_24px_60px_24px]

        border
        border-emerald-500/20
        bg-white/40
        backdrop-blur-xl

        shadow-[0_30px_70px_rgba(5,150,105,0.16)]

        transition-all
        duration-700

        hover:border-emerald-500/50
        hover:shadow-[0_40px_90px_rgba(16,185,129,0.25)]

        sm:h-[400px]
        sm:w-[290px]
        sm:rounded-[70px_26px_70px_26px]

        lg:h-[430px]
        lg:w-[320px]
        lg:rounded-[80px_30px_80px_30px]
        lg:shadow-[0_40px_100px_rgba(5,150,105,0.18)]

        dark:border-white/10
        dark:bg-white/5
      "
    >
      {/* IMAGE */}
      <img
        src="/profile2.png"
        alt="York Kimhong"
        className="
          absolute
          inset-0
          z-20
          h-full
          w-full
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
          pointer-events-none
          absolute
          inset-0
          z-40

          rounded-[60px_24px_60px_24px]

          border
          border-emerald-400/20

          transition-colors
          duration-500

          group-hover:border-emerald-400/50

          sm:rounded-[70px_26px_70px_26px]

          lg:rounded-[80px_30px_80px_30px]
        "
      />
    </motion.div>
  );
}
