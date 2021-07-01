import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../styles/device";

const FooterSection = styled.section`
  padding: 56px 0 56px 0;
  text-align: center;
  color: ${colors.offWhite};
  background-color: ${colors.dark};
  span {
    font-size: 14px;
  }
  @media ${device.desktopS} {
    span {
      font-size: 16px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div>
        <span>Copyright © 2021 Creative Misgivings - All Rights Reserved.</span>
      </div>
    </FooterSection>
  );
};

export default Footer;
