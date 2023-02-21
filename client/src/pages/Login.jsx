import "./styles/Login.scss";

export default function Login() {
  return (
    <div className="container">
      <div className="login-left">
        <div className="login-header">
          <h1>Welcome to Improvement</h1>
          <p>
            Getting started is quick and simple, just fill out the info below!
          </p>
        </div>
        <form className="login-form">
          <div className="login-form-content">
            <div className="form-item">
              <label for="email">Enter Email</label>
              <input type="text" id="email" />
            </div>
            <div className="form-item">
              <label for="password">Enter Password</label>
              <input type="password" id="password" />
            </div>
            <div className="form-item">
              <div className="checkbox">
                <input type="checkbox" id="rememberMeCheckbox" />
                <label for="rememberMeCheckbox" className="checkboxLabel">
                  Remember Me
                </label>
              </div>
            </div>
            <button type="submit">Sign In</button>
          </div>

          {/* <div className="login-form-footer">
            <a href="#">a</a>
            <a href="#">b</a>
          </div> */}
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
