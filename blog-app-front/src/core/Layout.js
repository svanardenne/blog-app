import React, { useEffect } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import styled from "styled-components";
import { colors } from "../styles/colors";

const Jumbotron = styled.div`
  height: 200px;
  margin-top: 0;
  margin-bottom: 32px;
  background: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainBody = styled.div`
  margin-top: 100px;
  margin-bottom: 136px;
`;

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
