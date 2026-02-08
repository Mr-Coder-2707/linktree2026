import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useApp } from "../context/AppContext";

const defaultScheme = {
  primaryColor: "#2563EB",
  secondaryColor: "#4338CA",
  accentColor: "#10B981",
  light: {
    bgGradient1: "#E8F5E9",
    bgGradient2: "#C8E6C9",
    cardBg: "rgba(255, 255, 255, 0.95)",
    text: "#333333",
    subtext: "#666666",
    buttonBg: "#E8F5E9",
    buttonHover: "#C8E6C9",
    shadow: "rgba(0, 0, 0, 0.1)",
  },
  dark: {
    bgGradient1: "#2C3E50",
    bgGradient2: "#1A2530",
    cardBg: "rgba(34, 40, 49, 0.95)",
    text: "#F5F5F5",
    subtext: "#CCCCCC",
    buttonBg: "#34495E",
    buttonHover: "#2C3E50",
    shadow: "rgba(0, 0, 0, 0.3)",
  },
};

const colorSchemes = [
  {
    name: "Ocean Blue",
    nameKey: "schemeOceanBlue",
    emoji: "🌊",
    primaryColor: "#2563EB",
    secondaryColor: "#4338CA",
    accentColor: "#10B981",
    light: {
      bgGradient1: "#E8F5E9",
      bgGradient2: "#C8E6C9",
      cardBg: "rgba(255, 255, 255, 0.95)",
      text: "#333333",
      subtext: "#666666",
      buttonBg: "#E8F5E9",
      buttonHover: "#C8E6C9",
      shadow: "rgba(0, 0, 0, 0.1)",
    },
    dark: {
      bgGradient1: "#2C3E50",
      bgGradient2: "#1A2530",
      cardBg: "rgba(34, 40, 49, 0.95)",
      text: "#F5F5F5",
      subtext: "#CCCCCC",
      buttonBg: "#34495E",
      buttonHover: "#2C3E50",
      shadow: "rgba(0, 0, 0, 0.3)",
    },
  },
  {
    name: "Purple Dream",
    nameKey: "schemePurpleDream",
    emoji: "🔮",
    primaryColor: "#9B59B6",
    secondaryColor: "#8E44AD",
    accentColor: "#F1C40F",
    light: {
      bgGradient1: "#F3E5F5",
      bgGradient2: "#E1BEE7",
      cardBg: "rgba(255, 255, 255, 0.95)",
      text: "#2C2C2C",
      subtext: "#6B6B6B",
      buttonBg: "#F3E5F5",
      buttonHover: "#E1BEE7",
      shadow: "rgba(100, 50, 130, 0.1)",
    },
    dark: {
      bgGradient1: "#1A1025",
      bgGradient2: "#120B1A",
      cardBg: "rgba(30, 20, 40, 0.95)",
      text: "#F0E6FF",
      subtext: "#C4A6D9",
      buttonBg: "#2D1B4E",
      buttonHover: "#3D2566",
      shadow: "rgba(0, 0, 0, 0.35)",
    },
  },
  {
    name: "Sunset Fire",
    nameKey: "schemeSunsetFire",
    emoji: "🌅",
    primaryColor: "#E67E22",
    secondaryColor: "#D35400",
    accentColor: "#2ECC71",
    light: {
      bgGradient1: "#FFF3E0",
      bgGradient2: "#FFE0B2",
      cardBg: "rgba(255, 255, 255, 0.95)",
      text: "#3E2723",
      subtext: "#795548",
      buttonBg: "#FFF3E0",
      buttonHover: "#FFE0B2",
      shadow: "rgba(180, 90, 20, 0.1)",
    },
    dark: {
      bgGradient1: "#2A1A0A",
      bgGradient2: "#1A1008",
      cardBg: "rgba(40, 28, 15, 0.95)",
      text: "#FFE8CC",
      subtext: "#D4A574",
      buttonBg: "#3D2814",
      buttonHover: "#4E331A",
      shadow: "rgba(0, 0, 0, 0.35)",
    },
  },
  {
    name: "Mint Fresh",
    nameKey: "schemeMintFresh",
    emoji: "🍃",
    primaryColor: "#1ABC9C",
    secondaryColor: "#16A085",
    accentColor: "#E74C3C",
    light: {
      bgGradient1: "#E0F2F1",
      bgGradient2: "#B2DFDB",
      cardBg: "rgba(255, 255, 255, 0.95)",
      text: "#1B2631",
      subtext: "#566573",
      buttonBg: "#E0F2F1",
      buttonHover: "#B2DFDB",
      shadow: "rgba(26, 188, 156, 0.1)",
    },
    dark: {
      bgGradient1: "#0A2922",
      bgGradient2: "#061A15",
      cardBg: "rgba(14, 36, 30, 0.95)",
      text: "#E0FFF8",
      subtext: "#80CBBF",
      buttonBg: "#143D33",
      buttonHover: "#1A5245",
      shadow: "rgba(0, 0, 0, 0.35)",
    },
  },
  {
    name: "Ruby Red",
    nameKey: "schemeRubyRed",
    emoji: "💎",
    primaryColor: "#E74C3C",
    secondaryColor: "#C0392B",
    accentColor: "#3498DB",
    light: {
      bgGradient1: "#FFEBEE",
      bgGradient2: "#FFCDD2",
      cardBg: "rgba(255, 255, 255, 0.95)",
      text: "#2C1A1A",
      subtext: "#7A5252",
      buttonBg: "#FFEBEE",
      buttonHover: "#FFCDD2",
      shadow: "rgba(200, 50, 50, 0.1)",
    },
    dark: {
      bgGradient1: "#2A0F0F",
      bgGradient2: "#1A0808",
      cardBg: "rgba(40, 18, 18, 0.95)",
      text: "#FFD5D5",
      subtext: "#D48A8A",
      buttonBg: "#3D1515",
      buttonHover: "#4E1C1C",
      shadow: "rgba(0, 0, 0, 0.35)",
    },
  },
  {
    name: "Rose Gold",
    nameKey: "schemeRoseGold",
    emoji: "🌸",
    primaryColor: "#E8607C",
    secondaryColor: "#D4456A",
    accentColor: "#F5C77E",
    light: {
      bgGradient1: "#FFF0F3",
      bgGradient2: "#FFE0E6",
      cardBg: "rgba(255, 255, 255, 0.95)",
      text: "#3C2026",
      subtext: "#7A545E",
      buttonBg: "#FFF0F3",
      buttonHover: "#FFE0E6",
      shadow: "rgba(200, 80, 100, 0.1)",
    },
    dark: {
      bgGradient1: "#2A141A",
      bgGradient2: "#1A0C10",
      cardBg: "rgba(40, 22, 28, 0.95)",
      text: "#FFE0E8",
      subtext: "#D4909E",
      buttonBg: "#3D1D26",
      buttonHover: "#4E2530",
      shadow: "rgba(0, 0, 0, 0.35)",
    },
  },
  {
    name: "Cyber Neon",
    nameKey: "schemeCyberNeon",
    emoji: "⚡",
    primaryColor: "#00D4FF",
    secondaryColor: "#7B2DFF",
    accentColor: "#FF2DCA",
    light: {
      bgGradient1: "#E8F9FF",
      bgGradient2: "#D0F0FF",
      cardBg: "rgba(255, 255, 255, 0.95)",
      text: "#1A1A2E",
      subtext: "#4A4A6A",
      buttonBg: "#E8F4FF",
      buttonHover: "#D0E8FF",
      shadow: "rgba(0, 150, 200, 0.1)",
    },
    dark: {
      bgGradient1: "#0A0A1F",
      bgGradient2: "#050510",
      cardBg: "rgba(12, 12, 35, 0.95)",
      text: "#E0F7FF",
      subtext: "#80B0CC",
      buttonBg: "#151535",
      buttonHover: "#1F1F4A",
      shadow: "rgba(0, 100, 200, 0.2)",
    },
  },
  {
    name: "Forest Earth",
    nameKey: "schemeForestEarth",
    emoji: "🌲",
    primaryColor: "#5D7B3A",
    secondaryColor: "#4A6B2F",
    accentColor: "#D4A955",
    light: {
      bgGradient1: "#F1F8E9",
      bgGradient2: "#DCEDC8",
      cardBg: "rgba(255, 255, 255, 0.95)",
      text: "#2E3B1F",
      subtext: "#5C6C4A",
      buttonBg: "#F1F8E9",
      buttonHover: "#DCEDC8",
      shadow: "rgba(80, 120, 50, 0.1)",
    },
    dark: {
      bgGradient1: "#1A2212",
      bgGradient2: "#0F1508",
      cardBg: "rgba(25, 32, 18, 0.95)",
      text: "#E8F0D8",
      subtext: "#A8BF8A",
      buttonBg: "#2A3820",
      buttonHover: "#354A28",
      shadow: "rgba(0, 0, 0, 0.35)",
    },
  },
];

