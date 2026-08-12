import { motion } from "framer-motion";

export default function Background() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[-1]
        overflow-hidden
        pointer-events-none

        bg-[#f8fafc]
        dark:bg-[#030303]
      "
    >
      {/* ========================================
          MAIN BACKGROUND
      ======================================== */}

      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0

          bg-[length:200%_200%]

          bg-gradient-to-br
          from-white
          via-[#f8fafc]
          to-white

          dark:from-[#000000]
          dark:via-[#030303]
          dark:to-[#050505]
        "
      />

      {/* ========================================
          VERY SUBTLE DARK MODE GREEN GLOW
      ======================================== */}

      <motion.div
        animate={{
          x: [0, 35, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-180px]
          left-[-180px]

          h-[550px]
          w-[550px]

          rounded-full

          bg-transparent
          dark:bg-emerald-500/[0.07]

          blur-[180px]
        "
      />

      {/* ========================================
          SECOND SUBTLE GLOW
      ======================================== */}

      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 25, -15, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-220px]
          right-[-200px]

          h-[600px]
          w-[600px]

          rounded-full

          bg-transparent
          dark:bg-emerald-400/[0.045]

          blur-[200px]
        "
      />

      {/* ========================================
          GLOBAL GRID
      ======================================== */}

      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)]

          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]

          bg-[size:80px_80px]
        "
      />

      {/* ========================================
          VIGNETTE
      ======================================== */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(15,23,42,0.04))]

          dark:bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.55))]
        "
      />
    </div>
  );
}
