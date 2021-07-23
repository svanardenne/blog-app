import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../styles/device";

const FooterSection = styled.section`
  padding: 56px 0 56px 0;
  text-align: center;
  color: ${colors.offWhite};
  background-color: ${colors.dark};
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 136px;
  span {
    font-size: 14px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media ${device.desktopS} {
    span {
      font-size: 16px;
    }
  }
`;

const Footer = () => {
  // Gets the year for the footer
  const getYear = () => {
    const year = new Date();
    return year.getFullYear();
  };

  return (
    <FooterSection>
      <div>
        <span>
          Copyright © {getYear()} Creative Misgivings - All Rights Reserved.
        </span>
      </div>
    </FooterSection>
  );
};

export default Footer;
