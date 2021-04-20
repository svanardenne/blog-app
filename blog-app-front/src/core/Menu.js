import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styled components
const Nav = styled.nav`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const NavLinksModal = styled.div`
  position: fixed;
  top: 0;
  background: rgba(2, 2, 2, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  height: 100vh;
  width: 100vw;
  margin: 0;
  transform: translateX(-100vw);
  transition: transform 0.5s ease;
`;
const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  color: #fff;
`;
const activeLink = {
  fontWeight: 900,
};

const Menu = () => {
  const handleMenuClick = () => {
    const mobileLinks = document.querySelector(".nav-links-modal");
    mobileLinks.style.transform = "translateX(0)";
  };

  const handleMenuClose = () => {
    const mobileLinks = document.querySelector(".nav-links-modal");
    mobileLinks.style.transform = "translateX(-100vw)";
  };

  return (
    <Nav>
      <FontAwesomeIcon
        onClick={handleMenuClick}
        icon={["fas", "bars"]}
        size="2x"
        style={{ flexBasis: "30%" }}
      />
      <h1 style={{ flexBasis: "40%", textAlign: "center" }}>My Blog</h1>
      <NavLinksModal className="nav-links-modal">
        <FontAwesomeIcon
          onClick={handleMenuClose}
          icon={["fas", "window-close"]}
          style={{ color: "#fff" }}
        />
        <NavList>
          <li>
            <Link to="/" activeStyle={activeLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" activeStyle={activeLink}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/signin" activeStyle={activeLink}>
              Signin
            </Link>
          </li>
          <li>
            <Link to="/signout">Signout</Link>
          </li>
          <li>
            <Link to="/signup" activeStyle={activeLink}>
              Signup
            </Link>
          </li>
        </NavList>
      </NavLinksModal>
    </Nav>
  );
};

export default Menu;
