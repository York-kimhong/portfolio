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
      whileHover={{
        y: -8,
        rotateX: 3,
        rotateY: 3,
        scale: 1.02,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
      relative

      group

      overflow-hidden



      lg:col-span-2



      rounded-[32px]



      p-8





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



        pointer-events-none
        "
      />

      {/* GREEN AMBIENT FLOOD */}

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


        bottom-0


        left-0



        w-full


        h-[60%]




        bg-gradient-to-t



        from-emerald-600/25



        via-emerald-400/10



        to-transparent






        blur-3xl




        opacity-0



        group-hover:opacity-100



        transition-opacity


        duration-700
        "
      />

      {/* CONTENT */}

      <div
        className="
        relative

        z-10
        "
      >
        <h3
          className="
        text-2xl


        font-black


        mb-5



        text-slate-900


        dark:text-white
        "
        >
          Who I Am
        </h3>

        <p
          className="
        text-sm


        leading-relaxed



        text-slate-600


        dark:text-slate-300
        "
        >
          I am a third-year Information Technology Engineering student at Royal
          University of Phnom Penh with an interest in frontend development and
          UI design.
        </p>

        <p
          className="
        mt-5


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
    </motion.div>
  );
}
