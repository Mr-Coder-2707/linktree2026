import { useState, useEffect } from "react";
import { FaEnvelope, FaCalendar } from "react-icons/fa";
import { useApp } from "../context/AppContext";

export default function Contact() {
  const { t } = useApp();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowPopup(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="contact-section">
      <a
        href="#"
        className="btn contact-button"
        onClick={(e) => {
          e.preventDefault();
          setShowPopup(true);
        }}
      >
        <FaEnvelope /> <span>{t("contactMe")}</span>
      </a>

      {showPopup && (
        <div
          className="contact-popup"
          style={{ display: "flex" }}
          onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}
        >
          <div className="popup-content">
            <h3>{t("getInTouch")}</h3>
            <a href="mailto:mahmoud.elkhwass@gmail.com" className="contact-option">
              <FaEnvelope /> <span>{t("emailMe")}</span>
            </a>
            <a href="https://calendly.com/mahmoud-elkhwass" target="_blank" rel="noopener noreferrer" className="contact-option">
              <FaCalendar /> <span>{t("scheduleMeeting")}</span>
            </a>
            <button
              className="close-popup"
              type="button"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
