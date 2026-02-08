import { useState, useEffect, useRef } from "react";
import { useApp } from "../context/AppContext";

export default function Testimonials() {
  const { t } = useApp();

  const testimonialData = [
    {
      content: t("testimonial1Content"),
      name: t("testimonial1Name"),
      title: t("testimonial1Title"),
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      content: t("testimonial2Content"),
      name: t("testimonial2Name"),
      title: t("testimonial2Title"),
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      content: t("testimonial3Content"),
      name: t("testimonial3Name"),
      title: t("testimonial3Title"),
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialData.length);
    }, 5000);
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Touch swipe support
  const touchStart = useRef(0);
  const handleTouchStart = (e) => {
    touchStart.current = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].screenX - touchStart.current;
    if (diff < -50) {
      setActiveIndex((prev) => (prev + 1) % testimonialData.length);
      resetInterval();
    } else if (diff > 50) {
      setActiveIndex(
        (prev) => (prev - 1 + testimonialData.length) % testimonialData.length
      );
      resetInterval();
    }
  };

  return (
    <section className="testimonials-section link-section">
      <h2>{t("testimonials")}</h2>
      <div
        className="testimonials-container"
        ref={containerRef}
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={startInterval}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {testimonialData.map((item, i) => (
          <div
            key={i}
            className={`testimonial-card${i === activeIndex ? " active" : ""}`}
          >
            <div className="testimonial-content">{item.content}</div>
            <div className="testimonial-author">
              <img
                src={item.avatar}
                alt={item.name}
                className="testimonial-avatar"
              />
              <div className="testimonial-details">
                <span className="testimonial-name">{item.name}</span>
                <span className="testimonial-title">{item.title}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="testimonial-controls">
          {testimonialData.map((_, i) => (
            <div
              key={i}
              className={`testimonial-dot${i === activeIndex ? " active" : ""}`}
              onClick={() => {
                setActiveIndex(i);
                resetInterval();
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
