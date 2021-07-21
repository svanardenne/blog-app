import React, { useState } from "react";
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
  activeLinkModal,
  DropdownButton,
  DropdownItems,
  DropdownModalButton,
  Dropdown,
  DropdownItemsModal,
} from "../styles/core/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../styles/colors";

const Menu = () => {
  // brings the useHistory hook into the component
  const history = useHistory();

  const [menuPopup, setMenupopup] = useState(false);

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

  const handleDropdown = () => {
    if (menuPopup == false) {
      setMenupopup(true);
    } else {
      setMenupopup(false);
    }
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
          <NavLinkItem>
            <Dropdown>
              <DropdownButton onClick={handleDropdown}>
                The Journey
              </DropdownButton>
              {menuPopup && (
                <DropdownItems>
                  <NavLink
                    style={{
                      textTransform: "capitalize",
                      color: `${colors.mutedLight}`,
                    }}
                    exact
                    to="/the_journey"
                    activeStyle={activeLink}
                  >
                    The Journey
                  </NavLink>
                  <NavLink
                    style={{
                      textTransform: "capitalize",
                      color: `${colors.mutedLight}`,
                    }}
                    exact
                    to="/doodles_and_dawdles"
                    activeStyle={activeLink}
                  >
                    Doodles and Dawdles
                  </NavLink>
                </DropdownItems>
              )}
            </Dropdown>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink exact to="/promises" activeStyle={activeLink}>
              The Promises
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
            <NavLink exact to="/" activeStyle={activeLinkModal}>
              Home
            </NavLink>
          </li>
          <li>
            <Dropdown>
              <DropdownModalButton onClick={handleDropdown}>
                The Journey
              </DropdownModalButton>
              {menuPopup && (
                <DropdownItemsModal>
                  <NavLink
                    exact
                    to="/the_journey"
                    activeStyle={activeLinkModal}
                  >
                    The Journey
                  </NavLink>
                  <NavLink
                    exact
                    to="/doodles_and_dawdles"
                    activeStyle={activeLinkModal}
                  >
                    Doodles and Dawdles
                  </NavLink>
                </DropdownItemsModal>
              )}
            </Dropdown>
          </li>
          <li>
            <NavLink to="/promises" activeStyle={activeLinkModal}>
              The Promises
            </NavLink>
          </li>
          {isAuthenticated() && isAuthenticated().user.isAdmin == true ? (
            <li>
              <NavLink to="/admin/dashboard" activeStyle={activeLinkModal}>
                Dashboard
              </NavLink>
            </li>
          ) : null}
          {isAuthenticated() && isAuthenticated().user.isAdmin == false ? (
            <li>
              <NavLink to="/user/dashboard">Dashboard</NavLink>
            </li>
          ) : null}
          {!isAuthenticated() ? (
            <li>
              <NavLink to="/signin" activeStyle={activeLinkModal}>
                Signin
              </NavLink>
            </li>
          ) : null}
          {isAuthenticated() ? (
            <li>
              <MenuLink onClick={clickSignout}>Signout</MenuLink>
            </li>
          ) : null}
          {!isAuthenticated() ? (
            <li>
              <NavLink to="/signup" activeStyle={activeLinkModal}>
                Signup
              </NavLink>
            </li>
          ) : null}
        </ul>
      </NavLinksModal>
    </Nav>
  );
};

export default Menu;
