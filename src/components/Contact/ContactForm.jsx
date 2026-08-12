import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { FaPaperPlane, FaUser, FaEnvelope } from "react-icons/fa";

const smoothEase = [0.22, 1, 0.36, 1];

export default function ContactForm() {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_eqmltlp",
        "template_wh8fh1g",
        form.current,
        "GajH1ydcZF4iCwWne",
      )
      .then(() => {
        setStatus("Message sent successfully ✓");

        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);

        setStatus("Failed to send message");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const isSuccess = status.includes("success");

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.25,
        ease: smoothEase,
      }}
      className="
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-black/10
        dark:border-white/10

        bg-white/50
        dark:bg-white/[0.06]

        p-6
        sm:p-8

        backdrop-blur-2xl

        shadow-[0_20px_70px_rgba(16,185,129,0.12)]
      "
    >
      {/* ================================
          AMBIENT LIGHT
      ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20

          h-60
          w-60

          rounded-full

          bg-emerald-400/15

          blur-3xl

          dark:bg-emerald-400/10
        "
      />

      {/* ================================
          CONTENT
      ================================= */}

      <div className="relative z-10">
        {/* TITLE */}

        <h3
          className="
            mb-7

            text-2xl
            font-black

            text-slate-900
            dark:text-white
          "
        >
          Send a Message
        </h3>

        {/* ================================
            NAME
        ================================= */}

        <div className="relative mb-5">
          <FaUser
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              -translate-y-1/2

              text-emerald-500
            "
          />

          <input
            name="user_name"
            type="text"
            required
            placeholder="Your Name"
            autoComplete="name"
            className="
              peer

              w-full

              rounded-xl

              border
              border-black/10
              dark:border-white/10

              bg-black/5
              dark:bg-white/5

              py-3.5
              pl-12
              pr-5

              text-slate-900
              dark:text-white

              outline-none

              placeholder:text-slate-400
              dark:placeholder:text-slate-500

              transition-[border-color,box-shadow]
              duration-200

              focus:border-emerald-500

              focus:ring-4
              focus:ring-emerald-500/10
            "
          />
        </div>

        {/* ================================
            EMAIL
        ================================= */}

        <div className="relative mb-5">
          <FaEnvelope
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              -translate-y-1/2

              text-emerald-500
            "
          />

          <input
            name="user_email"
            type="email"
            required
            placeholder="Your Email"
            autoComplete="email"
            className="
              w-full

              rounded-xl

              border
              border-black/10
              dark:border-white/10

              bg-black/5
              dark:bg-white/5

              py-3.5
              pl-12
              pr-5

              text-slate-900
              dark:text-white

              outline-none

              placeholder:text-slate-400
              dark:placeholder:text-slate-500

              transition-[border-color,box-shadow]
              duration-200

              focus:border-emerald-500

              focus:ring-4
              focus:ring-emerald-500/10
            "
          />
        </div>

        {/* ================================
            MESSAGE
        ================================= */}

        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your Message"
          className="
            w-full

            resize-none

            rounded-xl

            border
            border-black/10
            dark:border-white/10

            bg-black/5
            dark:bg-white/5

            px-5
            py-4

            text-slate-900
            dark:text-white

            outline-none

            placeholder:text-slate-400
            dark:placeholder:text-slate-500

            transition-[border-color,box-shadow]
            duration-200

            focus:border-emerald-500

            focus:ring-4
            focus:ring-emerald-500/10
          "
        />

        {/* ================================
            STATUS
        ================================= */}

        <AnimatePresence mode="wait">
          {status && (
            <motion.p
              key={status}
              initial={{
                opacity: 0,
                y: 6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -6,
              }}
              transition={{
                duration: 0.2,
                ease: smoothEase,
              }}
              className={`
                mt-4
                text-sm
                font-medium
                ${isSuccess ? "text-emerald-500" : "text-red-500"}
              `}
            >
              {status}
            </motion.p>
          )}
        </AnimatePresence>

        {/* ================================
            BUTTON
        ================================= */}

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={!loading ? { scale: 1.015 } : {}}
          whileTap={!loading ? { scale: 0.985 } : {}}
          transition={{
            duration: 0.2,
            ease: smoothEase,
          }}
          className="
            group

            relative

            mt-6

            flex
            w-full
            items-center
            justify-center
            gap-3

            overflow-hidden

            rounded-xl

            bg-gradient-to-r
            from-emerald-600
            to-green-500

            py-3.5

            font-bold
            text-white

            shadow-[0_15px_40px_rgba(16,185,129,0.30)]

            transition-[box-shadow,opacity]
            duration-200

            hover:shadow-[0_18px_45px_rgba(16,185,129,0.40)]

            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {/* HOVER LIGHT */}

          <span
            className="
              pointer-events-none
              absolute
              inset-0

              translate-y-full

              bg-gradient-to-t
              from-white/20
              to-transparent

              transition-transform
              duration-300

              group-hover:translate-y-0
            "
          />

          {/* BUTTON CONTENT */}

          <span className="relative flex items-center gap-3">
            {loading ? (
              <>
                <span
                  className="
                    h-4
                    w-4

                    animate-spin

                    rounded-full

                    border-2
                    border-white/30
                    border-t-white
                  "
                />
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </span>
        </motion.button>
      </div>
    </motion.form>
  );
}
