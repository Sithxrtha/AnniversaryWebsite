// src/pages/TimelinePage/TimelinePage.jsx
import { useState } from "react";           // ⬅️ ADD THIS
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/navigation/navigation.jsx";
import "./TimelinePage.css";

import imgggg from "../../photos/2023/20231029_233059486_iOS.jpg";

//image imports
/* 2023 */
import img1 from "../../photos/2023/20230701_202639752_iOS.jpg";
import img2 from "../../photos/2023/20230911_052846802_iOS.jpg";
import img3 from "../../photos/2023/20231029_233059486_iOS.jpg";
import img4 from "../../photos/2023/20231030_002101042_iOS.jpg";
import img5 from "../../photos/2023/20231113_024134664_iOS.jpg";
import img6 from "../../photos/2023/20231202_022844993_iOS.jpg";
import img7 from "../../photos/2023/20231202_023029520_iOS.jpg";

/* 2024 */
import img8 from "../../photos/2024/20240101_072803265_iOS.jpg";
import img9 from "../../photos/2024/20240101_072804232_iOS.jpg";
import img10 from "../../photos/2024/20240107_002615629_iOS.jpg";
import img11 from "../../photos/2024/20240107_002617741_iOS.jpg";
import img12 from "../../photos/2024/20240107_002753003_iOS.jpg";
import img13 from "../../photos/2024/20240121_000737197_iOS.jpg";
import img14 from "../../photos/2024/20240121_002940955_iOS.jpg";
import img15 from "../../photos/2024/20240121_003108666_iOS.jpg";
import img16 from "../../photos/2024/20240121_003109383_iOS.jpg";
import img17 from "../../photos/2024/20240121_003113159_iOS.jpg";
import img18 from "../../photos/2024/20240121_003137904_iOS.jpg";
import img19 from "../../photos/2024/20240121_003143184_iOS.jpg";
import img20 from "../../photos/2024/20240121_003206911_iOS.jpg";
import img21 from "../../photos/2024/20240217_010741581_iOS.jpg";
import img22 from "../../photos/2024/20240217_010758257_iOS.jpg";
import img23 from "../../photos/2024/20240310_030838234_iOS.jpg";
import img24 from "../../photos/2024/20240310_030839203_iOS.jpg";
import img25 from "../../photos/2024/20240414_022111931_iOS.jpg";
import img26 from "../../photos/2024/20240414_022216533_iOS.jpg";
import img27 from "../../photos/2024/20240505_005251259_iOS.jpg";
import img28 from "../../photos/2024/20240512_165548012_iOS.jpg";
import img29 from "../../photos/2024/20240527_205511622_iOS.jpg";
import img30 from "../../photos/2024/20240527_205519466_iOS.jpg";
import img31 from "../../photos/2024/20240609_171840738_iOS.jpg";
import img32 from "../../photos/2024/20240609_172003422_iOS.jpg";
import img33 from "../../photos/2024/20240610_015054936_iOS.jpg";
import img34 from "../../photos/2024/20240610_015606151_iOS.jpg";
import img35 from "../../photos/2024/20240612_013721851_iOS.jpg";
import img36 from "../../photos/2024/20240623_003149370_iOS.jpg";
import img37 from "../../photos/2024/20240623_021112660_iOS.jpg";
import img38 from "../../photos/2024/20240623_021129220_iOS.jpg";
import img40 from "../../photos/2024/20240623_021131340_iOS.jpg";
import img41 from "../../photos/2024/20240707_154530209_iOS.jpg";
import img42 from "../../photos/2024/20240728_030228392_iOS.jpg";
import img43 from "../../photos/2024/20240728_030237957_iOS.jpg";
import img44 from "../../photos/2024/20240824_215753067_iOS.jpg";
import img45 from "../../photos/2024/20240825_022954686_iOS.jpg";
import img46 from "../../photos/2024/20240825_022957959_iOS.jpg";
import img47 from "../../photos/2024/20240825_023032663_iOS.jpg";
import img48 from "../../photos/2024/20240825_031855926_iOS.jpg";
import img49 from "../../photos/2024/20240825_173457539_iOS.jpg";
import img50 from "../../photos/2024/20240825_173527887_iOS.jpg";
import img51 from "../../photos/2024/20240825_173533607_iOS.jpg";
import img52 from "../../photos/2024/20240825_180353777_iOS.jpg";
import img53 from "../../photos/2024/20240908_012053048_iOS.jpg";
import img54 from "../../photos/2024/20240908_012325517_iOS.jpg";
import img55 from "../../photos/2024/20240908_035206000_iOS.jpg";
import img56 from "../../photos/2024/20240908_184817720_iOS.jpg";
import img57 from "../../photos/2024/20240908_192453358_iOS.jpg";
import img58 from "../../photos/2024/20241005_220922837_iOS.jpg";
import img59 from "../../photos/2024/20241005_222652329_iOS.jpg";
import img60 from "../../photos/2024/20241005_222654220_iOS.jpg";
import img61 from "../../photos/2024/20241005_222901108_iOS.jpg";
import img62 from "../../photos/2024/20241005_235630260_iOS.jpg";
import img63 from "../../photos/2024/20241006_011200505_iOS.jpg";
import img64 from "../../photos/2024/20241006_011251275_iOS.jpg";

