import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { device } from "../styles/device";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styled components
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #f7f7f7;
  background: #161616;
  @media ${device.laptop} {
    justify-content: space-around;
  }
`;
const NavLogo = styled.div`
  flex-basis: 40%;
  text-align: center;
  @media ${device.laptop} {
    flex-basis: initial;
  }
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
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin-top: 56px;
    margin-left: 24px;
    margin-right: 24px;
    li {
      border-bottom: 1px solid rgba(76, 76, 76, 0.5);
      &:last-child {
        border-bottom: none;
      }
    }
  }
  @media ${device.laptop} {
    display: none;
  } ;
`;
const NavLinks = styled.div`
  display: none;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
  }
  @media ${device.laptop} {
    display: block;
  } ;
`;
const MenuButton = styled.div`
  flex-basis: 30%;
  cursor: pointer;
  text-align: center;
  @media ${device.laptop} {
    display: none;
  }
`;
const MenuClose = styled.div`
  color: #fff;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;
const Link = styled.div`
  text-decoration: none;
  font-size: 22px;
  color: #f7f7f7;
  display: block;
  padding: 16px 24px;
  cursor: pointer;
`;
const activeLink = {
  fontWeight: 700,
};

const Menu = () => {
  // brings the useHistory hook into the component
  const history = useHistory();

  /**
   * Handles the linking of nav items and allows the modal nav menu to
   * close before the link is made
   */
  const handleLink = (e) => {
    if (e.target.textContent !== "Home") {
      history.push(`/${e.target.textContent.toLowerCase()}`);
    } else {
      history.push("/");
    }
  };
  const handleLinkModal = (e) => {
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
      <MenuButton>
        <FontAwesomeIcon
          onClick={handleMenuClick}
          icon={["fas", "bars"]}
          size="lg"
        />
      </MenuButton>
      <NavLogo>
        <h1>Logo</h1>
      </NavLogo>
      <NavLinks>
        <ul>
          <li>
            <Link onClick={handleLink} exact activeStyle={activeLink}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleLink} activeStyle={activeLink}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link onClick={handleLink} activeStyle={activeLink}>
              Signin
            </Link>
          </li>
          <li>
            <Link onClick={handleLink}>Signout</Link>
          </li>
          <li>
            <Link onClick={handleLink} activeStyle={activeLink}>
              Signup
            </Link>
          </li>
        </ul>
      </NavLinks>
      <NavLinksModal className="nav-links-modal">
        <MenuClose>
          <FontAwesomeIcon
            onClick={handleMenuClose}
            icon={["fas", "window-close"]}
            size="lg"
          />
        </MenuClose>
        <ul>
          <li>
            <Link onClick={handleLinkModal} exact activeStyle={activeLink}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkModal} activeStyle={activeLink}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkModal} activeStyle={activeLink}>
              Signin
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkModal}>Signout</Link>
          </li>
          <li>
            <Link onClick={handleLinkModal} activeStyle={activeLink}>
              Signup
            </Link>
          </li>
        </ul>
      </NavLinksModal>
    </Nav>
  );
};

export default Menu;
