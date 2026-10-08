import React from "react";
import { Layout, Menu, Typography, Button } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Link } from "react-router";

const { Header } = Layout;
const { Title } = Typography;

function NavigationBar() {
  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "/products",
      icon: <AppstoreOutlined />,
      label: <Link to="/products">Products</Link>,
    },
    {
      key: "/cart",
      icon: <ShoppingCartOutlined />,
      label: <Link to="/cart">Cart</Link>,
    },
  ];

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "76px",
        padding: "0 60px",
        background: "#ffffff",
        borderBottom: "1px solid #eeeeee",
        display: "flex",
        alignItems: "center",
        zIndex: 1000,
      }}
    >

      {/* =========================
          LOGO
      ========================= */}

      <Link
        to="/"
        style={{
          textDecoration: "none",
          marginRight: "auto",
        }}
      >
        <Title
          level={3}
          style={{
            margin: 0,
            color: "#ed6a73",
            fontWeight: 800,
          }}
        >
          Prettier
        </Title>
      </Link>


      {/* =========================
          MENU
      ========================= */}

      <Menu
        mode="horizontal"
        items={menuItems}
        selectable={false}
        style={{
          borderBottom: "none",
          background: "transparent",
          minWidth: 360,
          justifyContent: "center",
        }}
      />


      {/* =========================
          LOGIN
      ========================= */}

      <Link
        to="/login"
        style={{
          marginLeft: 30,
        }}
      >
        <Button
          type="primary"
          icon={<LoginOutlined />}
        >
          Login
        </Button>
      </Link>

    </Header>
  );
}

export default NavigationBar;
