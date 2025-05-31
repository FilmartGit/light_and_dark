import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext("light");
const ThemeList = {
  light: "light",
  dark: "dark",
};

const useTheme = () => {
  // По умолчанию светлый цвет темы
  const [theme, setTheme] = useState(ThemeList.light);

   // При изменении темы обновляем HTML-атрибут и localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Переключение темы
  const toggleTheme = () => {
    if (theme === ThemeList.light) {
      setTheme(ThemeList.dark);
    } else {
      setTheme(ThemeList.light);
    }
  };
  return { theme, toggleTheme };
};

export default function ThemeProvider({ children }) {
  const { theme, toggleTheme } = useTheme();
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}

export { ThemeContext };
