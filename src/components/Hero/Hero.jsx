import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

import ProfileCard from "./ProfileCard";
import { fadeUp, fadeScale } from "./heroAnimations";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f5f7f3]
        text-slate-900
        dark:bg-[#07100c]
        dark:text-white
      "
    >
      {/* ================= BACKGROUND PATTERN ================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          sm:opacity-50
          dark:opacity-10
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 50% 0%,
              rgba(16,185,129,.12),
              transparent 35%
            ),
            repeating-radial-gradient(
              ellipse at 50% 100%,
              transparent 0px,
              transparent 10px,
              rgba(15,23,42,.08) 11px,
              transparent 12px
            )
          `,
          backgroundSize: "100% 100%, 70px 42px",
        }}
      />

      {/* ================= DECORATIVE BLOBS ================= */}

      {/* LEFT BLOB */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-[35%]
          h-64
          w-64
          rounded-full
          bg-emerald-400/10
          blur-3xl

          sm:h-72
          sm:w-72
          sm:-left-32

          dark:bg-emerald-400/5
        "
      />

      {/* RIGHT BLOB */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[25%]
          hidden
          h-96
          w-96
          rounded-full
          bg-green-400/10
          blur-3xl

          sm:block
        "
      />

      {/* ================= DECORATIVE LEAVES ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[38%]
          top-[-30px]
          hidden
          h-32
          w-12
          rotate-[25deg]
          rounded-[100%_0]
          bg-slate-900/90
          blur-[2px]
          dark:bg-white/10

          md:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[24%]
          top-[42%]
          hidden
          h-24
          w-9
          rotate-[55deg]
          rounded-[100%_0]
          bg-slate-900/80
          dark:bg-white/10

          md:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[17%]
          bottom-[8%]
          hidden
          h-28
          w-10
          rotate-[125deg]
          rounded-[100%_0]
          bg-slate-900/80
          dark:bg-white/10

          md:block
        "
      />

      {/* ================= MAIN CONTAINER ================= */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          flex-col
          items-center

          px-5
          pb-12
          pt-24

          sm:px-8
          sm:pb-16
          sm:pt-28

          lg:flex-row
          lg:items-center
          lg:px-16
          lg:py-24
        "
      >
        {/* ===================================================== */}
        {/* ================= TOP RIGHT STATUS ================== */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="
            absolute
            right-5
            top-20
            z-30

            hidden
            text-right

            sm:block
            sm:right-8
            sm:top-24

            lg:right-16
            lg:top-24
          "
        >
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-slate-500
              dark:text-slate-400
            "
          >
            Open to work
          </p>

          <h2
            className="
              mt-1
              text-4xl
              font-black
              leading-none
              tracking-tight
              text-slate-900

              md:text-5xl

              dark:text-white
            "
          >
            2026
          </h2>

          <div
            className="
              mt-1
              flex
              items-center
              justify-end
              gap-2
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-500
              "
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-emerald-600
                dark:text-emerald-400
              "
            >
              Internship
            </span>
          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* ===================== PROFILE ======================= */}
        {/* ===================================================== */}

        <motion.div
          {...fadeScale}
          className="
            pointer-events-none
            relative
            z-10

            order-1
            mt-2
            flex
            h-[350px]
            w-full
            items-end
            justify-center

            sm:mt-4
            sm:h-[420px]

            lg:order-none
            lg:absolute
            lg:bottom-[-80px]
            lg:right-[2%]
            lg:mt-0
            lg:h-[90%]
            lg:w-[58%]
          "
        >
          {/* PROFILE CIRCLE */}
          <div
            className="
              absolute
              bottom-[-5px]
              left-1/2
              h-[250px]
              w-[250px]
              -translate-x-1/2
              rounded-full
              bg-gradient-to-br
              from-emerald-300
              via-teal-400
              to-blue-400
              opacity-75
              blur-[1px]

              sm:h-[340px]
              sm:w-[340px]

              lg:bottom-[5%]
              lg:h-[500px]
              lg:w-[500px]
            "
          />

          {/* PROFILE CARD */}
          <div
            className="
              relative
              z-10
              h-[350px]
              w-[260px]

              sm:h-[400px]
              sm:w-[290px]

              lg:h-full
              lg:w-full
              lg:max-w-[300px]
            "
          >
            <ProfileCard />
          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* =================== LEFT CONTENT ==================== */}
        {/* ===================================================== */}

        <motion.div
          {...fadeUp}
          className="
            relative
            z-20

            order-2
            mt-8
            w-full
            max-w-[680px]

            sm:mt-10

            lg:order-none
            lg:mt-0
            lg:-mt-8
          "
        >
          {/* SMALL INTRO */}
          <div
            className="
              mb-4
              flex
              max-w-[95%]
              items-center
              gap-2.5

              text-[9px]
              font-bold
              uppercase
              leading-4
              tracking-[0.13em]

              text-emerald-600

              sm:mb-5
              sm:gap-3
              sm:text-xs
              sm:tracking-[0.25em]

              dark:text-emerald-400
            "
          >
            <span
              className="
                h-[2px]
                w-6
                shrink-0
                bg-emerald-500

                sm:w-10
              "
            />

            <span>Information Technology Engineering Student</span>
          </div>

          {/* NAME */}
          <h1
            className="
              text-[clamp(3.4rem,17vw,7.5rem)]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.06em]

              text-slate-950

              sm:text-[clamp(4.5rem,11vw,7.5rem)]

              dark:text-white
            "
          >
            York
            <br />
            <span className="text-emerald-500">Kimhong</span>
          </h1>

          {/* ROLE */}
          <div
            className="
              mt-5
              flex
              items-center
              gap-2.5

              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]

              text-slate-600

              sm:mt-6
              sm:gap-3
              sm:text-sm
              sm:tracking-[0.22em]

              dark:text-slate-300
            "
          >
            <span
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-emerald-500
              "
            />

            <span>Frontend Developer</span>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              max-w-[500px]

              text-[13px]
              leading-6

              text-slate-600

              sm:mt-5
              sm:text-base
              sm:leading-7

              dark:text-slate-400
            "
          >
            I build modern, responsive web experiences with React, Next.js, and
            Tailwind CSS, combining clean development with thoughtful UI design.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-6
              flex
              w-full
              flex-col
              gap-3

              min-[400px]:flex-row
              min-[400px]:flex-wrap

              sm:mt-8
            "
          >
            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              className="
                group
                inline-flex
                min-h-[46px]
                items-center
                justify-center
                gap-2

                rounded-full
                bg-emerald-500

                px-6
                py-3

                text-xs
                font-bold
                text-white

                shadow-lg
                shadow-emerald-500/25

                transition-all

                sm:px-7
                sm:py-3.5
                sm:text-sm

                hover:-translate-y-1
                hover:bg-emerald-600
              "
            >
              View Projects
              <HiArrowRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* DOWNLOAD RESUME */}
            <a
              href="/York_Kimhong_Frontend.pdf"
              download
              className="
                inline-flex
                min-h-[46px]
                items-center
                justify-center

                rounded-full

                border
                border-slate-900/15

                bg-white/60

                px-6
                py-3

                text-xs
                font-semibold
                text-slate-800

                backdrop-blur-md

                transition-all

                sm:px-7
                sm:py-3.5
                sm:text-sm

                hover:-translate-y-1
                hover:border-emerald-500

                dark:border-white/15
                dark:bg-white/5
                dark:text-white
              "
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
