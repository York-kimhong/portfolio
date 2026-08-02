import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotateX: [3, -3, 3],
        rotateY: [-4, 4, -4],
        rotateZ: [-1, 1, -1],
      }}
      whileHover={{
        scale: 1.07,
        rotateY: -10,
        rotateX: 8,
        y: -22,
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
      relative
      group
      z-20

      w-[320px]
      h-[430px]

      rounded-[90px_35px_90px_35px]

      overflow-hidden

      border

      border-emerald-700/20

      dark:border-white/15


      bg-white/40

      dark:bg-white/5


      backdrop-blur-xl


      shadow-[0_40px_100px_rgba(5,150,105,0.18)]

      dark:shadow-[0_40px_100px_rgba(16,185,129,0.18)]


      hover:border-emerald-500/60


      hover:shadow-[0_50px_120px_rgba(16,185,129,0.35)]


      transition-all

      duration-700
      "
    >
      {/* PREMIUM GREEN FLOOD HOVER */}

      <motion.div
        animate={{
          backgroundPosition: ["50% 100%", "50% 0%", "50% 100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute

        -inset-24


        z-0


        opacity-0


        group-hover:opacity-100



        bg-[length:200%_200%]



        bg-gradient-to-t


        from-emerald-700/80


        via-emerald-400/40


        to-transparent



        blur-[90px]



        transition-opacity


        duration-700
        "
      />

      {/* SECOND SOFT FLOOD LAYER */}

      <motion.div
        animate={{
          y: [40, -40, 40],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute

        bottom-[-80px]


        left-0


        w-full


        h-[60%]


        bg-gradient-to-t


        from-green-500/30


        to-transparent



        blur-3xl



        opacity-0


        group-hover:opacity-100



        transition-opacity


        duration-700
        "
      />

      {/* GLASS BORDER */}

      <div
        className="
        absolute

        inset-0


        rounded-[90px_35px_90px_35px]


        border

        border-emerald-400/30


        dark:border-emerald-400/20


        z-10
        "
      />

      {/* GLASS SURFACE */}

      <div
        className="
        absolute

        inset-0


        bg-gradient-to-br


        from-white/30


        via-white/10


        to-transparent



        dark:from-white/15


        dark:via-white/5


        backdrop-blur-xl


        z-10
        "
      />

      {/* PROFILE IMAGE */}

      <img
        src="/profile.png"
        alt="York Kimhong"
        className="
        absolute

        inset-0


        w-full

        h-full


        object-cover


        object-top


        z-20


        transition-transform


        duration-700


        group-hover:scale-110
        "
      />

      {/* DARK IMAGE FADE */}

      <div
        className="
        absolute

        inset-0


        bg-gradient-to-t


        from-black/75


        via-transparent


        to-transparent


        z-30
        "
      />

      {/* PREMIUM NAME PANEL */}

      <motion.div
        animate={{
          y: [-3, 3, -3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute


        bottom-6


        left-1/2


        -translate-x-1/2



        z-50



        px-8


        py-3.5



        rounded-2xl



        bg-white/70


        dark:bg-black/60



        border


        border-black/10


        dark:border-white/20



        backdrop-blur-2xl



        shadow-[0_15px_40px_rgba(16,185,129,0.25)]



        overflow-hidden



        transition-all


        duration-500



        group-hover:border-emerald-500/60


        dark:group-hover:border-emerald-400/60
        "
      >
        {/* NAME INNER GLOW */}

        <motion.div
          animate={{
            backgroundPosition: ["50% 100%", "50% 0%", "50% 100%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute

          inset-0


          bg-[length:200%_200%]


          bg-gradient-to-t


          from-emerald-500/40


          via-transparent


          to-transparent



          opacity-0


          group-hover:opacity-100



          blur-xl
          "
        />

        {/* NAME */}

        <p
          className="
          relative


          text-xl


          font-black


          tracking-wide



          text-emerald-800


          dark:text-white



          drop-shadow-[0_0_12px_rgba(16,185,129,0.45)]



          whitespace-nowrap
          "
        >
          York Kimhong
        </p>
      </motion.div>
    </motion.div>
  );
}
