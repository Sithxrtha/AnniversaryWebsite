// src/pages/TimelinePage/TimelinePage.jsx
import { useState } from "react";           // ⬅️ ADD THIS
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/navigation/navigation.jsx";
import "./TimelinePage.css";

//image imports


const events = [
  {
    date: "2021",
    title: "When It All Began",
    text: "The first time our paths crossed and everything quietly started to change.",
    images: []
  },
];

// Mini carousel for images inside a card
function TimelineImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => {
    setIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const next = () => {
    setIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="timeline-image-carousel">
      {images.length > 1 && (
        <button
          type="button"
          className="timeline-image-arrow left"
          onClick={prev}
        >
          ‹
        </button>
      )}

      <div className="timeline-image-wrapper">
        <img
          src={images[index]}
          alt={`Event image ${index + 1}`}
          className="timeline-image"
        />
      </div>

      {images.length > 1 && (
        <button
          type="button"
          className="timeline-image-arrow right"
          onClick={next}
        >
          ›
        </button>
      )}

      {images.length > 1 && (
        <div className="timeline-dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`timeline-dot ${
                i === index ? "active" : ""
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function TimelinePage() {
  const navigate = useNavigate();
  const title = "TIMELINE";

  return (
    <div className="timeline-root">
      <div className="timeline-content">
        {/* Animated title (like your other pages) */}
        <h1 className="timeline-title">
          {Array.from(title).map((char, i) => (
            <span
              key={i}
              className="timeline-letter"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <p className="timeline-intro">
          Our timeline, reliving the moments we have shared together throughout the 2 years with one another.
        </p>

        {/* Vertical animated timeline */}
        <div className="timeline-list">
          {events.map((event, index) => (
            <div
              key={event.year}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="timeline-circle" />

              <div className="timeline-card">
                <span className="timeline-year">{event.date}</span>
                <h3 className="timeline-card-title">{event.title}</h3>

                {/* Images carousel inside card */}
                {event.images && event.images.length > 0 && (
                  <TimelineImageCarousel images={event.images} />
                )}

                <p className="timeline-card-text">{event.text}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Bottom navbar */}
      <BottomNav
        onBack={() => navigate(-1)}
        onNext={() => navigate("/video")}
      />
    </div>
  );
}
