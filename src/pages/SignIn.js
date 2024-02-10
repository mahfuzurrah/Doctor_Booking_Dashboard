import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Login_img from "../components/assets/img/Login.png";
import LogInputField from "../components/inputField/LogInputField";
import PasswordInput from "../components/inputField/PasswordInput";

function SignIn() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  return (
    <div className="logIn_page">
      <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12">
          <div className="login_form">
            <div className="login_header">
              <div className="lang_selector">
                <p>
                  Don’t have an account? <Link to="/Signup">Sign up!</Link>
                </p>
              </div>
            </div>
            <div className="form_area">
              <div className="mb-5">
                <h1>Welcome Back</h1>
                <p className="mt-2 desc">
                  <b>Login into your account</b>
                </p>
              </div>
              <form action="" className="input_form">
                <LogInputField
                  type="email"
                  value={name}
                  placeholder="Username or email"
                  onChange={handleNameChange}
                />
                <PasswordInput
                  type="password"
                  value={pass}
                  placeholder="Password"
                  onChange={handlePassChange}
                />
                <div className="forget_area">
                  <span className="remember_me">
                    <input type="checkbox" className="redio_input" />
                    <p>Remember me</p>
                  </span>
                  <Link to="/forgot-password" className="fuP">
                    Forgot Password?
                  </Link>
                </div>
                <Link to="/dashboard">
                  <button className="btn">Sign In</button>
                </Link>
              </form>
              <div className="social_media">
                <p>Or continue with</p>
                <div className="social_group">
                  <Link to="#">
                    <FcGoogle className="icons" /> Google
                  </Link>
                  <Link to="#">
                    <FaFacebook className="icons fb_icon" /> Facebook
                  </Link>
                </div>
              </div>
            </div>
            <div className="logIn_footer">
              <Link to="">Privacy Policy</Link>
              <p>Copyright 2023</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="login_img">
            <img src={Login_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
