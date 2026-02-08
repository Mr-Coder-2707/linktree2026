import { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpg";

export default function Preloader({ onDone }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Show preloader for 1.5s, then fade out over 0.6s (matches CSS transition)
    const timer = setTimeout(() => setFadeOut(true), 1500);
    const hideTimer = setTimeout(() => {
      setHidden(true);
      if (onDone) onDone();
    }, 2200);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [onDone]);

  if (hidden) return null;

  return (
    <div className={`preloader${fadeOut ? " fade-out" : ""}`}>
      <div className="loader">
        <img src={profileImg} alt="Profile" className="loader-profile-img" />
      </div>
    </div>
  );
}
