import { FaEye, FaMousePointer, FaChartBar, FaTrash } from "react-icons/fa";
import { useApp } from "../context/AppContext";
import { useState } from "react";

export default function Analytics() {
  const { t, analytics, resetAnalytics } = useApp();
  const [showDetails, setShowDetails] = useState(false);

  // Safety checks
  if (!analytics) {
    return null;
  }

  const linkClicks = analytics.linkClicks || {};
  const pageViews = analytics.pageViews || 0;

  const totalClicks = Object.values(linkClicks).reduce(
    (sum, link) => sum + (link?.count || 0),
    0
  );

  const sortedLinks = Object.entries(linkClicks)
    .map(([id, data]) => ({ id, name: data?.name || id, count: data?.count || 0 }))
    .sort((a, b) => b.count - a.count);

  const handleReset = () => {
    if (window.confirm(t("confirmResetAnalytics"))) {
      resetAnalytics();
    }
  };

  return (
    <section className="link-section analytics-section">
      <h2>
        <FaChartBar /> {t("analytics")}
      </h2>

      <div className="analytics-summary">
        <div className="analytics-card">
          <div className="analytics-icon">
            <FaEye />
          </div>
          <div className="analytics-info">
            <h3>{pageViews}</h3>
            <p>{t("pageViews")}</p>
          </div>
        </div>

        <div className="analytics-card">
          <div className="analytics-icon">
            <FaMousePointer />
          </div>
          <div className="analytics-info">
            <h3>{totalClicks}</h3>
            <p>{t("totalClicks")}</p>
          </div>
        </div>
      </div>

      <button
        className="btn analytics-toggle"
        onClick={() => {
          console.log("Button clicked, current state:", showDetails);
          setShowDetails(!showDetails);
        }}
      >
        {showDetails ? t("hideDetails") : t("showDetails")}
      </button>

      {showDetails && (
        <div className="analytics-details">
          {sortedLinks.length > 0 ? (
            <>
              <h3>{t("linkClickDetails")}</h3>
              <div className="analytics-list">
                {sortedLinks.map((link) => (
                  <div key={link.id} className="analytics-item">
                    <span className="link-name">{link.name}</span>
                    <span className="link-count">{link.count} {t("clicks")}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-danger analytics-reset" onClick={handleReset}>
                <FaTrash /> {t("resetAnalytics")}
              </button>
            </>
          ) : (
            <p style={{ textAlign: "center", color: "var(--light-subtext)", margin: 0, padding: "20px 0" }}>
              {t("noClicksYet")}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
