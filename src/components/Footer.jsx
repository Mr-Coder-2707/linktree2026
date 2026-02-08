import { useState } from "react";
import { FaHeart, FaPalette, FaShareAlt, FaCode, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useApp } from "../context/AppContext";
import Customizer from "./Customizer";
import ShareModal from "./ShareModal";
import DeveloperInfo from "./DeveloperInfo";

export default function Footer() {
  const { t } = useApp();
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showDevInfo, setShowDevInfo] = useState(false);

  return (
    <>
      <footer>
        <p>
          © {new Date().getFullYear()} — Mahmoud Elkhwass <FaHeart className="heart-icon" />
        </p>

        <button
          type="button"
          className="btn small-button dev-toggle-btn"
          onClick={() => setShowDevInfo((v) => !v)}
        >
          <FaCode /> <span>{t("aboutDeveloper")}</span>
          {showDevInfo ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        <div className={`dev-info-collapse ${showDevInfo ? "open" : ""}`}>
          <DeveloperInfo />
        </div>

        <div className="customize-section">
          <button
            type="button"
            className="btn small-button"
            onClick={() => setShowCustomizer((v) => !v)}
          >
            <FaPalette /> <span>{t("customize")}</span>
          </button>
          <button
            type="button"
            className="btn small-button"
            onClick={() => setShowShare(true)}
            style={{ marginInlineStart: "8px" }}
          >
            <FaShareAlt /> <span>{t("share")}</span>
          </button>
        </div>
      </footer>
      <Customizer
        active={showCustomizer}
        onClose={() => setShowCustomizer(false)}
      />
      <ShareModal active={showShare} onClose={() => setShowShare(false)} />
    </>
  );
}
