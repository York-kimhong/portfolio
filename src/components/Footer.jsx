import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/York-kimhong",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/york-kimhong-90523338a",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      href: "https://t.me/Yorkkimhong",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      {/* TOP ACCENT */}

      <div
        className="
          absolute
          top-0
          left-1/2
          h-px
          w-24
          -translate-x-1/2
          bg-emerald-500
        "
      />

      <div className="section-container py-16 md:py-20">
        {/* ========================================
            CTA
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.35em]
              text-emerald-600
              dark:text-emerald-400
            "
          >
            HAVE A PROJECT IN MIND?
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              tracking-tight
              text-slate-900
              sm:text-4xl
              md:text-5xl
              dark:text-white
            "
          >
            Let's build something{" "}
            <span
              className="
                text-emerald-500
                dark:text-emerald-400
              "
            >
              great.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-lg
              text-sm
              leading-relaxed
              text-slate-500
              dark:text-slate-400
            "
          >
            I'm always interested in learning, collaborating, and working on
            meaningful digital experiences.
          </p>

          {/* CONTACT BUTTON */}

          <motion.a
            href="#contact"
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-emerald-500
              px-6
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_10px_30px_rgba(16,185,129,0.20)]
              transition-all
              duration-300
              hover:bg-emerald-400
              hover:shadow-[0_15px_35px_rgba(16,185,129,0.30)]
            "
          >
            Let's Talk
            <motion.span
              whileHover={{
                x: 3,
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* ========================================
            DIVIDER
        ======================================== */}

        <div
          className="
            my-14
            h-px
            bg-gradient-to-r
            from-transparent
            via-black/10
            to-transparent
            dark:via-white/10
          "
        />

        {/* ========================================
            MAIN FOOTER
        ======================================== */}

        <div
          className="
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* BRAND */}

          <div>
            <motion.a
              href="#"
              whileHover={{
                y: -2,
              }}
              className="
                inline-block
                text-xl
                font-black
                tracking-tight
                text-slate-900
                dark:text-white
              "
            >
              York{" "}
              <span className="text-emerald-500 dark:text-emerald-400">
                Kimhong
              </span>
            </motion.a>

            <div
              className="
                mt-2
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_10px_rgba(52,211,153,0.8)]
                "
              />

              <span
                className="
                  text-xs
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Available for frontend opportunities
              </span>
            </div>
          </div>


          {/* SOCIALS */}

          <div className="flex items-center justify-center gap-2">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-black/10
                  bg-black/[0.02]
                  text-slate-500
                  transition-all
                  duration-300
                  hover:border-emerald-500/30
                  hover:bg-emerald-500/10
                  hover:text-emerald-500
                  dark:border-white/10
                  dark:bg-white/[0.03]
                  dark:text-slate-400
                  dark:hover:border-emerald-400/30
                  dark:hover:bg-emerald-400/10
                  dark:hover:text-emerald-400
                "
              >
                {social.icon}
              </motion.a>
            ))}

            {/* BACK TO TOP */}

            <motion.button
              onClick={scrollToTop}
              aria-label="Back to top"
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                ml-2
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-emerald-500/20
                bg-emerald-500/10
                text-emerald-500
                transition-all
                duration-300
                hover:border-emerald-500/40
                hover:bg-emerald-500/20
                dark:text-emerald-400
              "
            >
              <FaArrowUp size={12} />
            </motion.button>
          </div>
        </div>

        {/* ========================================
            BOTTOM
        ======================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-3
            border-t
            border-black/5
            pt-6
            text-center
            sm:flex-row
            sm:text-left
            dark:border-white/5
          "
        >

        </div>
      </div>
    </footer>
  );
}
