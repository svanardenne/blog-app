import React from "react";
import { FooterSection } from "../../styles/core/footer";

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
