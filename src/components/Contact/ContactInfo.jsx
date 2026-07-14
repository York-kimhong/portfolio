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
    <div
      className="
      glass
      rounded-[32px]
      p-8
      "
    >
      <h3
        className="
        text-2xl
        font-bold
        mb-8
        "
      >
        Let's Connect
      </h3>

      <div className="space-y-6">
        <div>
          <p className="text-slate-400 text-sm">Email</p>

          <p className="mt-1 font-semibold">kimhong4446@gmail.com</p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">Location</p>

          <p className="mt-1 font-semibold">Phnom Penh, Cambodia</p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">Availability</p>

          <p className="mt-1 font-semibold">
            Open to Frontend Internship Opportunities
          </p>
        </div>
      </div>

      {/* SOCIAL ICON BUTTONS */}

      <div
        className="
        flex
        items-center
        gap-3
        mt-10
        "
      >
        {socials.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            initial="rest"
            whileHover="hover"
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
              ease: "easeOut",
            }}
            className="
            relative
            h-12
            flex
            items-center
            justify-center
            rounded-xl
            overflow-hidden
            bg-white/5
            border
            border-white/10
            text-slate-300
            hover:text-white
            hover:border-cyan-400/50
            hover:bg-white/10
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
                ease: "easeOut",
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

            {/* NAME */}

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
              }}
              className="
              text-sm
              font-medium
              whitespace-nowrap
              "
            >
              {item.name}
            </motion.span>
          </motion.a>
        ))}

        {/* RESUME DOWNLOAD BUTTON */}

        <motion.a
          href="/York_Kimhong.pdf"
          download="York_Kimhong.pdf"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
          h-12
          px-5
          flex
          items-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          to-purple-500
          text-white
          text-sm
          font-semibold
          "
        >
          <FaDownload />
          Resume
        </motion.a>
      </div>
    </div>
  );
}
