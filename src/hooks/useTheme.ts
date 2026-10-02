import { useEffect, useLayoutEffect, useState } from "react";

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const localCurrentTheme = localStorage.getItem("portfolio-theme");
    if (localCurrentTheme === "light" || localCurrentTheme === "dark") {
      return localCurrentTheme === "dark";
    }
    const explicitTheme = document.documentElement.dataset.theme;

    if (explicitTheme === "dark") return true;
    if (explicitTheme === "light") return false;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  useEffect(() => {
    const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      const explicitTheme = document.documentElement.dataset.theme;

      if (explicitTheme !== "light" && explicitTheme !== "dark") {
        setIsDarkMode(event.matches);
      }
    };

    systemThemeQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      systemThemeQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    setIsDarkMode(nextTheme === "dark");
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  return { isDarkMode, toggleTheme };
}
