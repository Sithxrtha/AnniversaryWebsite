import React from "react";
import "./navigation.css";

export default function BottomNav({ onBack, onNext }) {
  return (
    <div className="bottom-nav">
      <button className="nav-btn" onClick={onBack}>⟵ Back</button>
      <button className="nav-btn" onClick={onNext}>Next ⟶</button>
    </div>
  );
}
