import { FaCheck } from "react-icons/fa";
import { useApp } from "../context/AppContext";
import profileImg from "../assets/profile.jpg";

export default function Header() {
  const { t } = useApp();

  return (
    <header>
      <img src={profileImg} alt="Profile Picture" className="profile-img" />
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
