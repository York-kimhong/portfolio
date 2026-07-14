import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eqmltlp",

        "template_wh8fh1g",

        form.current,

        "GajH1ydcZF4iCwWne",
      )

      .then(() => {
        alert("Message sent successfully!");
      })

      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="
      glass
      rounded-[32px]
      p-8
      space-y-5
      "
    >
      <h3
        className="
        text-2xl
        font-bold
        mb-5
        "
      >
        Send a Message
      </h3>

      <input
        name="user_name"
        type="text"
        placeholder="Your Name"
        className="
        w-full
        px-5
        py-3
        rounded-xl
        bg-white/5
        border
        border-white/10
        outline-none
        focus:border-cyan-400
        "
      />

      <input
        name="user_email"
        type="email"
        placeholder="Your Email"
        className="
        w-full
        px-5
        py-3
        rounded-xl
        bg-white/5
        border
        border-white/10
        outline-none
        focus:border-cyan-400
        "
      />

      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        className="
        w-full
        px-5
        py-3
        rounded-xl
        bg-white/5
        border
        border-white/10
        outline-none
        focus:border-cyan-400
        resize-none
        "
      />

      <button
        type="submit"
        className="
        flex
        items-center
        justify-center
        gap-3
        w-full
        py-3
        rounded-xl
        bg-gradient-to-r
        from-cyan-500
        to-purple-500
        font-semibold
        hover:scale-[1.02]
        transition
        "
      >
        <FaPaperPlane />
        Send Message
      </button>
    </form>
  );
}
