import React, { useEffect } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Jumbotron, Wrapper, MainBody } from "../styles/core/layout";
import { colors } from "../styles/colors";

const Layout = ({
  title,
  description,
  className,
  color = `${colors.offWhite}`,
  children,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper style={{ backgroundColor: `${color}` }}>
      <Menu />
      {title || description ? (
        <div>
          <Jumbotron>
            <h2>{title}</h2>
            <p>{description}</p>
          </Jumbotron>
          <MainBody style={{ marginTop: "0" }} className={className}>
            {children}
          </MainBody>
        </div>
      ) : (
        <MainBody className={className}>{children}</MainBody>
      )}

      <Footer />
    </Wrapper>
  );
};

export default Layout;
