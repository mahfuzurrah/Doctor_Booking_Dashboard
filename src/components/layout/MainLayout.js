import { Button, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import "./Navbar.css";
import Topbar from "./Topbar";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mainMenuItems = [
    {
      key: "dashboard",
      icon: <RxDashboard />,
      label: "Dashboard",
    },
    {
      key: "patients",
      icon: <FiUsers />,
      label: "Patients",
    }
  ];

  const [toggleBar, setToggleBar] = useState(false);
  const [activeItem, setActiveItem] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    setActiveItem(currentPath || "dashboard");
  }, [location.pathname]);

  const handleMenuItemClick = (itemKey) => {
    setActiveItem(itemKey);
    navigate(`/${itemKey}`);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        className={toggleBar ? "hide_side_navbar" : "side_navbar"}
      >
        <div className="demo-logo-vertical logo">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="side_bar_menu_list">
          <div className="sidebar_top">
            <Menu theme="dark" mode="inline" selectedKeys={[activeItem]}>
              {mainMenuItems.map((menuItem) => (
                <Menu.Item
                  key={menuItem.key}
                  icon={menuItem.icon}
                  onClick={() => handleMenuItemClick(menuItem.key)}
                >
                  {menuItem.label}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </div>
      </Sider>
      <Layout className={toggleBar ? "hide_body_layout" : "body_layout"}>
        <Header
          className="fixed-header"
          style={{
            padding: 0,
            minHeight: 65,
          }}
        >
          <Button
            type="text"
            className="header_toggle_btn"
            icon={
              toggleBar ? (
                <BiX className="icons" />
              ) : (
                <BiMenu className="icons" />
              )
            }
            onClick={() => setToggleBar(!toggleBar)}
          />
          <Topbar />
        </Header>
        <Content
          className="body_content"
          style={{
            margin: "24px 24px",
            padding: 24,
            minHeight: 100,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
