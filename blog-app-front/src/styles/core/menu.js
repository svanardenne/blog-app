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
  font-size: 22px;
  color: ${colors.offWhite};
  display: block;
  padding: 16px 24px;
  cursor: pointer;
`;
export const NavLinkItem = styled.li`
  a {
    text-decoration: none;
    font-size: 22px;
    color: ${colors.offWhite};
    display: block;
    padding: 16px 24px;
    cursor: pointer;
  }
`;
export const activeLink = {
  fontWeight: 700,
};
