// main imports
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
} from "../../styles/core/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../styles/colors";

const Menu = () => {
  // brings the useHistory hook into the component
  const history = useHistory();

  // state
  const [menuPopupJourney, setMenupopupJourney] = useState(false);
  const [menuPopupUser, setMenupopupUser] = useState(false);

  /**
   * Handles the linking of nav items and allows the modal nav menu to
   * close before the link is made
   */
  const handleLinkModal = (e) => {
    e.preventDefault();
    const mobileLinks = document.querySelector(".nav-links-modal");
    mobileLinks.style.width = "0";
    if (e.target.textContent.split(" ").length > 1) {
      const navString = e.target.textContent.split(" ").join("_");
      setTimeout(() => {
        history.push(`/${navString.toLowerCase()}`);
      }, 500);
    } else if (e.target.textContent === "Dashboard") {
      if (isAuthenticated() && isAuthenticated().user.isAdmin === true) {
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

  // handles dropdown menu on full screen nav
  const handleDropdownJourney = (index) => {
    const dropdown = document.getElementsByClassName("dropdown")[index];
    if (menuPopupJourney === false) {
      setMenupopupJourney(true);
      dropdown.style.opacity = 1;
    } else {
      setMenupopupJourney(false);
      dropdown.style.opacity = 0;
    }
  };

  const handleDropdownUser = (index) => {
    const dropdown = document.getElementsByClassName("dropdown-user")[index];
    if (menuPopupUser === false) {
      setMenupopupUser(true);
      dropdown.style.opacity = 1;
    } else {
      setMenupopupUser(false);
      dropdown.style.opacity = 0;
    }
  };

  // handles dropdown menu inside modal view
  const handleDropdownJourneyModal = (index) => {
    const dropdown = document.getElementsByClassName("dropdown")[index];
    if (menuPopupJourney === false) {
      setMenupopupJourney(true);
      dropdown.style.height = "112px";
    } else {
      setMenupopupJourney(false);
      dropdown.style.height = 0;
    }
  };

  const handleDropdownUserModal = (index) => {
    const dropdown = document.getElementsByClassName("dropdown-user")[index];
    if (menuPopupUser === false) {
      setMenupopupUser(true);
      dropdown.style.height = "112px";
    } else {
      setMenupopupUser(false);
      dropdown.style.height = 0;
    }
  };

  // non-modal nav links
  const navLinks = () => (
    <NavLinks>
      <ul>
        <NavLinkItem>
          <NavLink exact to="/" activeStyle={activeLink}>
            Home
          </NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <Dropdown>
            <DropdownButton onClick={() => handleDropdownJourney(0)}>
              The Journey
            </DropdownButton>
            <DropdownItems className="dropdown">
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
          </Dropdown>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink exact to="/the_promises" activeStyle={activeLink}>
            The Promises
          </NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink exact to="/about" activeStyle={activeLink}>
            About
          </NavLink>
        </NavLinkItem>
        {isAuthenticated() && isAuthenticated().user.isAdmin === true ? (
          <NavLinkItem>
            <Dropdown>
              <DropdownButton onClick={() => handleDropdownUser(0)}>
                Hello {isAuthenticated().user.name}
              </DropdownButton>
              <DropdownItems className="dropdown-user">
                {isAuthenticated() &&
                isAuthenticated().user.isAdmin === true ? (
                  <NavLink
                    to="/admin/dashboard"
                    activeStyle={activeLink}
                    style={{
                      textTransform: "capitalize",
                      color: `${colors.mutedLight}`,
                    }}
                  >
                    Dashboard
                  </NavLink>
                ) : null}
                {isAuthenticated() ? (
                  <div>
                    <MenuLink
                      style={{
                        textTransform: "capitalize",
                        color: `${colors.mutedLight}`,
                      }}
                      onClick={clickSignout}
                    >
                      Signout
                    </MenuLink>
                  </div>
                ) : null}
              </DropdownItems>
            </Dropdown>
          </NavLinkItem>
        ) : null}
      </ul>
    </NavLinks>
  );

  // modal nav links when on mobile display
  const navLinksModal = () => (
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
          <NavLink
            onClick={handleLinkModal}
            exact
            to="/"
            activeStyle={activeLinkModal}
          >
            Home
          </NavLink>
        </li>
        <li>
          <Dropdown>
            <DropdownModalButton onClick={() => handleDropdownJourneyModal(1)}>
              The Journey
            </DropdownModalButton>
            <DropdownItemsModal className="dropdown">
              <NavLink
                onClick={handleLinkModal}
                exact
                to="/the_journey"
                activeStyle={activeLinkModal}
              >
                The Journey
              </NavLink>
              <NavLink
                onClick={handleLinkModal}
                exact
                to="/doodles_and_dawdles"
                activeStyle={activeLinkModal}
              >
                Doodles and Dawdles
              </NavLink>
            </DropdownItemsModal>
          </Dropdown>
        </li>
        <li>
          <NavLink
            onClick={handleLinkModal}
            to="/the_promises"
            activeStyle={activeLinkModal}
          >
            The Promises
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleLinkModal}
            to="/about"
            activeStyle={activeLinkModal}
          >
            About
          </NavLink>
        </li>
        {isAuthenticated() && isAuthenticated().user.isAdmin === true ? (
          <li>
            <Dropdown>
              <DropdownModalButton onClick={() => handleDropdownUserModal(1)}>
                Hello {isAuthenticated().user.name}
              </DropdownModalButton>
              <DropdownItemsModal className="dropdown-user">
                {isAuthenticated() &&
                isAuthenticated().user.isAdmin === true ? (
                  <NavLink
                    onClick={handleLinkModal}
                    to="/admin/dashboard"
                    activeStyle={activeLinkModal}
                  >
                    Dashboard
                  </NavLink>
                ) : null}
                {isAuthenticated() ? (
                  <MenuLink onClick={clickSignout}>Signout</MenuLink>
                ) : null}
              </DropdownItemsModal>
            </Dropdown>
          </li>
        ) : null}
      </ul>
    </NavLinksModal>
  );

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
      {navLinks()}
      {navLinksModal()}
    </Nav>
  );
};

export default Menu;