const TABS = { PRESETS: "presets", LIGHT: "light", DARK: "dark", BRAND: "brand" };

function ColorRow({ label, value, onChange }) {
  return (
    <div className="color-picker" data-color-value={value.toUpperCase()}>
      <label>{label}</label>
      <input type="color" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export default function Customizer({ active, onClose }) {
  const { colorScheme, setColorScheme, darkMode, t } = useApp();
  const [tab, setTab] = useState(TABS.PRESETS);
  const [feedback, setFeedback] = useState("");
  const [activePreset, setActivePreset] = useState(0);

  // Brand colors
  const [primary, setPrimary] = useState(defaultScheme.primaryColor);
  const [secondary, setSecondary] = useState(defaultScheme.secondaryColor);
  const [accent, setAccent] = useState(defaultScheme.accentColor);

  // Light mode
  const [lightBg1, setLightBg1] = useState(defaultScheme.light.bgGradient1);
  const [lightBg2, setLightBg2] = useState(defaultScheme.light.bgGradient2);
  const [lightCard, setLightCard] = useState("#ffffff");
  const [lightText, setLightText] = useState(defaultScheme.light.text);
  const [lightSubtext, setLightSubtext] = useState(defaultScheme.light.subtext);
  const [lightBtnBg, setLightBtnBg] = useState(defaultScheme.light.buttonBg);
  const [lightBtnHover, setLightBtnHover] = useState(defaultScheme.light.buttonHover);

  // Dark mode
  const [darkBg1, setDarkBg1] = useState(defaultScheme.dark.bgGradient1);
  const [darkBg2, setDarkBg2] = useState(defaultScheme.dark.bgGradient2);
  const [darkCard, setDarkCard] = useState("#222831");
  const [darkText, setDarkText] = useState(defaultScheme.dark.text);
  const [darkSubtext, setDarkSubtext] = useState(defaultScheme.dark.subtext);
  const [darkBtnBg, setDarkBtnBg] = useState(defaultScheme.dark.buttonBg);
  const [darkBtnHover, setDarkBtnHover] = useState(defaultScheme.dark.buttonHover);

  // Sync state from saved colorScheme on mount
  useEffect(() => {
    if (colorScheme) {
      setPrimary(colorScheme.primaryColor || defaultScheme.primaryColor);
      setSecondary(colorScheme.secondaryColor || defaultScheme.secondaryColor);
      setAccent(colorScheme.accentColor || defaultScheme.accentColor);
      if (colorScheme.light) {
        setLightBg1(colorScheme.light.bgGradient1 || defaultScheme.light.bgGradient1);
        setLightBg2(colorScheme.light.bgGradient2 || defaultScheme.light.bgGradient2);
        setLightCard(colorScheme.light.cardBg?.replace("rgba(255, 255, 255, 0.95)", "#ffffff") || "#ffffff");
        setLightText(colorScheme.light.text || defaultScheme.light.text);
        setLightSubtext(colorScheme.light.subtext || defaultScheme.light.subtext);
        setLightBtnBg(colorScheme.light.buttonBg || defaultScheme.light.buttonBg);
        setLightBtnHover(colorScheme.light.buttonHover || defaultScheme.light.buttonHover);
      }
      if (colorScheme.dark) {
        setDarkBg1(colorScheme.dark.bgGradient1 || defaultScheme.dark.bgGradient1);
        setDarkBg2(colorScheme.dark.bgGradient2 || defaultScheme.dark.bgGradient2);
        setDarkCard(colorScheme.dark.cardBg?.replace("rgba(34, 40, 49, 0.95)", "#222831") || "#222831");
        setDarkText(colorScheme.dark.text || defaultScheme.dark.text);
        setDarkSubtext(colorScheme.dark.subtext || defaultScheme.dark.subtext);
        setDarkBtnBg(colorScheme.dark.buttonBg || defaultScheme.dark.buttonBg);
        setDarkBtnHover(colorScheme.dark.buttonHover || defaultScheme.dark.buttonHover);
      }
    }
  }, []);

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const applyScheme = (scheme, idx) => {
    setActivePreset(idx);
    setColorScheme(scheme);
    setPrimary(scheme.primaryColor);
    setSecondary(scheme.secondaryColor);
    setAccent(scheme.accentColor);
    setLightBg1(scheme.light.bgGradient1);
    setLightBg2(scheme.light.bgGradient2);
    setLightCard(scheme.light.cardBg.includes("rgba") ? "#ffffff" : scheme.light.cardBg);
    setLightText(scheme.light.text);
    setLightSubtext(scheme.light.subtext);
    setLightBtnBg(scheme.light.buttonBg);
    setLightBtnHover(scheme.light.buttonHover);
    setDarkBg1(scheme.dark.bgGradient1);
    setDarkBg2(scheme.dark.bgGradient2);
    setDarkCard(scheme.dark.cardBg.includes("rgba") ? "#222831" : scheme.dark.cardBg);
    setDarkText(scheme.dark.text);
    setDarkSubtext(scheme.dark.subtext);
    setDarkBtnBg(scheme.dark.buttonBg);
    setDarkBtnHover(scheme.dark.buttonHover);
    showFeedback(t("themeApplied"));
  };

  const showFeedback = (msg) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(""), 2000);
  };

  const buildFullScheme = () => ({
    primaryColor: primary,
    secondaryColor: secondary,
    accentColor: accent,
    light: {
      bgGradient1: lightBg1,
      bgGradient2: lightBg2,
      cardBg: hexToRgba(lightCard, 0.95),
      text: lightText,
      subtext: lightSubtext,
      buttonBg: lightBtnBg,
      buttonHover: lightBtnHover,
      shadow: "rgba(0, 0, 0, 0.1)",
    },
    dark: {
      bgGradient1: darkBg1,
      bgGradient2: darkBg2,
      cardBg: hexToRgba(darkCard, 0.95),
      text: darkText,
      subtext: darkSubtext,
      buttonBg: darkBtnBg,
      buttonHover: darkBtnHover,
      shadow: "rgba(0, 0, 0, 0.3)",
    },
  });

  const applyCustom = () => {
    setColorScheme(buildFullScheme());
    showFeedback(t("customColorsApplied"));
  };

  const resetToDefault = () => {
    const def = colorSchemes[0];
    applyScheme(def, 0);
    showFeedback(t("resetComplete"));
  };

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return createPortal(
    <>
      {active && (
        <div className="customizer-overlay" onClick={handleClose}>
          <div className="customizer-panel active" onClick={(e) => e.stopPropagation()}>
            <div className="customizer-header">
              <h3>🎨 {t("customizeTheme")}</h3>
              <button type="button" className="close-customizer" onClick={handleClose}>
                ×
              </button>
            </div>

            {/* Tabs */}
            <div className="customizer-tabs">
              <button
                type="button"
                className={`tab-btn ${tab === TABS.PRESETS ? "active" : ""}`}
                onClick={() => setTab(TABS.PRESETS)}
              >
                {t("presets")}
              </button>
              <button
                type="button"
                className={`tab-btn ${tab === TABS.BRAND ? "active" : ""}`}
                onClick={() => setTab(TABS.BRAND)}
              >
                {t("brand")}
              </button>
              <button
                type="button"
                className={`tab-btn ${tab === TABS.LIGHT ? "active" : ""}`}
                onClick={() => setTab(TABS.LIGHT)}
              >
                ☀️ {t("lightTab")}
              </button>
              <button
                type="button"
                className={`tab-btn ${tab === TABS.DARK ? "active" : ""}`}
                onClick={() => setTab(TABS.DARK)}
              >
                🌙 {t("darkTab")}
              </button>
            </div>

            <div className="customizer-body">
              {/* === PRESETS TAB === */}
              {tab === TABS.PRESETS && (
                <div className="tab-content">
                  <div className="color-schemes">
                    {colorSchemes.map((scheme, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`scheme-btn ${activePreset === i ? "scheme-active" : ""}`}
                        onClick={() => applyScheme(scheme, i)}
                      >
                        <div className="scheme-colors-row">
                          <span className="scheme-color" style={{ backgroundColor: scheme.primaryColor }} />
                          <span className="scheme-color" style={{ backgroundColor: scheme.secondaryColor }} />
                          <span className="scheme-color" style={{ backgroundColor: scheme.accentColor }} />
                        </div>
                        <span className="scheme-name">
                          {scheme.emoji} {t(scheme.nameKey)}
                        </span>
                        <div className="scheme-mode-preview">
                          <span
                            className="mode-dot"
                            style={{ background: scheme.light.bgGradient1 }}
                            title="Light"
                          />
                          <span
                            className="mode-dot"
                            style={{ background: scheme.dark.bgGradient1 }}
                            title="Dark"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* === BRAND TAB === */}
              {tab === TABS.BRAND && (
                <div className="tab-content">
                  <p className="tab-description">{t("brandDescription")}</p>
                  <ColorRow label={t("primaryColor")} value={primary} onChange={setPrimary} />
                  <ColorRow label={t("secondaryColor")} value={secondary} onChange={setSecondary} />
                  <ColorRow label={t("accentColor")} value={accent} onChange={setAccent} />
                  <button type="button" className="apply-colors" onClick={applyCustom}>
                    {feedback || t("applyBrandColors")}
                  </button>
                </div>
              )}

              {/* === LIGHT MODE TAB === */}
              {tab === TABS.LIGHT && (
                <div className="tab-content">
                  <p className="tab-description">
                    {t("lightModeDescription")}
                    {!darkMode && <span className="active-mode-badge">{t("activeLabel")}</span>}
                  </p>
                  <div className="color-group">
                    <h5 className="color-group-title">{t("background")}</h5>
                    <ColorRow label={t("gradientStart")} value={lightBg1} onChange={setLightBg1} />
                    <ColorRow label={t("gradientEnd")} value={lightBg2} onChange={setLightBg2} />
                  </div>
                  <div className="color-group">
                    <h5 className="color-group-title">{t("cardSurface")}</h5>
                    <ColorRow label={t("cardBackground")} value={lightCard} onChange={setLightCard} />
                    <ColorRow label={t("buttonBackground")} value={lightBtnBg} onChange={setLightBtnBg} />
                    <ColorRow label={t("buttonHover")} value={lightBtnHover} onChange={setLightBtnHover} />
                  </div>
                  <div className="color-group">
                    <h5 className="color-group-title">{t("typography")}</h5>
                    <ColorRow label={t("textColor")} value={lightText} onChange={setLightText} />
                    <ColorRow label={t("subtextColor")} value={lightSubtext} onChange={setLightSubtext} />
                  </div>
                  <button type="button" className="apply-colors" onClick={applyCustom}>
                    {feedback || t("applyLightMode")}
                  </button>
                </div>
              )}

              {/* === DARK MODE TAB === */}
              {tab === TABS.DARK && (
                <div className="tab-content">
                  <p className="tab-description">
                    {t("darkModeDescription")}
                    {darkMode && <span className="active-mode-badge">{t("activeLabel")}</span>}
                  </p>
                  <div className="color-group">
                    <h5 className="color-group-title">{t("background")}</h5>
                    <ColorRow label={t("gradientStart")} value={darkBg1} onChange={setDarkBg1} />
                    <ColorRow label={t("gradientEnd")} value={darkBg2} onChange={setDarkBg2} />
                  </div>
                  <div className="color-group">
                    <h5 className="color-group-title">{t("cardSurface")}</h5>
                    <ColorRow label={t("cardBackground")} value={darkCard} onChange={setDarkCard} />
                    <ColorRow label={t("buttonBackground")} value={darkBtnBg} onChange={setDarkBtnBg} />
                    <ColorRow label={t("buttonHover")} value={darkBtnHover} onChange={setDarkBtnHover} />
                  </div>
                  <div className="color-group">
                    <h5 className="color-group-title">{t("typography")}</h5>
                    <ColorRow label={t("textColor")} value={darkText} onChange={setDarkText} />
                    <ColorRow label={t("subtextColor")} value={darkSubtext} onChange={setDarkSubtext} />
                  </div>
                  <button type="button" className="apply-colors" onClick={applyCustom}>
                    {feedback || t("applyDarkMode")}
                  </button>
                </div>
              )}

              {/* Reset */}
              <button type="button" className="reset-btn" onClick={resetToDefault}>
                🔄 {t("resetToDefault")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}
