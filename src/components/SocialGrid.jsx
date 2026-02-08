import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useApp } from "../context/AppContext";

const socials = [
  {
    href: "https://www.instagram.com/mahmoud.s.elkhwass",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    href: "https://x.com/MahmoudElkhwas5",
    icon: <FaXTwitter />,
    label: "Twitter/X",
  },
  {
    href: "https://www.linkedin.com/in/mahmoud-elkhwass-53522328",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/mr-coder-2707",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.tiktok.com/@mahmoudsabryelkhwas",
    icon: <FaTiktok />,
    label: "TikTok",
  },
  {
    href: "https://www.youtube.com/channel/UCUzib7SqSLpuN0Sk3_9KZxw",
    icon: <FaYoutube />,
    label: "YouTube",
  },
  {
    href: "https://www.facebook.com/mahmoud.s.elkhwass",
    icon: <FaFacebook />,
    label: "Facebook",
  },
  {
    href: "https://wa.me/+201154031550",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
  },
];

export default function SocialGrid() {
  const { t } = useApp();

  return (
    <section className="link-section">
      <h2>{t("connectWithMe")}</h2>
      <div className="social-grid">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            className="social-icon"
            aria-label={s.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
