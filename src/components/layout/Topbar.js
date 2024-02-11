import { Select } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import userImg from "../assets/img/doctor/user.png";
import Logo from "../assets/img/logo.png";
const { Option } = Select;

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    setIsOpen(false);
  };

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
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
        <div className="user_area" onClick={toggleMenu}>
          <div className="account_info">
            <p className="name">username</p>
            <img src={userImg} alt="" />
          </div>
          <div className="toggle_account_info">
            {isOpen && (
              <div className="menu_item">
                <Link to="/" onClick={handleSignOut}>
                  Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>
        <div>
          <Select style={{ width: 80 }} defaultValue="Eng" onChange={handleChange}>
            <Option value="option1">ENG</Option>
            <Option value="option2">عربي</Option>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
