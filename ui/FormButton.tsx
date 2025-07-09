"use client"
import React from "react";
import "./Button.css";

type ButtonModel = {
  classType: string;
  text: string;
  disabled?: boolean;
};

const FormButton: React.FC<ButtonModel> = ({ classType, text, disabled = false }) => {

  return (
    <button className={classType} disabled={disabled}>
      <p className="btn_text">
        {text.split("").map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </p>
    </button>
  );
};

export default FormButton;
