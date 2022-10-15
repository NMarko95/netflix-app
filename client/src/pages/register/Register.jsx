import { useRef, useState } from "react";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(password.current.value);
  };

  return (
    <div className="register">
      <div className="register-top">
        <div className="register-wrapper">
          <img className="register-background" src="/netflix-logo.png" alt="" />
          <button className="login-btn">Sign in</button>
        </div>
      </div>
      <div className="register-container">
        <h1>Unlimited movies, Tv shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? enter your email to create or restart your membership
        </p>
        {!email ? (
          <div className="register-input">
            <input ref={emailRef} type="email" placeholder="E-mail" />
            <button className="register-btn" onClick={handleStart}>
              Get started
            </button>
          </div>
        ) : (
          <form className="register-input">
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button className="register-btn" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
