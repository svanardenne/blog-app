import React from "react";
import { useHistory } from "react-router-dom";
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
const Link = styled.div`
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
  // brings the useHistory hook into the component
  const history = useHistory();

  /**
   * Handles the linking of nav items and allows the nav menu to
   * close before the link is made
   */
  const handleLink = (e) => {
    const mobileLinks = document.querySelector(".nav-links-modal");
    mobileLinks.style.width = "0";
    if (e.target.textContent !== "Home") {
      setTimeout(() => {
        history.push(`/${e.target.textContent.toLowerCase()}`);
      }, 500);
    } else {
      setTimeout(() => {
        history.push("/");
      }, 500);
    }
  };

  // Handles the opening of nav menu
  const handleMenuClick = () => {
    const mobileLinks = document.querySelector(".nav-links-modal");
    mobileLinks.style.width = "100vw";
  };

  // Handles the closing of the nav menu
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
            <Link onClick={handleLink} exact activeStyle={activeLink}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={handleLink} activeStyle={activeLink}>
              Dashboard
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={handleLink} activeStyle={activeLink}>
              Signin
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={handleLink}>Signout</Link>
          </NavItem>
          <NavItem>
            <Link onClick={handleLink} activeStyle={activeLink}>
              Signup
            </Link>
          </NavItem>
        </NavList>
      </NavLinksModal>
    </Nav>
  );
};

export default Menu;
