import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage - only use if explicitly set to "dark"
    const savedTheme = localStorage.getItem("theme");
    // Default to light mode if nothing saved or if saved value is not "dark"
    const initialTheme = savedTheme === "dark" ? "dark" : "light";
    
    // Immediately ensure HTML class matches on mount
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    if (initialTheme === "dark") {
      root.classList.add("dark");
    }
    
    return initialTheme;
  });

  useEffect(() => {
    // Update document class - only add "dark" if theme is dark
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    
    // Only add "dark" class when explicitly in dark mode
    // No class = light mode (Tailwind's dark mode works this way)
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      // Explicitly ensure dark is removed for light mode
      root.classList.remove("dark");
    }
    
    // Save preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

