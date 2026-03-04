import { FaLink, FaBriefcase, FaArrowRight } from "react-icons/fa";
import { useApp } from "../context/AppContext";

export default function PrimaryLinks() {
  const { t, trackLinkClick } = useApp();

  const links = [
    {
      href: "https://geek-app.ddns.net/",
      icon: <FaLink />,
      label: t("website"),
    },
    {
      href: "https://mr-coder-2707.github.io/Mahmoud-Elkhwass-Profile1/",
      icon: <FaBriefcase />,
      label: t("portfolio"),
    },
  ];

  const handleClick = (e, label, href) => {
    e.preventDefault();
    trackLinkClick(href, label);
    // Open link after a short delay to ensure tracking completes
    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    }, 100);
  };

  return (
    <section className="link-section">
      <h2>{t("primaryLinks")}</h2>
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn link-button primary-button"
          onClick={(e) => handleClick(e, link.label, link.href)}
        >
          {link.icon}
          <span>{link.label}</span>
          <span className="hover-arrow">
            <FaArrowRight />
          </span>
        </a>
      ))}
    </section>
  );
}
