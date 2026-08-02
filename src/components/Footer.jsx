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
      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        -top-20

        w-[500px]
        h-[200px]

        bg-emerald-500/20

        blur-3xl

        rounded-full

        pointer-events-none
        "
      />

      <div
        className="
        section-container

        relative
        z-10

        py-10


        flex

        flex-col

        md:flex-row


        justify-between


        items-center


        gap-6
        "
      >
        {/* LOGO */}

        <motion.h3
          whileHover={{
            scale: 1.05,
          }}
          className="
          text-xl

          font-black

          text-slate-900

          dark:text-white

          "
        >
          York
          <span
            className="
            text-emerald-500

            dark:text-emerald-400
            "
          >
            {" "}
            Kimhong
          </span>
        </motion.h3>

        {/* COPYRIGHT */}

        <p
          className="
          text-sm

          text-slate-500

          dark:text-slate-400

          text-center
          "
        >
          © 2026 York Kimhong.
          <br className="md:hidden" /> All Rights Reserved.
        </p>

        {/* TECH */}

        <motion.p
          whileHover={{
            y: -3,
          }}
          className="
          text-sm


          text-slate-500


          dark:text-slate-400


          "
        >
          Designed & Developed with
          <span
            className="
            mx-1

            text-emerald-500

            font-semibold
            "
          >
            React
          </span>
          
        </motion.p>
      </div>
    </footer>
  );
}
