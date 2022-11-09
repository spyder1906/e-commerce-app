import React from "react";
import "./index.css";

const Login = ({ onLogin }) => {
  return (
    <div className="loginbody">
      <form action="#" class="login-box" autocomplete="on">
        <div class="title">
          <h1>LOGIN</h1>
        </div>
        <button type="submit" onClick={onLogin}>
          Login To Website
        </button>
        <div class="auth-action">
          <a href="#">Sign Up</a>
          <a href="#">Forget Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
