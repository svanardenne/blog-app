import React from "react";
import { useHistory } from "react-router-dom";
import { isAuthenticated, signout } from "../auth";
import {
  Nav,
  NavLogo,
  NavLinksModal,
  NavLinks,
  MenuButton,
  MenuClose,
  Link,
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
          <li>
            <Link onClick={handleLink} exact activeStyle={activeLink}>
              Home
            </Link>
          </li>
          {isAuthenticated() ? (
            <li>
              <Link onClick={handleLink} activeStyle={activeLink}>
                Dashboard
              </Link>
            </li>
          ) : null}

          {!isAuthenticated() ? (
            <li>
              <Link onClick={handleLink} activeStyle={activeLink}>
                Signin
              </Link>
            </li>
          ) : null}
          {isAuthenticated() ? (
            <li>
              <Link onClick={clickSignout}>Signout</Link>
            </li>
          ) : null}
          {!isAuthenticated() ? (
            <li>
              <Link onClick={handleLink} activeStyle={activeLink}>
                Signup
              </Link>
            </li>
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
            <Link onClick={handleLinkModal} exact activeStyle={activeLink}>
              Home
            </Link>
          </li>
          {isAuthenticated() ? (
            <li>
              <Link onClick={handleLinkModal} activeStyle={activeLink}>
                Dashboard
              </Link>
            </li>
          ) : null}
          {!isAuthenticated() ? (
            <li>
              <Link onClick={handleLinkModal} activeStyle={activeLink}>
                Signin
              </Link>
            </li>
          ) : null}
          {isAuthenticated() ? (
            <li>
              <Link onClick={clickSignout}>Signout</Link>
            </li>
          ) : null}
          {!isAuthenticated() ? (
            <li>
              <Link onClick={handleLinkModal} activeStyle={activeLink}>
                Signup
              </Link>
            </li>
          ) : null}
        </ul>
      </NavLinksModal>
    </Nav>
  );
};

export default Menu;
