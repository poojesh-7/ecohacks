"use client";
import { ChangeEvent, useRef, useState } from "react";
import classes from "./Input.module.css";

type Props = {
  label: string;
  value: string | File | null;
  name:string;
  onChange: (value: string | File) => void;
  error?: string;
  setError: (msg: string | null) => void;
};

const ImageInput = ({ label, onChange, value,error,name, setError }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const validateImage = (url: string) => {
    const img = new Image();
    img.src = url;

    img.onload = () => {
      setPreview(url);
      setError(null);
    };

    img.onerror = () => {
      setPreview(null);
      setError("Image could not be loaded. Please check the URL or upload a valid file.");
    };
  };

  const handleURLChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    onChange(url);
    if (url.trim() !== "") {
      validateImage(url);
    } else {
      setPreview(null);
      setError("Image URL cannot be empty.");
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      const img = new Image();
      img.src = fileURL;

      img.onload = () => {
        setPreview(fileURL);
        setError(null);
        onChange(file);
      };

      img.onerror = () => {
        setPreview(null);
        setError("Uploaded file is not a valid image.");
      };
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <label className={classes.label}>{label}</label>
      <div className={classes.input_cover}>
        <input
          type="text"
          className={classes.inp}
          value={value}
          name={name}
          placeholder="Enter image URL"
          onChange={handleURLChange}
        />
        <div className={classes.gl}></div>
        <div className={classes.pl}></div>
      </div>

      <button
        type="button"
        disabled
        // onClick={triggerFileInput}
        className={classes.image_btn}
      >
        📁 Upload image from computer
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {preview && (
        <div style={{ marginTop: "1rem" }}>
          <img src={preview} alt="preview" className={classes.preview} />
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ImageInput;
