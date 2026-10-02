import React from "react";

const NavigationBar = () => {
  const myStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "76px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 60px",
    backgroundColor: "white",
    borderBottom: "1px solid #eeeeee",
    zIndex: 9999,
  };

  const logoStyle = {
    color:"pink",
    fontSize: "30px",
    fontWeight: "800",
  };

  const linksStyle = {
    display: "flex",
    alignItems: "center",
    gap: "40px",
  };
  const linkStyle = {
    textDecoration: "none",
    color: "#222",
    fontSize: "16px",
  };
  return (
    <nav style={myStyle}>
      <div style={logoStyle}>Prettier</div>

      <div style={linksStyle}>
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/products" style={linkStyle}>Product </a>
        <a href="/cart" style={linkStyle}> Cart </a>
        <a href="/login" style={linkStyle}> Login </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
