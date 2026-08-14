import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutIntro() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : -30,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        rounded-3xl
        border
        border-slate-900/10
        bg-white/50
        p-8

        shadow-[0_20px_60px_rgba(16,185,129,0.08)]

        backdrop-blur-2xl

        transition-all
        duration-300

        hover:-translate-y-1.5
        hover:border-emerald-500/30
        hover:shadow-[0_25px_70px_rgba(16,185,129,0.15)]

        dark:border-white/10
        dark:bg-white/[0.05]

        lg:col-span-2

        will-change-transform
      "
    >
      {/* TITLE */}
      <h3
        className="
          mb-5
          text-2xl
          font-black
          text-slate-900
          dark:text-white
        "
      >
        Who I Am
      </h3>

      {/* DESCRIPTION */}
      <div className="space-y-5">
        <p
          className="
            text-sm
            leading-relaxed
            text-slate-600
            dark:text-slate-300
          "
        >
          I am a fourth-year Information Technology Engineering student at Royal
          University of Phnom Penh with an interest in Web development and
          UI design.
        </p>

        <p
          className="
            text-sm
            leading-relaxed
            text-slate-500
            dark:text-slate-400
          "
        >
          I enjoy creating clean interfaces, learning new development
          approaches, and improving my skills through academic and personal
          projects.
        </p>
      </div>

      {/* ACCENT LINE */}
      <div
        className="
          mt-7
          h-0.5
          w-12
          rounded-full
          bg-emerald-500
          transition-all
          duration-300
          group-hover:w-20
        "
      />
    </motion.div>
  );
}
