"use client"
import React, { useState } from "react";
import "./Button.css";

type ButtonModel = {
  classType: string;
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonModel> = ({ classType, text, onClick }) => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setDisabled(true); // Disable immediately
      onClick?.(); // Run click logic (like navigation)
    }
  };

  return (
    <button className={classType} onClick={handleClick} disabled={disabled}>
      <p className="btn_text">
        {text.split("").map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </p>
    </button>
  );
};

export default Button;
