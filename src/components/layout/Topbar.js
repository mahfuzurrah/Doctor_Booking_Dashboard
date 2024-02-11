import React, { useState} from "react";
import userImg from "../assets/img/doctor/user.png";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    setIsOpen(false);
  };

  return (
    <div className="topbar_item">
      <div className="logo">
          <h2 className="text-white fs-5 text-center mb-0">
            <span className="sm-logo">
              <img src={Logo} alt="Logo" />
            </span>
          </h2>
        </div>
      <div className="nav_right">
      <div className="account_info">
        <p className="name">username</p>
        <img src={userImg} alt="" />
      </div>
      <div className="toggle_account_info">
        <FaAngleDown className="icons" onClick={toggleMenu} />
        {isOpen && (
          <div className="menu_item">
            <Link to="/profile" onClick={handleSignOut}>
              Profile
              </Link>
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default Topbar;
