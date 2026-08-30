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
        border border-slate-900/10
        bg-white/50
        p-8
        shadow-[0_20px_60px_rgba(16,185,129,0.08)]
        backdrop-blur-2xl
        transition-all duration-300
        hover:-translate-y-1.5
        hover:border-emerald-500/30
        hover:shadow-[0_25px_70px_rgba(16,185,129,0.15)]
        dark:border-white/10
        dark:bg-white/[0.05]
        lg:col-span-2
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
      <div className="space-y-4">
        <p
          className="
            text-sm
            leading-7
            text-slate-600
            dark:text-slate-300
          "
        >
          Hi, I’m{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            York Kimhong
          </span>
          , a fourth-year Information Technology Engineering student at the
          Royal University of Phnom Penh, passionate about{" "}
          <span className="font-medium text-emerald-600 dark:text-emerald-400">
            frontend development and UI/UX design.
          </span>
        </p>

        <p
          className="
            text-sm
            leading-7
            text-slate-600
            dark:text-slate-300
          "
        >
          I enjoy turning ideas and designs into{" "}
          <span className="font-medium text-slate-900 dark:text-white">
            clean, responsive, and user-friendly web experiences
          </span>{" "}
          using technologies like React, Next.js, TypeScript, and Tailwind CSS.
        </p>

        <p
          className="
            text-sm
            leading-7
            text-slate-500
            dark:text-slate-400
          "
        >
          I’m always learning, building, and looking for opportunities to grow
          through real-world projects and meaningful collaboration.
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
