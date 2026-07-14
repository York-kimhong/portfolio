import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotateZ: [0, -1.5, 0],
      }}
      whileHover={{
        scale: 1.05,
        rotateY: -8,
        rotateX: 4,
        y: -18,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
      relative
      group
      z-20

      w-[320px]
      h-[430px]

      rounded-[90px_35px_90px_35px]

      overflow-hidden

      border
      border-white/15

      bg-white/5

      shadow-[0_0_50px_rgba(34,211,238,0.18)]

      hover:border-cyan-400/50

      transition-all
      duration-300

      "
    >
      {/* HOVER GLOW */}

      <div
        className="
        absolute
        -inset-1

        rounded-[90px_35px_90px_35px]

        bg-gradient-to-r

        from-cyan-400/20

        via-purple-400/20

        to-cyan-400/20

        blur-xl

        opacity-0

        group-hover:opacity-100

        transition-opacity

        duration-500

        "
      />

      {/* GLASS LAYER */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-br

        from-white/20

        via-white/10

        to-transparent

        backdrop-blur-xl

        "
      />

      {/* PROFILE IMAGE */}

      <img
        src="/profile.png"
        alt="York Kimhong"
        className="
        absolute
        inset-0

        w-full
        h-full

        object-cover

        object-top

        transition-transform

        duration-500

        group-hover:scale-110

        "
      />

      {/* DARK FADE */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-t

        from-slate-950/70

        via-transparent

        to-transparent

        "
      />

      {/* NAME GLASS PANEL */}

      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4,

          repeat: Infinity,

          ease: "easeInOut",
        }}
        className="
        absolute

        bottom-6

        left-1/2

        -translate-x-1/2

        z-30


        px-7

        py-3


        rounded-2xl


        bg-black/40


        border

        border-white/10


        backdrop-blur-xl


        shadow-[0_0_30px_rgba(34,211,238,0.15)]

        "
      >
        <motion.p
          animate={{
            backgroundPosition: ["0% center", "200% center"],
          }}
          transition={{
            duration: 8,

            repeat: Infinity,

            ease: "linear",
          }}
          className="
          text-xl

          font-black

          tracking-wide


          bg-gradient-to-r

          from-white

          via-cyan-200

          to-purple-100


          bg-[length:300%_auto]


          bg-clip-text

          text-transparent


          whitespace-nowrap

          "
        >
          York Kimhong
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
