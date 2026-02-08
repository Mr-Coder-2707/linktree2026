import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaCopy,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useApp } from "../context/AppContext";

export default function ShareModal({ active, onClose }) {
  const { t } = useApp();
  const [copied, setCopied] = useState(false);
  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(document.title);
  const currentUrl = window.location.href;

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
  };

  const openShare = (e, url) => {
    e.preventDefault();
    window.open(url, "share-window", "width=600,height=400");
  };

  const nativeShare = async () => {
    try {
      await navigator.share({ title: document.title, url: currentUrl });
    } catch (err) {
      console.log("Error sharing:", err);
    }
  };

  return createPortal(
    <div
      className={`share-modal${active ? " active" : ""}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="share-modal-content">
        <h3>{t("shareMyProfile")}</h3>
        <div className="share-options">
          <a
            href="#"
            className="share-option"
            onClick={(e) =>
              openShare(
                e,
                `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
              )
            }
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a
            href="#"
            className="share-option"
            onClick={(e) =>
              openShare(
                e,
                `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`
              )
            }
          >
            <FaTwitter />
            <span>Twitter</span>
          </a>
          <a
            href="#"
            className="share-option"
            onClick={(e) =>
              openShare(
                e,
                `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`
              )
            }
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
          <a
            href="#"
            className="share-option"
            onClick={(e) =>
              openShare(
                e,
                `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
              )
            }
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
        {navigator.share && (
          <button
            type="button"
            className="btn share-native-btn"
            onClick={nativeShare}
          >
            <FaExternalLinkAlt /> {t("shareOnDevice")}
          </button>
        )}
        <div className="share-link-container">
          <input type="text" value={currentUrl} readOnly />
          <button type="button" id="copy-link" onClick={copyLink}>
            <FaCopy />
          </button>
        </div>
        <p className="small-text">
          {copied ? t("linkCopied") : t("clickToCopyLink")}
        </p>
        <button type="button" className="close-share" onClick={onClose}>
          ×
        </button>
      </div>
    </div>,
    document.body
  );
}
