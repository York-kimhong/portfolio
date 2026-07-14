import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
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
lg:col-span-2

rounded-[32px]

p-8

bg-white/5

border

border-white/10

backdrop-blur-xl
"
    >
      <h3
        className="
text-2xl

font-bold

mb-5
"
      >
        Who I Am
      </h3>

      <p
        className="
text-slate-300

leading-relaxed

text-sm
"
      >
        I am a third-year Information Technology Engineering student at Royal
        University of Phnom Penh with an interest in frontend development and UI
        design.
      </p>

      <p
        className="
mt-5

text-slate-400

leading-relaxed

text-sm
"
      >
        I enjoy creating clean interfaces, learning new development approaches,
        and improving my skills through academic and personal projects.
      </p>
    </motion.div>
  );
}
