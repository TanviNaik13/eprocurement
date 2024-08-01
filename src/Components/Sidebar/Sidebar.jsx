import { useState } from "react";
import { Button, Layout } from "antd";
import { Menu } from "antd";
import Hero from "../Hero/Hero";

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
import { useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleClick =(val)=> navigate(val);

  const func1 = (info, Icons) => {
    return (
      <>
        <Menu.Item className="menu-item" icon={<Icons />}>
          {info}
        </Menu.Item>
      </>
    );
  };

  const func2 = (info) => {
    return (
      <>
        <Menu.Item className="menu-item1">{info}</Menu.Item>
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

  return (
    <>
      <Layout>
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

        <Layout>
          <Content className="herocomp">
            <Hero />
          </Content>
        </Layout>

        <Menu className="menu1" mode="inline">
          <Header className="head">
            <b>MENU</b>
          </Header>
          <Menu.Item className="menu-item1" icon={<LoginOutlined />} onClick={()=>{handleClick('/login')}}>
            LOGIN
          </Menu.Item>
          <Menu.Item className="menu-item1" icon={<LoginOutlined />} onClick={()=>{handleClick('/register')}}>
            REGISTER
          </Menu.Item>
          <hr className="line" />
          {func2("Tenders by location")}
          {func2("Tenders by Organisation")}
          {func2("Tenders by Classification")}
          {func2("Tenders in Archive")}
          {func2("Tenders Status")}
          {func2("Cancelled/Retendered")}
          {func2("Downloads")}
          {func2("Announcements")}
          {func2("Debartment List")}
          {func2("Awards")}
          {func2("Site Compatability")}
        </Menu>
      </Layout>
    </>
  );
};

export default Sidebar;
