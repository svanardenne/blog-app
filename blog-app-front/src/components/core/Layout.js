// main imports
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Jumbotron, Wrapper, MainBody } from "../../styles/core/layout";
import { colors } from "../../styles/colors";
import { fetchQuote } from "../user/apiUser";

const Layout = ({
  title,
  description,
  className,
  color = `${colors.offWhite}`,
  children,
}) => {
  // state
  const [quote, setQuote] = useState("");
  const { error, setError } = useState([]);

  // fetches a random quote to display in jumbotron
  const fetchRandomQuote = () => {
    fetchQuote().then((data) => {
      if (!data || data.error) {
        setError(data.error);
      } else {
        setQuote(data);
      }
    });
  };

  // sets all components which use layout to scroll to page top on load
  useEffect(() => {
    fetchRandomQuote();
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
              {quote !== "" ? (
                <p>"{quote.content}"</p>
              ) : (
                <p>Loading Quote...</p>
              )}
              {quote !== "" ? (
                <p>
                  <i>{quote.author}</i>
                </p>
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
