import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/assets/Icons/Logo.svg";
import Login_img from "../components/assets/Images/Login.png";
import LogInputField from "../components/inputField/LogInputField";

function SignIn() {
  const [email, setemail] = useState("");

  const handleEmailChange = (event) => {
    setemail(event.target.value);
  };

  return (
    <div className="logIn_page">
      <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12">
          <div className="login_form">
            <div className="login_header">
              <Link to="/">
                <img src={Logo} alt="Logo" className="logo" />
              </Link>
              <div className="lang_selector">
                <p>
                  Have An Account?<Link to="/">Sign In!</Link>
                </p>
              </div>
            </div>
            <div className="form_area">
              <div className="mb-5">
                <h1>Forgot Your Password</h1>
                <p className="mt-2">
                  Enter your registered email to reset your password
                </p>
              </div>
              <form action="" className="input_form">
                <LogInputField
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleEmailChange}
                />
                <Link to="/dashboard">
                  <button className="btn">Sent OTP</button>
                </Link>
              </form>
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
