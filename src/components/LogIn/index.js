import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; // Importing the CSS Module
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
  const handleOtpChange = (event) => setOtp(event.target.value);
  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      console.log("Logging in with Email:", email, "Password:", password);
    } else {
      if (password !== confirmPassword) {
        alert("Passwords Mismatched");
        return;
      }
      setShowOtpVerification(true);
      console.log("Signing up with Email:", email, "Password:", password);
    }
  };

  const handleVerifyOtp = (event) => {
    event.preventDefault();
    if (otp === "123456") {
      alert("OTP verified successfully!");
      navigate("/login"); // Redirect to login page
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className={styles['background-wrapper']}> {/* Use curly braces and styles */}
      <div className={styles.container}>
        {showOtpVerification ? (
          <form onSubmit={handleVerifyOtp} className={styles['otp-form']}>
            <h2>Verify OTP</h2>
            <div className={styles['form-group']}>
              <label htmlFor="otp">OTP:</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={handleOtpChange}
                required
                placeholder="Enter OTP"
              />
            </div>
            <button className={styles['submit-button']} type="submit">
              Verify OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className={styles['auth-form']}>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <div className={styles['form-group']}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="password">Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder="Enter your password"
              />
              <span className={styles['password-toggle']} onClick={handleTogglePassword}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </span>
            </div>
            {!isLogin && (
              <div className={styles['form-group']}>
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                  placeholder="Confirm your password"
                />
              </div>
            )}

            {isLogin && (
              <div className={styles['forgot-password']}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Forgot Password?
                </a>
              </div>
            )}

            <button className={styles['login']} type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </button>
            <p className={styles['signup']}>
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <a href="#" onClick={handleToggleForm}>
                    Sign up
                  </a>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <a href="#" onClick={handleToggleForm}>
                    Login
                  </a>
                </>
              )}
            </p>
            {isLogin && (
              <div className={styles['social-login']}>
                <button className={styles['google-button']}>
                  <img
                    src="https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png"
                    alt="Google"
                  />
                  Continue with Google
                </button>
                <button className={styles['linkedin-button']}>
                  <img
                    src="https://www.linkedin.com/favicon.ico"
                    alt="LinkedIn"
                  />
                  Continue with LinkedIn
                </button>
              </div>
            )}
            <p>Or continue with your phone</p>
            <input type="tel" placeholder="Enter your phone number" />
            <div className={styles['checkbox']}>
              <input type="checkbox" id="terms" />
              <label className={styles['terms']} htmlFor="terms">
                I agree to{" "}
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Privacy Policy
                </a>{" "}
                and acknowledge to receive communication from 10times
              </label>
            </div>
            <div className={styles['next-button']}>
              <a className={styles['next']} href="#" onClick={(e) => e.preventDefault()}>
                Next
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
