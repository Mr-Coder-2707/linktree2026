import {
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import { FaFigma, FaReact, FaNodeJs } from "react-icons/fa6";
import { useApp } from "../context/AppContext";

export default function Skills() {
  const { t } = useApp();

  const skills = [
    { icon: <FaCode />, label: t("webDevelopment") },
    { icon: <FaFigma />, label: t("uiUxDesign") },
    { icon: <FaMobileAlt />, label: t("mobileAppDev") },
    { icon: <FaReact />, label: t("react") },
    { icon: <FaNodeJs />, label: t("nodeJs") },
    { icon: <FaDatabase />, label: t("sqlNoSql") },
    { icon: <FaCloud />, label: t("cloudServices") },
  ];

  return (
    <section className="skills-section link-section">
      <h2>{t("skills")}</h2>
      <div className="skills-container">
        {skills.map((skill, i) => (
          <div key={i} className="skill-tag">
            {skill.icon}
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
