import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const LoginPage = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleOverlayBtnClick = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Successfully Logged In!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const overlayBtnText = isRightPanelActive? "Sign In":"Sign Up";

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Successfully Signed Up!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="main-container">
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sign in || Sign up form</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div
        className={`container ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your email for registration</span>
            <div className="infield">
              <input type="text" placeholder="Name" />
              <label />
            </div>
            <div className="infield">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label />
            </div>
            <div className="infield">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label />
            </div>
            <button onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" role="button" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" role="button" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" role="button" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your account</span>
            <div className="infield">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label />
            </div>
            <div className="infield">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label />
            </div>
            <a href="#"  role="button" className="forgot">
              Forgot your password?
            </a>
            <button onClick={handleSignIn}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To stay connected with us, please log in with your personal info
              </p>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Every Second Counts</h1>
              <p>Your safety starts with us - sign up today</p>
            </div>
          </div>
          <button id="overlayBtn" onClick={handleOverlayBtnClick}>
            {overlayBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;