import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoPage.css";

export default function VideoPage() {
  const [entered, setEntered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="video-root">
      <div className="video-content">

        {/* Subtitle */}
        <h2 className="video-subtitle">
          A Special Video for Mali
        </h2>

        {/* Centered YouTube Video */}
        <div className="video-wrapper">
          <iframe
            className="video-embed"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}
