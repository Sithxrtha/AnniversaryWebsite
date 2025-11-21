// src/pages/WelcomePage/WelcomePage.jsx
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";
import Heart from "./../../components/heart/heart.jsx";

export default function WelcomePage() {
  const canvasRef = useRef(null); // you can remove this if you’re not using the canvas yet
  const navigate = useNavigate();

  const onEnter = () => {
    navigate("/timeline"); // <-- change "/home" to whatever route you want
  };

  const title = "WELCOME";

  return (
    <div className="welcome-root">
      {/* Background Canvas (optional) */}
      <canvas ref={canvasRef} className="heart-canvas"></canvas>

      {/* Foreground Content */}
      <div className="welcome-content">
        {/* Heart above the text */}
        <Heart />

        <h1 className="welcome-title">
          {Array.from(title).map((char, i) => (
            <span
              key={i}
              className="welcome-letter"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <p className="welcome-subtitle">
          This is a special website dedicated to <u><strong><b>Mali</b></strong></u>.
        </p>

        <button className="enter-btn" onClick={onEnter}>
          Continue <span>➜</span>
        </button>
      </div>
    </div>
  );
}
