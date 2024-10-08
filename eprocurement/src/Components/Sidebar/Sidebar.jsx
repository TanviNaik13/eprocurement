import { useEffect, useState } from "react";
import { Button, Carousel, Layout, message, Typography } from "antd";
import { Menu } from "antd";
import "../Hero/Hero.css";

const cashew = "https://firebasestorage.googleapis.com/v0/b/eprocurement-32ba4.appspot.com/o/assets%2FOIG3.jpg?alt=media&token=9c0172d4-84f6-4791-958e-12a93fb45664";
const beach = "https://firebasestorage.googleapis.com/v0/b/eprocurement-32ba4.appspot.com/o/assets%2FGoa%2C%20India.jpg?alt=media&token=ff5ac51e-c985-4c57-95e2-453ae512fccc";
const church = "https://firebasestorage.googleapis.com/v0/b/eprocurement-32ba4.appspot.com/o/assets%2Fwhite%20and%20blue.jpg?alt=media&token=72f2fcab-84ef-41ca-8246-b1f2fc99e8e9";
const sadolxem = "https://firebasestorage.googleapis.com/v0/b/eprocurement-32ba4.appspot.com/o/assets%2FSadolxeml.jpg?alt=media&token=6844fbdb-9bd6-423a-81d5-1ed724bb79ca";

import {
  FileSearchOutlined,
  FormOutlined,
  CalendarOutlined,
  FileExcelOutlined,
  FileDoneOutlined,
  EditOutlined,
  UnlockOutlined,
  UserOutlined,
  RightOutlined,
  StarOutlined,
  MenuOutlined,
  CloseCircleOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { isAuth } from "../../authentication";

const { Header, Content, Sider } = Layout;

const Sidebar = () => {
  
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  
  const handleClick = (val) => navigate(val);
  
  const [AUTH,SETAUTH] = useState(false);
  const [isNicUser, setIsNicUser] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const f = async () => {
      const authResponse = await isAuth();
      //console.log("Auth Response:", authResponse.isAuthenticated); // Log the entire response to ensure it's as expected
      SETAUTH(authResponse.isAuthenticated);
      setIsNicUser(authResponse.isNicUser); 
      if(authResponse.userRole)
      {
        setRole(localStorage.getItem("role"));
      }
    };
  
    f();
  }, []);
  
  

  
  const func1 = (info, Icons) => {
    return (
      <>
        <Menu.Item className="menu-item" icon={<Icons />}>
          {info}
        </Menu.Item>
      </>
    );
  };

  const func2 = (info,route) => {
    return (
      <>
        <Menu.Item  onClick={() => window.location.assign(route)} className="menu-item1">{info}</Menu.Item>
        <hr className="line" />
      </>
    );
  };

  const func3 = (info) => {
    return (
      <>
        <Menu.Item className="submenu-item" icon={<RightOutlined />}>
          {info}
        </Menu.Item>
      </>
    );
  };

  const carouselItems = [
    { src: sadolxem, alt: "Image 1" },
    { src: beach, alt: "Image 2" },
    { src: cashew, alt: "Image 3" },
    { src: church, alt: "Image 4" },
  ];

  return (
    <>
      <Layout style={{ position: "relative" }}>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          className="side"
        >
          <Menu className="menu" mode="inline">
            <Button
              type="text"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuOutlined /> : <CloseCircleOutlined />}
            ></Button>
            {func1("Search", FileSearchOutlined)}
            {func1("Active Tenders", FormOutlined)}
            {func1("Tenders by closing date", CalendarOutlined)}
            {func1("Corrigendum", FileExcelOutlined)}
            {func1("Results of Tenders", FileDoneOutlined)}
            {func1("Online Bidder enrollment", EditOutlined)}
            {func1("Generate/Forgot Password", UnlockOutlined)}
            {func1("Find my Nodal Officer", UserOutlined)}

            <Menu.SubMenu
              className="menu-item"
              icon={<StarOutlined />}
              title="Quick Access"
            >
              {func3("Help for Contractors", RightOutlined)}
              <Menu.Item className="submenu-item" icon={<RightOutlined />}>
                Guidelines for Hassle
                <div>Free Bid Submissions</div>
              </Menu.Item>
              {func3("Information about DSC")}
              {func3("FAQ")}
              {func3("Feedback")}
              {func3("Builders Manual kit")}
            </Menu.SubMenu>
          </Menu>
        </Sider>

        <Layout></Layout>

        <Layout className="layout">
          <Content style={{ padding: "24px", minHeight: "280px" }}>
            <div className="title-cont">
              <Typography.Title level={2}>
                Welcome to eProcurement System
              </Typography.Title>
              <div className="title-text">
                The eProcurement System enables the Tenderers to download the
                Tender Schedule free of cost and then submit the bids online
                through this portal.
              </div>
            </div>
            <Carousel className="carousel-container" arrows infinite={false}>
              {carouselItems.map((item, index) => (
                <div className="carousel-item" key={index}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="carousel-content"
                  />
                </div>
              ))}
            </Carousel>
          </Content>
        </Layout>

        <Menu className="menu1" mode="inline">
          <Header className="head">
            <b>MENU</b>
          </Header>
          {AUTH ? (
            <Menu.Item
              className="menu-item1"
              icon={<LoginOutlined />}
              onClick={() => {
                SETAUTH(false);
                localStorage.removeItem("token");
                localStorage.removeItem("isNicUser");
                localStorage.removeItem("role");
                message.info("Sign out Successfull",4);
                window.location.href = "/";
              }}
            >
              SIGNOUT
            </Menu.Item>
          ) : (
            <Menu.Item
              className="menu-item1"
              icon={<LoginOutlined />}
              onClick={() => {
                handleClick("/login");
              }}
            >
              LOGIN
            </Menu.Item>
          )}
          
          <hr className="line" />
          
          {isNicUser && role==='creator' && func2("Create Tender", "tenders/create")}
          {isNicUser && role==='publisher' && func2("Approve Tender", "tenders/approve")}
          {func2("Tenders by location","tenders/location")}
          {func2("Tenders by Organisation","tenders/organisation")}
          {func2("Tenders by Classification","tenders/classification")}
          {func2("Tenders in Archive","tenders/archive")}
          {func2("Tenders Status","/tenders/status")}
          {func2("Cancelled/Retendered","/tenders/current")}
          {func2("Downloads","/tenders/downloads")}
          {func2("Announcements","/tenders/announcements")}
          {func2("Awards","/tenders/awards")}
          {func2("Site Compatability","/tenders/site")}
        </Menu>
      </Layout>
    </>
  );
};

export default Sidebar;