/* 2025 */
import img65 from "../../photos/2025/20250202_235412474_iOS.jpg";
import img66 from "../../photos/2025/20250202_235418678_iOS.jpg";
import img67 from "../../photos/2025/20250325_175500556_iOS.jpg";
import img68 from "../../photos/2025/20250325_175851199_iOS.jpg";
import img69 from "../../photos/2025/20250329_235934883_iOS.jpg";
import img70 from "../../photos/2025/20250330_033611964_iOS.jpg";
import img71 from "../../photos/2025/20250330_034743874_iOS.jpg";
import img72 from "../../photos/2025/20250616_013756943_iOS.jpg";
import img73 from "../../photos/2025/20250630_215835617_iOS.jpg";
import img74 from "../../photos/2025/20250630_215841698_iOS.jpg";
import img75 from "../../photos/2025/20250719_034849864_iOS.jpg";
import img76 from "../../photos/2025/20250720_013254401_iOS.jpg";
import img77 from "../../photos/2025/20250720_013328339_iOS.jpg";
import img78 from "../../photos/2025/20250823_213119000_iOS.jpg";
import img79 from "../../photos/2025/20250823_213420000_iOS.jpg";
import img80 from "../../photos/2025/20250823_215131000_iOS.jpg";
import img81 from "../../photos/2025/20250823_220843000_iOS.jpg";
import img82 from "../../photos/2025/20250823_220850000_iOS.jpg";
import img83 from "../../photos/2025/20250823_221322000_iOS.jpg";
import img84 from "../../photos/2025/20251007_010133666_iOS.jpg";
import img85 from "../../photos/2025/20251007_010133795_iOS.jpg";



const events = [
  {
    date: "2023",
    title: "When It All Began",
    text: "The first time our paths crossed, you caught my eye the moment I saw you. It was the start of something special that I would never forget. The year 2023, signified our spark that ignited our love story, and the beginning of our journey together.",
    images: [
      img1, img2, img3, img4, img5, img6, img7
    ]
  },

  {
    date: "2024",
    title: "A Year of Growing Together",
    text: "2024 was a year of growth, discovery, and deepening our connection. From our trips together to the countless moments of laughter and love, every day was a new chapter in our story. It was a year filled with unforgettable memories that we will cherish forever.This year was the year we accomplished many milestones together, from you graduating, to us being officially together for one year, and more.",
    images: [
      img8, img9, img10, img11, img12, img13, img14, img15, img16, img17,
      img18, img19, img20, img21, img22, img23, img24, img25, img26, img27,
      img28, img29, img30, img31, img32, img33, img34, img35, img36, img37,
      img38, img40, img41, img42, img43, img44, img45, img46, img47, img48,
      img49, img50, img51, img52, img53, img54, img55, img56, img57, img58,
      img59, img60, img61, img62, img63, img64
    ]
  },

  {
    date: "2025",
    title: "Building What Comes Next",
    text: "A year filled with more joy, milestones, and unforgettable moments. This is the year where we started to take our next steps together, into the next chapter in our lives. We have built a strong foundation of love, trust, and support, and I am excited to see where our journey takes us next. This year is just the beginning of the many years to come.",
    images: [
      img65, img66, img67, img68, img69, img70, img71, img72, img73, img74,
      img75, img76, img77, img78, img79, img80, img81, img82, img83, img84,
      img85
    ]
  }
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
        onNext={() => navigate("/message")}
      />
    </div>
  );
}
