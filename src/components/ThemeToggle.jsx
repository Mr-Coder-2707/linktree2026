import { FaMoon, FaSun } from "react-icons/fa";
import { useApp } from "../context/AppContext";
import { useState } from "react";

export default function ThemeToggle() {
  const { toggleTheme } = useApp();
  const [rotating, setRotating] = useState(false);

  const handleClick = () => {
    setRotating(true);
    toggleTheme();
    setTimeout(() => setRotating(false), 500);
  };

  return (
    <div className="theme-toggle">
      <button
        id="theme-switch"
        type="button"
        aria-label="Toggle dark/light mode"
        onClick={handleClick}
        className={rotating ? "rotate-animation" : ""}
      >
        <FaMoon className="icon-moon" />
        <FaSun className="icon-sun" />
      </button>
    </div>
  );
}
