"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import styles from "./SignupForm.module.css";
import TitleUnderline from "@/ui/TitleUnderline";
import { useAuth } from "@/context/AuthProvider";
import FormButton from "@/ui/FormButton";

interface SignupFormProps {
  backend_api: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ backend_api }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {login}=useAuth()
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const toggleMode = () => {
    setFormData({ name: "", email: "", password: "" });
    setIsLogin((prev) => !prev);
    setMessage("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setMessage("");

  const { name, email, password } = formData;

  if (!email || !password || (!isLogin && !name)) {
    return setMessage("Please fill all required fields.");
  }

  setIsSubmitting(true); // start loading

  try {
    const res = await fetch(
      isLogin ? `${backend_api}/api/users/oauth` : `${backend_api}/api/users/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          isLogin
            ? { email, password }
            : { username: name, email, password }
        ),
      }
    );

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      const text = await res.text();
      console.error("Invalid response from server:", text);
      throw new Error("Server did not return JSON");
    }

    const data = await res.json();

    if (!res.ok) {
      if (data.type === "validation") {
        return setMessage(data.messages[0]);
      } else if (data.type === "duplicate" || data.type === "conflict") {
        return setMessage(data.messages[0].message);
      } else if (data.type === "not_found") {
        return setMessage(data.messages[0]);
      } else {
        return setMessage(data.message || "Something went wrong.");
      }
    }

    login(data.token);
    setMessage("Success!");
    router.push("/profile");
  } catch (err) {
    console.error("Form error:", err);
    setMessage("Network error. Please try again.");
  } finally {
    setIsSubmitting(false); // stop loading
  }
};

  
  const handleGoogleSuccess = async (credentialResponse: unknown) => {
    const token = credentialResponse.credential;
    try {
      const res = await fetch(`${backend_api}/api/users/oauth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ googleId: token }),
      });
      
      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        const text = await res.text();
        console.error("Invalid response from server:", text);
        throw new Error("Server did not return JSON");
      }
      
      const data = await res.json();
      
      if (!res.ok) {
        return setMessage(data.message || "Google login failed.");
      }
      
      login(data.token)
      setMessage("Google login successful!");
      router.push("/profile");
    } catch (err) {
      console.error("Google login error:", err);
      setMessage("Something went wrong with Google login.");
    }
  };

  const handleGoogleFailure = () => {
    setMessage("Google Login Failed");
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.signup_heading}>
        <TitleUnderline text={isLogin ? "Login" : "Signup"} />
      </div>

      {!isLogin && (
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
      />

      <div className="shrink_input2">
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.gl + " " + styles.ps1}></div>
      <div className={styles.gl + " " + styles.ps2}></div>
      <div className={styles.pl + " " + styles.ps3}></div>
      <div className={styles.pl + " " + styles.ps4}></div>

      <div className={styles.googleBtnWrapper}>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
        />
      </div>

      <FormButton text="Submit" classType="signup_form_submit" disabled={isSubmitting} />

      {message && <p className={styles.status_text}>{message}</p>}

      <p onClick={toggleMode} className={styles.switch_text}>
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </p>
    </form>
  );
};

export default SignupForm;
