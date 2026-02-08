import { FaTrophy, FaStar, FaUsers } from "react-icons/fa";
import { useApp } from "../context/AppContext";

export default function Achievements() {
  const { t } = useApp();

  const items = [
    { icon: <FaTrophy className="achievement-icon" />, title: t("projects"), value: "24+" },
    { icon: <FaStar className="achievement-icon" />, title: t("awards"), value: "7" },
    { icon: <FaUsers className="achievement-icon" />, title: t("clients"), value: "50+" },
  ];

  return (
    <section className="achievements-section link-section">
      <h2>{t("achievements")}</h2>
      <div className="achievements-container">
        {items.map((item, i) => (
          <div key={i} className="achievement-card">
            {item.icon}
            <div className="achievement-title">{item.title}</div>
            <div className="achievement-value">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
