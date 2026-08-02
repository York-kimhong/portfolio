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
            y: -12,

            rotateX: 6,

            rotateY: -6,

            scale: 1.04,
          }}
          transition={{
            duration: 0.4,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="
        relative

        group

        overflow-hidden



        rounded-3xl



        p-6





        bg-white/30


        dark:bg-white/[0.06]





        border


        border-white/50


        dark:border-white/10






        backdrop-blur-2xl






        shadow-[0_20px_60px_rgba(16,185,129,0.12)]



        hover:shadow-[0_30px_90px_rgba(16,185,129,0.25)]




        transition-all


        duration-500
        "
        >
          {/* GLASS REFLECTION */}

          <div
            className="
          absolute


          inset-0



          bg-gradient-to-br


          from-white/50


          via-transparent


          to-transparent



          dark:from-white/20



          opacity-70



          pointer-events-none
          "
          />

          {/* GREEN FLOOD HOVER */}

          <motion.div
            animate={{
              y: ["120%", "-20%", "120%"],
            }}
            transition={{
              duration: 10,

              repeat: Infinity,

              ease: "easeInOut",
            }}
            className="
          absolute


          inset-x-0


          bottom-0


          h-[75%]




          bg-gradient-to-t



          from-emerald-600/30



          via-emerald-400/15



          to-transparent






          blur-3xl





          opacity-0



          group-hover:opacity-100





          transition-opacity



          duration-700
          "
          />

          {/* INNER GLASS EDGE */}

          <div
            className="
          absolute


          inset-0



          rounded-3xl



          border


          border-emerald-400/20



          opacity-0



          group-hover:opacity-100




          shadow-[inset_0_0_40px_rgba(16,185,129,0.25)]



          transition-all


          duration-500
          "
          />

          {/* CONTENT */}

          <div
            className="
          relative

          z-10
          "
          >
            {/* ICON */}

            <motion.div
              whileHover={{
                scale: 1.15,

                rotate: 8,
              }}
              className="
          text-4xl



          mb-5



          text-emerald-700


          dark:text-emerald-400



          drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]



          transition
          "
            >
              {item.icon}
            </motion.div>

            {/* TITLE */}

            <h4
              className="
          text-lg


          font-bold


          mb-3



          text-slate-900


          dark:text-white
          "
            >
              {item.title}
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
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
