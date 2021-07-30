// main imports
import React, { useEffect } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Jumbotron, Wrapper, MainBody } from "../../styles/core/layout";
import { colors } from "../../styles/colors";

const Layout = ({
  title,
  description,
  quote,
  quoteAuthor,
  className,
  color = `${colors.offWhite}`,
  children,
}) => {
  // sets all components which use layout to scroll to page top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper style={{ backgroundColor: `${color}` }}>
      <Menu />
      {title || description ? (
        <div>
          <Jumbotron>
            <div>
              <h2>{title}</h2>
              <p style={{ fontSize: "20px" }}>{description}</p>
              {quote !== "undefined" ? (
                <p>"{quote}"</p>
              ) : (
                <p>Loading Quote...</p>
              )}
              {quote !== "undefined" ? (
                <p>{quoteAuthor}</p>
              ) : (
                <p>Loading Quote...</p>
              )}
            </div>
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
