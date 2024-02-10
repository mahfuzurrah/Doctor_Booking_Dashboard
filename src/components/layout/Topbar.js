import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Icons/Logo.svg";

function Topbar() {
  return (
    <div className="topbar_nav_item">
      <div className="logo">
      <img src={Logo} alt="Logo" className="logo" />
      </div>
      <ul className="top_nav_list">
        <Link to="/my-profile">
          <div className="user">
            <p>username</p>
          </div>
        </Link>
      </ul>
    </div>
  );
}

export default Topbar;
