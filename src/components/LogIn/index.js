import React, { useState } from "react";
import "./index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit login form data
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login or signup</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <span className="password-toggle" onClick={handleTogglePassword}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <button className="login" type="submit">Login</button>
        <p className="signup">
          Don't have an account? <a href="#">Sign up</a>
        </p>
        <div className="social-login">
          <button className="google-button">
            <img
              src="https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png"
              alt="Google"
            />
           <a href="#">Continue with Google </a>
          </button>
          <button className="linkedin-button">
            <img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn" />
            <a href="#">Continue with LinkedIn</a>
          </button>
        </div>
        <p>Or continue with your phone</p>
        <input type="tel" placeholder="Enter your phone number" />
        <div className="checkbox">
          <input type="checkbox" id="terms" />
          <label className="terms" htmlFor="terms">
            I agree to <a href="#">Privacy Policy</a> and acknowledge to receive
            communication from 10times
          </label>
        </div>
        <div className="next-button">
            <a className="next" href="#">Next</a>

        </div>
      </form>
    </div>
  );
}

export default Login;
