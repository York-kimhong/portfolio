import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="
        relative
        mt-20
        overflow-hidden
        border-t
        border-black/10
        dark:border-white/10
      "
    >
      {/* AMBIENT GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -top-20
          left-1/2
          h-48
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-emerald-500/15
          blur-3xl
          dark:bg-emerald-400/10
        "
      />

      <div
        className="
          section-container
          relative
          z-10
          flex
          flex-col
          items-center
          justify-between
          gap-5
          py-10
          text-center
          md:flex-row
          md:text-left
        "
      >
        {/* LOGO */}
        <motion.h3
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="
            text-xl
            font-black
            text-slate-900
            dark:text-white
          "
        >
          York{" "}
          <span className="text-emerald-500 dark:text-emerald-400">
            Kimhong
          </span>
        </motion.h3>

        {/* COPYRIGHT */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © 2026 York Kimhong. All Rights Reserved.
        </p>

        {/* TECH */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Designed & Developed with{" "}
          <span className="font-semibold text-emerald-500">
            React
          </span>
        </p>
      </div>
    </footer>
  );
}
