import { createContext, useContext, useState, useEffect } from "react";
import translations from "../data/translations";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches || false;
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  const [colorScheme, setColorScheme] = useState(() => {
    const saved = localStorage.getItem("color-scheme");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  const [analytics, setAnalytics] = useState(() => {
    const saved = localStorage.getItem("analytics");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return { pageViews: 0, linkClicks: {} };
      }
    }
    return { pageViews: 0, linkClicks: {} };
  });

  // Track page views
  useEffect(() => {
    setAnalytics((prev) => {
      const updated = { ...prev, pageViews: prev.pageViews + 1 };
      localStorage.setItem("analytics", JSON.stringify(updated));
      return updated;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  useEffect(() => {
    if (colorScheme) {
      const root = document.documentElement;
      root.style.setProperty("--primary-color", colorScheme.primaryColor);
      root.style.setProperty("--secondary-color", colorScheme.secondaryColor);
      root.style.setProperty("--accent-color", colorScheme.accentColor);

      // Light mode variables
      if (colorScheme.light) {
        root.style.setProperty("--light-bg-gradient-1", colorScheme.light.bgGradient1);
        root.style.setProperty("--light-bg-gradient-2", colorScheme.light.bgGradient2);
        root.style.setProperty("--light-card-bg", colorScheme.light.cardBg);
        root.style.setProperty("--light-text", colorScheme.light.text);
        root.style.setProperty("--light-subtext", colorScheme.light.subtext);
        root.style.setProperty("--light-button-bg", colorScheme.light.buttonBg);
        root.style.setProperty("--light-button-hover", colorScheme.light.buttonHover);
        if (colorScheme.light.shadow) {
          root.style.setProperty("--light-shadow", colorScheme.light.shadow);
        }
      }

      // Dark mode variables
      if (colorScheme.dark) {
        root.style.setProperty("--dark-bg-gradient-1", colorScheme.dark.bgGradient1);
        root.style.setProperty("--dark-bg-gradient-2", colorScheme.dark.bgGradient2);
        root.style.setProperty("--dark-card-bg", colorScheme.dark.cardBg);
        root.style.setProperty("--dark-text", colorScheme.dark.text);
        root.style.setProperty("--dark-subtext", colorScheme.dark.subtext);
        root.style.setProperty("--dark-button-bg", colorScheme.dark.buttonBg);
        root.style.setProperty("--dark-button-hover", colorScheme.dark.buttonHover);
        if (colorScheme.dark.shadow) {
          root.style.setProperty("--dark-shadow", colorScheme.dark.shadow);
        }
      }

      localStorage.setItem("color-scheme", JSON.stringify(colorScheme));
    }
  }, [colorScheme]);

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const trackLinkClick = (linkId, linkName) => {
    console.log("Tracking click:", linkId, linkName); // Debug
    setAnalytics((prev) => {
      const updatedClicks = {
        ...prev.linkClicks,
        [linkId]: {
          name: linkName,
          count: (prev.linkClicks?.[linkId]?.count || 0) + 1,
        },
      };
      const updated = {
        ...prev,
        linkClicks: updatedClicks,
      };
      console.log("Updated analytics:", updated); // Debug
      localStorage.setItem("analytics", JSON.stringify(updated));
      return updated;
    });
  };

  const getAnalytics = () => analytics;

  const resetAnalytics = () => {
    const resetData = { pageViews: 0, linkClicks: {} };
    setAnalytics(resetData);
    localStorage.setItem("analytics", JSON.stringify(resetData));
  };

  const value = {
    darkMode,
    toggleTheme,
    language,
    setLanguage,
    t,
    colorScheme,
    setColorScheme,
    analytics,
    trackLinkClick,
    getAnalytics,
    resetAnalytics,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  return useContext(AppContext);
}
