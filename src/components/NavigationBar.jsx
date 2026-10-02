// import React from "react";

// const NavigationBar = () => {
//   const myStyle = {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "76px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 60px",
//     backgroundColor: "white",
//     borderBottom: "1px solid #eeeeee",
//     zIndex: 9999,
//   };

//   const logoStyle = {
//     fontSize: "20px",
//     fontWeight: "600",
//   };

//   const linksStyle = {
//     display: "flex",
//     alignItems: "center",
//     gap: "40px",
//   };
//   const linkStyle = {
//     textDecoration: "none",
//     color: "#222",
//     fontSize: "16px",
//   };
//   return (
//     <nav style={myStyle}>
//       <div style={logoStyle}>Prettier</div>

//       <div style={linksStyle}>
//         <a href="/" style={linkStyle}>
//           Home
//         </a>
//         <a href="/products" style={linkStyle}>Product </a>
//         <a href="/cart" style={linkStyle}> Cart </a>
//         <a href="/login" style={linkStyle}> Login </a>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;
import React from 'react'
import { NavLink } from 'react-router'

const NavigationBar = () => {
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '76px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 60px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #eeeeee',
    zIndex: 9999,
  }

  const logoStyle = {
<<<<<<< HEAD
    color:"pink",
    fontSize: "30px",
    fontWeight: "800",
  };
=======
    fontSize: '20px',
    fontWeight: '600',
    color: '#000000',
    textDecoration: 'none',
  }
>>>>>>> f50f515dff16afa6e378e0789ce8b13a24ba88d5

  const linksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
  }

  const getLinkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: isActive ? '600' : '400',
    color: isActive ? '#f472b6' : '#222222',
    transition: 'color 0.2s ease',
  })

  return (
    <nav style={navStyle}>
      <NavLink to="/shop" style={logoStyle}>
        Prettier
      </NavLink>

      <div style={linksStyle}>
        <NavLink to="/shop" end style={getLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/shop/products" style={getLinkStyle}>
          Product
        </NavLink>
        <NavLink to="/shop/cart" style={getLinkStyle}>
          Cart
        </NavLink>
        <NavLink to="/login" style={getLinkStyle}>
          Login
        </NavLink>
      </div>
    </nav>
  )
}

export default NavigationBar