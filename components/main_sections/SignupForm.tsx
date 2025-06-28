"use client"

import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import styles from './SignupForm.module.css';
import Button from '@/ui/Button';
import TitleUnderline from '@/ui/TitleUnderline';

const SignupForm = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleMode = () => setIsLogin((prev) => !prev);

  // const handleGoogleSuccess = (credentialResponse:any) => {
  //   console.log("Google credential:", credentialResponse);
  // };
  const handleGoogleSuccess = () => {
    console.log("Google credential:");
  };

  const handleGoogleFailure = () => {
    console.error("Google Login Failed");
  };

  return (
    <form className={styles.container}>
      <div className={styles.signup_heading}>
        <TitleUnderline text={isLogin ? 'Login' : 'Signup'}/>
      </div>
        {!isLogin && (
            <input type="text" placeholder="Enter Name" className={styles.input} />
        )}
        
        {/* <input type="email" placeholder="Enter Email" className={isLogin?`${styles.input} ${styles.login_inputs}`:styles.input} />
        <input type="password" placeholder="Enter Password" className={isLogin?`${styles.input} ${styles.login_inputs}`:styles.input} /> */}
        <input type="email" placeholder="Enter Email" className={styles.input} />
        <div className="shrink_input2">
          <input type="password" placeholder="Enter Password" className={styles.input} />
        </div>  
        <div className={styles.gl+" "+styles.ps1}></div>
        <div className={styles.gl+" "+styles.ps2}></div>
        <div className={styles.pl+" "+styles.ps3}></div>
        <div className={styles.pl+" "+styles.ps4}></div>
        {!isLogin && (
            <div className="shrink_input2">
              <input type="tel" placeholder="Enter Phone number" className={styles.input} />
            </div>
        )}
        
          <div className={styles.googleBtnWrapper}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
            />
          </div>

      <Button text='Submit' classType='signup_form_submit'/>
      
      <p onClick={toggleMode} className={styles.switch_text}>{isLogin ? 'Switch to Signup' : 'Switch to Login'}</p>
      
    </form>
  );
};

export default SignupForm;
