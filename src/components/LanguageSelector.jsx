import { FaGlobe } from "react-icons/fa";
import { useApp } from "../context/AppContext";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useApp();
  const langDisplay = language === "en" ? "EN" : language === "ar" ? "AR" : "FR";

  return (
    <div className="language-selector dropdown">
      <button
        id="language-switch"
        type="button"
        aria-label="Change language"
        className="dropdown-toggle"
      >
        <FaGlobe /> <span className="lang-display">{langDisplay}</span>
      </button>
      <div className="dropdown-menu">
        {languages.map((lang) => (
          <a
            key={lang.code}
            href="#"
            className="dropdown-item"
            onClick={(e) => {
              e.preventDefault();
              setLanguage(lang.code);
            }}
          >
            {lang.label}
          </a>
        ))}
      </div>
    </div>
  );
}
