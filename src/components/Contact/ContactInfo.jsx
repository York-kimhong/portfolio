import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactInfo() {
  const socials = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:kimhong4446@gmail.com",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      link: "https://t.me/Yorkkimhong",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/York-kimhong",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/york-kimhong-90523338a",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: false,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        p-6
        sm:p-8

        bg-white/40
        dark:bg-white/[0.06]

        border
        border-black/10
        dark:border-white/10

        backdrop-blur-2xl

        shadow-[0_20px_60px_rgba(16,185,129,0.10)]

        transition-all
        duration-300

        hover:border-emerald-500/30
        hover:shadow-[0_25px_70px_rgba(16,185,129,0.15)]
      "
    >
      {/* GREEN GLASS FLOOD */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-40
          w-full

          bg-gradient-to-t
          from-emerald-500/15
          via-emerald-400/5
          to-transparent

          blur-3xl
        "
      />

      {/* TOP LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          -top-24
          -right-24
          h-60
          w-60
          rounded-full
          bg-emerald-400/10
          blur-3xl
        "
      />

      <div className="relative z-10">
        {/* TITLE */}

        <h3
          className="
            mb-8
            text-xl
            font-black
            text-slate-900
            sm:text-2xl
            dark:text-white
          "
        >
          Let's Connect
        </h3>

        {/* INFORMATION */}

        <div className="space-y-6">
          {/* EMAIL */}

          <div>
            <p
              className="
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Email
            </p>

            <p
              className="
                mt-1
                break-all
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              kimhong4446@gmail.com
            </p>
          </div>

          {/* LOCATION */}

          <div>
            <p
              className="
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Location
            </p>

            <p
              className="
                mt-1
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              Phnom Penh, Cambodia
            </p>
          </div>

          {/* AVAILABILITY */}

          <div>
            <p
              className="
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Availability
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_12px_rgba(52,211,153,0.8)]
                "
              />

              <p
                className="
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                Open to Frontend Internship Opportunities
              </p>
            </div>
          </div>
        </div>

        {/* SOCIAL BUTTONS */}

        <div
          className="
            mt-10
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          {socials.map((item) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial="rest"
              whileHover="hover"
              whileTap={{
                scale: 0.95,
              }}
              variants={{
                rest: {
                  width: 48,
                },

                hover: {
                  width: 125,
                },
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-label={item.name}
              className="
                relative
                flex
                h-12
                items-center
                justify-center

                overflow-hidden

                rounded-xl

                border
                border-black/10
                dark:border-white/10

                bg-black/5
                dark:bg-white/5

                text-slate-600
                dark:text-slate-300

                hover:border-emerald-400/50
                hover:text-emerald-600
                dark:hover:text-emerald-300

                transition-colors
                duration-200
              "
            >
              {/* ICON */}

              <motion.span
                variants={{
                  rest: {
                    x: 0,
                  },

                  hover: {
                    x: -35,
                  },
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  text-lg
                "
              >
                {item.icon}
              </motion.span>

              {/* LABEL */}

              <motion.span
                variants={{
                  rest: {
                    opacity: 0,
                    x: 20,
                  },

                  hover: {
                    opacity: 1,
                    x: 10,
                  },
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-sm
                  font-semibold
                  whitespace-nowrap
                "
              >
                {item.name}
              </motion.span>
            </motion.a>
          ))}

          {/* RESUME */}

          <motion.a
            href="/York_Kimhong.pdf"
            download="York_Kimhong.pdf"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              h-12
              items-center
              gap-2
              rounded-xl
              px-5

              bg-gradient-to-r
              from-emerald-600
              to-green-500

              text-sm
              font-semibold
              text-white

              shadow-[0_10px_30px_rgba(16,185,129,0.30)]

              transition-all
              duration-200

              hover:from-emerald-500
              hover:to-green-400
              hover:shadow-[0_15px_35px_rgba(16,185,129,0.40)]
            "
          >
            <FaDownload />

            <span>Resume</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
