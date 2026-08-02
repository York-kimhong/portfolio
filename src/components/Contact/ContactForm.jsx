import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { FaPaperPlane, FaUser, FaEnvelope } from "react-icons/fa";

export default function ContactForm() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

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

        form.current.reset();
      })

      .catch((error) => {
        console.log(error);

        setStatus("Failed to send message");
      })

      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="
relative
overflow-hidden

rounded-[32px]

p-6
sm:p-8


bg-white/50

dark:bg-white/[0.06]


border

border-black/10

dark:border-white/10


backdrop-blur-2xl


shadow-[0_20px_70px_rgba(16,185,129,0.15)]

"
    >
      {/* ambient */}

      <div
        className="
absolute

-top-20

-right-20

w-60

h-60

rounded-full

bg-emerald-400/20

blur-3xl

"
      />

      <div className="relative z-10">
        <h3
          className="
text-2xl

font-black

text-slate-900

dark:text-white

mb-7
"
        >
          Send a Message
        </h3>

        {/* NAME */}

        <div className="relative mb-5">
          <FaUser
            className="
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
            className="
peer

w-full

pl-12

pr-5

py-3.5

rounded-xl


bg-black/5

dark:bg-white/5


border

border-black/10

dark:border-white/10


text-slate-900

dark:text-white


outline-none


focus:border-emerald-500


focus:ring-4

focus:ring-emerald-500/10


transition-all

"
          />
        </div>

        {/* EMAIL */}

        <div className="relative mb-5">
          <FaEnvelope
            className="
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
            className="
w-full

pl-12

pr-5

py-3.5


rounded-xl


bg-black/5

dark:bg-white/5


border

border-black/10

dark:border-white/10


text-slate-900

dark:text-white


outline-none


focus:border-emerald-500


focus:ring-4

focus:ring-emerald-500/10


transition-all

"
          />
        </div>

        {/* MESSAGE */}

        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your Message"
          className="
w-full


px-5

py-4


rounded-xl


bg-black/5

dark:bg-white/5


border

border-black/10

dark:border-white/10


text-slate-900

dark:text-white


outline-none


resize-none


focus:border-emerald-500


focus:ring-4

focus:ring-emerald-500/10


transition-all

"
        />

        {/* STATUS */}

        {status && (
          <p
            className={`

text-sm

mt-4

font-medium


${status.includes("success") ? "text-emerald-500" : "text-red-500"}

`}
          >
            {status}
          </p>
        )}

        {/* BUTTON */}

        <button
          disabled={loading}
          className="

group

relative

overflow-hidden


mt-6


flex

items-center

justify-center


gap-3


w-full


py-3.5


rounded-xl



bg-gradient-to-r


from-emerald-600


to-green-500



text-white


font-bold



shadow-[0_15px_40px_rgba(16,185,129,0.35)]



hover:scale-[1.02]



active:scale-95



transition-all



disabled:opacity-60

"
        >
          {/* hover flood */}

          <span
            className="
absolute

inset-0

bg-gradient-to-t

from-white/20

to-transparent

translate-y-full

group-hover:translate-y-0

transition-transform

duration-500

"
          />

          <span className="relative flex items-center gap-3">
            {loading ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </span>
        </button>
      </div>
    </form>
  );
}
