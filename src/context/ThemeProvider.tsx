import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  dark: boolean;
  setDark: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  dark: true,
  setDark: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");

    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const root = document.documentElement;

    // smooth transition

    root.classList.add("theme-transition");

    if (dark) {
      root.classList.add("dark");

      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }

    setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 800);
  }, [dark]);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
