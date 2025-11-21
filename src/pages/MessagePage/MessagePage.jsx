// src/pages/MessagePage/MessagePage.jsx
import "./MessagePage.css";
// 👇 adjust this path/name to match where your image actually lives
import messageImage from "../../letter-image.png";

export default function MessagePage() {
  return (
    <div className="message-root">
      <div className="message-content">
        {/* Card with message */}
        <div className="message-card">
          <h2 className="message-title">A Little Note for You 💌</h2>
          <p>
            Hi baby, I wanted to say thank you so much for loving me the way you do. You were always there for me through the thickest and thinnest of moments. I love you so much for always motivating me every day, lifting me up when times get hard, and being there for me. I truly appreciate it. I’m thrilled to have you by my side throughout this journey and to call you, my girlfriend. I am so very proud of you for upholding the caring, loving, kind, and resilient personality, which truly won my heart over to you. You taught me how to love in a way I never thought was possible. I want to thank you for being a beautiful soul who entered into my life. I love spending endless hours with you every week and day via call and am hoping to continue that as we get older, together and forever. I am happy to celebrate more chapters to come, and happy 2 years baby!
            I love youuuuu so muchhhhh❤️🥰.
          </p>
        </div>

        {/* Image directly under the card */}
        <div className="message-image-wrapper">
          <img
            src={messageImage}
            alt="A special memory with us"
            className="message-image"
          />
        </div>

        {/* Back Button */}
        <div className="back-btn-wrapper">
          <button
            className="back-btn"
            onClick={() => window.history.back()}
          >
            <span>←</span> Back
          </button>
        </div>
      </div>

    </div>
  );
}
