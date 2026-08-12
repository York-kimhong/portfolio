import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";
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
    const saved = sessionStorage.getItem("projectReturnPosition");

    let scrollY = 0;

    if (saved) {
      try {
        const data = JSON.parse(saved);
        scrollY = Number(data.scrollY) || 0;
      } catch {
        scrollY = Number(saved) || 0;
      }
    }

    navigate("/", {
      state: {
        restoreScrollY: scrollY,
      },
    });
  };

  return (
    <>
      {/* BACK TO PROJECTS */}

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
          x: 4,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
        fixed
        top-5
        left-5
        sm:left-8
        z-50

        flex
        items-center
        gap-2

        rounded-full

        px-4
        py-2.5

        glass-card

        text-sm
        font-semibold

        text-slate-700
        dark:text-slate-200

        hover:text-emerald-500

        transition-all
        duration-300
      "
      >
        <FaArrowLeft size={12} />
        Back
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
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            fixed
            bottom-8
            right-8
            z-50

            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-full

            bg-gradient-to-br
            from-emerald-500
            to-green-600

            text-white

            shadow-xl
            shadow-emerald-500/30

            transition
          "
          aria-label="Back to top"
        >
          <FaArrowUp size={18} />
        </motion.button>
      )}
    </>
  );
}
