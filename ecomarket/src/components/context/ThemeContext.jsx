import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = {
    darkMode,
    toggleTheme,
    colors: {
      background: darkMode ? "#333" : "#f8f8f8", // Fondo general
      text: darkMode ? "#eee" : "#333",         // Texto general
      primary: darkMode ? "#64b5f6" : "#1976d2", // Primario para acentos (icono del tema)
      secondary: darkMode ? "#a1887f" : "#795548", // Secundario (opcional)
      accent: darkMode ? "#ffb74d" : "#f57c00",    // Acento (opcional)
      navbarLight: "#1976d2",                     // Nuevo color para la navbar en modo claro
      navbarDark: "#1565c0",                      // Nuevo color para la navbar en modo oscuro
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}