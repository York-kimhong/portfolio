import { motion } from "framer-motion";

export default function Logo() {
  return (
    <a
      href="/"
      aria-label="York Kimhong - Home"
      className="group flex items-center gap-3"
    >
      {/* LOGO ICON */}
      <motion.div
        whileHover={{ scale: 1.06, rotate: 2 }}
        whileTap={{ scale: 0.96 }}
        transition={{
          duration: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-xl
          
          border
          border-black/10
          dark:border-white/10
          
          bg-white/60
          dark:bg-white/[0.06]
          
          backdrop-blur-xl
          
          shadow-[0_0_25px_rgba(16,185,129,0.18)]
          
          transition-all
          duration-300
          
          group-hover:border-emerald-400/40
          group-hover:shadow-[0_0_30px_rgba(16,185,129,0.30)]
        "
      >
        {/* GREEN AMBIENT */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-emerald-400/30
            via-emerald-500/10
            to-transparent
            opacity-80
          "
        />

        {/* SHINE */}
        <motion.div
          initial={{ x: "-120%" }}
          whileHover={{ x: "120%" }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-1/2
            w-1/2
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
          "
        />

        {/* INITIALS */}
        <span
          className="
            relative
            z-10
            text-sm
            font-black
            tracking-tight
            text-emerald-600
            dark:text-emerald-300
          "
        >
          YK
        </span>
      </motion.div>

      {/* TEXT */}
      <div className="leading-none">
        {/* NAME */}
        <h1
          className="
            text-sm
            font-black
            tracking-tight
            text-slate-900
            transition-colors
            duration-200
            sm:text-base
            dark:text-white
            group-hover:text-emerald-600
            dark:group-hover:text-emerald-400
          "
        >
          York Kimhong
        </h1>

        {/* ROLE */}
        <div className="mt-1 flex items-center gap-1.5">
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-emerald-500
              shadow-[0_0_8px_rgba(16,185,129,0.7)]
            "
          />

          <p
            className="
              text-[10px]
              font-medium
              tracking-[0.08em]
              text-slate-500
              sm:text-[11px]
              dark:text-slate-400
            "
          >
            FRONTEND DEVELOPER
          </p>
        </div>
      </div>
    </a>
  );
}
