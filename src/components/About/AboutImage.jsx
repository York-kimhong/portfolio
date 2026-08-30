import { motion } from "framer-motion";
import { fadeScale } from "./aboutAnimations";

export default function AboutImage() {
  return (
    <motion.div {...fadeScale} className="relative mx-auto w-full max-w-md">
      {/* Decorative glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[85%]
          w-[85%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-400/20
          blur-3xl
        "
      />

      {/* Image */}
      <div
        className="
          relative
          aspect-[4/5]
          overflow-hidden
          rounded-[2rem]
          border
          border-slate-900/10
          bg-white/50
          shadow-2xl
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-white/5
        "
      >
        <img
          src="/profile2.png"
          alt="York Kimhong"
          className="
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-700
            hover:scale-105
          "
        />

        {/* Bottom gradient */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-gradient-to-t
            from-black/50
            to-transparent
          "
        />

        {/* Label */}
        <div
          className="
            absolute
            bottom-5
            left-5
            rounded-full
            border
            border-white/20
            bg-black/20
            px-4
            py-2
            text-xs
            font-semibold
            text-white
            backdrop-blur-md
          "
        >
          FRONTEND DEVELOPER
        </div>
      </div>

      {/* Decorative square */}
      <div
        className="
          absolute
          -bottom-5
          -left-5
          h-20
          w-20
          rounded-2xl
          border
          border-emerald-500/20
          bg-emerald-500/10
          backdrop-blur-xl
        "
      />

      {/* Decorative dot */}
      <div
        className="
          absolute
          -right-4
          top-10
          h-4
          w-4
          rounded-full
          bg-emerald-500
          shadow-[0_0_25px_rgba(16,185,129,0.7)]
        "
      />
    </motion.div>
  );
}
