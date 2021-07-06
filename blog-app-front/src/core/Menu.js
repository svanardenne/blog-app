import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { isAuthenticated, signout } from "../auth";
import {
  Nav,
  NavLogo,
  NavLinksModal,
  NavLinks,
  NavLinkItem,
  MenuButton,
  MenuClose,
  MenuLink,
  activeLink,
} from "../styles/core/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  // brings the useHistory hook into the component
  const history = useHistory();

  /**
   * Handles the linking of nav items and allows the modal nav menu to
   * close before the link is made
   */
  const handleLink = (e) => {
    if (e.target.textContent === "Dashboard") {
      if (isAuthenticated() && isAuthenticated().user.isAdmin == true) {
        history.push(`/admin/dashboard`);
      } else {
        history.push(`/user/dashboard`);
      }
    } else if (e.target.textContent !== "Home") {
      history.push(`/${e.target.textContent.toLowerCase()}`);
    } else {
      history.push("/");
    }
  };
  const handleLinkModal = (e) => {
    const mobileLinks = document.querySelector(".nav-links-modal");
    mobileLinks.style.width = "0";
    if (e.target.textContent === "Dashboard") {
      if (isAuthenticated() && isAuthenticated().user.isAdmin == true) {
        setTimeout(() => {
          history.push(`/admin/dashboard`);
        }, 500);
      } else {
        setTimeout(() => {
          history.push(`/user/dashboard`);
        }, 500);
      }
    } else if (e.target.textContent !== "Home") {
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

  // Handles signout
  const clickSignout = () => {
    signout();
    history.push(history.location.pathname);
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
          <NavLinkItem>
            <NavLink exact to="/" activeStyle={activeLink}>
              Home
            </NavLink>
          </NavLinkItem>
          {isAuthenticated() && isAuthenticated().user.isAdmin == true ? (
            <NavLinkItem>
              <NavLink to="/admin/dashboard" activeStyle={activeLink}>
                Dashboard
              </NavLink>
            </NavLinkItem>
          ) : null}
          {isAuthenticated() && isAuthenticated().user.isAdmin == false ? (
            <NavLinkItem>
              <NavLink to="/user/dashboard" activeStyle={activeLink}>
                Dashboard
              </NavLink>
            </NavLinkItem>
          ) : null}
          {!isAuthenticated() ? (
            <NavLinkItem>
              <NavLink to="/signin" activeStyle={activeLink}>
                Signin
              </NavLink>
            </NavLinkItem>
          ) : null}
          {isAuthenticated() ? (
            <li>
              <MenuLink onClick={clickSignout}>Signout</MenuLink>
            </li>
          ) : null}
          {!isAuthenticated() ? (
            <NavLinkItem>
              <NavLink to="/signup" activeStyle={activeLink}>
                Signup
              </NavLink>
            </NavLinkItem>
          ) : null}
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
            <MenuLink onClick={handleLinkModal} exact activeStyle={activeLink}>
              Home
            </MenuLink>
          </li>
          {isAuthenticated() ? (
            <li>
              <MenuLink onClick={handleLinkModal} activeStyle={activeLink}>
                Dashboard
              </MenuLink>
            </li>
          ) : null}
          {!isAuthenticated() ? (
            <li>
              <MenuLink onClick={handleLinkModal} activeStyle={activeLink}>
                Signin
              </MenuLink>
            </li>
          ) : null}
          {isAuthenticated() ? (
            <li>
              <MenuLink onClick={clickSignout}>Signout</MenuLink>
            </li>
          ) : null}
          {!isAuthenticated() ? (
            <li>
              <MenuLink onClick={handleLinkModal} activeStyle={activeLink}>
                Signup
              </MenuLink>
            </li>
          ) : null}
        </ul>
      </NavLinksModal>
    </Nav>
  );
};

export default Menu;
