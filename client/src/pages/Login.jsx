import "./styles/Login.scss";
export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="image-container">
          <img src="images/login-img.png" alt="Login Image" />
          <div className="quote">
            "THE ONLY WAY
            <br /> TO DO GREAT WORK IS TO LOVE WHAT YOU DO."
            <br /> - STEVE JOBS
          </div>
          <div className="quote-2">
            Become the best version of yourself today
          </div>
        </div>
        <div className="form-container">
          <form></form>
        </div>
      </div>
    </div>
  );
}
