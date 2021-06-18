import React from "react";
import Layout from "./Layout";
import backgroundImg from "../assets/images/jr-korpa-4GUhXYfabvs-unsplash.jpg";
import styled from "styled-components";
import { colors } from "../styles/colors";

const Headline = styled.div`
  margin-top: 100px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.25) 100%
    ),
    url(${backgroundImg}) center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  color: ${colors.offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    padding-left: 24px;
    padding-right: 24px;
  }
  h1 {
    font-size: 48px;
    margin: 0 0 10px 0;
  }
  p {
    font-size: 28px;
    margin: 0;
  }
`;

const About = styled.div`
  background-color: ${colors.bgBlue};
  color: ${colors.offWhite};
  text-align: center;
  padding: 40px 24px 40px 24px;
  h4 {
    font-size: 28px;
    font-weight: 400;
    margin: 0 0 24px 0;
  }
  span {
    font-size: 18px;
  }
`;

const Home = () => (
  <Layout>
    <Headline style={{ textAlign: "center" }}>
      <div>
        <h1>Creative Misgivings</h1>
        <p>
          <span>Strive to Create... When You are Full of Doubts</span>
        </p>
      </div>
    </Headline>
    <About>
      <h4>Hello, Dear Reader</h4>
      <p>
        <span>
          {" "}
          Welcome to Creative Misgivings, my never-ending uphill battle against
          imposter-syndrome and employed adult life to become the creative soul
          my 10-year-old self wanted to become! You can call me Creative Miss,
          the artistic alter-ego of a pretty normal woman. I love to write,
          draw, paint, bake, garden, and in general, create! I'm hoping, with
          your help, Dear Reader, to work through my own misgivings to create
          more and gain some courage to share it with the world. Currently
          you'll only find a blog, but as I create more, this experiment will
          grow with me.{" "}
        </span>
      </p>
    </About>
  </Layout>
);

export default Home;
