import { useState, useEffect, useCallback } from "react";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useApp } from "../context/AppContext";
import profileImg from "../assets/profile.jpg";

const ogImages = [
  profileImg,
  "/1770501459853.png",
  "/20260113_142345.jpg",
  "/file_000000004f2c722f81faed14a78d0144 (1).png",
  "/file_00000000dd8c71f48c3e034935e3bd51.png",
  "/file_00000000f14871f5a49a425fd8cf7bb8.png",
];

export default function Header() {
  const { t } = useApp();
  const [currentImg, setCurrentImg] = useState(0);

  const goNext = useCallback(() => {
    setCurrentImg((prev) => (prev + 1) % ogImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentImg((prev) => (prev - 1 + ogImages.length) % ogImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <header>
      <div className="profile-img-wrapper">
        <img
          src={ogImages[currentImg]}
          alt="Profile Picture"
          className="profile-img"
          key={currentImg}
        />
        <button className="profile-nav-btn profile-nav-prev" onClick={goPrev} aria-label="Previous">
          <FaChevronLeft />
        </button>
        <button className="profile-nav-btn profile-nav-next" onClick={goNext} aria-label="Next">
          <FaChevronRight />
        </button>
      </div>
      <div className="username-container">
        <div className="username">@Mahmoud-Sabry-El-khwass</div>
        <div className="verified-badge">
          <FaCheck />
          <span className="verified-tooltip">{t("verified")}</span>
        </div>
      </div>
      <p className="bio">{t("bio")}</p>
    </header>
  );
}
