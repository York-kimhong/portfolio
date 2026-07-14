import {
  HiCode,
  HiColorSwatch,
  HiLightBulb,
  HiAcademicCap,
} from "react-icons/hi";

import { motion } from "framer-motion";

const focus = [
  {
    icon: <HiCode />,
    title: "Frontend Development",
    text: "Learning how to build responsive and interactive web interfaces.",
  },

  {
    icon: <HiColorSwatch />,
    title: "UI & User Experience",
    text: "Designing simple and user-friendly interfaces with better usability.",
  },

  {
    icon: <HiLightBulb />,
    title: "Problem Solving",
    text: "Applying programming concepts to solve real development challenges.",
  },

  {
    icon: <HiAcademicCap />,
    title: "Continuous Learning",
    text: "Improving my skills through projects, courses, and practice.",
  },
];

export default function AboutFocus() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{
        once: true,
      }}
      className="
lg:col-span-3

grid

sm:grid-cols-2

gap-5
"
    >
      {focus.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -6,
          }}
          className="
rounded-3xl

p-6

bg-white/5

border

border-white/10

backdrop-blur-xl

hover:border-cyan-400/30

transition
"
        >
          <div
            className="
text-4xl

text-cyan-400

mb-4
"
          >
            {item.icon}
          </div>

          <h4
            className="
text-lg

font-bold

mb-3
"
          >
            {item.title}
          </h4>

          <p
            className="
text-sm

text-slate-400

leading-relaxed
"
          >
            {item.text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
