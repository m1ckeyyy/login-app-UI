import "./styles/Login.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
export default function Login() {
  const hoverEffect = (event) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTWVUXYZ";
    let iterations = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= 11) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <div className="container">
      <div className="login-left">
        <div className="login-header">
          <h1
            data-value="IMPROVEMENT"
            className="improvement"
            onMouseOver={hoverEffect}
          >
            IMPROVEMENT
          </h1>

          <h1 data-value="CENTER" className="center" onMouseOver={hoverEffect}>
            CENTER
          </h1>
          <p>
            Getting started is quick and simple, just fill out the info below!
          </p>
        </div>
        <form className="login-form">
          <div className="login-form-content">
            <div className="form-item">
              <label>Enter Email</label>
              <input type="text" id="email" autoFocus />
            </div>
            <div className="form-item password">
              <label>Enter Password</label>
              <input type="password" id="password" />
              <div className="checkbox">
                <input type="checkbox" id="rememberMeCheckbox" />
                <label htmlFor="rememberMeCheckbox" className="checkboxLabel">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="buttons">
              <div className="line"></div>
              <button type="submit" className="submit-btn">
                Sign In
              </button>
              <button className="create-account-btn">
                <Link to="/register" className="create-account-href">
                  Create Account
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="login-right">
        <img src="images/login-img.png" />
      </div>
    </div>
  );

  //

  //

  //

  //

  //

  //

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="image-container">
          <img
            src="images/login-img2.png"
            alt="Login Image"
            class="login-image"
          />
          <h1 className="quote">
            "THE ONLY WAY
            <br /> TO DO GREAT WORK IS TO
            <br />
            LOVE WHAT YOU DO."
            <br /> - STEVE JOBS
          </h1>
          <h2 className="quote-2">Become the best version of yourself today</h2>
        </div>
        <div className="form-container">
          <h2>Welcome to Improvement Center</h2>
          <p>
            Getting started is quick and simple, just fill out the info below!
          </p>
          <form>
            <div>
              <label for="first-name">First Name:</label>
              <input type="text" id="first-name" name="first-name" required />
            </div>
            <div>
              <label for="last-name">Last Name:</label>
              <input type="text" id="last-name" name="last-name" required />
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div>
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </form>
          <p>
            Already a user? <a href="#">Login here</a>
          </p>
          <p>
            Copyright © <a href="https://github.com/m1ckeyyy">m1ckeyyy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
