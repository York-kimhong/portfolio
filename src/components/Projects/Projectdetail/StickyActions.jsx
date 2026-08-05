import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function StickyActions() {
  const navigate = useNavigate();

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBack = () => {
    navigate("/");

    setTimeout(() => {
      const projectsSection = document.getElementById("projects");

      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <>
      {/* FLOATING BACK */}

      <motion.button
        onClick={handleBack}
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        whileHover={{
          x: 5,
        }}
        className="
        fixed

        top-25


        left-5

        sm:left-8

        lg:left-[max(2rem,calc((100vw-1152px)/2))]


        z-50


        flex

        items-center

        gap-2


        px-4

        py-2


        rounded-full


        bg-white/40

        dark:bg-white/[0.08]


        backdrop-blur-xl


        border

        border-black/10

        dark:border-white/10


        shadow-lg


        text-sm

        font-semibold


        text-slate-700

        dark:text-slate-200


        hover:text-emerald-500


        transition-all


        duration-300
        "
      >
        ← Back
      </motion.button>

      {/* BACK TO TOP */}

      {showTop && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,

              behavior: "smooth",
            });
          }}
          className="
            fixed


            bottom-8


            right-8


            z-50


            w-14


            h-14


            rounded-full


            flex


            items-center


            justify-center


            bg-gradient-to-br

            from-emerald-500

            to-green-600


            text-white


            shadow-xl


            shadow-emerald-500/30


            hover:scale-110


            transition
            "
        >
          <FaArrowUp size={18} />
        </motion.button>
      )}
    </>
  );
}
