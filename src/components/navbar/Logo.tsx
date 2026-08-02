export default function Logo() {
  return (
    <a
      href="#"
      className="
      flex
      items-center
      gap-3
      group
      "
    >
      {/* LOGO ICON */}

      <div
        className="
        relative

        w-10
        h-10

        rounded-xl


        flex
        items-center
        justify-center


        bg-white/10

        dark:bg-white/5


        border

        border-black/10

        dark:border-white/10


        backdrop-blur-xl


        overflow-hidden


        shadow-[0_0_25px_rgba(16,185,129,0.25)]
        "
      >
        <div
          className="
          absolute
          inset-0


          bg-gradient-to-br

          from-emerald-400/30

          to-green-600/10


          "
        />

        <span
          className="
          relative
          z-10

          text-white

          dark:text-emerald-100


          font-black

          text-sm
          "
        >
          YK
        </span>
      </div>

      {/* TEXT */}

      <div
        className="
        leading-tight
        "
      >
        <h1
          className="
          font-black

          text-sm

          sm:text-base


          text-slate-900

          dark:text-white


          "
        >
          York Kimhong
        </h1>

        <p
          className="
          text-[11px]

          sm:text-xs


          text-slate-500

          dark:text-slate-400


          tracking-wide
          "
        >
          Frontend Developer
        </p>
      </div>
    </a>
  );
}
