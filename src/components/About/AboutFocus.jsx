import { motion } from "framer-motion";
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

export default function AboutFocus() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="grid gap-5 sm:grid-cols-2 lg:col-span-3"
    >
      {focus.map(({ icon: Icon, title, text }) => (
        <motion.div
          key={title}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            group
            rounded-3xl
            border
            border-slate-900/10
            bg-white/50
            p-6
            shadow-[0_20px_60px_rgba(16,185,129,0.08)]
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:border-emerald-500/30
            hover:shadow-[0_25px_70px_rgba(16,185,129,0.15)]
            dark:border-white/10
            dark:bg-white/[0.05]
          "
        >
          {/* ICON */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.25 }}
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
              transition-all
              duration-500
              group-hover:w-12
            "
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

