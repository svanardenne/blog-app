import styled from "styled-components";
import { device } from "../device";
import { colors } from "../colors";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.offWhite};
  background: ${colors.dark};
  z-index: 1000;
  height: 100px;
  @media ${device.laptopS} {
    justify-content: space-around;
  }
`;
export const NavLogo = styled.div`
  flex-basis: 40%;
  text-align: center;
  @media ${device.laptopS} {
    flex-basis: initial;
  }
`;
export const NavLinksModal = styled.div`
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
  a {
    background-color: transparent;
    color: ${colors.offWhite};
    text-transform: uppercase;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    padding: 16px 24px;
  }
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
  @media ${device.laptopS} {
    display: none;
  } ;
`;
export const NavLinks = styled.div`
  display: none;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
  }
  @media ${device.laptopS} {
    display: block;
  } ;
`;
export const MenuButton = styled.div`
  flex-basis: 30%;
  cursor: pointer;
  text-align: center;
  @media ${device.laptopS} {
    display: none;
  }
`;
export const MenuClose = styled.div`
  color: ${colors.offWhite};
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;
export const MenuLink = styled.div`
  text-decoration: none;
  font-size: 18px;
  text-transform: uppercase;
  color: ${colors.offWhite};
  display: block;
  padding: 16px 24px;
  cursor: pointer;
`;
export const NavLinkItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  padding: 16px 24px;
  color: ${colors.offWhite};

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    color: ${colors.offWhite};
    display: block;
    position: relative;
    cursor: pointer;
  }
`;
export const activeLink = {
  fontWeight: 700,
  color: `${colors.menuBlue}`,
  borderBottom: `1px solid ${colors.menuBlue}`,
};

export const activeLinkModal = {
  fontWeight: 700,
  color: `${colors.offWhite}`,
};

export const DropdownButton = styled.button`
  background-color: ${colors.dark};
  color: ${colors.offWhite};
  text-transform: uppercase;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;

export const DropdownItems = styled.div`
  position: absolute;
  z-index: 10000;
  background-color: ${colors.dark};
  position: absolute;
  bottom: -100px;
  width: 270px;
  padding: 16px;
  max-height: 100px;
  a {
    padding: 4px 0 4px 0;
    border: none !important;
  }
  div {
    padding: 4px 0 4px 0;
    border: none !important;
  }
`;

export const DropdownModalButton = styled.button`
  color: ${colors.offWhite};
  background-color: transparent;
  font-size: 22px;
  border: none;
  cursor: pointer;
  padding: 16px 24px;
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownItemsModal = styled.div`
  display: block;
  background-color: transparent;
  overflow: hidden;
  a {
    text-decoration: none;
    font-size: 16px;
    color: ${colors.muted};
    display: block;
    position: relative;
    padding: 16px 24px;
    cursor: pointer;
  }
`;
