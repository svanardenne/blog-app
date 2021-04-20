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
  color: #f7f7f7;
  background: #161616;
`;
const NavLinksModal = styled.div`
  position: fixed;
  top: 0;
  background: rgba(22, 22, 22, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  height: 100vh;
  width: 0;
  margin: 0;
  transition: width 0.4s ease;
  overflow: hidden;
`;
const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-top: 56px;
  margin-left: 24px;
  margin-right: 24px;
`;
const NavItem = styled.li`
  border-bottom: 1px solid rgba(76, 76, 76, 0.5);
  &:last-child {
    border-bottom: none;
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  color: #f7f7f7;
  display: block;
  padding: 16px 24px;
`;
const activeLink = {
  fontWeight: 700,
};

const Menu = () => {
  const handleMenuClick = () => {
    const mobileLinks = document.querySelector(".nav-links-modal");
    mobileLinks.style.width = "100vw";
  };

  const handleMenuClose = () => {
    const mobileLinks = document.querySelector(".nav-links-modal");
    mobileLinks.style.width = "0";
  };

  return (
    <Nav>
      <FontAwesomeIcon
        onClick={handleMenuClick}
        icon={["fas", "bars"]}
        size="lg"
        style={{ flexBasis: "30%" }}
      />
      <h1 style={{ flexBasis: "40%", textAlign: "center" }}>Logo</h1>
      <NavLinksModal className="nav-links-modal">
        <FontAwesomeIcon
          onClick={handleMenuClose}
          icon={["fas", "window-close"]}
          size="lg"
          style={{
            color: "#fff",
            position: "absolute",
            top: "15px",
            right: "15px",
          }}
        />
        <NavList>
          <NavItem>
            <Link to="/" activeStyle={activeLink}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/dashboard" activeStyle={activeLink}>
              Dashboard
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/signin" activeStyle={activeLink}>
              Signin
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/signout">Signout</Link>
          </NavItem>
          <NavItem>
            <Link to="/signup" activeStyle={activeLink}>
              Signup
            </Link>
          </NavItem>
        </NavList>
      </NavLinksModal>
    </Nav>
  );
};

export default Menu;
