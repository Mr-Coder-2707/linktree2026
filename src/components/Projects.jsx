import { FaCode, FaMobileAlt, FaPaintBrush, FaArrowRight } from "react-icons/fa";
import { useApp } from "../context/AppContext";

export default function Projects() {
  const { t, trackLinkClick } = useApp();

  const projects = [
    { icon: <FaCode />, label: t("projectAlpha"), href: "https://geek-app.ddns.net/" },
    { icon: <FaMobileAlt />, label: t("mobileApp"), href: "https://github.com/mr-coder-2707" },
    { icon: <FaPaintBrush />, label: t("designPortfolio"), href: "https://mr-coder-2707.github.io/Mahmoud-Elkhwass-Profile1/" },
  ];

  const handleClick = (e, label, href) => {
    e.preventDefault();
    trackLinkClick(href, label);
    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    }, 100);
  };

  return (
    <section className="link-section">
      <h2>{t("latestProjects")}</h2>
      {projects.map((p, i) => (
        <a 
          key={i} 
          href={p.href} 
          className="btn link-button"
          onClick={(e) => handleClick(e, p.label, p.href)}
        >
          {p.icon}
          <span>{p.label}</span>
          <span className="hover-arrow">
            <FaArrowRight />
          </span>
        </a>
      ))}
    </section>
  );
}
