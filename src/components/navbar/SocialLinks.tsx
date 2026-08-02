import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/York-kimhong",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/york-kimhong-90523338a",
      label: "LinkedIn",
    },
  ];

  return (
    <div
      className="
      flex
      items-center
      gap-3
      "
    >
      {socials.map((item) => (
        <motion.a
          key={item.label}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{
            y: -3,
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
          group

          relative

          w-9
          h-9


          flex
          items-center
          justify-center


          rounded-xl



          bg-white/40

          dark:bg-white/5



          border

          border-black/10

          dark:border-white/10



          backdrop-blur-xl



          text-slate-600

          dark:text-slate-400



          hover:text-emerald-600

          dark:hover:text-emerald-400



          transition-all

          duration-300


          overflow-hidden
          "
        >
          {/* HOVER GLOW */}

          <span
            className="
            absolute

            inset-0


            bg-gradient-to-br

            from-emerald-400/30

            to-green-500/10


            opacity-0


            group-hover:opacity-100


            transition-opacity

            duration-500
            "
          />

          {/* ICON */}

          <span
            className="
            relative

            z-10

            text-lg
            "
          >
            {item.icon}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
