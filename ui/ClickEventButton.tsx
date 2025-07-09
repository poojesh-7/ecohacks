"use client"
import React, { useState } from "react";
import "./Button.css";

type ButtonModel = {
  classType: string;
  text: string;
  clickEvent: () => void;
};

const ClickEventButton: React.FC<ButtonModel> = ({ classType, text, clickEvent }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      clickEvent();
    }
  };

  return (
    <button onClick={handleClick} className={classType} disabled={isClicked}>
      <p className="btn_text">
        {text.split("").map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </p>
    </button>
  );
};

export default ClickEventButton;
