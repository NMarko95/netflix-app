import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-top">
        <div className="login-wrapper">
          <img className="login-background" src="/netflix-logo.png" alt="" />
        </div>
      </div>
      <div className="login-container">
        <form className="login-form">
          <h1>Sign in</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="login-button">Sign in</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
