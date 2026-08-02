import { motion } from "framer-motion";

export default function Background() {
  return (
    <div
      className="
      fixed
      inset-0
      -z-50
      overflow-hidden
      pointer-events-none

      bg-white
      dark:bg-[#020604]

      transition-colors
      duration-1000
      "
    >
      {/* ===================== */}
      {/* MAIN BACKGROUND */}
      {/* ===================== */}

      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        inset-0

        bg-[length:200%_200%]

        bg-gradient-to-br

        from-white
        via-white
        to-white

        dark:from-black
        dark:via-[#020806]
        dark:to-[#06351f]

        transition-all
        duration-1000
        "
      />

      {/* ===================== */}
      {/* TOP LEFT GLOW */}
      {/* ===================== */}

      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute

        top-[-120px]
        left-[-120px]

        dark:top-[-250px]
        dark:left-[-200px]

        w-[500px]
        h-[500px]

        dark:w-[750px]
        dark:h-[750px]

        rounded-full

        bg-emerald-900/60

        dark:bg-emerald-500/25

        blur-[180px]

        dark:blur-[220px]

        transition-all
        duration-1000
        "
      />

      {/* ===================== */}
      {/* BOTTOM RIGHT GLOW */}
      {/* ===================== */}

      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute

        bottom-[-160px]
        right-[-160px]

        dark:bottom-[-300px]
        dark:right-[-250px]

        w-[600px]
        h-[600px]

        dark:w-[900px]
        dark:h-[900px]

        rounded-full

        bg-green-900/80

        dark:bg-green-400/15

        blur-[220px]

        dark:blur-[260px]

        transition-all
        duration-1000
        "
      />

      {/* ===================== */}
      {/* GRID */}
      {/* ===================== */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.08]
        dark:opacity-[0.04]

        bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]

        dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

        bg-[size:80px_80px]

        transition-all
        duration-1000
        "
      />

      {/* ===================== */}
      {/* VIGNETTE */}
      {/* ===================== */}

      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.08))]

        dark:bg-[radial-gradient(circle_at_center,transparent_10%,black)]

        transition-all
        duration-1000
        "
      />
    </div>
  );
}
