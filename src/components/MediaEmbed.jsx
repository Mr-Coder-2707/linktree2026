import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function MediaEmbed() {
  const { t } = useApp();
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="media-embed">
      <h2>{t("featuredContent")}</h2>
      <div className="video-container">
        <div className="responsive-iframe">
          {!loaded ? (
            <div
              className="placeholder-embed"
              onClick={() => setLoaded(true)}
            >
              {t("videoPlaceholder")}
            </div>
          ) : (
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title={t("youtubeVideo")}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
