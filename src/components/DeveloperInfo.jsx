import {
  FaCode,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaPython,
  FaPhp,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaServer,
} from "react-icons/fa";
import { useApp } from "../context/AppContext";

const devInfo = {
  name: "Mahmoud Sabry Elkhwass",
  title: "Full Stack Developer",
  location: "Egypt",
  email: "mahmoud.elkhwass@gmail.com",
  phone: "+201154031550",
  github: "https://github.com/mr-coder-2707",
  linkedin: "https://www.linkedin.com/in/mahmoud-elkhwass-53522328",
};

const techStack = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaDatabase />, name: "SQL & NoSQL" },
  { icon: <FaMobile />, name: "Mobile Dev" },
  { icon: <FaServer />, name: "Backend" },
];

export default function DeveloperInfo() {
  const { t } = useApp();

  return (
    <section className="developer-info-section">
      <h2>
        <FaCode /> {t("aboutDeveloper")}
      </h2>

      <div className="dev-card">
        <div className="dev-header">
          <div className="dev-avatar">
            <FaCode />
          </div>
          <div className="dev-intro">
            <h3>{devInfo.name}</h3>
            <span className="dev-title">{t("devRole")}</span>
          </div>
        </div>

        <p className="dev-summary">{t("devSummary")}</p>

        <div className="dev-details">
          <div className="dev-detail-item">
            <FaMapMarkerAlt />
            <span>{t("devLocation")}</span>
          </div>
          <div className="dev-detail-item">
            <FaGraduationCap />
            <span>{t("devEducation")}</span>
          </div>
          <div className="dev-detail-item">
            <FaEnvelope />
            <a href={`mailto:${devInfo.email}`}>{devInfo.email}</a>
          </div>
          <div className="dev-detail-item">
            <FaPhone />
            <a href={`tel:${devInfo.phone}`}>{devInfo.phone}</a>
          </div>
        </div>

        <div className="dev-tech-stack">
          <h4>{t("devTechStack")}</h4>
          <div className="tech-tags">
            {techStack.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech.icon} {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="dev-links">
          <a
            href={devInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="dev-link-btn"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={devInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="dev-link-btn"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
