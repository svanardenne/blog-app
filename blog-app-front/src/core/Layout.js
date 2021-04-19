import React from "react";
import Menu from "./Menu";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <React.Fragment>
    <Menu />
    <div className={className}>{children}</div>
  </React.Fragment>
);

export default Layout;
