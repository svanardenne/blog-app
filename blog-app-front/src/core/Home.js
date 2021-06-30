import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Card from "./Card";
import backgroundImg from "../assets/images/jr-korpa-4GUhXYfabvs-unsplash.jpg";
import styled from "styled-components";
import { colors } from "../styles/colors";
import moment from "moment";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getPosts } from "./apiCore";

const Headline = styled.header`
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
  @media (min-width: 768px) {
    h1 {
      font-size: 72px;
    }
  }
  @media (min-width: 1280px) {
    h1 {
      font-size: 96px;
    }
  }
`;

const About = styled.section`
  background-color: ${colors.bgBlue};
  color: ${colors.offWhite};
  text-align: center;
  padding: 40px 24px 40px 24px;
  h4 {
    font-size: 28px;
    font-weight: 400;
    margin: 0 0 24px 0;
  }
  p {
    margin: 0 auto;
  }
  span {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    padding: 56px 24px 56px 24px;
    p {
      max-width: 83.33333333333334%;
    }
  }
  @media (min-width: 1024px) {
    p {
      width: 600px;
      max-width: 66.66666666666666%;
    }
  }
  @media (min-width: 1536px) {
    span {
      font-size: 20px;
    }
  }
`;

const Projects = styled.section`
  text-align: center;
  background-color: ${colors.muted};
  padding: 40px 0 0 0;
  h2 {
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 40px;
    color: ${colors.offWhite};
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 48px;
    }
  }
  @media (min-width: 1280px) {
    h2 {
      font-size: 62px;
    }
  }
`;

const ProjectCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10%;
  margin: 0 48px 0 48px;
`;

const Info = styled.section`
  text-align: center;
  color: ${colors.offWhite};
  background-color: ${colors.dark};
  padding: 40px 24px 40px 24px;
  h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 40px;
    margin: 0 0 24px 0;
  }
  a {
    color: ${colors.offWhite};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    padding: 20px 32px 20px 32px;
    background-color: ${colors.bgBlue};
  }
  p {
    margin: 0 auto 48px;
  }
  span {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    padding: 56px 24px 56px 24px;
    h4 {
      font-size: 48px;
    }
    p {
      max-width: 83.33333333333334%;
    }
  }
  @media (min-width: 1024px) {
    p {
      width: 600px;
      max-width: 66.66666666666666%;
    }
  }
  @media (min-width: 1280px) {
    h4 {
      font-size: 62px;
    }
  }
  @media (min-width: 1536px) {
    span {
      font-size: 18px;
    }
  }
`;

const Contact = styled.section`
  text-align: center;
  color: ${colors.offWhite};
  background-color: ${colors.bgBlue};
  padding: 56px 0 56px 0;
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin: 0 0 40px 0;
  }
  div {
    display: flex;
    justify-content: center;
    a {
      width: 56px;
      height: 48px;
      svg {
        width: 40px !important;
        height: 40px;
      }
    }
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 38px;
    }
    div {
      a {
        width: 72px;
      }
    }
  }
  @media (min-width: 1024px) {
    div {
      a {
        width: 96px;
        height: 56px;
        svg {
          width: 48px !important;
          height: 48px;
        }
      }
    }
  }
  @media (min-width: 1280px) {
    h2 {
      font-size: 44px;
    }
  }
  @media (min-width: 1536px) {
    h2 {
      font-size: 48px;
    }
  }
`;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);
  const [carousel, setCarousel] = useState(true);

  const loadPosts = () => {
    getPosts("desc", "createdAt", "3").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  const cardFormat = () => {
    if (window.innerWidth >= 1024) {
      setCarousel(false);
    } else if (window.innerWidth < 1024) {
      setCarousel(true);
    }
  };

  useEffect(() => {
    loadPosts();
    cardFormat();
    window.addEventListener("resize", () => {
      cardFormat();
    });
  }, []);

  const headline = () => (
    <Headline style={{ textAlign: "center" }}>
      <div>
        <h1>Creative Misgivings</h1>
        <p>
          <span>Strive to Create... When You are Full of Doubts</span>
        </p>
      </div>
    </Headline>
  );

  const about = () => (
    <About id="about">
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
      <br />
      <p>
        <span>Won't you come along? Let's see where this leads... </span>
      </p>
    </About>
  );

  const projectsDisplay = () => (
    <Projects id="projects">
      <h2>The Journey</h2>
      {carousel ? (
        <Carousel showThumbs={false} showStatus={false}>
          {posts.map((post, i) => (
            <Card post={post} key={i} />
          ))}
        </Carousel>
      ) : (
        <ProjectCards>
          {posts.map((post, i) => (
            <Card post={post} key={i} />
          ))}
        </ProjectCards>
      )}
    </Projects>
  );

  const info = () => (
    <Info>
      <h4>The Promises</h4>
      <p>
        <span>
          In order to hold myself accountable, I have made some promises to
          myself, and to you, Dear Reader, that will guide me through this
          journey.
        </span>
      </p>
      <Link to="/the-promises">I Promise...</Link>
    </Info>
  );

  const contact = () => (
    <Contact>
      <h2>Connect With Me</h2>
      <div>
        <a>
          <FontAwesomeIcon icon={["fab", "facebook-square"]} />
        </a>
        <a>
          <FontAwesomeIcon icon={["fab", "twitter-square"]} />
        </a>
        <a>
          <FontAwesomeIcon icon={["fab", "instagram-square"]} />
        </a>
      </div>
    </Contact>
  );

  return (
    <Layout>
      {headline()}
      {about()}
      {projectsDisplay()}
      {info()}
      {contact()}
    </Layout>
  );
};

export default Home;
