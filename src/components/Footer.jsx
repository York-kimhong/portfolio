export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      py-10
      "
    >
      <div
        className="
        section-container
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-4
        "
      >
        <h3 className="font-bold text-xl">
          York
          <span className="text-cyan-400">
            {" "}Kimhong
          </span>
        </h3>

        <p className="text-slate-500 text-sm">
          © 2026 York Kimhong.
          All Rights Reserved.
        </p>

        <p className="text-slate-500 text-sm">
          Designed & Developed with React
        </p>
      </div>
    </footer>
  );
}