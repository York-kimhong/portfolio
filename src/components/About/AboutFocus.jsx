import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiCode,
  HiColorSwatch,
  HiLightBulb,
  HiAcademicCap,
} from "react-icons/hi";

const focus = [
  {
    icon: HiCode,
    title: "Frontend Development",
    text: "Building responsive and interactive web interfaces.",
  },
  {
    icon: HiColorSwatch,
    title: "UI & User Experience",
    text: "Designing simple and user-friendly interfaces with better usability.",
  },
  {
    icon: HiLightBulb,
    title: "Problem Solving",
    text: "Applying programming concepts to solve real development challenges.",
  },
  {
    icon: HiAcademicCap,
    title: "Continuous Learning",
    text: "Improving my skills through projects, courses, and practice.",
  },
];

const smooth = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1],
};

export default function AboutFocus() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : 35,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="grid gap-5 sm:grid-cols-2 lg:col-span-3"
    >
      {focus.map(({ icon: Icon, title, text }, index) => (
        <motion.div
          key={title}
          initial={false}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 20,
          }}
          transition={{
            duration: 0.3,
            delay: isInView ? index * 0.04 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -3,
            transition: smooth,
          }}
          className="
            group
            rounded-3xl
            border
            border-slate-900/10
            bg-white/50
            p-6
            shadow-[0_20px_60px_rgba(16,185,129,0.08)]
            backdrop-blur-2xl

            transition-[border-color,box-shadow,background-color]
            duration-200

            hover:border-emerald-500/30
            hover:shadow-[0_20px_55px_rgba(16,185,129,0.12)]

            dark:border-white/10
            dark:bg-white/[0.05]
          "
        >
          {/* ICON */}
          <motion.div
            whileHover={{
              scale: 1.06,
              rotate: 3,
            }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-5
              w-fit
              text-4xl
              text-emerald-600
              drop-shadow-[0_0_12px_rgba(16,185,129,0.3)]
              dark:text-emerald-400
            "
          >
            <Icon />
          </motion.div>

          {/* TITLE */}
          <h4
            className="
              mb-3
              text-lg
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            {title}
          </h4>

          {/* DESCRIPTION */}
          <p
            className="
              text-sm
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
          >
            {text}
          </p>

          {/* HOVER LINE */}
          <div
            className="
              mt-6
              h-0.5
              w-0
              rounded-full
              bg-emerald-500
              transition-[width]
              duration-200
              ease-out
              group-hover:w-12
            "
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
