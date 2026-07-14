import { motion } from "framer-motion";

export default function FloatingTechIcon({ icon, position, duration = 10 }) {
  return (
    <motion.div
      animate={{
        x: [0, 8, -8, 0],
        y: [0, -12, 8, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.2,
      }}
      className={`
        absolute
        z-40
        p-3
        rounded-full
        bg-white/10
        border
        border-white/10
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(34,211,238,0.15)]
        ${position}
      `}
    >
      {icon}
    </motion.div>
  );
}
