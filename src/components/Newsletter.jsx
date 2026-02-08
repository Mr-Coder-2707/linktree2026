import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Newsletter() {
  const { t } = useApp();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(t("subscribeSuccess"));
      setEmail("");
    }
  };

  return (
    <section className="newsletter-section">
      <h2>{t("stayUpdated")}</h2>
      <form id="newsletter-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn subscribe-btn">
            {t("subscribe")}
          </button>
        </div>
        <p className="small-text">{t("noSpam")}</p>
      </form>
    </section>
  );
}
