import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function MediaEmbed() {
  const { t } = useApp();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Images from public folder
  const images = [
    "/1770501459853.png",
    "/20260113_142345.jpg",
    "/20260214_130337.jpg.jpeg",
    "/ChatGPT Image Feb 19, 2026, 02_33_39 AM.png",
    "/file_000000004f2c722f81faed14a78d0144 (1).png",
    "/file_00000000dd8c71f48c3e034935e3bd51.png",
    "/file_00000000f14871f5a49a425fd8cf7bb8.png"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="media-embed">
      <h2>{t("featuredContent")}</h2>
      <div className="image-frame-container">
        <div className="frame-outer">
          <div className="frame-middle">
            <div className="frame-inner">
              <img 
                src={images[currentImageIndex]} 
                alt={`Gallery ${currentImageIndex + 1}`}
                className="frame-image"
              />
              <div className="frame-controls">
                <button 
                  onClick={prevImage} 
                  className="frame-nav-btn frame-prev"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button 
                  onClick={nextImage} 
                  className="frame-nav-btn frame-next"
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
              <div className="frame-indicators">
                {images.map((_, index) => (
                  <span 
                    key={index}
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
