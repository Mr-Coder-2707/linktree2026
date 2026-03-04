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

  const handleClick = (label, href) => {
    trackLinkClick(href, label);
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
          onClick={() => handleClick(link.label, link.href)}
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
