import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

import styled from "styled-components";

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

const Layout = ({ title, description, className, children }) => (
  <React.Fragment>
    <Menu />
    {title || description ? (
      <Jumbotron>
        <h2>{title}</h2>
        <p>{description}</p>
      </Jumbotron>
    ) : null}
    <div className={className}>{children}</div>
    <Footer />
  </React.Fragment>
);

export default Layout;
