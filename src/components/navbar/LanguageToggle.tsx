import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "km" : "en");
  };

  return (
    <motion.button
      onClick={changeLanguage}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      aria-label="Change language"
      className="

      px-4

      py-2



      rounded-full



      bg-white/20


      dark:bg-white/10



      border

      border-black/10

      dark:border-white/10



      backdrop-blur-xl



      text-sm



      font-medium



      text-slate-800

      dark:text-white



      hover:bg-white/40

      dark:hover:bg-white/20



      transition-all

      duration-300

      "
    >
      {i18n.language === "en" ? "ENG" : "KM"}
    </motion.button>
  );
}
